/* INSERT ART · EPVA 1 · Niveau 01 · Bestiaire de cartes · FRANÇAIS */
(function () {
  window.EPVA1N1 = window.EPVA1N1 || {};
  window.EPVA1N1.fr = {
    t: {
      'Partes de una carta coleccionable': 'Parties d’une carte à collectionner', 'NOMBRE': 'NOM', 'Nombre': 'Nom', 'quién es': 'qui c’est',
      'Tipo': 'Type', 'su elemento': 'son élément', 'Ilustración': 'Illustration', 'cómo es': 'à quoi il ressemble',
      'Texto': 'Texte', 'qué sabe hacer': 'ce qu’il sait faire', 'Estadísticas': 'Statistiques', 'números del juego': 'chiffres du jeu',
      'Esquema de la página del cuaderno de artista': 'Schéma de la page du carnet d’artiste', 'Título': 'Titre', 'Bestiario de cartas': 'Bestiaire de cartes',
      'Nombre de la bestia': 'Nom de la bête', 'Jerarquía': 'Hiérarchie', 'visual y color': 'visuelle et couleur',
      'Reproducir': 'Reproduire', 'dibujo observado': 'dessin observé', 'Aislar': 'Isoler', 'lupas de detalle': 'loupes de détail',
      'LA BESTIA': 'LA BÊTE', 'diseño en el centro': 'dessin au centre', 'Cualidades': 'Qualités', 'y poderes': 'et pouvoirs',
      'Textura': 'Texture', 'táctil y visual · grafismos': 'tactile et visuelle · graphismes',
      'Lenguaje de las formas: círculo, cuadrado y triángulo': 'Langage des formes : cercle, carré et triangle', 'Amable': 'Gentil', 'Fuerte': 'Fort', 'Peligroso': 'Dangereux',
      'Museo del Prado · El jardín de las delicias': 'Musée du Prado · Le Jardin des délices',
      'Busca «El jardín de las delicias» y amplía los seres híbridos de El Bosco: asociar en estado puro.': 'Cherche « Le Jardin des délices » et zoome sur les êtres hybrides de Bosch : associer à l’état pur.',
      'Albertina (Viena) · Liebre joven de Durero': 'Albertina (Vienne) · Le Jeune Lièvre de Dürer',
      'El museo que guarda la liebre que Durero reprodujo pelo a pelo en 1502.': 'Le musée qui conserve le lièvre que Dürer a reproduit poil par poil en 1502.',
      'Busca Arcimboldo, Georgia O\'Keeffe, Franz Marc o Van Gogh y amplía sus obras.': 'Cherche Arcimboldo, Georgia O’Keeffe, Franz Marc ou Van Gogh et zoome sur leurs œuvres.',
      'Adobe Color · círculo cromático': 'Adobe Color · cercle chromatique',
      'Prueba complementarios y gamas en una rueda de color interactiva, sin registrarte.': 'Essaie complémentaires et gammes sur une roue de couleurs interactive, sans inscription.'
    },
    ui: {
      indice: 'Sommaire', tocAria: 'Sommaire de la théorie', cuadernoLabel: 'Dans ton carnet d’artiste :', misionK: 'MISSION',
      diasIntro: 'La théorie est répartie sur <b>cinq jours</b>. Chaque jour, elle est lue ou expliquée en classe en <b>15 minutes maximum</b> et te prépare à une activité. Les vidéos « Pour aller plus loin » sont pour la maison : elles ne comptent pas dans ces 15 minutes.',
      diaK: 'JOUR', minutos: '15 min', prepara: 'Te prépare à', actK: 'Activité',
      dias: ['Regarder avant de créer', 'Opérations plastiques', 'Forme et texture', 'La couleur', 'Composer la carte'],
      saberK: 'Savoir de base', verMas: 'Pour aller plus loin (à la maison)', abreYT: 'S’ouvre sur YouTube',
      subt: 'Les vidéos sont en espagnol. Sur YouTube, tu peux activer les sous-titres et les traduire automatiquement dans ta langue.',
      videosT: 'Vidéos de l’unité', videosP: 'Toutes les vidéos de la théorie, classées par jour. Elles s’ouvrent sur YouTube.',
      enlacesT: 'Pour regarder et apprendre',
      recIntro: '<b>Si tu le comprends et l’appliques, tu es en train de finir le jeu :</b> c’est le premier pas pour devenir <i>concept artist</i>. Matériel : carnet d’artiste, crayon graphite, gomme, crayons de couleur, feutres et carton pour la carte finale.'
    },
    sec: {
      carta: ['La carte : une image qui communique', h => `
        <p class="def">Le <b>langage visuel</b> communique sans mots. Une carte de jeu dit qui est le personnage, de quel type il est et ce qu’il sait faire <b>avant que tu lises le texte</b>.</p>
        ${h.fig('carta')}
        <ul class="cual cual5">
          <li><b>Nom</b><span>Dit qui est le personnage.</span></li>
          <li><b>Illustration</b><span>Montre à quoi il ressemble. C’est la partie la plus importante.</span></li>
          <li><b>Type ou élément</b><span>Sa classe : feu, eau, plante… On le reconnaît à la couleur.</span></li>
          <li><b>Texte</b><span>Explique ce qu’il sait faire : qualités et pouvoirs.</span></li>
          <li><b>Statistiques</b><span>Les chiffres du jeu.</span></li>
        </ul>
        <p class="tip"><b>Observe de vraies cartes</b> (Pokémon, Magic…) : que vois-tu en premier ? Pourquoi ?</p>`],
      jerarquia: ['La hiérarchie visuelle', h => `
        <p class="def">La <b>hiérarchie visuelle</b> est l’ordre dans lequel l’œil parcourt une image. On l’obtient en donnant plus de <b>poids visuel</b> à ce qui est le plus important.</p>
        <ol class="pasos3"><li><b>1. Illustration</b>Le plus grand et le plus frappant.</li><li><b>2. Nom</b>Il ressort sur les autres textes.</li><li><b>3. Couleur et texte</b>L’élément se reconnaît à la couleur ; le texte se lit en dernier.</li></ol>
        <ul class="cards3">
          <li><b>Taille</b><span>On regarde d’abord ce qui est le plus grand.</span></li>
          <li><b>Contraste</b><span>Ce qui se détache le plus du fond attire le regard.</span></li>
          <li><b>Couleur</b><span>Une couleur saturée ou chaude pèse plus. La couleur fonctionne comme un <strong>code</strong> : une carte rouge, c’est de la glace ou du feu ?</span></li>
        </ul>`],
      pagina: ['Ta page du carnet', h => `
        <p>L’activité 1 se fait sur <b>une seule page</b> du carnet d’artiste, recto verso. Suis ce schéma :</p>
        <div class="duo-b1">${h.fig('pagina')}
          <div><h3 class="sub">Recto</h3>
            <ul><li><b>En haut :</b> le titre de l’unité et, en dessous, le nom de ta bête.</li>
            <li><b>Au centre :</b> le dessin de ta bête, faite de parties de <b>trois animaux</b> différents.</li>
            <li><b>Côté gauche :</b> hiérarchie visuelle et code couleur, <b>reproduire</b> et <b>isoler</b>.</li>
            <li><b>Côté droit :</b> qualités et pouvoirs.</li>
            <li><b>En bas :</b> la texture (tactile et visuelle) avec tes graphismes.</li></ul>
            <h3 class="sub">Verso</h3>
            <ul><li><b>Transformer :</b> quels procédés tu as utilisés.</li><li><b>Associer :</b> comment et pourquoi tu as réuni les trois animaux.</li><li><b>La forme :</b> contour, silhouette et test de la silhouette.</li></ul>
          </div></div>
        <p class="ojo"><b>Chaque notion dans sa zone</b>, avec une courte explication écrite par toi et un dessin qui la montre.</p>`],
      reproducir: ['Reproduire et isoler', h => `
        <p>Créer, ce n’est pas « sortir une idée de nulle part ». Les artistes partent presque toujours de quelque chose qui existe et le modifient avec les <b>opérations plastiques</b>. Il y en a quatre, appliquées dans cet ordre.</p>
        <div class="lectura">
          <div><h3>1 · Reproduire</h3><p>Représenter quelque chose <b>tel qu’on l’observe</b> : forme, proportions, texture et couleur. Cela sert à bien connaître le modèle ; sans observation, les dessins deviennent schématiques (« le poisson en deux courbes »).</p>
            <ul><li>Regarde plus le modèle que la feuille.</li><li>Commence par la forme générale et termine par les détails.</li><li>Compare les tailles : la patte est-elle plus longue ou plus courte que le cou ?</li></ul>
            <p><b>Référence :</b> Albrecht Dürer, <i>Le Jeune Lièvre</i> (1502), étude minutieuse d’après nature.</p></div>
          <div><h3>2 · Isoler</h3><p><b>Choisir un fragment</b> et le séparer de l’ensemble, souvent en l’agrandissant, comme avec une loupe. Tu découvres des formes et des textures (un œil, une écaille, une griffe) qui peuvent devenir des traits de ta bête.</p>
            <ul><li>Une fenêtre en carton pour cadrer.</li><li>Effet loupe : dessine le détail agrandi.</li></ul>
            <p><b>Référence :</b> les fleurs agrandies de Georgia O’Keeffe et la photographie macro de la nature.</p></div>
        </div>
        ${h.cuaderno('sur le côté gauche, dessine d’après observation des parties de tes trois animaux (reproduire) et leurs détails agrandis dans des « loupes » (isoler).')}`],
      transformar: ['Transformer et associer', h => `
        <p class="def"><b>Transformer</b>, c’est modifier des traits du modèle (forme, taille, proportion, couleur, texture) <b>sans perdre complètement son identité</b>.</p>
        <ul class="cual cual3">
          <li><b>Exagérer</b><span>Des yeux énormes, une queue en spirale géante.</span></li>
          <li><b>Simplifier ou géométriser</b><span>Réduire le corps à des ovales et des triangles.</span></li>
          <li><b>Changer l’échelle</b><span>Un caméléon de la taille d’un immeuble.</span></li>
          <li><b>Déformer</b><span>Étirer le cou, courber le corps.</span></li>
          <li><b>Changer la matière ou la texture</b><span>Écailles de verre, peau de pierre.</span></li>
          <li><b>Anthropomorphiser</b><span>Lui donner des postures ou des gestes humains.</span></li>
        </ul>
        <p><b>Référence :</b> Pablo Picasso, <i>Le Taureau</i> (1945-1946) : l’animal se transforme pas à pas, de l’image réaliste à quelques lignes.</p>
        <p class="def"><b>Associer</b>, c’est combiner des éléments d’origines différentes pour créer une image nouvelle. C’est l’opération la plus inventive : elle crée des créatures hybrides à l’identité propre.</p>
        <ul class="cards3">
          <li><b>Arcimboldo</b><span><i>Vertumne</i> (1591) : un portrait fait de fruits, de légumes et de fleurs.</span></li>
          <li><b>Bosch</b><span><i>Le Jardin des délices</i> (musée du Prado) : des êtres mi-animal, mi-plante, mi-objet.</span></li>
          <li><b>Mythologie</b><span>Le griffon (aigle et lion), la sirène ou la chimère.</span></li>
        </ul>
        ${h.cuaderno('au verso, explique quels procédés de transformation tu as utilisés et pourquoi tu as réuni ces trois animaux.')}`],
      forma: ['La forme', h => `
        <p class="def">La <b>forme</b> est la configuration visuelle d’un objet : son contour et sa structure. Le <b>contour</b> est la ligne qui la délimite ; la <b>silhouette</b> est la forme remplie d’un seul ton, sans détails.</p>
        <p class="tip"><b>Test de la silhouette :</b> remplis ton croquis en noir. S’il reste reconnaissable et intéressant, le dessin fonctionne. S’il ressemble à une « tache », exagère des traits : oreilles, queue, cornes, nageoires.</p>
        ${h.fig('formas')}
        <ul class="cual cual3">
          <li><b>Cercle / courbe</b><span>Gentillesse, douceur, tendresse. Créatures sympathiques ou paisibles.</span></li>
          <li><b>Carré / rectangle</b><span>Stabilité, force, résistance. Créatures défensives, de terre.</span></li>
          <li><b>Triangle / angles aigus</b><span>Dynamisme, danger, agressivité. Créatures rapides ou menaçantes.</span></li>
        </ul>
        <p class="ojo"><b>« Je ne sais pas dessiner » ?</b> Construis la créature en additionnant des formes simples (un cercle pour la tête, un ovale pour le corps, des triangles pour les griffes), puis arrondis ou affûte le contour.</p>`],
      textura: ['La texture', h => `
        <p class="def">La <b>texture</b> est la qualité de la surface d’un objet. La texture <b>tactile</b> se perçoit au toucher (rugueuse, lisse…) ; la texture <b>visuelle</b> ne se perçoit qu’à la vue : c’est celle qu’on dessine sur le papier.</p>
        <ul class="cual cual5">
          <li><b>Pointillé</b><span>Peau granuleuse.</span></li>
          <li><b>Hachures parallèles</b><span>Surfaces lisses et ombres douces.</span></li>
          <li><b>Hachures croisées</b><span>Ombres plus sombres.</span></li>
          <li><b>Écailles</b><span>Motif répété : reptiles et poissons.</span></li>
          <li><b>Lignes ondulées</b><span>Pelage et eau.</span></li>
        </ul>
        <h3 class="sub">Frottage (Max Ernst, 1925)</h3>
        <ol class="pasos3"><li><b>Pose</b>Une feuille fine sur une surface en relief : écorce, feuille, grille, tissu.</li><li><b>Frotte</b>Avec un crayon tendre ou une craie grasse tenus à plat.</li><li><b>Utilise</b>Découpe la texture et utilise-la en collage ou comme fond du cadre.</li></ol>
        ${h.cuaderno('dans la bande du bas, explique la différence entre texture tactile et visuelle et montre au moins deux graphismes que tu utilises sur ta bête.')}`],
      colorQue: ['Qu’est-ce que la couleur ?', h => `
        <p class="def">La couleur est une <b>sensation</b>. La lumière arrive sur les objets : ils en absorbent une partie et en reflètent une autre. <b>La lumière reflétée est la couleur que nous voyons.</b></p>
        <ul class="cual cual3">
          <li><b>Teinte</b><span>La couleur elle-même, son nom : rouge, vert, bleu…</span></li>
          <li><b>Luminosité ou valeur</b><span>Son degré de clarté : bleu clair / bleu marine.</span></li>
          <li><b>Saturation</b><span>Son degré de pureté : rouge vif / rouge terne.</span></li>
        </ul>`],
      mezclas: ['Synthèse additive et synthèse soustractive', h => `
        <div class="lectura">
          <div><h3>Couleur lumière · synthèse additive</h3><p>Écrans, projecteurs. <b>Chaque lumière AJOUTE de la lumière.</b></p>
            <ul><li>Primaires : <b>rouge, vert et bleu</b> (RVB).</li><li>Rouge + vert = jaune · vert + bleu = cyan · rouge + bleu = magenta.</li><li>Les trois ensemble = <b>blanc</b>.</li></ul></div>
          <div><h3>Couleur pigment · synthèse soustractive</h3><p>Peintures, crayons, encres, imprimantes. <b>Chaque pigment RETIRE (absorbe) de la lumière.</b></p>
            <ul><li>Primaires : <b>cyan, magenta et jaune</b> (CMJ).</li><li>Magenta + jaune = rouge · cyan + jaune = vert · cyan + magenta = bleu-violet.</li><li>Les trois ensemble = <b>noir</b> (en pratique, un brun très foncé).</li></ul></div>
        </div>
        <p class="tip">Sur ta carte, tu travailles aux crayons : <b>synthèse soustractive</b>. Superpose deux couleurs en couches légères pour obtenir la troisième. Si la carte est numérisée, elle passe à la synthèse additive de l’écran.</p>
        <h3 class="sub">Joue et vérifie</h3>
        ${h.fig('juego')}`],
      circulo: ['Cercle chromatique et complémentaires', h => `
        <p class="def">Le <b>cercle chromatique</b> range les couleurs sur une roue : primaires, secondaires entre elles et tertiaires intermédiaires.</p>
        <ul class="cual cual3">
          <li><b>Primaires ●●●</b><span>Jaune, rouge et bleu. Ils ne viennent d’aucun mélange.</span></li>
          <li><b>Secondaires ●●</b><span>Orange, violet et vert. On les obtient en mélangeant deux primaires.</span></li>
          <li><b>Tertiaires ●</b><span>On les obtient en mélangeant un primaire avec le secondaire voisin.</span></li>
        </ul>
        ${h.fig('rueda')}
        <p>Les <b>complémentaires</b> sont les couleurs <b>opposées</b> sur le cercle. Ensemble, elles produisent le contraste maximal : chacune fait « vibrer » l’autre.</p>
        <ul class="cual cual3">
          <li><b>Rouge ↔ vert</b><span>Dans le modèle CMJ : cyan ↔ rouge.</span></li>
          <li><b>Bleu ↔ orange</b><span>Dans le modèle CMJ : magenta ↔ vert.</span></li>
          <li><b>Jaune ↔ violet</b><span>Dans le modèle CMJ : jaune ↔ bleu-violet.</span></li>
        </ul>
        <p class="tip"><b>Sur ta carte :</b> choisis une palette dominante et garde la complémentaire pour le <b>point d’attention</b> (yeux, gemme, arme, aura). C’est ainsi que tu guides le regard.</p>
        <p><b>Référence :</b> Vincent van Gogh, <i>Le Café de nuit</i> (1888) : il a opposé rouges et verts pour exprimer la tension.</p>`],
      gamas: ['Gammes, couleur expressive et palette de ton élément', h => `
        <ul class="cards3 c2">
          <li><b>Gamme chaude</b><span>Rouges, oranges, jaunes. Énergie, chaleur, proximité, agressivité.</span></li>
          <li><b>Gamme froide</b><span>Bleus, verts bleutés, violets. Calme, froid, distance, mystère.</span></li>
        </ul>
        <p class="def"><b>Couleur expressive :</b> la couleur n’a pas à être réaliste ; on la choisit pour ce qu’elle communique. Franz Marc a peint les <i>Chevaux bleus</i> (1911) pour exprimer leur caractère.</p>
        <h3 class="sub">La palette de ton élément : 3 couleurs de base + 1 complémentaire d’accent</h3>
        <ul class="cual">
          <li><b>Feu</b><span>Chaude : rouge, orange, jaune · accent bleu. Énergie, danger.</span></li>
          <li><b>Eau</b><span>Froide : bleus, cyan, turquoise · accent orange. Calme, profondeur.</span></li>
          <li><b>Plante</b><span>Froide-tempérée : verts, vert jaunâtre · accent rouge ou magenta. Croissance, vie.</span></li>
          <li><b>Terre</b><span>Chaude sourde : ocres, bruns, terre de Sienne · accent bleu-violet. Force, stabilité.</span></li>
          <li><b>Air</b><span>Froide très lumineuse : blancs, bleu ciel, gris clairs · accent jaune chaud. Légèreté, vitesse.</span></li>
          <li><b>Ombre</b><span>Froide sombre : violets, noirs, gris · accent jaune. Mystère, menace.</span></li>
        </ul>
        <p class="tip">Tu inventes ton propre élément ? D’accord, si tu justifies ta palette.</p>`],
      colorear: ['Colorie ta bête pas à pas', h => `
        <p><b>Avant de colorier, fais une carte des couleurs :</b> au crayon graphite, très légèrement, numérote les zones : 1 corps (couleur de base, la plus claire), 2 ombres (deuxième couleur), 3 détails (troisième couleur) et ★ point d’attention (complémentaire).</p>
        <ul class="cual cual5">
          <li><b>1 · Base claire</b><span>Colorie toute la zone avec la couleur la plus claire, en appuyant doucement.</span></li>
          <li><b>2 · Couches</b><span>Superpose la deuxième couleur dans les zones d’ombre.</span></li>
          <li><b>3 · Dégradé</b><span>Appuie de plus en plus : du clair au foncé sans saut.</span></li>
          <li><b>4 · Accent</b><span>À la fin, la complémentaire seulement sur une petite zone.</span></li>
          <li><b>5 · Lumières</b><span>Garde le blanc du papier pour les reflets.</span></li>
        </ul>
        <p class="ojo"><b>Test final :</b> devine-t-on l’élément de ta bête sans lire la carte ?</p>`],
      composicion: ['La composition de la carte', h => `
        <p class="def"><b>Composer</b>, c’est organiser les éléments dans le format pour que l’image soit claire, ordonnée et expressive. La carte est au format <b>vertical</b>.</p>
        <ul class="cards3">
          <li><b>Poids visuel</b><span>Pèse plus ce qui est grand, saturé ou chaud, contrasté avec le fond, isolé ou détaillé.</span></li>
          <li><b>Équilibre</b><span><strong>Symétrique</strong> : stable et solennel (créature de face). <strong>Asymétrique</strong> : dynamique (créature en diagonale, qui saute). <strong>Radial</strong> : autour d’un centre (auras, explosions).</span></li>
          <li><b>Proportion</b><span>L’illustration occupe environ la moitié de la carte. Le personnage remplit sa zone : il ne « flotte » pas et n’est pas « à l’étroit ».</span></li>
        </ul>
        <h3 class="sub">Le rythme dans le cadre</h3>
        <ul class="cual cual3">
          <li><b>Répétition</b><span>Le même motif à intervalles égaux : des écailles sur tout le cadre.</span></li>
          <li><b>Alternance</b><span>Deux motifs qui alternent : feuille–goutte–feuille–goutte.</span></li>
          <li><b>Progression</b><span>Le motif grandit ou diminue : des flammes de plus en plus grandes.</span></li>
        </ul>
        <p class="tip"><b>Format :</b> 10 × 14 cm, c’est presque la même proportion qu’une vraie carte (63 × 88 mm). Tes mesures peuvent varier un peu, mais garde la carte verticale et bien proportionnée. <b>Référence :</b> Ernst Haeckel, <i>Formes artistiques de la nature</i> (1904), avec des symétries axiales et radiales.</p>`],
      tecnicas: ['Techniques sèches et humides pour ta carte', h => `
        <p>La carte finale se fait avec <b>au moins deux techniques graphiques</b>. Choisis celles qui racontent le mieux ta bête.</p>
        <div class="lectura">
          <div><h3>Techniques sèches</h3><ul><li><b>Graphite</b> : mise en place, contours et graphismes.</li><li><b>Crayons de couleur</b> : couches, dégradés et synthèse soustractive.</li><li><b>Craies grasses</b> : couleur intense et frottage.</li></ul></div>
          <div><h3>Techniques humides</h3><ul><li><b>Feutre</b> : contours nets et aplats de couleur.</li><li><b>Encre</b> : trait noir et textures en pointillé.</li><li><b>Aquarelle ou gouache</b> : fonds et taches (sur carton épais).</li></ul></div>
        </div>
        <p class="tip"><b>Combine avec intention :</b> par exemple, le feutre pour le contour et le cadre, et les crayons de couleur pour le volume de la bête. Un frottage découpé peut servir de texture de fond.</p>`],
      presentar: ['Présente ta carte', h => `
        <p>À la fin, tu présenteras ta carte au groupe. Explique en une minute, avec le vocabulaire de l’unité :</p>
        <ul class="cards3">
          <li><b>Ma bête</b><span>Quels trois animaux tu as associés et comment tu les as transformés.</span></li>
          <li><b>Sa couleur</b><span>Son élément, sa gamme et où se trouve la complémentaire.</span></li>
          <li><b>Ma carte</b><span>Comment tu as organisé la hiérarchie visuelle et la composition.</span></li>
        </ul>
        <p class="ojo">Les cartes de tout le groupe forment <b>le jeu de la classe</b>. Ta créature pourra réapparaître dans d’autres unités.</p>`],
      arena: ['L’arène du bestiaire', h => `
        <p>Mets ta bête à l’épreuve : écris ses caractéristiques comme si tu remplissais sa carte et affronte la bête d’un camarade (ou l’ordinateur), tour par tour, comme dans un combat de cartes.</p>
        <ul class="cards3">
          <li><b>La forme compte</b><span>Cercle : plus de vie (gentil et résistant). Carré : plus de défense (fort). Triangle : plus d’attaque (dangereux).</span></li>
          <li><b>La couleur est un code</b><span>La bête se colorie toute seule avec la palette de son élément : 3 couleurs de base et les yeux dans la complémentaire, comme le point d’attention.</span></li>
          <li><b>Statistiques</b><span>Répartis 15 points entre attaque, défense et vitesse. Le plus rapide commence.</span></li>
        </ul>
        ${h.fig('arena')}
        <p class="tip"><b>Utilise les données de ta carte :</b> le même nom, élément, forme et pouvoir que tu as conçus. Si ta bête perd toujours, que changerais-tu dans son design ?</p>`]
    },
    mision: {
      titulo: 'Bestiaire de cartes',
      reto: 'Les jeux de cartes à collectionner cachent beaucoup de choix de design. Ton défi : créer une <b>carte originale</b> avec une créature née de <b>trois animaux</b> d’Andalousie, lui donner un <b>élément</b> qui se lit par la couleur et composer la carte avec toutes ses parties. Les cartes du groupe formeront <b>le jeu de la classe</b>.',
      fasesT: 'Comment jouer',
      fases: [
        ['Observe', 'Reproduis et isole des parties de trois animaux réels.'],
        ['Invente', 'Transforme et associe ces parties pour créer ta bête.'],
        ['Colorie', 'Choisis son élément et crée son code couleur.'],
        ['Compose et présente', 'Conçois la carte finale et présente-la au groupe.']
      ],
      entregasT: 'Ce que tu dois rendre',
      entregas: [
        'La <b>page du carnet d’artiste</b> « Bestiaire de cartes », recto verso.',
        'La <b>fiche de la couleur</b> découpée et collée sur la page qui suit ta bête.',
        'La <b>carte finale</b> sur carton, avec au moins deux techniques, et sa <b>présentation orale</b>.'
      ],
      pista: 'Sois attentif aux indications du professeur pour savoir comment organiser les pages du carnet.'
    },
    act: {
      intro: 'Trois activités évaluées. La note de chacune vient de la <b>grille de l’unité</b>. Chaque activité a aussi son outil de suivi (fiche de retour, échelle d’appréciation et cible) pour que tu saches où tu en es et que tu progresses avant la note finale.',
      acts: [
        ['Conçois ta bête', 'Pré-design dans le carnet', {
          cuaderno: true,
          obj: 'Concevoir une créature à partir de trois animaux et expliquer dans le carnet la hiérarchie visuelle, les opérations plastiques, la forme et la texture.',
          pasos: [
            'Choisis <b>trois animaux</b> d’Andalousie et cherche des images de référence.',
            ['<b>Recto</b> de la page, d’après le schéma du jour 1 :', ['en haut, le titre « Bestiaire de cartes » et, en dessous, le nom de ta bête ;', 'au centre, ta bête, faite de parties reconnaissables des trois animaux ;', 'côté gauche : hiérarchie visuelle et code couleur, reproduire (dessins observés) et isoler (loupes de détail) ;', 'côté droit : qualités et pouvoirs cohérents avec les animaux ;', 'en bas : texture tactile et visuelle avec au moins deux graphismes.']],
            ['<b>Verso</b> de la page :', ['transformer : quels procédés tu as utilisés (exagérer, géométriser, déformer…) ;', 'associer : comment et pourquoi tu as réuni les trois animaux ;', 'la forme : contour, silhouette et ton test de la silhouette.']],
            'Écris chaque explication avec tes mots, courte et claire, à côté d’un dessin qui la montre.'
          ],
          donde: 'Sur une page du carnet d’artiste, recto verso.',
          entrega: 'Le carnet, que le professeur vérifie en classe.'
        }, '<div class="fw" data-fw="fb"></div>'],
        ['Le code couleur de ta bête', 'Fiche de la couleur', {
          cuaderno: true,
          obj: 'Comprendre la synthèse additive et soustractive, les complémentaires et les gammes, et créer la palette de l’élément de ta bête.',
          pasos: [
            'Joue au <b>jeu des mélanges</b> du jour 4 pour vérifier que tu comprends la synthèse additive et la soustractive.',
            ['<b>Recto</b> de la fiche · je comprends la couleur :', ['A · mélanges de couleur additif et soustractif ;', 'B · cercle chromatique, complémentaires et gammes.']],
            ['<b>Verso</b> · j’applique la couleur :', ['C · la palette de mon élément (3 couleurs + 1 complémentaire) ;', 'D · ma bête en couleur : décalque-la et colorie-la en 5 étapes ;', 'E · je justifie ma couleur avec le vocabulaire de l’unité.']],
            'Découpe la fiche et <b>colle-la sur la page qui suit</b> ta bête.',
            'Ce que tu ne finis pas en classe, termine-le à la maison.'
          ],
          donde: 'Sur la fiche donnée par le professeur, collée dans le carnet d’artiste.',
          entrega: 'La fiche collée dans le carnet, que le professeur vérifie.'
        }, '<div class="fw" data-fw="escala"></div>'],
        ['La carte finale', 'Réunit tout ce qui précède', {
          cuaderno: false,
          obj: 'Composer la carte de ta bête avec équilibre, proportion et rythme, au moins deux techniques et une couleur qui communique son élément, et la présenter au groupe.',
          pasos: [
            'Découpe un <b>carton vertical</b> d’environ 10 × 14 cm (les mesures peuvent varier un peu).',
            'Répartis les zones : nom, type, illustration (environ la moitié de la carte), texte et statistiques.',
            'Dessine ta bête à partir du dessin du carnet, et <b>améliore-la</b>.',
            'Utilise <b>au moins deux techniques</b> (par exemple, feutre et crayons de couleur).',
            'Applique la palette de ton élément et la complémentaire au point d’attention.',
            'Décore le cadre avec un rythme (répétition, alternance ou progression).',
            'Présente ta carte au groupe en une minute, avec le vocabulaire de l’unité.'
          ],
          donde: 'Sur carton, en dehors du carnet.',
          entrega: 'La carte, au professeur. Les cartes du groupe forment le jeu de la classe.'
        }, '<div class="fw" data-fw="diana"></div>']
      ],
      cuadSi: '📒 Se fait dans le carnet d’artiste', cuadNo: 'Ne se fait pas dans le carnet d’artiste (sur carton)',
      cotejoT: 'Liste de contrôle : où en es-tu ?',
      cotejoP: 'Coche ce que tu as fait. Tes coches sont enregistrées uniquement sur cet appareil.',
      grupos: [
        ['Conçois ta bête', ['La page suit le schéma : titre, nom, bête au centre et chaque notion dans sa zone.', 'Ma bête a des parties reconnaissables de trois animaux.', 'J’ai expliqué reproduire, isoler, transformer et associer.', 'J’ai fait le test de la silhouette et deux graphismes de texture.']],
        ['Le code couleur', ['J’ai complété A et B (mélanges, cercle et gammes).', 'Ma palette a 3 couleurs + 1 complémentaire.', 'J’ai justifié ma couleur (E).']],
        ['La carte finale', ['Ma carte a toutes ses zones et une illustration principale.', 'J’ai utilisé au moins deux techniques.', 'Le cadre a un rythme.', 'J’ai préparé ma présentation orale.']]
      ],
      progreso: (n, t) => `${n} sur ${t}`, borrar: 'Effacer mes coches', confirmar: 'Sûr ? Appuie encore pour effacer.'
    },
    rub: {
      intro: 'Cette grille évalue tout le travail de l’unité : la page du carnet (recto et verso), le travail sur la couleur et la carte finale. <b>La note de chaque activité vient d’ici.</b> Chaque indicateur est noté de 1 à 10 et la note de chaque critère est la moyenne de ses indicateurs. La fiche de retour, l’échelle de la couleur et la cible servent pendant le travail pour t’orienter.',
      criteriosT: 'Critères d’évaluation',
      criterios: [
        ['2.3', 'Analyse, apprécie et réalise des compositions inspirées de la nature en introduisant des notions de composition de base et en expérimentant au moins deux techniques graphiques en deux dimensions.'],
        ['5.2', 'Acquérir et développer son imaginaire propre grâce à une pensée créative dont les messages passent par des moyens plastiques, visuels et audiovisuels, en commençant à intégrer des notions comme la raison, l’empathie ou la sensibilité.'],
        ['8.2', 'Reconnaître l’intention de communication de différents projets plastiques à partir des fonctions et des ressources du langage visuel et audiovisuel, et commencer à l’appliquer dans des projets individuels et collectifs.']
      ],
      niveles: ['Insuffisant (1–4)', 'Passable (5)', 'Assez bien (6)', 'Bien (7–8)', 'Très bien (9–10)'],
      criterio: 'Critère',
      bloques: [
        ['Bloc 1. Page du carnet d’artiste (activité 1)', [
          ['IL 3.1', 'Dessin de la bête', '2.3', 'Construit la bête avec des parties de trois animaux différents ; reproduit et isole (côté gauche) et l’applique au dessin.', ['Pas de dessin, ou on ne reconnaît pas les animaux d’origine. Reproduire et isoler manquent.', 'Dessin de base ; on reconnaît un animal. Reproduire ou isoler incomplets.', 'Bête avec des parties reconnaissables de trois animaux ; reproduit et isole correctement.', 'Bête bien réussie ; les détails isolés apparaissent clairement dans le dessin.', 'Bête très élaborée ; observation minutieuse et détails isolés intégrés avec justesse.']],
          ['IL 3.2', 'Mise en page et hiérarchie visuelle', '8.2', 'Organise la page selon le schéma, explique et applique la hiérarchie visuelle.', ['Ne suit pas le schéma ; la page est désordonnée.', 'Suit le schéma en partie ; la hiérarchie est peu claire et n’est pas expliquée.', 'Suit le schéma ; explique la hiérarchie visuelle et l’applique correctement.', 'Page claire ; la bête domine, titre et nom ressortent avec intention.', 'Page très efficace et créative ; la hiérarchie est expliquée et appliquée avec des moyens variés.']],
          ['IL 3.3', 'Forme, texture et code couleur', '8.2', 'Explique ces notions (recto et verso) et les applique à la bête.', ['N’explique pas les notions ou ne les applique pas.', 'En explique certaines très brièvement ; peu d’application.', 'Explique les trois notions et les applique correctement.', 'Explication claire avec un vocabulaire adapté ; la forme (silhouette), les textures et la couleur communiquent le caractère.', 'Explication complète et personnelle ; forme, texture et couleur très bien intégrées à la bête.']],
          ['IL 3.4', 'Transformer, associer, qualités et pouvoirs', '5.2', 'Explique comment il a transformé et associé les animaux et décrit des qualités et pouvoirs cohérents.', ['N’explique pas les opérations ; ni qualités ni pouvoirs.', 'Explication minimale ; qualités et pouvoirs peu liés à la bête.', 'Explique transformer et associer ; qualités et pouvoirs cohérents.', 'Explication claire des procédés utilisés ; personnage à l’identité propre.', 'Créature très originale ; explication raisonnée qui relie animaux, apparence et pouvoirs.']]]],
        ['Bloc 2. La couleur (activité 2)', [
          ['IL 3.5', 'Théorie de la couleur', '8.2', 'Distingue synthèse additive et soustractive, identifie les complémentaires et les gammes chaudes et froides.', ['Ne distingue pas les notions.', 'Les distingue avec des erreurs.', 'Les distingue et les explique correctement.', 'Les explique avec un vocabulaire spécifique et des exemples personnels.', 'Maîtrise complète ; relie les notions à sa propre carte.']],
          ['IL 3.6', 'Palette de l’élément', '8.2', 'Crée une palette cohérente avec l’élément et utilise la complémentaire comme point d’attention.', ['Palette sans rapport avec l’élément.', 'Palette en partie liée ; sans complémentaire.', 'Palette cohérente avec l’élément.', 'Palette cohérente avec un usage voulu de la complémentaire, et la justifie.', 'Palette très expressive et bien justifiée ; mélanges soignés.']]]],
        ['Bloc 3. La carte finale (activité 3)', [
          ['IL 3.7', 'Composition de la carte', '2.3', 'Organise la carte avec équilibre, proportion et rythme.', ['Zones désordonnées ou incomplètes.', 'Toutes les zones sont là, avec une répartition peu soignée.', 'Composition ordonnée et proportion adaptée entre les zones.', 'Équilibre voulu, bonne proportion et rythme dans le cadre.', 'Composition très élaborée ; équilibre, proportion et rythme justifiés.']],
          ['IL 3.8', 'Techniques et inspiration naturelle', '2.3', 'Réalise la carte avec au moins deux techniques graphiques à partir des animaux d’origine.', ['Une seule technique, ou on ne reconnaît pas l’origine naturelle.', 'Deux techniques avec une maîtrise de base.', 'Deux techniques utilisées proprement ; origine naturelle reconnaissable.', 'Maîtrise deux techniques et les combine avec intention.', 'Excellente maîtrise ; ajoute avec justesse une troisième technique ou texture.']],
          ['IL 3.9', 'Du carnet à la carte', '5.2', 'La carte finale développe et améliore la bête conçue dans le carnet.', ['La carte n’a pas de rapport avec le travail du carnet.', 'Lien faible ; la bête évolue à peine.', 'La carte part clairement du dessin du carnet.', 'La bête évolue et s’améliore par rapport au dessin initial.', 'Évolution très nette ; la carte reprend et dépasse tout le travail précédent.']],
          ['IL 3.10', 'Couleur et hiérarchie sur la carte', '8.2', 'La couleur communique l’élément et la hiérarchie visuelle ordonne la lecture de la carte.', ['Couleur sans rapport avec l’élément ; on ne distingue pas l’essentiel.', 'Couleur et hiérarchie peu claires.', 'Couleur cohérente et hiérarchie correcte.', 'Couleur expressive avec complémentaire ; hiérarchie renforcée par la taille ou le contraste.', 'La couleur communique l’élément sans lire ; hiérarchie très efficace.']],
          ['IL 3.11', 'Présentation orale', '8.2', 'Présente sa carte et explique son intention de communication avec un vocabulaire spécifique.', ['N’explique pas sa carte.', 'L’explique très brièvement, sans vocabulaire spécifique.', 'Utilise quelques termes spécifiques.', 'Justifie forme, couleur et composition avec un vocabulaire adapté.', 'Argumentation claire et complète ; relie intention et résultat.']]]]
      ]
    },
    form: {
      aviso: 'Évaluation formative : pas de note. Ton professeur t’indique en classe où tu en es et tu le coches ici pour voir tes progrès. C’est enregistré uniquement sur cet appareil.',
      borrar: 'Effacer', confirmar: 'Sûr ? Appuie encore.',
      fb: {
        titulo: 'Fiche de retour · activité 1',
        cols: ['Il l’explique', 'Il l’applique'],
        grupos: [
          ['Recto de la page', [
            ['IL 1.1', '8.2', 'Mise en page : titre en haut, nom en dessous, dessin au centre et chaque notion dans sa zone.', 'a'],
            ['IL 1.2', '2.3', 'Dessin de la bête avec des parties reconnaissables de trois animaux différents.', 'a'],
            ['IL 1.3', '8.2', 'Hiérarchie visuelle : la bête domine la page ; titre et nom ressortent sur les textes.', 'ea'],
            ['IL 1.5', '2.3', 'Reproduire (côté gauche) : dessin d’observation de parties des animaux.', 'ea'],
            ['IL 1.6', '2.3', 'Isoler (côté gauche) : détails agrandis (loupes) qui apparaissent sur la bête.', 'ea'],
            ['IL 1.7', '8.2', 'Texture (en bas) : différence tactile/visuelle et au moins deux graphismes appliqués.', 'ea'],
            ['IL 1.8', '5.2', 'Qualités et pouvoirs (côté droit) cohérents avec les animaux et l’apparence.', 'e']]],
          ['Verso de la page', [
            ['IL 1.9', '5.2', 'Transformer : explique l’opération et identifie les procédés utilisés.', 'ea'],
            ['IL 1.10', '5.2', 'Associer : explique comment et pourquoi il a combiné les parties.', 'ea'],
            ['IL 1.11', '8.2', 'La forme : contour, silhouette, langage des formes et test de la silhouette.', 'ea']]]
        ]
      },
      escala: {
        titulo: 'Échelle d’appréciation de la couleur · activité 2',
        niveles: ['Débutant', 'En cours', 'Acquis', 'Remarquable'],
        items: [
          ['IL 2.1', 'Distingue synthèse additive et soustractive et identifie leurs primaires et secondaires.'],
          ['IL 2.2', 'Obtient les secondaires par mélange soustractif avec le matériel de classe.'],
          ['IL 2.3', 'Identifie les paires de complémentaires sur le cercle chromatique.'],
          ['IL 2.4', 'Distingue gammes chaudes et froides et les associe à des sensations.'],
          ['IL 2.5', 'Crée une palette cohérente avec l’élément de sa créature.'],
          ['IL 2.6', 'Utilise la complémentaire comme point d’attention.'],
          ['IL 2.7', 'Justifie sa palette avec un vocabulaire spécifique.']
        ]
      },
      diana: {
        titulo: 'Cible de progrès · activité 3',
        intro: 'Chaque axe est un aspect de la carte. Touche l’anneau où tu te trouves : plus c’est vers l’extérieur, mieux c’est. Utilise la 1re révision à mi-parcours et la 2e à la fin, et compare les deux cibles.',
        niveles: ['Débutant', 'En cours', 'Acquis', 'Remarquable'],
        ejes: [['Composition', 'IL 3.7'], ['Techniques', 'IL 3.8'], ['Du carnet à la carte', 'IL 3.9'], ['Couleur et hiérarchie', 'IL 3.10'], ['Présentation orale', 'IL 3.11']],
        rondas: ['1re révision', '2e révision']
      }
    },
    arena: {
      titulo: 'L’arène du bestiaire', modos: ['2 joueurs', 'Contre l’ordinateur'],
      intro: 'Crée les deux bêtes et appuie sur « Au combat ! ». Rien n’est enregistré : en fermant la page, les bêtes disparaissent.',
      jugador: 'Joueur', maquina: 'ordinateur',
      campos: { nombre: 'Nom', elem: 'Élément', forma: 'Forme', poder: 'Nom de son pouvoir' },
      elementos: { fuego: 'Feu', agua: 'Eau', planta: 'Plante', tierra: 'Terre', aire: 'Air', sombra: 'Ombre' },
      formas: { circulo: 'Cercle (gentil)', cuadrado: 'Carré (fort)', triangulo: 'Triangle (dangereux)' },
      bonus: { circulo: 'Bonus de forme : +10 de vie.', cuadrado: 'Bonus de forme : +2 de défense.', triangulo: 'Bonus de forme : +2 d’attaque.' },
      stats: { atq: 'Attaque', def: 'Défense', vel: 'Vitesse' },
      puntos: n => n >= 0 ? `Points à répartir : ${n}` : `${-n} point${n === -1 ? '' : 's'} de trop`,
      ejemplo: [['Lynxardent', 'fuego', 'triangulo', 'Griffe brûlante'], ['Caméliane', 'planta', 'circulo', 'Langue liane']],
      ventajasT: 'Tableau des avantages entre éléments',
      razon: { fuego: 'le feu brûle la plante', planta: 'la plante boit l’eau', agua: 'l’eau éteint le feu', aire: 'le vent érode la terre', tierra: 'la terre ensevelit l’ombre', sombra: 'l’ombre avale l’air' },
      luchar: 'Au combat !', errorFicha: (j, p) => `Vérifie la bête du joueur ${j} : il faut un nom et un pouvoir, et ${p} points au maximum.`,
      empieza: n => `Le combat commence ! ${n} est plus rapide et attaque en premier.`,
      turnoDe: n => `Au tour de <b>${n}</b>. Choisis une action :`, piensa: n => `${n} réfléchit…`,
      ataqueDe: e => `Attaque ${({ Feu: 'de feu', Eau: 'd’eau', Plante: 'de plante', Terre: 'de terre', Air: 'd’air', Ombre: 'd’ombre' })[e] || e}`, usado: 'utilisée', defender: 'Se défendre',
      usa: (n, m, d) => `${n} utilise <b>${m}</b> : ${d} de dégâts.`, falla: n => `${n} lance son attaque spéciale… et rate !`,
      defiende: (n, c) => `${n} se protège${c ? ` et récupère ${c} de vie` : ''}.`,
      critico: 'Coup critique !', eficaz: r => `C’est super efficace ! (${r})`, poco: 'Ce n’est pas très efficace…',
      gana: n => `🏆 ${n} gagne le combat !`, revancha: 'Revanche', editar: 'Changer les bêtes'
    },
    rueda: {
      titulo: 'Le cercle chromatique', modos: ['Explorer', 'Défi'],
      filtros: { todos: 'Tous', prim: 'Primaires', sec: 'Secondaires', ter: 'Tertiaires' },
      tipos: { prim: 'Primaire', sec: 'Secondaire', ter: 'Tertiaire' },
      colores: ['jaune', 'jaune orangé', 'orange', 'rouge orangé', 'rouge', 'rouge violacé', 'violet', 'bleu violacé', 'bleu', 'bleu-vert', 'vert', 'jaune-vert'],
      toca: 'Touche une couleur du cercle pour voir quel type de couleur c’est, comment on l’obtient et quelle est sa complémentaire.',
      def: {
        prim: 'Les <b>primaires</b> ne s’obtiennent pas en mélangeant d’autres couleurs. En les mélangeant entre elles, on obtient toutes les autres.',
        sec: 'Les <b>secondaires</b> s’obtiennent en mélangeant deux primaires à parts égales.',
        ter: 'Les <b>tertiaires</b> s’obtiennent en mélangeant un primaire avec le secondaire voisin.'
      },
      noMezcla: 'Elle ne vient d’aucun mélange : c’est une primaire.',
      mezcla: (a, b) => `On l’obtient en mélangeant <b>${a}</b> + <b>${b}</b>.`,
      comp: c => `Sa <b>complémentaire</b> (l’opposée sur le cercle) est <b>${c}</b>.`,
      vibra: 'Ensemble, elles vibrent : c’est le contraste maximal. Voici le rendu sur ta carte, avec la complémentaire comme point d’attention :',
      compQ: c => `Touche la complémentaire de <b>${c}</b>.`,
      mezQ: (a, b) => `Touche la couleur obtenue en mélangeant <b>${a}</b> + <b>${b}</b>.`,
      tipoQ: t => `Touche une couleur <b>${t}</b>.`,
      bien: 'Correct !', mal: 'Ce n’est pas celle-là. Regarde le cercle et réessaie (seules les bonnes réponses du premier coup comptent).',
      puntos: (p, n) => `Bonnes réponses : ${p} sur ${n}`, fin: (p, n) => `Fin du défi : ${p} sur ${n}.`, otra: 'Rejouer'
    },
    juego: {
      titulo: 'Lumière ou pigment ?', modos: ['Lumière · additive', 'Pigment · soustractive'],
      libre: 'Expérimente', reto: 'Défi', primarios: 'Allume ou enlève des primaires :',
      nombres: { R: 'rouge', G: 'vert', B: 'bleu', C: 'cyan', M: 'magenta', Y: 'jaune' },
      resultado: 'Résultat', pista: { luz: 'Chaque lumière AJOUTE de la lumière : avec les trois, blanc.', pig: 'Chaque pigment RETIRE de la lumière : avec les trois, noir.' },
      colores: { negro: 'noir (pas de lumière)', blanco: 'blanc', papel: 'blanc (le papier, sans pigment)', negroP: 'noir (brun très foncé)', amarillo: 'jaune', cian: 'cyan', magenta: 'magenta', rojo: 'rouge', verde: 'vert', azul: 'bleu', azulv: 'bleu-violet' },
      consigue: (c, m) => `Obtiens <b>${c}</b> avec des ${m}`, conLuz: 'lumières', conPig: 'pigments',
      comprobar: 'Vérifier', siguiente: 'Suivant', bien: 'Correct !', mal: 'Pas encore. Essaie une autre combinaison.',
      puntos: (p, n) => `Réussites : ${p} sur ${n}`, fin: (p, n) => `Fin du défi : ${p} sur ${n}.`, otra: 'Rejouer'
    }
  };
})();
