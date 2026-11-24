/* INSERT ART · Motor común de niveles (misión, teoría por días, actividades, recursos y rúbrica)
   Cada nivel aporta solo sus datos: NIVEL.crear({ id, ns, color, ES, DIAS, SABER, VIDEOS, ACT_IL, figs, players }) */
(function () {
  const reduce = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!document.getElementById('css-nivel')) {
    const st = document.createElement('style'); st.id = 'css-nivel';
    st.textContent = `
ul.cards3.c2{grid-template-columns:1fr 1fr}
.fig-ep{display:block;width:100%;max-width:680px;height:auto;margin:12px 0 18px}
.cual strong,.cards3 strong{font-weight:700;color:inherit}
.act-extra details{border:2px solid var(--acero);background:#141218;margin:8px 0;padding:0}
.act-extra summary{cursor:pointer;padding:10px 14px;font-weight:600;color:var(--c)}
.act-extra details[open] summary{border-bottom:1px solid var(--acero)}
.act-extra details ul{margin:10px 14px 12px 32px}
.act-extra details li{font-size:15px;margin:4px 0}
.act-extra .ex-t{margin:6px 0 4px}
ol.fases-n2.f8 em{display:none}
.act-cuad{display:inline-block;margin:2px 0 10px;padding:6px 12px;border:2px dashed var(--acero);font-weight:700;font-size:15px}
.act-cuad.si{border:2px solid var(--fluor);color:var(--fluor);background:#d6ff3a14}
.fig-geo text,.fig-tri text{font-family:var(--body);fill:#f3efe6}
.fig-geo .fg-l{font-size:13px;font-weight:600}
.fig-geo .fg-h{font-family:var(--pixel);font-size:10px;fill:var(--fluor)}
.fig-geo path,.fig-geo rect,.fig-geo circle{fill:none}
.fig-geo .fg-m{stroke:#f3efe6;stroke-width:2.4}
.fig-geo .fg-a{stroke:#f3efe6;stroke-width:1.4;opacity:.8}
.fig-geo .fg-k{fill:#ff2d6f55;stroke:var(--fucsia);stroke-width:2}
.fig-geo .fg-z{stroke:var(--fluor);stroke-width:2.4}
.fig-geo .fg-alb{fill:#d6ff3a22;stroke:none}
.fig-geo .fg-d{stroke:#f3efe6;stroke-width:1.2;stroke-dasharray:6 6;opacity:.6}
.fig-geo .fg-ld{stroke:var(--fluor);stroke-width:1;opacity:.8}
.fig-geo .fg-q{stroke:#5ad1ff;stroke-width:1.6}
.fig-geo .fg-geo{stroke:#5ad1ff;stroke-width:2.6}
.fig-geo .fg-org{fill:#ff5ad855;stroke:#ff5ad8;stroke-width:2}
.fig-geo .fg-stem{stroke:#ff5ad8;stroke-width:2.4}
.fig-geo .fg-k2{stroke:var(--fucsia);stroke-width:2}
.fig-tri .tr-t{font-family:var(--marker);font-size:22px;fill:var(--fucsia)}
.fig-tri .tr-s{font-size:14px;opacity:.85}
.fig-tri .tr-h{font-family:var(--pixel);font-size:11px;fill:var(--fluor)}
@media (max-width:700px){ul.cards3.c2{grid-template-columns:1fr}}
`;
    document.head.appendChild(st);
  }

  function crear(cfg) {
    const { id, ns, color = 'var(--rosa)', ES, DIAS, SABER = {}, VIDEOS = {}, ACT_IL = [], figs = {}, players = {} } = cfg;
    window[ns] = window[ns] || {};
    const TR = () => window[ns][window.I18N.lang] || null;
    const L = s => { const d = TR(); return (d && d.t && d.t[s]) || s; };
    const pick = k => Object.assign({}, ES[k], (TR() && TR()[k]) || {});
    const ui = () => pick('ui');
    const ORDEN = DIAS.flatMap(d => d[0]);
    const KEY = 'insertart-' + id + '-cotejo';

    /* ---------- vídeos ---------- */
    const ytLink = ([t, vid, dur, canal]) => `<li><a href="https://www.youtube.com/watch?v=${vid}" target="_blank" rel="noopener noreferrer" title="${ui().abreYT}"><span class="v-play" aria-hidden="true">▶</span><span><b>${t}</b><small>${canal} · ${dur}</small></span></a></li>`;
    const bloqueVideos = k => VIDEOS[k] ? `<div class="videos"><p>${ui().verMas}</p><ul>${VIDEOS[k].map(ytLink).join('')}</ul></div>` : '';

    /* ---------- teoría ---------- */
    const h = {
      L,
      cuaderno: s => `<p class="manual-tip"><b>${ui().cuadernoLabel}</b> ${s}</p>`,
      fig: (n, ...a) => figs[n] ? figs[n](L, ...a) : '',
      player: n => (players[n] && window.GEO) ? window.GEO.player(players[n](L)) : ''
    };
    function secciones() {
      const sec = (TR() && TR().sec) || {};
      return Object.fromEntries(ORDEN.map(k => { const x = sec[k] || ES.sec[k]; return [k, [x[0], x[1](h)]]; }));
    }
    const teoria = {
      html() {
        const S = secciones(), U = ui(), A = pick('act').acts;
        let n = 0; const num = {}; ORDEN.forEach(k => num[k] = String(++n).padStart(2, '0'));
        return `
        <div class="teoria" style="--c:${color}">
          <nav class="toc" aria-label="${U.tocAria}">
            <p class="toc-t">${U.indice}</p>
            ${DIAS.map(([ids], d) => `<p class="toc-dia">${U.diaK} ${d + 1}</p>${ids.map(k => `<button type="button" data-go="${k}"><span>${num[k]}</span>${S[k][0]}</button>`).join('')}`).join('')}
          </nav>
          <div class="doc">
            <p class="dias-intro">${U.diasIntro}</p>
            ${DIAS.map(([ids, acts], d) => `
            <section class="dia" aria-labelledby="${id}-dia-${d + 1}">
              <header class="dia-h"><span class="dia-k">${U.diaK} ${d + 1}</span><h2 id="${id}-dia-${d + 1}">${U.dias[d]}</h2></header>
              <div class="dia-meta"><span class="dia-min">⏱ ${U.minutos}</span><span>${U.prepara}:</span>${acts.map(a => `<button type="button" class="dia-act" data-act="${a}">${U.actK} ${a + 1} · ${A[a][0]}</button>`).join('')}</div>
              ${ids.map(k => `
              <section class="tsec" id="t-${k}">
                <h2><span class="sn">${num[k]}</span>${S[k][0]}</h2>
                ${SABER[k] ? `<p class="saberes"><span class="saber-k">${U.saberK}</span>${SABER[k].map(s => `<span>${s}</span>`).join('')}</p>` : ''}
                ${S[k][1]}
                ${bloqueVideos(k)}
              </section>`).join('')}
            </section>`).join('')}
            <p class="v-subt">${U.subt}</p>
          </div>
        </div>`;
      },
      init(root) {
        const suave = reduce() ? 'auto' : 'smooth';
        root.querySelectorAll('[data-go]').forEach(b => b.addEventListener('click', () =>
          root.querySelector('#t-' + b.dataset.go).scrollIntoView({ behavior: suave, block: 'start' })));
        const toc = root.querySelector('.toc');
        if (toc && 'IntersectionObserver' in window) {
          const btns = Object.fromEntries([...toc.querySelectorAll('[data-go]')].map(b => [b.dataset.go, b]));
          const io = new IntersectionObserver(es => es.forEach(e => {
            if (!e.isIntersecting) return;
            const b = btns[e.target.id.slice(2)]; if (!b || b.classList.contains('on')) return;
            toc.querySelectorAll('.on').forEach(x => x.classList.remove('on')); b.classList.add('on');
            if (getComputedStyle(toc).position === 'sticky') toc.scrollTo({ top: Math.max(0, b.offsetTop - toc.clientHeight / 2 + b.offsetHeight / 2), behavior: suave });
            else toc.scrollTo({ left: Math.max(0, b.offsetLeft - toc.clientWidth / 2 + b.offsetWidth / 2), behavior: suave });
          }), { rootMargin: '-20% 0px -70% 0px' });
          root.querySelectorAll('.tsec').forEach(s => io.observe(s));
        }
        root.querySelectorAll('[data-act]').forEach(b => b.addEventListener('click', () => {
          const tab = document.querySelector('.view.on .tab[data-k="actividades"]'); if (!tab) return;
          tab.click();
          setTimeout(() => { const li = document.querySelectorAll('.view.on .act-list > li')[+b.dataset.act]; if (li) li.scrollIntoView({ behavior: suave, block: 'start' }); }, 80);
        }));
        if (window.GEO && root.querySelector('[data-player]')) window.GEO.initPlayers(root);
      }
    };

    /* ---------- misión ---------- */
    const mision = {
      html() {
        const M = pick('mision');
        return `
        <div class="mision" style="--c:${color}">
          <div class="mision-head" style="background:linear-gradient(135deg,#2a1230,#141218 60%);box-shadow:0 0 26px #ff2d6f33">
            <p class="mision-kicker" style="color:var(--fluor)">${ui().misionK}</p>
            <h2>${M.titulo}</h2>
            <p class="mision-reto">${M.reto}</p>
          </div>
          <h3>${M.fasesT}</h3>
          <ol class="fases">${M.fases.map(([t, d], i) => `<li><span class="fase-n">${i + 1}</span><b>${t}</b><span>${d}</span></li>`).join('')}</ol>
          <h3>${M.entregasT}</h3>
          <ul class="entregas">${M.entregas.map(e => `<li>${e}</li>`).join('')}</ul>
          <p class="tip">${M.pista}</p>
        </div>`;
      }
    };

    /* ---------- actividades + lista de cotejo ---------- */
    const leer = () => { try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch (e) { return []; } };
    const guardar = v => { try { localStorage.setItem(KEY, JSON.stringify(v)); } catch (e) { } };
    const actividades = {
      html() {
        const A = pick('act'), R = pick('rub'), marcadas = new Set(leer());
        return `
        <div class="acts" style="--c:${color}">
          <p class="act-intro">${A.intro}</p>
          <ol class="act-list">${A.acts.map(([t, tag, d, extra], i) => `
            <li><span class="act-n">${i + 1}</span><div><p class="act-tag">${tag}</p><h3>${t}</h3>${typeof d.cuaderno === 'boolean' ? `<p class="act-cuad${d.cuaderno ? ' si' : ''}">${d.cuaderno ? A.cuadSi : A.cuadNo}</p>` : ''}${window.CRIT ? CRIT.cuerpo(d) : ''}${extra ? `<div class="act-extra">${extra}</div>` : ''}${window.CRIT ? CRIT.enActividad(R, ACT_IL[i]) : ''}</div></li>`).join('')}</ol>
          <section class="cotejo" aria-labelledby="${id}-cotejo-t">
            <h2 id="${id}-cotejo-t">${A.cotejoT}</h2>
            <p class="cotejo-p">${A.cotejoP}</p>
            <div class="cotejo-bar"><span class="cotejo-n" aria-live="polite"></span><span class="bar"><i></i></span></div>
            ${A.grupos.map(([gt, items], g) => `
              <fieldset><legend>${gt}</legend>
                ${items.map((it, i) => `<label><input type="checkbox" data-id="${g}-${i}" ${marcadas.has(g + '-' + i) ? 'checked' : ''}><span>${it}</span></label>`).join('')}
              </fieldset>`).join('')}
            <button type="button" class="cotejo-borrar">${A.borrar}</button>
          </section>
        </div>`;
      },
      init(root) {
        const A = pick('act');
        const boxes = [...root.querySelectorAll('.cotejo input')];
        const pintar = () => {
          const n = boxes.filter(b => b.checked).length;
          root.querySelector('.cotejo-n').textContent = A.progreso(n, boxes.length);
          root.querySelector('.cotejo-bar i').style.width = (n / boxes.length * 100) + '%';
        };
        boxes.forEach(b => b.addEventListener('change', () => { guardar(boxes.filter(x => x.checked).map(x => x.dataset.id)); pintar(); if (b.checked && window.SFX) window.SFX.coin(); }));
        const del = root.querySelector('.cotejo-borrar'); let armado = false;
        del.addEventListener('click', () => {
          if (!armado) { armado = true; del.textContent = A.confirmar; setTimeout(() => { armado = false; del.textContent = A.borrar; }, 3000); return; }
          boxes.forEach(b => b.checked = false); guardar([]); pintar(); armado = false; del.textContent = A.borrar;
        });
        pintar();
      }
    };

    /* ---------- recursos: todos los vídeos por días ---------- */
    const recursos = {
      html() {
        const U = ui();
        return `
        <div class="recursos" style="--c:${color}">
          ${U.recIntro ? `<p class="act-intro">${U.recIntro}</p>` : ''}
          <section class="videos" aria-labelledby="${id}-vid-t"><h2 id="${id}-vid-t" class="sub-vid">${U.videosT}</h2><p class="v-intro">${U.videosP}</p>
            ${DIAS.map(([ids], d) => { const v = ids.flatMap(k => VIDEOS[k] || []); return v.length ? `<h3>${U.diaK} ${d + 1} · ${U.dias[d]}</h3><ul>${v.map(ytLink).join('')}</ul>` : ''; }).join('')}
            <p class="v-subt">${U.subt}</p></section>
          ${ES.enlaces ? `<section class="videos"><h2 class="sub-vid">${U.enlacesT}</h2><ul>${ES.enlaces.map(([t, url, d]) => `<li><a href="${url}" target="_blank" rel="noopener noreferrer"><span class="v-play" aria-hidden="true">↗</span><span><b>${L(t)}</b><small>${L(d)}</small></span></a></li>`).join('')}</ul></section>` : ''}
        </div>`;
      }
    };

    /* ---------- rúbrica ---------- */
    const rubrica = {
      html() {
        const R = pick('rub');
        const mapa = pick('act').acts.map((a, i) => [a[0], ACT_IL[i]]);
        return `
        <div class="rub" style="--c:${color}">
          <p class="act-intro">${R.intro}</p>
          <h2 class="rec-h">${R.criteriosT}</h2>
          <ul class="crit-list">${R.criterios.map(([k, d]) => `<li><b>${k}</b><span>${d}${window.CRIT ? CRIT.actividadesDe(R, mapa, k) : ''}</span></li>`).join('')}</ul>
          ${R.bloques.map(([bt, ils]) => `
            <h2 class="rec-h">${bt}</h2>
            ${ils.map(([code, name, crit, desc, lv]) => `
              <article class="il">
                <header><span class="il-code">${code}</span><h3>${name}</h3><span class="il-crit">${R.criterio} ${crit}</span></header>
                <p>${desc}</p>
                <ol class="lv">${lv.map((x, i) => `<li class="lv${i}"><b>${R.niveles[i]}</b><span>${x}</span></li>`).join('')}</ol>
              </article>`).join('')}`).join('')}
        </div>`;
      }
    };

    window.CONTENIDOS = window.CONTENIDOS || {};
    window.CONTENIDOS[id] = { mision, teoria, actividades, recursos, rubrica, tiene: l => l === 'es' || !!window[ns][l] };
  }

  window.NIVEL = { crear };
})();
