/* INSERT ART · EXP 4 · Niveau 02 · Humour graphique · FRANÇAIS */
(function () {
  window.EXP4N2 = window.EXP4N2 || {};
  window.EXP4N2.fr = {
    t: {
      'Escala de planos: la misma figura vista con seis encuadres distintos': 'Échelle des plans : la même figure vue avec six cadrages différents',
      'Gran plano general': 'Plan d’ensemble', 'Plano general': 'Plan général', 'Plano americano': 'Plan américain', 'Plano medio': 'Plan moyen', 'Primer plano': 'Gros plan', 'Plano detalle': 'Plan de détail',
      'Cuatro leyes de la percepción: proximidad, semejanza, cierre y figura-fondo': 'Quatre lois de la perception : proximité, similitude, clôture et figure-fond',
      'PROXIMIDAD': 'PROXIMITÉ', 'SEMEJANZA': 'SIMILITUDE', 'CIERRE': 'CLÔTURE', 'FIGURA Y FONDO': 'FIGURE ET FOND',
      'Esquema de un meme: texto arriba, imagen en el centro, contexto y giro': 'Schéma d’un mème : texte en haut, image au centre, contexte et chute',
      'YO: HOY EMPIEZO CON TIEMPO': 'MOI : AUJOURD’HUI JE M’Y PRENDS TÔT', 'TAMBIÉN YO, LA NOCHE ANTES:': 'TOUJOURS MOI, LA VEILLE AU SOIR :',
      'TEXTO': 'TEXTE', 'IMAGEN': 'IMAGE', 'GIRO': 'CHUTE'
    },
    ui: { indice: 'Sommaire', tocAria: 'Sommaire de la théorie', cuadernoLabel: 'Dans votre carnet d’artiste :', misionK: 'MISSION',
      diasIntro: 'La théorie est répartie sur <b>cinq jours</b>. Chaque jour se lit ou s’explique en classe en <b>15 minutes maximum</b> et te prépare à une activité. Les vidéos « Pour aller plus loin » sont à regarder à la maison : elles ne font pas partie de ces 15 minutes.',
      diaK: 'JOUR', minutos: '15 min', prepara: 'Te prépare pour', actK: 'Activité',
      dias: ['Lire l’art et en rire', 'Le langage visuel', 'Construire l’idée', 'Cadrer et monter', 'Présenter et évaluer'],
      saberK: 'Savoir de base', verMas: 'Pour aller plus loin (à la maison)', abreYT: 'S’ouvre sur YouTube',
      subt: 'Les vidéos sont en espagnol. Sur YouTube, tu peux activer les sous-titres et les traduire automatiquement dans ta langue.',
      videosT: 'Vidéos du niveau', videosP: 'Toutes les vidéos de la théorie, classées par jour. Elles s’ouvrent sur YouTube.' },
    sec: {
      meme: ['Qu’est-ce qu’un mème ?', h => `
        <p class="def">Un <b>mème</b> est une idée qui se copie et se transforme en passant de personne en personne.</p>
        <div class="flujo"><span>IDÉE</span><b>→</b><span>COPIE</span><b>→</b><span>NOUVELLE VERSION</span></div>
        <p>Le biologiste <b>Richard Dawkins</b> a inventé le mot dans son livre <i>Le Gène égoïste</i> (1976). Aujourd’hui, on l’utilise surtout pour les images avec du texte qui circulent sur internet : on les partage, on les copie et chacun les détourne.</p>`],
      lectura: ['Lire une image : dénotation et connotation', h => `
        <p>Avant de transformer une œuvre, il faut savoir la lire. Toute image peut se lire de deux façons :</p>
        <div class="lectura">
          <div><h3>Lecture dénotative</h3><p><b>Ce qu’on voit</b>, de façon objective : tout le monde serait d’accord.</p>
            <ul><li>Fiche : titre, auteur, date et technique.</li><li>Quels personnages et objets apparaissent.</li><li>Couleurs, lumière et composition.</li></ul></div>
          <div><h3>Lecture connotative</h3><p><b>Ce qu’elle suggère</b> : le sens, qui dépend de qui regarde et de son époque.</p>
            <ul><li>Quelles émotions elle transmet.</li><li>Quels symboles elle utilise et ce qu’ils signifient.</li><li>Ce qu’elle voulait dire à son époque et ce qu’elle nous dit aujourd’hui.</li></ul></div>
        </div>
        <p class="tip"><b>Astuce :</b> si ce que tu écris commence par « on voit… », c’est de la dénotation. Si cela commence par « on dirait… », « cela suggère… » ou « cela représente… », c’est de la connotation.</p>
        ${h.cuaderno('faites d’abord la lecture dénotative, puis la lecture connotative de chaque œuvre.')}`],
      historia: ['L’art riait déjà avant internet', h => `
        <p>L’humour critique n’a pas été inventé par internet. Regarde <b>la technique</b> de chaque artiste : c’était le moyen de faire arriver son image à beaucoup de gens.</p>
        <ul class="cual">
          <li><b>Goya</b><span><i>Les Caprices</i> (1799). <b>Gravure</b> à l’eau-forte et à l’aquatinte : on imprime beaucoup d’exemplaires à partir d’une plaque. Satire des vices et du pouvoir de son époque.</span></li>
          <li><b>Daumier</b><span>XIXe siècle. <b>Lithographie</b> pour la presse : des caricatures qui exagèrent les traits des puissants pour les critiquer.</span></li>
          <li><b>Arts incohérents</b><span>Paris, années 1880. Des artistes qui parodiaient des œuvres célèbres avec un humour absurde : des mèmes avant les mèmes.</span></li>
          <li><b>Duchamp</b><span><i>L.H.O.O.Q.</i> (1919). <b>Crayon sur une carte postale</b> de la Joconde : il lui dessine une moustache et un bouc. Il transforme une icône de l’art pour provoquer.</span></li>
        </ul>
        <p class="def"><b>De l’art au design :</b> ces techniques ne sont pas restées dans les musées. La gravure a illustré des livres, la lithographie a rempli affiches et journaux, et le photomontage a fini en couverture de magazine et dans la publicité.</p>
        <p>Comme eux, vous allez partir d’une œuvre connue et changer son sens pour dire quelque chose de nouveau.</p>`],
      lenguaje: ['Le langage visuel : éléments, composition et couleur', h => `
        <p class="def">Une image se construit avec des <b>éléments visuels</b>, comme une phrase se construit avec des mots.</p>
        <ul class="cual cual5">
          <li><b>Point</b><span>Attire le regard.</span></li>
          <li><b>Ligne</b><span>Guide le regard et donne du mouvement.</span></li>
          <li><b>Forme</b><span>Les figures et les taches.</span></li>
          <li><b>Couleur</b><span>Émotion et contraste.</span></li>
          <li><b>Texture</b><span>L’aspect au toucher.</span></li>
        </ul>
        <h3 class="sub">Composition : comment on place les éléments</h3>
        <ul class="cual">
          <li><b>Centre d’intérêt</b><span>Ce qu’on regarde en premier. Place-le là où tu veux qu’on regarde.</span></li>
          <li><b>Poids visuel</b><span>Ce qui est grand, sombre, saturé ou isolé pèse plus.</span></li>
          <li><b>Équilibre</b><span>Symétrique : calme et ordre. Asymétrique : mouvement et tension.</span></li>
          <li><b>Règle des tiers</b><span>Divise l’image en 3 × 3 et place l’important aux croisements.</span></li>
        </ul>
        <h3 class="sub">Couleur</h3>
        <ul class="cards3">
          <li><b>Chaudes et froides</b><span>Rouge, orange et jaune avancent et donnent de l’énergie. Bleu, vert et violet reculent et apaisent.</span></li>
          <li><b>Complémentaires</b><span>Rouge-vert, bleu-orange, jaune-violet. Ensemble, elles donnent le contraste maximal.</span></li>
          <li><b>Symbolique</b><span>Le rouge peut signifier la passion ou le danger. Le sens dépend de la culture et du contexte.</span></li>
        </ul>
        ${h.cuaderno('dans la lecture dénotative de chaque œuvre, indiquez le centre d’intérêt, le type d’équilibre et les couleurs dominantes.')}`],
      percepcion: ['Comment nous regardons : la perception visuelle', h => `
        <p>Nous ne voyons pas les choses séparément : le cerveau les <b>organise</b> pour leur donner un sens. La psychologie de la <b>Gestalt</b> (Allemagne, début du XXe siècle) a décrit les lois qu’il suit.</p>
        ${h.gestalt()}
        <ul class="cual">
          <li><b>Proximité</b><span>Ce qui est proche est vu comme un groupe.</span></li>
          <li><b>Similitude</b><span>Ce qui se ressemble (forme, couleur) se regroupe.</span></li>
          <li><b>Clôture</b><span>Le cerveau complète les formes incomplètes.</span></li>
          <li><b>Figure et fond</b><span>Nous séparons ce qui ressort de ce qui est derrière. Parfois, on peut les inverser.</span></li>
        </ul>
        <p class="tip"><b>Dans votre mème :</b> la figure principale doit bien se détacher du fond, et les pièces qui vont ensemble doivent être proches ou se ressembler.</p>`],
      anatomia: ['Anatomie d’un mème', h => `
        ${h.fig()}
        <ul class="cual"><li><b>Texte</b><span>Pose la situation.</span></li><li><b>Image</b><span>Apporte la réaction.</span></li><li><b>Contexte</b><span>On reconnaît quelque chose qui nous arrive.</span></li><li><b>Chute</b><span>La contradiction crée l’humour.</span></li></ul>`],
      recursos: ['Publicité : convaincre et faire rire', h => `
        <p>La publicité veut que tu fasses quelque chose : acheter, voter, penser d’une certaine façon. Pour te convaincre, elle utilise trois types de procédés :</p>
        <ul class="cards3">
          <li><b>Formels</b><span>Ce qu’on voit : composition, couleur, typographie et plan.</span></li>
          <li><b>Linguistiques</b><span>Ce qu’on dit : slogan court, jeu de mots, rime, questions et impératifs (« Essaie-le ! »).</span></li>
          <li><b>Persuasifs</b><span>Comment elle convainc : émotion, humour, désir, une personne célèbre ou le sentiment d’appartenir au groupe.</span></li>
        </ul>
        <h3 class="sub">Quatre figures communes au mème et à la publicité</h3>
        <ul class="cual">
          <li><b>Hyperbole</b><span>Exagérer : « J’ai un million de devoirs ». Un million ?</span></li>
          <li><b>Ironie</b><span>Dire le contraire : « Génial », quand internet coupe.</span></li>
          <li><b>Métaphore visuelle</b><span>Remplacer : un sac à dos transformé en montagne.</span></li>
          <li><b>Incongruité</b><span>Casser la logique : un roi qui attend le bus.</span></li>
        </ul>
        <p class="def"><b>Société de consommation :</b> beaucoup de publicités ne vendent pas un produit, elles vendent un désir (être heureux, populaire, admiré). Un mème critique peut retourner ce message.</p>
        <p class="tip"><b>Pour t’entraîner :</b> dans l’onglet <b>Ressources</b>, tu as le jeu « Quel procédé est-ce ? ».</p>`],
      estereotipos: ['L’humour oui, les stéréotypes non', h => `
        <p class="def">Un <b>stéréotype</b> est une idée simplifiée et répétée sur un groupe de personnes : « les filles sont… », « les gens de tel endroit sont… ».</p>
        <ul class="cards3">
          <li><b>Rôles sexistes</b><span>Des publicités où elle fait le ménage et lui conduit, ou des jouets « pour filles » et « pour garçons ».</span></li>
          <li><b>Normes corporelles</b><span>Des corps retouchés que presque personne n’a, présentés comme normaux.</span></li>
          <li><b>Humour qui blesse</b><span>Se moquer du genre, de l’origine ou du corps de quelqu’un répète ces stéréotypes.</span></li>
        </ul>
        <p><b>Remettez en question les préjugés, pas les personnes qui les subissent.</b></p>
        <p class="ojo"><b>Avant de valider votre idée, demandez-vous :</b> de qui rions-nous ? Critique-t-elle une idée ou humilie-t-elle une personne ?</p>`],
      planos: ['Cadrage, plan et angle', h => `
        <p class="def"><b>Cadrer</b>, c’est décider ce qui reste dans l’image et ce qui reste dehors. Selon la distance, on parle de différents <b>plans</b>.</p>
        ${h.planos()}
        <ul class="cual cual3">
          <li><b>Plan d’ensemble</b><span>Le lieu. La figure est petite : elle situe.</span></li>
          <li><b>Plan général</b><span>La figure entière dans son environnement.</span></li>
          <li><b>Plan américain</b><span>Jusqu’aux genoux : figure et action.</span></li>
          <li><b>Plan moyen</b><span>Jusqu’à la taille : ce qu’elle fait.</span></li>
          <li><b>Gros plan</b><span>Le visage : l’émotion.</span></li>
          <li><b>Plan de détail</b><span>Une petite partie qui compte.</span></li>
        </ul>
        <h3 class="sub">Angle : d’où l’on regarde</h3>
        <ul class="cual">
          <li><b>Normal</b><span>À hauteur des yeux : neutre.</span></li>
          <li><b>Plongée</b><span>D’en haut : la figure paraît petite ou faible.</span></li>
          <li><b>Contre-plongée</b><span>D’en bas : la figure paraît grande et puissante.</span></li>
          <li><b>Angle penché</b><span>Image inclinée : instabilité, quelque chose ne va pas.</span></li>
        </ul>
        <p><b>Image séquentielle :</b> plusieurs images dans l’ordre qui racontent une histoire, comme la bande dessinée, le <i>storyboard</i> ou les mèmes en deux cases « ce que j’attends / ce qui arrive ».</p>
        <p class="tip"><b>Dans votre mème :</b> découper un visage en gros plan ou une figure entière change ce qu’il raconte. Un personnage en contre-plongée paraîtra puissant ; en plongée, petit.</p>`],
      fotomontaje: ['Photomontage traditionnel et numérique', h => `
        <p class="def"><b>Photomontage :</b> assembler des fragments de différentes photos ou images pour créer une nouvelle image avec un autre sens.</p>
        <p><b>Origine :</b> à Berlin, vers 1918–1920, les dadaïstes <b>Hannah Höch</b>, <b>Raoul Hausmann</b> et <b>John Heartfield</b> découpaient des photos de journaux et de magazines pour critiquer la guerre et la politique. Heartfield a porté le photomontage sur les couvertures de magazine : de l’art au graphisme.</p>
        <div class="lectura">
          <div><h3>Traditionnel</h3><ul><li>Ciseaux, colle et reproductions imprimées.</li><li>On déplace les pièces sur le papier avant de les coller.</li><li>Les bords découpés se voient, et cela aussi exprime quelque chose.</li></ul></div>
          <div><h3>Numérique</h3><ul><li>La photo numérique est faite de <b>pixels</b>.</li><li>Les logiciels de retouche travaillent par <b>calques</b>.</li><li>On découpe, on redimensionne et on change la couleur sans laisser de trace.</li></ul></div>
        </div>
        <ol class="pasos3"><li><b>Découpe</b>Des fragments de différentes œuvres : une tête, un fond, un objet…</li><li><b>Essaie des combinaisons</b>Déplace les pièces avant de coller. Cherche le contraste.</li><li><b>Colle avec intention</b>Chaque pièce doit dire quelque chose.</li></ol>
        <p class="ojo"><b>Une photo peut aussi mentir.</b> Les montages numériques servent à créer des fausses informations. Avant de croire ou de partager une image, vérifiez d’où elle vient.</p>
        <p class="tip"><b>Vous travaillez en traditionnel :</b> des découpages de reproductions d’œuvres d’art, sur papier.</p>`],
      vistazo: ['Compris en un coup d’œil', h => `
        <ul class="cards3"><li><b>Contraste</b><span>Grand / petit. Sérieux / absurde.</span></li><li><b>Synthèse</b><span>Peu d’éléments. Une idée claire.</span></li><li><b>Texte + image</b><span>Ensemble, ils disent ce qu’ils ne diraient pas seuls.</span></li></ul>
        <p class="tip"><b>Le test de la seconde :</b> montrez le mème à quelqu’un pendant une seconde. S’il le comprend, ça marche.</p>`],
      proceso: ['Le processus de création', h => `
        <p>Un projet artistique ne se fait pas d’un coup : il passe par des étapes. Voici les vôtres :</p>
        <ol class="fases-n2">
          <li><b>Chercher</b><span>Lire les œuvres.</span><em>Activité 1</em></li>
          <li><b>Projeter</b><span>Ce qu’on veut dire, avec quel procédé, pour qui et où.</span><em>Activité 2</em></li>
          <li><b>Esquisser</b><span>Essayer plusieurs options rapides.</span><em>Activité 2</em></li>
          <li><b>Réaliser</b><span>Le photomontage.</span><em>Activité 3</em></li>
          <li><b>Réviser</b><span>Est-ce clair ? Est-ce que ça blesse quelqu’un ? Corriger.</span><em>Activité 3</em></li>
          <li><b>Présenter</b><span>Le raconter à la classe.</span><em>Activité 4</em></li>
          <li><b>Évaluer</b><span>Juger le processus et le résultat.</span><em>Activité 4</em></li>
        </ol>
        <h3 class="sub">Trois façons d’évaluer</h3>
        <ul class="cards3">
          <li><b>Autoréflexion</b><span>Ce que j’ai appris, ce qui a été difficile et ce que je changerais.</span></li>
          <li><b>Autoévaluation</b><span>Je me mets une note avec la grille.</span></li>
          <li><b>Coévaluation</b><span>J’évalue le travail des autres binômes, avec des arguments et du respect.</span></li>
        </ul>
        <p class="tip"><b>Les erreurs font partie du processus :</b> ce qui n’a pas marché et comment vous l’avez réglé, c’est justement ce qu’on vous demandera à la présentation.</p>`]
    },
    mision: {
      titulo: 'Transformez une œuvre d’art en mème',
      reto: 'Depuis des siècles, les artistes utilisent l’humour pour critiquer leur époque. Votre mission, <b>en binôme</b>, est de transformer une œuvre d’art historique en un <b>mème au regard critique</b>, construit en <b>photomontage traditionnel</b> : en découpant et en collant des fragments de différentes œuvres. Pensez-le pour être placé dans <b>un espace de l’établissement</b>. Avec intention et sans blesser personne.',
      fasesT: 'Comment on joue',
      fases: [
        ['Lisez l’œuvre', 'Choisissez deux œuvres historiques, dont une andalouse, et faites leur lecture dénotative et connotative.'],
        ['Trouvez l’idée', 'Décidez quelle œuvre vous transformez, quel procédé vous utilisez, où est la chute et dans quel espace de l’établissement vous le placeriez.'],
        ['Photomontage', 'Découpez, essayez des combinaisons et collez avec intention. Un mème par binôme.'],
        ['Présentez-le', 'Expliquez votre mème à la classe et évaluez votre travail et celui des autres binômes.']
      ],
      entregasT: 'Ce que vous devez rendre',
      entregas: [
        '<b>Le mème</b>, en main propre, et <b>une photo du mème</b> dans le devoir Classroom.',
        '<b>Des photos des pages du carnet d’artiste</b> (lecture des œuvres et croquis de l’idée) dans le devoir Classroom.',
        'La <b>présentation</b> en classe et l’<b>autoévaluation</b>.'
      ],
      pista: '<b>Rappelez-vous :</b> il est interdit de prendre des photos dans l’établissement. Le mème est pensé pour un espace de l’établissement, mais il se fabrique sur papier ; les photos pour Classroom se font à la maison.'
    },
    act: {
      intro: 'Vous travaillez <b>en binôme</b> et on va vite : chaque activité tient en une ou deux séances. L’écrit va dans votre <b>carnet d’artiste</b>. <b>Rendu :</b> le mème, en main propre ; et dans le devoir Classroom, une photo du mème et des photos des pages du carnet (prises à la maison, jamais dans l’établissement).',
      acts: [
        ['Lire l’œuvre', 'Bloc 1', {"obj": "Apprendre à lire une œuvre avant de la transformer.", "pasos": ["Choisissez <b>deux œuvres d’art historiques</b> que vous aimeriez transformer en mème. <b>L’une doit être andalouse.</b>", "Faites la <b>fiche</b> de chaque œuvre : titre, artiste, date et technique.", "<b>Lecture dénotative :</b> écrivez ce qu’on voit (personnages, objets, couleurs et composition).", "<b>Lecture connotative :</b> écrivez ce qu’elle suggère (symboles, émotions et message).", "<b>Hier et aujourd’hui :</b> expliquez ce que racontait l’œuvre à son époque et ce qu’elle pourrait raconter aujourd’hui."], "donde": "En binôme, dans votre carnet d’artiste.", "entrega": "Des photos de ces pages du carnet dans le devoir Classroom (prises à la maison, jamais dans l’établissement)."}],
        ['L’idée', 'Bloc 2', {"obj": "Décider ce que va dire votre mème et où on va le voir.", "pasos": ["Choisissez <b>l’une</b> des deux œuvres.", "Choisissez le <b>procédé</b> : hyperbole, ironie, métaphore visuelle ou incongruité.", "Décidez où est la <b>chute</b> et écrivez le <b>texte</b>.", "Décidez dans quel <b>espace de l’établissement</b> vous le placeriez et pour quel <b>public</b>.", "Faites un <b>croquis rapide</b> du mème.", "Vérifiez : <b>est-ce qu’il critique une idée ou humilie une personne ?</b> S’il humilie, changez-le."], "donde": "En binôme, dans votre carnet d’artiste.", "entrega": "Des photos de ces pages du carnet dans le devoir Classroom (prises à la maison, jamais dans l’établissement)."}],
        ['Photomontage', 'Bloc 3', {"obj": "Fabriquer votre mème sur papier.", "pasos": ["Découpez des <b>fragments de différentes œuvres</b> : une tête, un fond, un objet…", "<b>Essayez des combinaisons</b> avant de coller. Cherchez le contraste.", "<b>Collez avec intention</b> : chaque pièce doit dire quelque chose.", "Ajoutez le <b>texte</b>.", "Vérifiez qu’il <b>se comprend d’un coup d’œil</b> : peu d’éléments, du contraste, texte et image ensemble."], "donde": "En binôme, en classe. Un mème par binôme.", "entrega": "Le mème, en main propre. Et une photo du mème dans le devoir Classroom (prise à la maison)."}],
        ['Présentation', 'Bloc 4', {"obj": "Présenter votre mème à la classe et l’évaluer.", "pasos": ["Préparez <b>en binôme</b> les réponses aux questions de l’étape 2.", ["Présentez votre mème à la classe : l’idée et l’espace de l’établissement pour lequel vous l’avez pensé. <b>Votre professeur vous posera ces questions :</b>", ["<b>Comment l’avez-vous fait ?</b> Racontez les étapes, de la lecture des œuvres au photomontage terminé. <span class=\"il-crit\">Critère 4.2</span>", "<b>Qu’est-ce qui a été le plus difficile et comment l’avez-vous résolu ?</b> Par exemple, trouver la chute ou faire en sorte que les pièces s’assemblent. <span class=\"il-crit\">Critère 4.2</span>", "<b>De quoi êtes-vous le plus fiers et que changeriez-vous si vous recommenciez ?</b> <span class=\"il-crit\">Critère 4.2</span>"]], "Ensuite, faites l’<b>autoévaluation et la coévaluation</b> dans le formulaire que votre professeur vous donnera."], "donde": "En binôme, en classe.", "entrega": "La présentation est orale, en classe. L’autoévaluation et la coévaluation, dans le formulaire."}]
      ],
      cotejoT: 'Liste de contrôle : où en êtes-vous ?',
      cotejoP: 'Coche ce que tu as déjà fait. Tes coches sont enregistrées uniquement sur cet appareil. Quand ton professeur te le demande, <b>fais une capture d’écran de cette liste et envoie-la dans le devoir Classroom</b> : ainsi, il pourra te faire un retour.',
      grupos: [
        ['Lire l’œuvre', ['Nous avons deux œuvres historiques et l’une est andalouse.', 'Chaque œuvre a sa fiche (titre, artiste, date et technique).', 'Nous avons fait la lecture dénotative des deux.', 'Nous avons fait la lecture connotative des deux.', 'Nous avons expliqué ce que racontait chaque œuvre à son époque et ce qu’elle pourrait raconter aujourd’hui.']],
        ['L’idée', ['Nous avons choisi l’œuvre et le procédé humoristique.', 'Nous savons où est la chute et nous avons le texte.', 'Nous avons décidé de l’espace de l’établissement et du public.', 'Nous avons vérifié qu’il n’humilie personne et ne répète pas de stéréotypes.']],
        ['Photomontage', ['Nous avons découpé des fragments de différentes œuvres.', 'Nous avons essayé des combinaisons avant de coller.', 'Le mème a un texte et se comprend d’un coup d’œil.']],
        ['Présentation et rendu', ['Nous avons préparé l’explication : idée, espace, processus, difficultés et réussites.', 'Nous avons fait l’autoévaluation et la coévaluation.', 'Nous avons rendu le mème en main propre.', 'Nous avons envoyé sur Classroom la photo du mème et les photos du carnet.']]
      ],
      progreso: (n, t) => `Tu en as ${n} sur ${t}`, borrar: 'Effacer mes coches', confirmar: 'Sûr ? Appuie encore pour effacer.'
    },
    juego: {
      titulo: 'Quel procédé est-ce ?',
      intro: 'Lis chaque situation et choisis le procédé humoristique utilisé. Il y a huit manches.',
      ops: { hiperbole: 'Hyperbole', ironia: 'Ironie', metafora: 'Métaphore visuelle', incongruencia: 'Incongruité' },
      items: [
        ['« J’ai un million de devoirs pour demain. »', 'hiperbole', 'Personne n’a un million de devoirs : on exagère pour faire rire.'],
        ['Un roi avec couronne et cape qui attend le bus.', 'incongruencia', 'Un roi n’attend pas le bus : la logique est cassée.'],
        ['Le wifi coupe en plein milieu d’une vidéo et quelqu’un dit : « Génial ».', 'ironia', 'On dit le contraire de ce qu’on pense.'],
        ['Un sac à dos dessiné comme une énorme montagne sur le dos d’un élève.', 'metafora', 'La montagne remplace le sac pour montrer combien il pèse.'],
        ['Une statue grecque qui fait la queue à la cafétéria du collège.', 'incongruencia', 'Elle mélange deux mondes qui ne vont pas ensemble.'],
        ['« J’ai tellement dormi que j’ai vu le soleil se lever trois fois. »', 'hiperbole', 'Une exagération impossible.'],
        ['Une horloge qui fond sur la table à la dernière heure du vendredi.', 'metafora', 'L’horloge qui fond remplace l’idée que le temps ne passe pas.'],
        ['Une affiche « Bibliothèque très calme » entourée de gens qui crient.', 'ironia', 'Le texte dit le contraire de ce qu’on voit.']
      ],
      bien: 'Bravo !', mal: 'Ce n’est pas ça. La réponse était :', siguiente: 'Suivant', otraVez: 'Rejouer',
      ronda: (i, n) => `Manche ${i} sur ${n}`, puntos: (p, n) => `Bonnes réponses : ${p} sur ${n}`,
      final: (p, n) => p === n ? `Sans faute ! ${p} sur ${n}. Tu maîtrises les procédés.` : `Tu as trouvé ${p} sur ${n}. Revois la théorie et réessaie.`
    },
    rub: {
      intro: 'Voici comment ce niveau est évalué. Chaque indicateur est noté de 1 à 10. La note de chaque critère est la moyenne de ses indicateurs et la note du niveau est la moyenne des cinq critères.',
      criteriosT: 'Critères d’évaluation',
      criterios: [
        ['1.1', 'Analyser des œuvres artistiques de différentes époques et cultures, en les replaçant dans leur contexte, en décrivant leurs aspects essentiels, en évaluant le processus de création et le résultat final, avec une attitude d’ouverture, d’intérêt et de respect.'],
        ['1.2', 'Évaluer de manière critique les habitudes, les goûts et les références artistiques de différentes époques et cultures, en réfléchissant à leur évolution et à leur relation avec ceux du présent.'],
        ['3.1', 'Participer, avec initiative, confiance et créativité, à l’exploration de différents médias, techniques et formats audiovisuels, en décodant leurs langages, en identifiant les outils et en distinguant leurs finalités.'],
        ['3.2', 'Réaliser des productions audiovisuelles, individuelles ou collaboratives, en assumant différents rôles ; en utilisant les technologies numériques avec une intention expressive ; en visant un résultat final conforme au projet préparé ; et en choisissant et utilisant, correctement et de façon créative, les outils et moyens disponibles les plus adaptés.'],
        ['4.2', 'Présenter le résultat final de la création d’un produit artistique, individuel ou collectif, en partageant et en évaluant de manière critique son élaboration, les difficultés rencontrées, les progrès réalisés et les réussites.']
      ],
      niveles: ['Insuffisant (1–4)', 'Passable (5)', 'Bien (6)', 'Très bien (7–8)', 'Excellent (9–10)'],
      criterio: 'Critère',
      bloques: [
        ['Bloc 1. Lire l’œuvre', [
          ['IL 1.1.1', 'Lecture dénotative', '1.1', 'Décrit de façon objective les deux œuvres choisies (dont une andalouse) : fiche (titre, artiste, date et technique) et ce qu’on voit (personnages, couleurs, composition).', ['Il manque une œuvre ou la description est minime ou erronée.', 'Fiche de base ; décrit seulement quelques éléments.', 'Fiche complète et description correcte de l’essentiel.', 'Description ordonnée et précise des personnages, de la couleur et de la composition.', 'Description complète avec un vocabulaire technique.']],
          ['IL 1.1.2', 'Lecture connotative', '1.1', 'Interprète le sens des œuvres : ce qu’elles suggèrent, quels symboles elles utilisent et quelles émotions elles transmettent.', ['N’interprète pas ou confond décrire et interpréter.', 'Interprétation vague, sans appui sur l’image.', 'Interprétation correcte appuyée sur un détail.', 'Interprète symboles et émotions avec des détails de l’image.', 'Interprétation personnelle, argumentée et avec le contexte historique.']],
          ['IL 1.2.1', 'Hier et aujourd’hui', '1.2', 'Relie ce que l’œuvre racontait à son époque à ce qu’elle peut raconter aujourd’hui (goûts, valeurs, coutumes).', ['N’établit aucun lien.', 'Lien superficiel.', 'Explique une ressemblance ou une différence avec le présent.', 'Compare l’époque et le présent avec des arguments.', 'Réfléchit de façon critique à l’évolution et la relie à son mème.']]]],
        ['Bloc 2. L’idée', [
          ['IL 3.1.1', 'Procédé et chute', '3.1', 'Choisit le procédé humoristique (hyperbole, ironie, métaphore visuelle ou incongruité) et explique où est la chute de son mème.', ['Ni procédé ni chute.', 'Nomme un procédé, mais ne l’applique pas.', 'Procédé et chute identifiés.', 'Explique comment le procédé crée la chute.', 'Procédé très bien choisi et justifié ; essaie des variantes dans le croquis.']],
          ['IL 3.1.2', 'Espace et public', '3.1', 'Pense le mème pour un espace et un public de l’établissement et vérifie qu’il critique une idée sans renforcer de stéréotypes.', ['Sans destinataire ou renforce des stéréotypes.', 'Espace ou public peu définis.', 'Espace et public définis, sans stéréotypes.', 'Le message s’adapte à l’espace et au public.', 'Justifie le choix et remet en question un préjugé avec respect.']]]],
        ['Bloc 3. Photomontage', [
          ['IL 3.2.1', 'Découper et combiner', '3.2', 'Réalise le mème en photomontage traditionnel, en découpant des fragments de différentes œuvres et en les combinant avec intention.', ['Ce n’est pas un photomontage ou il utilise une seule image sans changement.', 'Assemble des découpages sans intention claire.', 'Combine des fragments de plusieurs œuvres avec intention.', 'Découpes nettes et combinaison cohérente avec l’idée.', 'Composition soignée et surprenante : les pièces disent quelque chose de nouveau.']],
          ['IL 3.2.2', 'Se comprend d’un coup d’œil', '3.2', 'Le mème se comprend d’un coup d’œil : texte et image ensemble, contraste et peu d’éléments.', ['Il ne se comprend pas.', 'Il se comprend seulement avec une explication.', 'Il se comprend ; texte et image sont liés.', 'Clair et direct, avec un bon contraste et une bonne synthèse.', 'Impact immédiat : texte et image se renforcent.']]]],
        ['Bloc 4. Présentation', [
          ['IL 4.2.1', 'Exposé', '4.2', 'Présente le mème à la classe en expliquant l’idée, le processus, les difficultés rencontrées et les réussites.', ['Ne présente pas ou lit sans expliquer.', 'Présentation courte et peu claire.', 'Explique clairement l’idée et le processus.', 'Explique idée, processus, difficultés et réussites avec un vocabulaire technique.', 'Présentation claire et attrayante ; répond aux questions.']],
          ['IL 4.2.2', 'Autoévaluation et coévaluation', '4.2', 'Évalue de manière critique son travail et celui des autres binômes, avec des arguments et du respect.', ['Ne s’autoévalue pas.', 'Autoévaluation superficielle.', 'Identifie réussites et erreurs.', 'Propose des améliorations concrètes pour son travail.', 'Évalue avec discernement son travail et celui des autres binômes.']]]]
      ]
    }
  };
})();
