/* INSERT ART · EPVA 3.º ESO · Nivel 01 · Un tríptico histórico */
(function () {
  /* Esquema del tríptico: caras exteriores e interiores */
  function figTriptico(L) {
    const cara = (x, y, t, s, hi) => `<g transform="translate(${x} ${y})"><rect width="150" height="190" fill="${hi ? '#2a1230' : '#17151c'}" stroke="#f3efe6" stroke-width="2"/>
      <text x="75" y="88" text-anchor="middle" class="tr-t">${L(t)}</text><text x="75" y="112" text-anchor="middle" class="tr-s">${L(s)}</text></g>`;
    const pliegue = (x, y) => `<path d="M${x} ${y}V${y + 190}" stroke="#d6ff3a" stroke-width="2" stroke-dasharray="7 6"/>`;
    return `<svg class="fig-ep fig-tri" viewBox="0 0 520 500" role="img" aria-label="${L('Esquema del tríptico: tres caras exteriores y tres interiores')}">
      <text x="10" y="22" class="tr-h">${L('EXTERIOR')}</text>
      ${cara(10, 34, 'Solapa', 'Avance', false)}${cara(160, 34, 'Contraportada', 'Fuentes y autoría', false)}${cara(310, 34, 'Portada', 'Título e imagen', true)}
      ${pliegue(160, 34)}${pliegue(310, 34)}
      <text x="10" y="268" class="tr-h">${L('INTERIOR')}</text>
      ${cara(10, 280, 'Presentación', 'Dónde está', false)}${cara(160, 280, 'Patrimonio', 'Qué visitar', false)}${cara(310, 280, 'Ruta', 'Qué descubrir', false)}
      ${pliegue(160, 280)}${pliegue(310, 280)}
      <text x="470" y="140" class="tr-s" text-anchor="middle">A4</text>
    </svg>`;
  }

  const ES = {
    t: {},
    ui: {
      indice: 'Índice', tocAria: 'Índice de la teoría', cuadernoLabel: 'En vuestro cuaderno de investigación:', misionK: 'MISIÓN',
      diasIntro: 'Esta unidad ya está terminada: aquí tienes la teoría para <b>repasar</b>. Está repartida en <b>tres días</b>, de <b>15 minutos como máximo</b>, y cada día va unido a la actividad que preparaba. Los vídeos de «Para ver más» son para ampliar en casa.',
      diaK: 'DÍA', minutos: '15 min', prepara: 'Te prepara para', actK: 'Actividad',
      dias: ['El patrimonio andaluz', 'Del boceto al tríptico', 'Diseñar para comunicar'],
      saberK: 'Saber básico', verMas: 'Para ver más (en casa)', abreYT: 'Se abre en YouTube',
      subt: 'Los vídeos están en español. En YouTube puedes activar los subtítulos y traducirlos automáticamente a tu idioma.',
      videosT: 'Vídeos de la unidad', videosP: 'Todos los vídeos de la teoría, ordenados por días. Se abren en YouTube.',
      enlacesT: 'Dónde investigar'
    },
    enlaces: [
      ['Catálogo del Patrimonio Histórico de Andalucía', 'https://www.juntadeandalucia.es/organismos/culturapatrimoniohistoricoydeporte/areas/cultura/bienes-culturales/catalogo-pha/consulta.html', 'Buscador oficial de bienes protegidos de Andalucía.'],
      ['Historia del Arte', 'https://historia-arte.com/', 'Fichas de obras, artistas y movimientos.'],
      ['Google Arts & Culture', 'https://artsandculture.google.com/', 'Obras y monumentos en alta resolución.']
    ],
    sec: {
      manifestacion: ['Manifestación artística y manifestación cultural', h => `
        <ul class="cards3 c2">
          <li><b>Manifestación artística</b><span>Una producción humana creada con <strong>intención expresiva</strong>. Transmite ideas, emociones, creencias o un mensaje con un lenguaje propio: composición, color, materia, proporción. Puede ser visual, plástica, sonora, corporal o literaria.</span></li>
          <li><b>Manifestación cultural</b><span>Todo lo que produce un grupo humano, tenga o no intención artística, y que expresa su identidad y su modo de vida. Puede ser <strong>material</strong> (monumentos, objetos, artesanía) o <strong>inmaterial</strong> (fiestas, rituales, lengua, música, gastronomía).</span></li>
        </ul>
        <p class="tip"><b>No solo representa: también expresa.</b> Una obra cuenta quién la hizo, para quién y qué creía aquella sociedad.</p>`],

      patrimonio: ['El patrimonio y cómo se protege', h => `
        <p class="def">El <b>patrimonio</b> es la herencia cultural y natural que recibimos de quienes vivieron antes y que debemos cuidar para quienes vendrán.</p>
        <div class="flujo"><span>QUIENES VIVIERON ANTES</span><b>→</b><span>NOSOTROS: CUIDAR</span><b>→</b><span>QUIENES VENDRÁN</span></div>
        <ul class="cards3">
          <li><b>Material</b><span>Bienes muebles (un cuadro, una escultura) e inmuebles (un edificio, un yacimiento).</span></li>
          <li><b>Inmaterial</b><span>Lo que no se toca: el flamenco, la Fiesta de los Patios de Córdoba, la dieta mediterránea.</span></li>
          <li><b>Natural</b><span>Paisajes y espacios como el Parque Nacional de Doñana.</span></li>
        </ul>
        <h3 class="sub">Cómo se protege</h3>
        <ul class="cual cual3">
          <li><b>Ley 14/2007</b><span>Ley del Patrimonio Histórico de Andalucía: protege los bienes de nuestra comunidad.</span></li>
          <li><b>BIC</b><span>Bien de Interés Cultural: la máxima protección en España.</span></li>
          <li><b>Patrimonio Mundial</b><span>Bienes declarados por la UNESCO por su valor universal excepcional.</span></li>
        </ul>
        <p><b>Patrimonio Mundial en Andalucía:</b> Alhambra, Generalife y Albaicín · Centro histórico de Córdoba · Catedral, Alcázar y Archivo de Indias de Sevilla · Parque Nacional de Doñana · Conjuntos de Úbeda y Baeza · Arte rupestre del arco mediterráneo · Dólmenes de Antequera · Ciudad califal de Medina Azahara.</p>
        <div class="flujo"><span>CONOCER</span><b>→</b><span>VALORAR</span><b>→</b><span>CONSERVAR</span><b>→</b><span>DIFUNDIR</span></div>
        <p class="tip"><b>Vuestro tríptico es el último paso:</b> difundir el patrimonio para que otras personas lo conozcan y lo cuiden.</p>`],

      analizar: ['Cómo investigar una obra: la estructura común', h => `
        <p>Ninguna obra nace sola: la explican las circunstancias de su época. Por eso, de cada obra investigasteis estos <b>ocho puntos</b>:</p>
        <ol class="fases-n2 f8">
          <li><b>Identificación</b><span>Nombre, ubicación, época y autor (si se conoce).</span></li>
          <li><b>Aspectos formales</b><span>Materiales, técnica, composición, color, decoración, proporción y escala.</span></li>
          <li><b>Función</b><span>¿Para qué se hizo? Religiosa, política, funeraria, doméstica…</span></li>
          <li><b>Contexto</b><span>Qué sociedad la produjo y qué poder o creencias reflejaba.</span></li>
          <li><b>Género</b><span>¿Hay mujeres como autoras o representadas? ¿Qué nos dice eso de la época?</span></li>
          <li><b>Andalucía</b><span>Por qué pertenece al patrimonio andaluz y qué la hace única.</span></li>
          <li><b>Conservación</b><span>¿Está protegida (BIC, UNESCO)? ¿Qué riesgos o cambios ha sufrido?</span></li>
          <li><b>Actualidad</b><span>¿Sigue viva en el arte y la cultura de hoy?</span></li>
        </ol>
        <p class="ojo"><b>Fuentes fiables:</b> el Catálogo del Patrimonio Histórico de Andalucía, las webs de museos y de la UNESCO, Historia del Arte y Google Arts & Culture (los enlaces están en la pestaña <b>Recursos</b>). Si usáis una IA, <b>escribid el prompt</b>, contrastad lo que os dice y anotad de dónde sale cada dato.</p>`],

      viaje: ['Andalucía, un viaje en el tiempo', h => `
        <p>Estos son los seis bloques que investigaron los equipos, con algunos ejemplos de cada uno:</p>
        <ul class="cual cual3">
          <li><b>1 · Prehistoria</b><span>Dólmenes de Antequera, pinturas de la cueva de la Pileta (Benaoján) y cueva de Nerja.</span></li>
          <li><b>2 · Antigüedad</b><span>Itálica (Santiponce), Baelo Claudia (Tarifa) y la Gadir fenicia (Cádiz).</span></li>
          <li><b>3 · Al-Ándalus</b><span>Mezquita de Córdoba, Medina Azahara, Giralda y Alhambra.</span></li>
          <li><b>4 · Renacimiento y Barroco</b><span>Úbeda y Baeza; Velázquez, Murillo, Zurbarán y Valdés Leal; la escultora Luisa Roldán, «la Roldana».</span></li>
          <li><b>5 · Siglos XIX y XX</b><span>Picasso (Málaga), Julio Romero de Torres (Córdoba), Daniel Vázquez Díaz (Nerva) y Carmen Laffón (Sevilla).</span></li>
          <li><b>6 · Arte contemporáneo y patrimonio vivo</b><span>Museo Picasso Málaga, Metropol Parasol («las Setas»), el flamenco y los Patios de Córdoba.</span></li>
        </ul>
        <h3 class="sub">El patrimonio a la vuelta de la esquina: Marbella</h3>
        <p>El casco antiguo con su muralla, la Plaza de los Naranjos y la Iglesia de la Encarnación; la basílica paleocristiana de Vega del Mar; la villa romana de Río Verde y las termas de Las Bóvedas.</p>`],

      lenguaje: ['El lenguaje visual comunica', h => `
        <p>Un tríptico es un <b>mensaje visual</b>: tiene que informar y, a la vez, atraer. Como en toda comunicación, hay cuatro elementos:</p>
        <ul class="cual">
          <li><b>Emisor</b><span>Vuestro equipo.</span></li>
          <li><b>Receptor</b><span>Quien quiere viajar y descubrir Andalucía.</span></li>
          <li><b>Mensaje</b><span>«Este patrimonio merece una visita».</span></li>
          <li><b>Canal</b><span>El tríptico: papel o PDF.</span></li>
        </ul>
        <p class="tip"><b>Pensad siempre en el receptor:</b> textos cortos, claros y que despierten curiosidad.</p>`],

      elementos: ['Punto, línea y plano; iconicidad; leer las imágenes', h => `
        <ul class="cards3">
          <li><b>Punto</b><span>Atrae la mirada: un icono, una viñeta, un número de ruta.</span></li>
          <li><b>Línea</b><span>Separa, guía la lectura y marca recorridos.</span></li>
          <li><b>Plano</b><span>Las superficies de color y las fotos que organizan cada cara.</span></li>
        </ul>
        <p><b>Iconicidad:</b> cuánto se parece una imagen a la realidad. Una fotografía es muy icónica; un dibujo, menos; un pictograma (el de un monumento en un mapa) es casi abstracto. Elegid el grado que necesitéis: foto para mostrar, pictograma para orientar.</p>
        <div class="lectura">
          <div><h3>Denotación</h3><p><b>Lo que se ve</b> en la foto: el arco, la torre, la luz de la tarde.</p></div>
          <div><h3>Connotación</h3><p><b>Lo que transmite</b>: misterio, grandeza, calma. Elegid fotos que connoten lo que queréis contar.</p></div>
        </div>`],

      composicion: ['Composición: ordenar cada cara', h => `
        <ul class="cual">
          <li><b>Jerarquía</b><span>Primero el título; después, lo importante; al final, los detalles.</span></li>
          <li><b>Equilibrio</b><span>Reparte el peso de fotos y textos entre las caras.</span></li>
          <li><b>Proporción</b><span>Una imagen grande manda; varias pequeñas acompañan.</span></li>
          <li><b>Ritmo</b><span>Repetir la misma estructura en las caras interiores da unidad.</span></li>
        </ul>
        <p class="tip"><b>Orden:</b> alinea los elementos, deja márgenes y agrupa cada texto con su imagen.</p>`],

      triptico: ['El tríptico: cómo funciona', h => `
        <p class="def"><b>A4 apaisado, tres cuerpos, seis caras.</b> Se dobla con <b>plegado envolvente</b>: la solapa entra primero, por eso es un poco más estrecha.</p>
        ${h.fig('triptico')}
        <p class="tip"><b>Antes de diseñar, haced una maqueta de papel:</b> dobladla, numerad las caras y comprobad el orden de lectura.</p>`],

      proceso: ['El proceso creativo y los bocetos', h => `
        <div class="flujo"><span>INVESTIGAR</span><b>→</b><span>SELECCIONAR</span><b>→</b><span>BOCETAR</span><b>→</b><span>DISEÑAR</span><b>→</b><span>REVISAR</span></div>
        <p>El <b>boceto</b> es un dibujo rápido a mano alzada para probar ideas antes de hacerlas definitivas. En vuestra propuesta situasteis títulos, textos e imágenes en cada cara y anotasteis qué información iba en cada sitio. Elegir bien los materiales y la técnica (folio doblado para la maqueta, Canva para el diseño final) también forma parte del proceso.</p>`],

      color: ['Forma, color y textura con intención', h => `
        <ul class="cards3">
          <li><b>Paleta</b><span>Dos o tres colores más un neutro. Repetidlos en todas las caras.</span></li>
          <li><b>Contraste</b><span>Texto oscuro sobre fondo claro (o al revés). Los complementarios juntos llaman la atención.</span></li>
          <li><b>Expresión</b><span>Ocres y tierras evocan piedra y tiempo; los azules, agua y calma.</span></li>
        </ul>
        <p><b>Textura visual:</b> una foto de piedra, de azulejo o de mosaico como fondo suave da carácter, siempre que no impida leer.</p>`],

      percepcion: ['Cómo se percibe una página', h => `
        <ul class="cual">
          <li><b>Figura y fondo</b><span>El texto tiene que separarse bien de lo que hay detrás.</span></li>
          <li><b>Proximidad</b><span>Lo que está cerca se lee junto: cada texto, al lado de su foto.</span></li>
          <li><b>Semejanza</b><span>Los títulos con el mismo estilo se reconocen como del mismo nivel.</span></li>
          <li><b>Recorrido</b><span>Leemos en Z: arriba a la izquierda, arriba a la derecha y abajo.</span></li>
        </ul>`],

      tipografia: ['Tipografía y legibilidad', h => `
        <ul class="cards3">
          <li><b>Dos como máximo</b><span>Una para títulos, otra para los textos.</span></li>
          <li><b>Tamaño</b><span>Textos de 10 a 12 puntos; títulos mucho mayores.</span></li>
          <li><b>Alineación</b><span>Párrafos cortos y alineados a la izquierda se leen mejor.</span></li>
        </ul>`],

      fuentes: ['Fuentes, autoría y visita responsable', h => `
        <ul class="cual cual3">
          <li><b>Textos propios</b><span>Escribid con vuestras palabras a partir de la investigación.</span></li>
          <li><b>Citar</b><span>En la contraportada: de dónde sale cada texto y cada imagen (web, autor y fecha).</span></li>
          <li><b>Imágenes</b><span>Respetad las licencias: usad imágenes libres o propias.</span></li>
        </ul>
        <p class="ojo"><b>Visita responsable:</b> no tocar ni pintar, respetar los recorridos y los horarios, no dejar basura. Cuidar el patrimonio también es difundirlo bien.</p>`]
    },

    mision: {
      titulo: 'Un tríptico para descubrir Andalucía',
      reto: 'Investigad en equipo el patrimonio histórico de Andalucía del bloque que os ha tocado y convertidlo en un <b>tríptico</b> que haga que otras personas quieran descubrirlo. Aquí no importan las notas de antes: importa lo que sois capaces de hacer <b>ahora</b>. <b>¡Vamos a por el 10!</b>',
      fasesT: 'Cómo se juega',
      fases: [
        ['Investigad', 'En un documento compartido, el cuaderno de investigación del equipo, siguiendo la estructura común y las preguntas de vuestro bloque.'],
        ['Proponed', 'Un tríptico a mano alzada en un folio doblado, con cada cara y su información situadas.'],
        ['Diseñad', 'El tríptico final en Canva, con textos propios y fuentes citadas.'],
        ['Entregad', 'Los tres archivos en vuestra carpeta EPVA › Unidad 1.']
      ],
      entregasT: 'Qué tenéis que entregar',
      entregas: [
        'En la tarea de Classroom, el <b>enlace a vuestra carpeta EPVA › Unidad 1</b>, compartida con permiso de lector.',
        'Dentro, tres archivos: <b>1 Investigación</b>, <b>2 Propuesta Tríptico</b> (foto de las dos caras del folio) y <b>3 Tríptico final</b> (PDF de Canva).'
      ],
      pista: 'Buscad datos que sorprendan, historias que enganchen y obras que merezcan ser conocidas: «¡No sabía que esto estaba en Andalucía!».'
    },

    act: {
      intro: 'Esta unidad ya está <b>terminada</b>. Aquí tienes las tres actividades tal como se hicieron y cómo se evalúa cada una.',
      acts: [
        ['Investigación del patrimonio andaluz', 'En equipo', {
          obj: 'Investigar el patrimonio histórico de Andalucía del bloque que os tocó.',
          pasos: [
            'Cread un documento de Google y compartidlo con todo el equipo: será vuestro <b>cuaderno de investigación</b>.',
            'Mirad qué <b>bloque</b> os ha tocado (abajo tenéis los seis, con sus preguntas).',
            'Elegid obras, monumentos o manifestaciones del bloque que formen parte del <b>Patrimonio Histórico de Andalucía</b>.',
            ['De cada obra, completad la <b>estructura común</b>:', ['identificación;', 'aspectos formales;', 'función y finalidad original;', 'contexto histórico-social;', 'perspectiva de género (cuando proceda);', 'relación con Andalucía;', 'estado de conservación y protección;', 'conexión con la actualidad.']],
            'Contestad las <b>cinco preguntas</b> de vuestro bloque.',
            'Investigad en <b>fuentes fiables</b> (pestaña Recursos). Si usáis una IA, <b>escribid el prompt</b> y contrastad la información.',
            'No copiéis y peguéis: <b>seleccionad</b> lo más sorprendente. Será la materia prima del tríptico.'
          ],
          donde: 'En equipo, en el documento compartido.',
          entrega: 'Archivo «1 Investigación» en la carpeta EPVA › Unidad 1.'
        }, `<p class="ex-t"><b>Los seis bloques y sus preguntas</b></p>
          <details><summary>Bloque 1 · Arte prehistórico</summary><ul><li>¿Qué técnica se usó para pintar (pigmentos, herramientas)?</li><li>¿Qué animales o signos aparecen y con qué frecuencia?</li><li>¿Qué teorías existen sobre su función (ritual, mágica, comunicativa)?</li><li>¿Cómo se descubrió el yacimiento y quién lo investigó?</li><li>¿Qué medidas de conservación tiene (acceso restringido, réplicas visitables)?</li></ul></details>
          <details><summary>Bloque 2 · Antigüedad (Egipto, Grecia, Roma)</summary><ul><li>¿Quién fundó o promovió la construcción y por qué (contexto político-militar)?</li><li>¿Qué técnicas constructivas romanas se emplean (arco, bóveda, mosaico)?</li><li>¿Qué actividades sociales se desarrollaban allí (espectáculos, vida doméstica, comercio)?</li><li>¿Qué objetos o restos se han encontrado y dónde se exponen hoy (museos)?</li><li>¿Qué relación tiene con otras ciudades romanas de la península?</li></ul></details>
          <details><summary>Bloque 3 · Edad Media: al-Ándalus</summary><ul><li>¿Bajo qué poder político se construyó (califal, nazarí, almohade)?</li><li>¿Qué elementos decorativos son característicos (ataurique, epigrafía, geometría) y por qué no hay figuras humanas ni animales?</li><li>¿Qué papel juegan el agua o la luz en el diseño?</li><li>¿Qué transformaciones sufrió tras la conquista cristiana (superposiciones, reutilización)?</li><li>¿Qué reconocimiento internacional tiene (Patrimonio Mundial UNESCO)?</li></ul></details>
          <details><summary>Bloque 4 · Renacimiento y Barroco andaluz</summary><ul><li>¿Quién encargó la obra (Iglesia, cofradía, nobleza) y con qué intención (Contrarreforma)?</li><li>¿Qué recursos formales usa el artista para emocionar al espectador (claroscuro, gesto, color)?</li><li>¿Qué diferencia hay entre el estilo de este artista y el de otro contemporáneo suyo?</li><li>¿Hay mujeres artistas documentadas en esta época? ¿Por qué son tan escasas?</li><li>¿Cómo se relaciona la obra con tradiciones vivas actuales (por ejemplo, las procesiones)?</li></ul></details>
          <details><summary>Bloque 5 · Siglos XIX y XX: tradición y ruptura</summary><ul><li>¿Qué movimiento artístico representa y qué rompe respecto a la tradición anterior?</li><li>¿Qué relación tiene el artista con Andalucía (nacimiento, formación, obra)?</li><li>¿Qué obras suyas dialogan explícitamente con el arte del pasado?</li><li>¿Cómo influyó el contexto histórico (industrialización, guerras, cambios sociales) en su obra?</li><li>¿Qué mujeres artistas de la época deberían visibilizarse y por qué han sido menos conocidas?</li></ul></details>
          <details><summary>Bloque 6 · Arte contemporáneo y patrimonio vivo</summary><ul><li>¿Qué tipo de manifestación es (museo, festival, arte urbano, patrimonio inmaterial)?</li><li>¿Qué la conecta formal o temáticamente con el arte del pasado?</li><li>¿Quién la gestiona o protege actualmente (institución, ayuntamiento, comunidad)?</li><li>¿Qué papel juega en la identidad cultural actual de su ciudad o comarca?</li><li>¿Cómo participa o puede participar el propio alumnado en ella (asistir, visitar, crear)?</li></ul></details>`],
        ['Propuesta de tríptico a mano alzada', 'Boceto', {
          obj: 'Planificar el tríptico antes de diseñarlo: qué va en cada cara y en qué orden se lee.',
          pasos: [
            'Doblad un folio A4 apaisado en <b>tres cuerpos</b>, con plegado envolvente.',
            'Identificad las <b>seis caras</b>: portada, solapa y contraportada por fuera; presentación, patrimonio y ruta por dentro.',
            'Situad a lápiz los <b>títulos, textos e imágenes</b> de cada cara.',
            'Anotad qué información y qué fotografías de la investigación irán en cada sitio.',
            'Comprobad que el <b>orden de lectura</b> funciona al plegar.',
            'Fotografiad las <b>dos caras</b> del folio desplegado, nítidas y completas.'
          ],
          donde: 'En un folio A4 doblado en tres cuerpos.',
          entrega: 'Archivo «2 Propuesta Tríptico» en la carpeta EPVA › Unidad 1.'
        }],
        ['Tríptico final', 'Diseño', {
          obj: 'Diseñar en Canva un tríptico claro y atractivo que difunda el patrimonio investigado.',
          pasos: [
            'Abrid en Canva un diseño de <b>tríptico A4 apaisado</b>.',
            'Pasad la propuesta a limpio y <b>corregid</b> lo que no funcionaba en el boceto.',
            'Escribid <b>textos propios</b>, cortos y claros, a partir de la investigación.',
            'Usad una <b>paleta</b> de pocos colores y <b>dos tipografías</b> como máximo.',
            'Incluid cómo se <b>protege y conserva</b> cada obra y consejos de <b>visita responsable</b>.',
            'Citad las <b>fuentes</b> de textos e imágenes en la contraportada.',
            'Descargadlo en <b>PDF</b>.'
          ],
          donde: 'En Canva.',
          entrega: 'Archivo «3 Tríptico final» en la carpeta EPVA › Unidad 1, y el enlace a la carpeta en la tarea de Classroom.'
        }]
      ],
      cotejoT: 'Lista de cotejo: ¿cómo vais?',
      cotejoP: 'Marca lo que tienes hecho. Las marcas se guardan solo en este dispositivo.',
      grupos: [
        ['Investigación', ['Hemos completado los ocho puntos de cada obra.', 'Hemos contestado las cinco preguntas del bloque.', 'Hemos usado fuentes fiables y anotado de dónde sale cada dato.']],
        ['Propuesta', ['Las seis caras están identificadas y anotadas.', 'El orden de lectura funciona al plegar.', 'Hemos fotografiado las dos caras del folio.']],
        ['Tríptico final y entrega', ['Textos propios, paleta definida y dos tipografías como máximo.', 'Incluye conservación, visita responsable y fuentes.', 'La carpeta EPVA › Unidad 1 tiene los tres archivos y el enlace funciona.']]
      ],
      progreso: (n, t) => `Llevas ${n} de ${t}`, borrar: 'Borrar mis marcas', confirmar: '¿Seguro? Pulsa otra vez para borrar.'
    },

    rub: {
      intro: 'Así se evalúa esta unidad. Cada trabajo se evalúa con dos criterios y cada criterio tiene tres indicadores, que se puntúan de 1 a 10. La nota de cada criterio es la media de sus tres indicadores.',
      criteriosT: 'Criterios de evaluación',
      criterios: [
        ['1.1', 'Reconocer los factores históricos y sociales que rodean las producciones plásticas, visuales y audiovisuales más relevantes, así como su función y finalidad, describiendo sus particularidades y su papel como transmisoras de valores y convicciones, con interés y respeto, desde una perspectiva de género.'],
        ['6.1', 'Explicar su pertenencia a un contexto cultural concreto, de manera específica el andaluz, a través del análisis de los aspectos formales y de los factores sociales que determinan diversas producciones culturales y artísticas actuales.'],
        ['5.2', 'Realizar diferentes tipos de producciones artísticas individuales o colectivas, justificando el proceso creativo, mostrando iniciativa y autoconfianza, integrando racionalidad, empatía y sensibilidad, y seleccionando las técnicas y los soportes adecuados al propósito.'],
        ['8.3', 'Exponer los procesos de elaboración y el resultado final de producciones y manifestaciones artísticas, realizadas de forma individual o colectiva, reconociendo los errores, buscando las soluciones y las estrategias más adecuadas para mejorarlas, y valorando las oportunidades de desarrollo personal que ofrecen.'],
        ['8.2', 'Desarrollar producciones y manifestaciones artísticas con una intención previa, de forma individual o colectiva, organizando y desarrollando las diferentes etapas y considerando las características del público destinatario.'],
        ['1.2', 'Valorar la importancia de la conservación, preservación y difusión del patrimonio cultural y artístico a través del conocimiento y el análisis guiado de obras de arte.']
      ],
      niveles: ['Insuficiente (1–4)', 'Suficiente (5–6)', 'Notable (7–8)', 'Excelente (9–10)'],
      criterio: 'Criterio',
      bloques: [
        ['Actividad 1. Investigación', [
          ['IL 1.1.1', 'Función y finalidad', '1.1', 'Indica para qué se hizo cada obra (religiosa, política, funeraria, doméstica…).', ['No indica para qué se hicieron las obras.', 'Indica la función solo de alguna obra o con una palabra suelta, sin explicarla.', 'Indica para qué se hizo la mayoría de las obras, con una explicación breve.', 'Explica para qué se hizo cada obra y quién la usaba.']],
          ['IL 1.1.2', 'Contexto histórico-social', '1.1', 'Indica qué sociedad produjo cada obra y qué poder o creencias reflejaba.', ['No indica el contexto.', 'Solo indica la época o la civilización.', 'Indica la sociedad de la mayoría de las obras y menciona el poder o las creencias en algunas.', 'Indica qué sociedad hizo cada obra y qué poder o creencias reflejaba.']],
          ['IL 1.1.3', 'Perspectiva de género', '1.1', 'Indica si hay mujeres como autoras o representadas.', ['No dice nada sobre la presencia de mujeres.', 'Lo menciona en una frase general o solo en una obra.', 'Indica si aparecen o no mujeres como autoras o representadas.', 'Lo indica y explica con una idea propia por qué.']],
          ['IL 6.1.1', 'Identificación y aspectos formales', '6.1', 'Nombre, lugar, época y autor; materiales, técnica, color o decoración.', ['No identifica ni describe las obras.', 'Solo nombre y lugar, o descripciones generales.', 'Identifica la mayoría y describe algunos materiales o técnicas.', 'Identifica cada obra y describe materiales, técnica y decoración.']],
          ['IL 6.1.2', 'Andalucía, conservación y actualidad', '6.1', 'Relación con Andalucía, protección y conservación, y relación con hoy.', ['No lo trata.', 'Solo dice dónde está o que es «patrimonio».', 'Explica la relación con Andalucía y la protección, pero apenas la actualidad.', 'Explica qué la hace única, su protección y su relación con hoy.']],
          ['IL 6.1.3', 'Preguntas del bloque', '6.1', 'Responde las cinco preguntas propias del bloque.', ['No responde las preguntas.', 'Responde una o dos, o todas con frases sueltas.', 'Responde tres o cuatro, o las cinco muy brevemente.', 'Responde las cinco con datos concretos.']]]],
        ['Actividad 2. Propuesta a mano alzada', [
          ['IL 5.2.1', 'Las seis caras', '5.2', 'Organiza las seis caras según su función, teniendo en cuenta el plegado.', ['No organiza las caras.', 'Organización confusa: faltan caras o no respetan el plegado.', 'Organiza bien las caras, con algún fallo de orden.', 'Las seis caras tienen función clara y el orden funciona al plegar.']],
          ['IL 5.2.2', 'Composición', '5.2', 'Distribuye textos e imágenes con equilibrio, proporción y jerarquía visual.', ['Elementos colocados al azar.', 'Distribución poco pensada; jerarquía poco clara.', 'Composición correcta con algún desequilibrio.', 'Composición equilibrada y jerarquía clara en todas las caras.']],
          ['IL 5.2.3', 'Selección de la información', '5.2', 'Selecciona de la investigación la información y las fotografías necesarias.', ['No selecciona información ni imágenes.', 'Selección escasa o poco relacionada.', 'Selección adecuada.', 'Selección precisa y bien pensada.']],
          ['IL 8.3.1', 'Entrega ordenada', '8.3', 'Carpeta EPVA › Unidad 1 con los tres archivos bien nombrados y enlace accesible.', ['Faltan varios archivos o el enlace no da acceso.', 'Falta un archivo o la estructura no es la pedida.', 'Correcta, con algún archivo mal nombrado.', 'Carpeta correcta, archivos bien nombrados y enlace que funciona.']],
          ['IL 8.3.2', 'Proceso visible', '8.3', 'La propuesta deja ver el proceso: caras identificadas y anotaciones.', ['No se aprecia el proceso.', 'Pocas anotaciones.', 'Caras identificadas, anotaciones incompletas.', 'Las seis caras identificadas y anotadas con claridad.']],
          ['IL 8.3.3', 'Del boceto al final', '8.3', 'Del boceto al tríptico final, corrige errores y mejora las soluciones.', ['No hay evolución.', 'Pocas mejoras.', 'Mejora en la mayoría de los aspectos.', 'Mejora claramente la propuesta y corrige sus errores.']]]],
        ['Actividad 3. Tríptico final', [
          ['IL 8.2.1', 'Pensado para el público', '8.2', 'Mensaje claro, atractivo y comprensible para quien quiere viajar.', ['No tiene en cuenta al público.', 'Textos largos o difíciles.', 'Mensaje claro, poco atractivo en alguna cara.', 'Claro y atractivo en todas las caras.']],
          ['IL 8.2.2', 'Color, tipografía e imagen', '8.2', 'Paleta definida, dos tipografías como máximo y buen contraste.', ['Sin criterio.', 'Demasiadas tipografías o colores; contraste pobre.', 'Correcto, con alguna incoherencia.', 'Coherente, expresivo y legible.']],
          ['IL 8.2.3', 'Jerarquía y orden de lectura', '8.2', 'Lo importante destaca y el tríptico funciona al plegarse.', ['No funciona plegado.', 'Jerarquía poco clara o caras mal colocadas.', 'Correcto, con algún fallo de orden.', 'Jerarquía clara y orden correcto en las seis caras.']],
          ['IL 1.2.1', 'Información rigurosa', '1.2', 'Difunde las obras con textos propios basados en la investigación.', ['Información incorrecta o copiada.', 'Información escasa o copiada en parte.', 'Correcta, con algún texto poco elaborado.', 'Textos propios, rigurosos y sintéticos.']],
          ['IL 1.2.2', 'Conservación y visita responsable', '1.2', 'Incluye cómo se protegen y conservan las obras y consejos de visita responsable.', ['No lo incluye.', 'Lo menciona muy brevemente.', 'Incluye la protección, sin consejos de visita.', 'Incluye protección, conservación y visita responsable.']],
          ['IL 1.2.3', 'Fuentes', '1.2', 'Cita las fuentes de textos e imágenes.', ['No cita fuentes.', 'Cita pocas.', 'Cita la mayoría.', 'Cita todas.']]]]
      ]
    }
  };

  NIVEL.crear({
    id: 'epva3-n1', ns: 'EPVA3N1', color: 'var(--fucsia)', ES,
    DIAS: [
      [['manifestacion', 'patrimonio', 'analizar', 'viaje'], [0]],
      [['lenguaje', 'elementos', 'composicion', 'triptico', 'proceso'], [1]],
      [['color', 'percepcion', 'tipografia', 'fuentes'], [2]]
    ],
    SABER: {
      manifestacion: ['EPV.3.A.1'], patrimonio: ['EPV.3.A.2'], analizar: ['EPV.3.A.1'], viaje: ['EPV.3.A.1', 'EPV.3.A.2'],
      lenguaje: ['EPV.3.B.1'], elementos: ['EPV.3.B.2'], composicion: ['EPV.3.B.5'], triptico: ['EPV.3.B.5'], proceso: ['EPV.3.C.1'],
      color: ['EPV.3.B.3'], percepcion: ['EPV.3.B.4'], tipografia: ['EPV.3.B.1'], fuentes: ['EPV.3.A.2']
    },
    VIDEOS: {
      viaje: [
        ['El megalitismo en 2 minutos', 'SMPYiSYrltw', '3 min', 'Con Mucho Arte'],
        ['La arquitectura romana en 3 minutos', 'zu7OMecZ3JE', '4 min', 'Con Mucho Arte'],
        ['El arte islámico en 3 minutos', 'VwDfRXuOl9k', '3 min', 'Con Mucho Arte'],
        ['El arte de al-Ándalus: de la Mezquita de Córdoba a la Alhambra', 'MX6_aixNwAw', '24 min', 'Belén Montilla'],
        ['El arte mudéjar en 2 minutos', 'tQRewuXDQbc', '3 min', 'Con Mucho Arte'],
        ['Velázquez no es para tanto', 'qBNNTZ_FqCQ', '8 min', 'Antonio García Villarán'],
        ['Maestro de maestros: el pintor Daniel Vázquez Díaz', '3YBho-Tm-cI', '16 min', 'Antonio García Villarán']
      ],
      composicion: [['Cómo aprender a componer un cuadro', 'SSgJMBhZQFc', '3 min', 'Antonio García Villarán']],
      color: [['Un ejercicio de pintura para aprender composición y color', 'hNJY4I3d0WM', '3 min', 'Antonio García Villarán']],
      percepcion: [['Teoría de la Gestalt: leyes de la percepción visual', 'DxL-Pw0lc_g', '5 min', 'Gisela Duarte']]
    },
    ACT_IL: [['IL 1.1.1', 'IL 1.1.2', 'IL 1.1.3', 'IL 6.1.1', 'IL 6.1.2', 'IL 6.1.3'], ['IL 5.2.1', 'IL 5.2.2', 'IL 5.2.3', 'IL 8.3.1', 'IL 8.3.2', 'IL 8.3.3'], ['IL 8.2.1', 'IL 8.2.2', 'IL 8.2.3', 'IL 1.2.1', 'IL 1.2.2', 'IL 1.2.3']],
    figs: { triptico: figTriptico }
  });
})();
