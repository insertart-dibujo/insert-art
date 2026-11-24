/* INSERT ART · EPVA 3 · Niveau 01 · Un triptyque historique · FRANÇAIS */
(function () {
  window.EPVA3N1 = window.EPVA3N1 || {};
  window.EPVA3N1.fr = {
    t: {
      'Esquema del tríptico: tres caras exteriores y tres interiores': 'Schéma du triptyque : trois volets extérieurs et trois volets intérieurs',
      'EXTERIOR': 'EXTÉRIEUR', 'INTERIOR': 'INTÉRIEUR', 'Solapa': 'Rabat', 'Avance': 'Accroche', 'Contraportada': 'Quatrième de couverture', 'Fuentes y autoría': 'Sources et auteurs',
      'Portada': 'Couverture', 'Título e imagen': 'Titre et image', 'Presentación': 'Présentation', 'Dónde está': 'Où c’est',
      'Patrimonio': 'Patrimoine', 'Qué visitar': 'Quoi visiter', 'Ruta': 'Itinéraire', 'Qué descubrir': 'Quoi découvrir',
      'Catálogo del Patrimonio Histórico de Andalucía': 'Catalogue du Patrimoine historique d’Andalousie',
      'Buscador oficial de bienes protegidos de Andalucía.': 'Moteur de recherche officiel des biens protégés d’Andalousie.',
      'Historia del Arte': 'Historia del Arte (site d’histoire de l’art)', 'Fichas de obras, artistas y movimientos.': 'Fiches d’œuvres, d’artistes et de mouvements.',
      'Obras y monumentos en alta resolución.': 'Œuvres et monuments en haute résolution.'
    },
    ui: {
      indice: 'Sommaire', tocAria: 'Sommaire de la théorie', cuadernoLabel: 'Dans votre carnet de recherche :', misionK: 'MISSION',
      diasIntro: 'Cette unité est déjà terminée : voici la théorie pour <b>réviser</b>. Elle est répartie sur <b>trois jours</b>, de <b>15 minutes maximum</b>, et chaque jour est lié à l’activité qu’il préparait. Les vidéos « Pour aller plus loin » servent à approfondir à la maison.',
      diaK: 'JOUR', minutos: '15 min', prepara: 'Te prépare à', actK: 'Activité',
      dias: ['Le patrimoine andalou', 'De l’esquisse au triptyque', 'Concevoir pour communiquer'],
      saberK: 'Savoir de base', verMas: 'Pour aller plus loin (à la maison)', abreYT: 'S’ouvre sur YouTube',
      subt: 'Les vidéos sont en espagnol. Sur YouTube, tu peux activer les sous-titres et les traduire automatiquement dans ta langue.',
      videosT: 'Vidéos de l’unité', videosP: 'Toutes les vidéos de la théorie, classées par jour. Elles s’ouvrent sur YouTube.',
      enlacesT: 'Où chercher'
    },
    sec: {
      manifestacion: ['Expression artistique et expression culturelle', h => `
        <ul class="cards3 c2">
          <li><b>Expression artistique</b><span>Une production humaine créée avec une <strong>intention expressive</strong>. Elle transmet des idées, des émotions, des croyances ou un message avec son propre langage : composition, couleur, matière, proportion. Elle peut être visuelle, plastique, sonore, corporelle ou littéraire.</span></li>
          <li><b>Expression culturelle</b><span>Tout ce que produit un groupe humain, avec ou sans intention artistique, et qui exprime son identité et son mode de vie. Elle peut être <strong>matérielle</strong> (monuments, objets, artisanat) ou <strong>immatérielle</strong> (fêtes, rituels, langue, musique, gastronomie).</span></li>
        </ul>
        <p class="tip"><b>Elle ne fait pas que représenter : elle exprime aussi.</b> Une œuvre raconte qui l’a faite, pour qui et ce que croyait cette société.</p>`],
      patrimonio: ['Le patrimoine et sa protection', h => `
        <p class="def">Le <b>patrimoine</b> est l’héritage culturel et naturel que nous recevons de ceux qui ont vécu avant nous et que nous devons protéger pour ceux qui viendront.</p>
        <div class="flujo"><span>CEUX QUI ONT VÉCU AVANT</span><b>→</b><span>NOUS : PROTÉGER</span><b>→</b><span>CEUX QUI VIENDRONT</span></div>
        <ul class="cards3">
          <li><b>Matériel</b><span>Biens mobiliers (un tableau, une sculpture) et immobiliers (un bâtiment, un site archéologique).</span></li>
          <li><b>Immatériel</b><span>Ce qui ne se touche pas : le flamenco, la Fête des Patios de Cordoue, la diète méditerranéenne.</span></li>
          <li><b>Naturel</b><span>Paysages et espaces comme le parc national de Doñana.</span></li>
        </ul>
        <h3 class="sub">Comment on le protège</h3>
        <ul class="cual cual3">
          <li><b>Loi 14/2007</b><span>Loi du Patrimoine historique d’Andalousie : elle protège les biens de notre région.</span></li>
          <li><b>BIC</b><span>Bien d’intérêt culturel : la protection maximale en Espagne.</span></li>
          <li><b>Patrimoine mondial</b><span>Biens déclarés par l’UNESCO pour leur valeur universelle exceptionnelle.</span></li>
        </ul>
        <p><b>Patrimoine mondial en Andalousie :</b> Alhambra, Generalife et Albaicín · Centre historique de Cordoue · Cathédrale, Alcazar et Archives des Indes de Séville · Parc national de Doñana · Úbeda et Baeza · Art rupestre de l’arc méditerranéen · Dolmens d’Antequera · Ville califale de Medina Azahara.</p>
        <div class="flujo"><span>CONNAÎTRE</span><b>→</b><span>VALORISER</span><b>→</b><span>CONSERVER</span><b>→</b><span>DIFFUSER</span></div>
        <p class="tip"><b>Votre triptyque est la dernière étape :</b> diffuser le patrimoine pour que d’autres le connaissent et le protègent.</p>`],
      analizar: ['Comment étudier une œuvre : la structure commune', h => `
        <p>Aucune œuvre ne naît seule : les circonstances de son époque l’expliquent. C’est pourquoi, pour chaque œuvre, vous avez étudié ces <b>huit points</b> :</p>
        <ol class="fases-n2 f8">
          <li><b>Identification</b><span>Nom, lieu, époque et auteur (s’il est connu).</span></li>
          <li><b>Aspects formels</b><span>Matériaux, technique, composition, couleur, décoration, proportion et échelle.</span></li>
          <li><b>Fonction</b><span>Pourquoi a-t-elle été faite ? Religieuse, politique, funéraire, domestique…</span></li>
          <li><b>Contexte</b><span>Quelle société l’a produite et quel pouvoir ou quelles croyances elle reflétait.</span></li>
          <li><b>Genre</b><span>Y a-t-il des femmes autrices ou représentées ? Qu’est-ce que cela nous dit de l’époque ?</span></li>
          <li><b>Andalousie</b><span>Pourquoi elle appartient au patrimoine andalou et ce qui la rend unique.</span></li>
          <li><b>Conservation</b><span>Est-elle protégée (BIC, UNESCO) ? Quels risques ou changements a-t-elle subis ?</span></li>
          <li><b>Actualité</b><span>Est-elle encore vivante dans l’art et la culture d’aujourd’hui ?</span></li>
        </ol>
        <p class="ojo"><b>Sources fiables :</b> le Catalogue du Patrimoine historique d’Andalousie, les sites des musées et de l’UNESCO, Historia del Arte et Google Arts & Culture (les liens sont dans l’onglet <b>Ressources</b>). Si vous utilisez une IA, <b>notez le prompt</b>, vérifiez ce qu’elle dit et notez d’où vient chaque information.</p>`],
      viaje: ['L’Andalousie, un voyage dans le temps', h => `
        <p>Voici les six blocs étudiés par les équipes, avec quelques exemples pour chacun :</p>
        <ul class="cual cual3">
          <li><b>1 · Préhistoire</b><span>Dolmens d’Antequera, peintures de la grotte de la Pileta (Benaoján) et grotte de Nerja.</span></li>
          <li><b>2 · Antiquité</b><span>Itálica (Santiponce), Baelo Claudia (Tarifa) et la Gadir phénicienne (Cadix).</span></li>
          <li><b>3 · Al-Andalus</b><span>Mosquée de Cordoue, Medina Azahara, la Giralda et l’Alhambra.</span></li>
          <li><b>4 · Renaissance et Baroque</b><span>Úbeda et Baeza ; Velázquez, Murillo, Zurbarán et Valdés Leal ; la sculptrice Luisa Roldán, « la Roldana ».</span></li>
          <li><b>5 · XIXe et XXe siècles</b><span>Picasso (Málaga), Julio Romero de Torres (Cordoue), Daniel Vázquez Díaz (Nerva) et Carmen Laffón (Séville).</span></li>
          <li><b>6 · Art contemporain et patrimoine vivant</b><span>Musée Picasso de Málaga, Metropol Parasol (« las Setas »), le flamenco et les Patios de Cordoue.</span></li>
        </ul>
        <h3 class="sub">Le patrimoine au coin de la rue : Marbella</h3>
        <p>La vieille ville avec ses remparts, la Plaza de los Naranjos et l’église de l’Incarnation ; la basilique paléochrétienne de Vega del Mar ; la villa romaine de Río Verde et les thermes de Las Bóvedas.</p>`],
      lenguaje: ['Le langage visuel communique', h => `
        <p>Un triptyque est un <b>message visuel</b> : il doit informer et, en même temps, attirer. Comme dans toute communication, il y a quatre éléments :</p>
        <ul class="cual">
          <li><b>Émetteur</b><span>Votre équipe.</span></li>
          <li><b>Récepteur</b><span>Quelqu’un qui veut voyager et découvrir l’Andalousie.</span></li>
          <li><b>Message</b><span>« Ce patrimoine mérite une visite. »</span></li>
          <li><b>Canal</b><span>Le triptyque : papier ou PDF.</span></li>
        </ul>
        <p class="tip"><b>Pensez toujours au récepteur :</b> des textes courts, clairs et qui éveillent la curiosité.</p>`],
      elementos: ['Point, ligne et plan ; iconicité ; lire les images', h => `
        <ul class="cards3">
          <li><b>Point</b><span>Attire le regard : une icône, une puce, un numéro d’itinéraire.</span></li>
          <li><b>Ligne</b><span>Sépare, guide la lecture et marque des parcours.</span></li>
          <li><b>Plan</b><span>Les surfaces de couleur et les photos qui organisent chaque volet.</span></li>
        </ul>
        <p><b>Iconicité :</b> à quel point une image ressemble à la réalité. Une photo est très iconique ; un dessin, moins ; un pictogramme (celui d’un monument sur une carte) est presque abstrait. Choisissez le degré nécessaire : la photo pour montrer, le pictogramme pour orienter.</p>
        <div class="lectura">
          <div><h3>Dénotation</h3><p><b>Ce qu’on voit</b> sur la photo : l’arc, la tour, la lumière du soir.</p></div>
          <div><h3>Connotation</h3><p><b>Ce qu’elle transmet</b> : mystère, grandeur, calme. Choisissez des photos qui évoquent ce que vous voulez raconter.</p></div>
        </div>`],
      composicion: ['Composition : organiser chaque volet', h => `
        <ul class="cual">
          <li><b>Hiérarchie</b><span>D’abord le titre ; ensuite l’important ; enfin les détails.</span></li>
          <li><b>Équilibre</b><span>Répartis le poids des photos et des textes entre les volets.</span></li>
          <li><b>Proportion</b><span>Une grande image domine ; plusieurs petites l’accompagnent.</span></li>
          <li><b>Rythme</b><span>Répéter la même structure dans les volets intérieurs donne de l’unité.</span></li>
        </ul>
        <p class="tip"><b>Ordre :</b> aligne les éléments, laisse des marges et regroupe chaque texte avec son image.</p>`],
      triptico: ['Le triptyque : comment il fonctionne', h => `
        <p class="def"><b>A4 à l’italienne, trois parties, six volets.</b> Il se plie en <b>pli roulé</b> : le rabat rentre en premier, c’est pourquoi il est un peu plus étroit.</p>
        ${h.fig('triptico')}
        <p class="tip"><b>Avant de concevoir, faites une maquette en papier :</b> pliez-la, numérotez les volets et vérifiez l’ordre de lecture.</p>`],
      proceso: ['Le processus créatif et les esquisses', h => `
        <div class="flujo"><span>CHERCHER</span><b>→</b><span>SÉLECTIONNER</span><b>→</b><span>ESQUISSER</span><b>→</b><span>CONCEVOIR</span><b>→</b><span>RÉVISER</span></div>
        <p>L’<b>esquisse</b> est un dessin rapide à main levée pour tester des idées avant de les rendre définitives. Dans votre proposition, vous avez placé titres, textes et images sur chaque volet et noté quelle information allait où. Bien choisir les matériaux et la technique (feuille pliée pour la maquette, Canva pour le dessin final) fait aussi partie du processus.</p>`],
      color: ['Forme, couleur et texture avec intention', h => `
        <ul class="cards3">
          <li><b>Palette</b><span>Deux ou trois couleurs plus un neutre. Répétez-les sur tous les volets.</span></li>
          <li><b>Contraste</b><span>Texte foncé sur fond clair (ou l’inverse). Les complémentaires ensemble attirent l’attention.</span></li>
          <li><b>Expression</b><span>Les ocres et les terres évoquent la pierre et le temps ; les bleus, l’eau et le calme.</span></li>
        </ul>
        <p><b>Texture visuelle :</b> une photo de pierre, de carreaux ou de mosaïque en fond léger donne du caractère, tant qu’elle n’empêche pas de lire.</p>`],
      percepcion: ['Comment on perçoit une page', h => `
        <ul class="cual">
          <li><b>Figure et fond</b><span>Le texte doit bien se détacher de ce qu’il y a derrière.</span></li>
          <li><b>Proximité</b><span>Ce qui est proche se lit ensemble : chaque texte à côté de sa photo.</span></li>
          <li><b>Similarité</b><span>Les titres du même style sont perçus comme du même niveau.</span></li>
          <li><b>Parcours</b><span>On lit en Z : en haut à gauche, en haut à droite, puis en bas.</span></li>
        </ul>`],
      tipografia: ['Typographie et lisibilité', h => `
        <ul class="cards3">
          <li><b>Deux au maximum</b><span>Une pour les titres, une autre pour les textes.</span></li>
          <li><b>Taille</b><span>Textes de 10 à 12 points ; titres beaucoup plus grands.</span></li>
          <li><b>Alignement</b><span>Des paragraphes courts et alignés à gauche se lisent mieux.</span></li>
        </ul>`],
      fuentes: ['Sources, auteurs et visite responsable', h => `
        <ul class="cual cual3">
          <li><b>Textes personnels</b><span>Écrivez avec vos mots à partir de la recherche.</span></li>
          <li><b>Citer</b><span>Sur la quatrième de couverture : d’où vient chaque texte et chaque image (site, auteur et date).</span></li>
          <li><b>Images</b><span>Respectez les licences : utilisez des images libres ou personnelles.</span></li>
        </ul>
        <p class="ojo"><b>Visite responsable :</b> ne pas toucher ni peindre, respecter les parcours et les horaires, ne pas laisser de déchets. Protéger le patrimoine, c’est aussi bien le diffuser.</p>`]
    },
    mision: {
      titulo: 'Un triptyque pour découvrir l’Andalousie',
      reto: 'En équipe, étudiez le patrimoine historique de l’Andalousie du bloc qui vous a été attribué et transformez-le en un <b>triptyque</b> qui donne envie à d’autres de le découvrir. Ici, les notes d’avant ne comptent pas : ce qui compte, c’est ce que vous êtes capables de faire <b>maintenant</b>. <b>Allons chercher le 10 !</b>',
      fasesT: 'Comment on joue',
      fases: [
        ['Cherchez', 'Dans un document partagé, le carnet de recherche de l’équipe, en suivant la structure commune et les questions de votre bloc.'],
        ['Proposez', 'Un triptyque à main levée sur une feuille pliée, avec chaque volet et ses informations placés.'],
        ['Concevez', 'Le triptyque final sur Canva, avec vos propres textes et les sources citées.'],
        ['Rendez', 'Les trois fichiers dans votre dossier EPVA › Unité 1.']
      ],
      entregasT: 'Ce que vous devez rendre',
      entregas: [
        'Dans le devoir Classroom, le <b>lien vers votre dossier EPVA › Unité 1</b>, partagé en lecture.',
        'À l’intérieur, trois fichiers : <b>1 Recherche</b>, <b>2 Proposition de triptyque</b> (photo des deux faces de la feuille) et <b>3 Triptyque final</b> (PDF de Canva).'
      ],
      pista: 'Cherchez des faits surprenants, des histoires captivantes et des œuvres qui méritent d’être connues : « Je ne savais pas que c’était en Andalousie ! ».'
    },
    act: {
      intro: 'Cette unité est déjà <b>terminée</b>. Voici les trois activités telles qu’elles ont été faites et comment chacune est évaluée.',
      acts: [
        ['Recherche sur le patrimoine andalou', 'En équipe', {
          cuaderno: false,
          obj: 'Étudier le patrimoine historique de l’Andalousie du bloc qui vous a été attribué.',
          pasos: [
            'Créez un document Google et partagez-le avec toute l’équipe : ce sera votre <b>carnet de recherche</b>.',
            'Regardez quel <b>bloc</b> vous avez (les six blocs et leurs questions sont en dessous).',
            'Choisissez des œuvres, monuments ou expressions du bloc qui font partie du <b>Patrimoine historique d’Andalousie</b>.',
            ['Pour chaque œuvre, complétez la <b>structure commune</b> :', ['identification ;', 'aspects formels ;', 'fonction et finalité d’origine ;', 'contexte historique et social ;', 'perspective de genre (si pertinent) ;', 'lien avec l’Andalousie ;', 'état de conservation et protection ;', 'lien avec aujourd’hui.']],
            'Répondez aux <b>cinq questions</b> de votre bloc.',
            'Cherchez dans des <b>sources fiables</b> (onglet Ressources). Si vous utilisez une IA, <b>notez le prompt</b> et vérifiez l’information.',
            'Ne copiez-collez pas : <b>sélectionnez</b> le plus surprenant. Ce sera la matière première du triptyque.'
          ],
          donde: 'En équipe, dans le document partagé.',
          entrega: 'Fichier « 1 Recherche » dans le dossier EPVA › Unité 1.'
        }, `<p class="ex-t"><b>Les six blocs et leurs questions</b></p>
          <details><summary>Bloc 1 · Art préhistorique</summary><ul><li>Quelle technique a été utilisée pour peindre (pigments, outils) ?</li><li>Quels animaux ou signes apparaissent et avec quelle fréquence ?</li><li>Quelles théories existent sur sa fonction (rituelle, magique, de communication) ?</li><li>Comment le site a-t-il été découvert et qui l’a étudié ?</li><li>Quelles mesures de conservation a-t-il (accès limité, répliques visitables) ?</li></ul></details>
          <details><summary>Bloc 2 · Antiquité (Égypte, Grèce, Rome)</summary><ul><li>Qui a fondé ou promu la construction et pourquoi (contexte politique et militaire) ?</li><li>Quelles techniques de construction romaines sont employées (arc, voûte, mosaïque) ?</li><li>Quelles activités sociales s’y déroulaient (spectacles, vie domestique, commerce) ?</li><li>Quels objets ou vestiges ont été trouvés et où sont-ils exposés aujourd’hui (musées) ?</li><li>Quel lien a-t-il avec d’autres villes romaines de la péninsule ?</li></ul></details>
          <details><summary>Bloc 3 · Moyen Âge : al-Andalus</summary><ul><li>Sous quel pouvoir politique a-t-il été construit (califal, nasride, almohade) ?</li><li>Quels éléments décoratifs sont caractéristiques (ataurique, épigraphie, géométrie) et pourquoi n’y a-t-il pas de figures humaines ni animales ?</li><li>Quel rôle jouent l’eau ou la lumière dans la conception ?</li><li>Quelles transformations a-t-il subies après la conquête chrétienne (ajouts, réutilisation) ?</li><li>Quelle reconnaissance internationale a-t-il (Patrimoine mondial UNESCO) ?</li></ul></details>
          <details><summary>Bloc 4 · Renaissance et Baroque andalous</summary><ul><li>Qui a commandé l’œuvre (Église, confrérie, noblesse) et dans quelle intention (Contre-Réforme) ?</li><li>Quelles ressources formelles l’artiste utilise-t-il pour émouvoir le spectateur (clair-obscur, geste, couleur) ?</li><li>Quelle différence y a-t-il entre le style de cet artiste et celui d’un contemporain ?</li><li>Y a-t-il des femmes artistes documentées à cette époque ? Pourquoi sont-elles si rares ?</li><li>Quel lien l’œuvre a-t-elle avec des traditions encore vivantes (par exemple, les processions) ?</li></ul></details>
          <details><summary>Bloc 5 · XIXe et XXe siècles : tradition et rupture</summary><ul><li>Quel mouvement artistique représente-t-il et avec quoi rompt-il par rapport à la tradition précédente ?</li><li>Quel lien l’artiste a-t-il avec l’Andalousie (naissance, formation, œuvre) ?</li><li>Quelles œuvres dialoguent explicitement avec l’art du passé ?</li><li>Comment le contexte historique (industrialisation, guerres, changements sociaux) a-t-il influencé son œuvre ?</li><li>Quelles femmes artistes de l’époque faudrait-il rendre visibles et pourquoi sont-elles moins connues ?</li></ul></details>
          <details><summary>Bloc 6 · Art contemporain et patrimoine vivant</summary><ul><li>De quel type d’expression s’agit-il (musée, festival, art urbain, patrimoine immatériel) ?</li><li>Qu’est-ce qui la relie, par la forme ou le thème, à l’art du passé ?</li><li>Qui la gère ou la protège aujourd’hui (institution, mairie, communauté) ?</li><li>Quel rôle joue-t-elle dans l’identité culturelle actuelle de sa ville ou de sa région ?</li><li>Comment les élèves y participent-ils ou pourraient-ils y participer (assister, visiter, créer) ?</li></ul></details>`],
        ['Proposition de triptyque à main levée', 'Esquisse', {
          cuaderno: false,
          obj: 'Planifier le triptyque avant de le concevoir : ce qui va sur chaque volet et dans quel ordre on le lit.',
          pasos: [
            'Pliez une feuille A4 à l’italienne en <b>trois parties</b>, en pli roulé.',
            'Repérez les <b>six volets</b> : couverture, rabat et quatrième de couverture à l’extérieur ; présentation, patrimoine et itinéraire à l’intérieur.',
            'Placez au crayon les <b>titres, textes et images</b> de chaque volet.',
            'Notez quelles informations et quelles photos de la recherche iront à chaque endroit.',
            'Vérifiez que l’<b>ordre de lecture</b> fonctionne une fois plié.',
            'Photographiez les <b>deux faces</b> de la feuille dépliée, nettes et complètes.'
          ],
          donde: 'Sur une feuille A4 pliée en trois parties.',
          entrega: 'Fichier « 2 Proposition de triptyque » dans le dossier EPVA › Unité 1.'
        }],
        ['Triptyque final', 'Conception', {
          cuaderno: false,
          obj: 'Concevoir sur Canva un triptyque clair et attrayant qui fait connaître le patrimoine étudié.',
          pasos: [
            'Ouvrez sur Canva un modèle de <b>triptyque A4 à l’italienne</b>.',
            'Mettez la proposition au propre et <b>corrigez</b> ce qui ne fonctionnait pas dans l’esquisse.',
            'Écrivez <b>vos propres textes</b>, courts et clairs, à partir de la recherche.',
            'Utilisez une <b>palette</b> de peu de couleurs et <b>deux typographies</b> au maximum.',
            'Indiquez comment chaque œuvre est <b>protégée et conservée</b> et des conseils de <b>visite responsable</b>.',
            'Citez les <b>sources</b> des textes et des images sur la quatrième de couverture.',
            'Téléchargez-le en <b>PDF</b>.'
          ],
          donde: 'Sur Canva.',
          entrega: 'Fichier « 3 Triptyque final » dans le dossier EPVA › Unité 1, et le lien du dossier dans le devoir Classroom.'
        }]
      ],
      cuadSi: '📒 Se fait dans le carnet d’artiste', cuadNo: 'Ne se fait pas dans le carnet d’artiste',
      cotejoT: 'Liste de contrôle : où en êtes-vous ?',
      cotejoP: 'Coche ce que tu as fait. Tes coches ne sont enregistrées que sur cet appareil.',
      grupos: [
        ['Recherche', ['Nous avons complété les huit points pour chaque œuvre.', 'Nous avons répondu aux cinq questions du bloc.', 'Nous avons utilisé des sources fiables et noté d’où vient chaque information.']],
        ['Proposition', ['Les six volets sont repérés et annotés.', 'L’ordre de lecture fonctionne une fois plié.', 'Nous avons photographié les deux faces de la feuille.']],
        ['Triptyque final et rendu', ['Textes personnels, palette définie et deux typographies maximum.', 'Il inclut conservation, visite responsable et sources.', 'Le dossier EPVA › Unité 1 contient les trois fichiers et le lien fonctionne.']]
      ],
      progreso: (n, t) => `${n} sur ${t}`, borrar: 'Effacer mes coches', confirmar: 'Sûr ? Appuie encore pour effacer.'
    },
    rub: {
      intro: 'Voici comment cette unité est évaluée. Chaque travail est évalué avec deux critères et chaque critère a trois indicateurs, notés de 1 à 10. La note de chaque critère est la moyenne de ses trois indicateurs.',
      criteriosT: 'Critères d’évaluation',
      criterios: [
        ['1.1', 'Reconnaître les facteurs historiques et sociaux qui entourent les productions plastiques, visuelles et audiovisuelles les plus importantes, ainsi que leur fonction et leur finalité, en décrivant leurs particularités et leur rôle de transmission de valeurs et de convictions, avec intérêt et respect, dans une perspective de genre.'],
        ['6.1', 'Expliquer leur appartenance à un contexte culturel précis, en particulier andalou, par l’analyse des aspects formels et des facteurs sociaux qui déterminent diverses productions culturelles et artistiques actuelles.'],
        ['5.2', 'Réaliser différents types de productions artistiques individuelles ou collectives, en justifiant le processus créatif, en montrant de l’initiative et de la confiance en soi, en intégrant raison, empathie et sensibilité, et en choisissant les techniques et supports adaptés au but.'],
        ['8.3', 'Présenter le processus d’élaboration et le résultat final de productions artistiques, réalisées seul ou en groupe, en reconnaissant les erreurs, en cherchant les solutions et stratégies les plus adaptées pour les améliorer, et en valorisant les occasions de développement personnel qu’elles offrent.'],
        ['8.2', 'Développer des productions artistiques avec une intention préalable, seul ou en groupe, en organisant et en menant les différentes étapes et en tenant compte des caractéristiques du public visé.'],
        ['1.2', 'Valoriser l’importance de la conservation, de la préservation et de la diffusion du patrimoine culturel et artistique par la connaissance et l’analyse guidée d’œuvres d’art.']
      ],
      niveles: ['Insuffisant (1–4)', 'Suffisant (5–6)', 'Bien (7–8)', 'Excellent (9–10)'],
      criterio: 'Critère',
      bloques: [
        ['Activité 1. Recherche', [
          ['IL 1.1.1', 'Fonction et finalité', '1.1', 'Indique pourquoi chaque œuvre a été faite (religieuse, politique, funéraire, domestique…).', ['N’indique pas pourquoi les œuvres ont été faites.', 'Indique la fonction de quelques œuvres seulement ou d’un seul mot, sans l’expliquer.', 'Indique pourquoi la plupart des œuvres ont été faites, avec une brève explication.', 'Explique pourquoi chaque œuvre a été faite et qui l’utilisait.']],
          ['IL 1.1.2', 'Contexte historique et social', '1.1', 'Indique quelle société a produit chaque œuvre et quel pouvoir ou quelles croyances elle reflétait.', ['N’indique pas le contexte.', 'Indique seulement l’époque ou la civilisation.', 'Indique la société pour la plupart des œuvres et mentionne le pouvoir ou les croyances pour certaines.', 'Indique quelle société a fait chaque œuvre et quel pouvoir ou quelles croyances elle reflétait.']],
          ['IL 1.1.3', 'Perspective de genre', '1.1', 'Indique s’il y a des femmes autrices ou représentées.', ['Ne dit rien sur la présence des femmes.', 'Le mentionne dans une phrase générale ou pour une seule œuvre.', 'Indique si des femmes apparaissent comme autrices ou représentées.', 'L’indique et explique pourquoi avec une idée personnelle.']],
          ['IL 6.1.1', 'Identification et aspects formels', '6.1', 'Nom, lieu, époque et auteur ; matériaux, technique, couleur ou décoration.', ['N’identifie ni ne décrit les œuvres.', 'Seulement nom et lieu, ou descriptions générales.', 'Identifie la plupart et décrit quelques matériaux ou techniques.', 'Identifie chaque œuvre et décrit matériaux, technique et décoration.']],
          ['IL 6.1.2', 'Andalousie, conservation et actualité', '6.1', 'Lien avec l’Andalousie, protection et conservation, et lien avec aujourd’hui.', ['Ne le traite pas.', 'Dit seulement où elle se trouve ou que c’est du « patrimoine ».', 'Explique le lien avec l’Andalousie et la protection, mais à peine l’actualité.', 'Explique ce qui la rend unique, sa protection et son lien avec aujourd’hui.']],
          ['IL 6.1.3', 'Questions du bloc', '6.1', 'Répond aux cinq questions propres au bloc.', ['Ne répond pas aux questions.', 'Répond à une ou deux, ou à toutes par des phrases isolées.', 'Répond à trois ou quatre, ou aux cinq très brièvement.', 'Répond aux cinq avec des données concrètes.']]]],
        ['Activité 2. Proposition à main levée', [
          ['IL 5.2.1', 'Les six volets', '5.2', 'Organise les six volets selon leur fonction, en tenant compte du pliage.', ['N’organise pas les volets.', 'Organisation confuse : volets manquants ou pliage non respecté.', 'Organise bien les volets, avec une erreur d’ordre.', 'Les six volets ont une fonction claire et l’ordre fonctionne une fois plié.']],
          ['IL 5.2.2', 'Composition', '5.2', 'Répartit textes et images avec équilibre, proportion et hiérarchie visuelle.', ['Éléments placés au hasard.', 'Répartition peu réfléchie ; hiérarchie peu claire.', 'Composition correcte avec un déséquilibre.', 'Composition équilibrée et hiérarchie claire sur tous les volets.']],
          ['IL 5.2.3', 'Sélection de l’information', '5.2', 'Sélectionne dans la recherche les informations et les photos nécessaires.', ['Ne sélectionne ni information ni image.', 'Sélection maigre ou peu liée.', 'Sélection adaptée.', 'Sélection précise et bien pensée.']],
          ['IL 8.3.1', 'Rendu ordonné', '8.3', 'Dossier EPVA › Unité 1 avec les trois fichiers bien nommés et un lien accessible.', ['Plusieurs fichiers manquent ou le lien ne donne pas accès.', 'Un fichier manque ou la structure n’est pas celle demandée.', 'Correct, avec un fichier mal nommé.', 'Dossier correct, fichiers bien nommés et lien qui fonctionne.']],
          ['IL 8.3.2', 'Processus visible', '8.3', 'La proposition montre le processus : volets repérés et annotations.', ['Le processus n’apparaît pas.', 'Peu d’annotations.', 'Volets repérés, annotations incomplètes.', 'Les six volets repérés et clairement annotés.']],
          ['IL 8.3.3', 'De l’esquisse au final', '8.3', 'De l’esquisse au triptyque final, corrige les erreurs et améliore les solutions.', ['Pas d’évolution.', 'Peu d’améliorations.', 'Améliore la plupart des aspects.', 'Améliore nettement la proposition et corrige ses erreurs.']]]],
        ['Activité 3. Triptyque final', [
          ['IL 8.2.1', 'Pensé pour le public', '8.2', 'Message clair, attrayant et compréhensible pour quelqu’un qui veut voyager.', ['Ne tient pas compte du public.', 'Textes longs ou difficiles.', 'Message clair, peu attrayant sur un volet.', 'Clair et attrayant sur tous les volets.']],
          ['IL 8.2.2', 'Couleur, typographie et image', '8.2', 'Palette définie, deux typographies maximum et bon contraste.', ['Sans critère.', 'Trop de typographies ou de couleurs ; contraste faible.', 'Correct, avec une incohérence.', 'Cohérent, expressif et lisible.']],
          ['IL 8.2.3', 'Hiérarchie et ordre de lecture', '8.2', 'L’important ressort et le triptyque fonctionne une fois plié.', ['Ne fonctionne pas plié.', 'Hiérarchie peu claire ou volets mal placés.', 'Correct, avec une erreur d’ordre.', 'Hiérarchie claire et ordre correct sur les six volets.']],
          ['IL 1.2.1', 'Information rigoureuse', '1.2', 'Fait connaître les œuvres avec des textes personnels basés sur la recherche.', ['Information fausse ou copiée.', 'Information maigre ou en partie copiée.', 'Correcte, avec un texte peu travaillé.', 'Textes personnels, rigoureux et synthétiques.']],
          ['IL 1.2.2', 'Conservation et visite responsable', '1.2', 'Indique comment les œuvres sont protégées et conservées et donne des conseils de visite responsable.', ['Ne l’inclut pas.', 'Le mentionne très brièvement.', 'Inclut la protection, sans conseils de visite.', 'Inclut protection, conservation et visite responsable.']],
          ['IL 1.2.3', 'Sources', '1.2', 'Cite les sources des textes et des images.', ['Ne cite aucune source.', 'En cite peu.', 'Cite la plupart.', 'Les cite toutes.']]]]
      ]
    }
  };
})();
