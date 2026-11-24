/* INSERT ART · PEPA 2 · Niveau 02 · Estampes d’hiver · FRANÇAIS */
(function () {
  window.PEPA2N2 = window.PEPA2N2 || {};
  window.PEPA2N2.fr = {
    t: {
      'HOLA': 'JOIE', 'Matriz': 'Matrice', 'Dibujo en espejo': 'Dessin en miroir', 'Entintar': 'Encrer', 'Capa fina': 'Couche fine',
      'Presionar': 'Presser', 'Rodillo o cuchara': 'Rouleau ou cuillère', 'Estampa': 'Estampe', 'Sale al derecho': 'Elle sort à l’endroit',
      'El proceso de estampar: matriz, entintado, presión con el rodillo y estampa invertida': 'Le processus d’impression : matrice, encrage, pression au rouleau et estampe inversée',
      'Directo': 'Direct', 'Aditivo': 'Additif', 'Sustractivo': 'Soustractif',
      'Tres procedimientos de estampación vistos de perfil: directo, aditivo y sustractivo': 'Trois procédés d’impression vus de profil : direct, additif et soustractif',
      'Museo del Prado': 'Musée du Prado',
      'Busca «Caprichos» o «Desastres de la guerra»: los grabados de Goya en alta resolución.': 'Cherche « Caprichos » ou « Désastres de la guerre » : les gravures de Goya en haute résolution.',
      'Biblioteca Digital Hispánica': 'Bibliothèque numérique hispanique',
      'Grabados, estampas y carteles antiguos de la Biblioteca Nacional de España.': 'Gravures, estampes et affiches anciennes de la Bibliothèque nationale d’Espagne.',
      'Museo Picasso Málaga': 'Musée Picasso Málaga',
      'Picasso, malagueño, hizo más de dos mil grabados. Aquí puedes ver su obra.': 'Picasso, né à Málaga, a réalisé plus de deux mille gravures. Découvre son œuvre ici.',
      'Real Academia de Bellas Artes de San Fernando': 'Académie royale des beaux-arts de San Fernando',
      'Guarda la Calcografía Nacional, con las planchas originales de Goya.': 'Elle conserve la Chalcographie nationale, avec les plaques originales de Goya.',
      'Busca Durero, Rembrandt, Piranesi o Toulouse-Lautrec y amplía sus estampas.': 'Cherche Dürer, Rembrandt, Piranèse ou Toulouse-Lautrec et zoome sur leurs estampes.'
    },
    ui: {
      indice: 'Sommaire', tocAria: 'Sommaire de la théorie', cuadernoLabel: 'Dans ton carnet d’artiste :', misionK: 'MISSION',
      diasIntro: 'La théorie est répartie sur <b>cinq jours</b>. Chaque jour, elle est lue ou expliquée en classe en <b>15 minutes maximum</b> et te prépare à une activité. Les vidéos « Pour aller plus loin » sont pour la maison : elles ne comptent pas dans ces 15 minutes.',
      diaK: 'JOUR', minutos: '15 min', prepara: 'Te prépare à', actK: 'Activité',
      dias: ['Qu’est-ce qu’imprimer', 'La trace du geste', 'Le monotype', 'Matrice et tirage', 'De l’idée à l’exposition'],
      saberK: 'Savoir de base', verMas: 'Pour aller plus loin (à la maison)', abreYT: 'S’ouvre sur YouTube',
      subt: 'Les vidéos sont en espagnol. Sur YouTube, tu peux activer les sous-titres et les traduire automatiquement dans ta langue.',
      videosT: 'Vidéos de l’unité', videosP: 'Toutes les vidéos de la théorie, classées par jour. Elles s’ouvrent sur YouTube.',
      enlacesT: 'Où voir des gravures',
      recIntro: '<b>Matériel de l’atelier :</b> gouache, pinceaux (un vieux pinceau sec convient), éponge, <b>rouleau à pâtisserie</b> et dos de cuillère pour presser, pochette plastique ou feuille d’acétate, papier et carton. Chaque élève apporte <b>une barquette en polystyrène propre</b> (de fruits ou de légumes) et de vieux journaux pour protéger la table. Si les rouleaux en mousse arrivent, on s’en servira pour encrer.'
    },
    sec: {
      estampar: ['Imprimer : les mots de l’atelier', h => `
        <p class="def"><b>Imprimer</b>, c’est transférer une image d’une surface à une autre en pressant. La surface qui porte l’image est la <b>matrice</b> ; ce qui apparaît sur le papier est l’<b>estampe</b>.</p>
        ${h.fig('estampa')}
        <ul class="cual cual5">
          <li><b>Matrice</b><span>La plaque que tu encres : bois, métal, linoléum, polystyrène, plastique…</span></li>
          <li><b>Estampe</b><span>L’image imprimée sur le papier.</span></li>
          <li><b>Épreuve</b><span>Une estampe d’essai pour voir où tu en es.</span></li>
          <li><b>Tirage</b><span>L’ensemble des estampes identiques tirées d’une matrice.</span></li>
          <li><b>Signature et numéro</b><span>Sous chaque estampe, au crayon : 2/5 est la deuxième d’un tirage de cinq.</span></li>
        </ul>
        <p class="ojo"><b>L’estampe sort à l’envers par rapport à la matrice</b>, comme dans un miroir. Si tu écris un mot, écris-le à l’envers sur la matrice.</p>`],
      historia: ['La gravure dans l’histoire', h => `
        <p>Pendant des siècles, la gravure a permis de faire connaître une image à beaucoup de monde : une matrice donne de nombreuses copies. Observe la technique de chaque artiste.</p>
        <ul class="cual cual3">
          <li><b>Dürer (XVIe s.)</b><span>Allemagne. <strong>Gravure sur bois</strong> : il taille le bois et laisse en relief ce qui imprime. Son <i>Rhinocéros</i> (1515) a été dessiné sans en avoir jamais vu un.</span></li>
          <li><b>Mantegna (XVe-XVIe s.)</b><span>Italie. Gravures sur <strong>métal</strong> avec des lignes parallèles qui donnent du volume.</span></li>
          <li><b>Rembrandt (XVIIe s.)</b><span>Pays-Bas. <strong>Eau-forte</strong> : l’acide « mord » la ligne dans le métal. Maître de l’ombre et de la lumière.</span></li>
          <li><b>Piranèse (XVIIIe s.)</b><span>Italie. Les <i>Prisons</i> : des architectures imaginaires, immenses et sombres.</span></li>
          <li><b>Goya (XVIIIe-XIXe s.)</b><span>Espagne. <i>Les Caprices</i> : eau-forte et <strong>aquatinte</strong> (taches de gris) pour critiquer les vices de son époque.</span></li>
          <li><b>Toulouse-Lautrec (XIXe s.)</b><span>France. <strong>Lithographie</strong> en couleurs : les affiches des cabarets de Paris. L’estampe descend dans la rue.</span></li>
          <li><b>Matisse (XXe s.)</b><span>France. Linogravures aux lignes blanches sur fond noir : peu de lignes, beaucoup d’expression.</span></li>
          <li><b>Picasso (XXe s.)</b><span>Né à <strong>Málaga</strong>. Linogravure à <strong>plaque perdue</strong> : il taille et imprime la même plaque couleur après couleur.</span></li>
          <li><b>Miró (XXe s.)</b><span>Barcelone. Estampes de taches, de signes et de couleurs en aplat, presque comme un jeu.</span></li>
        </ul>
        ${h.cuaderno('colle ou dessine une petite version de l’œuvre choisie et note l’artiste, le siècle, la technique et ce qui t’attire le plus.')}`],
      hoy: ['Imprimer aujourd’hui : c’est partout', h => `
        <p>Ce que faisaient Dürer ou Toulouse-Lautrec n’a pas disparu : cela a changé de place.</p>
        <ul class="cards3">
          <li><b>Sur les vêtements</b><span>Les tee-shirts et les sacs en tissu sont imprimés en sérigraphie, une technique au pochoir.</span></li>
          <li><b>Sur le papier</b><span>Tampons, papier cadeau, affiches de concerts et couvertures de livres.</span></li>
          <li><b>Dans l’art actuel</b><span>Ateliers de gravure, fanzines et artistes qui mêlent estampe et peinture.</span></li>
        </ul>
        <p class="tip"><b>Hier et aujourd’hui :</b> dans ta fiche, trouve un usage actuel qui ressemble à l’œuvre ancienne analysée. Qu’est-ce qui a changé et qu’est-ce qui reste pareil ?</p>`],
      gesto: ['Le geste et l’outil', h => `
        <p class="def">Chaque outil laisse une <b>trace</b> différente, et le même outil change selon ton <b>geste</b> : rapide ou lent, fort ou doux, en traînant ou en tamponnant.</p>
        <ul class="cual cual3">
          <li><b>Doigt</b><span>Points, taches et traînées directes.</span></li>
          <li><b>Pinceau sec</b><span>Peu de peinture : il laisse la texture des poils, comme de l’herbe ou des cheveux.</span></li>
          <li><b>Éponge</b><span>En tamponnant : une texture poreuse, comme la pierre ou le brouillard.</span></li>
          <li><b>Tranche de carton</b><span>Traînée ou tamponnée : lignes droites et aplats nets.</span></li>
          <li><b>Peigne ou fourchette</b><span>Lignes parallèles, vagues et trames.</span></li>
          <li><b>Feuilles et objets</b><span>Encrés et pressés : ils laissent leur forme et leur texture.</span></li>
        </ul>
        <ul class="cards3">
          <li><b>Qualités plastiques</b><span>Ce qu’a la trace : épaisseur, texture, transparence ou densité.</span></li>
          <li><b>Effet visuel</b><span>Ce qu’elle évoque : mouvement, calme, froid, vent, neige…</span></li>
          <li><b>Références</b><span>Miró remplissait ses œuvres de signes faits de gestes rapides. Dürer, de lignes taillées une à une.</span></li>
        </ul>`],
      tecnicas: ['Techniques sèches et humides, et leur support', h => `
        <div class="lectura">
          <div><h3>Techniques sèches</h3><ul><li><b>Crayon graphite</b> : lignes et dégradés.</li><li><b>Crayons de couleur</b> : couleur par couches.</li><li><b>Fusain</b> : noirs intenses, il s’estompe.</li><li><b>Pastel</b> : couleur opaque et poudreuse.</li></ul><p>Le fusain et le pastel salissent : on les protège avec du <b>fixatif</b> (ou de la laque, toujours loin du visage et dans une pièce aérée).</p></div>
          <div><h3>Techniques humides</h3><ul><li><b>Encre et feutre</b> : ligne nette et noire.</li><li><b>Aquarelle</b> : transparente ; le blanc, c’est le papier.</li><li><b>Gouache</b> : opaque, couvrante, elle sèche vite.</li><li><b>Acrylique</b> : opaque ; une fois sèche, elle ne se dissout plus dans l’eau.</li></ul></div>
        </div>
        <h3 class="sub">Chaque technique demande son support</h3>
        <ul class="cual">
          <li><b>Papier fin</b><span>Crayon et feutre. Il gondole avec l’eau.</span></li>
          <li><b>Papier à dessin épais</b><span>Gouache et aquarelle : il supporte l’eau sans se déchirer.</span></li>
          <li><b>Carton</b><span>Gouache, estampes et la carte de vœux finale.</span></li>
          <li><b>Plastique ou acétate</b><span>Il n’absorbe pas : parfait comme plaque de monotype.</span></li>
        </ul>
        ${h.cuaderno('colle chaque essai du laboratoire et écris à côté l’outil, le geste et l’effet obtenu.')}`],
      monotipia: ['Le monotype : une estampe unique', h => `
        <p class="def"><b>Monotype</b> : tu peins sur une surface lisse qui n’absorbe pas (plastique, acétate, verre) et tu presses une feuille par-dessus. Il ne sort qu’<b>une seule bonne estampe</b> : d’où son nom.</p>
        <ul class="cards3">
          <li><b>Direct</b><span>Tu peins le dessin sur le plastique au pinceau, au doigt ou à l’éponge, puis tu imprimes.</span></li>
          <li><b>Soustractif</b><span>Tu couvres le plastique de gouache et tu <strong>enlèves</strong> de la peinture avec un bâtonnet, un coton-tige ou le doigt. Ce que tu enlèves sort blanc.</span></li>
          <li><b>Mixte</b><span>Tu combines les deux : enlever et ajouter sur la même plaque.</span></li>
        </ul>
        <ol class="pasos3"><li><b>Peins vite</b>La gouache sèche très vite. Travaille une petite zone.</li><li><b>Presse</b>Papier dessus, puis passe la main, la cuillère ou le rouleau à pâtisserie.</li><li><b>Soulève</b>Décolle le papier par un coin, sans le faire glisser.</li></ol>
        <p class="tip"><b>Si elle sort sèche ou en taches</b>, la peinture était trop sèche ; <b>si elle bave</b>, il y en avait trop. La deuxième estampe tirée de la même plaque, plus pâle, s’appelle un <b>fantôme</b>.</p>`],
      procedimientos: ['Direct, additif et soustractif', h => `
        <p>Les techniques d’impression se classent selon la façon de faire la matrice :</p>
        ${h.fig('proced')}
        <ul class="cual cual3">
          <li><b>Direct</b><span>Tu peins sur la plaque et tu imprimes : le monotype.</span></li>
          <li><b>Additif</b><span>Tu colles des matériaux sur un carton (ficelle, tissu, feuilles, découpages) : la <strong>collagraphie</strong>. Ce qui dépasse imprime.</span></li>
          <li><b>Soustractif</b><span>Tu enlèves ou tu creuses la matière : gravure sur bois, linogravure et ta <strong>barquette en polystyrène</strong>.</span></li>
        </ul>
        <h3 class="sub">Ta matrice en polystyrène</h3>
        <ol class="pasos3"><li><b>Découpe</b>Coupe les bords de la barquette pour obtenir une plaque plate.</li><li><b>Dessine en creusant</b>Appuie avec un crayon pas trop pointu : chaque sillon restera <b>blanc</b>.</li><li><b>Encre</b>Gouache en couche fine, à l’éponge en tamponnant ou au pinceau plat. Trop de peinture remplit les sillons.</li></ol>
        <p class="ojo"><b>Sécurité et hygiène :</b> pas de cutter ; un crayon et des ciseaux suffisent. Apporte la barquette lavée et sèche, de préférence de fruits ou de légumes.</p>`],
      tirada: ['Épreuve, tirage, signature et numérotation', h => `
        <ul class="cual">
          <li><b>1 · Épreuve</b><span>Tire une première estampe sur du papier ordinaire. Corrige la matrice si besoin.</span></li>
          <li><b>2 · Pression</b><span>Papier sur la matrice encrée, une feuille propre par-dessus, puis passe le <strong>rouleau à pâtisserie</strong> avec force dans un sens puis dans l’autre.</span></li>
          <li><b>3 · Tirage</b><span>Recommence 3 à 5 fois, en encrant pareil à chaque fois pour que les estampes se ressemblent.</span></li>
          <li><b>4 · Signature</b><span>Une fois sèches, au crayon dans la marge : numéro à gauche, signature à droite.</span></li>
        </ul>
        <p class="tip"><b>Pas de rouleau ?</b> Le dos d’une cuillère, en petits cercles, presse bien aussi.</p>
        <p class="ojo"><b>Nettoyage :</b> la gouache part à l’eau. Lave la matrice tout de suite si tu vas l’encrer d’une autre couleur.</p>
        ${h.cuaderno('colle ta meilleure épreuve et note ce que tu as corrigé entre la première et la dernière estampe.')}`],
      proceso: ['Le processus de création', h => `
        <ol class="fases-n2">
          <li><b>Objectif</b><span>Que veux-je faire ressentir à la personne qui recevra la carte ?</span><em>Activité 4</em></li>
          <li><b>Information</b><span>Références : les artistes du jour 1 et tes essais du laboratoire.</span><em>Activités 1 et 2</em></li>
          <li><b>Croquis</b><span>Trois idées rapides dans le carnet. Choisis-en une.</span><em>Activité 4</em></li>
          <li><b>Projet</b><span>Technique, couleurs, texte (en miroir !) et format.</span><em>Activité 4</em></li>
          <li><b>Réalisation</b><span>Matrice, épreuve et estampe finale sur carton.</span><em>Activité 4</em></li>
          <li><b>Présentation</b><span>La carte de vœux, exposée.</span><em>Activité 4</em></li>
          <li><b>Évaluation</b><span>Autoréflexion, autoévaluation et évaluation entre camarades.</span><em>Activité 4</em></li>
        </ol>
        <p class="tip"><b>Une carte de vœux se lit en un coup d’œil :</b> une image claire, peu de couleurs et un texte court.</p>`],
      exponer: ['Présenter et évaluer ton travail', h => `
        <p>En présentant ta carte, explique en une minute :</p>
        <ul class="cards3">
          <li><b>Ce que je voulais dire</b><span>L’idée et à qui elle s’adresse.</span></li>
          <li><b>Comment je l’ai faite</b><span>La technique, les épreuves et ce que j’ai dû corriger.</span></li>
          <li><b>Ce que j’ai réussi</b><span>Ce qui m’a le mieux réussi et ce que je changerais.</span></li>
        </ul>
        <p class="ojo"><b>Pour évaluer le travail des autres :</b> commence par quelque chose qui fonctionne et donne une idée concrète pour améliorer. Parle de l’œuvre, pas de la personne.</p>
        ${h.cuaderno('écris ton autoévaluation avec les trois questions ci-dessus et donne-toi une note avec la grille.')}`]
    },
    mision: {
      titulo: 'Estampes d’hiver',
      reto: 'Dürer, Goya et Picasso ont multiplié leurs images grâce à une matrice. À toi de jouer : expérimente les traces et les techniques d’impression et crée la <b>carte de vœux d’hiver du collège</b>, une estampe à toi qui sera exposée dans l’établissement.',
      fasesT: 'Comment jouer',
      fases: [
        ['Enquête', 'Une gravure historique : qui, quand, comment et quel rapport avec aujourd’hui.'],
        ['Expérimente', 'Le laboratoire des traces : gestes, outils et techniques.'],
        ['Imprime', 'Monotype et matrice en polystyrène, avec ton tirage signé et numéroté.'],
        ['Souhaite', 'Ta carte de vœux imprimée, exposée et évaluée.']
      ],
      entregasT: 'Ce que tu dois rendre',
      entregas: [
        'Le <b>carnet d’artiste</b> avec la fiche de la gravure, les essais du laboratoire, la meilleure épreuve de l’atelier, les croquis et l’autoévaluation.',
        'Le <b>tirage</b> de l’atelier d’impression (3 à 5 estampes signées et numérotées).',
        'La <b>carte de vœux</b> sur carton, pour l’exposition.'
      ],
      pista: 'Les meilleures estampes naissent de nombreux essais. Se salir fait partie du jeu.'
    },
    act: {
      intro: 'Quatre activités qui vont de regarder à créer. Chacune indique si elle se fait dans le carnet d’artiste et ce qu’il faut rendre.',
      acts: [
        ['Détectives de la gravure', 'Enquêter', {
          cuaderno: true,
          obj: 'Analyser une gravure historique et la comparer avec un usage actuel de l’impression.',
          pasos: [
            'Regarde la liste des artistes du <b>jour 1</b> et choisis-en un (ou celui que t’attribue le professeur).',
            'Cherche une de ses estampes sur les sites de l’onglet <b>Ressources</b>.',
            ['Fais sa <b>fiche</b> dans le carnet d’artiste :', ['artiste, siècle et pays ;', 'titre de l’œuvre ;', 'technique de gravure (bois, eau-forte, aquatinte, lithographie, linogravure…) ;', 'ce qu’on voit : personnages, lignes, ombres et lumières ;', 'ce que l’œuvre voulait dire selon toi.']],
            'Dessine une petite version de l’œuvre ou colle une copie imprimée.',
            'Cherche un <b>usage actuel</b> de l’impression (tee-shirt, tampon, affiche, livre…) et écris en quoi il ressemble et en quoi il diffère.',
            'Si tu ne finis pas en classe, termine la fiche à la maison.'
          ],
          donde: 'Dans le carnet d’artiste.',
          entrega: 'La fiche dans le carnet d’artiste, vérifiée par le professeur.'
        }],
        ['Laboratoire des traces', 'Expérimenter', {
          cuaderno: true,
          obj: 'Explorer la trace laissée par chaque geste et chaque outil, et quelle technique et quel support conviennent à chaque effet.',
          pasos: [
            'Divise une page du carnet (ou une feuille épaisse que tu colleras ensuite) en <b>9 cases</b>.',
            ['Remplis six cases à la gouache, chacune avec un outil :', ['doigt ;', 'pinceau sec ;', 'éponge ;', 'tranche de carton ;', 'peigne ou fourchette ;', 'une feuille d’arbre encrée et pressée.']],
            'Dans les trois cases restantes, essaie des <b>techniques sèches</b> (crayon, crayons de couleur) et <b>humides</b> (feutre) de ta trousse, seules ou sur la gouache sèche.',
            'Essaie le <b>même outil avec deux gestes</b> différents : rapide et lent, doux et fort.',
            'À côté de chaque case, écris l’outil, le geste et l’<b>effet</b> obtenu (neige, vent, écorce…).',
            'Indique quelle trace ressemble à celle d’un artiste du jour 1 et explique pourquoi.'
          ],
          donde: 'Dans le carnet d’artiste, avec de la gouache et le matériel de ta trousse.',
          entrega: 'Les neuf cases commentées dans le carnet.'
        }],
        ['Atelier d’impression', 'Imprimer', {
          cuaderno: true,
          obj: 'Imprimer en monotype et avec une matrice en polystyrène, en choisissant l’outil et le geste selon l’effet recherché.',
          pasos: [
            ['<b>Monotype direct</b> :', ['peins un paysage d’hiver à la gouache sur la pochette plastique ;', 'pose le papier dessus et presse avec la main ou le rouleau à pâtisserie ;', 'soulève le papier par un coin.']],
            ['<b>Monotype soustractif</b> :', ['couvre le plastique de gouache foncée ;', 'dessine en enlevant de la peinture avec un bâtonnet, un coton-tige ou le doigt ;', 'imprime. Ce que tu as enlevé sortira blanc, comme de la neige ou de la lumière.']],
            ['<b>Matrice en polystyrène</b> :', ['découpe les bords de ta barquette ;', 'dessine en creusant avec le crayon (si tu écris, à l’envers !) ;', 'encre en couche fine à l’éponge ou au pinceau ;', 'tire une épreuve et corrige.']],
            '<b>Tirage :</b> tire 3 à 5 estampes avec la matrice en polystyrène, en pressant avec le <b>rouleau à pâtisserie</b>.',
            'Une fois sèches, <b>signe-les et numérote-les</b> au crayon (1/5, 2/5…).',
            'Colle dans le carnet ton meilleur monotype et ta meilleure épreuve, et note ce que tu as changé pour t’améliorer.'
          ],
          donde: 'Dans la salle d’arts plastiques. Les épreuves sont collées dans le carnet d’artiste ; le tirage se fait sur papier à part.',
          entrega: 'Le tirage signé et numéroté, au professeur, et les épreuves collées dans le carnet.'
        }],
        ['La carte de vœux du collège', 'Créer et exposer', {
          cuaderno: true,
          obj: 'Créer une carte de vœux d’hiver imprimée, expliquer comment elle a été faite et évaluer le processus.',
          pasos: [
            'Pense à qui elle s’adresse et à ce que tu veux faire ressentir : joie, calme, froid, lumière, vivre-ensemble…',
            'Fais <b>trois croquis</b> rapides dans le carnet. Choisis-en un et note la technique, les couleurs et le texte.',
            'Si elle a un texte, écris-le <b>en miroir</b> sur la matrice.',
            'Prépare la matrice (polystyrène, monotype ou les deux combinés) et tire une épreuve.',
            'Imprime la version finale sur <b>carton</b>, au format indiqué par le professeur.',
            'Signe-la au crayon dans la marge.',
            'Présente ta carte à la classe en une minute : ce que tu voulais dire, comment tu l’as faite et ce que tu changerais.',
            'Écris ton <b>autoévaluation</b> dans le carnet avec la grille de cette unité.'
          ],
          donde: 'Croquis et autoévaluation dans le carnet d’artiste ; la carte de vœux, sur carton.',
          entrega: 'La carte de vœux, pour l’exposition du collège, et le carnet avec les croquis et l’autoévaluation.'
        }]
      ],
      cuadSi: '📒 Se fait dans le carnet d’artiste', cuadNo: 'Ne se fait pas dans le carnet d’artiste',
      cotejoT: 'Liste de contrôle : où en es-tu ?',
      cotejoP: 'Coche ce que tu as fait. Tes coches sont enregistrées uniquement sur cet appareil.',
      grupos: [
        ['Détectives de la gravure', ['La fiche a l’artiste, le siècle, la technique et ce qu’on voit.', 'J’ai comparé l’œuvre avec un usage actuel.']],
        ['Laboratoire des traces', ['J’ai neuf cases avec leur outil, leur geste et leur effet.', 'J’ai essayé des techniques sèches et humides.']],
        ['Atelier d’impression', ['J’ai fait un monotype direct et un soustractif.', 'Ma matrice a le texte en miroir (s’il y a du texte).', 'Mon tirage est signé et numéroté.']],
        ['Carte de vœux', ['J’ai trois croquis et j’en ai choisi un.', 'La carte est imprimée sur carton et signée.', 'J’ai écrit mon autoévaluation.']]
      ],
      progreso: (n, t) => `${n} sur ${t}`, borrar: 'Effacer mes coches', confirmar: 'Sûr ? Appuie encore pour effacer.'
    },
    rub: {
      intro: 'Voici comment cette unité est évaluée. Chaque indicateur est noté de 1 à 10. La note de chaque critère est la moyenne de ses indicateurs.',
      criteriosT: 'Critères d’évaluation',
      criterios: [
        ['1.1', 'Analyser des manifestations artistiques de différentes époques et cultures, en les contextualisant, en décrivant leurs aspects essentiels, en valorisant le processus de création du résultat final, et en faisant preuve d’ouverture, d’intérêt et de respect dans leur réception.'],
        ['1.2', 'Évaluer de manière critique les habitudes, les goûts et les références artistiques de différentes époques et cultures, en réfléchissant à leur évolution et à leur relation avec ceux du présent.'],
        ['2.1', 'Participer, avec initiative, confiance et créativité, à l’exploration de différentes techniques graphiques et plastiques, en utilisant des outils, des médiums, des supports et des langages.'],
        ['2.2', 'Élaborer des productions graphiques et plastiques de façon créative, en déterminant les intentions expressives et en choisissant correctement les outils, médiums, supports et langages les plus adaptés parmi son répertoire personnel de ressources.'],
        ['4.2', 'Exposer le résultat final de la création d’un produit artistique, individuel ou collectif, en mettant en commun et en évaluant de manière critique le déroulement de son élaboration, les difficultés rencontrées, les processus réalisés et les réussites obtenues.']
      ],
      niveles: ['Insuffisant (1–4)', 'Passable (5)', 'Assez bien (6)', 'Bien (7–8)', 'Très bien (9–10)'],
      criterio: 'Critère',
      bloques: [
        ['Activité 1. Détectives de la gravure', [
          ['IL 1.1.1', 'Contexte de l’œuvre', '1.1', 'Situe l’estampe : artiste, siècle, pays et technique de gravure.', ['Ne situe pas l’œuvre.', 'Donne une ou deux informations.', 'Artiste et siècle corrects ; technique absente ou erronée.', 'Artiste, siècle, pays et technique corrects.', 'Tout est correct et explique en quoi consiste la technique.']],
          ['IL 1.1.2', 'Description et processus', '1.1', 'Décrit ce qu’on voit et comment l’œuvre a été faite, avec intérêt et respect.', ['Ne décrit pas l’œuvre.', 'Description d’une phrase.', 'Décrit les personnages et un aspect de la technique.', 'Décrit personnages, lignes et lumières, et comment elle a été faite.', 'Description précise avec le vocabulaire de l’atelier et une opinion respectueuse.']],
          ['IL 1.2.1', 'Hier et aujourd’hui', '1.2', 'Compare l’œuvre avec un usage actuel de l’impression et réfléchit à ce qui a changé.', ['Ne compare pas.', 'Cite un usage actuel sans comparer.', 'Relève une ressemblance ou une différence.', 'Relève ressemblances et différences.', 'Compare avec discernement et explique pourquoi cela a changé.']]]],
        ['Activité 2. Laboratoire des traces', [
          ['IL 2.1.1', 'Geste et outil', '2.1', 'Explore avec initiative plusieurs outils et gestes à la gouache.', ['N’expérimente pas.', 'Moins de quatre cases ou toutes pareilles.', 'Six cases avec des outils différents.', 'Six cases et le même outil avec deux gestes.', 'Exploration variée et créative qui va au-delà de la consigne.']],
          ['IL 2.1.2', 'Techniques et supports', '2.1', 'Essaie des techniques sèches et humides et choisit le support adapté.', ['Ne les essaie pas.', 'Essaie une seule technique.', 'Essaie des techniques sèches et humides.', 'Essaie sèches et humides et explique quel support convient.', 'Combine les techniques et justifie le support de chacune.']],
          ['IL 1.2.2', 'Références', '1.2', 'Relie une de ses traces à celle d’un artiste et l’explique.', ['Ne fait aucun lien.', 'Cite un artiste sans expliquer.', 'Relie une trace à un artiste.', 'Relie et explique la ressemblance.', 'Relie plusieurs traces à des artistes et évalue leurs différences.']]]],
        ['Activité 3. Atelier d’impression', [
          ['IL 2.2.1', 'Monotype', '2.2', 'Imprime un monotype direct et un soustractif avec une intention expressive.', ['Ne les réalise pas.', 'Un seul, ou flous.', 'Les deux, avec un défaut de pression ou de peinture.', 'Les deux, nets et avec intention.', 'Les deux, très expressifs et bien réalisés.']],
          ['IL 2.2.2', 'Matrice en polystyrène', '2.2', 'Prépare la matrice avec des sillons nets et l’image (et le texte) pensés en miroir.', ['Pas de matrice.', 'Sillons faibles ou texte à l’endroit.', 'Sillons marqués avec quelques erreurs.', 'Matrice nette et bien pensée en miroir.', 'Matrice soignée, avec textures et détails bien réussis.']],
          ['IL 2.2.3', 'Tirage', '2.2', 'Tire 3 à 5 estampes régulières, signées et numérotées.', ['Pas de tirage.', 'Une ou deux estampes, ou très irrégulières.', 'Trois estampes avec des différences.', 'Trois à cinq estampes régulières, signées et numérotées.', 'Tirage régulier et propre, signature et numérotation correctes.']]]],
        ['Activité 4. La carte de vœux du collège', [
          ['IL 2.2.4', 'La carte de vœux', '2.2', 'Crée une carte de vœux imprimée avec une intention claire et la technique adaptée.', ['Inachevée.', 'Achevée, sans intention claire.', 'Idée claire avec des défauts d’impression.', 'Idée claire et impression correcte sur carton.', 'Carte originale, expressive et très bien imprimée.']],
          ['IL 4.2.1', 'Processus dans le carnet', '4.2', 'Les croquis et les épreuves montrent comment on est arrivé au résultat.', ['Pas de croquis.', 'Un croquis.', 'Trois croquis.', 'Trois croquis annotés (technique, couleur et texte).', 'Processus complet et raisonné du croquis au résultat final.']],
          ['IL 4.2.2', 'Présentation', '4.2', 'Présente sa carte : ce qu’il voulait dire, comment il l’a faite et ce qu’il changerait.', ['Ne la présente pas.', 'La présente sans expliquer.', 'Explique l’idée ou le processus.', 'Explique l’idée, le processus et une difficulté.', 'Explique clairement idée, processus, difficultés et réussites.']],
          ['IL 4.2.3', 'Autoévaluation', '4.2', 'Évalue de manière critique et respectueuse son travail et celui de ses camarades.', ['Ne s’autoévalue pas.', 'Donne seulement une note.', 'Relève quelque chose qui a bien ou mal marché.', 'Évalue réussites et difficultés avec la grille.', 'Évaluation critique et argumentée, de son travail et de celui des autres.']]]]
      ]
    }
  };
})();
