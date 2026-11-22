/* INSERT ART · Expresión Artística 4.º ESO · Nivel 02 · Humor gráfico */
(function () {
  /* Traducciones: window.EXP4N2[lang] = { ui, sec, mision, act, rub, juego, t } */
  window.EXP4N2 = window.EXP4N2 || {};
  const TR = () => window.EXP4N2[window.I18N.lang] || null;
  const w = s => (TR() && TR().t && TR().t[s]) || s;
  const pick = (k, base) => Object.assign({}, base, (TR() && TR()[k]) || {});

  if (!document.getElementById('css-exp4n2')) {
    const st = document.createElement('style');
    st.id = 'css-exp4n2';
    st.textContent = `
.meme-fig{display:block;width:100%;max-width:620px;height:auto;margin:16px 0 22px}
.meme-fig text{font-family:var(--body);font-weight:900;fill:#fff;stroke:#000;stroke-width:3px;paint-order:stroke;letter-spacing:.02em}
.meme-fig .lbl{font-family:var(--pixel);font-size:11px;fill:var(--fluor);stroke:none}
.pasos3{list-style:none;display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:16px 0 22px!important;max-width:none!important;counter-reset:p}
.pasos3 li{margin:0!important;padding:14px;border:2px solid var(--c);background:#17151c;max-width:none!important;counter-increment:p}
.pasos3 li::before{content:counter(p);display:inline-grid;place-items:center;width:30px;height:30px;margin-bottom:8px;font-family:var(--pixel);font-size:11px;background:var(--c);color:var(--asfalto)}
.pasos3 b{display:block;font-family:var(--marker);font-weight:400;font-size:22px;color:var(--c)}
.lectura{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:14px 0 20px}
.lectura div{padding:14px;border:2px solid var(--acero);background:#17151c}
.lectura h3{margin:0 0 6px!important;font-family:var(--marker);font-weight:400;font-size:26px;color:var(--c)}
.lectura ul{margin:6px 0 0 18px}
.lectura li{font-size:15px}
.flujo{display:flex;flex-wrap:wrap;align-items:center;gap:10px;margin:14px 0 20px}
.flujo span{padding:10px 14px;border:2px solid var(--c);font-family:var(--pixel);font-size:10px}
.flujo b{color:var(--fluor);font-family:var(--pixel)}
.quiz{border:3px solid var(--c);background:#141118;padding:20px;max-width:900px;box-shadow:0 0 26px color-mix(in srgb,var(--c) 25%,transparent)}
.quiz > h2{font-family:var(--marker);font-weight:400;font-size:clamp(32px,4.4vw,46px);color:var(--c);text-shadow:0 0 14px var(--c);line-height:1.05}
.quiz > p{max-width:68ch;margin:8px 0 14px}
.q-card{border:2px solid var(--acero);background:#0f0e13;padding:18px;margin-bottom:12px}
.q-n{font-family:var(--pixel);font-size:9px;color:var(--fluor);margin-bottom:8px;display:block}
.q-s{font-size:20px;font-weight:500;margin-bottom:14px;max-width:60ch}
.q-ops{display:grid;grid-template-columns:repeat(2,1fr);gap:8px}
.q-ops button{padding:12px;border:2px solid var(--acero);background:#17151c;font-size:15px;text-align:left}
.q-ops button:hover:not([disabled]){border-color:var(--c)}
.q-ops button.ok{border-color:var(--fluor);background:#16180a}
.q-ops button.ko{border-color:var(--fucsia);background:#1d1016}
.q-ops button[disabled]{cursor:default}
.q-fb{margin-top:12px;font-size:15px;min-height:1.5em}
.q-next{margin-top:12px;font-family:var(--pixel);font-size:11px;padding:12px 16px;background:var(--fluor);color:var(--asfalto);box-shadow:4px 4px 0 var(--fucsia)}
.q-score{font-family:var(--pixel);font-size:10px;margin-bottom:10px;display:block}
.dias-intro{border:2px solid var(--fluor);padding:12px 16px;background:#14160b;max-width:70ch}
.dia{margin:34px 0 10px;padding-top:16px;border-top:4px solid var(--c)}
.dia-h{display:flex;flex-wrap:wrap;align-items:center;gap:10px 16px;margin-bottom:10px}
.dia-k{font-family:var(--pixel);font-size:11px;background:var(--c);color:var(--asfalto);padding:7px 9px;box-shadow:4px 4px 0 var(--fluor)}
.dia-h h2{margin:0!important;font-family:var(--marker);font-weight:400;font-size:clamp(30px,4vw,44px);color:var(--c);text-shadow:0 0 12px color-mix(in srgb,var(--c) 50%,transparent)}
.dia-meta{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin:0 0 8px;font-size:15px}
.dia-min{font-family:var(--pixel);font-size:10px;border:2px solid var(--fluor);color:var(--fluor);padding:6px 8px}
.dia-act{border:2px solid var(--c);padding:6px 10px;font-size:14px;background:#17151c}
.dia-act:hover,.dia-act:focus-visible{background:var(--c);color:var(--asfalto)}
.toc button.on{opacity:1;border-left-color:var(--c);background:#1b1921;color:var(--c)}
.toc .toc-dia{font-family:var(--pixel);font-size:8px;color:var(--fluor);margin:10px 0 2px;padding-left:8px}
.saberes{display:flex;flex-wrap:wrap;align-items:center;gap:6px;margin:-6px 0 14px!important}
.saberes span{font-family:var(--pixel);font-size:8px;border:1px solid var(--fluor);color:var(--fluor);padding:4px 6px}
.saberes .saber-k{border-color:transparent;color:var(--acero-l,#a9a4b3);padding-left:0}
h3.sub{font-family:var(--marker);font-weight:400;font-size:26px;color:var(--c);margin:20px 0 6px!important}
.cual.cual5{grid-template-columns:repeat(5,1fr)}
.cual.cual3{grid-template-columns:repeat(3,1fr)}
.fig-n2{display:block;width:100%;max-width:680px;height:auto;margin:12px 0 16px}
.fig-n2 text{font-family:var(--pixel);font-size:8px;fill:#f3efe6;letter-spacing:.02em}
.fig-n2 text.pl{font-family:var(--body);font-size:12px;font-weight:600;letter-spacing:0}
.videos{border:2px solid var(--acero);background:#121016;padding:12px 14px;margin:18px 0 4px;max-width:70ch}
.videos > p{font-family:var(--pixel);font-size:9px;color:var(--c);margin:0 0 10px!important}
.videos ul{list-style:none;margin:0!important;padding:0;display:grid;gap:8px}
.videos li{margin:0!important}
.videos a{display:flex;gap:12px;align-items:flex-start;color:inherit;text-decoration:none;padding:6px;border:1px solid transparent}
.videos a:hover,.videos a:focus-visible{border-color:var(--c);background:#1b1921}
.v-play{flex:none;display:grid;place-items:center;width:30px;height:30px;background:var(--fucsia,#ff2d6f);color:#fff;font-size:12px}
.videos b{display:block;font-weight:600}
.videos small{display:block;font-size:13px;opacity:.7;margin-top:2px}
.v-subt{font-size:14px;opacity:.75;margin-top:24px}
.videos > p.v-intro,.videos > p.v-subt{font-family:var(--body);font-size:15px;color:inherit}
.sub-vid{font-family:var(--marker);font-weight:400;font-size:clamp(30px,4vw,42px);color:var(--c);margin:0 0 6px}
ol.fases-n2{list-style:none;counter-reset:f;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;margin:14px 0 20px!important;max-width:none!important;padding:0}
ol.fases-n2 li{counter-increment:f;margin:0!important;padding:10px;border:2px solid var(--acero);background:#17151c;display:flex;flex-direction:column;gap:4px;max-width:none!important}
ol.fases-n2 li::before{content:counter(f);font-family:var(--pixel);font-size:10px;color:var(--asfalto);background:var(--c);width:24px;height:24px;display:grid;place-items:center}
ol.fases-n2 b{font-family:var(--marker);font-weight:400;font-size:21px;color:var(--c)}
ol.fases-n2 span{font-size:14px;flex:1}
ol.fases-n2 em{font-style:normal;font-family:var(--pixel);font-size:7px;color:var(--fluor)}
.recursos .videos{max-width:900px}
.recursos .videos h3{font-family:var(--pixel);font-size:9px;color:var(--fluor);margin:14px 0 6px}
@media (max-width:1000px){.cual.cual5{grid-template-columns:repeat(3,1fr)}}
@media (max-width:700px){.pasos3,.lectura,.q-ops{grid-template-columns:1fr} ol.fases-n2,.cual.cual5,.cual.cual3{grid-template-columns:1fr 1fr}}
`;
    document.head.appendChild(st);
  }

  /* =============== FIGURAS =============== */
  /* meme de ejemplo dibujado (no reproduce ninguna obra) */
  function figAnatomia() {
    return `<svg class="meme-fig" viewBox="0 0 640 420" role="img" aria-label="${w('Esquema de un meme: texto arriba, imagen en el centro, contexto y giro')}">
      <rect x="40" y="20" width="480" height="380" fill="#1a1720" stroke="#f3efe6" stroke-width="3"/>
      <text x="280" y="66" text-anchor="middle" font-size="26">${w('YO: HOY EMPIEZO CON TIEMPO')}</text>
      <g transform="translate(170 110)">
        <rect x="0" y="40" width="220" height="150" rx="10" fill="#3a3742"/>
        <circle cx="110" cy="40" r="44" fill="#f2b705"/>
        <circle cx="94" cy="34" r="6" fill="#141218"/><circle cx="126" cy="34" r="6" fill="#141218"/>
        <path d="M92 60 q18 -14 36 0" stroke="#141218" stroke-width="5" fill="none" stroke-linecap="round"/>
        <path d="M30 120 h160 M30 140 h120" stroke="#f3efe6" stroke-width="4" opacity=".4"/>
      </g>
      <text x="280" y="370" text-anchor="middle" font-size="26">${w('TAMBIÉN YO, LA NOCHE ANTES:')}</text>
      <g class="lbl"><text class="lbl" x="526" y="60">${w('TEXTO')}</text><text class="lbl" x="526" y="220">${w('IMAGEN')}</text><text class="lbl" x="526" y="366">${w('GIRO')}</text></g>
    </svg>`;
  }

  /* =============== FIGURAS DE LA TEORÍA =============== */
  /* escala de planos: la misma figura recortada con distintos encuadres */
  function figPlanos() {
    const P = [['Gran plano general', '-150 -20 500 360'], ['Plano general', '-10 6 220 316'], ['Plano americano', '12 18 176 238'],
      ['Plano medio', '30 24 140 176'], ['Primer plano', '52 22 96 110'], ['Plano detalle', '76 44 48 34']];
    return `<svg class="fig-n2" viewBox="-12 0 740 176" role="img" aria-label="${w('Escala de planos: la misma figura vista con seis encuadres distintos')}">
      <defs><g id="n2-figura">
        <rect x="-150" y="-20" width="500" height="360" fill="#1a1720"/>
        <circle cx="-70" cy="30" r="22" fill="#f2b705" opacity=".55"/>
        <rect x="-96" y="190" width="14" height="110" fill="#6b5a46"/><circle cx="-89" cy="170" r="42" fill="#2f6b4f"/>
        <rect x="250" y="210" width="70" height="90" fill="#3a3742"/><path d="M240 214 l45 -40 l45 40 z" fill="#5a3a4a"/>
        <path d="M-150 300 H350" stroke="#f3efe6" stroke-width="3" opacity=".5"/>
        <rect x="76" y="190" width="20" height="104" rx="4" fill="#26313f"/><rect x="104" y="190" width="20" height="104" rx="4" fill="#26313f"/>
        <rect x="68" y="92" width="64" height="104" rx="10" fill="#ff5ad8"/>
        <path d="M70 104 L44 170 M130 104 L156 170" stroke="#ff5ad8" stroke-width="14" stroke-linecap="round"/>
        <circle cx="100" cy="62" r="28" fill="#f2b705"/>
        <circle cx="90" cy="58" r="4.5" fill="#141218"/><circle cx="110" cy="58" r="4.5" fill="#141218"/>
        <path d="M89 74 q11 8 22 0" stroke="#141218" stroke-width="3" fill="none" stroke-linecap="round"/>
      </g></defs>
      ${P.map(([t, vb], i) => `<g transform="translate(${i * 122} 0)">
        <svg x="0" y="0" width="104" height="140" viewBox="${vb}" preserveAspectRatio="xMidYMid slice"><use href="#n2-figura"/></svg>
        <rect x="0" y="0" width="104" height="140" fill="none" stroke="#f3efe6" stroke-width="2"/>
        <text class="pl" x="52" y="160" text-anchor="middle">${w(t)}</text></g>`).join('')}
    </svg>`;
  }
  /* leyes de la percepción (Gestalt) */
  function figGestalt() {
    const pts = (xs, ys, f) => xs.map(x => ys.map(y => f(x, y)).join('')).join('');
    return `<svg class="fig-n2" viewBox="0 0 664 190" role="img" aria-label="${w('Cuatro leyes de la percepción: proximidad, semejanza, cierre y figura-fondo')}">
      <g transform="translate(10 10)"><rect width="140" height="140" fill="#17151c" stroke="#5c5866"/>
        ${pts([22, 40, 92, 110], [30, 52, 74, 96, 118], (x, y) => `<circle cx="${x}" cy="${y}" r="7" fill="#f3efe6"/>`)}
        <text x="70" y="168" text-anchor="middle">${w('PROXIMIDAD')}</text></g>
      <g transform="translate(176 10)"><rect width="140" height="140" fill="#17151c" stroke="#5c5866"/>
        ${pts([24, 54, 84, 114], [28, 58, 88, 118], (x, y) => ((y - 28) / 30) % 2 ? `<rect x="${x - 8}" y="${y - 8}" width="16" height="16" fill="#ff5ad8"/>` : `<circle cx="${x}" cy="${y}" r="8" fill="#d6ff3a"/>`)}
        <text x="70" y="168" text-anchor="middle">${w('SEMEJANZA')}</text></g>
      <g transform="translate(342 10)"><rect width="140" height="140" fill="#17151c" stroke="#5c5866"/>
        <circle cx="70" cy="70" r="44" fill="none" stroke="#f3efe6" stroke-width="8" stroke-dasharray="40 18"/>
        <text x="70" y="168" text-anchor="middle">${w('CIERRE')}</text></g>
      <g transform="translate(508 10)"><rect width="140" height="140" fill="#d6ff3a"/>
        <path d="M40 8 H100 C100 30 84 36 84 50 C84 62 98 66 98 78 C98 92 82 96 82 110 C82 120 94 126 100 132 H40 C46 126 58 120 58 110 C58 96 42 92 42 78 C42 66 56 62 56 50 C56 36 40 30 40 8 Z" fill="#141218"/>
        <text x="70" y="168" text-anchor="middle">${w('FIGURA Y FONDO')}</text></g>
    </svg>`;
  }

  /* =============== TEORÍA =============== */
  const UI_ES = {
    indice: 'Índice', tocAria: 'Índice de la teoría', cuadernoLabel: 'En vuestro cuaderno de artista:', misionK: 'MISIÓN',
    juegoT: '¿Qué recurso es?', recPres: 'Presentación de clase', canva: 'Humor gráfico (Canva)',
    diasIntro: 'La teoría está repartida en <b>cinco días</b>. Cada día se lee o se explica en clase en <b>15 minutos como máximo</b> y te prepara para una actividad. Los vídeos de «Para ver más» son para ampliar en casa: no entran en esos 15 minutos.',
    diaK: 'DÍA', minutos: '15 min', prepara: 'Te prepara para', actK: 'Actividad',
    dias: ['Leer el arte y reírse con él', 'El lenguaje visual', 'Construir la idea', 'Encuadrar y montar', 'Presentar y evaluar'],
    saberK: 'Saber básico', verMas: 'Para ver más (en casa)', abreYT: 'Se abre en YouTube',
    subt: 'Los vídeos están en español. En YouTube puedes activar los subtítulos y traducirlos automáticamente a tu idioma.',
    videosT: 'Vídeos de la unidad', videosP: 'Todos los vídeos de la teoría, ordenados por días. Se abren en YouTube.'
  };
  const ui = () => pick('ui', UI_ES);

  /* días: [secciones, actividades que prepara (índice 0..3)] */
  const DIAS = [
    [['meme', 'lectura', 'historia'], [0]],
    [['lenguaje', 'percepcion'], [0, 1]],
    [['anatomia', 'recursos', 'estereotipos'], [1]],
    [['planos', 'fotomontaje', 'vistazo'], [2]],
    [['proceso'], [3]]
  ];
  const ORDEN = DIAS.flatMap(d => d[0]);
  const SABER = {
    meme: ['EAR.4.B.8'], lectura: ['EAR.4.B.1', 'EAR.4.A.9'], historia: ['EAR.4.A.9'],
    lenguaje: ['EAR.4.B.1'], percepcion: ['EAR.4.B.1'],
    anatomia: ['EAR.4.B.8'], recursos: ['EAR.4.B.8'], estereotipos: ['EAR.4.B.8'],
    planos: ['EAR.4.B.2'], fotomontaje: ['EAR.4.B.4', 'EAR.4.A.9'], vistazo: ['EAR.4.B.1'],
    proceso: ['EAR.4.B.7']
  };
  /* [título en YouTube, id, duración, canal] */
  const VIDEOS = {
    historia: [['Todos los secretos de los Caprichos de Goya', 'kALuUACb2Ec', '13 min', 'Antonio García Villarán'],
      ['Se adelantó 30 años a Dadá. Los Arts Incohérents', '0TWz_TfxiDQ', '19 min', 'Antonio García Villarán']],
    lenguaje: [['Cómo aprender a componer un cuadro', 'SSgJMBhZQFc', '3 min', 'Antonio García Villarán'],
      ['Un ejercicio de pintura para aprender composición y color', 'hNJY4I3d0WM', '3 min', 'Antonio García Villarán']],
    percepcion: [['Teoría de la Gestalt: leyes de la percepción visual', 'DxL-Pw0lc_g', '5 min', 'Gisela Duarte']],
    recursos: [['Retórica en la publicidad', 'PcPwTWEBbOw', '7 min', 'Contra5te Estudio']],
    estereotipos: [['La publicidad y los estereotipos de género', 'YbZ4GjGuF00', '4 min', 'Proyecto NADS']],
    planos: [['Tipos de planos más usados en cine y televisión', 'WsCETCsKkGE', '8 min', 'Aprendercine'],
      ['Ángulos de cámara en fotografía y vídeo', '0qf1svMgbrw', '6 min', 'Aprendercine']],
    fotomontaje: [['¿Qué es Dadá? ¿Arte o antiarte?', 'yuVQFFtk8dk', '12 min', 'Antonio García Villarán'],
      ['¿Qué es el collage? Teoría y práctica (1/4)', 'sdYw8CuD2V8', '3 min', 'Antonio García Villarán'],
      ['El origen del fotomontaje', 'H9YsJTfT6HM', '6 min', 'Domestika']]
  };
  const ytLink = ([t, id, dur, canal]) => `<li><a href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener noreferrer" title="${ui().abreYT}"><span class="v-play" aria-hidden="true">▶</span><span><b>${t}</b><small>${canal} · ${dur}</small></span></a></li>`;
  const bloqueVideos = id => VIDEOS[id] ? `<div class="videos"><p>${ui().verMas}</p><ul>${VIDEOS[id].map(ytLink).join('')}</ul></div>` : '';

  const SEC_ES = {
    meme: ['¿Qué es un meme?', h => `
      <p class="def">Un <b>meme</b> es una idea que se copia y se transforma al pasar de persona a persona.</p>
      <div class="flujo"><span>IDEA</span><b>→</b><span>COPIA</span><b>→</b><span>NUEVA VERSIÓN</span></div>
      <p>El biólogo <b>Richard Dawkins</b> inventó la palabra en su libro <i>El gen egoísta</i> (1976). Hoy la usamos sobre todo para las imágenes con texto que circulan por internet: se comparten, se copian y cada persona les da una vuelta.</p>`],

    lectura: ['Leer una imagen: denotación y connotación', h => `
      <p>Antes de transformar una obra hay que saber leerla. Toda imagen se puede leer de dos maneras:</p>
      <div class="lectura">
        <div><h3>Lectura denotativa</h3><p><b>Lo que se ve</b>, de forma objetiva: todo el mundo estaría de acuerdo.</p>
          <ul><li>Ficha: título, autoría, fecha y técnica.</li><li>Qué figuras y objetos aparecen.</li><li>Colores, luz y composición.</li></ul></div>
        <div><h3>Lectura connotativa</h3><p><b>Lo que sugiere</b>: el significado, que depende de quién mira y de su época.</p>
          <ul><li>Qué emociones transmite.</li><li>Qué símbolos usa y qué significan.</li><li>Qué quería decir en su época y qué nos dice hoy.</li></ul></div>
      </div>
      <p class="tip"><b>Truco:</b> si lo que escribes empieza por «se ve…», es denotación. Si empieza por «parece…», «sugiere…» o «representa…», es connotación.</p>
      ${h.cuaderno('haced primero la lectura denotativa y después la connotativa de cada obra.')}`],

    historia: ['El arte ya se reía antes de internet', h => `
      <p>El humor crítico no lo inventó internet. Fíjate en <b>la técnica</b> que usó cada artista: era la manera de que su imagen llegara a mucha gente.</p>
      <ul class="cual">
        <li><b>Goya</b><span><i>Los Caprichos</i> (1799). <b>Grabado</b> al aguafuerte y aguatinta: de una plancha se imprimen muchas copias. Sátira de los vicios y del poder de su época.</span></li>
        <li><b>Daumier</b><span>Siglo XIX. <b>Litografía</b> para la prensa: caricaturas que exageran los rasgos de los poderosos para criticarlos.</span></li>
        <li><b>Arts Incohérents</b><span>París, década de 1880. Artistas que parodiaban obras famosas con humor absurdo: memes antes de los memes.</span></li>
        <li><b>Duchamp</b><span><i>L.H.O.O.Q.</i> (1919). <b>Lápiz sobre una postal</b> de la Gioconda: le pinta bigote y perilla. Cambia un icono del arte para provocar.</span></li>
      </ul>
      <p class="def"><b>Del arte al diseño:</b> estas técnicas no se quedaron en los museos. El grabado ilustró libros, la litografía llenó carteles y periódicos, y el fotomontaje acabó en portadas de revista y en publicidad.</p>
      <p>Igual que ellos, vais a partir de una obra conocida y a cambiar su sentido para decir algo nuevo.</p>`],

    lenguaje: ['El lenguaje visual: elementos, composición y color', h => `
      <p class="def">Una imagen se construye con <b>elementos visuales</b>, igual que una frase se construye con palabras.</p>
      <ul class="cual cual5">
        <li><b>Punto</b><span>Atrae la mirada.</span></li>
        <li><b>Línea</b><span>Dirige la mirada y da movimiento.</span></li>
        <li><b>Forma</b><span>Las figuras y las manchas.</span></li>
        <li><b>Color</b><span>Emoción y contraste.</span></li>
        <li><b>Textura</b><span>Cómo parece al tacto.</span></li>
      </ul>
      <h3 class="sub">Composición: cómo se colocan los elementos</h3>
      <ul class="cual">
        <li><b>Centro de interés</b><span>Lo primero que se mira. Colócalo donde quieras que miren.</span></li>
        <li><b>Peso visual</b><span>Lo grande, lo oscuro, lo saturado o lo aislado pesa más.</span></li>
        <li><b>Equilibrio</b><span>Simétrico: calma y orden. Asimétrico: movimiento y tensión.</span></li>
        <li><b>Regla de los tercios</b><span>Divide la imagen en 3 × 3 y coloca lo importante en los cruces.</span></li>
      </ul>
      <h3 class="sub">Color</h3>
      <ul class="cards3">
        <li><b>Cálidos y fríos</b><span>Rojo, naranja y amarillo se acercan y dan energía. Azul, verde y violeta se alejan y calman.</span></li>
        <li><b>Complementarios</b><span>Rojo-verde, azul-naranja, amarillo-violeta. Juntos dan el máximo contraste.</span></li>
        <li><b>Simbólico</b><span>El rojo puede ser pasión o peligro. El significado depende de la cultura y del contexto.</span></li>
      </ul>
      ${h.cuaderno('en la lectura denotativa de cada obra, señalad el centro de interés, el tipo de equilibrio y los colores dominantes.')}`],

    percepcion: ['Cómo miramos: la percepción visual', h => `
      <p>No vemos las cosas por separado: el cerebro las <b>organiza</b> para encontrarles sentido. La psicología de la <b>Gestalt</b> (Alemania, principios del siglo XX) describió las leyes con las que lo hace.</p>
      ${h.gestalt()}
      <ul class="cual">
        <li><b>Proximidad</b><span>Lo que está cerca se ve como un grupo.</span></li>
        <li><b>Semejanza</b><span>Lo que se parece (forma, color) se agrupa.</span></li>
        <li><b>Cierre</b><span>El cerebro completa las formas incompletas.</span></li>
        <li><b>Figura y fondo</b><span>Separamos lo que destaca de lo que queda detrás. A veces se pueden intercambiar.</span></li>
      </ul>
      <p class="tip"><b>En vuestro meme:</b> la figura principal tiene que separarse bien del fondo, y las piezas que van juntas tienen que estar cerca o parecerse.</p>`],

    anatomia: ['Anatomía de un meme', h => `
      ${h.fig()}
      <ul class="cual">
        <li><b>Texto</b><span>Plantea la situación.</span></li>
        <li><b>Imagen</b><span>Aporta la reacción.</span></li>
        <li><b>Contexto</b><span>Reconocemos algo que nos pasa.</span></li>
        <li><b>Giro</b><span>La contradicción provoca el humor.</span></li>
      </ul>`],

    recursos: ['Publicidad: convencer y hacer reír', h => `
      <p>La publicidad quiere que hagas algo: comprar, votar, pensar de una manera. Para convencerte usa tres tipos de recursos:</p>
      <ul class="cards3">
        <li><b>Formales</b><span>Lo que se ve: composición, color, tipografía y plano.</span></li>
        <li><b>Lingüísticos</b><span>Lo que se dice: eslogan corto, juego de palabras, rima, preguntas e imperativos («¡Pruébalo!»).</span></li>
        <li><b>Persuasivos</b><span>Cómo te convence: emoción, humor, deseo, una persona famosa o la sensación de pertenecer al grupo.</span></li>
      </ul>
      <h3 class="sub">Cuatro figuras que comparten el meme y la publicidad</h3>
      <ul class="cual">
        <li><b>Hipérbole</b><span>Exagerar: «Tengo un millón de tareas». ¿Un millón?</span></li>
        <li><b>Ironía</b><span>Decir lo contrario: «Qué bien», cuando se cae internet.</span></li>
        <li><b>Metáfora visual</b><span>Sustituir: una mochila convertida en una montaña.</span></li>
        <li><b>Incongruencia</b><span>Romper la lógica: un rey esperando el autobús.</span></li>
      </ul>
      <p class="def"><b>Sociedad de consumo:</b> muchos anuncios no venden un producto, venden un deseo (ser feliz, popular, admirado). Un meme crítico puede darle la vuelta a ese mensaje.</p>
      <p class="tip"><b>Para practicar:</b> en la pestaña <b>Recursos</b> tienes el juego «¿Qué recurso es?».</p>`],

    estereotipos: ['Humor sí, estereotipos no', h => `
      <p class="def">Un <b>estereotipo</b> es una idea simplificada y repetida sobre un grupo de personas: «las chicas son…», «los de tal sitio son…».</p>
      <ul class="cards3">
        <li><b>Roles sexistas</b><span>Anuncios en los que ella limpia y él conduce, o los juguetes van «para niñas» y «para niños».</span></li>
        <li><b>Cánones corporales</b><span>Cuerpos retocados que casi nadie tiene, presentados como lo normal.</span></li>
        <li><b>Humor que daña</b><span>Reírse del género, del origen o del cuerpo de alguien repite esos estereotipos.</span></li>
      </ul>
      <p><b>Cuestionad los prejuicios, no a quienes los sufren.</b></p>
      <p class="ojo"><b>Antes de dar por buena vuestra idea, preguntaos:</b> ¿de quién nos reímos? ¿Critica una idea o humilla a una persona?</p>`],

    planos: ['Encuadre, plano y ángulo', h => `
      <p class="def"><b>Encuadrar</b> es decidir qué queda dentro de la imagen y qué queda fuera. Según lo cerca que estemos, hablamos de distintos <b>planos</b>.</p>
      ${h.planos()}
      <ul class="cual cual3">
        <li><b>Gran plano general</b><span>El lugar. La figura es pequeña: sitúa.</span></li>
        <li><b>Plano general</b><span>La figura entera en su entorno.</span></li>
        <li><b>Plano americano</b><span>Hasta las rodillas: figura y acción.</span></li>
        <li><b>Plano medio</b><span>Hasta la cintura: lo que hace.</span></li>
        <li><b>Primer plano</b><span>La cara: la emoción.</span></li>
        <li><b>Plano detalle</b><span>Una parte pequeña que importa.</span></li>
      </ul>
      <h3 class="sub">Ángulo: desde dónde miramos</h3>
      <ul class="cual">
        <li><b>Normal</b><span>A la altura de los ojos: neutral.</span></li>
        <li><b>Picado</b><span>Desde arriba: la figura parece pequeña o débil.</span></li>
        <li><b>Contrapicado</b><span>Desde abajo: la figura parece grande y poderosa.</span></li>
        <li><b>Aberrante</b><span>Imagen inclinada: inestabilidad, algo va mal.</span></li>
      </ul>
      <p><b>Imagen secuenciada:</b> varias imágenes en orden que cuentan una historia, como el cómic, el <i>storyboard</i> o los memes de dos viñetas «lo que espero / lo que pasa».</p>
      <p class="tip"><b>En vuestro meme:</b> recortar una cara en primer plano o una figura entera cambia lo que cuenta. Un personaje en contrapicado parecerá poderoso; en picado, pequeño.</p>`],

    fotomontaje: ['Fotomontaje tradicional y digital', h => `
      <p class="def"><b>Fotomontaje:</b> unir fragmentos de distintas fotografías o imágenes para crear una imagen nueva con otro significado.</p>
      <p><b>Origen:</b> en Berlín, hacia 1918–1920, los dadaístas <b>Hannah Höch</b>, <b>Raoul Hausmann</b> y <b>John Heartfield</b> recortaban fotos de periódicos y revistas para criticar la guerra y la política. Heartfield llevó el fotomontaje a las portadas de revista: del arte al diseño gráfico.</p>
      <div class="lectura">
        <div><h3>Tradicional</h3><ul><li>Tijeras, pegamento y reproducciones impresas.</li><li>Las piezas se mueven sobre el papel antes de pegarlas.</li><li>Los bordes del recorte se notan, y eso también expresa.</li></ul></div>
        <div><h3>Digital</h3><ul><li>La fotografía digital está hecha de <b>píxeles</b>.</li><li>Los programas de edición trabajan por <b>capas</b>.</li><li>Se recorta, se escala y se cambia el color sin dejar huella.</li></ul></div>
      </div>
      <ol class="pasos3"><li><b>Recorta</b>Fragmentos de distintas obras: una cabeza, un fondo, un objeto…</li><li><b>Prueba combinaciones</b>Mueve las piezas antes de pegar. Busca el contraste.</li><li><b>Pega con intención</b>Cada pieza tiene que decir algo.</li></ol>
      <p class="ojo"><b>Una foto también puede mentir.</b> Los montajes digitales se usan para crear bulos. Antes de creer o compartir una imagen, comprobad de dónde sale.</p>
      <p class="tip"><b>Vosotros trabajáis en tradicional:</b> recortes de reproducciones de obras de arte, en papel.</p>`],

    vistazo: ['Se entiende de un vistazo', h => `
      <ul class="cards3">
        <li><b>Contraste</b><span>Grande / pequeño. Serio / absurdo.</span></li>
        <li><b>Síntesis</b><span>Pocos elementos. Una idea clara.</span></li>
        <li><b>Texto + imagen</b><span>Juntos dicen algo que solos no dirían.</span></li>
      </ul>
      <p class="tip"><b>Prueba del segundo:</b> enseñad el meme a alguien durante un segundo. Si lo entiende, funciona.</p>`],

    proceso: ['El proceso de creación', h => `
      <p>Un proyecto artístico no sale de golpe: pasa por fases. Así es el vuestro:</p>
      <ol class="fases-n2">
        <li><b>Investigar</b><span>Leer las obras.</span><em>Actividad 1</em></li>
        <li><b>Proyectar</b><span>Qué queremos decir, con qué recurso, para quién y dónde.</span><em>Actividad 2</em></li>
        <li><b>Bocetar</b><span>Probar varias opciones rápidas.</span><em>Actividad 2</em></li>
        <li><b>Realizar</b><span>El fotomontaje.</span><em>Actividad 3</em></li>
        <li><b>Revisar</b><span>¿Se entiende? ¿Hace daño a alguien? Corregir.</span><em>Actividad 3</em></li>
        <li><b>Presentar</b><span>Contarlo a la clase.</span><em>Actividad 4</em></li>
        <li><b>Evaluar</b><span>Valorar el proceso y el resultado.</span><em>Actividad 4</em></li>
      </ol>
      <h3 class="sub">Tres maneras de evaluar</h3>
      <ul class="cards3">
        <li><b>Autorreflexión</b><span>Qué he aprendido, qué me costó y qué cambiaría.</span></li>
        <li><b>Autoevaluación</b><span>Me pongo nota con la rúbrica.</span></li>
        <li><b>Coevaluación</b><span>Valoro el trabajo de otras parejas, con argumentos y respeto.</span></li>
      </ul>
      <p class="tip"><b>Los errores forman parte del proceso:</b> lo que no funcionó y cómo lo arreglasteis es justo lo que os preguntarán en la presentación.</p>`]
  };

  function construir() {
    const h = { cuaderno: s => `<p class="manual-tip"><b>${ui().cuadernoLabel}</b> ${s}</p>`, fig: figAnatomia, planos: figPlanos, gestalt: figGestalt };
    const sec = (TR() && TR().sec) || {};
    return ORDEN.map(id => { const x = sec[id] || SEC_ES[id]; return [id, x[0], x[1](h)]; });
  }
  const teoria = {
    html() {
      const S = Object.fromEntries(construir().map(([id, t, b]) => [id, [t, b]]));
      const U = ui(); const A = pick('act', ACT_ES).acts;
      let n = 0; const num = {}; ORDEN.forEach(id => num[id] = String(++n).padStart(2, '0'));
      return `
      <div class="teoria" style="--c:var(--rosa)">
        <nav class="toc" aria-label="${U.tocAria}">
          <p class="toc-t">${U.indice}</p>
          ${DIAS.map(([ids], d) => `<p class="toc-dia">${U.diaK} ${d + 1}</p>${ids.map(id => `<button type="button" data-go="${id}"><span>${num[id]}</span>${S[id][0]}</button>`).join('')}`).join('')}
        </nav>
        <div class="doc">
          <p class="dias-intro">${U.diasIntro}</p>
          ${DIAS.map(([ids, acts], d) => `
          <section class="dia" aria-labelledby="dia-${d + 1}">
            <header class="dia-h"><span class="dia-k">${U.diaK} ${d + 1}</span><h2 id="dia-${d + 1}">${U.dias[d]}</h2></header>
            <div class="dia-meta"><span class="dia-min">⏱ ${U.minutos}</span><span>${U.prepara}:</span>${acts.map(a => `<button type="button" class="dia-act" data-act="${a}">${U.actK} ${a + 1} · ${A[a][0]}</button>`).join('')}</div>
            ${ids.map(id => `
            <section class="tsec" id="t-${id}">
              <h2><span class="sn">${num[id]}</span>${S[id][0]}</h2>
              <p class="saberes"><span class="saber-k">${U.saberK}</span>${SABER[id].map(s => `<span>${s}</span>`).join('')}</p>
              ${S[id][1]}
              ${bloqueVideos(id)}
            </section>`).join('')}
          </section>`).join('')}
          <p class="v-subt">${U.subt}</p>
        </div>
      </div>`;
    },
    init(root) {
      const suave = matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
      root.querySelectorAll('[data-go]').forEach(b => b.addEventListener('click', () =>
        root.querySelector('#t-' + b.dataset.go).scrollIntoView({ behavior: suave, block: 'start' })));
      /* el índice marca el apartado visible y se desplaza solo para mostrarlo */
      const toc = root.querySelector('.toc');
      if (toc && 'IntersectionObserver' in window) {
        const btns = Object.fromEntries([...toc.querySelectorAll('[data-go]')].map(b => [b.dataset.go, b]));
        const io = new IntersectionObserver(es => es.forEach(e => {
          if (!e.isIntersecting) return;
          const b = btns[e.target.id.slice(2)]; if (!b || b.classList.contains('on')) return;
          toc.querySelectorAll('.on').forEach(x => x.classList.remove('on')); b.classList.add('on');
          const vertical = getComputedStyle(toc).position === 'sticky';
          if (vertical) { const t = b.offsetTop - toc.clientHeight / 2 + b.offsetHeight / 2; toc.scrollTo({ top: Math.max(0, t), behavior: suave }); }
          else { const l = b.offsetLeft - toc.clientWidth / 2 + b.offsetWidth / 2; toc.scrollTo({ left: Math.max(0, l), behavior: suave }); }
        }), { rootMargin: '-20% 0px -70% 0px' });
        root.querySelectorAll('.tsec').forEach(sct => io.observe(sct));
      }
      root.querySelectorAll('[data-act]').forEach(b => b.addEventListener('click', () => {
        const tab = document.querySelector('.view.on .tab[data-k="actividades"]'); if (!tab) return;
        tab.click();
        setTimeout(() => { const li = document.querySelectorAll('.view.on .act-list > li')[+b.dataset.act]; if (li) li.scrollIntoView({ behavior: suave, block: 'start' }); }, 80);
      }));
    }
  };

  /* =============== MISIÓN =============== */
  const MISION_ES = {
    titulo: 'Convertid una obra de arte en un meme',
    reto: 'Los artistas llevan siglos usando el humor para criticar su época. Vuestra misión, <b>en parejas</b>, es convertir una obra de arte histórica en un <b>meme con mirada crítica</b>, construido con <b>fotomontaje tradicional</b>: recortando y pegando fragmentos de distintas obras. Pensadlo para colocarlo en <b>un espacio del centro</b>. Con intención y sin hacer daño.',
    fasesT: 'Cómo se juega',
    fases: [
      ['Leed la obra', 'Elegid dos obras históricas, una de ellas andaluza, y haced su lectura denotativa y connotativa.'],
      ['Buscad la idea', 'Decidid qué obra transformáis, qué recurso usáis, dónde está el giro y en qué espacio del centro lo colocaríais.'],
      ['Fotomontaje', 'Recortad, probad combinaciones y pegad con intención. Un meme por pareja.'],
      ['Presentadlo', 'Explicad vuestro meme a la clase y valorad vuestro trabajo y el de las demás parejas.']
    ],
    entregasT: 'Qué tenéis que entregar',
    entregas: [
      '<b>El meme</b>, en mano, y <b>una foto del meme</b> en la tarea de Classroom.',
      '<b>Fotos de las páginas del cuaderno de artista</b> (lectura de las obras y boceto de la idea) en la tarea de Classroom.',
      'La <b>presentación</b> en el aula y la <b>autoevaluación</b>.'
    ],
    pista: '<b>Recordad:</b> no se pueden hacer fotos dentro del centro. El meme se piensa para un espacio del centro, pero se construye en papel; las fotos para Classroom, en casa.'
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
    intro: 'Trabajáis <b>en parejas</b> y vamos rápido: cada actividad cabe en una o dos sesiones. Lo escrito va en vuestro <b>cuaderno de artista</b>. <b>Entrega:</b> el meme, en mano; y en la tarea de Classroom, una foto del meme y fotos de las páginas del cuaderno (hechas en casa, nunca dentro del centro).',
    acts: [
      ['Leer la obra', 'Bloque 1', {"obj": "Aprender a leer una obra antes de transformarla.", "pasos": ["Elegid <b>dos obras de arte históricas</b> que os gustaría transformar en meme. <b>Una tiene que ser andaluza.</b>", "Haced la <b>ficha</b> de cada obra: título, autoría, fecha y técnica.", "<b>Lectura denotativa:</b> escribid lo que se ve (figuras, objetos, colores y composición).", "<b>Lectura connotativa:</b> escribid lo que sugiere (símbolos, emociones y mensaje).", "<b>Ayer y hoy:</b> explicad qué contaba la obra en su época y qué podría contar hoy."], "donde": "En pareja, en vuestro cuaderno de artista.", "entrega": "Fotos de estas páginas del cuaderno en la tarea de Classroom (hechas en casa, nunca dentro del centro)."}],
      ['La idea', 'Bloque 2', {"obj": "Decidir qué va a decir vuestro meme y dónde se va a ver.", "pasos": ["Elegid <b>una</b> de las dos obras.", "Elegid el <b>recurso</b>: hipérbole, ironía, metáfora visual o incongruencia.", "Decidid dónde está el <b>giro</b> y escribid el <b>texto</b>.", "Decidid en qué <b>espacio del centro</b> lo colocaríais y para qué <b>público</b>.", "Haced un <b>boceto rápido</b> del meme.", "Comprobad: <b>¿critica una idea o humilla a una persona?</b> Si humilla, cambiadlo."], "donde": "En pareja, en vuestro cuaderno de artista.", "entrega": "Fotos de estas páginas del cuaderno en la tarea de Classroom (hechas en casa, nunca dentro del centro)."}],
      ['Fotomontaje', 'Bloque 3', {"obj": "Construir vuestro meme en papel.", "pasos": ["Recortad <b>fragmentos de distintas obras</b>: una cabeza, un fondo, un objeto…", "<b>Probad combinaciones</b> antes de pegar. Buscad el contraste.", "<b>Pegad con intención</b>: cada pieza tiene que decir algo.", "Añadid el <b>texto</b>.", "Comprobad que <b>se entiende de un vistazo</b>: pocos elementos, contraste y texto e imagen juntos."], "donde": "En pareja, en el aula. Un meme por pareja.", "entrega": "El meme, en mano. Y una foto del meme en la tarea de Classroom (hecha en casa)."}],
      ['Presentación', 'Bloque 4', {"obj": "Contar a la clase vuestro meme y valorarlo.", "pasos": ["Preparad <b>en pareja</b> las respuestas a las preguntas del paso 2.", ["Presentad vuestro meme a la clase: la idea y el espacio del centro para el que lo pensasteis. <b>Vuestro profesor os hará estas preguntas:</b>", ["<b>¿Cómo lo habéis hecho?</b> Contad los pasos, desde la lectura de las obras hasta el fotomontaje terminado. <span class=\"il-crit\">Criterio 4.2</span>", "<b>¿Qué os costó más y cómo lo resolvisteis?</b> Por ejemplo, encontrar el giro o conseguir que las piezas encajaran. <span class=\"il-crit\">Criterio 4.2</span>", "<b>¿De qué estáis más orgullosos y qué cambiaríais si lo repitierais?</b> <span class=\"il-crit\">Criterio 4.2</span>"]], "Después, haced la <b>autoevaluación y la coevaluación</b> en el formulario que os dará vuestro profesor."], "donde": "En pareja, en el aula.", "entrega": "La exposición es oral, en clase. La autoevaluación y la coevaluación, en el formulario."}]
    ],
    cotejoT: 'Lista de cotejo: ¿cómo vais?',
    cotejoP: 'Marca lo que ya tienes hecho. Las marcas se guardan solo en este dispositivo. Cuando tu profesor te lo pida, <b>haz una captura de pantalla de esta lista y súbela a la tarea de Classroom</b>: así podrá darte retroalimentación.',
    grupos: [
      ['Leer la obra', ['Tenemos dos obras históricas y una es andaluza.', 'Cada obra tiene su ficha (título, autoría, fecha y técnica).', 'Hemos hecho la lectura denotativa de las dos.', 'Hemos hecho la lectura connotativa de las dos.', 'Hemos explicado qué contaba cada obra en su época y qué podría contar hoy.']],
      ['La idea', ['Hemos elegido la obra y el recurso humorístico.', 'Sabemos dónde está el giro y tenemos el texto.', 'Hemos decidido el espacio del centro y el público.', 'Hemos comprobado que no humilla a nadie ni repite estereotipos.']],
      ['Fotomontaje', ['Hemos recortado fragmentos de distintas obras.', 'Hemos probado combinaciones antes de pegar.', 'El meme tiene texto y se entiende de un vistazo.']],
      ['Presentación y entrega', ['Hemos preparado la explicación: idea, espacio, proceso, dificultades y logros.', 'Hemos hecho la autoevaluación y la coevaluación.', 'Hemos entregado el meme en mano.', 'Hemos subido a Classroom la foto del meme y las fotos del cuaderno.']]
    ],
    progreso: (n, t) => `Llevas ${n} de ${t}`, borrar: 'Borrar mis marcas', confirmar: '¿Seguro? Pulsa otra vez para borrar.'
  };
  const ACT_IL = [['IL 1.1.1', 'IL 1.1.2', 'IL 1.2.1'], ['IL 3.1.1', 'IL 3.1.2'], ['IL 3.2.1', 'IL 3.2.2'], ['IL 4.2.1', 'IL 4.2.2']];
  const KEY = 'insertart-exp4n2-cotejo';
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
          <li><span class="act-n">${i + 1}</span><div><p class="act-tag">${tag}</p><h3>${t}</h3>${window.CRIT ? CRIT.cuerpo(d) : d}${extra ? `<div class="act-extra">${extra}</div>` : ''}${window.CRIT ? CRIT.enActividad(pick('rub', RUB_ES), ACT_IL[i]) : ''}</div></li>`).join('')}</ol>
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

  /* =============== MINIJUEGO: ¿QUÉ RECURSO ES? =============== */
  const JUEGO_ES = {
    titulo: '¿Qué recurso es?',
    intro: 'Lee cada situación y elige el recurso humorístico que usa. Son ocho rondas.',
    ops: { hiperbole: 'Hipérbole', ironia: 'Ironía', metafora: 'Metáfora visual', incongruencia: 'Incongruencia' },
    items: [
      ['«Tengo un millón de tareas para mañana.»', 'hiperbole', 'Nadie tiene un millón de tareas: se exagera para hacer reír.'],
      ['Un rey con corona y capa esperando el autobús.', 'incongruencia', 'Un rey no espera el autobús: se rompe la lógica.'],
      ['Se va el wifi justo en mitad de un vídeo y alguien dice: «Qué bien».', 'ironia', 'Se dice lo contrario de lo que se piensa.'],
      ['Una mochila dibujada como una montaña enorme sobre la espalda de un alumno.', 'metafora', 'La montaña sustituye a la mochila para mostrar cuánto pesa.'],
      ['Una estatua griega haciendo cola en la cafetería del instituto.', 'incongruencia', 'Mezcla dos mundos que no encajan.'],
      ['«He dormido tanto que he visto amanecer tres veces.»', 'hiperbole', 'Una exageración imposible.'],
      ['Un reloj que se derrite sobre el pupitre a última hora del viernes.', 'metafora', 'El reloj derretido sustituye a la idea de que el tiempo no pasa.'],
      ['Un cartel de «Biblioteca muy tranquila» rodeado de gente gritando.', 'ironia', 'El texto dice lo contrario de lo que vemos.']
    ],
    bien: '¡Correcto!', mal: 'No es ese. La respuesta era:', siguiente: 'Siguiente', otraVez: 'Jugar otra vez',
    ronda: (i, n) => `Ronda ${i} de ${n}`, puntos: (p, n) => `Aciertos: ${p} de ${n}`,
    final: (p, n) => p === n ? `¡Pleno! ${p} de ${n}. Ya dominas los recursos.` : `Has acertado ${p} de ${n}. Repasa la teoría y vuelve a intentarlo.`
  };
  const quiz = (() => {
    let i = 0, puntos = 0;
    const J = () => pick('juego', JUEGO_ES);
    function carta() {
      const j = J(); const n = j.items.length;
      if (i >= n) return `<div class="q-card"><p class="q-s">${j.final(puntos, n)}</p><button type="button" class="q-next" data-q="reset">${j.otraVez}</button></div>`;
      const [s] = j.items[i];
      return `<div class="q-card">
        <span class="q-n">${j.ronda(i + 1, n)}</span>
        <p class="q-s">${s}</p>
        <div class="q-ops">${Object.entries(j.ops).map(([k, l]) => `<button type="button" data-op="${k}">${l}</button>`).join('')}</div>
        <p class="q-fb" aria-live="polite"></p>
      </div>`;
    }
    function html() {
      const j = J();
      return `<section class="quiz" id="quiz" aria-labelledby="quiz-t">
        <h2 id="quiz-t">${j.titulo}</h2><p>${j.intro}</p>
        <span class="q-score">${j.puntos(puntos, j.items.length)}</span>
        <div class="q-wrap">${carta()}</div></section>`;
    }
    function init(root) {
      const box = root.querySelector('#quiz'); if (!box) return;
      const pintar = () => { const j = J(); box.querySelector('.q-wrap').innerHTML = carta(); box.querySelector('.q-score').textContent = j.puntos(puntos, j.items.length); };
      box.addEventListener('click', e => {
        const b = e.target.closest('button'); if (!b) return;
        const j = J();
        if (b.dataset.q === 'reset') { i = 0; puntos = 0; pintar(); return; }
        if (b.dataset.q === 'next') { i++; pintar(); return; }
        if (b.dataset.op) {
          const [, sol, por] = j.items[i];
          const ok = b.dataset.op === sol;
          if (ok) puntos++;
          box.querySelectorAll('[data-op]').forEach(x => { x.disabled = true; if (x.dataset.op === sol) x.classList.add('ok'); });
          if (!ok) b.classList.add('ko');
          box.querySelector('.q-fb').innerHTML = (ok ? `<b>${j.bien}</b> ` : `<b>${j.mal} ${j.ops[sol]}.</b> `) + por;
          box.querySelector('.q-fb').insertAdjacentHTML('afterend', `<button type="button" class="q-next" data-q="next">${j.siguiente}</button>`);
          box.querySelector('.q-score').textContent = j.puntos(puntos, j.items.length);
          if (window.SFX) ok ? window.SFX.coin() : window.SFX.metal();
        }
      });
    }
    return { html, init };
  })();

  const recursos = {
    html() {
      return `
      <div class="recursos" style="--c:var(--rosa)">
        ${quiz.html()}
        <section class="videos" aria-labelledby="vid-t"><h2 id="vid-t" class="sub-vid">${ui().videosT}</h2><p class="v-intro">${ui().videosP}</p>
          ${DIAS.map(([ids], d) => { const v = ids.flatMap(id => VIDEOS[id] || []); return v.length ? `<h3>${ui().diaK} ${d + 1} · ${ui().dias[d]}</h3><ul>${v.map(ytLink).join('')}</ul>` : ''; }).join('')}
          <p class="v-subt">${ui().subt}</p></section>
      </div>`;
    },
    init(root) { quiz.init(root); }
  };

  /* =============== RÚBRICA (la misma que la hoja de notas) =============== */
  const RUB_ES = {
    intro: 'Así se evalúa este nivel. Cada indicador se puntúa de 1 a 10. La nota de cada criterio es la media de sus indicadores y la nota del nivel es la media de los cinco criterios.',
    criteriosT: 'Criterios de evaluación',
    criterios: [
      ['1.1', 'Analizar manifestaciones artísticas de diferentes épocas y culturas, contextualizándolas, describiendo sus aspectos esenciales, valorando el proceso de creación y el resultado final, y evidenciando una actitud de apertura, interés y respeto en su recepción.'],
      ['1.2', 'Valorar críticamente los hábitos, los gustos y los referentes artísticos de diferentes épocas y culturas, reflexionando sobre su evolución y sobre su relación con los del presente.'],
      ['3.1', 'Participar, con iniciativa, confianza y creatividad, en la exploración de diferentes medios, técnicas y formatos audiovisuales, decodificando sus lenguajes, identificando las herramientas y distinguiendo sus fines.'],
      ['3.2', 'Realizar producciones audiovisuales, individuales o colaborativas, asumiendo diferentes funciones; incorporando el uso de las tecnologías digitales con una intención expresiva; buscando un resultado final ajustado al proyecto preparado previamente; y seleccionando y empleando, con corrección y de forma creativa, las herramientas y medios disponibles más adecuados.'],
      ['4.2', 'Exponer el resultado final de la creación de un producto artístico, individual o grupal, poniendo en común y valorando críticamente el desarrollo de su elaboración, las dificultades encontradas, los progresos realizados y los logros alcanzados.']
    ],
    niveles: ['Insuficiente (1–4)', 'Suficiente (5)', 'Bien (6)', 'Notable (7–8)', 'Sobresaliente (9–10)'],
    criterio: 'Criterio',
    bloques: [
      ['Bloque 1. Leer la obra', [
        ['IL 1.1.1', 'Lectura denotativa', '1.1', 'Describe de forma objetiva las dos obras elegidas (una andaluza): ficha (título, autoría, fecha y técnica) y lo que se ve (figuras, colores, composición).', ['Falta una obra o la descripción es mínima o errónea.', 'Ficha básica; describe solo algunos elementos.', 'Ficha completa y descripción correcta de lo principal.', 'Descripción ordenada y precisa de figuras, color y composición.', 'Descripción completa con vocabulario técnico.']],
        ['IL 1.1.2', 'Lectura connotativa', '1.1', 'Interpreta el significado de las obras: qué sugieren, qué símbolos usan y qué emociones transmiten.', ['No interpreta o confunde describir con interpretar.', 'Interpretación vaga, sin apoyo en la imagen.', 'Interpretación correcta apoyada en algún detalle.', 'Interpreta símbolos y emociones con detalles de la imagen.', 'Interpretación personal, argumentada y con contexto histórico.']],
        ['IL 1.2.1', 'Ayer y hoy', '1.2', 'Relaciona lo que contaba la obra en su época con lo que puede contar hoy (gustos, valores, costumbres).', ['No establece relación.', 'Relación superficial.', 'Explica una semejanza o diferencia con el presente.', 'Compara con argumentos la época y el presente.', 'Reflexiona críticamente sobre la evolución y la conecta con su meme.']]]],
      ['Bloque 2. La idea', [
        ['IL 3.1.1', 'Recurso y giro', '3.1', 'Elige el recurso humorístico (hipérbole, ironía, metáfora visual o incongruencia) y explica dónde está el giro de su meme.', ['Sin recurso ni giro.', 'Nombra un recurso, pero no lo aplica.', 'Recurso y giro identificados.', 'Explica cómo el recurso produce el giro.', 'Recurso muy bien elegido y justificado; prueba alternativas en el boceto.']],
        ['IL 3.1.2', 'Espacio y público', '3.1', 'Piensa el meme para un espacio y un público del centro y comprueba que critica una idea sin reforzar estereotipos.', ['Sin destinatario o refuerza estereotipos.', 'Espacio o público poco definidos.', 'Espacio y público definidos, sin estereotipos.', 'El mensaje se adapta al espacio y al público.', 'Justifica la elección y cuestiona un prejuicio con respeto.']]]],
      ['Bloque 3. Fotomontaje', [
        ['IL 3.2.1', 'Recorta y combina', '3.2', 'Construye el meme por fotomontaje tradicional, recortando fragmentos de distintas obras y combinándolos con intención.', ['No es fotomontaje o usa una sola imagen sin cambios.', 'Junta recortes sin intención clara.', 'Combina fragmentos de varias obras con intención.', 'Recortes limpios y combinación coherente con la idea.', 'Composición cuidada y sorprendente: las piezas dicen algo nuevo.']],
        ['IL 3.2.2', 'Se entiende de un vistazo', '3.2', 'El meme se entiende de un vistazo: texto e imagen juntos, contraste y pocos elementos.', ['No se entiende.', 'Se entiende solo con explicación.', 'Se entiende; texto e imagen están relacionados.', 'Claro y directo, con buen contraste y síntesis.', 'Impacto inmediato: texto e imagen se potencian.']]]],
      ['Bloque 4. Presentación', [
        ['IL 4.2.1', 'Exposición', '4.2', 'Presenta el meme a la clase explicando la idea, el proceso, las dificultades encontradas y los logros.', ['No presenta o lee sin explicar.', 'Presentación breve y poco clara.', 'Explica la idea y el proceso con claridad.', 'Explica idea, proceso, dificultades y logros con vocabulario técnico.', 'Presentación clara y atractiva; responde a las preguntas.']],
        ['IL 4.2.2', 'Autoevaluación y coevaluación', '4.2', 'Valora críticamente su trabajo y el de otras parejas, con argumentos y respeto.', ['No se autoevalúa.', 'Autoevaluación superficial.', 'Identifica aciertos y errores.', 'Propone mejoras concretas para su trabajo.', 'Valora con criterio su trabajo y el de otras parejas.']]]]
    ]
  };
  const rubrica = {
    html() {
      const R = pick('rub', RUB_ES);
      const mapa = pick('act', ACT_ES).acts.map((a, i) => [a[0], ACT_IL[i]]);
      return `
      <div class="rub" style="--c:var(--rosa)">
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
  window.CONTENIDOS['exp4-n2'] = { mision, teoria, actividades, recursos, rubrica };
})();
