/* INSERT ART · Expresión Artística 4.º ESO · Nivel 01 · Pócimas */
(function () {
  /* Traducciones: window.EXP4N1[lang] = { ui, sec, mision, act, rub, juego } */
  window.EXP4N1 = window.EXP4N1 || {};
  const TR = () => window.EXP4N1[window.I18N.lang] || null;
  const w = s => (TR() && TR().t && TR().t[s]) || s;
  const pick = (k, base) => Object.assign({}, base, (TR() && TR()[k]) || {});

  /* ---------- estilos propios del nivel ---------- */
  if (!document.getElementById('css-exp4n1')) {
    const st = document.createElement('style');
    st.id = 'css-exp4n1';
    st.textContent = `
.ilus{display:block;width:100%;height:auto;background:#1a1720;border:3px solid #2b2830;box-shadow:inset 0 0 40px #000a}
.ilus .tz{fill:none;stroke:#f3efe6;stroke-width:3;stroke-linecap:round;stroke-linejoin:round}
.ilus .neo{filter:drop-shadow(0 0 4px currentColor)}
.ilus text{font-family:var(--marker);font-size:22px;fill:#f3efe6}
.ilus .lbl{font-family:var(--body);font-size:15px;font-weight:500;fill:#f3efe6;opacity:.85}
.duo{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:18px 0 24px}
.duo .card{border:2px solid var(--acero);background:#17151c;padding:14px}
.duo .card h3{margin:0 0 8px;font-family:var(--marker);font-weight:400;font-size:28px;color:var(--c)}
.duo .card p{font-size:16px}
.ecuacion{display:flex;flex-wrap:wrap;align-items:center;gap:10px;margin:18px 0 22px}
.ecuacion span{padding:12px 14px;border:2px solid var(--c);background:#17151c;font-weight:700}
.ecuacion span small{display:block;font-weight:400;font-size:14px;opacity:.8}
.ecuacion b{font-family:var(--pixel);font-size:16px;color:var(--fluor)}
.linea{list-style:none;margin:20px 0 24px!important;border-left:4px solid var(--c);padding-left:0}
.linea li{position:relative;padding:4px 0 16px 26px;margin:0!important}
.linea li::before{content:"";position:absolute;left:-11px;top:9px;width:18px;height:18px;border-radius:50%;background:var(--asfalto);border:3px solid var(--fluor);box-shadow:0 0 8px var(--fluor)}
.linea b{display:block;font-family:var(--pixel);font-size:10px;color:var(--fluor);margin-bottom:4px}
.toxicos{list-style:none;display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:16px 0 22px!important;max-width:none!important}
.toxicos li{margin:0!important;padding:14px;border:2px solid #7dff9a;background:#121a14;max-width:none!important}
.toxicos .sym{display:inline-grid;place-items:center;width:54px;height:54px;border:3px solid #7dff9a;font-family:var(--pixel);font-size:16px;color:#7dff9a;box-shadow:0 0 12px #7dff9a77;margin-bottom:8px}
.toxicos b{display:block;font-size:18px}
.cual{list-style:none;display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:14px 0 22px!important;max-width:none!important}
.cual li{margin:0!important;padding:12px;border:2px solid var(--acero);background:#17151c;max-width:none!important}
.cual b{display:block;font-family:var(--marker);font-weight:400;font-size:22px;color:var(--rosa)}
.cual span{font-size:15px;opacity:.85}
.foto{margin:18px 0 26px}
.foto .marco{position:relative;display:block;max-width:520px;border:3px solid #2b2830}
.foto img{display:block;width:100%;height:auto}
.foto .marca{position:absolute;border:4px solid var(--fluor);border-radius:50%;box-shadow:0 0 14px var(--fluor),inset 0 0 14px var(--fluor);pointer-events:none;animation:latir 1.8s ease-in-out infinite}
@keyframes latir{50%{box-shadow:0 0 28px var(--fluor),inset 0 0 20px var(--fluor)}}
.foto figcaption{font-size:14px;opacity:.85;margin-top:8px;max-width:60ch}
.galeria{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin:16px 0 8px}
.galeria a{display:block;border:3px solid #2b2830;background:#100f14}
.galeria a:hover{border-color:var(--c)}
.galeria img{display:block;width:100%;height:260px;object-fit:cover;object-position:top}
.galeria span{display:block;padding:8px 10px;font-size:14px}
.ojo{border:2px solid var(--fucsia);background:#1d1016;padding:14px 16px;margin:14px 0 4px;max-width:70ch}
.ojo b{color:#ff8ab4}
.ojo ul{margin:8px 0 0 20px}
.ideas{border:2px solid var(--fluor);background:#16180a;padding:14px 16px;margin:14px 0 4px;max-width:70ch}
.ideas b{color:var(--fluor)}
.ideas ul{margin:8px 0 0 20px}
.tabla-cual{border-collapse:collapse;margin:12px 0 6px;font-size:15px}
.tabla-cual th,.tabla-cual td{border:2px solid var(--acero);padding:8px 10px;text-align:left}
.tabla-cual th{background:#1f1c25;font-weight:700}
.act-list .act-extra{margin-top:10px}
.act-list .act-extra li{display:list-item!important;padding:2px 0!important;border:0!important;background:none!important;margin:0 0 6px!important}
.act-list .act-extra .galeria a{display:block}
.juego-cta{display:inline-flex;align-items:center;gap:10px;margin-top:6px;font-family:var(--pixel);font-size:11px;color:var(--asfalto);background:var(--rosa);padding:14px 16px;box-shadow:5px 5px 0 var(--fluor);text-decoration:none}
.juego-cta:hover{transform:translate(-2px,-2px);box-shadow:7px 7px 0 var(--fluor)}

/* ---------- juego: caldero de pócimas ---------- */
.caldero{border:3px solid var(--rosa);background:#141118;padding:20px;box-shadow:0 0 26px #ff5ad833;max-width:1100px;scroll-margin-top:90px}
.caldero > h2{font-family:var(--marker);font-weight:400;font-size:clamp(32px,4.4vw,48px);color:var(--rosa);text-shadow:0 0 14px var(--rosa);line-height:1.05}
.caldero > p{max-width:70ch;margin:8px 0 16px}
.cal-grid{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,1fr);gap:22px;align-items:start}
.estante{margin-bottom:16px}
.estante h3{font-family:var(--pixel);font-size:10px;color:var(--fluor);margin-bottom:8px;font-weight:400}
.chips{display:flex;flex-wrap:wrap;gap:6px}
.chips button{display:inline-flex;align-items:center;gap:7px;padding:8px 10px;border:2px solid var(--acero);background:#0e0d12;font-size:14px}
.chips button:hover{border-color:var(--rosa)}
.chips button[aria-pressed=true]{border-color:var(--rosa);background:#2a1630;box-shadow:0 0 10px #ff5ad866}
.chips i{display:inline-block;width:14px;height:14px;border-radius:50%;border:1px solid #0008}
.chips.prohibidos button{border-style:dashed;border-color:#7dff9a88}
.chips.prohibidos button[aria-pressed=true]{border-color:#7dff9a;background:#13251a;box-shadow:0 0 10px #7dff9a66}
.medidas{display:grid;gap:8px}
.medidas label{display:grid;grid-template-columns:140px 1fr 112px;align-items:center;gap:10px;font-size:15px}
.medidas input[type=range]{accent-color:var(--rosa);width:100%}
.medidas output{font-family:var(--pixel);font-size:8px;white-space:nowrap;color:var(--fluor)}
.medidas label.off{opacity:.4}
.remover{margin-top:16px;font-family:var(--pixel);font-size:12px;padding:16px 18px;background:var(--fluor);color:var(--asfalto);box-shadow:5px 5px 0 var(--fucsia);width:100%}
.remover:hover{transform:translate(-2px,-2px);box-shadow:7px 7px 0 var(--fucsia)}
.olla-juego{display:block;width:100%;max-width:330px;margin:0 auto}
.olla-juego .liq{transition:fill .6s}
.olla-juego.hierve .bb circle{animation:burbuja 1.2s ease-in infinite;transform-box:fill-box;transform-origin:center}
.olla-juego .bb circle:nth-child(2){animation-delay:-.3s}.olla-juego .bb circle:nth-child(3){animation-delay:-.6s}.olla-juego .bb circle:nth-child(4){animation-delay:-.9s}
.resultado{border:2px solid var(--acero);background:#0f0e13;padding:14px;margin-top:12px}
.resultado .vacio{opacity:.7;font-size:15px}
.res-top{display:flex;gap:14px;align-items:center;margin-bottom:10px}
.mancha{flex:none;width:96px;height:72px;border-radius:46% 54% 40% 60% / 58% 42% 58% 42%;border:2px solid #0006;box-shadow:inset 0 0 12px #0005}
.res-top h3{font-family:var(--marker);font-weight:400;font-size:28px;line-height:1.05}
.familia{display:inline-block;margin-top:4px;font-family:var(--pixel);font-size:8px;padding:5px 7px;background:var(--rosa);color:var(--asfalto)}
.familia.seca{background:var(--fluor)}
.gotas{list-style:none;display:grid;grid-template-columns:1fr 1fr;gap:4px 14px;font-size:14px;margin:0!important}
.gotas li{display:flex;justify-content:space-between;gap:8px;margin:0!important;padding:3px 0;border-bottom:1px dashed #2f2c36}
.gotas em{font-style:normal;color:#9de7ff;letter-spacing:2px;white-space:nowrap}
.aviso-seg{margin-top:10px;font-size:14px;padding:8px 10px;border-left:4px solid var(--fucsia);background:#1d1016}
.aviso-seg p{margin:0 0 4px}
.receta{margin-top:12px;padding:14px 16px;background:#f3efe6;color:#141218;font-size:15px;border-radius:2px;box-shadow:6px 6px 0 var(--rosa)}
.receta h4{font-family:var(--marker);font-weight:400;font-size:26px;margin-bottom:4px}
.receta h5{font-size:13px;text-transform:uppercase;letter-spacing:.08em;margin:10px 0 4px;color:#8a1450}
.receta ul,.receta ol{margin:0 0 0 20px}
.receta li{margin-bottom:3px;max-width:none}
.retos{margin-top:22px;border-top:2px dashed #2f2c36;padding-top:16px}
.retos h3{font-family:var(--marker);font-weight:400;font-size:28px;color:var(--fluor);margin-bottom:8px}
.retos ol{list-style:none;display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:0!important}
.retos li{padding:10px 12px;border:2px solid var(--acero);background:#0f0e13;font-size:14px;margin:0!important;max-width:none}
.retos li b{display:block;font-size:15px;margin-bottom:2px}
.retos li.ok{border-color:var(--fluor);background:#16180a}
.retos li.ok b::before{content:"✓ ";color:var(--fluor)}
.retos-n{font-family:var(--pixel);font-size:10px;margin-bottom:10px;display:block}
.calavera{text-align:center}
.calavera svg{width:92px;height:92px;filter:drop-shadow(0 0 10px #7dff9a)}
.calavera h3{color:#7dff9a;text-shadow:0 0 10px #7dff9a}
@media (max-width:900px){.cal-grid{grid-template-columns:1fr}.retos ol{grid-template-columns:1fr 1fr}.toxicos,.cual,.galeria,.duo{grid-template-columns:1fr 1fr}.medidas label{grid-template-columns:1fr 1.3fr 100px}}
@media (max-width:560px){.caldero{padding:14px 12px}.medidas label{grid-template-columns:1fr auto}.medidas input[type=range]{grid-column:1/-1;grid-row:2}.retos ol,.toxicos,.cual,.galeria,.duo{grid-template-columns:1fr}.galeria img{height:220px}}
`;
    document.head.appendChild(st);
  }

  /* =============== ILUSTRACIONES (dibujadas en SVG) =============== */
  const svg = (vb, body, label) => `<svg class="ilus" viewBox="0 0 ${vb[0]} ${vb[1]}" role="img" aria-label="${label}">${body}</svg>`;
  const tarro = (x, y, w, h, col, nivel = .6) => `
    <rect x="${x}" y="${y + h * (1 - nivel)}" width="${w}" height="${h * nivel}" fill="${col}" opacity=".9"/>
    <path class="tz" d="M${x} ${y} V${y + h} H${x + w} V${y}"/>
    <rect x="${x - 4}" y="${y - 12}" width="${w + 8}" height="12" fill="none" stroke="#f3efe6" stroke-width="3"/>`;
  const cuenco = (cx, cy, r, col) => `
    <ellipse cx="${cx}" cy="${cy}" rx="${r * .82}" ry="${r * .22}" fill="${col}"/>
    <path class="tz" d="M${cx - r} ${cy} A${r} ${r * .8} 0 0 0 ${cx + r} ${cy} Z"/>`;

  function ilIngredientes(label) {
    return svg([700, 330], `
      <path d="M20 280 H680" stroke="#3a3742" stroke-width="6"/>
      ${cuenco(90, 230, 52, '#f2b705')}<text class="lbl" x="90" y="310" text-anchor="middle">${w('cúrcuma')}</text>
      ${cuenco(210, 230, 52, '#d2491f')}<text class="lbl" x="210" y="310" text-anchor="middle">${w('pimentón')}</text>
      ${cuenco(330, 230, 52, '#4a2c1d')}<text class="lbl" x="330" y="310" text-anchor="middle">${w('cacao')}</text>
      ${tarro(410, 150, 60, 125, '#6b4226', .7)}<text class="lbl" x="440" y="310" text-anchor="middle">${w('café')}</text>
      <g transform="translate(520 182)">
        <ellipse cx="34" cy="62" rx="38" ry="34" fill="#a3124a"/>
        <path d="M34 28 c-8 -22 -26 -30 -34 -26 M34 28 c4 -24 18 -30 30 -28" class="tz" stroke="#4f7a28"/>
        <path class="tz" d="M10 70 q24 14 48 0" opacity=".5"/>
      </g><text class="lbl" x="555" y="310" text-anchor="middle">${w('remolacha')}</text>
      <g transform="translate(610 205)">
        <ellipse cx="28" cy="38" rx="24" ry="32" fill="#f3efe6"/>
        <path class="tz" d="M28 6 a24 32 0 1 1 -0.1 0"/>
      </g><text class="lbl" x="638" y="310" text-anchor="middle">${w('huevo')}</text>
      <g transform="translate(64 40)">
        <rect x="0" y="40" width="56" height="88" rx="8" fill="#f3efe6"/>
        <path d="M14 40 v-18 h28 v18 M22 22 l6 -18 l6 18" class="tz"/>
        <text x="28" y="96" text-anchor="middle" style="font-size:18px;fill:#141218">${w('COLA')}</text>
      </g>
      <g transform="translate(170 72)">
        <rect x="0" y="0" width="70" height="16" rx="7" fill="#f3efe6" transform="rotate(-12)"/>
        <rect x="18" y="30" width="70" height="16" rx="7" fill="#f3efe6" transform="rotate(8)"/>
        <text class="lbl" x="40" y="80" text-anchor="middle">${w('tiza')}</text>
      </g>
      <g transform="translate(300 60)">
        <path d="M0 70 q60 -70 120 0" class="tz" stroke="#4f7a28"/>
        <path d="M20 66 q40 -46 80 0" fill="#4f7a28" opacity=".85"/>
        <text class="lbl" x="60" y="98" text-anchor="middle">${w('espinaca')}</text>
      </g>
      <g transform="translate(460 40)" fill="#3a3742">
        <rect x="0" y="0" width="80" height="96" rx="6" fill="#d8cfb8"/>
        <text x="40" y="56" text-anchor="middle" style="font-size:17px;fill:#141218">${w('HARINA')}</text>
      </g>
      <g class="neo" style="color:#ff5ad8"><path d="M600 60 l12 -24 l12 24 l-12 24z" fill="#ff5ad8"/><circle cx="656" cy="40" r="6" fill="#e8ff2a"/><circle cx="580" cy="110" r="5" fill="#e8ff2a"/></g>`, label);
  }

  function ilUtensilios(label) {
    return svg([700, 300], `
      <path d="M20 262 H680" stroke="#3a3742" stroke-width="6"/>
      <g transform="translate(60 120)">
        <path d="M0 40 H150 Q140 140 75 140 Q10 140 0 40 Z" fill="#3a3742" stroke="#f3efe6" stroke-width="3"/>
        <ellipse cx="75" cy="40" rx="75" ry="14" fill="#f2b705"/>
        <path d="M110 10 L60 70" stroke="#d8cfb8" stroke-width="16" stroke-linecap="round"/>
      </g>
      <text class="lbl" x="135" y="292" text-anchor="middle">${w('mortero')}</text>
      ${tarro(270, 120, 64, 130, '#a3124a', .55)}
      ${tarro(352, 150, 54, 100, '#4f7a28', .5)}
      <text class="lbl" x="338" y="292" text-anchor="middle">${w('tarros reutilizados')}</text>
      <g transform="translate(440 120)">
        <path d="M0 0 h90 l-10 22 h-70z" class="tz"/>
        <path d="M45 22 v40" class="tz"/>
        <path d="M10 6 h70" stroke="#f3efe6" stroke-width="2" stroke-dasharray="3 5"/>
      </g>
      <text class="lbl" x="485" y="292" text-anchor="middle">${w('colador')}</text>
      <g transform="translate(560 70)">
        <path d="M10 180 L40 20" stroke="#c27a3a" stroke-width="8" stroke-linecap="round"/>
        <path d="M40 20 q8 -26 -4 -40 q-14 12 -10 36z" fill="#ff5ad8" class="neo" style="color:#ff5ad8"/>
        <path d="M60 180 L80 40" stroke="#c27a3a" stroke-width="6" stroke-linecap="round"/>
        <path d="M80 40 q6 -18 -2 -30 q-10 9 -8 28z" fill="#e8ff2a"/>
        <path d="M100 180 v-120" class="tz"/><ellipse cx="100" cy="60" rx="10" ry="5" fill="#f3efe6"/>
      </g>
      <text class="lbl" x="690" y="292" text-anchor="end">${w('pinceles y cuchara')}</text>`, label);
  }

  function ilHumeda(label) {
    return svg([600, 300], `
      ${tarro(70, 80, 110, 170, '#a3124a', .62)}
      <path d="M150 40 L230 210" stroke="#c27a3a" stroke-width="9" stroke-linecap="round"/>
      <path d="M230 210 q14 30 -6 50 q-20 -18 -8 -46z" fill="#a3124a"/>
      <rect x="290" y="60" width="270" height="200" fill="#f3efe6"/>
      <path d="M320 180 C 360 110, 420 230, 470 140 S 540 150, 545 120" stroke="#a3124a" stroke-width="34" fill="none" stroke-linecap="round" opacity=".75"/>
      <path d="M330 230 C 380 200, 450 250, 530 215" stroke="#a3124a" stroke-width="20" fill="none" stroke-linecap="round" opacity=".35"/>
      `, label);
  }

  function ilSeca(label) {
    return svg([600, 300], `
      <g transform="rotate(-24 150 160)">
        <rect x="60" y="130" width="200" height="54" rx="22" fill="#f2b705"/>
        <path d="M60 157 h200" stroke="#141218" stroke-width="2" opacity=".2"/>
        <rect x="200" y="130" width="60" height="54" rx="18" fill="#e5a800"/>
      </g>
      <rect x="290" y="60" width="270" height="200" fill="#f3efe6"/>
      <g stroke="#f2b705" stroke-width="10" stroke-linecap="round" fill="none" opacity=".9">
        <path d="M315 220 L360 90 M345 230 L392 96 M375 236 L424 104 M405 240 L455 112" stroke-dasharray="3 5"/>
      </g>
      <path d="M470 150 C 500 110, 530 190, 545 130" stroke="#f2b705" stroke-width="22" fill="none" stroke-linecap="round" stroke-dasharray="2 4"/>
      `, label);
  }

  function ilResiduos(label) {
    return svg([720, 300], `
      ${tarro(60, 110, 70, 140, '#6b4226', .4)}${tarro(150, 140, 60, 110, '#f2b705', .3)}
      <text class="lbl" x="135" y="285" text-anchor="middle">${w('envases que se reutilizan')}</text>
      <g transform="translate(300 100)">
        <path d="M0 30 h120 l-12 130 h-96z" class="tz"/>
        <path d="M-6 30 h132 M44 30 v-14 h32 v14" class="tz"/>
        <path d="M30 60 l8 80 M60 60 v80 M90 60 l-8 80" class="tz" opacity=".5"/>
      </g>
      <text class="lbl" x="360" y="285" text-anchor="middle">${w('restos sólidos al contenedor')}</text>
      <g transform="translate(530 110)">
        <path d="M0 60 h130 q0 70 -65 70 q-65 0 -65 -70z" class="tz"/>
        <path d="M65 60 v-40 h34 v14" class="tz"/>
        <path d="M5 0 L125 130 M125 0 L5 130" stroke="#ff1a6e" stroke-width="8" stroke-linecap="round" class="neo" style="color:#ff1a6e"/>
      </g>
      <text class="lbl" x="595" y="285" text-anchor="middle">${w('nada por el desagüe')}</text>`, label);
  }

  /* foto del recetario con zona marcada (porcentajes) */
  const foto = (src, alt, cap, m) => `
    <figure class="foto">
      <a class="marco" href="${src}" target="_blank" rel="noopener noreferrer">
        <img src="${src}" alt="${alt}" loading="lazy">
        ${m ? `<span class="marca" style="left:${m[0]}%;top:${m[1]}%;width:${m[2]}%;height:${m[3]}%"></span>` : ''}
      </a>
      <figcaption>${cap}</figcaption>
    </figure>`;

  const IMG = {
    arte: 'img/exp4/recetario-arte-escondido.jpg',
    curry: 'img/exp4/recetario-curry-platano.jpg',
    cacao: 'img/exp4/recetario-cacao-remolacha.jpg'
  };

  /* =============== TEORÍA =============== */
  const UI_ES = {
    indice: 'Índice', tocAria: 'Índice de la teoría', cuadernoLabel: 'En tu recetario:', misionK: 'MISIÓN',
    il: {
      ingredientes: 'Ilustración: mesa con ingredientes para fabricar pinturas (cúrcuma, pimentón, cacao, café, remolacha, huevo, cola, tiza, espinaca y harina)',
      utensilios: 'Ilustración: utensilios para fabricar pinturas (mortero, tarros, colador, pinceles y cuchara)',
      humeda: 'Ilustración: tinte de remolacha en un tarro y su mancha en papel',
      seca: 'Ilustración: barra de pastel de cúrcuma y el trazo que deja en el papel',
      residuos: 'Ilustración: envases reutilizados, contenedor de restos y desagüe tachado'
    },
    recursosT: 'Juego: el caldero de pócimas', museosT: 'Para investigar (fuentes fiables)',
    museosP: 'Busca tus obras en la web oficial del museo que las conserva: allí están la fecha, la técnica y el soporte correctos.',
    jugar: '▶ Jugar al caldero de pócimas'
  };
  const ui = () => pick('ui', UI_ES);

  const ORDEN = ['familias', 'anatomia', 'soporte', 'historia', 'toxicos', 'cualidades', 'seguridad'];
  const SEC_ES = {
    familias: ['Dos familias: técnicas secas y húmedas', h => `
      <p>Todas las técnicas de dibujo y pintura pertenecen a una de estas dos familias. Saber a cuál pertenece una obra te ayuda a reconocer cómo se hizo.</p>
      <div class="duo">
        <div class="card">
          <h3>Técnicas secas</h3>
          ${h.il('seca')}
          <p>El material se aplica <b>directamente por frotamiento</b>, sin disolvente. El pigmento se queda atrapado en el grano del papel.</p>
          <p><b>Ejemplos:</b> grafito, carboncillo, sanguina, lápices de color, pastel y ceras.</p>
        </div>
        <div class="card">
          <h3>Técnicas húmedas</h3>
          ${h.il('humeda')}
          <p>El pigmento va <b>mezclado con un aglutinante y diluido</b>. Seca por evaporación, por oxidación o por reacción química.</p>
          <p><b>Ejemplos:</b> acuarela, tinta, témpera, temple, fresco, óleo y acrílico.</p>
        </div>
      </div>
      <p class="tip"><b>Truco para reconocerlas en una obra:</b> en las secas se ven el trazo y el grano del papel; en las húmedas se ven manchas, veladuras o la huella del pincel.</p>`],

    anatomia: ['Anatomía de una pintura', h => `
      <p>Cualquier pintura, desde la de las cuevas hasta la de un tubo de acrílico, se fabrica con los mismos ingredientes:</p>
      <div class="ecuacion">
        <span>Pigmento<small>da el color</small></span><b>+</b>
        <span>Aglutinante<small>pega el color al soporte</small></span><b>+</b>
        <span>Disolvente<small>la hace más fluida</small></span><b>=</b>
        <span>Pintura</span>
      </div>
      <ul>
        <li><b>Pigmento:</b> polvo de color. Puede ser mineral (tierras, carbón, tiza) o vegetal (cúrcuma, café, remolacha, espinaca…).</li>
        <li><b>Aglutinante:</b> la «cola» que une las partículas de pigmento y las fija al soporte: huevo, cola, aceite, goma, harina…</li>
        <li><b>Disolvente:</b> el líquido que permite extender la mezcla. En nuestras pócimas, el agua.</li>
      </ul>
      ${h.il('ingredientes')}
      ${h.il('utensilios')}
      ${h.cuaderno('anota siempre las cantidades de cada ingrediente (cucharadas, mililitros…). Si no hay cantidades, nadie puede repetir tu receta.')}`],

    soporte: ['La técnica decide el soporte', h => `
      <p>Cada técnica necesita un soporte que la aguante:</p>
      <ul class="cards3">
        <li><b>Mucha agua</b><span>Papel grueso que no se ondule.</span></li>
        <li><b>Pigmento en polvo</b><span>Papel con grano que lo retenga.</span></li>
        <li><b>Aceite</b><span>Soporte imprimado que proteja la fibra.</span></li>
      </ul>
      <p class="tip"><b>La norma puede transgredirse:</b> muchos artistas rompen estas reglas a propósito para conseguir efectos nuevos. Si lo haces, explica por qué.</p>`],

    historia: ['De la cueva al tubo: una historia de recetas', h => `
      <p>Durante siglos, los artistas fabricaron sus propias pinturas. Cada época tiene su receta:</p>
      <ol class="linea">
        <li><b>Prehistoria · Tierras y carbón</b>Óxidos de hierro y carbón vegetal mezclados con grasa o agua. Cueva de la Pileta, Benaoján (Málaga).</li>
        <li><b>Edad Media · Temple</b>Yema de huevo como aglutinante, sobre tablas preparadas con yeso. Retablos y tablas góticas.</li>
        <li><b>Siglos XV–XVI · Óleo y fresco</b>Los flamencos perfeccionan el óleo; el fresco cubre muros y bóvedas. Miguel Ángel, Capilla Sixtina.</li>
        <li><b>Siglo XVII · Óleo sobre lienzo</b>Escuela sevillana del Siglo de Oro: Velázquez, Murillo, Valdés Leal.</li>
        <li><b>Siglo XX · Acrílico</b>Resina sintética: seca rápido y sirve para casi cualquier soporte. Pintura mural y arte contemporáneo.</li>
      </ol>
      <p class="ojo"><b>Cuidado con las fechas.</b> Comprueba siempre el siglo de la obra en la web del museo: el antiguo Egipto no es Prehistoria, una obra de 1562 ya no es Edad Media y una obra de finales del XIX no es del siglo XX.</p>`],

    toxicos: ['Bellos colores, ingredientes tóxicos', h => `
      <p>Algunos de los colores más bonitos de la historia se fabricaban con ingredientes venenosos:</p>
      <ul class="toxicos">
        <li><span class="sym">Pb</span><b>Blanco de plomo</b>También llamado albayalde. Contiene plomo. Hoy se usa el blanco de titanio.</li>
        <li><span class="sym">Hg</span><b>Bermellón</b>Rojo intenso hecho con sulfuro de mercurio.</li>
        <li><span class="sym">As</span><b>Oropimente</b>Amarillo brillante que contiene arsénico.</li>
      </ul>
      <p><b>Hoy</b> se usan pigmentos más seguros. Aun así: lee siempre la etiqueta y no tires disolventes por el desagüe.</p>
      <h3>¿Qué es una fuente fiable?</h3>
      <p>Si dices que una obra tiene un pigmento tóxico, tienes que poder demostrarlo. Son fuentes fiables la <b>web oficial del museo</b> que conserva la obra (por ejemplo, el Museo del Prado o el MoMA), los <b>estudios técnicos</b> de restauración y las <b>publicaciones</b> de especialistas. Un comentario en redes sociales no lo es.</p>
      ${h.cuaderno('indica siempre de dónde sacas el dato: nombre de la web o del estudio.')}`],

    cualidades: ['Cualidades de una pintura', h => `
      <p>Cuando pruebas tu pócima en el papel, observa y anota estas cuatro cualidades:</p>
      <ul class="cual">
        <li><b>Transparencia</b><span>¿Deja ver el papel o lo que hay debajo?</span></li>
        <li><b>Cubrición</b><span>¿Tapa por completo lo que hay debajo?</span></li>
        <li><b>Secado</b><span>¿Cuánto tarda en secarse: minutos, horas…?</span></li>
        <li><b>Adherencia</b><span>¿Se queda pegada o se desprende al tocarla?</span></li>
      </ul>
      <div class="duo">
        ${h.foto(h.IMG.cacao, 'Página de recetario con el dibujo de un fruto de cacao pintado con cacao y café', '<b>Pintura cubriente.</b> El fruto de cacao está pintado con una pócima de cacao y café: el color es denso y no deja ver el papel.', [20, 27.5, 27, 39])}
        ${h.foto(h.IMG.curry, 'Página de recetario con la prueba de tinte de plátano', '<b>Pintura no cubriente (transparente).</b> La prueba del tinte de piel de plátano apenas tiñe: deja ver el blanco del papel.', [44, 86.4, 48, 10])}
      </div>
      ${h.cuaderno('copia esta tabla en cada receta y rellénala después de probar tu pintura.')}
      <table class="tabla-cual">
        <tr><th>Cualidad</th><th>Mi pócima</th></tr>
        <tr><td>Transparencia</td><td>alta · media · baja</td></tr>
        <tr><td>Cubrición</td><td>alta · media · baja</td></tr>
        <tr><td>Secado</td><td>rápido · medio · lento</td></tr>
        <tr><td>Adherencia</td><td>buena · regular · mala</td></tr>
      </table>`],

    seguridad: ['Seguridad y residuos', h => `
      <p>Que un ingrediente sea comida no significa que se pueda tratar como comida:</p>
      <ul>
        <li>Una vez mezclados, <b>los ingredientes no se comen ni se prueban</b>.</li>
        <li><b>Huevo:</b> lávate las manos después de usarlo. La pócima con huevo no se guarda: se estropea.</li>
        <li><b>Pimentón, curry y especias:</b> no te toques los ojos.</li>
        <li><b>Tiza y carbón en polvo:</b> no soples el polvo.</li>
        <li><b>Remolacha y cúrcuma:</b> manchan mucho; protege la ropa y la mesa.</li>
        <li>Usa ingredientes no tóxicos y sigue las normas del laboratorio que marca tu profesor.</li>
      </ul>
      ${h.il('residuos')}
      <p><b>Al terminar:</b> reutiliza tarros y envases, lava los utensilios y deja los restos sólidos en su contenedor, nunca en el desagüe.</p>`]
  };

  function construir() {
    const I = ui().il;
    const h = {
      il: k => ({ ingredientes: ilIngredientes, utensilios: ilUtensilios, humeda: ilHumeda, seca: ilSeca, residuos: ilResiduos })[k](I[k]),
      cuaderno: s => `<p class="manual-tip"><b>${ui().cuadernoLabel}</b> ${s}</p>`,
      foto, IMG
    };
    const sec = (TR() && TR().sec) || {};
    return ORDEN.map(id => { const x = sec[id] || SEC_ES[id]; return [id, x[0], x[1](h)]; });
  }

  const teoria = {
    html() {
      const S = construir();
      return `
      <div class="teoria" style="--c:var(--rosa)">
        <nav class="toc" aria-label="${ui().tocAria}">
          <p class="toc-t">${ui().indice}</p>
          ${S.map(([id, t], i) => `<button type="button" data-go="${id}"><span>${String(i + 1).padStart(2, '0')}</span>${t}</button>`).join('')}
        </nav>
        <div class="doc">
          ${S.map(([id, t, body], i) => `
            <section class="tsec" id="t-${id}">
              <h2><span class="sn">${String(i + 1).padStart(2, '0')}</span>${t}</h2>
              ${body}
            </section>`).join('')}
        </div>
      </div>`;
    },
    init(root) {
      root.querySelectorAll('[data-go]').forEach(b => b.addEventListener('click', () =>
        root.querySelector('#t-' + b.dataset.go).scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' })));
    }
  };

  /* =============== MISIÓN =============== */
  const MISION_ES = {
    titulo: 'Fabrica tus pócimas',
    reto: 'Si no pudieras comprar ningún material, ¿con qué pintarías? Durante siglos, los artistas fabricaron sus propias pinturas con lo que tenían a mano. Vuestra misión, en grupo, es <b>investigar cómo pintaban los artistas de otras épocas</b>, <b>fabricar vuestras propias pinturas</b> con ingredientes no tóxicos y recogerlo todo en un <b>recetario ilustrado</b> que cualquiera pueda seguir.',
    fasesT: 'Cómo se juega',
    fases: [
      ['Detectives', 'Investigad cinco obras de distintas épocas: con qué y sobre qué se pintaron, y qué pigmentos peligrosos se usaban.'],
      ['Laboratorio', 'Fabricad al menos dos materiales, uno de técnica seca y otro de técnica húmeda, anotando cada cantidad.'],
      ['Pruebas', 'Pintad una muestra de cada material en un soporte y anotad sus cualidades.'],
      ['Recetario', 'Dedicad una página A4 a cada material, ilustrada con vuestras propias pócimas.'],
      ['Presentación', 'Presentad el recetario a la clase y valorad vuestro trabajo y el de los demás grupos.']
    ],
    entregasT: 'Qué tenéis que entregar',
    entregas: [
      'Las <b>fichas de Detectives</b> con las cinco obras.',
      'El <b>recetario ilustrado</b>: una página A4 por material, con sus muestras.',
      'La <b>presentación oral</b> y la <b>autoevaluación</b>.'
    ],
    pista: '<b>Para practicar:</b> en la pestaña <b>Recursos</b> tienes el juego del caldero de pócimas.'
  };
  const mision = {
    html() {
      const M = pick('mision', MISION_ES);
      return `
      <div class="mision" style="--c:var(--rosa)">
        <div class="mision-head" style="background:linear-gradient(135deg,#2a1230,#141218 60%);box-shadow:0 0 26px #ff5ad833">
          <p class="mision-kicker" style="color:var(--fluor)">${ui().misionK}</p>
          <h2>${M.titulo}</h2>
          <p class="mision-reto">${M.reto}</p>
        </div>
        ${ilIngredientes(ui().il.ingredientes)}
        <h3>${M.fasesT}</h3>
        <ol class="fases">${M.fases.map(([t, d], i) => `<li><span class="fase-n">${i + 1}</span><b>${t}</b><span>${d}</span></li>`).join('')}</ol>
        <h3>${M.entregasT}</h3>
        <ul class="entregas">${M.entregas.map(e => `<li>${e}</li>`).join('')}</ul>
        <p class="tip">${M.pista}</p>
      </div>`;
    }
  };

  /* =============== ACTIVIDADES + LISTA DE COTEJO =============== */
  const ACT_ES = {
    intro: 'Trabajáis <b>en grupo</b>. Parte del trabajo va en vuestro <b>cuaderno de artista</b> y todo se entrega por la <b>tarea de Classroom</b>.',
    acts: [
      ['Detectives', 'Bloque 1', `Elegid <b>cinco obras</b>, una de cada época: <b>Prehistoria</b>, <b>Edad Media</b>, <b>siglos XV–XVI</b>, <b>siglo XVII</b> y <b>siglo XX</b>. Requisitos: al menos <b>una obra andaluza</b>; debe haber obras de <b>técnica seca y de técnica húmeda</b>; <b>no repitáis técnica</b>.
        <br>De cada obra, haced su <b>ficha técnica</b> (autor, título, fecha, técnica, soporte y dónde se conserva) y describid el <b>rasgo visual</b> que delata su técnica, su soporte y sus herramientas.
        <br>Por último, localizad un <b>pigmento tóxico</b> en alguna de vuestras obras, citad la <b>fuente fiable</b> de la que sacáis el dato y comparadlo con el pigmento que se usa hoy.`,
        `<div class="ojo"><b>Errores frecuentes en esta actividad:</b><ul>
          <li>Casi nadie eligió obras de <b>técnica seca</b>: buscad dibujos a carboncillo, sanguina, pastel…</li>
          <li><b>Fechas mal colocadas:</b> el antiguo Egipto no es Prehistoria; una obra de 1562 no es de la Edad Media; <i>Los girasoles</i> es del siglo XIX, no del XX.</li>
          <li><b>Técnica mal identificada:</b> un fresco es técnica húmeda, no seca.</li>
          <li><b>Técnicas repetidas:</b> si ya tenéis un óleo, la siguiente obra debe ser de otra técnica.</li>
          <li><b>Pigmento tóxico sin fuente:</b> sin la web del museo o un estudio técnico, el dato no vale.</li>
          <li>Cada ficha es de una obra distinta: no copiéis los datos de una ficha en otra.</li>
        </ul></div>`],
      ['Laboratorio de pócimas', 'Bloque 2', `Fabricad <b>al menos dos materiales: uno de técnica seca y otro de técnica húmeda</b>, con su pigmento, su aglutinante y su disolvente. <b>El color tiene que salir solo de vuestros ingredientes</b>: no vale mezclar pinturas compradas.
        <br>Anotad las <b>proporciones exactas</b> y, si al probar tenéis que cambiarlas, anotad también el cambio.
        <br>Pintad una <b>muestra de cada material en un soporte</b> y registrad sus cualidades: <b>transparencia, cubrición, secado y adherencia</b> (tabla en la Teoría).
        <br>Usad solo ingredientes no tóxicos, cumplid las normas del laboratorio y gestionad residuos y envases.`,
        `<div class="ojo"><b>Errores frecuentes en esta actividad:</b><ul>
          <li><b>Solo materiales húmedos:</b> casi todos los grupos hicieron tintes. Hace falta también un material seco (por ejemplo, un pastel de pigmento y tiza).</li>
          <li><b>Cantidades imprecisas:</b> «un poquito» no es una medida. Usad cucharadas, mililitros, gramos…</li>
          <li><b>Cualidades sin anotar:</b> ningún grupo anotó la transparencia, la cubrición, el secado y la adherencia de sus muestras.</li>
        </ul></div>`],
      ['Recetario ilustrado', 'Bloque 3', `Dedicad <b>una página A4 a cada material</b>. Cada página debe tener: <b>ingredientes con cantidades</b>, <b>pasos numerados e ilustrados</b>, la <b>muestra</b> del material, sus <b>cualidades</b>, las <b>precauciones de seguridad</b> y vuestras <b>conclusiones</b>. Ilustrad el recetario <b>con vuestras propias pócimas</b> y pensad en un diseño que cualquiera pueda seguir.`,
        `<div class="galeria">
          <a href="${IMG.arte}" target="_blank" rel="noopener noreferrer"><img src="${IMG.arte}" alt="Página de recetario «El arte escondido en los alimentos» con tintes de cebolla morada, espinaca, zanahoria y tomate" loading="lazy"><span>Cuatro tintes, pasos numerados y muestras de color</span></a>
          <a href="${IMG.cacao}" target="_blank" rel="noopener noreferrer"><img src="${IMG.cacao}" alt="Página de recetario con pinturas de cacao y café y de remolacha con clara de huevo" loading="lazy"><span>Ilustrado con sus propias pinturas</span></a>
          <a href="${IMG.curry}" target="_blank" rel="noopener noreferrer"><img src="${IMG.curry}" alt="Página de recetario con tintes de curry y de piel de plátano" loading="lazy"><span>Cantidades medidas en mililitros y cucharadas</span></a>
        </div>
        <div class="ideas"><b>Buenas ideas de la clase:</b><ul>
          <li>Usar <b>cola blanca</b>, <b>clara de huevo</b> o <b>harina</b> como aglutinante.</li>
          <li>Aprovechar restos: <b>cáscara de cebolla</b> y <b>piel de plátano</b>.</li>
          <li>Sacar <b>tres tonos</b> de un mismo color cambiando solo la cantidad de agua.</li>
          <li>Pintar las ilustraciones del recetario <b>con las propias pócimas</b>.</li>
        </ul></div>
        <div class="ojo"><b>Lo que más ha faltado:</b> las cantidades, las cualidades de cada muestra, la seguridad y las conclusiones.</div>`],
      ['Presentación y autoevaluación', 'Bloque 3', `Presentad vuestro recetario a la clase: explicad el <b>proceso</b>, las <b>dificultades</b> que encontrasteis y los <b>logros</b>. Después, <b>valorad vuestro trabajo y el de los otros grupos</b> con argumentos y respeto, en el formulario que os dará vuestro profesor.`, `<div class="ideas"><b>Exposición guiada: vuestro profesor os hará estas cinco preguntas:</b><ol style="margin:8px 0 0 20px"><li><b>¿Cómo lo habéis hecho?</b> Contad los pasos que seguisteis, desde la investigación de Detectives hasta el recetario terminado. <span class="il-crit">Criterio 4.2</span></li><li><b>¿Qué os costó más y cómo lo resolvisteis?</b> Por ejemplo, una receta que no funcionó a la primera o una pintura que no se pegaba al papel. <span class="il-crit">Criterio 4.2</span></li><li><b>¿De qué estáis más orgullosos y qué cambiaríais si lo repitierais?</b> <span class="il-crit">Criterio 4.2</span></li><li><b>¿Qué profesiones o estudios trabajan con lo que habéis hecho?</b> Por ejemplo, la restauración de obras de arte, la conservación en museos, la ilustración, el diseño o la química de materiales. ¿Os interesaría alguna? <span class="il-crit">Criterio 4.3</span></li><li><b>¿Para qué os sirve a vosotros, fuera de clase, saber fabricar vuestros propios materiales con ingredientes naturales y sin generar residuos?</b> Dad vuestra opinión y justificadla. <span class="il-crit">Criterio 4.3</span></li></ol><p style="margin-top:8px">Preparad las respuestas en grupo antes de la exposición.</p></div>`]
    ],
    cotejoT: 'Lista de cotejo: ¿cómo vais?',
    cotejoP: 'Marca lo que ya tienes hecho. Las marcas se guardan solo en este dispositivo. Cuando tu profesor te lo pida, <b>haz una captura de pantalla de esta lista y súbela a la tarea de Classroom</b>: así podrá darte retroalimentación.',
    grupos: [
      ['Detectives', ['Tenemos cinco obras, una de cada época (Prehistoria, Edad Media, s. XV–XVI, s. XVII y s. XX).', 'Hemos comprobado el siglo de cada obra en una fuente fiable.', 'Al menos una obra es andaluza.', 'Hay obras de técnica seca y de técnica húmeda, sin repetir técnica.', 'Cada obra tiene su ficha técnica completa.', 'Hemos descrito el rasgo visual que delata la técnica, el soporte y las herramientas.', 'Hemos localizado un pigmento tóxico, con su fuente fiable y su sustituto actual.']],
      ['Laboratorio', ['Hemos fabricado un material de técnica seca.', 'Hemos fabricado un material de técnica húmeda.', 'El color sale solo de nuestros ingredientes.', 'Hemos anotado las cantidades exactas (y los cambios).', 'Hemos pintado una muestra de cada material en un soporte.', 'Hemos anotado transparencia, cubrición, secado y adherencia.', 'Hemos cumplido las normas y gestionado los residuos.']],
      ['Recetario', ['Hay una página A4 por material.', 'Cada página tiene ingredientes con cantidades y pasos numerados e ilustrados.', 'Cada página tiene su muestra, sus cualidades, la seguridad y las conclusiones.', 'Hemos ilustrado el recetario con nuestras propias pócimas.']],
      ['Presentación', ['Hemos preparado la explicación del proceso, las dificultades y los logros.', 'Hemos hecho la autoevaluación y valorado a los otros grupos.', 'Hemos entregado todo en la tarea de Classroom.', 'Hemos preparado las respuestas a las cinco preguntas de la exposición.']]
    ],
    progreso: (n, t) => `Llevas ${n} de ${t}`, borrar: 'Borrar mis marcas', confirmar: '¿Seguro? Pulsa otra vez para borrar.'
  };
  /* indicadores de la rúbrica que se evalúan en cada actividad (mismo orden que ACT_ES.acts) */
  const ACT_IL = [['IL 1.1', 'IL 1.2', 'IL 1.3'], ['IL 2.1', 'IL 2.2', 'IL 2.3'], ['IL 3.1', 'IL 3.2', 'IL 3.3'], ['IL 3.4', 'IL 3.5', 'IL 3.6']];
  const KEY = 'insertart-exp4n1-cotejo';
  const leer = () => { try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch (e) { return []; } };
  const guardar = v => { try { localStorage.setItem(KEY, JSON.stringify(v)); } catch (e) { } };
  const actividades = {
    html() {
      const A = pick('act', ACT_ES);
      const marcadas = new Set(leer());
      return `
      <div class="acts" style="--c:var(--rosa)">
        <p class="act-intro">${A.intro}</p>
        <ol class="act-list">${A.acts.map(([t, tag, d, extra], i) => `
          <li><span class="act-n">${i + 1}</span><div><p class="act-tag">${tag}</p><h3>${t}</h3><p>${d}</p>${extra ? `<div class="act-extra">${extra}</div>` : ''}${window.CRIT ? CRIT.enActividad(pick('rub', RUB_ES), ACT_IL[i]) : ''}</div></li>`).join('')}</ol>
        <section class="cotejo" aria-labelledby="cotejo-t" style="box-shadow:0 0 22px #ff5ad822">
          <h2 id="cotejo-t">${A.cotejoT}</h2>
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
      const A = pick('act', ACT_ES);
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

  /* =============== JUEGO: EL CALDERO DE PÓCIMAS =============== */
  const JUEGO_ES = {
    titulo: 'El caldero de pócimas',
    intro: 'Si no pudieras comprar ningún material, ¿con qué pintarías? Elige un pigmento, un aglutinante y las cantidades. Remueve el caldero y descubre qué pócima te sale. Cada pócima genera su receta, igual que una página de vuestro recetario.',
    est1: 'Estante 1 · Pigmentos (el color)', est2: 'Estante 2 · Aglutinantes (lo que pega el color al soporte)', est3: 'Estante 3 · Cantidades (en cucharadas)',
    estH: 'Estante escondido · De la historia',
    pigmentos: {
      curcuma: 'Cúrcuma', curry: 'Curry', cebolla: 'Cáscara de cebolla', pimenton: 'Pimentón', remolacha: 'Remolacha', granada: 'Granada',
      arandanos: 'Arándanos', espinaca: 'Espinaca', cafe: 'Café', cacao: 'Cacao', platano: 'Piel de plátano', carbon: 'Carbón vegetal', tiza: 'Tiza'
    },
    aglutinantes: { ninguno: 'Ninguno', cola: 'Cola blanca', clara: 'Clara de huevo', yema: 'Yema de huevo', harina: 'Harina (engrudo)' },
    prohibidos: { albayalde: 'Albayalde', bermellon: 'Bermellón', oropimente: 'Oropimente' },
    cant: { pig: 'Pigmento', agl: 'Aglutinante', tiza: 'Tiza molida (da cuerpo)', agua: 'Agua' },
    cuch: n => n === 1 ? '1 cucharada' : `${n} cucharadas`,
    remover: 'Remover el caldero',
    vacio: 'Elige los ingredientes y pulsa «Remover el caldero».',
    seca: 'TÉCNICA SECA', humeda: 'TÉCNICA HÚMEDA',
    cual: { trans: 'Transparencia', cubr: 'Cubrición', secado: 'Secado', adh: 'Adherencia' },
    nombres: {
      curcuma: 'Pócima del Sol', curry: 'Pócima del Mercado', cebolla: 'Pócima del Otoño', pimenton: 'Pócima del Fuego', remolacha: 'Pócima de la Tierra Roja',
      granada: 'Pócima de la Alhambra', arandanos: 'Pócima del Bosque', espinaca: 'Pócima del Huerto', cafe: 'Pócima de la Noche', cacao: 'Pócima del Chocolate',
      platano: 'Pócima de la Merienda', carbon: 'Pócima de la Cueva', tiza: 'Pócima de la Pizarra'
    },
    barra: 'en barra', polvo: 'en polvo',
    recetaT: 'Receta', ingT: 'Ingredientes', pasosT: 'Pasos', segT: 'Seguridad',
    prep: {
      polvo: 'Muele el pigmento en el mortero hasta que quede un polvo fino.',
      vegetal: 'Trocea el ingrediente, machácalo con un poco de agua caliente, deja reposar 10 minutos y cuela el líquido.'
    },
    pasoAgl: (a, n) => `Añade ${n} de ${a.toLowerCase()} y mezcla hasta que no queden grumos.`,
    pasoSinAgl: 'No añadas aglutinante: el color se quedará suelto sobre el papel.',
    pasoBarra: 'Amasa la pasta, dale forma de barra y déjala secar un día antes de usarla.',
    pasoPolvo: 'Aplica el polvo frotando con el dedo o con un trapo sobre papel con grano.',
    pasoAgua: n => `Añade ${n} de agua poco a poco y remueve.`,
    pasoProbar: 'Pinta una muestra en papel, déjala secar y anota sus cualidades.',
    niveles: { trans: ['baja', 'media', 'alta'], cubr: ['baja', 'media', 'alta'], secado: ['rápido', 'medio', 'lento'], adh: ['mala', 'regular', 'buena'] },
    secoBarra: 'Seca en 1 día (barra)', secoPolvo: 'No necesita secar',
    seg: {
      general: 'Aunque sean alimentos, una vez mezclados no se comen.',
      huevo: 'Huevo: lávate las manos; la pócima no se guarda porque se estropea.',
      especia: 'Pimentón y curry: no te toques los ojos.',
      polvo: 'Tiza y carbón: no soples el polvo.',
      mancha: 'Mancha mucho: protege la ropa y la mesa.',
      final: 'Al terminar, lava los utensilios y deja los restos sólidos en su contenedor, no en el desagüe.'
    },
    pistas: {
      sinAgl: 'Sin aglutinante, el color se desprende al secar. Prueba con cola, clara, yema o harina.',
      diluida: 'Mucha agua y poco pigmento: saldrá un color muy pálido.'
    },
    toxico: {
      titulo: '¡Pócima prohibida!',
      albayalde: 'Albayalde o blanco de plomo: contiene plomo. Hoy se usa el blanco de titanio.',
      bermellon: 'Bermellón: rojo hecho con sulfuro de mercurio. Hoy se usan pigmentos sintéticos más seguros.',
      oropimente: 'Oropimente: amarillo que contiene arsénico. Hoy se usan pigmentos sintéticos más seguros.',
      nota: 'Estos pigmentos solo están en el juego para conocer la historia: no se usan en el aula.'
    },
    retosT: 'Retos', retosN: (n, t) => `Retos superados: ${n} de ${t}`,
    retos: [
      ['Primera pócima', 'Fabrica cualquier pintura húmeda.'],
      ['Pócima seca', 'Fabrica un material de técnica seca.'],
      ['Tres tonos', 'Consigue tres tonos de un mismo color cambiando solo el agua.'],
      ['Cubre el negro', 'Haz una pintura de cubrición alta.'],
      ['Cristal', 'Haz una pintura transparente que pegue bien.'],
      ['La pócima prohibida', 'Encuentra los tres pigmentos tóxicos del estante escondido.']
    ]
  };

  /* datos del juego */
  const PIG = {
    curcuma: { c: '#f2b705', tipo: 'polvo', especia: 1, mancha: 1 },
    curry: { c: '#d9a520', tipo: 'polvo', especia: 1 },
    cebolla: { c: '#c8742a', tipo: 'vegetal' },
    pimenton: { c: '#d2491f', tipo: 'polvo', especia: 1 },
    remolacha: { c: '#a3124a', tipo: 'vegetal', mancha: 1 },
    granada: { c: '#c2335a', tipo: 'vegetal', mancha: 1 },
    arandanos: { c: '#5b2a86', tipo: 'vegetal', mancha: 1 },
    espinaca: { c: '#4f7a28', tipo: 'vegetal' },
    cafe: { c: '#6b4226', tipo: 'polvo' },
    cacao: { c: '#4a2c1d', tipo: 'polvo', opaco: 1 },
    platano: { c: '#cdbf7a', tipo: 'vegetal', palido: 1 },
    carbon: { c: '#1d1d1f', tipo: 'polvo', opaco: 1, polvoSeco: 1 },
    tiza: { c: '#f4f1ea', tipo: 'polvo', opaco: 1, polvoSeco: 1 }
  };
  const AGL = {
    ninguno: { adh: 0, liq: 0, cub: 0, sec: 0 },
    cola: { adh: 3, liq: .6, cub: 0, sec: 1 },
    clara: { adh: 3, liq: .7, cub: -.3, sec: 1, huevo: 1 },
    yema: { adh: 3, liq: .4, cub: .5, sec: 2, huevo: 1 },
    harina: { adh: 2, liq: 0, cub: 1, sec: 2 }
  };
  const PROH = { albayalde: '#f4f4f0', bermellon: '#d81e1e', oropimente: '#f5c400' };

  const hex = c => [1, 3, 5].map(i => parseInt(c.substr(i, 2), 16));
  const mix = (a, b, t) => { const A = hex(a), B = hex(b); return '#' + A.map((v, i) => Math.round(v + (B[i] - v) * t).toString(16).padStart(2, '0')).join(''); };
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  function calcular(s) {
    const p = PIG[s.pig], a = AGL[s.agl];
    const aglN = s.agl === 'ninguno' ? 0 : s.aglN;
    const liquido = s.agua + aglN * a.liq;
    const solidos = s.pigN + s.tiza + (s.agl === 'harina' ? aglN : 0);
    let familia, forma = '';
    if (liquido <= 1 && solidos >= 3) { familia = 'seca'; forma = (liquido === 0 && aglN === 0) ? 'polvo' : 'barra'; }
    else if (liquido === 0 && p.polvoSeco) { familia = 'seca'; forma = 'polvo'; }
    else familia = 'humeda';
    /* color: el agua aclara, la tiza blanquea */
    const dil = familia === 'humeda' ? clamp(s.agua / (s.pigN + s.agua + aglN * .5 + .001), 0, 1) : 0;
    let col = mix(p.c, '#fbf8f1', dil * .85 + (p.palido ? .35 : 0));
    if (s.tiza > 0 && s.pig !== 'tiza') col = mix(col, '#f4f1ea', clamp(s.tiza / (s.pigN + s.tiza) * .8, 0, .8));
    /* cualidades (0, 1, 2) */
    const cuerpo = s.tiza * 1.1 + (p.opaco ? s.pigN * .6 : 0) + a.cub * aglN * .6 + s.pigN * .25 - s.agua * .7;
    let cubr = familia === 'seca' ? 2 : (cuerpo >= 2.2 ? 2 : cuerpo >= .6 ? 1 : 0);
    let trans = 2 - cubr;
    let adh = familia === 'seca' ? (forma === 'barra' ? 1 : 0) : (aglN === 0 ? 0 : (a.adh >= 3 ? 2 : 1));
    if (familia === 'humeda' && aglN > 0 && aglN * 2 < s.pigN) adh = Math.max(0, adh - 1);
    let secado = familia === 'seca' ? null : clamp(a.sec + (s.agua >= 4 ? -1 : 0) + (aglN >= 4 ? 1 : 0), 0, 2);
    const pistas = [];
    if (familia === 'humeda' && aglN === 0) pistas.push('sinAgl');
    if (familia === 'humeda' && s.agua >= 4 && s.pigN <= 1) pistas.push('diluida');
    return { familia, forma, col, cubr, trans, adh, secado, pistas, aglN };
  }

  const juego = (() => {
    let estado = { pig: 'curcuma', agl: 'cola', pigN: 2, aglN: 2, tiza: 0, agua: 2, prohibido: null };
    const logros = new Set(); const tonos = {}; const hallados = new Set();
    const J = () => pick('juego', JUEGO_ES);

    function olla(col, hierve) {
      return `<svg class="olla-juego${hierve ? ' hierve' : ''}" viewBox="0 0 300 260" aria-hidden="true">
        <g class="bb" fill="${col}"><circle cx="110" cy="56" r="9"/><circle cx="160" cy="44" r="6"/><circle cx="196" cy="60" r="10"/><circle cx="138" cy="34" r="5"/></g>
        <path d="M28 80 C 22 180, 70 238, 150 238 C 230 238, 278 180, 272 80 Z" fill="#1d1a22" stroke="#ff5ad8" stroke-width="6" stroke-linejoin="round"/>
        <ellipse class="liq" cx="150" cy="80" rx="122" ry="22" fill="${col}"/>
        <ellipse cx="150" cy="80" rx="124" ry="22" fill="none" stroke="#ff5ad8" stroke-width="6"/>
        <path d="M90 236 l-14 20 M210 236 l14 20" stroke="#ff5ad8" stroke-width="7" stroke-linecap="round"/>
        <path d="M150 70 L196 -10" stroke="#c27a3a" stroke-width="9" stroke-linecap="round"/>
      </svg>`;
    }
    const gotas = n => '💧'.repeat(n + 1) + '<span style="opacity:.25">' + '💧'.repeat(2 - n) + '</span>';

    function resultadoHTML() {
      const j = J(); const s = estado;
      if (s.prohibido) {
        return `<div class="calavera">
          <svg viewBox="0 0 100 100" aria-hidden="true"><g fill="none" stroke="#7dff9a" stroke-width="5" stroke-linecap="round"><path d="M50 10 C 22 10, 14 34, 18 52 C 20 62, 28 64, 30 72 V84 H70 V72 C 72 64, 80 62, 82 52 C 86 34, 78 10, 50 10 Z"/><circle cx="36" cy="46" r="9"/><circle cx="64" cy="46" r="9"/><path d="M46 62 l4 -8 l4 8 M40 84 v-8 M50 84 v-8 M60 84 v-8"/></g></svg>
          <h3>${j.toxico.titulo}</h3>
          <p>${j.toxico[s.prohibido]}</p>
          <p class="aviso-seg">${j.toxico.nota}</p>
        </div>`;
      }
      const r = calcular(s); const p = PIG[s.pig];
      const nombre = j.nombres[s.pig] + (r.forma ? ` (${j[r.forma]})` : '');
      const agl = j.aglutinantes[s.agl];
      const ing = [`${j.pigmentos[s.pig]}: ${j.cuch(s.pigN)}`];
      if (s.tiza) ing.push(`${j.pigmentos.tiza}: ${j.cuch(s.tiza)}`);
      if (r.aglN) ing.push(`${agl}: ${j.cuch(r.aglN)}`);
      if (s.agua) ing.push(`${j.cant.agua}: ${j.cuch(s.agua)}`);
      const pasos = [j.prep[p.tipo === 'vegetal' ? 'vegetal' : 'polvo']];
      if (r.aglN) pasos.push(j.pasoAgl(agl, j.cuch(r.aglN))); else if (r.familia === 'humeda') pasos.push(j.pasoSinAgl);
      if (s.agua) pasos.push(j.pasoAgua(j.cuch(s.agua)));
      if (r.forma === 'barra') pasos.push(j.pasoBarra);
      if (r.forma === 'polvo') pasos.push(j.pasoPolvo);
      pasos.push(j.pasoProbar);
      const seg = [j.seg.general];
      if (AGL[s.agl].huevo && r.aglN) seg.push(j.seg.huevo);
      if (p.especia) seg.push(j.seg.especia);
      if (s.tiza || p.polvoSeco) seg.push(j.seg.polvo);
      if (p.mancha) seg.push(j.seg.mancha);
      seg.push(j.seg.final);
      const N = j.niveles;
      const sec = r.familia === 'seca' ? (r.forma === 'barra' ? j.secoBarra : j.secoPolvo) : N.secado[r.secado];
      return `
        <div class="res-top">
          <span class="mancha" style="background:${r.col}"></span>
          <div><h3>${nombre}</h3><span class="familia ${r.familia}">${r.familia === 'seca' ? j.seca : j.humeda}</span></div>
        </div>
        <ul class="gotas">
          <li>${j.cual.trans}<em title="${N.trans[r.trans]}">${gotas(r.trans)}</em></li>
          <li>${j.cual.cubr}<em title="${N.cubr[r.cubr]}">${gotas(r.cubr)}</em></li>
          <li>${j.cual.secado}<span>${sec}</span></li>
          <li>${j.cual.adh}<em title="${N.adh[r.adh]}">${gotas(r.adh)}</em></li>
        </ul>
        ${r.pistas.length ? `<div class="aviso-seg">${r.pistas.map(k => `<p>${j.pistas[k]}</p>`).join('')}</div>` : ''}
        <div class="receta">
          <h4>${j.recetaT}: ${nombre}</h4>
          <h5>${j.ingT}</h5><ul>${ing.map(x => `<li>${x}</li>`).join('')}</ul>
          <h5>${j.pasosT}</h5><ol>${pasos.map(x => `<li>${x}</li>`).join('')}</ol>
          <h5>${j.segT}</h5><ul>${seg.map(x => `<li>${x}</li>`).join('')}</ul>
        </div>`;
    }

    function comprobarRetos() {
      const s = estado;
      if (s.prohibido) { hallados.add(s.prohibido); if (hallados.size === 3) logros.add(5); return; }
      const r = calcular(s);
      if (r.familia === 'humeda') logros.add(0);
      if (r.familia === 'seca') logros.add(1);
      if (r.familia === 'humeda') {
        const k = s.pig + '|' + s.agl + '|' + r.aglN + '|' + s.pigN + '|' + s.tiza;
        (tonos[k] = tonos[k] || new Set()).add(s.agua);
        if (tonos[k].size >= 3) logros.add(2);
      }
      if (r.cubr === 2 && r.familia === 'humeda') logros.add(3);
      if (r.familia === 'humeda' && r.trans === 2 && r.adh === 2) logros.add(4);
    }

    function retosHTML() {
      const j = J();
      return `<h3>${j.retosT}</h3><span class="retos-n">${j.retosN(logros.size, j.retos.length)}</span>
        <ol>${j.retos.map(([t, d], i) => `<li class="${logros.has(i) ? 'ok' : ''}"><b>${t}</b>${d}</li>`).join('')}</ol>`;
    }

    function html() {
      const j = J(); const s = estado;
      const chips = (obj, sel, attr, color) => Object.keys(obj).map(k =>
        `<button type="button" data-${attr}="${k}" aria-pressed="${sel === k}">${color ? `<i style="background:${color(k)}"></i>` : ''}${obj[k]}</button>`).join('');
      const slider = (k, v, min) => `<label data-cant="${k}"><span>${j.cant[k]}</span><input type="range" min="${min}" max="5" step="1" value="${v}" data-n="${k}"><output>${j.cuch(v)}</output></label>`;
      return `
      <section class="caldero" id="caldero" aria-labelledby="cal-t">
        <h2 id="cal-t">${j.titulo}</h2>
        <p>${j.intro}</p>
        <div class="cal-grid">
          <div>
            <div class="estante"><h3>${j.est1}</h3><div class="chips" data-grupo="pig">${chips(j.pigmentos, s.prohibido ? null : s.pig, 'pig', k => PIG[k].c)}</div></div>
            <div class="estante"><h3>${j.est2}</h3><div class="chips" data-grupo="agl">${chips(j.aglutinantes, s.agl, 'agl')}</div></div>
            <div class="estante"><h3>${j.est3}</h3><div class="medidas">
              ${slider('pig', s.pigN, 1)}${slider('agl', s.aglN, 1)}${slider('tiza', s.tiza, 0)}${slider('agua', s.agua, 0)}
            </div></div>
            <div class="estante"><h3>${j.estH}</h3><div class="chips prohibidos" data-grupo="proh">${chips(j.prohibidos, s.prohibido, 'proh', k => PROH[k])}</div></div>
            <button type="button" class="remover">${j.remover}</button>
          </div>
          <div>
            <div class="olla-wrap">${olla('#3a3742', false)}</div>
            <div class="resultado" aria-live="polite"><p class="vacio">${j.vacio}</p></div>
          </div>
        </div>
        <div class="retos">${retosHTML()}</div>
      </section>`;
    }

    function init(root) {
      const box = root.querySelector('#caldero'); if (!box) return;
      const j = J();
      const sync = () => {
        box.querySelectorAll('[data-pig]').forEach(b => b.setAttribute('aria-pressed', !estado.prohibido && b.dataset.pig === estado.pig));
        box.querySelectorAll('[data-agl]').forEach(b => b.setAttribute('aria-pressed', b.dataset.agl === estado.agl));
        box.querySelectorAll('[data-proh]').forEach(b => b.setAttribute('aria-pressed', b.dataset.proh === estado.prohibido));
        box.querySelector('[data-cant=agl]').classList.toggle('off', estado.agl === 'ninguno');
      };
      box.addEventListener('click', e => {
        const b = e.target.closest('button'); if (!b) return;
        if (b.dataset.pig) { estado.pig = b.dataset.pig; estado.prohibido = null; }
        else if (b.dataset.agl) estado.agl = b.dataset.agl;
        else if (b.dataset.proh) estado.prohibido = b.dataset.proh;
        else if (b.classList.contains('remover')) {
          comprobarRetos();
          const col = estado.prohibido ? '#7dff9a' : calcular(estado).col;
          box.querySelector('.olla-wrap').innerHTML = olla(col, true);
          box.querySelector('.resultado').innerHTML = resultadoHTML();
          box.querySelector('.retos').innerHTML = retosHTML();
          if (window.SFX) window.SFX.burbuja();
          return;
        }
        if (window.SFX) window.SFX.metal();
        sync();
      });
      box.querySelectorAll('input[type=range]').forEach(r => r.addEventListener('input', () => {
        const k = r.dataset.n, v = +r.value;
        if (k === 'pig') estado.pigN = v; else if (k === 'agl') estado.aglN = v; else estado[k] = v;
        r.nextElementSibling.textContent = j.cuch(v);
      }));
      sync();
    }
    return { html, init };
  })();

  /* =============== RECURSOS =============== */
  const recursos = {
    html() {
      return `
      <div class="recursos" style="--c:var(--rosa)">
        ${juego.html()}
        <h2 class="rec-h" style="margin-top:34px">${ui().museosT}</h2>
        <p>${ui().museosP}</p>
        <ul class="vid-list">
          <li><a href="https://www.museodelprado.es/coleccion/obras-de-arte" target="_blank" rel="noopener noreferrer"><span class="play-ico" style="background:var(--rosa)">◆</span>Museo del Prado · Colección</a></li>
          <li><a href="https://www.moma.org/collection/" target="_blank" rel="noopener noreferrer"><span class="play-ico" style="background:var(--rosa)">◆</span>MoMA · Collection</a></li>
        </ul>
      </div>`;
    },
    init(root) { juego.init(root); }
  };

  /* =============== RÚBRICA (la misma que la hoja de notas) =============== */
  const LV = ['Insuficiente (1–4)', 'Suficiente (5)', 'Bien (6)', 'Notable (7–8)', 'Sobresaliente (9–10)'];
  const RUB_ES = {
    intro: 'Así se evalúa este nivel. Cada indicador se puntúa de 1 a 10. La nota de cada criterio es la media de sus indicadores y la nota del nivel es la media de los criterios.',
    criteriosT: 'Criterios de evaluación',
    criterios: [
      ['1.1', 'Analizar manifestaciones artísticas de diferentes épocas y culturas, contextualizándolas, describiendo sus aspectos esenciales, valorando el proceso de creación y el resultado final, y evidenciando una actitud de apertura, interés y respeto en su recepción.'],
      ['1.2', 'Valorar críticamente los hábitos, los gustos y los referentes artísticos de diferentes épocas y culturas, reflexionando sobre su evolución y sobre su relación con los del presente.'],
      ['2.1', 'Participar, con iniciativa, confianza y creatividad, en la exploración de diferentes técnicas gráfico-plásticas, empleando herramientas, medios, soportes y lenguajes.'],
      ['2.2', 'Elaborar producciones gráfico-plásticas de forma creativa, determinando las intenciones expresivas y seleccionando con corrección las herramientas, medios, soportes y lenguajes más adecuados de entre los que conforman el repertorio personal de recursos.'],
      ['4.1', 'Crear un producto artístico individual o grupal, de forma colaborativa y abierta, diseñando las fases del proceso y seleccionando las técnicas y herramientas más adecuadas para conseguir un resultado adaptado a una intención y a un público determinados.'],
      ['4.2', 'Exponer el resultado final de la creación de un producto artístico, individual o grupal, poniendo en común y valorando críticamente el desarrollo de su elaboración, las dificultades encontradas, los progresos realizados y los logros alcanzados.'],
      ['4.3', 'Identificar oportunidades de desarrollo personal, social, académico o profesional relacionadas con el ámbito artístico, comprendiendo su valor añadido y expresando la opinión personal de forma razonada y respetuosa.']
    ],
    niveles: LV,
    criterio: 'Criterio',
    bloques: [
      ['Bloque 1. Detectives', [
        ['IL 1.1', 'Selección de obras', '1.1', 'Elige cinco obras de las épocas propuestas que cumplen los requisitos: una andaluza y técnicas secas y húmedas, sin repetir.', ['Faltan obras o épocas, o incumple la mayoría de los requisitos.', 'Cinco obras, pero incumple dos requisitos.', 'Cinco obras; incumple un requisito.', 'Cinco obras que cumplen todos los requisitos.', 'Cumple todos los requisitos con obras variadas y bien justificadas.']],
        ['IL 1.2', 'Análisis de la obra', '1.1', 'Completa la ficha técnica y describe el rasgo visual que delata la técnica, el soporte y las herramientas.', ['Fichas incompletas o con datos erróneos; no describe rasgos visuales.', 'Fichas básicas; rasgos visuales vagos o genéricos.', 'Fichas completas; rasgo visual correcto en la mayoría.', 'Fichas completas y contrastadas; rasgo visual preciso en todas.', 'Analiza con vocabulario técnico y relaciona rasgo, herramienta y soporte.']],
        ['IL 1.3', 'Pigmentos de ayer y de hoy', '1.2', 'Identifica un pigmento tóxico con fuente fiable y reflexiona sobre cómo han cambiado los materiales hasta hoy.', ['No identifica ningún pigmento tóxico o no lo justifica.', 'Identifica el pigmento, pero sin fuente fiable.', 'Identifica el pigmento y cita una fuente fiable.', 'Además lo compara con su sustituto actual.', 'Reflexiona con criterio sobre la evolución de los materiales y su relación con el presente.']]]],
      ['Bloque 2. Laboratorio', [
        ['IL 2.1', 'Formulación', '2.1', 'Formula al menos dos materiales (uno seco y otro húmedo) con pigmento, aglutinante y disolvente, y anota sus proporciones.', ['Un solo material o materiales que no funcionan.', 'Dos materiales que funcionan, sin proporciones anotadas.', 'Dos materiales que funcionan, con proporciones anotadas.', 'Ajusta las proporciones tras probar y anota los cambios.', 'Explora variantes con iniciativa y explica cómo cambia el resultado.']],
        ['IL 2.2', 'Muestra en soporte', '2.1', 'Pinta una muestra de cada material en un soporte y registra sus cualidades: transparencia, cubrición, secado y adherencia.', ['No hace muestras o no las pinta con sus materiales.', 'Muestras de solo algún material o poco claras.', 'Muestra de cada material, poco cuidada.', 'Muestra clara y bien pintada de cada material.', 'Además registra sus cualidades y saca conclusiones sobre cada material.']],
        ['IL 2.3', 'Seguridad y sostenibilidad', '2.2', 'Usa ingredientes no tóxicos, cumple las normas del laboratorio y gestiona residuos y envases.', ['Incumple las normas o usa ingredientes inadecuados.', 'Cumple las normas con recordatorios frecuentes.', 'Cumple las normas y justifica la no toxicidad.', 'Además reutiliza envases y gestiona bien los residuos.', 'Propone mejoras sostenibles para el laboratorio.']]]],
      ['Bloque 3. Recetario', [
        ['IL 3.1', 'Proyecto y fases', '4.1', 'Planifica el recetario en grupo, reparte tareas y sigue las fases del proceso hasta el producto final.', ['Sin planificación; trabajo desorganizado o incompleto.', 'Planificación mínima; cumple plazos con ayuda.', 'Sigue las fases y reparte las tareas.', 'Organización autónoma y colaborativa en todas las fases.', 'Gestiona el proceso con iniciativa y ayuda a otros grupos.']],
        ['IL 3.2', 'Diseño de la página', '4.1', 'Cada página incluye ingredientes, pasos ilustrados, muestras, resultados y seguridad, con una maquetación pensada para que otros la usen.', ['Faltan apartados; la receta no se entiende.', 'Apartados completos, pero desordenados.', 'Página completa y legible.', 'Clara, ordenada y bien ilustrada.', 'Diseño cuidado y coherente: cualquiera podría seguir la receta.']],
        ['IL 3.3', 'Ilustración con pócimas propias', '2.2', 'Ilustra el recetario con los materiales fabricados, con intención expresiva y uso responsable.', ['No usa sus materiales.', 'Uso básico de sus materiales.', 'Uso correcto en las ilustraciones.', 'Uso con intención expresiva.', 'Aprovecha de forma creativa las cualidades de cada material.']],
        ['IL 3.4', 'Presentación', '4.2', 'Expone el recetario a la clase explicando el proceso, las dificultades encontradas y los logros alcanzados.', ['No presenta o lee sin explicar.', 'Presentación breve y poco clara.', 'Explica el proceso con claridad.', 'Explica proceso, dificultades y logros con vocabulario técnico.', 'Presentación clara y atractiva; responde a las preguntas.']],
        ['IL 3.5', 'Autoevaluación y valoración', '4.2', 'Valora críticamente su trabajo y el de otros grupos, con argumentos y respeto.', ['No se autoevalúa.', 'Autoevaluación superficial.', 'Identifica aciertos y errores.', 'Propone mejoras concretas para su trabajo.', 'Valora con criterio su trabajo y el de otros grupos.']],
          ['IL 3.6', 'Oportunidades del arte', '4.3', 'Identifica oportunidades de desarrollo personal, social, académico o profesional relacionadas con lo trabajado y expresa su opinión de forma razonada y respetuosa (preguntas 4 y 5 de la exposición guiada).', ['No identifica ninguna.', 'Nombra una, sin explicarla.', 'Identifica alguna y explica por qué.', 'Relaciona varias con lo aprendido y da su opinión con argumentos.', 'Reflexiona con criterio sobre el valor del arte en su vida y su futuro, con respeto hacia otras opiniones.']]]]
    ]
  };
  const rubrica = {
    html() {
      const R = pick('rub', RUB_ES);
      return `
      <div class="rub" style="--c:var(--rosa)">
        <p class="act-intro">${R.intro}</p>
        <h2 class="rec-h">${R.criteriosT}</h2>
        <ul class="crit-list">${R.criterios.map(([k, d]) => `<li><b>${k}</b><span>${d}${window.CRIT ? CRIT.actividadesDe(R, pick('act', ACT_ES).acts.map((a, i) => [a[0], ACT_IL[i]]), k) : ''}</span></li>`).join('')}</ul>
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
  window.CONTENIDOS['exp4-n1'] = { mision, teoria, actividades, recursos, rubrica };
})();
