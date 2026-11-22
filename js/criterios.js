/* INSERT ART · Enlace entre actividades, indicadores de logro y criterios de evaluación (común a todos los niveles) */
(function () {
  const T = {
    es: { obj: 'Objetivo', pasos: 'Paso a paso', donde: 'Dónde', entrega: 'Entrega', evalua: 'Qué se evalúa en esta actividad', criterio: 'Criterio', enAct: 'Se evalúa en', act: 'Actividad', ils: 'Indicadores de logro que salen de este criterio:' },
    en: { obj: 'Goal', pasos: 'Step by step', donde: 'Where', entrega: 'Hand-in', evalua: 'What is assessed in this activity', criterio: 'Criterion', enAct: 'Assessed in', act: 'Activity', ils: 'Achievement indicators that come from this criterion:' },
    fr: { obj: 'Objectif', pasos: 'Étape par étape', donde: 'Où', entrega: 'Rendu', evalua: 'Ce qui est évalué dans cette activité', criterio: 'Critère', enAct: 'Évalué dans', act: 'Activité', ils: 'Indicateurs de réussite issus de ce critère :' },
    ru: { obj: 'Цель', pasos: 'Шаг за шагом', donde: 'Где', entrega: 'Сдача', evalua: 'Что оценивается в этом задании', criterio: 'Критерий', enAct: 'Оценивается в', act: 'Задание', ils: 'Показатели, которые вытекают из этого критерия:' }
  };
  const t = () => T[(window.I18N && window.I18N.lang) || 'es'] || T.es;

  /* indicadores de la rúbrica: código → [nombre, criterio] */
  const indicadores = R => {
    const m = {};
    R.bloques.forEach(([, ils]) => ils.forEach(([code, name, crit, desc]) => { m[code] = [name, crit, desc]; }));
    return m;
  };

  /* bloque «Qué se evalúa» dentro de una actividad: ils = ['IL 1.1', 'IL 1.2'…] */
  function enActividad(R, ils) {
    if (!ils || !ils.length) return '';
    const I = indicadores(R), txt = Object.fromEntries(R.criterios);
    const porCrit = {};
    ils.forEach(c => { if (I[c]) (porCrit[I[c][1]] = porCrit[I[c][1]] || []).push(`<li class="cl-il"><b>${c} · ${I[c][0]}</b><span>${I[c][2] || ''}</span></li>`); });
    const orden = R.criterios.map(c => c[0]).filter(k => porCrit[k]);
    return `<div class="crit-link"><p class="cl-t">${t().evalua}</p><ul>${orden.map(k => `
      <li><b class="cl-c">${t().criterio} ${k}</b><span class="cl-d">${txt[k] || ''}</span><span class="cl-sub">${t().ils}</span><ul class="cl-ils">${porCrit[k].join('')}</ul></li>`).join('')}</ul></div>`;
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
.crit-link .cl-sub{display:block;margin-top:8px;font-size:12px;font-weight:700;color:var(--c)}
.crit-link .cl-ils{list-style:none;margin:4px 0 0!important;padding-left:14px!important;border-left:2px solid var(--c);display:grid;gap:6px}
.act-list .crit-link .cl-il{font-size:14px}
.crit-link .cl-il b{display:block;color:#fff}
.crit-link .cl-il span{opacity:.85}
.ap-obj{font-size:18px;margin-bottom:10px!important;max-width:70ch}
.ap-obj b{color:var(--c)}
.ap-h{font-family:var(--pixel);font-size:9px;color:var(--fluor);margin:6px 0 8px!important}
.act-list ol.ap-pasos{margin:0 0 12px 0!important;padding-left:0;list-style:none;counter-reset:ap;display:grid;gap:8px;max-width:72ch}
.act-list ol.ap-pasos > li{display:grid!important;grid-template-columns:30px 1fr;column-gap:10px;padding:0!important;border:0!important;background:none!important;counter-increment:ap;margin:0!important}
.act-list ol.ap-pasos > li::before{content:counter(ap);display:grid;place-items:center;width:28px;height:28px;font-family:var(--pixel);font-size:10px;background:var(--c);color:var(--asfalto)}
.act-list ol.ap-sub{margin:6px 0 0 18px!important;padding:0;list-style:lower-alpha;display:grid;gap:4px}
.act-list ol.ap-sub > li{display:list-item!important;padding:0!important;border:0!important;background:none!important;margin:0!important}
.ap-dl{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:0 0 4px;max-width:72ch}
.ap-dl div{border:2px dashed var(--acero);padding:8px 10px}
.ap-dl dt{font-family:var(--pixel);font-size:8px;color:var(--c);margin-bottom:4px}
.ap-dl dd{margin:0;font-size:15px}
@media (max-width:700px){.ap-dl{grid-template-columns:1fr}}
.crit-list .cl-en{display:block;margin-top:6px;font-size:13px;color:var(--c)}
`;
    document.head.appendChild(st);
  }
  /* cuerpo de una actividad: texto o {obj, pasos, donde, entrega} */
  function cuerpo(d) {
    if (!d || typeof d === 'string') return `<p>${d || ''}</p>`;
    const paso = x => Array.isArray(x) ? `<li><div class="ap-t">${x[0]}<ol class="ap-sub">${x[1].map(y => `<li>${y}</li>`).join('')}</ol></div></li>` : `<li><div class="ap-t">${x}</div></li>`;
    return `<div class="ap">
      <p class="ap-obj"><b>${t().obj}:</b> ${d.obj}</p>
      <p class="ap-h">${t().pasos}</p>
      <ol class="ap-pasos">${d.pasos.map(paso).join('')}</ol>
      <dl class="ap-dl"><div><dt>${t().donde}</dt><dd>${d.donde}</dd></div><div><dt>${t().entrega}</dt><dd>${d.entrega}</dd></div></dl>
    </div>`;
  }
  window.CRIT = { enActividad, actividadesDe, cuerpo };
})();
