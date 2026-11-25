/* INSERT ART · EPVA 1.º ESO · Nivel 01 · Bestiario de cartas
   Incluye: juego de mezclas de color (aditiva/sustractiva) y herramientas de evaluación formativa interactivas
   (plantilla de feedback, escala de valoración y diana). Todo se guarda solo en el navegador del alumno. */
(function () {
  const NS = 'EPVA1N1';
  const KEY = 'insertart-epva1-n1-';
  const leer = (k, d) => { try { return JSON.parse(localStorage.getItem(KEY + k)) ?? d; } catch (e) { return d; } };
  const guardar = (k, v) => { try { localStorage.setItem(KEY + k, JSON.stringify(v)); } catch (e) { } };
  const lang = () => (window.I18N && window.I18N.lang) || 'es';
  const T = k => { const tr = (window[NS] || {})[lang()]; return (tr && tr[k]) || ES[k]; };
  const sfx = n => { if (window.SFX && window.SFX[n]) window.SFX[n](); };

  /* ---------- figuras ---------- */
  function figCarta(L) {
    return `<svg class="fig-ep fig-b1" viewBox="0 0 520 300" role="img" aria-label="${L('Partes de una carta coleccionable')}">
      <rect x="150" y="10" width="200" height="280" rx="12" fill="#1c1a22" stroke="var(--c)" stroke-width="3"/>
      <rect x="166" y="24" width="168" height="26" rx="4" fill="#2b2833"/><text x="176" y="42" class="b1-t">${L('NOMBRE')}</text>
      <circle cx="318" cy="37" r="9" fill="#ff5a3c"/>
      <rect x="166" y="58" width="168" height="120" rx="4" fill="#ff5a3c33" stroke="#ff5a3c"/>
      <path d="M200 160 q20 -60 50 -40 q30 -50 60 10 q-10 40 -60 30 q-30 15 -50 0z" fill="#ff5a3c"/>
      <rect x="166" y="186" width="168" height="56" rx="4" fill="#2b2833"/>
      <path d="M176 202 h140 M176 216 h120 M176 230 h132" stroke="#8a8592" stroke-width="4"/>
      <rect x="166" y="250" width="168" height="26" rx="4" fill="#2b2833"/><text x="176" y="268" class="b1-t">⚔ 7  ⛨ 4</text>
      <g class="b1-l"><path d="M150 37 H70"/><text x="10" y="32">${L('Nombre')}</text><text x="10" y="48" class="b1-s">${L('quién es')}</text>
      <path d="M350 37 H420"/><text x="426" y="32">${L('Tipo')}</text><text x="426" y="48" class="b1-s">${L('su elemento')}</text>
      <path d="M150 118 H70"/><text x="10" y="113">${L('Ilustración')}</text><text x="10" y="129" class="b1-s">${L('cómo es')}</text>
      <path d="M350 214 H420"/><text x="426" y="209">${L('Texto')}</text><text x="426" y="225" class="b1-s">${L('qué sabe hacer')}</text>
      <path d="M150 263 H70"/><text x="10" y="258">${L('Estadísticas')}</text><text x="10" y="274" class="b1-s">${L('números del juego')}</text></g>
    </svg>`;
  }

  /* Esquema de la página del cuaderno (anverso), tal como se dio en clase */
  function figPagina(L) {
    const z = (x, y, w, h, t, s, col) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="${col}22" stroke="${col}" stroke-dasharray="6 4"/>
      <text x="${x + w / 2}" y="${y + h / 2 - (s ? 4 : -5)}" text-anchor="middle" class="b1-z">${L(t)}</text>${s ? `<text x="${x + w / 2}" y="${y + h / 2 + 14}" text-anchor="middle" class="b1-ps">${L(s)}</text>` : ''}`;
    return `<svg class="fig-ep fig-b1" viewBox="0 0 420 540" role="img" aria-label="${L('Esquema de la página del cuaderno de artista')}">
      <rect x="10" y="10" width="400" height="520" rx="8" fill="#f3efe6" stroke="#5c5866"/>
      ${z(110, 24, 200, 36, 'Título', 'Bestiario de cartas', '#ff2d6f')}
      ${z(130, 68, 160, 30, 'Nombre de la bestia', '', '#ff2d6f')}
      ${z(24, 110, 110, 110, 'Jerarquía', 'visual y color', '#2f8fd8')}
      ${z(24, 228, 110, 110, 'Reproducir', 'dibujo observado', '#2f8fd8')}
      ${z(24, 346, 110, 110, 'Aislar', 'lupas de detalle', '#2f8fd8')}
      ${z(142, 110, 136, 346, 'LA BESTIA', 'diseño en el centro', '#9a2f86')}
      ${z(286, 110, 110, 346, 'Cualidades', 'y poderes', '#2fa36b')}
      ${z(24, 464, 372, 52, 'Textura', 'táctil y visual · grafismos', '#c08a1e')}
    </svg>`;
  }

  /* Lenguaje de las formas */
  function figFormas(L) {
    return `<svg class="fig-ep fig-b1" viewBox="0 0 600 200" role="img" aria-label="${L('Lenguaje de las formas: círculo, cuadrado y triángulo')}">
      <g transform="translate(100 80)"><circle r="56" fill="#5ad1ff33" stroke="#5ad1ff" stroke-width="3"/><circle cx="-18" cy="-8" r="6" fill="#f3efe6"/><circle cx="18" cy="-8" r="6" fill="#f3efe6"/><path d="M-16 18 q16 14 32 0" stroke="#f3efe6" stroke-width="3" fill="none"/></g>
      <g transform="translate(300 80)"><rect x="-54" y="-54" width="108" height="108" fill="#c08a4e33" stroke="#c08a4e" stroke-width="3"/><rect x="-26" y="-16" width="14" height="10" fill="#f3efe6"/><rect x="12" y="-16" width="14" height="10" fill="#f3efe6"/><path d="M-18 22 h36" stroke="#f3efe6" stroke-width="3"/></g>
      <g transform="translate(500 84)"><path d="M0 -64 L60 50 H-60 Z" fill="#ff2d6f33" stroke="#ff2d6f" stroke-width="3"/><path d="M-22 4 l14 8 M22 4 l-14 8" stroke="#f3efe6" stroke-width="3"/><path d="M-14 30 l7 -6 l7 6 l7 -6 l7 6" stroke="#f3efe6" stroke-width="2.5" fill="none"/></g>
      <text x="100" y="172" text-anchor="middle" class="b1-zl">${L('Amable')}</text>
      <text x="300" y="172" text-anchor="middle" class="b1-zl">${L('Fuerte')}</text>
      <text x="500" y="172" text-anchor="middle" class="b1-zl">${L('Peligroso')}</text>
    </svg>`;
  }

  /* Huecos que rellena init() */
  const figJuego = () => `<div class="mix-game" data-mix></div>`;
  const figArena = () => `<div class="mix-game ar-game" data-arena></div>`;

  const ES = {
    t: {},
    ui: {
      indice: 'Índice', tocAria: 'Índice de la teoría', cuadernoLabel: 'En tu cuaderno de artista:', misionK: 'MISIÓN',
      diasIntro: 'La teoría está repartida en <b>cinco días</b>. Cada día se lee o se explica en clase en <b>15 minutos como máximo</b> y te prepara para una actividad. Los vídeos de «Para ver más» son para ampliar en casa: no entran en esos 15 minutos.',
      diaK: 'DÍA', minutos: '15 min', prepara: 'Te prepara para', actK: 'Actividad',
      dias: ['Mirar antes de crear', 'Operaciones plásticas', 'Forma y textura', 'El color', 'Componer la carta'],
      saberK: 'Saber básico', verMas: 'Para ver más (en casa)', abreYT: 'Se abre en YouTube',
      subt: 'Los vídeos están en español. En YouTube puedes activar los subtítulos y traducirlos automáticamente a tu idioma.',
      videosT: 'Vídeos de la unidad', videosP: 'Todos los vídeos de la teoría, ordenados por días. Se abren en YouTube.',
      enlacesT: 'Para mirar y aprender',
      recIntro: '<b>Si lo comprendes y lo aplicas, te estás pasando el juego:</b> es el primer paso para ser <i>concept artist</i>. Material: cuaderno de artista, lápiz de grafito, goma, lápices de colores, rotuladores y cartulina para la carta final.'
    },
    enlaces: [
      ['Museo del Prado · El jardín de las delicias', 'https://www.museodelprado.es/', 'Busca «El jardín de las delicias» y amplía los seres híbridos de El Bosco: asociar en estado puro.'],
      ['Albertina (Viena) · Liebre joven de Durero', 'https://www.albertina.at/', 'El museo que guarda la liebre que Durero reprodujo pelo a pelo en 1502.'],
      ['Google Arts & Culture', 'https://artsandculture.google.com/', 'Busca Arcimboldo, Georgia O\'Keeffe, Franz Marc o Van Gogh y amplía sus obras.'],
      ['Adobe Color · círculo cromático', 'https://color.adobe.com/', 'Prueba complementarios y gamas en una rueda de color interactiva, sin registrarte.']
    ],

    sec: {
      carta: ['La carta: una imagen que comunica', h => `
        <p class="def">El <b>lenguaje visual</b> comunica sin palabras. Una carta de juego dice quién es el personaje, de qué tipo es y qué sabe hacer <b>antes de que leas el texto</b>.</p>
        ${h.fig('carta')}
        <ul class="cual cual5">
          <li><b>Nombre</b><span>Dice quién es el personaje.</span></li>
          <li><b>Ilustración</b><span>Dice cómo es. Es la parte más importante.</span></li>
          <li><b>Tipo o elemento</b><span>Su clase: fuego, agua, planta… Se reconoce por el color.</span></li>
          <li><b>Texto</b><span>Explica qué sabe hacer: cualidades y poderes.</span></li>
          <li><b>Estadísticas</b><span>Los números del juego.</span></li>
        </ul>
        <p class="tip"><b>Mírate unas cartas reales</b> (Pokémon, Magic…): ¿qué ves primero? ¿Por qué?</p>`],

      jerarquia: ['La jerarquía visual', h => `
        <p class="def"><b>Jerarquía visual</b> es el orden en que el ojo recorre una imagen. Se consigue dando más <b>peso visual</b> a lo más importante.</p>
        <ol class="pasos3"><li><b>1.º Ilustración</b>Lo más grande y llamativo.</li><li><b>2.º Nombre</b>Destaca sobre el resto de textos.</li><li><b>3.º Color y texto</b>El elemento se reconoce por el color; el texto se lee al final.</li></ol>
        <ul class="cards3">
          <li><b>Tamaño</b><span>Lo más grande se mira antes.</span></li>
          <li><b>Contraste</b><span>Lo que más se separa del fondo atrae la mirada.</span></li>
          <li><b>Color</b><span>Un color saturado o cálido pesa más. El color funciona como <strong>código</strong>: ¿una carta roja es de hielo o de fuego?</span></li>
        </ul>`],

      pagina: ['Tu página del cuaderno', h => `
        <p>La actividad 1 se hace en <b>una sola página</b> del cuaderno de artista, por las dos caras. Sigue este esquema:</p>
        <div class="duo-b1">${h.fig('pagina')}
          <div><h3 class="sub">Anverso</h3>
            <ul><li><b>Arriba:</b> título de la unidad y, debajo, el nombre de tu bestia.</li>
            <li><b>Centro:</b> el diseño de la bestia, hecho con partes de <b>tres animales</b> distintos.</li>
            <li><b>Lateral izquierdo:</b> jerarquía visual y código de color, <b>reproducir</b> y <b>aislar</b>.</li>
            <li><b>Lateral derecho:</b> cualidades y poderes.</li>
            <li><b>Abajo:</b> la textura (táctil y visual) con tus grafismos.</li></ul>
            <h3 class="sub">Reverso</h3>
            <ul><li><b>Transformar:</b> qué recursos has usado.</li><li><b>Asociar:</b> cómo y por qué has unido los tres animales.</li><li><b>La forma:</b> contorno, silueta y la prueba de la silueta.</li></ul>
          </div></div>
        <p class="ojo"><b>Cada concepto en su zona</b>, con una explicación corta escrita por ti y un dibujo que lo demuestre.</p>`],

      reproducir: ['Reproducir y aislar', h => `
        <p>Crear no es «sacar una idea de la nada». Los artistas parten casi siempre de algo que existe y lo modifican con las <b>operaciones plásticas</b>. Son cuatro y se aplican en este orden.</p>
        <div class="lectura">
          <div><h3>1 · Reproducir</h3><p>Representar algo <b>tal como se observa</b>: forma, proporciones, textura y color. Sirve para conocer a fondo el modelo; sin observación, los dibujos se vuelven esquemáticos («el pez de dos curvas»).</p>
            <ul><li>Mira más tiempo el modelo que el papel.</li><li>Empieza por la forma general y termina por los detalles.</li><li>Compara tamaños: ¿la pata es más larga o más corta que el cuello?</li></ul>
            <p><b>Referente:</b> Alberto Durero, <i>Liebre joven</i> (1502), estudio minucioso del natural.</p></div>
          <div><h3>2 · Aislar</h3><p><b>Seleccionar un fragmento</b> y separarlo del conjunto, a menudo ampliándolo, como con una lupa. Así descubres formas y texturas (un ojo, una escama, una garra) que pueden convertirse en rasgos de tu bestia.</p>
            <ul><li>Ventana de cartulina para encuadrar.</li><li>Efecto lupa: dibuja el detalle ampliado.</li></ul>
            <p><b>Referente:</b> las flores ampliadas de Georgia O'Keeffe y la fotografía macro de la naturaleza.</p></div>
        </div>
        ${h.cuaderno('en el lateral izquierdo, dibuja por observación partes de tus tres animales (reproducir) y sus detalles ampliados en «lupas» (aislar).')}`],

      transformar: ['Transformar y asociar', h => `
        <p class="def"><b>Transformar</b> es modificar rasgos del modelo (forma, tamaño, proporción, color, textura) <b>sin perder del todo su identidad</b>.</p>
        <ul class="cual cual3">
          <li><b>Exagerar</b><span>Ojos enormes, cola en espiral gigante.</span></li>
          <li><b>Simplificar o geometrizar</b><span>Reducir el cuerpo a óvalos y triángulos.</span></li>
          <li><b>Cambiar la escala</b><span>Un camaleón del tamaño de un edificio.</span></li>
          <li><b>Deformar</b><span>Estirar el cuello, curvar el cuerpo.</span></li>
          <li><b>Cambiar material o textura</b><span>Escamas de cristal, piel de piedra.</span></li>
          <li><b>Antropomorfizar</b><span>Darle postura o gestos humanos.</span></li>
        </ul>
        <p><b>Referente:</b> Pablo Picasso, <i>El toro</i> (1945-1946): el animal se transforma paso a paso, de la representación realista a unas pocas líneas.</p>
        <p class="def"><b>Asociar</b> es combinar elementos de distinta procedencia para crear una imagen nueva. Es la operación más inventiva: genera criaturas híbridas con identidad propia.</p>
        <ul class="cards3">
          <li><b>Arcimboldo</b><span><i>Vertumnus</i> (1591): un retrato hecho de frutas, verduras y flores.</span></li>
          <li><b>El Bosco</b><span><i>El jardín de las delicias</i> (Museo del Prado): seres mitad animal, planta y objeto.</span></li>
          <li><b>Mitología</b><span>El grifo (águila y león), la sirena o la quimera.</span></li>
        </ul>
        ${h.cuaderno('en el reverso, explica qué recursos de transformación has usado y por qué has unido esos tres animales.')}`],

      forma: ['La forma', h => `
        <p class="def"><b>Forma</b> es la configuración visual de un objeto: su contorno y su estructura. El <b>contorno</b> es la línea que la delimita; la <b>silueta</b> es la forma rellena de un solo tono, sin detalles.</p>
        <p class="tip"><b>Prueba de la silueta:</b> rellena tu boceto de negro. Si se sigue reconociendo y es interesante, el diseño funciona. Si parece una «mancha», exagera rasgos: orejas, cola, cuernos, aletas.</p>
        ${h.fig('formas')}
        <ul class="cual cual3">
          <li><b>Círculo / curva</b><span>Amabilidad, suavidad, ternura. Criaturas simpáticas o pacíficas.</span></li>
          <li><b>Cuadrado / rectángulo</b><span>Estabilidad, fuerza, resistencia. Criaturas defensivas, de tierra.</span></li>
          <li><b>Triángulo / ángulos agudos</b><span>Dinamismo, peligro, agresividad. Criaturas rápidas o amenazantes.</span></li>
        </ul>
        <p class="ojo"><b>¿«No sé dibujar»?</b> Construye la criatura sumando formas básicas (círculo para la cabeza, óvalo para el cuerpo, triángulos para las garras) y después redondea o afila el contorno.</p>`],

      textura: ['La textura', h => `
        <p class="def"><b>Textura</b> es la cualidad de la superficie de un objeto. La <b>táctil</b> se percibe con el tacto (rugosa, lisa…); la <b>visual</b> solo se percibe con la vista: es la que dibujamos en el papel.</p>
        <ul class="cual cual5">
          <li><b>Punteado</b><span>Piel granulada.</span></li>
          <li><b>Rayado paralelo</b><span>Superficies lisas y sombras suaves.</span></li>
          <li><b>Rayado cruzado</b><span>Sombras más oscuras.</span></li>
          <li><b>Escamas</b><span>Motivo repetido: reptiles y peces.</span></li>
          <li><b>Líneas onduladas</b><span>Pelaje y agua.</span></li>
        </ul>
        <h3 class="sub">Frottage (Max Ernst, 1925)</h3>
        <ol class="pasos3"><li><b>Coloca</b>Un papel fino sobre una superficie con relieve: corteza, hoja, rejilla, tela.</li><li><b>Frota</b>Con un lápiz blando o una cera colocados de lado.</li><li><b>Usa</b>Recorta la textura y aplícala en collage o como fondo del marco.</li></ol>
        ${h.cuaderno('en la franja de abajo, explica la diferencia entre textura táctil y visual y muestra al menos dos grafismos que uses en tu bestia.')}`],

      colorQue: ['¿Qué es el color?', h => `
        <p class="def">El color es una <b>sensación</b>. La luz llega a los objetos: absorben una parte y reflejan otra. <b>La luz reflejada es el color que vemos.</b></p>
        <ul class="cual cual3">
          <li><b>Tono o matiz</b><span>El color en sí, su nombre: rojo, verde, azul…</span></li>
          <li><b>Luminosidad o valor</b><span>Lo claro u oscuro que es: azul claro / azul marino.</span></li>
          <li><b>Saturación</b><span>Lo puro o intenso que es: rojo intenso / rojo apagado.</span></li>
        </ul>`],

      mezclas: ['Mezcla aditiva y mezcla sustractiva', h => `
        <div class="lectura">
          <div><h3>Color luz · mezcla aditiva</h3><p>Pantallas, focos, proyectores. <b>Cada luz SUMA luz.</b></p>
            <ul><li>Primarios: <b>rojo, verde y azul</b> (RGB).</li><li>Rojo + verde = amarillo · verde + azul = cian · rojo + azul = magenta.</li><li>Los tres juntos = <b>blanco</b>.</li></ul></div>
          <div><h3>Color pigmento · mezcla sustractiva</h3><p>Pinturas, lápices, tintas, impresoras. <b>Cada pigmento RESTA (absorbe) luz.</b></p>
            <ul><li>Primarios: <b>cian, magenta y amarillo</b> (CMY).</li><li>Magenta + amarillo = rojo · cian + amarillo = verde · cian + magenta = azul-violeta.</li><li>Los tres juntos = <b>negro</b> (en la práctica, un marrón muy oscuro).</li></ul></div>
        </div>
        <p class="tip">En tu carta trabajas con lápices: <b>mezcla sustractiva</b>. Superpón capas suaves de dos colores para obtener el tercero. Si la carta se digitaliza, pasa a la mezcla aditiva de la pantalla.</p>
        <h3 class="sub">Juega y comprueba</h3>
        ${h.fig('juego')}`],

      circulo: ['Círculo cromático y complementarios', h => `
        <p class="def">El <b>círculo cromático</b> ordena los colores en una rueda: primarios, secundarios entre ellos y terciarios intermedios.</p>
        <p><b>Complementarios</b> son los colores <b>opuestos</b> en el círculo. Juntos producen el máximo contraste: cada uno hace «vibrar» al otro.</p>
        <ul class="cual cual3">
          <li><b>Rojo ↔ verde</b><span>En el modelo CMY: cian ↔ rojo.</span></li>
          <li><b>Azul ↔ naranja</b><span>En el modelo CMY: magenta ↔ verde.</span></li>
          <li><b>Amarillo ↔ violeta</b><span>En el modelo CMY: amarillo ↔ azul-violeta.</span></li>
        </ul>
        <p class="tip"><b>En tu carta:</b> elige una paleta dominante y guarda el complementario para el <b>punto de atención</b> (ojos, gema, arma, aura). Así diriges la mirada.</p>
        <p><b>Referente:</b> Vincent van Gogh, <i>El café de noche</i> (1888): enfrentó rojos y verdes para expresar tensión.</p>`],

      gamas: ['Gamas, color expresivo y la paleta de tu elemento', h => `
        <ul class="cards3 c2">
          <li><b>Gama cálida</b><span>Rojos, naranjas, amarillos. Energía, calor, cercanía, agresividad.</span></li>
          <li><b>Gama fría</b><span>Azules, verdes azulados, violetas. Calma, frío, distancia, misterio.</span></li>
        </ul>
        <p class="def"><b>Color expresivo:</b> el color no tiene que ser real; se elige por lo que comunica. Franz Marc pintó <i>Caballos azules</i> (1911) para expresar su carácter.</p>
        <h3 class="sub">La paleta de tu elemento: 3 colores base + 1 complementario de acento</h3>
        <ul class="cual">
          <li><b>Fuego</b><span>Cálida: rojo, naranja, amarillo · acento azul. Energía, peligro.</span></li>
          <li><b>Agua</b><span>Fría: azules, cian, turquesa · acento naranja. Calma, profundidad.</span></li>
          <li><b>Planta</b><span>Fría-templada: verdes, amarillo verdoso · acento rojo o magenta. Crecimiento, vida.</span></li>
          <li><b>Tierra</b><span>Cálida apagada: ocres, marrones, siena · acento azul-violeta. Fuerza, estabilidad.</span></li>
          <li><b>Aire</b><span>Fría muy luminosa: blancos, celestes, grises claros · acento amarillo cálido. Ligereza, velocidad.</span></li>
          <li><b>Sombra</b><span>Fría oscura: violetas, negros, grises · acento amarillo. Misterio, amenaza.</span></li>
        </ul>
        <p class="tip">¿Inventas tu propio elemento? Vale, si justificas tu paleta.</p>`],

      colorear: ['Colorea tu bestia paso a paso', h => `
        <p><b>Antes de pintar, haz un mapa de color:</b> con lápiz de grafito, muy suave, numera las zonas: 1 cuerpo (color base, el más claro), 2 sombras (segundo color), 3 detalles (tercer color) y ★ punto de atención (complementario).</p>
        <ul class="cual cual5">
          <li><b>1 · Base clara</b><span>Colorea toda la zona con el color más claro y presión suave.</span></li>
          <li><b>2 · Capas</b><span>Superpón el segundo color en las zonas de sombra.</span></li>
          <li><b>3 · Degradado</b><span>Aumenta la presión poco a poco: de claro a oscuro sin saltos.</span></li>
          <li><b>4 · Acento</b><span>Al final, el complementario solo en una zona pequeña.</span></li>
          <li><b>5 · Luces</b><span>Reserva el blanco del papel para los brillos.</span></li>
        </ul>
        <p class="ojo"><b>Prueba final:</b> ¿se adivina el elemento de tu bestia sin leer la carta?</p>`],

      composicion: ['La composición de la carta', h => `
        <p class="def"><b>Componer</b> es organizar los elementos dentro del formato para que la imagen sea clara, ordenada y expresiva. La carta tiene formato <b>vertical</b>.</p>
        <ul class="cards3">
          <li><b>Peso visual</b><span>Pesa más lo grande, lo saturado o cálido, lo que contrasta con el fondo, lo aislado y lo detallado.</span></li>
          <li><b>Equilibrio</b><span><strong>Simétrico</strong>: estable y solemne (criatura frontal). <strong>Asimétrico</strong>: dinámico (criatura en diagonal, saltando). <strong>Radial</strong>: alrededor de un centro (auras, explosiones).</span></li>
          <li><b>Proporción</b><span>La ilustración ocupa más o menos la mitad de la carta. El personaje llena su zona: ni «flota» ni queda «apretado».</span></li>
        </ul>
        <h3 class="sub">Ritmo en el marco</h3>
        <ul class="cual cual3">
          <li><b>Repetición</b><span>El mismo motivo a intervalos iguales: escamas en todo el marco.</span></li>
          <li><b>Alternancia</b><span>Dos motivos que se intercalan: hoja–gota–hoja–gota.</span></li>
          <li><b>Progresión</b><span>El motivo crece o decrece: llamas cada vez más grandes.</span></li>
        </ul>
        <p class="tip"><b>Formato:</b> 10 × 14 cm es casi la misma proporción que una carta real (63 × 88 mm). Tus medidas pueden variar un poco, pero mantén la carta vertical y proporcionada. <b>Referente:</b> Ernst Haeckel, <i>Formas artísticas de la naturaleza</i> (1904), con simetrías axiales y radiales.</p>`],

      tecnicas: ['Técnicas secas y húmedas para tu carta', h => `
        <p>La carta final se hace con <b>al menos dos técnicas gráfico-plásticas</b>. Elige las que mejor cuenten tu bestia.</p>
        <div class="lectura">
          <div><h3>Técnicas secas</h3><ul><li><b>Grafito</b>: encaje, contornos y grafismos.</li><li><b>Lápices de colores</b>: capas, degradados y mezcla sustractiva.</li><li><b>Ceras</b>: color intenso y frottage.</li></ul></div>
          <div><h3>Técnicas húmedas</h3><ul><li><b>Rotulador</b>: contornos limpios y zonas planas de color.</li><li><b>Tinta</b>: línea negra y texturas de punteado.</li><li><b>Acuarela o témpera</b>: fondos y manchas (sobre cartulina gruesa).</li></ul></div>
        </div>
        <p class="tip"><b>Combina con intención:</b> por ejemplo, rotulador para el contorno y el marco, y lápices de colores para el volumen de la bestia. Un frottage recortado puede ser la textura del fondo.</p>`],

      presentar: ['Presenta tu carta', h => `
        <p>Al final presentarás tu carta al grupo. Explica en un minuto, usando las palabras de la unidad:</p>
        <ul class="cards3">
          <li><b>Mi bestia</b><span>Qué tres animales has asociado y cómo los has transformado.</span></li>
          <li><b>Su color</b><span>Su elemento, su gama y dónde está el complementario.</span></li>
          <li><b>Mi carta</b><span>Cómo has ordenado la jerarquía visual y la composición.</span></li>
        </ul>
        <p class="ojo">Las cartas de todo el grupo forman <b>el mazo de la clase</b>. Tu criatura podrá volver a aparecer en otras unidades.</p>`],
      arena: ['La arena del bestiario', h => `
        <p>Pon a prueba tu bestia: escribe sus características como si rellenaras su carta y enfréntala a la de un compañero (o a la máquina), por turnos, como en un combate de cartas.</p>
        <ul class="cards3">
          <li><b>La forma cuenta</b><span>Círculo: más vida (amable y resistente). Cuadrado: más defensa (fuerte). Triángulo: más ataque (peligroso).</span></li>
          <li><b>El color es un código</b><span>La bestia se pinta sola con la paleta de su elemento: 3 colores base y los ojos en el complementario, como el punto de atención.</span></li>
          <li><b>Estadísticas</b><span>Reparte 15 puntos entre ataque, defensa y velocidad. Quien es más rápido empieza.</span></li>
        </ul>
        ${h.fig('arena')}
        <p class="tip"><b>Usa los datos de tu carta:</b> el mismo nombre, elemento, forma y poder que diseñaste. Si tu bestia pierde siempre, ¿qué cambiarías en su diseño?</p>`]
    },

    mision: {
      titulo: 'Bestiario de cartas',
      reto: 'Los juegos de cartas coleccionables esconden muchas decisiones de diseño. Tu reto: crear una <b>carta original</b> con una criatura nacida de <b>tres animales</b> del entorno andaluz, darle un <b>elemento</b> que se lea con el color y componer la carta con todas sus partes. Las cartas del grupo formarán el <b>mazo de la clase</b>.',
      fasesT: 'Cómo se juega',
      fases: [
        ['Observa', 'Reproduce y aísla partes de tres animales reales.'],
        ['Inventa', 'Transforma y asocia esas partes para crear tu bestia.'],
        ['Colorea', 'Elige su elemento y crea su código de color.'],
        ['Compón y presenta', 'Diseña la carta final y preséntala al grupo.']
      ],
      entregasT: 'Qué tienes que entregar',
      entregas: [
        'La <b>página del cuaderno de artista</b> «Bestiario de cartas», por las dos caras.',
        'La <b>plantilla del color</b> recortada y pegada en la página siguiente a tu bestia.',
        'La <b>carta final</b> en cartulina, con al menos dos técnicas, y su <b>presentación oral</b>.'
      ],
      pista: 'Estad atentos a las indicaciones del profesor para saber cómo se organizan las páginas del cuaderno.'
    },

    act: {
      intro: 'Tres actividades evaluables. La nota de cada una sale de la <b>rúbrica de la unidad</b>. Además, cada actividad tiene su propia herramienta de seguimiento (plantilla de feedback, escala de valoración y diana) para que sepas cómo vas y mejores antes de la nota final.',
      acts: [
        ['Diseña tu bestia', 'Prediseño en el cuaderno', {
          cuaderno: true,
          obj: 'Diseñar una criatura a partir de tres animales y explicar en el cuaderno la jerarquía visual, las operaciones plásticas, la forma y la textura.',
          pasos: [
            'Elige <b>tres animales</b> del entorno andaluz y busca imágenes de referencia.',
            ['<b>Anverso</b> de la página, siguiendo el esquema del día 1:', ['arriba, el título «Bestiario de cartas» y, debajo, el nombre de tu bestia;', 'en el centro, tu bestia, hecha con partes reconocibles de los tres animales;', 'lateral izquierdo: jerarquía visual y código de color, reproducir (dibujos observados) y aislar (lupas de detalle);', 'lateral derecho: cualidades y poderes coherentes con los animales;', 'abajo: textura táctil y visual con al menos dos grafismos.']],
            ['<b>Reverso</b> de la página:', ['transformar: qué recursos has usado (exagerar, geometrizar, deformar…);', 'asociar: cómo y por qué has unido los tres animales;', 'la forma: contorno, silueta y tu prueba de la silueta.']],
            'Escribe cada explicación con tus palabras, corta y clara, junto a un dibujo que la demuestre.'
          ],
          donde: 'En una página del cuaderno de artista, por las dos caras.',
          entrega: 'El cuaderno, que revisa el profesor en clase.'
        }, '<div class="fw" data-fw="fb"></div>'],
        ['El código de color de tu bestia', 'Plantilla del color', {
          cuaderno: true,
          obj: 'Comprender la mezcla aditiva y sustractiva, los complementarios y las gamas, y crear la paleta del elemento de tu bestia.',
          pasos: [
            'Juega al <b>juego de mezclas</b> del día 4 para comprobar que entiendes la mezcla aditiva y la sustractiva.',
            ['<b>Anverso</b> de la plantilla · comprendo el color:', ['A · mezclas de color aditiva y sustractiva;', 'B · círculo cromático, complementarios y gamas.']],
            ['<b>Reverso</b> · aplico el color:', ['C · la paleta de mi elemento (3 colores + 1 complementario);', 'D · mi bestia a color: cálcala y coloréala en 5 pasos;', 'E · justifico mi color con vocabulario de la unidad.']],
            'Recorta la plantilla y <b>pégala en la página siguiente</b> a tu bestia.',
            'Lo que no termines en clase, acábalo en casa.'
          ],
          donde: 'En la plantilla que entrega el profesor, pegada en el cuaderno de artista.',
          entrega: 'La plantilla pegada en el cuaderno, que revisa el profesor.'
        }, '<div class="fw" data-fw="escala"></div>'],
        ['La carta final', 'Reúne todo lo anterior', {
          cuaderno: false,
          obj: 'Componer la carta de tu bestia con equilibrio, proporción y ritmo, al menos dos técnicas y un color que comunique su elemento, y presentarla al grupo.',
          pasos: [
            'Corta una <b>cartulina vertical</b> de unos 10 × 14 cm (las medidas pueden variar un poco).',
            'Distribuye las zonas: nombre, tipo, ilustración (en torno a la mitad de la carta), texto y estadísticas.',
            'Dibuja tu bestia partiendo del diseño del cuaderno, y <b>mejórala</b>.',
            'Usa <b>al menos dos técnicas</b> (por ejemplo, rotulador y lápices de colores).',
            'Aplica la paleta de tu elemento y el complementario en el punto de atención.',
            'Decora el marco con un ritmo (repetición, alternancia o progresión).',
            'Presenta tu carta al grupo en un minuto, con vocabulario de la unidad.'
          ],
          donde: 'En cartulina, aparte del cuaderno.',
          entrega: 'La carta, al profesor. Las cartas del grupo forman el mazo de la clase.'
        }, '<div class="fw" data-fw="diana"></div>']
      ],
      cuadSi: '📒 Se realiza en el cuaderno de artista', cuadNo: 'No se realiza en el cuaderno de artista (se hace en cartulina)',
      cotejoT: 'Lista de cotejo: ¿cómo vas?',
      cotejoP: 'Marca lo que tienes hecho. Las marcas se guardan solo en este dispositivo.',
      grupos: [
        ['Diseña tu bestia', ['La página sigue el esquema: título, nombre, bestia en el centro y cada concepto en su zona.', 'Mi bestia tiene partes reconocibles de tres animales.', 'He explicado reproducir, aislar, transformar y asociar.', 'He hecho la prueba de la silueta y dos grafismos de textura.']],
        ['El código de color', ['He completado A y B (mezclas, círculo y gamas).', 'Mi paleta tiene 3 colores + 1 complementario.', 'He justificado mi color (E).']],
        ['La carta final', ['Mi carta tiene todas sus zonas y una ilustración protagonista.', 'He usado al menos dos técnicas.', 'El marco tiene ritmo.', 'He preparado mi presentación oral.']]
      ],
      progreso: (n, t) => `Llevas ${n} de ${t}`, borrar: 'Borrar mis marcas', confirmar: '¿Seguro? Pulsa otra vez para borrar.'
    },

    rub: {
      intro: 'Esta rúbrica valora todo el trabajo de la unidad: la página del cuaderno (anverso y reverso), el trabajo de color y la carta final. <b>La nota de cada actividad sale de aquí.</b> Cada indicador se puntúa de 1 a 10 y la nota de cada criterio es la media de sus indicadores. La plantilla de feedback, la escala del color y la diana se usan durante el proceso para orientarte.',
      criteriosT: 'Criterios de evaluación',
      criterios: [
        ['2.3', 'Analiza, valora y realiza composiciones inspiradas en la naturaleza introduciendo aspectos básicos compositivos y experimentando al menos con dos técnicas de expresión gráfico-plásticas bidimensionales.'],
        ['5.2', 'Adquirir y desarrollar el imaginario propio a través de la implementación de un pensamiento creativo caracterizado por mensajes cuya canalización discurre a través de cauces plásticos, visuales y audiovisuales, favoreciendo el comienzo de la integración de conceptos como la racionalidad, la empatía o la sensibilidad.'],
        ['8.2', 'Reconocer la intención comunicativa de distintos proyectos plásticos desde las distintas funciones y recursos que tiene el lenguaje visual y audiovisual y comenzar con su aplicación dentro del desarrollo proyectual individual y colectivo.']
      ],
      niveles: ['Insuficiente (1–4)', 'Suficiente (5)', 'Bien (6)', 'Notable (7–8)', 'Sobresaliente (9–10)'],
      criterio: 'Criterio',
      bloques: [
        ['Bloque 1. Página del cuaderno de artista (actividad 1)', [
          ['IL 3.1', 'Diseño de la bestia', '2.3', 'Construye la bestia con partes de tres animales distintos; reproduce y aísla (lateral izquierdo) y lo aplica en el dibujo.', ['No hay diseño, o no se reconocen los animales de origen. Faltan reproducir y aislar.', 'Diseño básico; se reconoce algún animal. Reproducir o aislar incompletos.', 'Bestia con partes reconocibles de tres animales; reproduce y aísla de forma correcta.', 'Bestia bien resuelta; los detalles aislados aparecen claramente en el diseño.', 'Bestia muy elaborada; observación minuciosa y detalles aislados integrados con acierto.']],
          ['IL 3.2', 'Distribución y jerarquía visual', '8.2', 'Organiza la página según el esquema y explica y aplica la jerarquía visual.', ['No sigue el esquema; la página está desordenada.', 'Sigue el esquema en parte; la jerarquía es poco clara y no la explica.', 'Sigue el esquema; explica la jerarquía visual y la aplica correctamente.', 'Página clara; la bestia domina y título y nombre destacan con intención.', 'Página muy eficaz y creativa; la jerarquía se explica y se aplica con recursos variados.']],
          ['IL 3.3', 'Forma, textura y código de color', '8.2', 'Explica estos conceptos (anverso y reverso) y los aplica en la bestia.', ['No explica los conceptos o no los aplica.', 'Explica alguno de forma muy breve; aplicación escasa.', 'Explica los tres conceptos y los aplica de forma correcta.', 'Explicación clara con vocabulario adecuado; la forma (silueta), las texturas y el color comunican el carácter.', 'Explicación completa y personal; forma, textura y color muy bien integrados en la bestia.']],
          ['IL 3.4', 'Transformar, asociar, cualidades y poderes', '5.2', 'Explica cómo ha transformado y asociado los animales, y describe cualidades y poderes coherentes.', ['No explica las operaciones; sin cualidades ni poderes.', 'Explicación mínima; cualidades y poderes poco relacionados con la bestia.', 'Explica transformar y asociar; cualidades y poderes coherentes.', 'Explicación clara de los recursos usados; personaje con identidad propia.', 'Criatura muy original; explicación razonada que une animales, aspecto y poderes.']]]],
        ['Bloque 2. El color (actividad 2)', [
          ['IL 3.5', 'Teoría del color', '8.2', 'Distingue mezcla aditiva y sustractiva, identifica complementarios y gamas cálidas y frías.', ['No distingue los conceptos.', 'Los distingue con errores.', 'Los distingue y los explica correctamente.', 'Los explica con vocabulario específico y ejemplos propios.', 'Dominio completo; relaciona los conceptos con su propia carta.']],
          ['IL 3.6', 'Paleta del elemento', '8.2', 'Crea una paleta coherente con el elemento y usa el complementario como punto de atención.', ['Paleta sin relación con el elemento.', 'Paleta relacionada de forma parcial; sin complementario.', 'Paleta coherente con el elemento.', 'Paleta coherente con uso intencionado del complementario, y la justifica.', 'Paleta muy expresiva y bien justificada; mezclas cuidadas.']]]],
        ['Bloque 3. La carta final (actividad 3)', [
          ['IL 3.7', 'Composición de la carta', '2.3', 'Organiza la carta con equilibrio, proporción y ritmo.', ['Zonas desordenadas o incompletas.', 'Están todas las zonas, con distribución poco cuidada.', 'Composición ordenada y proporción adecuada entre zonas.', 'Equilibrio intencionado, buena proporción y ritmo en el marco.', 'Composición muy elaborada; equilibrio, proporción y ritmo justificados.']],
          ['IL 3.8', 'Técnicas e inspiración natural', '2.3', 'Realiza la carta con al menos dos técnicas gráfico-plásticas a partir de los animales de origen.', ['Una sola técnica, o no se reconoce el origen natural.', 'Dos técnicas con control básico.', 'Dos técnicas con limpieza; origen natural reconocible.', 'Domina dos técnicas y las combina con intención.', 'Excelente dominio; incorpora una tercera técnica o textura con acierto.']],
          ['IL 3.9', 'Del cuaderno a la carta', '5.2', 'La carta final desarrolla y mejora la bestia diseñada en el cuaderno.', ['La carta no tiene relación con el trabajo del cuaderno.', 'Relación escasa; la bestia apenas evoluciona.', 'La carta parte claramente del diseño del cuaderno.', 'La bestia evoluciona y mejora respecto al diseño inicial.', 'Evolución muy notable; la carta recoge y supera todo el trabajo previo.']],
          ['IL 3.10', 'Color y jerarquía en la carta', '8.2', 'El color comunica el elemento y la jerarquía visual ordena la lectura de la carta.', ['Color sin relación con el elemento; no se distingue lo principal.', 'Color y jerarquía poco claros.', 'Color coherente y jerarquía correcta.', 'Color expresivo con complementario; jerarquía reforzada con tamaño o contraste.', 'El color comunica el elemento sin leer; jerarquía muy eficaz.']],
          ['IL 3.11', 'Presentación oral', '8.2', 'Presenta su carta y explica su intención comunicativa con vocabulario específico.', ['No explica su carta.', 'La explica de forma muy breve, sin vocabulario específico.', 'Usa algún término específico.', 'Justifica forma, color y composición con vocabulario adecuado.', 'Argumentación clara y completa; relaciona intención y resultado.']]]]
      ]
    },

    /* ---------- herramientas de evaluación formativa ---------- */
    form: {
      aviso: 'Evaluación formativa: no pone nota. Tu profesor te indica en clase cómo vas y tú lo marcas aquí para ver tu progreso. Se guarda solo en este dispositivo.',
      borrar: 'Borrar', confirmar: '¿Seguro? Pulsa otra vez.',
      fb: {
        titulo: 'Plantilla de feedback · actividad 1',
        cols: ['Lo explica', 'Lo aplica'],
        grupos: [
          ['Anverso de la página', [
            ['IL 1.1', '8.2', 'Distribución de la página: título arriba, nombre debajo, diseño en el centro y cada concepto en su zona.', 'a'],
            ['IL 1.2', '2.3', 'Diseño de la bestia con partes reconocibles de tres animales distintos.', 'a'],
            ['IL 1.3', '8.2', 'Jerarquía visual: la bestia domina la página; título y nombre destacan sobre los textos.', 'ea'],
            ['IL 1.5', '2.3', 'Reproducir (lateral izquierdo): dibujo por observación de partes de los animales.', 'ea'],
            ['IL 1.6', '2.3', 'Aislar (lateral izquierdo): detalles ampliados (lupas) que aparecen en la bestia.', 'ea'],
            ['IL 1.7', '8.2', 'Textura (abajo): diferencia táctil/visual y al menos dos grafismos aplicados.', 'ea'],
            ['IL 1.8', '5.2', 'Cualidades y poderes (lateral derecho) coherentes con los animales y el aspecto.', 'e']]],
          ['Reverso de la página', [
            ['IL 1.9', '5.2', 'Transformar: explica la operación e identifica los recursos usados.', 'ea'],
            ['IL 1.10', '5.2', 'Asociar: explica cómo y por qué ha combinado las partes.', 'ea'],
            ['IL 1.11', '8.2', 'La forma: contorno, silueta, lenguaje de las formas y prueba de la silueta.', 'ea']]]
        ]
      },
      escala: {
        titulo: 'Escala de valoración del color · actividad 2',
        niveles: ['Inicial', 'En proceso', 'Conseguido', 'Destacado'],
        items: [
          ['IL 2.1', 'Distingue mezcla aditiva y sustractiva e identifica sus primarios y secundarios.'],
          ['IL 2.2', 'Obtiene los secundarios por mezcla sustractiva con los materiales de clase.'],
          ['IL 2.3', 'Identifica los pares de complementarios en el círculo cromático.'],
          ['IL 2.4', 'Diferencia gamas cálidas y frías y las asocia a sensaciones.'],
          ['IL 2.5', 'Crea una paleta coherente con el elemento de su criatura.'],
          ['IL 2.6', 'Usa el complementario como punto de atención.'],
          ['IL 2.7', 'Justifica su paleta con vocabulario específico.']
        ]
      },
      diana: {
        titulo: 'Diana de progreso · actividad 3',
        intro: 'Cada eje es un aspecto de la carta. Pulsa el anillo en el que estás: cuanto más hacia fuera, mejor. Usa la 1.ª revisión a mitad del trabajo y la 2.ª al final, y compara las dos dianas.',
        niveles: ['Inicial', 'En proceso', 'Conseguido', 'Destacado'],
        ejes: [['Composición', 'IL 3.7'], ['Técnicas', 'IL 3.8'], ['Del cuaderno a la carta', 'IL 3.9'], ['Color y jerarquía', 'IL 3.10'], ['Presentación oral', 'IL 3.11']],
        rondas: ['1.ª revisión', '2.ª revisión']
      }
    },

    /* ---------- arena del bestiario ---------- */
    arena: {
      titulo: 'La arena del bestiario', modos: ['2 jugadores', 'Contra la máquina'],
      intro: 'Crea las dos bestias y pulsa «¡A luchar!». Nada se guarda: al cerrar la página, las bestias desaparecen.',
      jugador: 'Jugador', maquina: 'máquina',
      campos: { nombre: 'Nombre', elem: 'Elemento', forma: 'Forma', poder: 'Nombre de su poder' },
      elementos: { fuego: 'Fuego', agua: 'Agua', planta: 'Planta', tierra: 'Tierra', aire: 'Aire', sombra: 'Sombra' },
      formas: { circulo: 'Círculo (amable)', cuadrado: 'Cuadrado (fuerte)', triangulo: 'Triángulo (peligroso)' },
      bonus: { circulo: 'Bonus de la forma: +10 de vida.', cuadrado: 'Bonus de la forma: +2 de defensa.', triangulo: 'Bonus de la forma: +2 de ataque.' },
      stats: { atq: 'Ataque', def: 'Defensa', vel: 'Velocidad' },
      puntos: n => n >= 0 ? `Puntos por repartir: ${n}` : `Te has pasado ${-n} punto${n === -1 ? '' : 's'}`,
      ejemplo: [['Lincecalda', 'fuego', 'triangulo', 'Zarpazo ardiente'], ['Camaleoñola', 'planta', 'circulo', 'Lengua enredadera']],
      ventajasT: 'Tabla de ventajas entre elementos',
      razon: { fuego: 'el fuego quema la planta', planta: 'la planta bebe el agua', agua: 'el agua apaga el fuego', aire: 'el viento erosiona la tierra', tierra: 'la tierra sepulta la sombra', sombra: 'la sombra se traga el aire' },
      luchar: '¡A luchar!', errorFicha: (j, p) => `Revisa la bestia del jugador ${j}: necesita nombre y poder, y como mucho ${p} puntos.`,
      empieza: n => `¡Empieza el combate! ${n} es más rápido y ataca primero.`,
      turnoDe: n => `Turno de <b>${n}</b>. Elige un movimiento:`, piensa: n => `${n} está pensando…`,
      ataqueDe: e => `Ataque de ${e.toLowerCase()}`, usado: 'usado', defender: 'Defender',
      usa: (n, m, d) => `${n} usa <b>${m}</b>: ${d} de daño.`, falla: n => `${n} lanza su ataque especial… ¡y falla!`,
      defiende: (n, c) => `${n} se protege${c ? ` y recupera ${c} de vida` : ''}.`,
      critico: '¡Golpe crítico!', eficaz: r => `¡Es muy eficaz! (${r})`, poco: 'No es muy eficaz…',
      gana: n => `🏆 ¡${n} gana el combate!`, revancha: 'Revancha', editar: 'Cambiar las bestias'
    },

    /* ---------- juego de mezclas ---------- */
    juego: {
      titulo: '¿Luz o pigmento?', modos: ['Luz · aditiva', 'Pigmento · sustractiva'],
      libre: 'Experimenta', reto: 'Reto', primarios: 'Enciende o quita primarios:',
      nombres: { R: 'rojo', G: 'verde', B: 'azul', C: 'cian', M: 'magenta', Y: 'amarillo' },
      resultado: 'Resultado', pista: { luz: 'Cada luz SUMA luz: con las tres, blanco.', pig: 'Cada pigmento RESTA luz: con los tres, negro.' },
      colores: { negro: 'negro (sin luz)', blanco: 'blanco', papel: 'blanco (el papel, sin pigmento)', negroP: 'negro (marrón muy oscuro)', amarillo: 'amarillo', cian: 'cian', magenta: 'magenta', rojo: 'rojo', verde: 'verde', azul: 'azul', azulv: 'azul-violeta' },
      consigue: (c, m) => `Consigue <b>${c}</b> con ${m}`, conLuz: 'luces', conPig: 'pigmentos',
      comprobar: 'Comprobar', siguiente: 'Siguiente', bien: '¡Correcto!', mal: 'Todavía no. Prueba otra combinación.',
      puntos: (p, n) => `Aciertos: ${p} de ${n}`, fin: (p, n) => `Fin del reto: ${p} de ${n}.`, otra: 'Jugar otra vez'
    }
  };

  /* ---------- juego ---------- */
  const PRIM = { luz: ['R', 'G', 'B'], pig: ['C', 'M', 'Y'] };
  const HEX = { R: '#ff2a2a', G: '#2aff3c', B: '#2a4bff', C: '#00a3e0', M: '#e6007e', Y: '#ffe500' };
  function mezcla(modo, on) {
    const k = PRIM[modo].filter(p => on[p]).sort().join('');
    if (modo === 'luz') return ({ '': ['negro', '#000'], B: ['azul', '#2a4bff'], G: ['verde', '#2aff3c'], R: ['rojo', '#ff2a2a'], BG: ['cian', '#2affff'], BR: ['magenta', '#ff2aff'], GR: ['amarillo', '#ffff2a'], BGR: ['blanco', '#fff'] })[k];
    return ({ '': ['papel', '#fff'], C: ['cian', '#00a3e0'], M: ['magenta', '#e6007e'], Y: ['amarillo', '#ffe500'], CM: ['azulv', '#3b2f9e'], CY: ['verde', '#00a25a'], MY: ['rojo', '#e3241b'], CMY: ['negroP', '#2b1d16'] })[k];
  }
  const RETOS = [['luz', 'amarillo'], ['pig', 'verde'], ['luz', 'blanco'], ['pig', 'rojo'], ['luz', 'cian'], ['pig', 'azulv'], ['luz', 'magenta'], ['pig', 'negroP'], ['luz', 'negro'], ['pig', 'papel']];

  function montarJuego(box) {
    const J = T('juego');
    let modo = 'luz', on = { R: true, G: true, B: false, C: false, M: true, Y: true }, enReto = false, ronda = 0, aciertos = 0, retos = [];
    const circulos = () => {
      const P = PRIM[modo], pos = [[110, 95], [150, 165], [70, 165]];
      return `<svg viewBox="0 0 220 260" class="mix-svg" aria-hidden="true"><rect width="220" height="260" rx="14" fill="${modo === 'luz' ? '#000' : '#fff'}"/>
        <g style="isolation:isolate">${P.map((p, i) => on[p] ? `<circle cx="${pos[i][0]}" cy="${pos[i][1]}" r="52" fill="${HEX[p]}" style="mix-blend-mode:${modo === 'luz' ? 'screen' : 'multiply'}"/>` : '').join('')}</g></svg>`;
    };
    function pintar(msg) {
      const [nom, hex] = mezcla(modo, on);
      const r = enReto ? retos[ronda] : null;
      box.innerHTML = `
        <div class="mix-head"><b>${J.titulo}</b>
          <div class="mix-tabs" role="group">${['libre', 'reto'].map(k => `<button type="button" data-tab="${k}" class="${(k === 'reto') === enReto ? 'on' : ''}">${J[k]}</button>`).join('')}</div></div>
        ${enReto ? (ronda < retos.length ? `<p class="mix-q">${J.consigue(J.colores[r[1]], r[0] === 'luz' ? J.conLuz : J.conPig)}</p>` : `<p class="mix-q">${J.fin(aciertos, retos.length)}</p>`) :
          `<div class="mix-tabs mix-modo" role="group">${['luz', 'pig'].map((m, i) => `<button type="button" data-modo="${m}" class="${m === modo ? 'on' : ''}">${J.modos[i]}</button>`).join('')}</div>`}
        <div class="mix-body">${circulos()}
          <div><p class="mix-p">${J.primarios}</p>
            <div class="mix-btns">${PRIM[modo].map(p => `<button type="button" data-p="${p}" aria-pressed="${!!on[p]}" class="${on[p] ? 'on' : ''}" style="--pc:${HEX[p]}">${J.nombres[p]}</button>`).join('')}</div>
            ${enReto ? '' : `<p class="mix-res">${J.resultado}: <span class="mix-sw" style="background:${hex}"></span> <b>${J.colores[nom]}</b></p><p class="mix-p">${J.pista[modo]}</p>`}
            ${enReto ? (ronda < retos.length ? `<button type="button" class="mix-go" data-chk="1">${J.comprobar}</button>` : `<button type="button" class="mix-go" data-otra="1">${J.otra}</button>`) : ''}
            ${enReto ? `<p class="mix-pt" aria-live="polite">${msg || ''} ${J.puntos(aciertos, retos.length)}</p>` : ''}
          </div></div>`;
      box.querySelectorAll('[data-p]').forEach(b => b.onclick = () => { on[b.dataset.p] = !on[b.dataset.p]; sfx('burbuja'); pintar(); });
      box.querySelectorAll('[data-modo]').forEach(b => b.onclick = () => { modo = b.dataset.modo; sfx('laser'); pintar(); });
      box.querySelectorAll('[data-tab]').forEach(b => b.onclick = () => { if ((b.dataset.tab === 'reto') !== enReto) { enReto = !enReto; if (enReto) empezar(); else pintar(); } });
      const go = box.querySelector("[data-chk]");
      if (go) go.onclick = () => {
        const ok = mezcla(modo, on)[0] === retos[ronda][1];
        if (ok) { aciertos++; sfx('coin'); ronda++; if (ronda < retos.length) { modo = retos[ronda][0]; limpiar(); } pintar(`<span class="ok">${J.bien}</span>`); }
        else { sfx('metal'); pintar(`<span class="ko">${J.mal}</span>`); }
      };
      const ot = box.querySelector('[data-otra]'); if (ot) ot.onclick = empezar;
    }
    const limpiar = () => { on = { R: false, G: false, B: false, C: false, M: false, Y: false }; };
    function empezar() { retos = RETOS.slice().sort(() => Math.random() - .5).slice(0, 8); ronda = 0; aciertos = 0; modo = retos[0][0]; limpiar(); pintar(); }
    pintar();
  }

  /* ---------- herramientas formativas ---------- */
  function borrarBtn(F, fn) {
    const b = document.createElement('button'); b.type = 'button'; b.className = 'fw-borrar'; b.textContent = F.borrar; let armado = false;
    b.onclick = () => { if (!armado) { armado = true; b.textContent = F.confirmar; setTimeout(() => { armado = false; b.textContent = F.borrar; }, 3000); return; } fn(); };
    return b;
  }
  function montarFb(box) {
    const F = T('form'), D = F.fb, v = leer('fb', {});
    box.innerHTML = `<h4>${D.titulo}</h4><p class="fw-aviso">${F.aviso}</p>` + D.grupos.map(([g, items]) => `
      <table class="fw-t"><caption>${g}</caption><thead><tr><th>IL</th><th></th><th>${D.cols[0]}</th><th>${D.cols[1]}</th></tr></thead><tbody>
      ${items.map(([il, c, txt, que]) => `<tr><td><b>${il}</b><small>${c}</small></td><td>${txt}</td>
        ${['e', 'a'].map(k => `<td>${que.includes(k) ? `<input type="checkbox" aria-label="${il} · ${D.cols[k === 'e' ? 0 : 1]}" data-k="${il}${k}" ${v[il + k] ? 'checked' : ''}>` : '—'}</td>`).join('')}</tr>`).join('')}
      </tbody></table>`).join('');
    box.querySelectorAll('input').forEach(i => i.onchange = () => { const s = leer('fb', {}); s[i.dataset.k] = i.checked; guardar('fb', s); if (i.checked) sfx('coin'); });
    box.appendChild(borrarBtn(F, () => { guardar('fb', {}); montarFb(box); }));
  }
  function montarEscala(box) {
    const F = T('form'), D = F.escala, v = leer('escala', {});
    box.innerHTML = `<h4>${D.titulo}</h4><p class="fw-aviso">${F.aviso}</p>
      <table class="fw-t fw-esc"><thead><tr><th>IL</th><th></th>${D.niveles.map(n => `<th>${n}</th>`).join('')}</tr></thead><tbody>
      ${D.items.map(([il, txt]) => `<tr><td><b>${il}</b><small>8.2</small></td><td>${txt}</td>${D.niveles.map((n, j) => `<td><input type="radio" name="esc-${il}" aria-label="${il} · ${n}" value="${j}" ${v[il] === j ? 'checked' : ''}></td>`).join('')}</tr>`).join('')}
      </tbody></table><div class="fw-bar"><span></span><i><b></b></i></div>`;
    const bar = () => { const s = leer('escala', {}), n = D.items.length; const pts = D.items.reduce((a, [il]) => a + (s[il] != null ? s[il] + 1 : 0), 0); box.querySelector('.fw-bar span').textContent = `${Math.round(pts / (n * 4) * 100)} %`; box.querySelector('.fw-bar b').style.width = (pts / (n * 4) * 100) + '%'; };
    box.querySelectorAll('input').forEach(i => i.onchange = () => { const s = leer('escala', {}); s[i.name.slice(4)] = +i.value; guardar('escala', s); sfx('coin'); bar(); });
    bar();
    box.appendChild(borrarBtn(F, () => { guardar('escala', {}); montarEscala(box); }));
  }
  function montarDiana(box) {
    const F = T('form'), D = F.diana; let ronda = leer('dianaR', 0);
    const N = D.ejes.length, CX = 260, CY = 185, R = 120, COL = ['#ff2d6f', '#d6ff3a'];
    const pt = (i, lv) => { const a = -Math.PI / 2 + i * 2 * Math.PI / N, r = R * (lv + 1) / 4; return [CX + r * Math.cos(a), CY + r * Math.sin(a)]; };
    function pintar() {
      const v = leer('diana', [{}, {}]);
      const anillos = [4, 3, 2, 1].map(k => `<circle cx="${CX}" cy="${CY}" r="${R * k / 4}" class="dn-ring"/>`).join('');
      const ejes = D.ejes.map(([n, il], i) => { let [x, y] = pt(i, 4.0); const [x2, y2] = pt(i, 3); const an = Math.abs(x - CX) < 20 ? 'middle' : (x > CX ? 'start' : 'end'); if (y < CY - R) y -= 8; if (y > CY + 20) y += 10; return `<line x1="${CX}" y1="${CY}" x2="${x2}" y2="${y2}" class="dn-eje"/><text x="${x}" y="${y}" text-anchor="${an}" class="dn-l">${n}</text><text x="${x}" y="${y + 13}" text-anchor="${an}" class="dn-s">${il}</text>`; }).join('');
      const zonas = D.ejes.map((e, i) => [0, 1, 2, 3].map(lv => { const [x, y] = pt(i, lv); return `<circle cx="${x}" cy="${y}" r="9" class="dn-hit${v[ronda][i] === lv ? ' on' : ''}" data-i="${i}" data-lv="${lv}" tabindex="0" role="button" aria-label="${e[0]} · ${D.niveles[lv]}" style="--dc:${COL[ronda]}"/>`; }).join('')).join('');
      const poli = r => { const ok = D.ejes.every((e, i) => v[r][i] != null); const ps = D.ejes.map((e, i) => v[r][i] != null ? pt(i, v[r][i]).join(',') : null).filter(Boolean); return ps.length > 1 ? `<polygon points="${ps.join(' ')}" fill="${COL[r]}${ok ? '33' : '18'}" stroke="${COL[r]}" stroke-width="2.5"/>` : ''; };
      box.innerHTML = `<h4>${D.titulo}</h4><p class="fw-aviso">${F.aviso}</p><p class="fw-p">${D.intro}</p>
        <div class="mix-tabs dn-tabs" role="group">${D.rondas.map((r, i) => `<button type="button" data-r="${i}" class="${i === ronda ? 'on' : ''}" style="--dc:${COL[i]}">${r}</button>`).join('')}</div>
        <svg viewBox="0 0 520 370" class="dn-svg">${anillos}${ejes}${poli(0)}${poli(1)}${zonas}</svg>
        <p class="dn-ley">${D.niveles.map((n, i) => `<span>${i + 1} · ${n}</span>`).join('')}</p>`;
      box.querySelectorAll('[data-r]').forEach(b => b.onclick = () => { ronda = +b.dataset.r; guardar('dianaR', ronda); sfx('laser'); pintar(); });
      box.querySelectorAll('.dn-hit').forEach(c => { const f = () => { const s = leer('diana', [{}, {}]); s[ronda][c.dataset.i] = +c.dataset.lv; guardar('diana', s); sfx('coin'); pintar(); }; c.onclick = f; c.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); f(); } }; });
      box.appendChild(borrarBtn(F, () => { guardar('diana', [{}, {}]); pintar(); }));
    }
    pintar();
  }

  /* ---------- Arena del bestiario: combate por turnos entre dos bestias ----------
     Nada se guarda ni se envía: los personajes viven solo mientras la página está abierta. */
  const ELEM = {
    fuego: ['#e3241b', '#f39200', '#ffd400', '#1f5fbf'], agua: ['#0b5ed7', '#00a3e0', '#45d6c8', '#f39200'],
    planta: ['#1e9e4a', '#2e7d32', '#c6d82f', '#e6007e'], tierra: ['#b8863b', '#8b5a2b', '#d9b37a', '#5b3fa0'],
    aire: ['#eef6fb', '#a9dcf5', '#c9ced3', '#ffb300'], sombra: ['#5b2a86', '#1b1b1b', '#7a7a7a', '#ffe500']
  };
  /* quién vence a quién: dos ciclos de tres */
  const GANA = { fuego: 'planta', planta: 'agua', agua: 'fuego', aire: 'tierra', tierra: 'sombra', sombra: 'aire' };
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const PTS = 15;

  function bestiaSVG(b, lado) {
    const [c1, c2, c3, ac] = ELEM[b.elem], f = b.forma, flip = lado === 1 ? 'scale(-1 1)' : '';
    const cuerpo = f === 'circulo' ? `<ellipse cx="0" cy="10" rx="46" ry="40" fill="${c1}" stroke="#111" stroke-width="3"/><ellipse cx="6" cy="22" rx="24" ry="18" fill="${c2}"/>`
      : f === 'cuadrado' ? `<rect x="-44" y="-28" width="88" height="78" rx="10" fill="${c1}" stroke="#111" stroke-width="3"/><rect x="-14" y="6" width="40" height="34" rx="6" fill="${c2}"/>`
      : `<path d="M-50 48 L0 -46 L50 48 Z" fill="${c1}" stroke="#111" stroke-width="3" stroke-linejoin="round"/><path d="M-16 44 L4 8 L22 44 Z" fill="${c2}"/>`;
    const extra = f === 'triangulo' ? `<path d="M-30 -4 l-16 -26 l24 12z M10 -30 l8 -30 l10 30z" fill="${c3}" stroke="#111" stroke-width="2"/>`
      : f === 'cuadrado' ? `<path d="M-44 -10 h-12 v20 h12 M44 -10 h12 v20 h-12" fill="${c3}" stroke="#111" stroke-width="2"/>`
      : `<circle cx="-30" cy="-26" r="12" fill="${c3}" stroke="#111" stroke-width="2"/><circle cx="26" cy="-28" r="12" fill="${c3}" stroke="#111" stroke-width="2"/>`;
    const manchas = `<circle cx="-24" cy="20" r="5" fill="${c3}"/><circle cx="-30" cy="34" r="3.5" fill="${c3}"/>`;
    const ojos = `<circle cx="10" cy="-6" r="9" fill="#fff" stroke="#111" stroke-width="2"/><circle cx="13" cy="-6" r="5" fill="${ac}"/><circle cx="14" cy="-8" r="1.6" fill="#fff"/>`;
    return `<g transform="${flip}">${extra}${cuerpo}${manchas}${ojos}<path d="M20 14 q8 6 16 0" stroke="#111" stroke-width="2.5" fill="none"/><path d="M-30 52 v10 M-10 52 v10 M14 52 v10 M32 52 v10" stroke="#111" stroke-width="5" stroke-linecap="round"/></g>`;
  }

  function montarArena(box) {
    const A = T('arena');
    const nuevo = (i) => ({ nombre: A.ejemplo[i][0], elem: A.ejemplo[i][1], forma: A.ejemplo[i][2], poder: A.ejemplo[i][3], atq: 6, def: 5, vel: 4 });
    let P = [nuevo(0), nuevo(1)], cpu = false, B = null;

    /* ----- pantalla de creación ----- */
    function crear() {
      const ficha = (b, i) => {
        const usados = b.atq + b.def + b.vel;
        return `<fieldset class="ar-ficha" data-j="${i}"><legend>${A.jugador} ${i + 1}${i === 1 && cpu ? ' · ' + A.maquina : ''}</legend>
          <svg viewBox="-70 -70 140 140" class="ar-mini" aria-hidden="true">${bestiaSVG(b, 0)}</svg>
          <label>${A.campos.nombre}<input data-k="nombre" maxlength="18" value="${esc(b.nombre)}"></label>
          <label>${A.campos.elem}<select data-k="elem">${Object.keys(ELEM).map(e => `<option value="${e}" ${e === b.elem ? 'selected' : ''}>${A.elementos[e]}</option>`).join('')}</select></label>
          <label>${A.campos.forma}<select data-k="forma">${['circulo', 'cuadrado', 'triangulo'].map(f => `<option value="${f}" ${f === b.forma ? 'selected' : ''}>${A.formas[f]}</option>`).join('')}</select></label>
          <label>${A.campos.poder}<input data-k="poder" maxlength="20" value="${esc(b.poder)}"></label>
          <p class="ar-pts ${usados > PTS ? 'ko' : ''}">${A.puntos(PTS - usados)}</p>
          ${['atq', 'def', 'vel'].map(s => `<label class="ar-st">${A.stats[s]} <b>${b[s]}</b><input type="range" min="1" max="9" data-k="${s}" value="${b[s]}"></label>`).join('')}
          <p class="ar-bonus">${A.bonus[b.forma]}</p></fieldset>`;
      };
      box.innerHTML = `<div class="mix-head"><b>${A.titulo}</b>
          <div class="mix-tabs" role="group">${[0, 1].map(m => `<button type="button" data-cpu="${m}" class="${(m === 1) === cpu ? 'on' : ''}">${A.modos[m]}</button>`).join('')}</div></div>
        <p class="fw-p">${A.intro}</p>
        <div class="ar-fichas">${ficha(P[0], 0)}${ficha(P[1], 1)}</div>
        <details class="ar-tabla"><summary>${A.ventajasT}</summary><ul>${Object.entries(GANA).map(([a, b]) => `<li><b>${A.elementos[a]}</b> → ${A.elementos[b]}: ${A.razon[a]}</li>`).join('')}</ul></details>
        <p class="ar-err" aria-live="polite"></p>
        <button type="button" class="mix-go ar-go">${A.luchar}</button>`;
      box.querySelectorAll('[data-cpu]').forEach(b => b.onclick = () => { cpu = b.dataset.cpu === '1'; sfx('laser'); crear(); });
      box.querySelectorAll('.ar-ficha').forEach(fs => {
        const j = +fs.dataset.j;
        fs.querySelectorAll('[data-k]').forEach(inp => {
          const k = inp.dataset.k;
          inp.addEventListener(inp.tagName === 'INPUT' && inp.type === 'text' || !inp.type || inp.type === 'text' ? 'input' : 'change', () => {
            P[j][k] = ['atq', 'def', 'vel'].includes(k) ? +inp.value : inp.value;
            if (k !== 'nombre' && k !== 'poder') { sfx('burbuja'); crear(); box.querySelector(`.ar-ficha[data-j="${j}"] [data-k="${k}"]`).focus(); }
          });
          if (inp.type === 'range') inp.oninput = () => { P[j][k] = +inp.value; inp.previousElementSibling.textContent = inp.value; const u = P[j].atq + P[j].def + P[j].vel; const p = fs.querySelector('.ar-pts'); p.textContent = A.puntos(PTS - u); p.classList.toggle('ko', u > PTS); };
        });
      });
      box.querySelector('.ar-go').onclick = () => {
        const mal = P.findIndex(b => b.atq + b.def + b.vel > PTS || !b.nombre.trim() || !b.poder.trim());
        if (mal >= 0) { sfx('metal'); box.querySelector('.ar-err').textContent = A.errorFicha(mal + 1, PTS); return; }
        empezar();
      };
    }

    /* ----- combate ----- */
    function empezar() {
      B = P.map(p => {
        const atq = p.atq + (p.forma === 'triangulo' ? 2 : 0), def = p.def + (p.forma === 'cuadrado' ? 2 : 0);
        const max = 40 + p.def * 2 + (p.forma === 'circulo' ? 10 : 0);
        return { ...p, atq, def, max, hp: max, guardia: false, esp: true };
      });
      B.turno = B[0].vel === B[1].vel ? (Math.random() < .5 ? 0 : 1) : (B[0].vel > B[1].vel ? 0 : 1);
      B.log = [A.empieza(esc(B[B.turno].nombre))]; B.fin = false;
      sfx('laser'); pintarCombate();
      if (cpu && B.turno === 1) setTimeout(turnoCPU, 900);
    }
    const mult = (a, d) => GANA[a.elem] === d.elem ? 2 : GANA[d.elem] === a.elem ? .5 : 1;
    function golpe(i, tipo) {
      if (B.fin) return;
      const a = B[i], d = B[1 - i], msg = [];
      if (tipo === 'def') {
        a.guardia = true; const cura = Math.min(4, a.max - a.hp); a.hp += cura;
        msg.push(A.defiende(esc(a.nombre), cura)); sfx('burbuja');
      } else {
        const esp = tipo === 'esp';
        if (esp) a.esp = false;
        if (esp && Math.random() < .2) { msg.push(A.falla(esc(a.nombre))); sfx('metal'); }
        else {
          const m = esp ? mult(a, d) : 1, crit = Math.random() < .1;
          let dmg = ((esp ? 7 : 4) + a.atq * (esp ? 2 : 1.6) - d.def * .7) * m * (0.85 + Math.random() * .3) * (crit ? 1.5 : 1);
          dmg = Math.max(1, Math.round(d.guardia ? dmg * .4 : dmg));
          d.hp = Math.max(0, d.hp - dmg); d.guardia = false;
          msg.push(A.usa(esc(a.nombre), esp ? A.ataqueDe(A.elementos[a.elem]) : esc(a.poder), dmg));
          if (crit) msg.push(A.critico);
          if (m === 2) msg.push(A.eficaz(A.razon[a.elem]));
          if (m === .5) msg.push(A.poco);
          box.dataset.hit = 1 - i; sfx(m === 2 || crit ? 'coin' : 'laser');
        }
      }
      if (tipo !== 'def') a.guardia = false;
      B.log.unshift(msg.join(' '));
      if (d.hp <= 0) { B.fin = true; B.log.unshift(A.gana(esc(a.nombre))); sfx('coin'); }
      else B.turno = 1 - i;
      pintarCombate();
      if (!B.fin && cpu && B.turno === 1) setTimeout(turnoCPU, 1100);
    }
    function turnoCPU() {
      const a = B[1], d = B[0];
      let t = 'atq';
      if (a.esp && mult(a, d) >= 1 && Math.random() < .6) t = 'esp';
      else if (a.hp < a.max * .3 && Math.random() < .4) t = 'def';
      golpe(1, t);
    }
    function pintarCombate() {
      const barra = b => { const p = b.hp / b.max; return `<div class="ar-hp"><i style="width:${p * 100}%;background:${p > .5 ? '#2fd36b' : p > .2 ? '#ffc400' : '#ff3b3b'}"></i></div><span class="ar-hpn">${b.hp} / ${b.max}</span>`; };
      const hit = box.dataset.hit; delete box.dataset.hit;
      const humano = !B.fin && !(cpu && B.turno === 1);
      const yo = B[B.turno];
      box.innerHTML = `<div class="mix-head"><b>${A.titulo}</b></div>
        <div class="ar-campo">
          ${[0, 1].map(i => `<div class="ar-lado ar-l${i}${B.turno === i && !B.fin ? ' ar-activo' : ''}">
            <div class="ar-info"><b>${esc(B[i].nombre)}</b> <span class="ar-el" style="--ec:${ELEM[B[i].elem][0]}">${A.elementos[B[i].elem]}</span>${B[i].guardia ? ` <span class="ar-g">🛡</span>` : ''}${barra(B[i])}</div>
            <svg viewBox="-70 -70 140 140" class="ar-bestia${hit == i ? ' ar-hit' : ''}${B[i].hp <= 0 ? ' ar-ko' : ''}" role="img" aria-label="${esc(B[i].nombre)}">${bestiaSVG(B[i], i)}</svg></div>`).join('')}
        </div>
        ${B.fin ? `<div class="ar-acc"><button type="button" class="mix-go" data-re="1">${A.revancha}</button><button type="button" class="mix-go" data-ed="1">${A.editar}</button></div>`
          : `<p class="ar-turno">${humano ? A.turnoDe(esc(yo.nombre)) : A.piensa(esc(yo.nombre))}</p>
        <div class="ar-acc">${humano ? `<button type="button" data-m="atq">⚔ ${esc(yo.poder)}</button>
          <button type="button" data-m="esp" ${yo.esp ? '' : 'disabled'}>✦ ${A.ataqueDe(A.elementos[yo.elem])}${yo.esp ? '' : ' · ' + A.usado}</button>
          <button type="button" data-m="def">🛡 ${A.defender}</button>` : ''}</div>`}
        <ol class="ar-log" aria-live="polite">${B.log.slice(0, 6).map(l => `<li>${l}</li>`).join('')}</ol>`;
      box.querySelectorAll('[data-m]').forEach(b => b.onclick = () => golpe(B.turno, b.dataset.m));
      const re = box.querySelector('[data-re]'); if (re) re.onclick = empezar;
      const ed = box.querySelector('[data-ed]'); if (ed) ed.onclick = crear;
    }
    crear();
  }

  function init(root) {
    root.querySelectorAll('[data-mix]').forEach(montarJuego);
    root.querySelectorAll('[data-arena]').forEach(montarArena);
    root.querySelectorAll('[data-fw="fb"]').forEach(montarFb);
    root.querySelectorAll('[data-fw="escala"]').forEach(montarEscala);
    root.querySelectorAll('[data-fw="diana"]').forEach(montarDiana);
  }

  if (!document.getElementById('css-epva1n1')) {
    const st = document.createElement('style'); st.id = 'css-epva1n1';
    st.textContent = `
.fig-b1 text{font-family:var(--body);fill:#f3efe6;font-size:14px}
.fig-b1 .b1-t{font-family:var(--pixel);font-size:10px}
.fig-b1 .b1-s{font-size:11px;opacity:.75}
.fig-b1 .b1-z{font-family:var(--marker);font-size:16px;fill:#2b2833}
.fig-b1 .b1-l path{stroke:#8a8592;stroke-width:1.5;fill:none}
.fig-b1 .b1-zl{font-family:var(--marker);font-size:20px;fill:#f3efe6}
.fig-b1 .b1-ps{font-size:11px;fill:#5c5866}
.duo-b1{display:grid;grid-template-columns:minmax(200px,300px) 1fr;gap:22px;align-items:start}
.duo-b1 ul{padding-left:18px;margin:.3em 0 .8em}
@media (max-width:640px){.duo-b1{grid-template-columns:1fr}}
.mix-game,.fw{border:2px solid var(--c);background:#141218;padding:16px 18px;margin:16px 0;max-width:720px}
.mix-head{display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap}
.mix-head>b{font-family:var(--marker);font-size:22px;color:var(--c)}
.mix-tabs{display:flex;gap:6px;flex-wrap:wrap}
.mix-tabs button,.mix-btns button,.mix-go,.fw-borrar{font:inherit;font-size:14px;padding:6px 12px;border:2px solid #5c5866;background:#1f1c25;color:#f3efe6;cursor:pointer}
.mix-tabs button.on{border-color:var(--dc,var(--c));color:var(--dc,var(--c))}
.mix-modo{margin:10px 0}
.mix-body{display:grid;grid-template-columns:200px 1fr;gap:18px;align-items:center;margin-top:8px}
@media (max-width:520px){.mix-body{grid-template-columns:1fr}.mix-svg{max-width:220px}}
.mix-svg{width:100%;display:block}
.mix-btns{display:flex;gap:8px;flex-wrap:wrap;margin:6px 0 12px}
.mix-btns button{border-color:var(--pc);min-width:84px}
.mix-btns button.on{background:var(--pc);color:#111;font-weight:700}
.mix-res{font-size:17px;display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.mix-sw{display:inline-block;width:30px;height:30px;border:2px solid #5c5866}
.mix-p{font-size:14px;opacity:.85;margin:.2em 0}
.mix-q{font-size:18px;margin:12px 0 4px}
.mix-go{border-color:var(--c);color:var(--c);margin-top:4px}
.mix-pt{min-height:1.4em}.mix-pt .ok{color:var(--fluor)}.mix-pt .ko{color:#ff7a7a}
.ar-fichas{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:10px 0}
@media (max-width:640px){.ar-fichas{grid-template-columns:1fr}}
.ar-ficha{border:1px solid #3a3742;padding:10px 12px;margin:0;min-width:0}
.ar-ficha legend{font-family:var(--pixel);font-size:11px;color:var(--c);padding:0 6px}
.ar-ficha label{display:block;font-size:13px;margin:6px 0}
.ar-ficha input:not([type=range]),.ar-ficha select{display:block;width:100%;margin-top:3px;font:inherit;font-size:14px;padding:5px 8px;background:#1f1c25;color:#f3efe6;border:1px solid #5c5866}
.ar-ficha input[type=range]{width:100%;accent-color:var(--c)}
.ar-mini{width:110px;height:110px;display:block;margin:0 auto}
.ar-pts{font-size:13px;color:var(--fluor);margin:8px 0 0}.ar-pts.ko{color:#ff7a7a}
.ar-bonus{font-size:12px;opacity:.8;margin:4px 0 0}
.ar-tabla{font-size:13px;margin:6px 0}.ar-tabla summary{cursor:pointer;color:var(--c)}.ar-tabla ul{margin:6px 0;padding-inline-start:18px}
.ar-err{color:#ff7a7a;font-size:14px;min-height:1.2em}
.ar-campo{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:10px 0;background:linear-gradient(#1c1a22,#26222e);padding:10px;border:1px solid #3a3742}
.ar-lado{display:flex;flex-direction:column;gap:6px}.ar-l1{text-align:end}
.ar-activo .ar-info b{color:var(--c)}
.ar-info{font-size:14px}.ar-el{display:inline-block;font-size:11px;padding:1px 6px;border:1px solid var(--ec);color:var(--ec)}
.ar-hp{height:10px;border:1px solid #5c5866;margin-top:4px;background:#111}.ar-hp i{display:block;height:100%;transition:width .4s}
.ar-l1 .ar-hp i{margin-inline-start:auto}
.ar-hpn{font-size:11px;opacity:.75}
.ar-bestia{width:100%;max-width:170px;height:auto;align-self:center}
.ar-hit{animation:arHit .45s}.ar-ko{opacity:.35;transform:rotate(12deg);transition:all .4s}
@keyframes arHit{0%,100%{transform:translateX(0)}20%{transform:translateX(-8px);filter:brightness(2)}40%{transform:translateX(8px)}60%{transform:translateX(-5px)}80%{transform:translateX(4px)}}
@media (prefers-reduced-motion:reduce){.ar-hit{animation:none}.ar-hp i{transition:none}}
.ar-turno{font-size:16px;margin:6px 0}
.ar-acc{display:flex;gap:8px;flex-wrap:wrap}
.ar-acc button{font:inherit;font-size:15px;padding:8px 14px;border:2px solid var(--c);background:#1f1c25;color:#f3efe6;cursor:pointer}
.ar-acc button:disabled{opacity:.4;cursor:not-allowed}
.ar-log{font-size:13px;margin:10px 0 0;padding-inline-start:18px;opacity:.9}.ar-log li:first-child{font-weight:700;opacity:1}
.fw h4{font-family:var(--marker);font-size:20px;color:var(--c);margin:0 0 6px}
.fw-aviso{font-size:13px;opacity:.8;border-left:3px solid var(--fluor);padding-left:8px}
[dir=rtl] .fw-aviso{border-left:0;border-right:3px solid var(--fluor);padding:0 8px 0 0}
.fw-p{font-size:14px}
.fw-t{width:100%;border-collapse:collapse;font-size:14px;margin:10px 0}
.fw-t caption{text-align:start;font-weight:700;padding:6px 0;color:var(--c)}
.fw-t th,.fw-t td{border:1px solid #3a3742;padding:6px;vertical-align:middle}
.fw-t th{font-size:12px;font-weight:600;background:#1f1c25}
.fw-t td:first-child{white-space:nowrap}.fw-t td small{display:block;opacity:.7;font-size:11px}
.fw-t td:nth-child(n+3){text-align:center}
.fw-t input{width:20px;height:20px;accent-color:var(--c);cursor:pointer}
@media (max-width:600px){.fw-t{font-size:12px}.fw-t th,.fw-t td{padding:4px}}
.fw-bar{display:flex;align-items:center;gap:10px;margin:6px 0 10px}.fw-bar i{flex:1;height:10px;border:1px solid #5c5866;display:block}.fw-bar b{display:block;height:100%;background:var(--c);width:0;transition:width .3s}
.fw-borrar{font-size:12px;margin-top:6px}
.dn-svg{width:100%;max-width:560px;display:block;margin:6px auto}
.dn-ring{fill:none;stroke:#3a3742;stroke-width:1.5}
.dn-eje{stroke:#5c5866}
.dn-l{font-family:var(--body);font-size:12px;fill:#f3efe6;font-weight:700}
.dn-s{font-family:var(--body);font-size:10px;fill:#8a8592}
.dn-hit{fill:#1f1c25;stroke:#8a8592;stroke-width:1.5;cursor:pointer}
.dn-hit:hover,.dn-hit:focus{stroke:var(--dc);outline:none}
.dn-hit.on{fill:var(--dc);stroke:var(--dc)}
.dn-tabs{margin:8px 0}
.dn-ley{display:flex;gap:14px;flex-wrap:wrap;font-size:12px;opacity:.8;justify-content:center}
`;
    document.head.appendChild(st);
  }

  NIVEL.crear({
    id: 'epva1-n1', ns: NS, color: 'var(--rosa)', ES,
    DIAS: [
      [['carta', 'jerarquia', 'pagina'], [0]],
      [['reproducir', 'transformar'], [0]],
      [['forma', 'textura'], [0]],
      [['colorQue', 'mezclas', 'circulo', 'gamas', 'colorear'], [1]],
      [['composicion', 'tecnicas', 'presentar', 'arena'], [2]]
    ],
    SABER: {
      carta: ['EPV.1.B.1', 'EPV.1.B.5'], jerarquia: ['EPV.1.B.1', 'EPV.1.B.5'], pagina: ['EPV.1.B.5'],
      reproducir: ['EPV.1.C.1'], transformar: ['EPV.1.C.1'],
      forma: ['EPV.1.B.3'], textura: ['EPV.1.B.3'],
      colorQue: ['EPV.1.B.3'], mezclas: ['EPV.1.B.3'], circulo: ['EPV.1.B.3'], gamas: ['EPV.1.B.3'], colorear: ['EPV.1.B.3', 'EPV.1.C.2'],
      composicion: ['EPV.1.B.5'], tecnicas: ['EPV.1.C.2'], presentar: ['EPV.1.B.1'], arena: ['EPV.1.B.3', 'EPV.1.C.1']
    },
    VIDEOS: {
      transformar: [
        ['El toro de Picasso (los once estados)', 'pkMcrAj_8hE', '1 min', 'Rastrosdegrabado'],
        ['Pablo Picasso, La metamorfosis de un toro', 'FVMPbLjZb-k', '3 min', 'acadasrarte'],
        ['¿Por qué pintó cabezas compuestas Giuseppe Arcimboldo?', 'aNlSQdZ-2hc', '17 min', 'Antonio García Villarán'],
        ['Obra comentada: El jardín de las delicias, El Bosco', 'kyssdNQTyqw', '6 min', 'Museo Nacional del Prado']
      ],
      forma: [
        ['Diseña personajes de forma fácil con formas geométricas', '4MCUV5ASv1I', '6 min', 'María Tuti'],
        ['Cómo crear personajes con formas geométricas', 'BfsW-4qc-ug', '7 min', 'Crehana'],
        ['La importancia de las formas en el diseño de personajes', 'xaozwQSuluo', '10 min', 'Dani Parker']
      ],
      textura: [
        ['¿Qué son las texturas visuales? + técnica del frottage', 'yeaBWcAA-WM', '6 min', 'Gisela Duarte'],
        ['Max Ernst y frottage', 'tQJD7inost4', '2 min', 'School of Yule'],
        ['Max Ernst y sus inventos en el arte (frottage, grattage, decalcomanía)', 'XDJiHi6ObZc', '4 min', 'LeeSunDraw']
      ],
      mezclas: [
        ['Explicada: teoría aditiva y sustractiva del color', 'FfbG1ieuTB0', '3 min', 'Quantum Society'],
        ['Síntesis sustractiva y aditiva del color: los píxeles de las pantallas', 'pELxwTtnHIU', '5 min', 'Educale'],
        ['¿Cómo percibimos los colores? Mezcla aditiva y sustractiva', 'h6fhB08go70', '4 min', 'OSAL (Óptica USAL)'],
        ['Mezcla aditiva de colores con linternas', 'bgjpuMuWZ44', '1 min', 'Martín Monteiro']
      ],
      circulo: [
        ['Círculo cromático: colores cálidos, fríos, análogos y opuestos', 'u8ZRqgqMfIQ', '3 min', 'Plástica en la escuela'],
        ['Qué son los colores cálidos, fríos, complementarios y armónicos', 'WtTIVbCQSks', '10 min', 'Pintar con Marta'],
        ['Teoría del color: todo lo que necesitas saber', 'MNKRUoKcWb0', '9 min', 'Agata del Barco']
      ],
      composicion: [
        ['Leyes de composición: peso visual', 'pnOVmQ_uwuo', '5 min', 'Galeano Ezequiel'],
        ['Composición: equilibrio y dinamismo', 'yLZR2U--FCE', '5 min', 'aprende_mx'],
        ['Composición visual: el equilibrio', 'J04R5RuuIz0', '8 min', 'ART TIP']
      ],
      tecnicas: [
        ['Técnicas secas y húmedas en las artes visuales', 'MTiT1TjlcQM', '4 min', 'patrick flores'],
        ['Técnicas húmedas y secas', 'e7ICFeXD5RQ', '7 min', 'Artes Plásticas y Visuales']
      ]
    },
    ACT_IL: [['IL 3.1', 'IL 3.2', 'IL 3.3', 'IL 3.4'], ['IL 3.5', 'IL 3.6'], ['IL 3.7', 'IL 3.8', 'IL 3.9', 'IL 3.10', 'IL 3.11']],
    figs: { carta: figCarta, pagina: figPagina, formas: figFormas, juego: figJuego, arena: figArena },
    init
  });
})();
