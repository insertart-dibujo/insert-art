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
@media (max-width:700px){.pasos3,.lectura,.q-ops{grid-template-columns:1fr}}
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

  /* =============== TEORÍA =============== */
  const UI_ES = {
    indice: 'Índice', tocAria: 'Índice de la teoría', cuadernoLabel: 'En vuestro cuaderno de artista:', misionK: 'MISIÓN',
    juegoT: '¿Qué recurso es?', recPres: 'Presentación de clase', canva: 'Humor gráfico (Canva)'
  };
  const ui = () => pick('ui', UI_ES);

  const ORDEN = ['meme', 'lectura', 'anatomia', 'historia', 'fotomontaje', 'vistazo', 'recursos', 'estereotipos'];
  const SEC_ES = {
    meme: ['¿Qué es un meme?', h => `
      <p class="def">Un <b>meme</b> es una idea que se copia y se transforma al pasar de persona a persona.</p>
      <div class="flujo"><span>IDEA</span><b>→</b><span>COPIA</span><b>→</b><span>NUEVA VERSIÓN</span></div>
      <p>El biólogo <b>Richard Dawkins</b> inventó la palabra en su libro <i>El gen egoísta</i> (1976). Hoy la usamos sobre todo para las imágenes con texto que circulan por internet.</p>`],

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

    anatomia: ['Anatomía de un meme', h => `
      ${h.fig()}
      <ul class="cual">
        <li><b>Texto</b><span>Plantea la situación.</span></li>
        <li><b>Imagen</b><span>Aporta la reacción.</span></li>
        <li><b>Contexto</b><span>Reconocemos algo que nos pasa.</span></li>
        <li><b>Giro</b><span>La contradicción provoca el humor.</span></li>
      </ul>`],

    historia: ['El arte ya se reía antes de internet', h => `
      <ul class="cards3">
        <li><b>Goya</b><span><i>Los Caprichos</i> (1799): sátira de los vicios y del poder de su época.</span></li>
        <li><b>Daumier</b><span>Caricaturas en la prensa del siglo XIX para criticar la sociedad.</span></li>
        <li><b>Duchamp</b><span><i>L.H.O.O.Q.</i> (1919): cambiar un icono del arte para provocar.</span></li>
      </ul>
      <p>Igual que ellos, vais a partir de una obra conocida y a cambiar su sentido para decir algo nuevo.</p>`],

    fotomontaje: ['Fotomontaje tradicional', h => `
      <p class="def"><b>Fotomontaje tradicional:</b> recortar fragmentos de distintas imágenes y pegarlos para crear una imagen nueva con otro significado.</p>
      <ol class="pasos3"><li><b>Recorta</b>Fragmentos de distintas obras: una cabeza, un fondo, un objeto…</li><li><b>Prueba combinaciones</b>Mueve las piezas antes de pegar. Busca el contraste.</li><li><b>Pega con intención</b>Cada pieza tiene que decir algo.</li></ol>
      <p class="tip"><b>No es juntar por juntar:</b> es hacer que las piezas digan algo.</p>`],

    vistazo: ['Se entiende de un vistazo', h => `
      <ul class="cards3">
        <li><b>Contraste</b><span>Grande / pequeño. Serio / absurdo.</span></li>
        <li><b>Síntesis</b><span>Pocos elementos. Una idea clara.</span></li>
        <li><b>Texto + imagen</b><span>Juntos dicen algo que solos no dirían.</span></li>
      </ul>`],

    recursos: ['Convencer y hacer reír', h => `
      <p>El meme y la publicidad comparten trucos. Estos son los cuatro recursos que vais a usar:</p>
      <ul class="cual">
        <li><b>Hipérbole</b><span>Exagerar: «Tengo un millón de tareas». ¿Un millón?</span></li>
        <li><b>Ironía</b><span>Decir lo contrario: «Qué bien», cuando se cae internet.</span></li>
        <li><b>Metáfora visual</b><span>Sustituir: una mochila convertida en una montaña.</span></li>
        <li><b>Incongruencia</b><span>Romper la lógica: un rey esperando el autobús.</span></li>
      </ul>
      <p class="tip"><b>Para practicar:</b> en la pestaña <b>Recursos</b> tienes el juego «¿Qué recurso es?».</p>`],

    estereotipos: ['Humor sí, estereotipos no', h => `
      <p>Reírse del género, del origen o del cuerpo de alguien repite el sexismo y los cánones corporales que vemos en la publicidad y en los medios. <b>Cuestionad los prejuicios, no a quienes los sufren.</b></p>
      <p class="ojo"><b>Antes de compartir, preguntaos:</b> ¿de quién nos reímos? ¿Critica una idea o humilla a una persona?</p>`]
  };

  function construir() {
    const h = { cuaderno: s => `<p class="manual-tip"><b>${ui().cuadernoLabel}</b> ${s}</p>`, fig: figAnatomia };
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
      ['Leer la obra', 'Bloque 1', 'Elegid <b>dos obras de arte históricas</b> que os gustaría transformar en meme; <b>una de ellas, andaluza</b>. De cada una, en el cuaderno:<br>• <b>Ficha:</b> título, autoría, fecha y técnica.<br>• <b>Lectura denotativa:</b> qué se ve (figuras, objetos, colores, composición).<br>• <b>Lectura connotativa:</b> qué sugiere, qué símbolos usa y qué emociones transmite.<br>• <b>Ayer y hoy:</b> qué contaba en su época y qué podría contar hoy.'],
      ['La idea', 'Bloque 2', 'Elegid una de las dos obras y haced un <b>boceto rápido</b> del meme en el cuaderno. Anotad:<br>• El <b>recurso</b> que vais a usar: hipérbole, ironía, metáfora visual o incongruencia.<br>• Dónde está el <b>giro</b> y cuál será el <b>texto</b>.<br>• En qué <b>espacio del centro</b> lo colocaríais y para qué <b>público</b>.<br>• Comprobad que <b>critica una idea y no humilla a nadie</b>.'],
      ['Fotomontaje', 'Bloque 3', 'Construid <b>un meme por pareja</b> con <b>fotomontaje tradicional</b>: recortad fragmentos de <b>distintas obras</b>, probad combinaciones y pegad con intención. Añadid el texto. Tiene que <b>entenderse de un vistazo</b>: contraste, pocos elementos y texto e imagen que se apoyen.'],
      ['Presentación', 'Bloque 4', 'Presentad vuestro meme a la clase: la <b>idea</b>, el <b>espacio del centro</b> para el que lo pensasteis, el <b>proceso</b>, las <b>dificultades</b> y los <b>logros</b>. Después, haced la <b>autoevaluación y la coevaluación</b> con el formulario que os dará vuestro profesor.', `<div class="ideas"><b>Exposición guiada: vuestro profesor os hará estas preguntas:</b><ol style="margin:8px 0 0 20px"><li><b>¿Cómo lo habéis hecho?</b> Contad los pasos, desde la lectura de las obras hasta el fotomontaje terminado. <span class="il-crit">Criterio 4.2</span></li><li><b>¿Qué os costó más y cómo lo resolvisteis?</b> Por ejemplo, encontrar el giro o conseguir que las piezas encajaran. <span class="il-crit">Criterio 4.2</span></li><li><b>¿De qué estáis más orgullosos y qué cambiaríais si lo repitierais?</b> <span class="il-crit">Criterio 4.2</span></li></ol><p style="margin-top:8px">Preparad las respuestas en pareja antes de la exposición.</p></div>`]
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
