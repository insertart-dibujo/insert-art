/* DT 4.º ESO · Nivel 01 · Français */
window.DT4N1 = window.DT4N1 || {};
window.DT4N1.fr = {
  ui: {
    indice: 'Sommaire', tocAria: 'Sommaire de la théorie', manualLabel: 'Dans ton manuel de DT :', misionK: 'MISSION',
    videosT: 'Vidéos pour t’entraîner', videosP: 'Chaque vidéo s’ouvre sur YouTube. Regarde-la le compas à la main et refais la construction dans ton manuel de DT.',
    mediatrizY: ' et bissectrice d’un angle', instr: 'Utilisation des instruments de dessin technique', presentacionT: 'Présentation du cours', canva: 'La géométrie dans la nature (Canva)'
  },
  espiral: (k, n, t) => k === 0
    ? 'Le rectangle qui reste (BEFC) est lui aussi un rectangle d’or. Trace dedans le carré 2 (en haut) et son quart de cercle, qui prolonge la spirale.'
    : `Il reste encore un rectangle d’or : trace le carré ${n} (${['en haut', 'à droite', 'en bas', 'à gauche'][t]}) et son quart de cercle.`,
  capFormas: '<span class="tag t1">1re catégorie</span> ponctuelle (série de points), faisceau de droites, faisceau de plans · <span class="tag t2">2e catégorie</span> polygone, gerbe de droites, gerbe de plans · <span class="tag t3">3e catégorie</span> polyèdres, surfaces courbes',
  t: {
    'Mediatriz de un segmento': 'Médiatrice d’un segment',
    'Dibuja el segmento AB.': 'Trace le segment AB.',
    'Con centro en A y una abertura mayor que la mitad de AB, traza un arco por encima y otro por debajo.': 'Pointe du compas en A, avec une ouverture plus grande que la moitié de AB, trace un arc au-dessus et un autre en dessous.',
    'Con centro en B y la misma abertura, traza otros dos arcos. Se cortan en P y Q.': 'Pointe en B, même ouverture, trace deux autres arcs. Ils se coupent en P et Q.',
    'Une P y Q: esa recta es la mediatriz. Corta a AB en su punto medio M y forma 90º con él.': 'Relie P et Q : cette droite est la médiatrice. Elle coupe AB en son milieu M et forme un angle de 90º.',
    'Bisectriz de un ángulo': 'Bissectrice d’un angle',
    'Dibuja el ángulo con vértice V.': 'Trace l’angle de sommet V.',
    'Con centro en V traza un arco que corte los dos lados en M y N.': 'Pointe en V, trace un arc qui coupe les deux côtés en M et N.',
    'Con centro en M y en N y la misma abertura, traza dos arcos que se corten en P.': 'Pointe en M puis en N, même ouverture, trace deux arcs qui se coupent en P.',
    'Une V con P: es la bisectriz. Divide el ángulo en dos ángulos iguales.': 'Relie V et P : c’est la bissectrice. Elle partage l’angle en deux angles égaux.',
    'Dividir un segmento en partes iguales con el teorema de Thales': 'Partager un segment en parties égales avec le théorème de Thalès',
    'Dibuja el segmento AB que quieres dividir (aquí, en 5 partes).': 'Trace le segment AB à partager (ici, en 5 parties).',
    'Desde A traza una semirrecta auxiliar con cualquier inclinación.': 'Depuis A, trace une demi-droite auxiliaire avec n’importe quelle inclinaison.',
    'Con el compás, lleva sobre ella 5 medidas iguales: 1, 2, 3, 4 y 5.': 'Avec le compas, reporte dessus 5 longueurs égales : 1, 2, 3, 4 et 5.',
    'Une la última marca (5) con B.': 'Relie la dernière marque (5) à B.',
    'Traza paralelas a esa recta por las demás marcas (con escuadra y cartabón). AB queda dividido en 5 partes iguales.': 'Trace des parallèles à cette droite par les autres marques (avec les équerres). AB est partagé en 5 parties égales.',
    'Tercera proporcional': 'Troisième proportionnelle',
    'Partimos de dos segmentos dados, a y b.': 'On part de deux segments donnés, a et b.',
    'Dibuja dos semirrectas que salgan del mismo punto O.': 'Trace deux demi-droites partant du même point O.',
    'En la primera semirrecta lleva a y, a continuación, b.': 'Sur la première demi-droite, reporte a puis, à la suite, b.',
    'En la segunda semirrecta lleva b.': 'Sur la seconde demi-droite, reporte b.',
    'Une el final de a con el final de b.': 'Relie l’extrémité de a à l’extrémité de b.',
    'Por el final de a + b traza una paralela a esa unión. El tramo nuevo de la segunda semirrecta es c, la tercera proporcional.': 'Par l’extrémité de a + b, trace une parallèle à ce segment. Le nouveau morceau sur la seconde demi-droite est c, la troisième proportionnelle.',
    'Cuarta proporcional': 'Quatrième proportionnelle',
    'Partimos de tres segmentos dados, a, b y c.': 'On part de trois segments donnés, a, b et c.',
    'En la primera semirrecta lleva a y, a continuación, c.': 'Sur la première demi-droite, reporte a puis, à la suite, c.',
    'Por el final de c traza una paralela a esa unión. El tramo nuevo de la segunda semirrecta es d, la cuarta proporcional.': 'Par l’extrémité de c, trace une parallèle à ce segment. Le nouveau morceau sur la seconde demi-droite est d, la quatrième proportionnelle.',
    'Media proporcional': 'Moyenne proportionnelle',
    'Dibuja a y b seguidos sobre una recta. Llama P al punto donde se unen.': 'Trace a et b l’un à la suite de l’autre sur une droite. Appelle P le point où ils se rejoignent.',
    'Traza la mediatriz del segmento total (a + b) para hallar su punto medio O.': 'Trace la médiatrice du segment total (a + b) pour trouver son milieu O.',
    'Con centro en O, traza la semicircunferencia de diámetro a + b.': 'De centre O, trace le demi-cercle de diamètre a + b.',
    'Levanta una perpendicular en P hasta la semicircunferencia. Ese segmento es c, la media proporcional.': 'Élève une perpendiculaire en P jusqu’au demi-cercle. Ce segment est c, la moyenne proportionnelle.',
    'Sección áurea de un segmento': 'Section dorée d’un segment',
    'Traza su mediatriz para hallar el punto medio M.': 'Trace sa médiatrice pour trouver le milieu M.',
    'Levanta una perpendicular en B y lleva sobre ella la mitad de AB, es decir, (a + b)/2. Obtienes C.': 'Élève une perpendiculaire en B et reporte dessus la moitié de AB, c’est-à-dire (a + b)/2. Tu obtiens C.',
    'Une A con C.': 'Relie A et C.',
    'Con centro en C y radio CB, traza un arco que corte a AC en D.': 'De centre C et de rayon CB, trace un arc qui coupe AC en D.',
    'Con centro en A y radio AD, traza un arco que corte a AB en E. AE = b es la sección áurea de AB; el resto, EB, es a.': 'De centre A et de rayon AD, trace un arc qui coupe AB en E. AE = b est la section dorée de AB ; le reste, EB, est a.',
    'b es la sección áurea del segmento a + b': 'b est la section dorée du segment a + b',
    'Triángulo equilátero dado el lado': 'Triangle équilatéral à partir du côté',
    'Dibuja el lado AB.': 'Trace le côté AB.',
    'Con centro en A y radio AB, traza un arco.': 'De centre A et de rayon AB, trace un arc.',
    'Con centro en B y el mismo radio, traza otro arco. Donde se cortan está el vértice C.': 'De centre B et de même rayon, trace un autre arc. Le sommet C est à leur intersection.',
    'Une A, B y C.': 'Relie A, B et C.',
    'Cuadrado dado el lado': 'Carré à partir du côté',
    'Dibuja el lado AB y prolóngalo un poco por el lado de B.': 'Trace le côté AB et prolonge-le un peu du côté de B.',
    'Levanta una perpendicular en B con el compás: arco con centro en B, y dos arcos iguales desde los cortes.': 'Élève une perpendiculaire en B au compas : un arc de centre B, puis deux arcs égaux depuis les points d’intersection.',
    'Con centro en B y radio AB, marca el punto C sobre la perpendicular.': 'De centre B et de rayon AB, marque le point C sur la perpendiculaire.',
    'Con centro en A y en C y el mismo radio AB, traza dos arcos. Se cortan en el vértice D.': 'De centres A et C et de même rayon AB, trace deux arcs. Ils se coupent au sommet D.',
    'Une A, B, C y D.': 'Relie A, B, C et D.',
    'Pentágono regular dado el lado': 'Pentagone régulier à partir du côté',
    'Dibuja el lado AB y prolóngalo por el lado de B.': 'Trace le côté AB et prolonge-le du côté de B.',
    'Traza la mediatriz de AB y marca su punto medio M.': 'Trace la médiatrice de AB et marque son milieu M.',
    'Levanta una perpendicular en B y lleva sobre ella la medida AB. Obtienes N.': 'Élève une perpendiculaire en B et reporte dessus la longueur AB. Tu obtiens N.',
    'Con centro en M y radio MN, traza un arco hasta la prolongación de AB. Obtienes P: AP es la diagonal.': 'De centre M et de rayon MN, trace un arc jusqu’au prolongement de AB. Tu obtiens P : AP est la diagonale.',
    'diagonal = lado × 1,618': 'diagonale = côté × 1,618',
    'Con centro en A y radio AP, corta la mediatriz: ahí está el vértice D.': 'De centre A et de rayon AP, coupe la médiatrice : c’est le sommet D.',
    'Con centro en A (radio AP) y en B (radio AB), dos arcos dan el vértice C.': 'De centre A (rayon AP) et de centre B (rayon AB), deux arcs donnent le sommet C.',
    'Con centro en B (radio AP) y en A (radio AB), dos arcos dan el vértice E.': 'De centre B (rayon AP) et de centre A (rayon AB), deux arcs donnent le sommet E.',
    'Une A, B, C, D y E.': 'Relie A, B, C, D et E.',
    'Hexágono regular dado el radio': 'Hexagone régulier à partir du rayon',
    'Traza la circunferencia con el radio dado y un diámetro vertical. Sus extremos son los vértices 1 y 4.': 'Trace le cercle de rayon donné et un diamètre vertical. Ses extrémités sont les sommets 1 et 4.',
    'Con centro en 1 y el mismo radio, traza un arco: corta la circunferencia en los vértices 2 y 6.': 'De centre 1 et de même rayon, trace un arc : il coupe le cercle aux sommets 2 et 6.',
    'Con centro en 4 y el mismo radio, haz lo mismo: obtienes los vértices 3 y 5.': 'De centre 4 et de même rayon, fais la même chose : tu obtiens les sommets 3 et 5.',
    'Une los seis puntos en orden. El lado mide lo mismo que el radio.': 'Relie les six points dans l’ordre. Le côté mesure la même longueur que le rayon.',
    'Espiral áurea': 'Spirale d’or',
    'Dibuja el segmento AB y construye sobre él el cuadrado ABCD.': 'Trace le segment AB et construis dessus le carré ABCD.',
    'Traza la mediatriz de AB y marca su punto medio O.': 'Trace la médiatrice de AB et marque son milieu O.',
    'Con centro en O y radio OC, traza un arco hasta la prolongación de AB. Obtienes E.': 'De centre O et de rayon OC, trace un arc jusqu’au prolongement de AB. Tu obtiens E.',
    'Completa el rectángulo AEFD: es un rectángulo áureo (su lado largo es el corto × 1,618).': 'Complète le rectangle AEFD : c’est un rectangle d’or (son grand côté est le petit côté × 1,618).',
    'Empieza la espiral en el cuadrado 1: con centro en B y radio BA, traza un cuarto de circunferencia de A a C.': 'Commence la spirale dans le carré 1 : de centre B et de rayon BA, trace un quart de cercle de A à C.',
    'Panal hexagonal y cuadrados de Fibonacci con su espiral': 'Rayon de miel hexagonal et carrés de Fibonacci avec leur spirale',
    'Izquierda: un panal se organiza con hexágonos. Derecha: cuadrados de lado 1, 1, 2, 3, 5 y 8 (Fibonacci) y la espiral que forman.': 'À gauche : un rayon de miel est fait d’hexagones. À droite : des carrés de côté 1, 1, 2, 3, 5 et 8 (Fibonacci) et la spirale qu’ils forment.',
    'Circunferencia': 'Cercle',
    'Esfera (en el espacio)': 'Sphère (dans l’espace)',
    'Elipse: r₁ + r₂ = constante': 'Ellipse : r₁ + r₂ = constante',
    'Circunferencia, esfera y elipse como lugares geométricos': 'Cercle, sphère et ellipse comme lieux géométriques',
    'Punto A: cruce de r y s': 'Point A : intersection de r et s',
    'Recta r': 'Droite r',
    'Semirrecta': 'Demi-droite',
    'Segmento AB': 'Segment AB',
    'Punto, recta, semirrecta y segmento': 'Point, droite, demi-droite et segment',
    'Tres puntos': 'Trois points',
    'no alineados': 'non alignés',
    'Dos rectas': 'Deux droites',
    'que se cortan': 'sécantes',
    'paralelas': 'parallèles',
    'Una recta y': 'Une droite et',
    'un punto exterior': 'un point extérieur',
    'Cuatro formas de definir un plano': 'Quatre façons de définir un plan',
    'Paralelas': 'Parallèles',
    'Secantes': 'Sécantes',
    'Perpendiculares (4 × 90º)': 'Perpendiculaires (4 × 90º)',
    'Rectas paralelas, secantes y perpendiculares': 'Droites parallèles, sécantes et perpendiculaires',
    'Rectas paralelas': 'Droites parallèles',
    'punto impropio': 'point à l’infini',
    'recta impropia': 'droite à l’infini',
    'Planos paralelos': 'Plans parallèles',
    '↑ plano impropio: contiene todos los elementos impropios': '↑ plan à l’infini : il contient tous les éléments à l’infini',
    'Elementos impropios: punto, recta y plano impropio': 'Éléments à l’infini : point, droite et plan à l’infini',
    'punto de fuga': 'point de fuite',
    'En un dibujo en perspectiva, el punto impropio se convierte en el punto de fuga': 'Dans un dessin en perspective, le point à l’infini devient le point de fuite',
    'Vías del tren en perspectiva': 'Rails de train en perspective',
    'Serie rectilínea|de puntos': 'Ponctuelle|(série de points)',
    'Haz de rectas|del mismo plano': 'Faisceau de droites|d’un même plan',
    'Haz de planos': 'Faisceau de plans',
    'Polígono': 'Polygone',
    'Radiación de rectas': 'Gerbe de droites',
    'Radiación de planos': 'Gerbe de plans',
    'Poliedros': 'Polyèdres',
    'Superficies curvas': 'Surfaces courbes',
    'Ejemplos de formas geométricas': 'Exemples de formes géométriques',
    'Teorema de Thales': 'Théorème de Thalès',
    'Las rectas paralelas cortan r y r′ en segmentos proporcionales: AB / A′B′ = BC / B′C′': 'Les parallèles coupent r et r′ en segments proportionnels : AB / A′B′ = BC / B′C′'
  },
  mision: {
    titulo: 'Conçois l’emballage d’or',
    reto: 'La nature est pleine de géométrie : des hexagones dans les rayons de miel, la spirale du tournesol et de la coquille du nautile, des pentagones dans l’étoile de mer et dans beaucoup de fleurs. Ta mission est de créer le <b>motif d’un emballage de type brique (Tetra Brik)</b> en prenant comme référence la <b>géométrie de la nature</b>.',
    fasesT: 'Comment on joue',
    fases: [
      ['Observe', 'Choisis une forme de la nature avec une géométrie claire : un rayon de miel, un tournesol, une coquille d’escargot, une fleur, un flocon de neige, une étoile de mer…'],
      ['Construis la géométrie', 'Dans ton manuel de DT, trace à la règle et au compas la géométrie de cette forme : polygones, spirale d’or… La géométrie vient toujours en premier.'],
      ['Dessine la forme naturelle', 'Sur cette géométrie, développe à main levée la forme naturelle que tu as choisie.'],
      ['Termine le dessin', 'Termine le dessin dans ton manuel de DT avec soin et précision, en laissant visibles les traits et arcs de construction.'],
      ['Présente-le sur une brique', 'Passe ton dessin dans un outil d’intelligence artificielle pour le voir appliqué sur un emballage de type brique. Ton professeur te dira quel outil utiliser. N’envoie pas de photos de toi ni de données personnelles : seulement ton dessin.']
    ],
    entregasT: 'Ce que tu dois rendre',
    entregas: [
      'Le <b>dessin</b> pour la brique, fait dans ton manuel de DT.',
      'Ton <b>manuel de DT</b> avec toutes les notes de l’unité, prises à main levée et expliquées.',
      'Les <b>activités de construction de polygones</b> : triangle équilatéral, carré, pentagone, hexagone et spirale d’or.',
      'Un <b>examen</b> sur tout le contenu du niveau.'
    ],
    pista: '<b>Astuce :</b> dans l’onglet <b>Théorie</b>, tu as toutes les constructions étape par étape, avec leur vidéo.'
  },
  sec: {
    instrumentos: ['Instruments de dessin technique', h => `
      <p>Avant de commencer à tracer, entraîne-toi avec tes outils : <b>règle</b>, <b>équerre</b>, <b>équerre 30º/60º</b>, <b>compas</b> et <b>crayon</b>. Bien les placer et les déplacer est la base de constructions précises.</p>
      ${h.video('https://www.youtube.com/watch?v=bOYgYUfm_8s', 'Entraîne-toi à utiliser les instruments de dessin technique')}
      ${h.manual('refais les exercices de la vidéo jusqu’à manier les instruments avec aisance.')}`],
        geometria: ['Qu’est-ce que la géométrie ?', h => `
      <p>Le mot <i>géométrie</i> signifie « mesure de la terre ». Autrefois, c’était un ensemble d’expériences et de règles d’arpentage (mesurer des terrains). Le mathématicien grec <b>Euclide</b> les a organisées en une structure logique.</p>
      <p class="def">Aujourd’hui, la <b>géométrie</b> est la partie des mathématiques et du dessin qui étudie et représente les formes du plan et de l’espace : comment elles sont, quelles propriétés elles ont, comment elles sont liées entre elles et comment elles se transforment.</p>
      <p>Elle a trois grandes branches :</p>
      <ul class="cards3">
        <li><b>Plane</b><span>Étudie les formes à deux dimensions (2D), celles qui se trouvent dans le plan.</span></li>
        <li><b>Descriptive</b><span>Représente des objets à trois dimensions (3D) sur un plan.</span></li>
        <li><b>Analytique</b><span>Étudie les formes avec des nombres et des coordonnées.</span></li>
      </ul>
      <p>Dans ce niveau, nous travaillons la <b>géométrie plane</b>. Ses éléments de base sont le point, la droite et le plan ; en les combinant, on obtient les formes planes : lignes polygonales, cercles, polygones, coniques, courbes techniques…</p>`],
    naturaleza: ['La géométrie dans la nature', h => `
      <p>Regarde un rayon de miel et un flocon de neige : les deux sont organisés en <b>hexagones</b>. La nature « utilise » la géométrie parce qu’elle est efficace.</p>
      ${h.figNaturaleza()}
      <h3>La suite de Fibonacci</h3>
      <p>C’est une suite de nombres où chaque nombre est la somme des deux précédents :</p>
      <p class="formula">0 · 1 · 1 · 2 · 3 · 5 · 8 · 13 · 21 · 34 …</p>
      <p>Ces nombres apparaissent souvent dans les plantes : il y a des fleurs à 3 pétales, à 5, et des marguerites à 21 ou 34. Attention : c’est un <b>motif fréquent</b>, pas une loi universelle.</p>
      <h3>Le nombre d’or</h3>
      <p>Si tu divises chaque nombre de la suite par le précédent, le résultat se rapproche de plus en plus de 1,618… C’est le <b>nombre d’or</b>, φ (la lettre grecque <i>phi</i>). C’est la proportion que l’on trouve dans la spirale des graines du tournesol et dans la coquille du nautile, et celle que nous allons utiliser pour concevoir notre emballage.</p>
      <p class="formula">φ = 1,618…</p>`],
    lugar: ['Lieu géométrique', h => `
      <p class="def">Un <b>lieu géométrique</b> est l’ensemble de tous les points qui remplissent une ou plusieurs conditions.</p>
      <ul>
        <li>Il peut être à deux dimensions (dans le plan) ou à trois dimensions (dans l’espace).</li>
        <li>Il est <b>simple</b> s’il remplit une seule condition (par exemple, le cercle).</li>
        <li>Il est <b>complexe</b> s’il remplit plusieurs conditions à la fois (par exemple, l’ellipse).</li>
      </ul>
      ${h.figLugar()}
      <ul>
        <li><b>Cercle :</b> les points du plan situés à la même distance (le rayon, <i>r</i>) d’un point fixe appelé centre (<i>O</i>).</li>
        <li><b>Sphère :</b> la même chose, mais dans l’espace.</li>
        <li><b>Ellipse :</b> les points dont la somme des distances à deux points fixes (les foyers) est toujours la même. C’est un lieu géométrique complexe.</li>
      </ul>
      ${h.jugada('mediatriz', 'La <b>médiatrice</b> partage un segment en deux parties égales. On la définit aussi comme le lieu géométrique des points équidistants (à la même distance) des extrémités du segment. Elle est perpendiculaire au segment et passe par son milieu.')}
      ${h.jugada('bisectriz', 'La <b>bissectrice</b> partage un angle en deux parties égales. On la définit aussi comme le lieu géométrique des points équidistants des côtés de l’angle.')}`],
    elementos: ['Éléments géométriques de base', h => `
      <p>Les éléments de base de la géométrie, aussi appelés <b>espèces</b>, sont le <b>point</b>, la <b>droite</b> et le <b>plan</b>. En les combinant, on construit toutes les autres formes.</p>
      ${h.figElementos()}
      <ul>
        <li><b>Point :</b> le plus petit élément de la géométrie. On le définit comme l’intersection (le croisement) de deux droites. On le nomme avec une lettre majuscule (A, B, C…) et on le marque d’une petite croix ou d’un petit cercle.</li>
        <li><b>Droite :</b> une suite infinie de points dans la même direction. Elle n’a ni début ni fin. On la nomme avec une lettre minuscule (r, s, t…).</li>
        <li><b>Demi-droite :</b> une partie de droite limitée par un point (l’origine). Elle est infinie d’un seul côté.</li>
        <li><b>Segment :</b> une partie de droite limitée par deux points, appelés extrémités. Contrairement à la droite, on peut le mesurer. On le nomme par ses extrémités (AB) ou avec une lettre minuscule (<i>a</i>).</li>
        <li><b>Plan :</b> une surface à deux dimensions. On le nomme avec une lettre majuscule (P, Q…) et il est déterminé par l’une de ces quatre choses :</li>
      </ul>
      ${h.figPlanos()}
      <h3>Position de deux droites dans un même plan</h3>
      ${h.figPosiciones()}
      <ul>
        <li><b>Parallèles :</b> elles ne se coupent pas dans un espace fini ; elles restent à la même distance sur toute leur longueur.</li>
        <li><b>Sécantes :</b> elles se coupent en un point.</li>
        <li><b>Perpendiculaires :</b> sécantes qui forment quatre angles droits (90º).</li>
      </ul>`],
    impropios: ['Éléments à l’infini', h => `
      <p class="def">Les éléments <b>à l’infini</b> (ou éléments <i>impropres</i>) sont ceux qui se trouvent à l’infini.</p>
      ${h.figImpropios()}
      <ul>
        <li><b>Point à l’infini :</b> l’élément commun d’un faisceau de droites parallèles. Les parallèles ne se coupent pas dans un espace fini : on dit qu’elles « se coupent » à l’infini, en leur point à l’infini.</li>
        <li><b>Droite à l’infini :</b> l’élément commun d’un faisceau de plans parallèles.</li>
        <li><b>Plan à l’infini :</b> le seul plan qui contient tous les éléments à l’infini. Tout élément qui n’est pas dans ce plan est un élément propre.</li>
      </ul>
      ${h.figVias()}
      <p class="tip"><b>À quoi ça sert ?</b> Pense à des rails de train qui se perdent à l’horizon. Les rails sont parallèles, mais ils semblent se rejoindre en un point. Ce point (le point de fuite) est l’image du point à l’infini, et nous l’utiliserons au niveau 5, quand nous dessinerons en perspective.</p>`],
    formas: ['Formes géométriques', h => `
      <p class="def">Les <b>formes géométriques</b> sont celles qui sont formées par les éléments géométriques de base (point, droite et plan). Selon le nombre d’espèces qu’elles combinent, on les classe en trois catégories.</p>
      ${h.figFormas()}
      <ul>
        <li><b>1re catégorie</b> (éléments d’une seule espèce) : <b>ponctuelle</b> (points sur une droite), <b>faisceau de droites d’un même plan</b> (droites d’un plan qui passent par un point) et <b>faisceau de plans</b> (plans qui passent par une même droite).</li>
        <li><b>2e catégorie</b> (éléments de deux espèces) : <b>polygone</b>, <b>gerbe de droites</b> (droites de l’espace qui passent par un point) et <b>gerbe de plans</b> (plans qui passent par un même point).</li>
        <li><b>3e catégorie</b> (éléments de trois espèces) : <b>polyèdres</b> (le cube, la pyramide…) et <b>surfaces courbes</b> (le cylindre, le cône…).</li>
      </ul>`],
    proporcionalidad: ['Proportionnalité des segments', h => `
      <p class="def">Deux paires de segments sont <b>proportionnelles</b> quand le rapport (la division) entre les segments de chaque paire est le même.</p>
      <h3>Théorème de Thalès</h3>
      <p>Si deux droites d’un même plan sont coupées par un ensemble de droites parallèles, les segments formés sur chacune sont proportionnels entre eux.</p>
      <p class="formula">AB / A′B′ = BC / B′C′ = CD / C′D′ = constante</p>
      <p>Grâce au théorème de Thalès, on peut partager un segment en parties égales ou en parties proportionnelles.</p>
      ${h.figThales()}
      ${h.jugada('thales', 'L’application la plus utile : <b>partager un segment en parties égales</b> sans mesurer.', '<p class="tip"><b>Parties proportionnelles :</b> on fait pareil, mais à l’étape 3 on reporte les segments donnés (m, n…) au lieu de longueurs égales.</p>')}
      ${h.jugada('tercera', 'Étant donnés deux segments <i>a</i> et <i>b</i>, la troisième proportionnelle est le segment <i>c</i> tel que :<span class="formula">a / b = b / c</span>')}
      ${h.jugada('cuarta', 'Étant donnés trois segments <i>a</i>, <i>b</i> et <i>c</i>, la quatrième proportionnelle est le segment <i>d</i> tel que :<span class="formula">a / b = c / d</span>')}
      ${h.jugada('media', 'Étant donnés deux segments <i>a</i> et <i>b</i>, la moyenne proportionnelle est un troisième segment <i>c</i> tel que :<span class="formula">a · b = c²</span>')}
      ${h.jugada('aurea', 'Étant donné un segment <i>a + b</i>, sa <b>section dorée</b> est le segment <i>b</i> (la plus grande partie) tel que :<span class="formula">a / b = b / (a + b)</span>La plus petite partie, <i>a</i>, est la <b>moyenne raison</b>. Le rapport entre les parties est le nombre d’or : b ÷ a = (a + b) ÷ b = φ ≈ 1,618.')}
      ${h.manual('dessine chaque construction en laissant visibles tous les traits et arcs de construction. Sans eux, l’exercice ne compte pas.')}`],
    poligonos: ['Polygones et spirale d’or', h => `
      <p class="def">Un <b>polygone</b> est une figure plane fermée formée de segments (ses côtés). Il est <b>régulier</b> quand tous ses côtés et tous ses angles sont égaux.</p>
      ${h.jugada('triangulo', 'Un triangle est <b>équilatéral</b> quand ses trois côtés sont égaux.')}
      ${h.jugada('cuadrado')}
      ${h.jugada('pentagono', 'Regarde l’étape 4 : la diagonale du pentagone est le côté multiplié par φ. Le nombre d’or apparaît ici aussi !')}
      ${h.jugada('hexagono', 'Dans l’hexagone régulier, le côté mesure la même longueur que le rayon du cercle dans lequel il est inscrit. De plus, les hexagones s’emboîtent sans laisser de vide, comme dans le rayon de miel.')}
      ${h.jugada('espiral', 'La spirale du tournesol et du nautile se construit à partir du rectangle d’or.', '<p class="tip">Ce que l’on dessine ainsi est une <b>approximation</b> de la spirale d’or, faite avec des arcs de cercle.</p>')}
      ${h.manual('construis le triangle, le carré, le pentagone, l’hexagone et la spirale d’or. C’est la base géométrique de ton emballage.')}`]
  }
};
window.DT4N1.fr.act = {
  intro: 'Tu fais tout dans ton <b>manuel de DT</b> et tu le rends dans <b>un seul devoir Classroom</b>. Les mesures et le format des constructions sont libres.',
  acts: [
    ['Cherche et conçois ton emballage', 'Dessin', 'Cherche des formes de la nature avec une géométrie claire et note-les avec un croquis. Choisis-en une et crée avec elle le motif de ta brique : <b>d’abord la géométrie</b> (règle et compas), <b>ensuite la forme naturelle à main levée</b> par-dessus. Termine-le dans ton manuel avec soin, traits de construction visibles.'],
    ['Notes dans ton manuel de DT', 'Manuel', 'Prends <b>à main levée</b> les notes de toute la théorie : qu’est-ce que la géométrie, la géométrie dans la nature, lieu géométrique, éléments de base et à l’infini, formes géométriques, tracés fondamentaux (médiatrice, bissectrice, parallèles et perpendiculaires) et proportionnalité (Thalès, troisième, quatrième et moyenne proportionnelle, section dorée). Explique chaque notion avec tes mots et ajoute son croquis.'],
    ['Constructions dans ton manuel de DT', 'Manuel', 'Construis aux instruments le <b>triangle équilatéral</b> et le <b>carré</b> à partir du côté, le <b>pentagone</b> à partir du côté, l’<b>hexagone</b> à partir du rayon et le <b>rectangle et la spirale d’or</b>. À côté de chacun, <b>décris les étapes</b>. Laisse visibles les traits et arcs de construction.'],
    ['Présente ton dessin avec l’IA', 'Présentation', 'Passe ton dessin dans l’outil d’intelligence artificielle indiqué par ton professeur pour le voir sur une brique. Envoie seulement ton dessin : pas de photos de toi ni de données personnelles.'],
    ['Examen', 'Examen', 'Épreuve écrite sur tout le contenu de l’onglet Théorie, constructions comprises. Apporte règle, équerres et compas.']
  ],
  cotejoT: 'Liste de contrôle : où en es-tu ?',
  cotejoP: 'Coche ce que tu as déjà fait. Tes coches sont enregistrées seulement sur cet appareil. Quand ton professeur te le demande, <b>fais une capture d’écran de cette liste et dépose-la dans le devoir Classroom</b> : il pourra te faire un retour.',
  grupos: [
    ['Dessin de l’emballage', ['J’ai cherché des formes de la nature et je les ai notées avec des croquis.', 'J’ai construit la géométrie à la règle et au compas.', 'J’ai dessiné à main levée la forme naturelle sur la géométrie.', 'J’ai terminé le dessin avec soin, traits de construction visibles.', 'J’ai vu mon dessin sur une brique avec l’IA.']],
    ['Notes du manuel (à main levée, expliquées, avec croquis)', ['Qu’est-ce que la géométrie ?', 'La géométrie dans la nature (Fibonacci et nombre d’or)', 'Lieu géométrique : cercle, sphère, ellipse, médiatrice et bissectrice', 'Éléments de base : point, droite, demi-droite, segment et plan', 'Droites parallèles, sécantes et perpendiculaires', 'Éléments à l’infini', 'Formes géométriques (trois catégories)', 'Proportionnalité : Thalès, troisième, quatrième et moyenne proportionnelle', 'Section dorée']],
    ['Constructions (avec leurs étapes décrites)', ['Triangle équilatéral à partir du côté', 'Carré à partir du côté', 'Pentagone régulier à partir du côté', 'Hexagone régulier à partir du rayon', 'Rectangle d’or et spirale d’or']],
    ['Rendu et examen', ['J’ai tout déposé dans le devoir Classroom.', 'J’ai révisé les constructions dans l’onglet Théorie pour l’examen.']]
  ],
  progreso: (n, t) => `${n} sur ${t}`, borrar: 'Effacer mes coches', confirmar: 'Sûr ? Appuie encore pour effacer.'
};
window.DT4N1.fr.rub = {
  intro: 'Voici comment ce niveau est évalué. Chaque indicateur est noté de 0 à 10. La note de chaque critère est la moyenne de ses indicateurs et la note du niveau est la moyenne des quatre critères.',
  criteriosT: 'Critères d’évaluation',
  criterios: [['1.1', 'Reconnaître différents types de structures, formes et relations géométriques dans la nature, l’environnement, l’art et le design.'], ['2.1', 'Analyser par des esquisses et des croquis à main levée la géométrie interne des formes à deux dimensions.'], ['2.2', 'Dessiner des formes géométriques polygonales et courbes, résoudre des tangences de base et des transformations géométriques.'], ['2.3', 'Présenter le travail avec soin et précision, à main levée comme dans le tracé géométrique.']],
  niveles: ['Insuffisant (0–4)', 'Passable (5)', 'Assez bien (6)', 'Bien (7–8)', 'Excellent (9–10)'],
  criterio: 'Critère',
  bloques: [
    ['Bloc 1. Dessin de l’emballage d’or', [
      ['IL 1.1', 'Géométrie de la nature', '1.1', 'Cherche des formes de la nature, reconnaît leur géométrie (polygones, spirale, proportion dorée) et explique de quel élément vient celle de son dessin.', ['N’identifie pas de géométrie ou ne la relie pas à la nature.', 'Identifie une forme géométrique, mais n’explique pas son origine.', 'Identifie la géométrie et nomme l’élément naturel.', 'Explique le lien forme naturelle–géométrie avec un vocabulaire technique.', 'Relie plusieurs structures (polygone, spirale, proportion) et le justifie avec précision.']],
      ['IL 1.2', 'De la géométrie à la forme', '2.1', 'Construit d’abord la géométrie puis, dessus, développe à main levée la forme naturelle choisie en analysant sa géométrie interne.', ['Dessine la forme sans base géométrique.', 'Il y a de la géométrie, mais la forme ne s’y appuie pas.', 'La forme s’appuie sur la géométrie pour l’essentiel.', 'Le dessin à main levée suit la structure géométrique dans tout le dessin.', 'Analyse clairement la géométrie interne ; on voit le processus (esquisses, variantes).']],
      ['IL 1.3', 'Tracé du dessin', '2.2', 'Trace aux instruments et avec précision les polygones et courbes du dessin.', ['Tracés incorrects ou sans instruments.', 'Tracés avec des erreurs importantes.', 'Tracés corrects, avec de petites erreurs.', 'Tracés corrects et précis.', 'Tracés précis et intégrés avec aisance au dessin.']],
      ['IL 1.4', 'Présentation du dessin', '2.3', 'Présente le dessin dans le manuel de DT avec soin, précision et traits de construction visibles.', ['Sale, imprécis ou sans traits de construction.', 'Présentable, avec des taches ou des traits en partie effacés.', 'Propre, traits de construction visibles.', 'Propre, précis, avec une hiérarchie des traits (fin et épais).', 'Finition impeccable, prête à présenter.']]]],
    ['Bloc 2. Manuel de DT (notes)', [
      ['IL 2.1', 'Notions décrites', '1.1', 'Décrit avec ses mots les éléments, formes et relations géométriques de l’unité (y compris tracés fondamentaux et proportionnalité).', ['Beaucoup de parties manquent ou copie sans comprendre.', 'Les parties sont là, descriptions incomplètes.', 'Toutes les parties, descriptions correctes.', 'Descriptions claires, avec vocabulaire technique et exemples.', 'Ajoute ses propres exemples de l’environnement et de la nature et relie les notions.']],
      ['IL 2.2', 'Croquis à main levée', '2.1', 'Accompagne chaque notion et chaque tracé d’un croquis à main levée qui montre sa géométrie.', ['Pas de dessins ou très peu.', 'Plusieurs notions sans dessin.', 'Chaque notion a son croquis.', 'Croquis clairs et proportionnés qui expliquent la notion.', 'Croquis légendés qui analysent la géométrie interne.']],
      ['IL 2.3', 'Ordre et présentation du manuel', '2.3', 'Présente les notes ordonnées, lisibles et propres, avec un trait à main levée soigné.', ['Désordonné ou illisible.', 'Lisible, mais désordonné.', 'Ordonné et lisible.', 'Ordonné, propre et légendé, trait soigné.', 'Manuel de référence exemplaire : sommaire, titres et pages.']]]],
    ['Bloc 3. Constructions dans le manuel', [
      ['IL 3.1', 'Triangle et carré', '2.2', 'Construit le triangle équilatéral et le carré à partir du côté et décrit leurs étapes.', ['Ne les construit pas ou méthode incorrecte.', 'Un seul correct, ou étapes non décrites.', 'Les deux, petites erreurs, étapes décrites.', 'Les deux corrects, précis, étapes bien décrites.', 'Précis, sommets nommés, étapes décrites avec un vocabulaire technique.']],
      ['IL 3.2', 'Pentagone et hexagone', '2.2', 'Construit le pentagone à partir du côté et l’hexagone à partir du rayon et décrit leurs étapes.', ['Ne les construit pas ou méthode incorrecte.', 'Un seul correct, ou étapes non décrites.', 'Les deux, petites erreurs, étapes décrites.', 'Les deux corrects, précis, étapes bien décrites.', 'Précis, sommets nommés, étapes décrites avec un vocabulaire technique.']],
      ['IL 3.3', 'Rectangle et spirale d’or', '2.2', 'Construit le rectangle d’or et la spirale d’or et décrit leurs étapes.', ['Ne construit pas le rectangle d’or.', 'Rectangle correct ; spirale incomplète ou à main levée.', 'Rectangle et spirale avec 3 carrés ; étapes décrites.', 'Au moins 5 carrés et arcs bien raccordés ; étapes bien décrites.', 'Spirale continue et précise, carrés numérotés, étapes avec vocabulaire technique.']],
      ['IL 3.4', 'Précision et traits de construction', '2.3', 'Trace les constructions avec précision et laisse visibles les traits et arcs de construction.', ['Sans traits de construction ou traits sales.', 'Traits de construction incomplets.', 'Traits de construction visibles et trait propre.', 'En plus, bonne hiérarchie des traits.', 'Constructions impeccables.']]]],
    ['Bloc 4. Examen', [
      ['IL 4.1', 'Géométrie dans la nature', '1.1', 'Reconnaît la géométrie dans la nature : hexagone, suite de Fibonacci, nombre d’or et spirales.', ['Ne reconnaît pas les formes.', 'En reconnaît quelques-unes, sans expliquer.', 'Reconnaît et nomme la plupart.', 'Explique le lien avec des exemples.', 'Explique et donne ses propres exemples d’art et de design.']],
      ['IL 4.2', 'Notions géométriques', '1.1', 'Définit et reconnaît lieu géométrique, éléments de base et à l’infini, et formes géométriques.', ['Définitions fausses ou vides.', 'Quelques-unes correctes.', 'La plupart correctes.', 'Toutes correctes, vocabulaire technique.', 'Toutes correctes, avec exemples et croquis.']],
      ['IL 4.3', 'Tracés et proportionnalité', '2.2', 'Résout médiatrice, bissectrice, parallèles et perpendiculaires, Thalès, troisième, quatrième et moyenne proportionnelle et section dorée.', ['Résout moins de la moitié.', 'Résout la moitié.', 'La plupart corrects.', 'Tous corrects.', 'Tous corrects et précis.']],
      ['IL 4.4', 'Polygones et spirale d’or', '2.2', 'Construit les polygones réguliers de l’unité et la spirale d’or.', ['Moins de la moitié.', 'La moitié.', 'La plupart corrects.', 'Tous corrects.', 'Tous corrects et précis.']],
      ['IL 4.5', 'Présentation de l’examen', '2.3', 'Présente l’épreuve avec soin, précision et constructions visibles.', ['Sans traits de construction ou sale.', 'Traits de construction incomplets.', 'Traits de construction visibles.', 'Propre et précis.', 'Impeccable.']]]]
  ]
};
