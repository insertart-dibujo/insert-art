/* INSERT ART · Motor de figuras y construcciones animadas (SVG) */
(function () {
  const PI = Math.PI, R = d => d * PI / 180;
  const f = n => Math.round(n * 10) / 10;
  const tr = s => (typeof s === 'string' && window.GEO_L) ? window.GEO_L(s) : s;

  /* ---------- Geometría ---------- */
  const G = {
    P: (x, y) => ({ x, y }),
    add: (a, b) => ({ x: a.x + b.x, y: a.y + b.y }),
    sub: (a, b) => ({ x: a.x - b.x, y: a.y - b.y }),
    mul: (a, k) => ({ x: a.x * k, y: a.y * k }),
    len: a => Math.hypot(a.x, a.y),
    dist: (a, b) => Math.hypot(a.x - b.x, a.y - b.y),
    unit: a => { const l = Math.hypot(a.x, a.y); return { x: a.x / l, y: a.y / l }; },
    lerp: (a, b, t) => ({ x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t }),
    polar: (c, r, deg) => ({ x: c.x + r * Math.cos(R(deg)), y: c.y + r * Math.sin(R(deg)) }),
    ang: (c, p) => Math.atan2(p.y - c.y, p.x - c.x) * 180 / PI,
    perp: a => ({ x: -a.y, y: a.x }),
    /* intersección de dos circunferencias: devuelve [p1, p2] */
    cc(c1, r1, c2, r2) {
      const d = G.dist(c1, c2), a = (r1 * r1 - r2 * r2 + d * d) / (2 * d);
      const h = Math.sqrt(Math.max(0, r1 * r1 - a * a));
      const m = G.add(c1, G.mul(G.sub(c2, c1), a / d));
      const o = G.mul(G.perp(G.unit(G.sub(c2, c1))), h);
      return [G.add(m, o), G.sub(m, o)];
    },
    /* intersección de la recta p+t·d con la recta q+s·e */
    ll(p, d, q, e) {
      const den = d.x * e.y - d.y * e.x;
      const t = ((q.x - p.x) * e.y - (q.y - p.y) * e.x) / den;
      return G.add(p, G.mul(d, t));
    }
  };

  /* ---------- Primitivas SVG ---------- */
  const S = {
    seg: (a, b, c = 'g-main') => `<path class="${c}" pathLength="1" d="M${f(a.x)} ${f(a.y)}L${f(b.x)} ${f(b.y)}"/>`,
    /* recta que pasa por a y b, prolongada e1 antes de a y e2 después de b */
    line(a, b, e1 = 30, e2 = 30, c = 'g-aux') {
      const u = G.unit(G.sub(b, a));
      return S.seg(G.sub(a, G.mul(u, e1)), G.add(b, G.mul(u, e2)), c);
    },
    /* arco de a0 a a1 grados (sentido horario en pantalla) */
    arc(c, r, a0, a1, cl = 'g-arc') {
      if (a1 < a0) a1 += 360;
      const p0 = G.polar(c, r, a0), p1 = G.polar(c, r, a1);
      const large = (a1 - a0) > 180 ? 1 : 0;
      return `<path class="${cl}" pathLength="1" d="M${f(p0.x)} ${f(p0.y)}A${f(r)} ${f(r)} 0 ${large} 1 ${f(p1.x)} ${f(p1.y)}"/>`;
    },
    /* marca de compás alrededor de un punto t, con centro c */
    mark(c, t, span = 16, cl = 'g-arc') {
      const r = G.dist(c, t), a = G.ang(c, t);
      return S.arc(c, r, a - span, a + span, cl);
    },
    circ(c, r, cl = 'g-aux') {
      return `<path class="${cl}" pathLength="1" d="M${f(c.x + r)} ${f(c.y)}A${f(r)} ${f(r)} 0 1 1 ${f(c.x - r)} ${f(c.y)}A${f(r)} ${f(r)} 0 1 1 ${f(c.x + r)} ${f(c.y)}"/>`;
    },
    poly(pts, cl = 'g-res', closed = true) {
      return `<path class="${cl}" pathLength="1" d="M${pts.map(p => f(p.x) + ' ' + f(p.y)).join('L')}${closed ? 'Z' : ''}"/>`;
    },
    pt(p, label = '', dx = 8, dy = -10, cl = '') {
      return `<g class="g-pt ${cl}"><circle cx="${f(p.x)}" cy="${f(p.y)}" r="4.5"/>${label ? `<text x="${f(p.x + dx)}" y="${f(p.y + dy)}">${tr(label)}</text>` : ''}</g>`;
    },
    txt(p, s, cl = 'g-lbl', anchor = 'middle') {
      return `<text class="${cl}" x="${f(p.x)}" y="${f(p.y)}" text-anchor="${anchor}">${tr(s)}</text>`;
    },
    /* etiqueta en el centro de un segmento, desplazada en perpendicular */
    lab(a, b, s, off = 16, cl = 'g-lbl it') {
      const m = G.lerp(a, b, .5), n = G.perp(G.unit(G.sub(b, a)));
      return S.txt(G.add(m, G.mul(n, off)), s, cl);
    },
    /* marca de ángulo recto en p entre las direcciones u y v */
    ra(p, u, v, s = 14, cl = 'g-aux') {
      u = G.unit(u); v = G.unit(v);
      const a = G.add(p, G.mul(u, s)), b = G.add(G.add(p, G.mul(u, s)), G.mul(v, s)), c = G.add(p, G.mul(v, s));
      return `<path class="${cl}" pathLength="1" d="M${f(a.x)} ${f(a.y)}L${f(b.x)} ${f(b.y)}L${f(c.x)} ${f(c.y)}"/>`;
    },
    /* segmento-dato con topes, para mostrar a, b, c… */
    dato(a, b, s, cl = 'g-data') {
      const n = G.mul(G.perp(G.unit(G.sub(b, a))), 7);
      return S.seg(a, b, cl) + S.seg(G.add(a, n), G.sub(a, n), cl) + S.seg(G.add(b, n), G.sub(b, n), cl) + S.lab(a, b, s, -14);
    },
    svg(vb, inner, label) {
      return `<svg class="geo" viewBox="0 0 ${vb[0]} ${vb[1]}" role="img" aria-label="${label}">${inner}</svg>`;
    }
  };

  /* ---------- Reproductor de construcciones ---------- */
  const reduce = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
  function player(def) {
    const steps = def.steps.map((s, i) =>
      `<g class="step" data-i="${i}">${s.d.join('')}</g>`).join('');
    const list = def.steps.map((s, i) => `<li data-i="${i}">${s.t}</li>`).join('');
    const T = window.I18N.ui.p;
    const yt = def.yt ? `<a class="yt" href="${def.yt}" target="_blank" rel="noopener noreferrer">${T.video}</a>` : '';
    return `
    <figure class="player" data-player>
      <div class="screen">${S.svg(def.vb, steps, def.title)}
        <span class="counter" aria-hidden="true"></span>
      </div>
      <div class="controls">
        <button type="button" data-a="reset" aria-label="${T.reset}">⟲</button>
        <button type="button" data-a="prev" aria-label="${T.prev}">◂</button>
        <button type="button" data-a="play" class="play">${T.play}</button>
        <button type="button" data-a="next" aria-label="${T.next}">▸</button>
      </div>
      <ol class="steps-list">${list}</ol>
      <p class="now" aria-live="polite"></p>
      ${yt}
    </figure>`;
  }
  function initPlayers(root) {
    const T = window.I18N.ui.p;
    root.querySelectorAll('[data-player]').forEach(fig => {
      const groups = [...fig.querySelectorAll('g.step')];
      const items = [...fig.querySelectorAll('.steps-list li')];
      const now = fig.querySelector('.now'), counter = fig.querySelector('.counter');
      const playBtn = fig.querySelector('.play');
      let cur = -1, timer = null;
      const show = (i, animate) => {
        cur = Math.max(-1, Math.min(groups.length - 1, i));
        groups.forEach((g, k) => {
          g.classList.toggle('on', k <= cur);
          g.classList.toggle('current', k === cur);
          if (k === cur && animate && !reduce()) {
            g.classList.remove('anim'); void g.getBBox(); g.classList.add('anim');
            [...g.querySelectorAll('path')].forEach((p, n) => p.style.animationDelay = (n * .28) + 's');
            [...g.querySelectorAll('.g-pt, text')].forEach((p, n) => p.style.animationDelay = (.3 + n * .12) + 's');
          } else g.classList.remove('anim');
        });
        items.forEach((li, k) => { li.classList.toggle('done', k < cur); li.classList.toggle('cur', k === cur); });
        now.textContent = cur < 0 ? T.pulsa : `${T.paso} ${cur + 1}. ${items[cur].textContent}`;
        counter.textContent = cur < 0 ? T.listo : `${T.PASO} ${cur + 1}/${groups.length}`;
      };
      const stop = () => { clearInterval(timer); timer = null; playBtn.textContent = cur >= groups.length - 1 ? T.repetir : T.play; };
      const play = () => {
        if (cur >= groups.length - 1) show(-1);
        playBtn.textContent = T.pausa;
        show(cur + 1, true);
        timer = setInterval(() => {
          if (cur >= groups.length - 1) return stop();
          show(cur + 1, true);
        }, 2600);
      };
      fig.querySelector('.controls').addEventListener('click', e => {
        const a = e.target.closest('button')?.dataset.a; if (!a) return;
        if (a === 'play') return timer ? stop() : play();
        stop();
        if (a === 'next') show(cur + 1, true);
        if (a === 'prev') show(cur - 1, false);
        if (a === 'reset') show(-1);
        playBtn.textContent = cur >= groups.length - 1 ? T.repetir : T.play;
      });
      items.forEach((li, k) => li.addEventListener('click', () => { stop(); show(k, true); }));
      show(-1);
    });
  }

  window.GEO = { G, S, player, initPlayers };
})();
