/* DT 4.º ESO · Nivel 01 · English */
window.DT4N1 = window.DT4N1 || {};
window.DT4N1.en = {
  ui: {
    indice: 'Contents', tocAria: 'Theory contents', manualLabel: 'In your TD handbook:', misionK: 'MISSION',
    videosT: 'Videos for practice', videosP: 'Each video opens on YouTube. Watch it with your compass in hand and repeat the construction in your TD handbook.',
    mediatrizY: ' and angle bisector', instr: 'Using technical drawing instruments', presentacionT: 'Class presentation', canva: 'Geometry in nature (Canva)'
  },
  espiral: (k, n, t) => k === 0
    ? 'The leftover rectangle (BEFC) is also golden. Draw square 2 inside it (at the top) and its quarter circle, which continues the spiral.'
    : `Another golden rectangle is left over: draw square ${n} (${['at the top', 'on the right', 'at the bottom', 'on the left'][t]}) and its quarter circle.`,
  capFormas: '<span class="tag t1">1st category</span> range of points, pencil of lines, pencil of planes · <span class="tag t2">2nd category</span> polygon, bundle of lines, bundle of planes · <span class="tag t3">3rd category</span> polyhedra, curved surfaces',
  t: {
    'Mediatriz de un segmento': 'Perpendicular bisector of a segment',
    'Dibuja el segmento AB.': 'Draw segment AB.',
    'Con centro en A y una abertura mayor que la mitad de AB, traza un arco por encima y otro por debajo.': 'With the compass point on A and an opening larger than half of AB, draw one arc above and one below.',
    'Con centro en B y la misma abertura, traza otros dos arcos. Se cortan en P y Q.': 'With the point on B and the same opening, draw two more arcs. They cross at P and Q.',
    'Une P y Q: esa recta es la mediatriz. Corta a AB en su punto medio M y forma 90º con él.': 'Join P and Q: that line is the perpendicular bisector. It cuts AB at its midpoint M at 90º.',
    'Bisectriz de un ángulo': 'Bisector of an angle',
    'Dibuja el ángulo con vértice V.': 'Draw the angle with vertex V.',
    'Con centro en V traza un arco que corte los dos lados en M y N.': 'With the point on V, draw an arc that cuts both sides at M and N.',
    'Con centro en M y en N y la misma abertura, traza dos arcos que se corten en P.': 'With the point on M and then on N, same opening, draw two arcs that cross at P.',
    'Une V con P: es la bisectriz. Divide el ángulo en dos ángulos iguales.': 'Join V and P: that is the bisector. It divides the angle into two equal angles.',
    'Dividir un segmento en partes iguales con el teorema de Thales': 'Dividing a segment into equal parts with Thales’s theorem',
    'Dibuja el segmento AB que quieres dividir (aquí, en 5 partes).': 'Draw the segment AB you want to divide (here, into 5 parts).',
    'Desde A traza una semirrecta auxiliar con cualquier inclinación.': 'From A, draw an auxiliary ray at any angle.',
    'Con el compás, lleva sobre ella 5 medidas iguales: 1, 2, 3, 4 y 5.': 'With the compass, mark 5 equal lengths on it: 1, 2, 3, 4 and 5.',
    'Une la última marca (5) con B.': 'Join the last mark (5) to B.',
    'Traza paralelas a esa recta por las demás marcas (con escuadra y cartabón). AB queda dividido en 5 partes iguales.': 'Draw parallels to that line through the other marks (with your set squares). AB is now divided into 5 equal parts.',
    'Tercera proporcional': 'Third proportional',
    'Partimos de dos segmentos dados, a y b.': 'We start from two given segments, a and b.',
    'Dibuja dos semirrectas que salgan del mismo punto O.': 'Draw two rays starting from the same point O.',
    'En la primera semirrecta lleva a y, a continuación, b.': 'On the first ray, mark a and then b straight after it.',
    'En la segunda semirrecta lleva b.': 'On the second ray, mark b.',
    'Une el final de a con el final de b.': 'Join the end of a to the end of b.',
    'Por el final de a + b traza una paralela a esa unión. El tramo nuevo de la segunda semirrecta es c, la tercera proporcional.': 'Through the end of a + b, draw a parallel to that line. The new piece on the second ray is c, the third proportional.',
    'Cuarta proporcional': 'Fourth proportional',
    'Partimos de tres segmentos dados, a, b y c.': 'We start from three given segments, a, b and c.',
    'En la primera semirrecta lleva a y, a continuación, c.': 'On the first ray, mark a and then c straight after it.',
    'Por el final de c traza una paralela a esa unión. El tramo nuevo de la segunda semirrecta es d, la cuarta proporcional.': 'Through the end of c, draw a parallel to that line. The new piece on the second ray is d, the fourth proportional.',
    'Media proporcional': 'Mean proportional',
    'Dibuja a y b seguidos sobre una recta. Llama P al punto donde se unen.': 'Draw a and b one after the other on a line. Call P the point where they meet.',
    'Traza la mediatriz del segmento total (a + b) para hallar su punto medio O.': 'Draw the perpendicular bisector of the whole segment (a + b) to find its midpoint O.',
    'Con centro en O, traza la semicircunferencia de diámetro a + b.': 'With centre O, draw the semicircle with diameter a + b.',
    'Levanta una perpendicular en P hasta la semicircunferencia. Ese segmento es c, la media proporcional.': 'Draw a perpendicular at P up to the semicircle. That segment is c, the mean proportional.',
    'Sección áurea de un segmento': 'Golden section of a segment',
    'Traza su mediatriz para hallar el punto medio M.': 'Draw its perpendicular bisector to find the midpoint M.',
    'Levanta una perpendicular en B y lleva sobre ella la mitad de AB, es decir, (a + b)/2. Obtienes C.': 'Draw a perpendicular at B and mark on it half of AB, that is, (a + b)/2. You get C.',
    'Une A con C.': 'Join A and C.',
    'Con centro en C y radio CB, traza un arco que corte a AC en D.': 'With centre C and radius CB, draw an arc that cuts AC at D.',
    'Con centro en A y radio AD, traza un arco que corte a AB en E. AE = b es la sección áurea de AB; el resto, EB, es a.': 'With centre A and radius AD, draw an arc that cuts AB at E. AE = b is the golden section of AB; the rest, EB, is a.',
    'b es la sección áurea del segmento a + b': 'b is the golden section of segment a + b',
    'Triángulo equilátero dado el lado': 'Equilateral triangle from its side',
    'Dibuja el lado AB.': 'Draw side AB.',
    'Con centro en A y radio AB, traza un arco.': 'With centre A and radius AB, draw an arc.',
    'Con centro en B y el mismo radio, traza otro arco. Donde se cortan está el vértice C.': 'With centre B and the same radius, draw another arc. Where they cross is vertex C.',
    'Une A, B y C.': 'Join A, B and C.',
    'Cuadrado dado el lado': 'Square from its side',
    'Dibuja el lado AB y prolóngalo un poco por el lado de B.': 'Draw side AB and extend it a little beyond B.',
    'Levanta una perpendicular en B con el compás: arco con centro en B, y dos arcos iguales desde los cortes.': 'Draw a perpendicular at B with the compass: an arc centred on B, then two equal arcs from the crossing points.',
    'Con centro en B y radio AB, marca el punto C sobre la perpendicular.': 'With centre B and radius AB, mark point C on the perpendicular.',
    'Con centro en A y en C y el mismo radio AB, traza dos arcos. Se cortan en el vértice D.': 'With centres A and C and the same radius AB, draw two arcs. They cross at vertex D.',
    'Une A, B, C y D.': 'Join A, B, C and D.',
    'Pentágono regular dado el lado': 'Regular pentagon from its side',
    'Dibuja el lado AB y prolóngalo por el lado de B.': 'Draw side AB and extend it beyond B.',
    'Traza la mediatriz de AB y marca su punto medio M.': 'Draw the perpendicular bisector of AB and mark its midpoint M.',
    'Levanta una perpendicular en B y lleva sobre ella la medida AB. Obtienes N.': 'Draw a perpendicular at B and mark the length AB on it. You get N.',
    'Con centro en M y radio MN, traza un arco hasta la prolongación de AB. Obtienes P: AP es la diagonal.': 'With centre M and radius MN, draw an arc down to the extension of AB. You get P: AP is the diagonal.',
    'diagonal = lado × 1,618': 'diagonal = side × 1.618',
    'Con centro en A y radio AP, corta la mediatriz: ahí está el vértice D.': 'With centre A and radius AP, cut the perpendicular bisector: that is vertex D.',
    'Con centro en A (radio AP) y en B (radio AB), dos arcos dan el vértice C.': 'With centre A (radius AP) and centre B (radius AB), two arcs give vertex C.',
    'Con centro en B (radio AP) y en A (radio AB), dos arcos dan el vértice E.': 'With centre B (radius AP) and centre A (radius AB), two arcs give vertex E.',
    'Une A, B, C, D y E.': 'Join A, B, C, D and E.',
    'Hexágono regular dado el radio': 'Regular hexagon from its radius',
    'Traza la circunferencia con el radio dado y un diámetro vertical. Sus extremos son los vértices 1 y 4.': 'Draw the circle with the given radius and a vertical diameter. Its ends are vertices 1 and 4.',
    'Con centro en 1 y el mismo radio, traza un arco: corta la circunferencia en los vértices 2 y 6.': 'With centre 1 and the same radius, draw an arc: it cuts the circle at vertices 2 and 6.',
    'Con centro en 4 y el mismo radio, haz lo mismo: obtienes los vértices 3 y 5.': 'With centre 4 and the same radius, do the same: you get vertices 3 and 5.',
    'Une los seis puntos en orden. El lado mide lo mismo que el radio.': 'Join the six points in order. The side is the same length as the radius.',
    'Espiral áurea': 'Golden spiral',
    'Dibuja el segmento AB y construye sobre él el cuadrado ABCD.': 'Draw segment AB and build the square ABCD on it.',
    'Traza la mediatriz de AB y marca su punto medio O.': 'Draw the perpendicular bisector of AB and mark its midpoint O.',
    'Con centro en O y radio OC, traza un arco hasta la prolongación de AB. Obtienes E.': 'With centre O and radius OC, draw an arc down to the extension of AB. You get E.',
    'Completa el rectángulo AEFD: es un rectángulo áureo (su lado largo es el corto × 1,618).': 'Complete rectangle AEFD: it is a golden rectangle (its long side is the short side × 1.618).',
    'Empieza la espiral en el cuadrado 1: con centro en B y radio BA, traza un cuarto de circunferencia de A a C.': 'Start the spiral in square 1: with centre B and radius BA, draw a quarter circle from A to C.',
    'Panal hexagonal y cuadrados de Fibonacci con su espiral': 'Hexagonal honeycomb and Fibonacci squares with their spiral',
    'Izquierda: un panal se organiza con hexágonos. Derecha: cuadrados de lado 1, 1, 2, 3, 5 y 8 (Fibonacci) y la espiral que forman.': 'Left: a honeycomb is built from hexagons. Right: squares with sides 1, 1, 2, 3, 5 and 8 (Fibonacci) and the spiral they form.',
    'Circunferencia': 'Circle',
    'Esfera (en el espacio)': 'Sphere (in space)',
    'Elipse: r₁ + r₂ = constante': 'Ellipse: r₁ + r₂ = constant',
    'Circunferencia, esfera y elipse como lugares geométricos': 'Circle, sphere and ellipse as loci',
    'Punto A: cruce de r y s': 'Point A: where r and s cross',
    'Recta r': 'Line r',
    'Semirrecta': 'Ray',
    'Segmento AB': 'Segment AB',
    'Punto, recta, semirrecta y segmento': 'Point, line, ray and segment',
    'Tres puntos': 'Three points',
    'no alineados': 'not in a line',
    'Dos rectas': 'Two lines',
    'que se cortan': 'that intersect',
    'paralelas': 'that are parallel',
    'Una recta y': 'A line and',
    'un punto exterior': 'a point outside it',
    'Cuatro formas de definir un plano': 'Four ways to define a plane',
    'Paralelas': 'Parallel',
    'Secantes': 'Intersecting',
    'Perpendiculares (4 × 90º)': 'Perpendicular (4 × 90º)',
    'Rectas paralelas, secantes y perpendiculares': 'Parallel, intersecting and perpendicular lines',
    'Rectas paralelas': 'Parallel lines',
    'punto impropio': 'point at infinity',
    'recta impropia': 'line at infinity',
    'Planos paralelos': 'Parallel planes',
    '↑ plano impropio: contiene todos los elementos impropios': '↑ plane at infinity: it contains all elements at infinity',
    'Elementos impropios: punto, recta y plano impropio': 'Elements at infinity: point, line and plane at infinity',
    'punto de fuga': 'vanishing point',
    'En un dibujo en perspectiva, el punto impropio se convierte en el punto de fuga': 'In a perspective drawing, the point at infinity becomes the vanishing point',
    'Vías del tren en perspectiva': 'Railway tracks in perspective',
    'Serie rectilínea|de puntos': 'Range|of points',
    'Haz de rectas|del mismo plano': 'Pencil of lines|in one plane',
    'Haz de planos': 'Pencil of planes',
    'Polígono': 'Polygon',
    'Radiación de rectas': 'Bundle of lines',
    'Radiación de planos': 'Bundle of planes',
    'Poliedros': 'Polyhedra',
    'Superficies curvas': 'Curved surfaces',
    'Ejemplos de formas geométricas': 'Examples of geometric forms',
    'Teorema de Thales': 'Thales’s theorem',
    'Las rectas paralelas cortan r y r′ en segmentos proporcionales: AB / A′B′ = BC / B′C′': 'The parallel lines cut r and r′ into proportional segments: AB / A′B′ = BC / B′C′'
  },
  mision: {
    titulo: 'Design the golden carton',
    reto: 'Nature is full of geometry: hexagons in the honeycomb, the spiral of the sunflower and of the nautilus shell, pentagons in the starfish and in many flowers. Your mission is to create a <b>design for a carton-style package (like a Tetra Brik)</b> based on <b>geometry in nature</b>.',
    fasesT: 'How to play',
    fases: [
      ['Observe', 'Choose a natural form with clear geometry: a honeycomb, a sunflower, a snail shell, a flower, a snowflake, a starfish…'],
      ['Build the geometry', 'In your TD handbook, use a ruler and compass to draw the geometry found in that form: polygons, a golden spiral… The geometry always comes first.'],
      ['Draw the natural form', 'On top of that geometry, develop the natural form you chose freehand.'],
      ['Finish the design', 'Finish the design in your TD handbook neatly and precisely, leaving the construction lines and arcs visible.'],
      ['Show it on a carton', 'Use an artificial intelligence tool to see your design printed on a carton. Your teacher will tell you which tool to use. Do not upload photos of yourself or any personal data: only your design.']
    ],
    entregasT: 'What you must hand in',
    entregas: [
      'The <b>design</b> for the carton, made in your TD handbook.',
      'Your <b>TD handbook</b> with all the notes from the unit, taken freehand and explained.',
      'The <b>polygon construction activities</b>: equilateral triangle, square, pentagon, hexagon and golden spiral.',
      'An <b>exam</b> on all the content of the level.'
    ],
    pista: '<b>Tip:</b> the <b>Theory</b> tab has every construction step by step, with its video.'
  },
  sec: {
    instrumentos: ['Technical drawing instruments', h => `
      <p>Before you start drawing, practise with your tools: <b>ruler</b>, <b>set squares</b> (45º and 30º/60º), <b>compass</b> and <b>pencil</b>. Knowing how to place and move them properly is the key to precise constructions.</p>
      ${h.video('https://www.youtube.com/watch?v=bOYgYUfm_8s', 'Practise using technical drawing instruments')}
      ${h.manual('repeat the exercises in the video until you can handle the instruments with ease.')}`],
        geometria: ['What is geometry?', h => `
      <p>The word <i>geometry</i> means “measuring the earth”. Traditionally it was a set of experiences and rules for surveying (measuring land). The Greek mathematician <b>Euclid</b> organised them and turned them into a logical structure.</p>
      <p class="def">Today <b>geometry</b> is the part of mathematics and drawing that studies and represents the forms of the plane and of space: what they are like, what properties they have, how they relate to each other and how they change.</p>
      <p>It has three main branches:</p>
      <ul class="cards3">
        <li><b>Plane</b><span>Studies two-dimensional (2D) forms, the ones that lie on a plane.</span></li>
        <li><b>Descriptive</b><span>Represents three-dimensional (3D) objects on a plane.</span></li>
        <li><b>Analytic</b><span>Studies forms with numbers and coordinates.</span></li>
      </ul>
      <p>In this level we work with <b>plane geometry</b>. Its basic elements are the point, the line and the plane; by combining them we get plane forms: polygonal lines, circles, polygons, conic curves, technical curves…</p>`],
    naturaleza: ['Geometry in nature', h => `
      <p>Look at a honeycomb and a snowflake: both are organised with <b>hexagons</b>. Nature “uses” geometry because it works well.</p>
      ${h.figNaturaleza()}
      <h3>The Fibonacci sequence</h3>
      <p>It is a series of numbers in which each number is the sum of the two before it:</p>
      <p class="formula">0 · 1 · 1 · 2 · 3 · 5 · 8 · 13 · 21 · 34 …</p>
      <p>These numbers often appear in plants: there are flowers with 3 petals, with 5, and daisies with 21 or 34. Careful: it is a <b>frequent pattern</b>, not a universal law.</p>
      <h3>The golden number</h3>
      <p>If you divide each number in the sequence by the one before it, the result gets closer and closer to 1.618… That is the <b>golden number</b>, φ (the Greek letter <i>phi</i>). It is the proportion we find in the spiral of sunflower seeds and in the nautilus shell, and the one we will use to design our carton.</p>
      <p class="formula">φ = 1.618…</p>`],
    lugar: ['Locus', h => `
      <p class="def">A <b>locus</b> (plural <i>loci</i>) is the set of all the points that meet one or more conditions.</p>
      <ul>
        <li>It can be two-dimensional (in the plane) or three-dimensional (in space).</li>
        <li>It is <b>simple</b> if it meets only one condition (for example, the circle).</li>
        <li>It is <b>complex</b> if it meets several conditions at once (for example, the ellipse).</li>
      </ul>
      ${h.figLugar()}
      <ul>
        <li><b>Circle:</b> the points of the plane that are the same distance (the radius, <i>r</i>) from a fixed point called the centre (<i>O</i>).</li>
        <li><b>Sphere:</b> the same, but in space.</li>
        <li><b>Ellipse:</b> the points whose distances to two fixed points (the foci) always add up to the same amount. It is a complex locus.</li>
      </ul>
      ${h.jugada('mediatriz', 'The <b>perpendicular bisector</b> divides a segment into two equal parts. It is also defined as the locus of the points that are equidistant (the same distance) from the ends of the segment. It is perpendicular to the segment and goes through its midpoint.')}
      ${h.jugada('bisectriz', 'The <b>angle bisector</b> divides an angle into two equal parts. It is also defined as the locus of the points that are equidistant from the sides of the angle.')}`],
    elementos: ['Basic geometric elements', h => `
      <p>The basic elements of geometry, also called <b>species</b>, are the <b>point</b>, the <b>line</b> and the <b>plane</b>. By combining them we build all the other forms.</p>
      ${h.figElementos()}
      <ul>
        <li><b>Point:</b> the smallest element of geometry. It is defined as the intersection (the crossing) of two lines. It is named with a capital letter (A, B, C…) and marked with a small cross or circle.</li>
        <li><b>Line:</b> an infinite series of points in the same direction. It has no beginning and no end. It is named with a small letter (r, s, t…).</li>
        <li><b>Ray (half-line):</b> a part of a line limited by one point (the origin). It is infinite in one direction only.</li>
        <li><b>Segment:</b> a part of a line limited by two points, called ends. Unlike a line, it can be measured. It is named by its ends (AB) or with a small letter (<i>a</i>).</li>
        <li><b>Plane:</b> a two-dimensional surface. It is named with a capital letter (P, Q…) and is determined by any of these four things:</li>
      </ul>
      ${h.figPlanos()}
      <h3>Position of two lines in the same plane</h3>
      ${h.figPosiciones()}
      <ul>
        <li><b>Parallel:</b> they never meet within a finite space; they stay the same distance apart along their whole length.</li>
        <li><b>Intersecting:</b> they cross at one point.</li>
        <li><b>Perpendicular:</b> intersecting lines that form four right angles (90º).</li>
      </ul>`],
    impropios: ['Elements at infinity', h => `
      <p class="def">Elements <b>at infinity</b> (also called <i>ideal</i> or <i>improper</i> elements) are the ones located at infinity.</p>
      ${h.figImpropios()}
      <ul>
        <li><b>Point at infinity:</b> the element shared by a set of parallel lines. Parallel lines do not meet within a finite space: we say they “meet” at infinity, at their point at infinity.</li>
        <li><b>Line at infinity:</b> the element shared by a set of parallel planes.</li>
        <li><b>Plane at infinity:</b> the only plane that contains all the elements at infinity. Any element that is not in it is a proper element.</li>
      </ul>
      ${h.figVias()}
      <p class="tip"><b>What is it for?</b> Think of railway tracks disappearing into the horizon. The tracks are parallel, but they seem to meet at a point. That point (the vanishing point) is the image of the point at infinity, and we will use it in level 5, when we draw in perspective.</p>`],
    formas: ['Geometric forms', h => `
      <p class="def"><b>Geometric forms</b> are the ones made from the basic geometric elements (point, line and plane). Depending on how many species they combine, they are classified into three categories.</p>
      ${h.figFormas()}
      <ul>
        <li><b>1st category</b> (elements of one species only): <b>range of points</b> (points on a line), <b>pencil of lines in one plane</b> (lines of a plane through one point) and <b>pencil of planes</b> (planes through the same line).</li>
        <li><b>2nd category</b> (elements of two species): <b>polygon</b>, <b>bundle of lines</b> (lines in space through one point) and <b>bundle of planes</b> (planes through the same point).</li>
        <li><b>3rd category</b> (elements of three species): <b>polyhedra</b> (the cube, the pyramid…) and <b>curved surfaces</b> (the cylinder, the cone…).</li>
      </ul>`],
    proporcionalidad: ['Proportional segments', h => `
      <p class="def">Two pairs of segments are <b>proportional</b> when the ratio (the division) between the segments of each pair is the same.</p>
      <h3>Thales’s theorem</h3>
      <p>If two lines in the same plane are cut by a set of parallel lines, the segments formed on each of them are proportional to each other.</p>
      <p class="formula">AB / A′B′ = BC / B′C′ = CD / C′D′ = constant</p>
      <p>Thanks to Thales’s theorem we can divide a segment into equal parts or into proportional parts.</p>
      ${h.figThales()}
      ${h.jugada('thales', 'Its most useful application: <b>dividing a segment into equal parts</b> without measuring.', '<p class="tip"><b>Proportional parts:</b> you do the same, but in step 3 you mark the given segments (m, n…) instead of equal lengths.</p>')}
      ${h.jugada('tercera', 'Given two segments <i>a</i> and <i>b</i>, the third proportional is the segment <i>c</i> such that:<span class="formula">a / b = b / c</span>')}
      ${h.jugada('cuarta', 'Given three segments <i>a</i>, <i>b</i> and <i>c</i>, the fourth proportional is the segment <i>d</i> such that:<span class="formula">a / b = c / d</span>')}
      ${h.jugada('media', 'Given two segments <i>a</i> and <i>b</i>, the mean proportional is a third segment <i>c</i> such that:<span class="formula">a · b = c²</span>')}
      ${h.jugada('aurea', 'Given a segment <i>a + b</i>, its <b>golden section</b> is the segment <i>b</i> (the larger part) such that:<span class="formula">a / b = b / (a + b)</span>The smaller part, <i>a</i>, is the <b>mean ratio</b>. The relation between the parts is the golden number: b ÷ a = (a + b) ÷ b = φ ≈ 1.618.')}
      ${h.manual('draw each construction leaving all the construction lines and arcs visible. Without them, the exercise does not count.')}`],
    poligonos: ['Polygons and the golden spiral', h => `
      <p class="def">A <b>polygon</b> is a closed plane figure made of segments (its sides). It is <b>regular</b> when all its sides and all its angles are equal.</p>
      ${h.jugada('triangulo', 'A triangle is <b>equilateral</b> when its three sides are equal.')}
      ${h.jugada('cuadrado')}
      ${h.jugada('pentagono', 'Look at step 4: the diagonal of the pentagon is the side multiplied by φ. The golden number appears here too!')}
      ${h.jugada('hexagono', 'In a regular hexagon, the side is the same length as the radius of the circle it is inscribed in. Also, hexagons fit together without leaving gaps, as in the honeycomb.')}
      ${h.jugada('espiral', 'The spiral we see in the sunflower and the nautilus is built from the golden rectangle.', '<p class="tip">What we draw this way is an <b>approximation</b> of the golden spiral, made with circle arcs.</p>')}
      ${h.manual('construct the triangle, the square, the pentagon, the hexagon and the golden spiral. They are the geometric base of your carton.')}`]
  }
};
window.DT4N1.en.act = {
  intro: 'You do everything in your <b>TD handbook</b> and hand it in through <b>one single Classroom assignment</b>. Sizes and format of the constructions are up to you.',
  acts: [
    ['Research and design your carton', 'Design', 'Look for natural forms with clear geometry and note them down with a sketch. Choose one and use it to create the design for your carton: <b>first the geometry</b> (with ruler and compass) and <b>then the natural form freehand</b> on top of it. Finish it in your handbook neatly, with the construction lines visible.'],
    ['Notes in your TD handbook', 'Handbook', 'Take <b>freehand</b> notes on all the theory: what geometry is, geometry in nature, locus, basic elements and elements at infinity, geometric forms, the basic constructions (perpendicular bisector, angle bisector, parallels and perpendiculars) and proportionality (Thales, third, fourth and mean proportional, golden section). Explain each concept in your own words and add its sketch.'],
    ['Constructions in your TD handbook', 'Handbook', 'Use your instruments to construct the <b>equilateral triangle</b> and the <b>square</b> from the side, the <b>pentagon</b> from the side, the <b>hexagon</b> from the radius and the <b>golden rectangle and spiral</b>. Next to each one, <b>describe its steps</b>. Leave the construction lines and arcs visible.'],
    ['Present your design with AI', 'Presentation', 'Use the artificial intelligence tool your teacher tells you to see your design on a carton. Upload only your design: no photos of yourself and no personal data.'],
    ['Exam', 'Exam', 'Written test on all the content of the Theory tab, including the constructions. Bring a ruler, set squares and a compass.']
  ],
  cotejoT: 'Checklist: how are you doing?',
  cotejoP: 'Tick what you have already done. Your ticks are saved only on this device. When your teacher asks, <b>take a screenshot of this list and upload it to the Classroom assignment</b> so you can get feedback.',
  grupos: [
    ['Carton design', ['I have researched natural forms and noted them with sketches.', 'I have constructed the geometry with ruler and compass.', 'I have drawn the natural form freehand on top of the geometry.', 'I have finished the design neatly with construction lines visible.', 'I have seen my design on a carton using AI.']],
    ['Handbook notes (freehand, explained, with sketches)', ['What is geometry?', 'Geometry in nature (Fibonacci and the golden number)', 'Locus: circle, sphere, ellipse, perpendicular bisector and angle bisector', 'Basic elements: point, line, ray, segment and plane', 'Parallel, intersecting and perpendicular lines', 'Elements at infinity', 'Geometric forms (three categories)', 'Proportionality: Thales, third, fourth and mean proportional', 'Golden section']],
    ['Constructions (with their steps described)', ['Equilateral triangle from its side', 'Square from its side', 'Regular pentagon from its side', 'Regular hexagon from its radius', 'Golden rectangle and golden spiral']],
    ['Hand-in and exam', ['I have uploaded everything to the Classroom assignment.', 'I have revised the constructions in the Theory tab for the exam.']]
  ],
  progreso: (n, t) => `${n} of ${t} done`, borrar: 'Clear my ticks', confirmar: 'Sure? Press again to clear.'
};
window.DT4N1.en.rub = {
  intro: 'This is how this level is assessed. Each indicator is scored from 0 to 10. Each criterion’s mark is the average of its indicators, and the level mark is the average of the four criteria.',
  criteriosT: 'Assessment criteria',
  criterios: [['1.1', 'Recognise different types of geometric structures, forms and relationships in nature, the environment, art and design.'], ['2.1', 'Analyse the internal geometry of two-dimensional forms through freehand sketches and drafts.'], ['2.2', 'Draw polygonal and curved geometric forms, solve basic tangencies and geometric transformations.'], ['2.3', 'Present work neatly and precisely, both freehand and in geometric construction.']],
  niveles: ['Insufficient (0–4)', 'Pass (5)', 'Good (6)', 'Very good (7–8)', 'Excellent (9–10)'],
  criterio: 'Criterion',
  bloques: [
    ['Block 1. Golden carton design', [
      ['IL 1.1', 'Geometry in nature', '1.1', 'Researches natural forms, recognises their geometry (polygons, spiral, golden ratio) and explains which natural element the geometry of the design comes from.', ['Does not identify any geometry or does not relate it to nature.', 'Identifies a geometric form but does not explain its origin.', 'Identifies the geometry and names the natural element.', 'Explains the link between natural form and geometry with technical vocabulary.', 'Relates several structures (polygon, spiral, ratio) and justifies it precisely.']],
      ['IL 1.2', 'From geometry to form', '2.1', 'First constructs the geometry and then develops the chosen natural form freehand on it, analysing its internal geometry.', ['Draws the form with no geometric base.', 'There is geometry, but the form does not rest on it.', 'The form rests on the geometry in the essentials.', 'The freehand drawing fits the geometric structure throughout.', 'Clearly analyses the internal geometry; the process is visible (sketches, variants).']],
      ['IL 1.3', 'Design construction', '2.2', 'Draws the polygons and curves of the design with instruments and precision.', ['Incorrect constructions or no instruments.', 'Constructions with major errors.', 'Correct constructions with small errors.', 'Correct and precise constructions.', 'Precise constructions smoothly integrated into the design.']],
      ['IL 1.4', 'Design presentation', '2.3', 'Presents the design in the TD handbook neatly and precisely, with construction lines visible.', ['Messy, imprecise or no construction lines.', 'Presentable, with smudges or construction lines partly erased.', 'Neat, with construction lines visible.', 'Neat, precise and with a hierarchy of lines (thin and thick).', 'Flawless finish, ready to present.']]]],
    ['Block 2. TD handbook (notes)', [
      ['IL 2.1', 'Concepts described', '1.1', 'Describes in their own words the geometric elements, forms and relationships of the unit (including basic constructions and proportionality).', ['Many sections missing or copied without understanding.', 'Sections present, with incomplete descriptions.', 'All sections, with correct descriptions.', 'Clear descriptions with technical vocabulary and examples.', 'Adds their own examples from the environment and nature and links concepts.']],
      ['IL 2.2', 'Freehand sketches', '2.1', 'Adds a freehand sketch showing the geometry to each concept and construction.', ['No drawings or very few.', 'Several concepts without a drawing.', 'Each concept has its sketch.', 'Clear, well-proportioned sketches that explain the concept.', 'Labelled sketches that analyse the internal geometry.']],
      ['IL 2.3', 'Handbook order and presentation', '2.3', 'Presents the notes in order, legible and neat, with careful freehand lines.', ['Disorganised or illegible.', 'Legible but disorganised.', 'Organised and legible.', 'Organised, neat and labelled, with careful lines.', 'An exemplary reference handbook: contents, titles and page numbers.']]]],
    ['Block 3. Constructions in the handbook', [
      ['IL 3.1', 'Triangle and square', '2.2', 'Constructs the equilateral triangle and the square from the side and describes their steps.', ['Does not construct them or uses a wrong method.', 'Only one correct, or steps not described.', 'Both, with minor errors and steps described.', 'Both correct, precise and with steps well described.', 'Precise, with labelled vertices and steps described with technical vocabulary.']],
      ['IL 3.2', 'Pentagon and hexagon', '2.2', 'Constructs the pentagon from the side and the hexagon from the radius and describes their steps.', ['Does not construct them or uses a wrong method.', 'Only one correct, or steps not described.', 'Both, with minor errors and steps described.', 'Both correct, precise and with steps well described.', 'Precise, with labelled vertices and steps described with technical vocabulary.']],
      ['IL 3.3', 'Golden rectangle and spiral', '2.2', 'Constructs the golden rectangle and the golden spiral and describes their steps.', ['Does not construct the golden rectangle.', 'Correct rectangle; spiral incomplete or freehand.', 'Rectangle and spiral with 3 squares; steps described.', 'At least 5 squares and well-joined arcs; steps well described.', 'Continuous, precise spiral, numbered squares and steps with technical vocabulary.']],
      ['IL 3.4', 'Precision and construction lines', '2.3', 'Draws the constructions precisely and leaves construction lines and arcs visible.', ['No construction lines or messy lines.', 'Incomplete construction lines.', 'Construction lines visible and clean lines.', 'Also, a good hierarchy of lines.', 'Flawless constructions.']]]],
    ['Block 4. Exam', [
      ['IL 4.1', 'Geometry in nature', '1.1', 'Recognises geometry in nature: hexagon, Fibonacci sequence, golden number and spirals.', ['Does not recognise the forms.', 'Recognises some, without explaining.', 'Recognises and names most.', 'Explains the relationship with examples.', 'Explains and gives their own examples from art and design.']],
      ['IL 4.2', 'Geometric concepts', '1.1', 'Defines and recognises locus, basic elements and elements at infinity, and geometric forms.', ['Wrong or blank definitions.', 'Some correct.', 'Most correct.', 'All correct, with technical vocabulary.', 'All correct, with examples and sketches.']],
      ['IL 4.3', 'Constructions and proportionality', '2.2', 'Solves perpendicular bisector, angle bisector, parallels and perpendiculars, Thales, third, fourth and mean proportional and golden section.', ['Solves less than half.', 'Solves half.', 'Most correct.', 'All correct.', 'All correct and precise.']],
      ['IL 4.4', 'Polygons and golden spiral', '2.2', 'Constructs the regular polygons of the unit and the golden spiral.', ['Less than half.', 'Half.', 'Most correct.', 'All correct.', 'All correct and precise.']],
      ['IL 4.5', 'Exam presentation', '2.3', 'Presents the test neatly and precisely, with construction lines visible.', ['No construction lines or messy.', 'Incomplete construction lines.', 'Construction lines visible.', 'Neat and precise.', 'Flawless.']]]]
  ]
};
