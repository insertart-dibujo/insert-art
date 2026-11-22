/* INSERT ART · Enlace entre actividades, indicadores de logro y criterios de evaluación (común a todos los niveles) */
(function () {
  const T = {
    es: { evalua: 'Qué se evalúa en esta actividad', criterio: 'Criterio', enAct: 'Se evalúa en', act: 'Actividad' },
    en: { evalua: 'What is assessed in this activity', criterio: 'Criterion', enAct: 'Assessed in', act: 'Activity' },
    fr: { evalua: 'Ce qui est évalué dans cette activité', criterio: 'Critère', enAct: 'Évalué dans', act: 'Activité' },
    ru: { evalua: 'Что оценивается в этом задании', criterio: 'Критерий', enAct: 'Оценивается в', act: 'Задание' }
  };
  const t = () => T[(window.I18N && window.I18N.lang) || 'es'] || T.es;

  /* indicadores de la rúbrica: código → [nombre, criterio] */
  const indicadores = R => {
    const m = {};
    R.bloques.forEach(([, ils]) => ils.forEach(([code, name, crit]) => { m[code] = [name, crit]; }));
    return m;
  };

  /* bloque «Qué se evalúa» dentro de una actividad: ils = ['IL 1.1', 'IL 1.2'…] */
  function enActividad(R, ils) {
    if (!ils || !ils.length) return '';
    const I = indicadores(R), txt = Object.fromEntries(R.criterios);
    const porCrit = {};
    ils.forEach(c => { if (I[c]) (porCrit[I[c][1]] = porCrit[I[c][1]] || []).push(`<span class="cl-il">${c} · ${I[c][0]}</span>`); });
    const orden = R.criterios.map(c => c[0]).filter(k => porCrit[k]);
    return `<div class="crit-link"><p class="cl-t">${t().evalua}</p><ul>${orden.map(k => `
      <li><b class="cl-c">${t().criterio} ${k}</b><span class="cl-d">${txt[k] || ''}</span><span class="cl-ils">${porCrit[k].join('')}</span></li>`).join('')}</ul></div>`;
  }

  /* en la rúbrica: para cada criterio, en qué actividades se evalúa. mapa = [[título actividad, [ILs]]…] */
  function actividadesDe(R, mapa, crit) {
    const I = indicadores(R);
    const acts = mapa.map(([tit, ils], i) => ils.some(c => I[c] && I[c][1] === crit) ? `${t().act} ${i + 1}: ${tit}` : null).filter(Boolean);
    return acts.length ? `<span class="cl-en">${t().enAct}: ${acts.join(' · ')}</span>` : '';
  }

  if (!document.getElementById('css-criterios')) {
    const st = document.createElement('style');
    st.id = 'css-criterios';
    st.textContent = `
.crit-link{margin-top:12px;border:2px solid var(--c);background:color-mix(in srgb,var(--c) 7%,#100f14);padding:12px 14px}
.crit-link .cl-t{font-family:var(--pixel);font-size:9px;color:var(--c);margin-bottom:8px!important}
.crit-link ul{list-style:none;margin:0!important;display:grid;gap:10px}
.act-list .crit-link li{display:block!important;padding:0!important;border:0!important;background:none!important;margin:0!important}
.crit-link .cl-c{display:inline-block;font-family:var(--pixel);font-size:9px;padding:4px 6px;background:var(--c);color:var(--asfalto);margin-bottom:4px}
.crit-link .cl-d{display:block;font-size:14px;opacity:.85;max-width:72ch}
.crit-link .cl-ils{display:flex;flex-wrap:wrap;gap:6px;margin-top:6px}
.crit-link .cl-il{font-size:13px;padding:3px 7px;border:1px solid var(--c);color:#fff}
.crit-list .cl-en{display:block;margin-top:6px;font-size:13px;color:var(--c)}
`;
    document.head.appendChild(st);
  }
  window.CRIT = { enActividad, actividadesDe };
})();
