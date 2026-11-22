/* INSERT ART · EXP 4 · Niveau 01 · Potions · FRANÇAIS */
(function () {
  window.EXP4N1 = window.EXP4N1 || {};
  const IMG = { arte: 'img/exp4/recetario-arte-escondido.jpg', curry: 'img/exp4/recetario-curry-platano.jpg', cacao: 'img/exp4/recetario-cacao-remolacha.jpg' };
  const LV = ['Insuffisant (1–4)', 'Passable (5)', 'Bien (6)', 'Très bien (7–8)', 'Excellent (9–10)'];
  window.EXP4N1.fr = {
    t: {
      'cúrcuma': 'curcuma', 'pimentón': 'paprika', 'cacao': 'cacao', 'café': 'café', 'remolacha': 'betterave', 'huevo': 'œuf',
      'COLA': 'COLLE', 'HARINA': 'FARINE', 'tiza': 'craie', 'espinaca': 'épinard', 'mortero': 'mortier', 'tarros reutilizados': 'pots réutilisés',
      'colador': 'passoire', 'pinceles y cuchara': 'pinceaux et cuillère', 'envases que se reutilizan': 'récipients réutilisés',
      'restos sólidos al contenedor': 'déchets solides à la poubelle', 'nada por el desagüe': 'rien dans l’évier'
    },
    ui: {
      indice: 'Sommaire', tocAria: 'Sommaire de la théorie', cuadernoLabel: 'Dans ton livre de recettes :', misionK: 'MISSION',
      il: {
        ingredientes: 'Illustration : table avec des ingrédients pour fabriquer de la peinture (curcuma, paprika, cacao, café, betterave, œuf, colle, craie, épinard et farine)',
        utensilios: 'Illustration : ustensiles pour fabriquer de la peinture (mortier, pots, passoire, pinceaux et cuillère)',
        humeda: 'Illustration : teinture de betterave dans un pot et sa tache sur le papier',
        seca: 'Illustration : bâton de pastel au curcuma et le trait qu’il laisse sur le papier',
        residuos: 'Illustration : récipients réutilisés, poubelle et évier barré'
      },
      museosT: 'Pour chercher (sources fiables)',
      museosP: 'Cherche tes œuvres sur le site officiel du musée qui les conserve : tu y trouveras la date, la technique et le support corrects.'
    },
    sec: {
      familias: ['Deux familles : techniques sèches et humides', h => `
        <p>Toutes les techniques de dessin et de peinture appartiennent à l’une de ces deux familles. Savoir à laquelle appartient une œuvre t’aide à comprendre comment elle a été faite.</p>
        <div class="duo">
          <div class="card"><h3>Techniques sèches</h3>${h.il('seca')}
            <p>Le matériau s’applique <b>directement par frottement</b>, sans solvant. Le pigment reste piégé dans le grain du papier.</p>
            <p><b>Exemples :</b> graphite, fusain, sanguine, crayons de couleur, pastel et craies grasses.</p></div>
          <div class="card"><h3>Techniques humides</h3>${h.il('humeda')}
            <p>Le pigment est <b>mélangé à un liant et dilué</b>. Il sèche par évaporation, par oxydation ou par réaction chimique.</p>
            <p><b>Exemples :</b> aquarelle, encre, gouache, tempera, fresque, huile et acrylique.</p></div>
        </div>
        <p class="tip"><b>Astuce pour les reconnaître dans une œuvre :</b> dans les techniques sèches, on voit le trait et le grain du papier ; dans les humides, on voit des taches, des glacis ou la trace du pinceau.</p>`],
      anatomia: ['Anatomie d’une peinture', h => `
        <p>Toute peinture, de celle des grottes à un tube d’acrylique, se fabrique avec les mêmes ingrédients :</p>
        <div class="ecuacion"><span>Pigment<small>donne la couleur</small></span><b>+</b><span>Liant<small>colle la couleur au support</small></span><b>+</b><span>Solvant<small>la rend plus fluide</small></span><b>=</b><span>Peinture</span></div>
        <ul>
          <li><b>Pigment :</b> poudre de couleur. Il peut être minéral (terres, charbon, craie) ou végétal (curcuma, café, betterave, épinard…).</li>
          <li><b>Liant :</b> la « colle » qui unit les particules de pigment et les fixe au support : œuf, colle, huile, gomme, farine…</li>
          <li><b>Solvant :</b> le liquide qui permet d’étaler le mélange. Dans nos potions, l’eau.</li>
        </ul>
        ${h.il('ingredientes')}${h.il('utensilios')}
        ${h.cuaderno('note toujours la quantité de chaque ingrédient (cuillerées, millilitres…). Sans quantités, personne ne peut refaire ta recette.')}`],
      soporte: ['La technique décide du support', h => `
        <p>Chaque technique a besoin d’un support qui la supporte :</p>
        <ul class="cards3"><li><b>Beaucoup d’eau</b><span>Papier épais qui ne gondole pas.</span></li><li><b>Pigment en poudre</b><span>Papier à grain qui le retient.</span></li><li><b>Huile</b><span>Support préparé qui protège la fibre.</span></li></ul>
        <p class="tip"><b>La règle peut être transgressée :</b> beaucoup d’artistes enfreignent ces règles exprès pour obtenir de nouveaux effets. Si tu le fais, explique pourquoi.</p>`],
      historia: ['De la grotte au tube : une histoire de recettes', h => `
        <p>Pendant des siècles, les artistes ont fabriqué leurs propres peintures. Chaque époque a sa recette :</p>
        <ol class="linea">
          <li><b>Préhistoire · Terres et charbon</b>Oxydes de fer et charbon de bois mélangés avec de la graisse ou de l’eau. Grotte de la Pileta, Benaoján (Malaga).</li>
          <li><b>Moyen Âge · Tempera</b>Jaune d’œuf comme liant, sur des panneaux préparés au plâtre. Retables et panneaux gothiques.</li>
          <li><b>XVe–XVIe siècles · Huile et fresque</b>Les Flamands perfectionnent la peinture à l’huile ; la fresque couvre murs et voûtes. Michel-Ange, chapelle Sixtine.</li>
          <li><b>XVIIe siècle · Huile sur toile</b>École sévillane du Siècle d’or : Velázquez, Murillo, Valdés Leal.</li>
          <li><b>XXe siècle · Acrylique</b>Résine synthétique : sèche vite et convient à presque tous les supports. Peinture murale et art contemporain.</li>
        </ol>
        <p class="ojo"><b>Attention aux dates.</b> Vérifie toujours le siècle de l’œuvre sur le site du musée : l’Égypte ancienne n’est pas la Préhistoire, une œuvre de 1562 n’est plus du Moyen Âge et une œuvre de la fin du XIXe siècle n’est pas du XXe.</p>`],
      toxicos: ['Belles couleurs, ingrédients toxiques', h => `
        <p>Certaines des plus belles couleurs de l’histoire étaient fabriquées avec des ingrédients toxiques :</p>
        <ul class="toxicos">
          <li><span class="sym">Pb</span><b>Blanc de plomb</b>Aussi appelé céruse. Il contient du plomb. Aujourd’hui, on utilise le blanc de titane.</li>
          <li><span class="sym">Hg</span><b>Vermillon</b>Rouge intense fait de sulfure de mercure.</li>
          <li><span class="sym">As</span><b>Orpiment</b>Jaune brillant qui contient de l’arsenic.</li>
        </ul>
        <p><b>Aujourd’hui</b>, on utilise des pigments plus sûrs. Malgré tout : lis toujours l’étiquette et ne jette jamais de solvants dans l’évier.</p>
        <h3>Qu’est-ce qu’une source fiable ?</h3>
        <p>Si tu dis qu’une œuvre contient un pigment toxique, tu dois pouvoir le prouver. Les sources fiables sont le <b>site officiel du musée</b> qui conserve l’œuvre (par exemple, le musée du Prado ou le MoMA), les <b>études techniques</b> de restauration et les <b>publications</b> de spécialistes. Un commentaire sur les réseaux sociaux n’en est pas une.</p>
        ${h.cuaderno('indique toujours d’où vient l’information : nom du site ou de l’étude.')}`],
      cualidades: ['Qualités d’une peinture', h => `
        <p>Quand tu testes ta potion sur le papier, observe et note ces quatre qualités :</p>
        <ul class="cual"><li><b>Transparence</b><span>Laisse-t-elle voir le papier ou ce qu’il y a dessous ?</span></li><li><b>Pouvoir couvrant</b><span>Cache-t-elle complètement ce qu’il y a dessous ?</span></li><li><b>Séchage</b><span>Combien de temps met-elle à sécher : minutes, heures… ?</span></li><li><b>Adhérence</b><span>Reste-t-elle collée ou se détache-t-elle quand on la touche ?</span></li></ul>
        <div class="duo">
          ${h.foto(h.IMG.cacao, 'Page de livre de recettes avec une cabosse de cacao peinte au cacao et au café', '<b>Peinture couvrante.</b> La cabosse de cacao est peinte avec une potion de cacao et de café : la couleur est dense et on ne voit pas le papier.', [20, 27.5, 27, 39])}
          ${h.foto(h.IMG.curry, 'Page de livre de recettes avec l’essai de teinture de banane', '<b>Peinture non couvrante (transparente).</b> L’essai de teinture de peau de banane teint à peine : on voit le blanc du papier.', [44, 86.4, 48, 10])}
        </div>
        ${h.cuaderno('recopie ce tableau dans chaque recette et remplis-le après avoir testé ta peinture.')}
        <table class="tabla-cual"><tr><th>Qualité</th><th>Ma potion</th></tr><tr><td>Transparence</td><td>élevée · moyenne · faible</td></tr><tr><td>Pouvoir couvrant</td><td>élevé · moyen · faible</td></tr><tr><td>Séchage</td><td>rapide · moyen · lent</td></tr><tr><td>Adhérence</td><td>bonne · moyenne · mauvaise</td></tr></table>`],
      seguridad: ['Sécurité et déchets', h => `
        <p>Qu’un ingrédient soit un aliment ne veut pas dire qu’on peut le traiter comme un aliment :</p>
        <ul>
          <li>Une fois mélangés, <b>les ingrédients ne se mangent pas et ne se goûtent pas</b>.</li>
          <li><b>Œuf :</b> lave-toi les mains après l’avoir utilisé. La potion à l’œuf ne se garde pas : elle s’abîme.</li>
          <li><b>Paprika, curry et épices :</b> ne te touche pas les yeux.</li>
          <li><b>Craie et charbon en poudre :</b> ne souffle pas sur la poudre.</li>
          <li><b>Betterave et curcuma :</b> ils tachent beaucoup ; protège tes vêtements et la table.</li>
          <li>Utilise des ingrédients non toxiques et respecte les règles du laboratoire données par ton professeur.</li>
        </ul>
        ${h.il('residuos')}
        <p><b>À la fin :</b> réutilise les pots et les récipients, lave les ustensiles et mets les déchets solides dans leur poubelle, jamais dans l’évier.</p>`]
    },
    mision: {
      titulo: 'Fabrique tes potions',
      reto: 'Si tu ne pouvais acheter aucun matériel, avec quoi peindrais-tu ? Pendant des siècles, les artistes ont fabriqué leurs propres peintures avec ce qu’ils avaient sous la main. Votre mission, en groupe, est de <b>chercher comment peignaient les artistes d’autres époques</b>, de <b>fabriquer vos propres peintures</b> avec des ingrédients non toxiques et de tout réunir dans un <b>livre de recettes illustré</b> que tout le monde peut suivre.',
      fasesT: 'Comment on joue',
      fases: [
        ['Détectives', 'Cherchez cinq œuvres d’époques différentes : avec quoi et sur quoi elles ont été peintes, et quels pigments dangereux on utilisait.'],
        ['Laboratoire', 'Fabriquez au moins deux matériaux, un de technique sèche et un de technique humide, en notant chaque quantité.'],
        ['Essais', 'Peignez un échantillon de chaque matériau sur un support et notez ses qualités.'],
        ['Livre de recettes', 'Consacrez une page A4 à chaque matériau, illustrée avec vos propres potions.'],
        ['Présentation', 'Présentez le livre de recettes à la classe et évaluez votre travail et celui des autres groupes.']
      ],
      entregasT: 'Ce que vous devez rendre',
      entregas: ['Les <b>fiches Détectives</b> avec les cinq œuvres.', 'Le <b>livre de recettes illustré</b> : une page A4 par matériau, avec ses échantillons.', 'La <b>présentation orale</b> et l’<b>autoévaluation</b>.'],
      pista: '<b>Pour t’entraîner :</b> dans l’onglet <b>Ressources</b>, tu as le jeu du chaudron à potions.'
    },
    act: {
      intro: 'Vous travaillez <b>en groupe</b>. Une partie du travail va dans votre <b>carnet d’artiste</b> et tout se rend par le <b>devoir Classroom</b>.',
      acts: [
        ['Détectives', 'Bloc 1', `Choisissez <b>cinq œuvres</b>, une de chaque époque : <b>Préhistoire</b>, <b>Moyen Âge</b>, <b>XVe–XVIe siècles</b>, <b>XVIIe siècle</b> et <b>XXe siècle</b>. Conditions : au moins <b>une œuvre andalouse</b> ; il doit y avoir des <b>techniques sèches et humides</b> ; <b>ne répétez pas de technique</b>.
          <br>Pour chaque œuvre, faites sa <b>fiche technique</b> (artiste, titre, date, technique, support et lieu de conservation) et décrivez le <b>trait visuel</b> qui révèle sa technique, son support et ses outils.
          <br>Enfin, trouvez un <b>pigment toxique</b> dans l’une de vos œuvres, citez la <b>source fiable</b> d’où vient l’information et comparez-le avec le pigment utilisé aujourd’hui.`,
          `<div class="ojo"><b>Erreurs fréquentes dans cette activité :</b><ul>
            <li>Presque personne n’a choisi d’œuvres de <b>technique sèche</b> : cherchez des dessins au fusain, à la sanguine, au pastel…</li>
            <li><b>Dates mal placées :</b> l’Égypte ancienne n’est pas la Préhistoire ; une œuvre de 1562 n’est pas du Moyen Âge ; <i>Les Tournesols</i> date du XIXe siècle, pas du XXe.</li>
            <li><b>Technique mal identifiée :</b> une fresque est une technique humide, pas sèche.</li>
            <li><b>Techniques répétées :</b> si vous avez déjà une huile, l’œuvre suivante doit utiliser une autre technique.</li>
            <li><b>Pigment toxique sans source :</b> sans le site du musée ou une étude technique, l’information ne compte pas.</li>
            <li>Chaque fiche concerne une œuvre différente : ne recopiez pas les données d’une fiche dans une autre.</li>
          </ul></div>`],
        ['Laboratoire de potions', 'Bloc 2', `Fabriquez <b>au moins deux matériaux : un de technique sèche et un de technique humide</b>, avec leur pigment, leur liant et leur solvant. <b>La couleur doit venir uniquement de vos ingrédients</b> : il est interdit de mélanger des peintures achetées.
          <br>Notez les <b>proportions exactes</b> et, si vous devez les changer après l’essai, notez aussi le changement.
          <br>Peignez un <b>échantillon de chaque matériau sur un support</b> et notez ses qualités : <b>transparence, pouvoir couvrant, séchage et adhérence</b> (tableau dans la Théorie).
          <br>Utilisez seulement des ingrédients non toxiques, respectez les règles du laboratoire et gérez déchets et récipients.`,
          `<div class="ojo"><b>Erreurs fréquentes dans cette activité :</b><ul>
            <li><b>Seulement des matériaux humides :</b> presque tous les groupes ont fait des teintures. Il faut aussi un matériau sec (par exemple, un pastel de pigment et de craie).</li>
            <li><b>Quantités imprécises :</b> « un petit peu » n’est pas une mesure. Utilisez des cuillerées, des millilitres, des grammes…</li>
            <li><b>Qualités non notées :</b> aucun groupe n’a noté la transparence, le pouvoir couvrant, le séchage et l’adhérence de ses échantillons.</li>
          </ul></div>`],
        ['Livre de recettes illustré', 'Bloc 3', `Consacrez <b>une page A4 à chaque matériau</b>. Chaque page doit avoir : les <b>ingrédients avec leurs quantités</b>, des <b>étapes numérotées et illustrées</b>, l’<b>échantillon</b> du matériau, ses <b>qualités</b>, les <b>précautions de sécurité</b> et vos <b>conclusions</b>. Illustrez le livre <b>avec vos propres potions</b> et pensez à une mise en page que tout le monde peut suivre.`,
          `<div class="galeria">
            <a href="${IMG.arte}" target="_blank" rel="noopener noreferrer"><img src="${IMG.arte}" alt="Page de livre de recettes « L’art caché dans les aliments » avec des teintures d’oignon rouge, d’épinard, de carotte et de tomate" loading="lazy"><span>Quatre teintures, étapes numérotées et échantillons</span></a>
            <a href="${IMG.cacao}" target="_blank" rel="noopener noreferrer"><img src="${IMG.cacao}" alt="Page de livre de recettes avec une peinture de cacao et café et une peinture de betterave au blanc d’œuf" loading="lazy"><span>Illustré avec leurs propres peintures</span></a>
            <a href="${IMG.curry}" target="_blank" rel="noopener noreferrer"><img src="${IMG.curry}" alt="Page de livre de recettes avec des teintures de curry et de peau de banane" loading="lazy"><span>Quantités mesurées en millilitres et cuillerées</span></a>
          </div>
          <div class="ideas"><b>Bonnes idées de la classe :</b><ul>
            <li>Utiliser de la <b>colle blanche</b>, du <b>blanc d’œuf</b> ou de la <b>farine</b> comme liant.</li>
            <li>Réutiliser des restes : <b>peau d’oignon</b> et <b>peau de banane</b>.</li>
            <li>Obtenir <b>trois tons</b> d’une même couleur en changeant seulement la quantité d’eau.</li>
            <li>Peindre les illustrations du livre <b>avec ses propres potions</b>.</li>
          </ul></div>
          <div class="ojo"><b>Ce qui a le plus manqué :</b> les quantités, les qualités de chaque échantillon, la sécurité et les conclusions.</div>`],
        ['Présentation et autoévaluation', 'Bloc 3', 'Présentez votre livre de recettes à la classe : expliquez le <b>processus</b>, les <b>difficultés</b> rencontrées et vos <b>réussites</b>. Ensuite, <b>évaluez votre travail et celui des autres groupes</b> avec des arguments et du respect, avec le formulaire que votre professeur vous donnera.', `<div class="ideas"><b>Présentation guidée : votre professeur vous posera ces cinq questions:</b><ol style="margin:8px 0 0 20px"><li><b>Comment l’avez-vous fait ?</b> Racontez les étapes suivies, de l’enquête Détectives au livre de recettes terminé. <span class="il-crit">Critère 4.2</span></li><li><b>Qu’est-ce qui a été le plus difficile et comment l’avez-vous résolu ?</b> Par exemple, une recette qui n’a pas marché du premier coup ou une peinture qui ne collait pas au papier. <span class="il-crit">Critère 4.2</span></li><li><b>De quoi êtes-vous le plus fiers et que changeriez-vous si vous recommenciez ?</b> <span class="il-crit">Critère 4.2</span></li><li><b>Quels métiers ou études travaillent avec ce que vous avez fait ?</b> Par exemple, la restauration d’œuvres d’art, la conservation dans les musées, l’illustration, le design ou la chimie des matériaux. L’un d’eux vous intéresserait-il ? <span class="il-crit">Critère 4.3</span></li><li><b>À quoi vous sert, en dehors de la classe, savoir fabriquer vos propres matériaux avec des ingrédients naturels et sans produire de déchets ?</b> Donnez votre avis et justifiez-le. <span class="il-crit">Critère 4.3</span></li></ol><p style="margin-top:8px">Préparez vos réponses en groupe avant la présentation.</p></div>`]
      ],
      cotejoT: 'Liste de contrôle : où en êtes-vous ?',
      cotejoP: 'Coche ce que tu as déjà fait. Tes coches sont enregistrées uniquement sur cet appareil. Quand ton professeur te le demande, <b>fais une capture d’écran de cette liste et envoie-la dans le devoir Classroom</b> : ainsi, il pourra te faire un retour.',
      grupos: [
        ['Détectives', ['Nous avons cinq œuvres, une de chaque époque (Préhistoire, Moyen Âge, XVe–XVIe s., XVIIe s. et XXe s.).', 'Nous avons vérifié le siècle de chaque œuvre dans une source fiable.', 'Au moins une œuvre est andalouse.', 'Il y a des techniques sèches et humides, sans technique répétée.', 'Chaque œuvre a sa fiche technique complète.', 'Nous avons décrit le trait visuel qui révèle la technique, le support et les outils.', 'Nous avons trouvé un pigment toxique, avec sa source fiable et son substitut actuel.']],
        ['Laboratoire', ['Nous avons fabriqué un matériau de technique sèche.', 'Nous avons fabriqué un matériau de technique humide.', 'La couleur vient uniquement de nos ingrédients.', 'Nous avons noté les quantités exactes (et les changements).', 'Nous avons peint un échantillon de chaque matériau sur un support.', 'Nous avons noté transparence, pouvoir couvrant, séchage et adhérence.', 'Nous avons respecté les règles et géré les déchets.']],
        ['Livre de recettes', ['Il y a une page A4 par matériau.', 'Chaque page a les ingrédients avec quantités et des étapes numérotées et illustrées.', 'Chaque page a son échantillon, ses qualités, la sécurité et les conclusions.', 'Nous avons illustré le livre avec nos propres potions.']],
        ['Présentation', ['Nous avons préparé l’explication du processus, des difficultés et des réussites.', 'Nous avons fait l’autoévaluation et évalué les autres groupes.', 'Nous avons tout rendu dans le devoir Classroom.', 'Nous avons préparé les réponses aux cinq questions de la présentation.']]
      ],
      progreso: (n, t) => `Tu en as ${n} sur ${t}`, borrar: 'Effacer mes coches', confirmar: 'Sûr ? Appuie encore pour effacer.'
    },
    juego: {
      titulo: 'Le chaudron à potions',
      intro: 'Si tu ne pouvais acheter aucun matériel, avec quoi peindrais-tu ? Choisis un pigment, un liant et les quantités. Remue le chaudron et découvre quelle potion tu obtiens. Chaque potion génère sa recette, comme une page de votre livre de recettes.',
      est1: 'Étagère 1 · Pigments (la couleur)', est2: 'Étagère 2 · Liants (ce qui colle la couleur au support)', est3: 'Étagère 3 · Quantités (en cuillerées)', estH: 'Étagère cachée · De l’histoire',
      pigmentos: { curcuma: 'Curcuma', curry: 'Curry', cebolla: 'Peau d’oignon', pimenton: 'Paprika', remolacha: 'Betterave', granada: 'Grenade', arandanos: 'Myrtilles', espinaca: 'Épinard', cafe: 'Café', cacao: 'Cacao', platano: 'Peau de banane', carbon: 'Charbon de bois', tiza: 'Craie' },
      aglutinantes: { ninguno: 'Aucun', cola: 'Colle blanche', clara: 'Blanc d’œuf', yema: 'Jaune d’œuf', harina: 'Farine (colle)' },
      prohibidos: { albayalde: 'Céruse', bermellon: 'Vermillon', oropimente: 'Orpiment' },
      cant: { pig: 'Pigment', agl: 'Liant', tiza: 'Craie moulue (donne du corps)', agua: 'Eau' },
      cuch: n => n === 1 ? '1 cuillerée' : `${n} cuillerées`,
      remover: 'Remuer le chaudron', vacio: 'Choisis les ingrédients et appuie sur « Remuer le chaudron ».',
      seca: 'TECHNIQUE SÈCHE', humeda: 'TECHNIQUE HUMIDE',
      cual: { trans: 'Transparence', cubr: 'Pouvoir couvrant', secado: 'Séchage', adh: 'Adhérence' },
      nombres: { curcuma: 'Potion du Soleil', curry: 'Potion du Marché', cebolla: 'Potion de l’Automne', pimenton: 'Potion du Feu', remolacha: 'Potion de la Terre rouge', granada: 'Potion de l’Alhambra', arandanos: 'Potion de la Forêt', espinaca: 'Potion du Potager', cafe: 'Potion de la Nuit', cacao: 'Potion du Chocolat', platano: 'Potion du Goûter', carbon: 'Potion de la Grotte', tiza: 'Potion du Tableau' },
      barra: 'en bâton', polvo: 'en poudre',
      recetaT: 'Recette', ingT: 'Ingrédients', pasosT: 'Étapes', segT: 'Sécurité',
      prep: { polvo: 'Broie le pigment au mortier jusqu’à obtenir une poudre fine.', vegetal: 'Coupe l’ingrédient, écrase-le avec un peu d’eau chaude, laisse reposer 10 minutes et filtre le liquide.' },
      pasoAgl: (a, n) => `Ajoute ${n} de ${a.toLowerCase()} et mélange jusqu’à ce qu’il n’y ait plus de grumeaux.`,
      pasoSinAgl: 'N’ajoute pas de liant : la couleur restera libre sur le papier.',
      pasoBarra: 'Pétris la pâte, donne-lui une forme de bâton et laisse-la sécher un jour avant de l’utiliser.',
      pasoPolvo: 'Applique la poudre en frottant avec le doigt ou un chiffon sur du papier à grain.',
      pasoAgua: n => `Ajoute ${n} d’eau petit à petit et remue.`,
      pasoProbar: 'Peins un échantillon sur du papier, laisse-le sécher et note ses qualités.',
      niveles: { trans: ['faible', 'moyenne', 'élevée'], cubr: ['faible', 'moyen', 'élevé'], secado: ['rapide', 'moyen', 'lent'], adh: ['mauvaise', 'moyenne', 'bonne'] },
      secoBarra: 'Sèche en 1 jour (bâton)', secoPolvo: 'N’a pas besoin de sécher',
      seg: {
        general: 'Même si ce sont des aliments, une fois mélangés, on ne les mange pas.',
        huevo: 'Œuf : lave-toi les mains ; la potion ne se garde pas car elle s’abîme.',
        especia: 'Paprika et curry : ne te touche pas les yeux.',
        polvo: 'Craie et charbon : ne souffle pas sur la poudre.',
        mancha: 'Ça tache beaucoup : protège tes vêtements et la table.',
        final: 'À la fin, lave les ustensiles et mets les déchets solides dans leur poubelle, pas dans l’évier.'
      },
      pistas: { sinAgl: 'Sans liant, la couleur se détache en séchant. Essaie la colle, le blanc d’œuf, le jaune d’œuf ou la farine.', diluida: 'Beaucoup d’eau et peu de pigment : la couleur sera très pâle.' },
      toxico: {
        titulo: 'Potion interdite !',
        albayalde: 'Céruse ou blanc de plomb : contient du plomb. Aujourd’hui, on utilise le blanc de titane.',
        bermellon: 'Vermillon : rouge fait de sulfure de mercure. Aujourd’hui, on utilise des pigments synthétiques plus sûrs.',
        oropimente: 'Orpiment : jaune qui contient de l’arsenic. Aujourd’hui, on utilise des pigments synthétiques plus sûrs.',
        nota: 'Ces pigments sont dans le jeu seulement pour connaître l’histoire : on ne les utilise pas en classe.'
      },
      retosT: 'Défis', retosN: (n, t) => `Défis réussis : ${n} sur ${t}`,
      retos: [
        ['Première potion', 'Fabrique n’importe quelle peinture humide.'], ['Potion sèche', 'Fabrique un matériau de technique sèche.'],
        ['Trois tons', 'Obtiens trois tons d’une même couleur en changeant seulement l’eau.'], ['Couvre le noir', 'Fais une peinture très couvrante.'],
        ['Cristal', 'Fais une peinture transparente qui adhère bien.'], ['La potion interdite', 'Trouve les trois pigments toxiques de l’étagère cachée.']
      ]
    },
    rub: {
      intro: 'Voici comment ce niveau est évalué. Chaque indicateur est noté de 1 à 10. La note de chaque critère est la moyenne de ses indicateurs et la note du niveau est la moyenne des critères.',
      criteriosT: 'Critères d’évaluation',
      criterios: [
        ['1.1', 'Analyser des œuvres artistiques de différentes époques et cultures, en les replaçant dans leur contexte, en décrivant leurs aspects essentiels, en évaluant le processus de création et le résultat final, avec une attitude d’ouverture, d’intérêt et de respect.'],
        ['1.2', 'Évaluer de manière critique les habitudes, les goûts et les références artistiques de différentes époques et cultures, en réfléchissant à leur évolution et à leur relation avec ceux du présent.'],
        ['2.1', 'Participer, avec initiative, confiance et créativité, à l’exploration de différentes techniques graphiques et plastiques, en utilisant des outils, des moyens, des supports et des langages.'],
        ['2.2', 'Réaliser des productions graphiques et plastiques de manière créative, en déterminant les intentions expressives et en choisissant correctement les outils, moyens, supports et langages les plus adaptés de son répertoire personnel.'],
        ['4.1', 'Créer un produit artistique individuel ou collectif, de manière collaborative et ouverte, en concevant les étapes du processus et en choisissant les techniques et outils les plus adaptés pour obtenir un résultat adapté à une intention et à un public déterminés.'],
        ['4.2', 'Présenter le résultat final de la création d’un produit artistique, individuel ou collectif, en partageant et en évaluant de manière critique son élaboration, les difficultés rencontrées, les progrès réalisés et les réussites.'],
        ['4.3', 'Identifier des possibilités de développement personnel, social, scolaire ou professionnel liées au domaine artistique, en comprenant leur valeur ajoutée et en exprimant son opinion de manière argumentée et respectueuse.']
      ],
      niveles: LV, criterio: 'Critère',
      bloques: [
        ['Bloc 1. Détectives', [
          ['IL 1.1', 'Choix des œuvres', '1.1', 'Choisit cinq œuvres des époques proposées qui respectent les conditions : une andalouse et des techniques sèches et humides, sans répéter.', ['Œuvres ou époques manquantes, ou la plupart des conditions non respectées.', 'Cinq œuvres, mais deux conditions non respectées.', 'Cinq œuvres ; une condition non respectée.', 'Cinq œuvres qui respectent toutes les conditions.', 'Respecte toutes les conditions avec des œuvres variées et bien justifiées.']],
          ['IL 1.2', 'Analyse de l’œuvre', '1.1', 'Complète la fiche technique et décrit le trait visuel qui révèle la technique, le support et les outils.', ['Fiches incomplètes ou données erronées ; aucun trait visuel décrit.', 'Fiches de base ; traits visuels vagues ou généraux.', 'Fiches complètes ; trait visuel correct dans la plupart.', 'Fiches complètes et vérifiées ; trait visuel précis dans toutes.', 'Analyse avec un vocabulaire technique et relie trait, outil et support.']],
          ['IL 1.3', 'Pigments d’hier et d’aujourd’hui', '1.2', 'Identifie un pigment toxique avec une source fiable et réfléchit à l’évolution des matériaux jusqu’à aujourd’hui.', ['N’identifie aucun pigment toxique ou ne le justifie pas.', 'Identifie le pigment, mais sans source fiable.', 'Identifie le pigment et cite une source fiable.', 'Le compare aussi avec son substitut actuel.', 'Réfléchit avec discernement à l’évolution des matériaux et à leur lien avec le présent.']]]],
        ['Bloc 2. Laboratoire', [
          ['IL 2.1', 'Formulation', '2.1', 'Fabrique au moins deux matériaux (un sec et un humide) avec pigment, liant et solvant, et note leurs proportions.', ['Un seul matériau ou des matériaux qui ne fonctionnent pas.', 'Deux matériaux qui fonctionnent, sans proportions notées.', 'Deux matériaux qui fonctionnent, avec proportions notées.', 'Ajuste les proportions après l’essai et note les changements.', 'Explore des variantes avec initiative et explique comment le résultat change.']],
          ['IL 2.2', 'Échantillon sur support', '2.1', 'Peint un échantillon de chaque matériau sur un support et note ses qualités : transparence, pouvoir couvrant, séchage et adhérence.', ['Pas d’échantillons ou pas peints avec ses matériaux.', 'Échantillons de quelques matériaux seulement ou peu clairs.', 'Un échantillon de chaque matériau, peu soigné.', 'Un échantillon clair et bien peint de chaque matériau.', 'Note aussi ses qualités et tire des conclusions sur chaque matériau.']],
          ['IL 2.3', 'Sécurité et durabilité', '2.2', 'Utilise des ingrédients non toxiques, respecte les règles du laboratoire et gère déchets et récipients.', ['Ne respecte pas les règles ou utilise des ingrédients inadaptés.', 'Respecte les règles avec des rappels fréquents.', 'Respecte les règles et justifie la non-toxicité.', 'Réutilise aussi les récipients et gère bien les déchets.', 'Propose des améliorations durables pour le laboratoire.']]]],
        ['Bloc 3. Livre de recettes', [
          ['IL 3.1', 'Projet et étapes', '4.1', 'Planifie le livre de recettes en groupe, répartit les tâches et suit les étapes du processus jusqu’au produit final.', ['Pas de planification ; travail désorganisé ou incomplet.', 'Planification minimale ; respecte les délais avec de l’aide.', 'Suit les étapes et répartit les tâches.', 'Organisation autonome et collaborative à chaque étape.', 'Gère le processus avec initiative et aide d’autres groupes.']],
          ['IL 3.2', 'Mise en page', '4.1', 'Chaque page comprend ingrédients, étapes illustrées, échantillons, résultats et sécurité, avec une mise en page pensée pour que d’autres l’utilisent.', ['Rubriques manquantes ; la recette ne se comprend pas.', 'Rubriques complètes, mais désordonnées.', 'Page complète et lisible.', 'Claire, ordonnée et bien illustrée.', 'Mise en page soignée et cohérente : tout le monde pourrait suivre la recette.']],
          ['IL 3.3', 'Illustration avec ses potions', '2.2', 'Illustre le livre avec les matériaux fabriqués, avec une intention expressive et un usage responsable.', ['N’utilise pas ses matériaux.', 'Usage basique de ses matériaux.', 'Usage correct dans les illustrations.', 'Usage avec une intention expressive.', 'Exploite de manière créative les qualités de chaque matériau.']],
          ['IL 3.4', 'Présentation', '4.2', 'Présente le livre à la classe en expliquant le processus, les difficultés rencontrées et les réussites.', ['Ne présente pas ou lit sans expliquer.', 'Présentation courte et peu claire.', 'Explique clairement le processus.', 'Explique processus, difficultés et réussites avec un vocabulaire technique.', 'Présentation claire et attrayante ; répond aux questions.']],
          ['IL 3.5', 'Autoévaluation et évaluation', '4.2', 'Évalue de manière critique son travail et celui des autres groupes, avec des arguments et du respect.', ['Ne s’autoévalue pas.', 'Autoévaluation superficielle.', 'Identifie réussites et erreurs.', 'Propose des améliorations concrètes pour son travail.', 'Évalue avec discernement son travail et celui des autres groupes.']],
          ['IL 3.6', 'Possibilités offertes par l’art', '4.3', 'Identifie des possibilités de développement personnel, social, scolaire ou professionnel liées au travail réalisé et donne son avis de manière argumentée et respectueuse (questions 4 et 5 de la présentation guidée).', ['N’en identifie aucune.', 'En nomme une, sans l’expliquer.', 'En identifie quelques-unes et explique pourquoi.', 'En relie plusieurs à ce qu’il a appris et donne son avis avec des arguments.', 'Réfléchit avec discernement à la valeur de l’art dans sa vie et son avenir, en respectant les autres avis.']]]]
      ]
    }
  };
})();
