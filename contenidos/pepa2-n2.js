/* INSERT ART · PEPA 2.º ESO · Nivel 02 · Estampas de invierno */
(function () {
  /* El viaje de una estampa: matriz → entintar → presionar → estampa (sale al revés) */
  function figEstampa(L) {
    const paso = (x, n, t, s, dib) => `<g transform="translate(${x} 0)">
      <text x="70" y="22" text-anchor="middle" class="es-n">${n}</text>
      <rect x="10" y="34" width="120" height="120" fill="#17151c" stroke="#5c5866"/>${dib}
      <text x="70" y="182" text-anchor="middle" class="es-t">${L(t)}</text>
      <text x="70" y="202" text-anchor="middle" class="es-s">${L(s)}</text></g>`;
    const letras = `<text x="0" y="0" class="es-l">${L('HOLA')}</text>`;
    return `<svg class="fig-ep fig-est" viewBox="0 0 640 214" role="img" aria-label="${L('El proceso de estampar: matriz, entintado, presión con el rodillo y estampa invertida')}">
      ${paso(0, '1', 'Matriz', 'Dibujo en espejo', `<rect x="26" y="50" width="88" height="88" fill="#d8d4cc"/><g transform="translate(70 104) scale(-1 1)" text-anchor="middle">${letras}</g><path d="M32 128 q38 -18 76 0" stroke="#8a8592" stroke-width="3" fill="none"/>`)}
      ${paso(160, '2', 'Entintar', 'Capa fina', `<rect x="26" y="50" width="88" height="88" fill="#ff5ad8"/><g transform="translate(70 104) scale(-1 1)" text-anchor="middle"><text x="0" y="0" class="es-l" fill="#9a2f86">${L('HOLA')}</text></g><rect x="44" y="40" width="52" height="18" rx="6" fill="#d6ff3a"/>`)}
      ${paso(320, '3', 'Presionar', 'Rodillo o cuchara', `<rect x="26" y="50" width="88" height="88" fill="#f3efe6"/><rect x="14" y="84" width="112" height="20" rx="10" fill="#c08a4e"/><rect x="2" y="89" width="14" height="10" rx="3" fill="#8a5a2e"/><rect x="124" y="89" width="14" height="10" rx="3" fill="#8a5a2e"/><path d="M70 64 v-10 m0 60 v10" stroke="#d6ff3a" stroke-width="3"/>`)}
      ${paso(480, '4', 'Estampa', 'Sale al derecho', `<rect x="26" y="50" width="88" height="88" fill="#f3efe6"/><rect x="34" y="58" width="72" height="72" fill="#ff5ad8"/><g transform="translate(70 104)" text-anchor="middle"><text x="0" y="0" class="es-l" fill="#f3efe6">${L('HOLA')}</text></g>`)}
      <path d="M134 94 h22 m-8 -6 l8 6 l-8 6 M294 94 h22 m-8 -6 l8 6 l-8 6 M454 94 h22 m-8 -6 l8 6 l-8 6" stroke="#d6ff3a" stroke-width="2.4" fill="none"/>
    </svg>`;
  }

  /* Procedimientos: directo, aditivo y sustractivo vistos de perfil */
  function figProced(L) {
    const caja = (x, t, dib) => `<g transform="translate(${x} 0)"><rect x="0" y="0" width="200" height="130" fill="#17151c" stroke="#5c5866"/>${dib}
      <text x="100" y="156" text-anchor="middle" class="es-t">${L(t)}</text></g>`;
    return `<svg class="fig-ep fig-est" viewBox="0 0 640 166" role="img" aria-label="${L('Tres procedimientos de estampación vistos de perfil: directo, aditivo y sustractivo')}">
      ${caja(0, 'Directo', `<rect x="20" y="86" width="160" height="10" fill="#8a8592"/><path d="M34 86 q20 -14 40 0 t40 0 t40 0" stroke="#ff5ad8" stroke-width="6" fill="none"/>`)}
      ${caja(220, 'Aditivo', `<rect x="20" y="86" width="160" height="10" fill="#8a8592"/><rect x="36" y="72" width="30" height="14" fill="#c08a4e"/><path d="M84 86 q10 -18 20 0 q10 -18 20 0" fill="#5ad1ff"/><rect x="140" y="76" width="26" height="10" fill="#d6ff3a"/>`)}
      ${caja(440, 'Sustractivo', `<path d="M20 70 h40 v14 h18 v-14 h44 v14 h18 v-14 h40 v26 h-160 z" fill="#8a8592"/><path d="M20 66 h40 M78 66 h44 M140 66 h40" stroke="#ff5ad8" stroke-width="4"/>`)}
    </svg>`;
  }

  const ES = {
    t: {},
    ui: {
      indice: 'Índice', tocAria: 'Índice de la teoría', cuadernoLabel: 'En tu cuaderno de artista:', misionK: 'MISIÓN',
      diasIntro: 'La teoría está repartida en <b>cinco días</b>. Cada día se lee o se explica en clase en <b>15 minutos como máximo</b> y te prepara para una actividad. Los vídeos de «Para ver más» son para ampliar en casa: no entran en esos 15 minutos.',
      diaK: 'DÍA', minutos: '15 min', prepara: 'Te prepara para', actK: 'Actividad',
      dias: ['Qué es estampar', 'La huella del gesto', 'La monotipia', 'Matriz y tirada', 'De la idea a la exposición'],
      saberK: 'Saber básico', verMas: 'Para ver más (en casa)', abreYT: 'Se abre en YouTube',
      subt: 'Los vídeos están en español. En YouTube puedes activar los subtítulos y traducirlos automáticamente a tu idioma.',
      videosT: 'Vídeos de la unidad', videosP: 'Todos los vídeos de la teoría, ordenados por días. Se abren en YouTube.',
      enlacesT: 'Dónde ver grabados',
      recIntro: '<b>Material del taller:</b> témpera, pinceles (uno seco y gastado vale), esponja, <b>rodillo de panadero</b> y la parte de atrás de una cuchara para presionar, una funda de plástico o un acetato, papel y cartulina. Cada alumno trae <b>una bandeja de poliestireno limpia</b> (de las de fruta o verdura) y viejos periódicos para proteger la mesa. Si llegan los rodillos de espuma, los usaremos para entintar.'
    },
    enlaces: [
      ['Museo del Prado', 'https://www.museodelprado.es/', 'Busca «Caprichos» o «Desastres de la guerra»: los grabados de Goya en alta resolución.'],
      ['Biblioteca Digital Hispánica', 'https://bdh.bne.es/', 'Grabados, estampas y carteles antiguos de la Biblioteca Nacional de España.'],
      ['Museo Picasso Málaga', 'https://www.museopicassomalaga.org/', 'Picasso, malagueño, hizo más de dos mil grabados. Aquí puedes ver su obra.'],
      ['Real Academia de Bellas Artes de San Fernando', 'https://www.realacademiabellasartessanfernando.com/', 'Guarda la Calcografía Nacional, con las planchas originales de Goya.'],
      ['Google Arts & Culture', 'https://artsandculture.google.com/', 'Busca Durero, Rembrandt, Piranesi o Toulouse-Lautrec y amplía sus estampas.']
    ],
    sec: {
      estampar: ['Estampar: las palabras del taller', h => `
        <p class="def"><b>Estampar</b> es pasar una imagen de una superficie a otra presionando. La superficie que lleva la imagen es la <b>matriz</b>; lo que sale en el papel es la <b>estampa</b>.</p>
        ${h.fig('estampa')}
        <ul class="cual cual5">
          <li><b>Matriz</b><span>La plancha que entintas: madera, metal, linóleo, poliestireno, plástico…</span></li>
          <li><b>Estampa</b><span>La imagen impresa en el papel.</span></li>
          <li><b>Prueba</b><span>Una estampa de ensayo para ver cómo va.</span></li>
          <li><b>Tirada</b><span>El conjunto de estampas iguales sacadas de una matriz.</span></li>
          <li><b>Firma y número</b><span>Debajo de cada estampa, a lápiz: 2/5 es la segunda de una tirada de cinco.</span></li>
        </ul>
        <p class="ojo"><b>La estampa sale al revés que la matriz</b>, como en un espejo. Si escribes una palabra, escríbela al revés en la matriz.</p>`],

      historia: ['El grabado en la historia', h => `
        <p>Durante siglos, el grabado fue la manera de que una imagen llegara a mucha gente: de una matriz salen muchas copias. Fíjate en la técnica de cada artista.</p>
        <ul class="cual cual3">
          <li><b>Durero (s. XVI)</b><span>Alemania. <strong>Xilografía</strong>: talla la madera y deja en relieve lo que imprime. Su <i>Rinoceronte</i> (1515) se dibujó sin haber visto nunca uno.</span></li>
          <li><b>Mantegna (s. XV-XVI)</b><span>Italia. Grabados en <strong>metal</strong> con líneas paralelas que dan volumen.</span></li>
          <li><b>Rembrandt (s. XVII)</b><span>Países Bajos. <strong>Aguafuerte</strong>: el ácido «muerde» la línea en el metal. Maestro de la luz y la sombra.</span></li>
          <li><b>Piranesi (s. XVIII)</b><span>Italia. Las <i>Cárceles</i>: arquitecturas imaginarias, enormes y oscuras.</span></li>
          <li><b>Goya (s. XVIII-XIX)</b><span>España. <i>Los Caprichos</i>: aguafuerte y <strong>aguatinta</strong> (manchas de gris) para criticar los vicios de su época.</span></li>
          <li><b>Toulouse-Lautrec (s. XIX)</b><span>Francia. <strong>Litografía</strong> a color: los carteles de los cabarés de París. El grabado llega a la calle.</span></li>
          <li><b>Matisse (s. XX)</b><span>Francia. Linóleo con líneas blancas sobre fondo negro: pocas líneas, mucha expresión.</span></li>
          <li><b>Picasso (s. XX)</b><span>Nacido en <strong>Málaga</strong>. Linóleo a <strong>plancha perdida</strong>: talla y estampa la misma plancha color a color.</span></li>
          <li><b>Miró (s. XX)</b><span>Barcelona. Estampas de manchas, signos y colores planos, casi como un juego.</span></li>
        </ul>
        ${h.cuaderno('pega o dibuja una pequeña versión de la obra que te toque y anota autor, siglo, técnica y lo que más te llama la atención.')}`],

      hoy: ['Estampar hoy: está por todas partes', h => `
        <p>Lo que hacían Durero o Toulouse-Lautrec no ha desaparecido: ha cambiado de sitio.</p>
        <ul class="cards3">
          <li><b>En la ropa</b><span>Las camisetas y bolsas de tela se estampan con serigrafía, una técnica de plantilla.</span></li>
          <li><b>En el papel</b><span>Sellos de caucho, papel de regalo, carteles de conciertos y portadas de libros.</span></li>
          <li><b>En el arte actual</b><span>Talleres de grabado, fanzines y artistas que mezclan estampa y pintura.</span></li>
        </ul>
        <p class="tip"><b>Ayer y hoy:</b> en tu ficha, busca un uso actual que se parezca a la obra antigua que has analizado. ¿Qué ha cambiado y qué sigue igual?</p>`],

      gesto: ['El gesto y el instrumento', h => `
        <p class="def">Cada herramienta deja una <b>huella</b> distinta, y el mismo instrumento cambia según tu <b>gesto</b>: rápido o lento, con fuerza o suave, arrastrando o golpeando.</p>
        <ul class="cual cual3">
          <li><b>Dedo</b><span>Puntos, manchas y arrastres directos.</span></li>
          <li><b>Pincel seco</b><span>Poca pintura: deja la textura de las cerdas, como hierba o pelo.</span></li>
          <li><b>Esponja</b><span>A toques: textura porosa, como piedra o niebla.</span></li>
          <li><b>Canto de cartón</b><span>Arrastrado o estampado: líneas rectas y planos limpios.</span></li>
          <li><b>Peine o tenedor</b><span>Líneas paralelas, ondas y tramas.</span></li>
          <li><b>Hojas y objetos</b><span>Entintados y presionados: dejan su forma y su textura.</span></li>
        </ul>
        <ul class="cards3">
          <li><b>Cualidades plásticas</b><span>Lo que tiene la huella: grosor, textura, transparencia o densidad.</span></li>
          <li><b>Efecto visual</b><span>Lo que parece: movimiento, calma, frío, viento, nieve…</span></li>
          <li><b>Referentes</b><span>Miró llenaba sus obras de signos hechos con gestos rápidos. Durero, de líneas talladas una a una.</span></li>
        </ul>`],

      tecnicas: ['Técnicas secas y húmedas, y su soporte', h => `
        <div class="lectura">
          <div><h3>Técnicas secas</h3><ul><li><b>Lápiz de grafito</b>: líneas y degradados.</li><li><b>Lápices de colores</b>: color por capas.</li><li><b>Carboncillo</b>: negros intensos, se difumina.</li><li><b>Pastel</b>: color opaco y polvoriento.</li></ul><p>El carboncillo y el pastel se manchan: se protegen con <b>fijador</b> (o laca, siempre lejos de la cara y con ventilación).</p></div>
          <div><h3>Técnicas húmedas</h3><ul><li><b>Tinta y rotulador</b>: línea limpia y negra.</li><li><b>Acuarela</b>: transparente; el blanco es el papel.</li><li><b>Témpera</b>: opaca, cubre y se seca rápido.</li><li><b>Acrílico</b>: opaco, al secarse ya no se disuelve en agua.</li></ul></div>
        </div>
        <h3 class="sub">Cada técnica pide su soporte</h3>
        <ul class="cual">
          <li><b>Papel fino</b><span>Lápiz y rotulador. Con agua se arruga.</span></li>
          <li><b>Papel de dibujo grueso</b><span>Témpera y acuarela: aguanta el agua sin romperse.</span></li>
          <li><b>Cartulina</b><span>Témpera, estampas y la felicitación final.</span></li>
          <li><b>Plástico o acetato</b><span>No absorbe: perfecto como matriz de la monotipia.</span></li>
        </ul>
        ${h.cuaderno('pega cada prueba del laboratorio y escribe al lado el instrumento, el gesto y el efecto que consigue.')}`],

      monotipia: ['La monotipia: una estampa única', h => `
        <p class="def"><b>Monotipia</b>: pintas sobre una superficie lisa que no absorbe (plástico, acetato, cristal) y presionas un papel encima. Solo sale <b>una estampa buena</b>: por eso se llama así.</p>
        <ul class="cards3">
          <li><b>Directa</b><span>Pintas el dibujo sobre el plástico con pincel, dedo o esponja, y estampas.</span></li>
          <li><b>Sustractiva</b><span>Cubres el plástico de témpera y <strong>quitas</strong> pintura con un palillo, un bastoncillo o el dedo. Lo que quitas sale blanco.</span></li>
          <li><b>Mixta</b><span>Combinas las dos: quitas y añades en la misma plancha.</span></li>
        </ul>
        <ol class="pasos3"><li><b>Pinta rápido</b>La témpera se seca enseguida. Trabaja una zona pequeña.</li><li><b>Presiona</b>Papel encima y pasa la mano, la cuchara o el rodillo de panadero.</li><li><b>Levanta</b>Despega el papel desde una esquina, sin arrastrar.</li></ol>
        <p class="tip"><b>Si sale seca o en manchas</b>, la pintura estaba muy seca; <b>si se emborrona</b>, había demasiada. La segunda estampa que sacas de la misma plancha, más pálida, se llama <b>fantasma</b>.</p>`],

      procedimientos: ['Directo, aditivo y sustractivo', h => `
        <p>Las técnicas de estampación se ordenan según cómo se hace la matriz:</p>
        ${h.fig('proced')}
        <ul class="cual cual3">
          <li><b>Directo</b><span>Pintas sobre la plancha y estampas: la monotipia.</span></li>
          <li><b>Aditivo</b><span>Pegas materiales sobre un cartón (cuerda, tela, hojas, recortes): la <strong>colagrafía</strong>. Imprime lo que sobresale.</span></li>
          <li><b>Sustractivo</b><span>Quitas o hundes material: xilografía, linóleo y vuestra <strong>bandeja de poliestireno</strong>.</span></li>
        </ul>
        <h3 class="sub">Tu matriz de poliestireno</h3>
        <ol class="pasos3"><li><b>Recorta</b>Corta los bordes de la bandeja para tener una plancha plana.</li><li><b>Dibuja hundiendo</b>Aprieta con un lápiz sin punta afilada: cada surco quedará <b>blanco</b>.</li><li><b>Entinta</b>Témpera en capa fina con esponja a toques o pincel plano. Si hay mucha, se llenan los surcos.</li></ol>
        <p class="ojo"><b>Seguridad e higiene:</b> no uses cúter; basta con el lápiz y unas tijeras. Trae la bandeja lavada y seca, mejor de fruta o verdura.</p>`],

      tirada: ['Prueba, tirada, firma y numeración', h => `
        <ul class="cual">
          <li><b>1 · Prueba</b><span>Saca una primera estampa en papel normal. Corrige la matriz si hace falta.</span></li>
          <li><b>2 · Presión</b><span>Papel sobre la matriz entintada, una hoja limpia encima y pasa el <strong>rodillo de panadero</strong> con fuerza en una dirección y luego en la otra.</span></li>
          <li><b>3 · Tirada</b><span>Repite de 3 a 5 veces, entintando igual cada vez para que salgan parecidas.</span></li>
          <li><b>4 · Firma</b><span>Cuando estén secas, a lápiz y en el margen: número a la izquierda, firma a la derecha.</span></li>
        </ul>
        <p class="tip"><b>Sin rodillo:</b> la parte de atrás de una cuchara, en círculos pequeños, también presiona bien.</p>
        <p class="ojo"><b>Limpieza:</b> la témpera se va con agua. Lava la matriz enseguida si la vas a volver a entintar con otro color.</p>
        ${h.cuaderno('pega tu mejor prueba y anota qué corregiste entre la primera y la última estampa.')}`],

      proceso: ['El proceso de creación', h => `
        <ol class="fases-n2">
          <li><b>Objetivo</b><span>¿Qué quiero que sienta quien reciba la felicitación?</span><em>Actividad 4</em></li>
          <li><b>Información</b><span>Referentes: los artistas del día 1 y tus pruebas del laboratorio.</span><em>Actividades 1 y 2</em></li>
          <li><b>Bocetos</b><span>Tres ideas rápidas en el cuaderno. Elige una.</span><em>Actividad 4</em></li>
          <li><b>Proyecto</b><span>Técnica, colores, texto (¡en espejo!) y formato.</span><em>Actividad 4</em></li>
          <li><b>Realización</b><span>Matriz, prueba y estampa final en cartulina.</span><em>Actividad 4</em></li>
          <li><b>Presentación</b><span>La felicitación, expuesta.</span><em>Actividad 4</em></li>
          <li><b>Evaluación</b><span>Autorreflexión, autoevaluación y evaluación entre compañeros.</span><em>Actividad 4</em></li>
        </ol>
        <p class="tip"><b>Una felicitación se lee de un vistazo:</b> una imagen clara, pocos colores y un texto corto.</p>`],

      exponer: ['Exponer y valorar tu trabajo', h => `
        <p>Al presentar tu felicitación explica, en un minuto:</p>
        <ul class="cards3">
          <li><b>Qué quería contar</b><span>La idea y para quién es.</span></li>
          <li><b>Cómo lo hice</b><span>La técnica, las pruebas y lo que tuve que corregir.</span></li>
          <li><b>Qué conseguí</b><span>Lo que mejor me ha salido y lo que cambiaría.</span></li>
        </ul>
        <p class="ojo"><b>Al valorar el trabajo de otros:</b> empieza por algo que funciona y da una idea concreta para mejorar. Habla de la obra, no de la persona.</p>
        ${h.cuaderno('escribe tu autoevaluación con las tres preguntas de arriba y ponte nota con la rúbrica.')}`]
    },

    mision: {
      titulo: 'Estampas de invierno',
      reto: 'Durero, Goya y Picasso multiplicaron sus imágenes con una matriz. Ahora te toca a ti: experimenta con huellas y técnicas de estampación y crea la <b>felicitación de invierno del IES</b>, una estampa tuya que se expondrá en el centro.',
      fasesT: 'Cómo se juega',
      fases: [
        ['Investiga', 'Un grabado histórico: quién, cuándo, cómo y qué tiene que ver con hoy.'],
        ['Experimenta', 'El laboratorio de huellas: gestos, instrumentos y técnicas.'],
        ['Estampa', 'Monotipia y matriz de poliestireno, con tu tirada firmada y numerada.'],
        ['Felicita', 'Tu felicitación estampada, expuesta y valorada.']
      ],
      entregasT: 'Qué tienes que entregar',
      entregas: [
        'El <b>cuaderno de artista</b> con la ficha del grabado, las pruebas del laboratorio, la mejor prueba del taller, los bocetos y la autoevaluación.',
        'La <b>tirada</b> del taller de estampación (de 3 a 5 estampas firmadas y numeradas).',
        'La <b>felicitación</b> en cartulina, para la exposición.'
      ],
      pista: 'Las mejores estampas nacen de muchas pruebas. Mancharse forma parte del juego.'
    },

    act: {
      intro: 'Cuatro actividades que van de mirar a crear. Cada una dice si se hace en el cuaderno de artista y qué se entrega.',
      acts: [
        ['Detectives del grabado', 'Investigar', {
          cuaderno: true,
          obj: 'Analizar un grabado histórico y compararlo con un uso actual de la estampación.',
          pasos: [
            'Mira la lista de artistas del <b>día 1</b> y elige uno (o el que te asigne el profesor).',
            'Busca una de sus estampas en las webs de la pestaña <b>Recursos</b>.',
            ['Haz su <b>ficha</b> en el cuaderno de artista:', ['autor, siglo y país;', 'título de la obra;', 'técnica de grabado (xilografía, aguafuerte, aguatinta, litografía, linóleo…);', 'qué se ve: figuras, líneas, luces y sombras;', 'qué crees que quería contar.']],
            'Dibuja una pequeña versión de la obra o pega una copia impresa.',
            'Busca un <b>uso actual</b> de la estampación (camiseta, sello, cartel, libro…) y escribe en qué se parece y en qué se diferencia.',
            'Si no terminas en clase, acaba la ficha en casa.'
          ],
          donde: 'En el cuaderno de artista.',
          entrega: 'La ficha en el cuaderno de artista, que revisa el profesor.'
        }],
        ['Laboratorio de huellas', 'Experimentar', {
          cuaderno: true,
          obj: 'Explorar qué huella deja cada gesto e instrumento, y qué técnica y soporte conviene a cada efecto.',
          pasos: [
            'Divide una página del cuaderno (o un papel grueso que pegarás después) en <b>9 casillas</b>.',
            ['Llena seis casillas con témpera, cada una con un instrumento:', ['dedo;', 'pincel seco;', 'esponja;', 'canto de cartón;', 'peine o tenedor;', 'una hoja entintada y presionada.']],
            'En las tres casillas que quedan, prueba <b>técnicas secas</b> (lápiz, lápices de colores) y <b>húmedas</b> (rotulador) de tu estuche, solas o sobre la témpera seca.',
            'Prueba el <b>mismo instrumento con dos gestos</b> distintos: rápido y lento, suave y con fuerza.',
            'Escribe al lado de cada casilla el instrumento, el gesto y el <b>efecto</b> que consigue (nieve, viento, corteza…).',
            'Señala qué huella se parece a la de algún artista del día 1 y explica por qué.'
          ],
          donde: 'En el cuaderno de artista, con témpera y el material del estuche.',
          entrega: 'Las nueve casillas comentadas en el cuaderno.'
        }],
        ['Taller de estampación', 'Estampar', {
          cuaderno: true,
          obj: 'Estampar con monotipia y con una matriz de poliestireno, eligiendo la herramienta y el gesto según el efecto que buscas.',
          pasos: [
            ['<b>Monotipia directa</b>:', ['pinta un paisaje de invierno sobre la funda de plástico con témpera;', 'coloca el papel encima y presiona con la mano o con el rodillo de panadero;', 'levanta el papel desde una esquina.']],
            ['<b>Monotipia sustractiva</b>:', ['cubre el plástico de témpera oscura;', 'dibuja quitando pintura con un palillo, un bastoncillo o el dedo;', 'estampa. Lo que has quitado saldrá blanco, como nieve o luz.']],
            ['<b>Matriz de poliestireno</b>:', ['recorta los bordes de tu bandeja;', 'dibuja hundiendo con el lápiz (si escribes, ¡al revés!);', 'entinta en capa fina con esponja o pincel;', 'saca una prueba y corrige.']],
            '<b>Tirada:</b> saca de 3 a 5 estampas con la matriz de poliestireno, presionando con el <b>rodillo de panadero</b>.',
            'Cuando estén secas, <b>fírmalas y numéralas</b> a lápiz (1/5, 2/5…).',
            'Pega en el cuaderno tu mejor monotipia y tu mejor prueba, y anota qué cambiaste para mejorar.'
          ],
          donde: 'En el aula de plástica. Las pruebas se pegan en el cuaderno de artista; la tirada se hace en papel aparte.',
          entrega: 'La tirada firmada y numerada, al profesor, y las pruebas pegadas en el cuaderno.'
        }],
        ['La felicitación del IES', 'Crear y exponer', {
          cuaderno: true,
          obj: 'Crear una felicitación de invierno estampada, explicar cómo se hizo y valorar el proceso.',
          pasos: [
            'Piensa a quién va dirigida y qué quieres que sienta: alegría, calma, frío, luz, convivencia…',
            'Haz <b>tres bocetos</b> rápidos en el cuaderno. Elige uno y anota la técnica, los colores y el texto.',
            'Si lleva texto, escríbelo <b>en espejo</b> en la matriz.',
            'Prepara la matriz (poliestireno, monotipia o las dos combinadas) y saca una prueba.',
            'Estampa la versión final en <b>cartulina</b>, en el formato que indique el profesor.',
            'Fírmala a lápiz en el margen.',
            'Presenta tu felicitación a la clase en un minuto: qué querías contar, cómo la hiciste y qué cambiarías.',
            'Escribe tu <b>autoevaluación</b> en el cuaderno con la rúbrica de esta unidad.'
          ],
          donde: 'Bocetos y autoevaluación en el cuaderno de artista; la felicitación, en cartulina.',
          entrega: 'La felicitación, para la exposición del centro, y el cuaderno con bocetos y autoevaluación.'
        }]
      ],
      cuadSi: '📒 Se realiza en el cuaderno de artista', cuadNo: 'No se realiza en el cuaderno de artista',
      cotejoT: 'Lista de cotejo: ¿cómo vas?',
      cotejoP: 'Marca lo que tienes hecho. Las marcas se guardan solo en este dispositivo.',
      grupos: [
        ['Detectives del grabado', ['La ficha tiene autor, siglo, técnica y lo que se ve.', 'He comparado la obra con un uso actual.']],
        ['Laboratorio de huellas', ['Tengo las nueve casillas con su instrumento, gesto y efecto.', 'He probado técnicas secas y húmedas.']],
        ['Taller de estampación', ['He hecho una monotipia directa y una sustractiva.', 'Mi matriz tiene el texto en espejo (si lleva texto).', 'Mi tirada está firmada y numerada.']],
        ['Felicitación', ['Tengo tres bocetos y he elegido uno.', 'La felicitación está estampada en cartulina y firmada.', 'He escrito mi autoevaluación.']]
      ],
      progreso: (n, t) => `Llevas ${n} de ${t}`, borrar: 'Borrar mis marcas', confirmar: '¿Seguro? Pulsa otra vez para borrar.'
    },

    rub: {
      intro: 'Así se evalúa esta unidad. Cada indicador se puntúa de 1 a 10. La nota de cada criterio es la media de sus indicadores.',
      criteriosT: 'Criterios de evaluación',
      criterios: [
        ['1.1', 'Analizar manifestaciones artísticas de diferentes épocas y culturas, contextualizándolas, describiendo sus aspectos esenciales, valorando el proceso de creación del resultado final, y evidenciando una actitud de apertura, interés y respeto en su recepción.'],
        ['1.2', 'Valorar críticamente los hábitos, los gustos y los referentes artísticos de diferentes épocas y culturas, reflexionando sobre su evolución y sobre su relación con los del presente.'],
        ['2.1', 'Participar, con iniciativa, confianza y creatividad, en la exploración de diferentes técnicas gráfico-plásticas, empleando herramientas, medios, soportes y lenguajes.'],
        ['2.2', 'Elaborar producciones gráfico-plásticas de forma creativa, determinando las intenciones expresivas y seleccionando con corrección las herramientas, medios, soportes y lenguajes más adecuados de entre los que conforman el repertorio personal de recursos.'],
        ['4.2', 'Exponer el resultado final de la creación de un producto artístico, individual o grupal, poniendo en común y valorando críticamente el desarrollo de su elaboración, las dificultades encontradas, los procesos realizados y los logros alcanzados.']
      ],
      niveles: ['Insuficiente (1–4)', 'Suficiente (5)', 'Bien (6)', 'Notable (7–8)', 'Sobresaliente (9–10)'],
      criterio: 'Criterio',
      bloques: [
        ['Actividad 1. Detectives del grabado', [
          ['IL 1.1.1', 'Contexto de la obra', '1.1', 'Sitúa la estampa: autor, siglo, país y técnica de grabado.', ['No sitúa la obra.', 'Da uno o dos datos.', 'Autor y siglo correctos; la técnica falta o es errónea.', 'Autor, siglo, país y técnica correctos.', 'Todo correcto y explica en qué consiste la técnica.']],
          ['IL 1.1.2', 'Descripción y proceso', '1.1', 'Describe lo que se ve y cómo se hizo, con interés y respeto por la obra.', ['No describe la obra.', 'Descripción de una frase.', 'Describe figuras y algún rasgo de la técnica.', 'Describe figuras, líneas y luces, y cómo se hizo.', 'Descripción precisa con vocabulario del taller y una opinión respetuosa.']],
          ['IL 1.2.1', 'Ayer y hoy', '1.2', 'Compara la obra con un uso actual de la estampación y reflexiona sobre lo que ha cambiado.', ['No compara.', 'Nombra un uso actual sin compararlo.', 'Señala un parecido o una diferencia.', 'Señala parecidos y diferencias.', 'Compara con criterio y explica por qué ha cambiado.']]]],
        ['Actividad 2. Laboratorio de huellas', [
          ['IL 2.1.1', 'Gesto e instrumento', '2.1', 'Explora con iniciativa varias herramientas y gestos con témpera.', ['No experimenta.', 'Menos de cuatro casillas o todas iguales.', 'Seis casillas con instrumentos distintos.', 'Seis casillas y el mismo instrumento con dos gestos.', 'Exploración variada y creativa que va más allá de lo pedido.']],
          ['IL 2.1.2', 'Técnicas y soportes', '2.1', 'Prueba técnicas secas y húmedas y elige el soporte adecuado.', ['No las prueba.', 'Prueba una sola técnica.', 'Prueba secas y húmedas.', 'Prueba secas y húmedas y explica qué soporte conviene.', 'Combina técnicas y justifica el soporte de cada una.']],
          ['IL 1.2.2', 'Referentes', '1.2', 'Relaciona una huella propia con la de un artista y lo explica.', ['No relaciona.', 'Nombra un artista sin explicar.', 'Relaciona una huella con un artista.', 'Relaciona y explica el parecido.', 'Relaciona varias huellas con artistas y valora sus diferencias.']]]],
        ['Actividad 3. Taller de estampación', [
          ['IL 2.2.1', 'Monotipia', '2.2', 'Estampa una monotipia directa y una sustractiva con intención expresiva.', ['No las realiza.', 'Solo una, o borrosas.', 'Las dos, con algún fallo de presión o de pintura.', 'Las dos, nítidas y con intención.', 'Las dos, muy expresivas y bien resueltas.']],
          ['IL 2.2.2', 'Matriz de poliestireno', '2.2', 'Prepara la matriz con surcos claros y la imagen (y el texto) pensados en espejo.', ['Sin matriz.', 'Surcos débiles o texto al derecho.', 'Surcos marcados con algún fallo.', 'Matriz clara y bien pensada en espejo.', 'Matriz cuidada, con texturas y detalles bien resueltos.']],
          ['IL 2.2.3', 'Tirada', '2.2', 'Saca de 3 a 5 estampas regulares, firmadas y numeradas.', ['Sin tirada.', 'Una o dos estampas, o muy irregulares.', 'Tres estampas con diferencias.', 'Tres a cinco estampas regulares, firmadas y numeradas.', 'Tirada regular y limpia, con firma y numeración correctas.']]]],
        ['Actividad 4. La felicitación del IES', [
          ['IL 2.2.4', 'La felicitación', '2.2', 'Crea una felicitación estampada con una intención clara y la técnica adecuada.', ['Sin terminar.', 'Terminada, sin intención clara.', 'Idea clara con fallos de estampación.', 'Idea clara y estampación correcta en cartulina.', 'Felicitación original, expresiva y muy bien estampada.']],
          ['IL 4.2.1', 'Proceso en el cuaderno', '4.2', 'Los bocetos y las pruebas muestran cómo se llegó al resultado.', ['Sin bocetos.', 'Un boceto.', 'Tres bocetos.', 'Tres bocetos con anotaciones de técnica, color y texto.', 'Proceso completo y razonado desde el boceto hasta el final.']],
          ['IL 4.2.2', 'Presentación', '4.2', 'Expone su felicitación: qué quería contar, cómo la hizo y qué cambiaría.', ['No la presenta.', 'La presenta sin explicar.', 'Explica la idea o el proceso.', 'Explica la idea, el proceso y una dificultad.', 'Explica con claridad idea, proceso, dificultades y logros.']],
          ['IL 4.2.3', 'Autoevaluación', '4.2', 'Valora críticamente su trabajo y el de sus compañeros con respeto.', ['No se autoevalúa.', 'Solo pone una nota.', 'Señala algo que salió bien o mal.', 'Valora logros y dificultades con la rúbrica.', 'Valoración crítica y argumentada, propia y de otros.']]]]
      ]
    }
  };

  if (!document.getElementById('css-pepa2n2')) {
    const st = document.createElement('style'); st.id = 'css-pepa2n2';
    st.textContent = `
.fig-est text{font-family:var(--body);fill:#f3efe6}
.fig-est .es-n{font-family:var(--pixel);font-size:12px;fill:var(--fluor)}
.fig-est .es-t{font-family:var(--marker);font-size:20px;fill:var(--c)}
.fig-est .es-s{font-size:13px;opacity:.85}
.fig-est .es-l{font-family:var(--body);font-weight:900;font-size:26px;fill:#3a3742}
`;
    document.head.appendChild(st);
  }

  NIVEL.crear({
    id: 'pepa2-n2', ns: 'PEPA2N2', color: 'var(--fluor)', ES,
    DIAS: [
      [['estampar', 'historia', 'hoy'], [0]],
      [['gesto', 'tecnicas'], [1]],
      [['monotipia'], [2]],
      [['procedimientos', 'tirada'], [2, 3]],
      [['proceso', 'exponer'], [3]]
    ],
    SABER: {
      estampar: ['PEPA.2.A.4'], historia: ['PEPA.2.A.4'], hoy: ['PEPA.2.A.4', 'PEPA.2.A.1'],
      gesto: ['PEPA.2.A.1'], tecnicas: ['PEPA.2.A.2'],
      monotipia: ['PEPA.2.A.4', 'PEPA.2.A.1'],
      procedimientos: ['PEPA.2.A.4'], tirada: ['PEPA.2.A.4', 'PEPA.2.A.1'],
      proceso: ['PEPA.2.B.1'], exponer: ['PEPA.2.B.1']
    },
    VIDEOS: {
      historia: [
        ['Introducción a la historia del grabado', 'TSXln2ZXj_s', '5 min', 'Sandirart'],
        ['Técnicas de grabado', 'ryRNyMZlRak', '7 min', 'Biblioteca Nacional de España'],
        ['Tipos de grabado – Xilografía', 'ekWNcDJQtv4', '6 min', 'Sandirart'],
        ['Rinoceronte, Alberto Durero, 1515', 'NoLBv2wGeSs', '8 min', 'Historia del Arte 2.0'],
        ['Tipos de grabados – Aguatinta', '6lgHd2Rmpi4', '6 min', 'Sandirart'],
        ['Todos los secretos de los Caprichos de Goya', 'kALuUACb2Ec', '13 min', 'Antonio García Villarán'],
        ['¿Cómo se realiza una litografía?', '_pVGe1WfUT8', '3 min', 'Morton Subastas'],
        ['Exposición «Picasso y el linograbado»', 'nKUb2X9Rvss', '3 min', 'Consejería de Cultura Madrid'],
        ['Introducción al mundo del grabado', 'uljNq82M-0M', '24 min', 'Entretintas']
      ],
      gesto: [
        ['Texturas con témperas escolares', 'pV2-lGIoLK4', '8 min', 'Creating my Life'],
        ['Textura con témperas escolares 2', 'sAhFMtM41e4', '6 min', 'Creating my Life']
      ],
      monotipia: [
        ['Monotipos con témperas', 'm8wiEXUPVbI', '7 min', 'Profe Elizabeth Lohse Arte'],
        ['Cómo hacer monotipo paso a paso', 'K2oPchH9AyU', '3 min', 'taller de artes plasticas']
      ],
      procedimientos: [
        ['Técnica del grabado con poliestireno', 'T3j-OROgGBg', '3 min', 'Arte en el Cole'],
        ['El taller de Irene: grabado con bandeja de corcho reciclada', 'EE0ubBqsMDQ', '6 min', 'El taller de Irene'],
        ['Grabado casero con telgopor', '6n9npoEF104', '10 min', 'Aprendiendo sin prisa'],
        ['Grabado en relieve: plancha perdida', 'TAAdEiTiVfQ', '1 min', 'Ana Dibujo y Diseño']
      ]
    },
    ACT_IL: [['IL 1.1.1', 'IL 1.1.2', 'IL 1.2.1'], ['IL 2.1.1', 'IL 2.1.2', 'IL 1.2.2'], ['IL 2.2.1', 'IL 2.2.2', 'IL 2.2.3'], ['IL 2.2.4', 'IL 4.2.1', 'IL 4.2.2', 'IL 4.2.3']],
    figs: { estampa: figEstampa, proced: figProced }
  });
})();
