/* INSERT ART · EXP 4 · Niveau 02 · Humour graphique · FRANÇAIS */
(function () {
  window.EXP4N2 = window.EXP4N2 || {};
  window.EXP4N2.fr = {
    t: {
      'Esquema de un meme: texto arriba, imagen en el centro, contexto y giro': 'Schéma d’un mème : texte en haut, image au centre, contexte et chute',
      'YO: HOY EMPIEZO CON TIEMPO': 'MOI : AUJOURD’HUI JE M’Y PRENDS TÔT', 'TAMBIÉN YO, LA NOCHE ANTES:': 'TOUJOURS MOI, LA VEILLE AU SOIR :',
      'TEXTO': 'TEXTE', 'IMAGEN': 'IMAGE', 'GIRO': 'CHUTE'
    },
    ui: { indice: 'Sommaire', tocAria: 'Sommaire de la théorie', cuadernoLabel: 'Dans votre carnet d’artiste :', misionK: 'MISSION' },
    sec: {
      meme: ['Qu’est-ce qu’un mème ?', h => `
        <p class="def">Un <b>mème</b> est une idée qui se copie et se transforme en passant de personne en personne.</p>
        <div class="flujo"><span>IDÉE</span><b>→</b><span>COPIE</span><b>→</b><span>NOUVELLE VERSION</span></div>
        <p>Le biologiste <b>Richard Dawkins</b> a inventé le mot dans son livre <i>Le Gène égoïste</i> (1976). Aujourd’hui, on l’utilise surtout pour les images avec du texte qui circulent sur internet.</p>`],
      lectura: ['Lire une image : dénotation et connotation', h => `
        <p>Avant de transformer une œuvre, il faut savoir la lire. Toute image peut se lire de deux façons :</p>
        <div class="lectura">
          <div><h3>Lecture dénotative</h3><p><b>Ce qu’on voit</b>, de façon objective : tout le monde serait d’accord.</p>
            <ul><li>Fiche : titre, artiste, date et technique.</li><li>Quels personnages et objets apparaissent.</li><li>Couleurs, lumière et composition.</li></ul></div>
          <div><h3>Lecture connotative</h3><p><b>Ce qu’elle suggère</b> : le sens, qui dépend de qui regarde et de son époque.</p>
            <ul><li>Quelles émotions elle transmet.</li><li>Quels symboles elle utilise et ce qu’ils signifient.</li><li>Ce qu’elle voulait dire à son époque et ce qu’elle nous dit aujourd’hui.</li></ul></div>
        </div>
        <p class="tip"><b>Astuce :</b> si ce que tu écris commence par « on voit… », c’est de la dénotation. S’il commence par « on dirait… », « ça suggère… » ou « ça représente… », c’est de la connotation.</p>
        ${h.cuaderno('faites d’abord la lecture dénotative puis la lecture connotative de chaque œuvre.')}`],
      anatomia: ['Anatomie d’un mème', h => `
        ${h.fig()}
        <ul class="cual"><li><b>Texte</b><span>Présente la situation.</span></li><li><b>Image</b><span>Apporte la réaction.</span></li><li><b>Contexte</b><span>On reconnaît quelque chose qui nous arrive.</span></li><li><b>Chute</b><span>La contradiction fait rire.</span></li></ul>`],
      historia: ['L’art riait déjà avant internet', h => `
        <ul class="cards3">
          <li><b>Goya</b><span><i>Les Caprices</i> (1799) : satire des vices et du pouvoir de son époque.</span></li>
          <li><b>Daumier</b><span>Caricatures dans la presse du XIXe siècle pour critiquer la société.</span></li>
          <li><b>Duchamp</b><span><i>L.H.O.O.Q.</i> (1919) : modifier une icône de l’art pour provoquer.</span></li>
        </ul>
        <p>Comme eux, vous allez partir d’une œuvre connue et changer son sens pour dire quelque chose de nouveau.</p>`],
      fotomontaje: ['Photomontage traditionnel', h => `
        <p class="def"><b>Photomontage traditionnel :</b> découper des fragments de différentes images et les coller pour créer une nouvelle image avec un autre sens.</p>
        <ol class="pasos3"><li><b>Découpe</b>Des fragments de différentes œuvres : une tête, un fond, un objet…</li><li><b>Essaie des combinaisons</b>Déplace les pièces avant de coller. Cherche le contraste.</li><li><b>Colle avec intention</b>Chaque pièce doit dire quelque chose.</li></ol>
        <p class="tip"><b>Ce n’est pas assembler pour assembler :</b> c’est faire en sorte que les pièces disent quelque chose.</p>`],
      vistazo: ['Ça se comprend d’un coup d’œil', h => `
        <ul class="cards3"><li><b>Contraste</b><span>Grand / petit. Sérieux / absurde.</span></li><li><b>Synthèse</b><span>Peu d’éléments. Une idée claire.</span></li><li><b>Texte + image</b><span>Ensemble, ils disent ce qu’ils ne diraient pas seuls.</span></li></ul>`],
      recursos: ['Convaincre et faire rire', h => `
        <p>Le mème et la publicité partagent des astuces. Voici les quatre procédés que vous allez utiliser :</p>
        <ul class="cual">
          <li><b>Hyperbole</b><span>Exagérer : « J’ai un million de devoirs ». Un million ?</span></li>
          <li><b>Ironie</b><span>Dire le contraire : « Génial », quand internet coupe.</span></li>
          <li><b>Métaphore visuelle</b><span>Remplacer : un sac à dos transformé en montagne.</span></li>
          <li><b>Incongruité</b><span>Casser la logique : un roi qui attend le bus.</span></li>
        </ul>
        <p class="tip"><b>Pour t’entraîner :</b> dans l’onglet <b>Ressources</b>, tu as le jeu « Quel procédé est-ce ? ».</p>`],
      estereotipos: ['L’humour oui, les stéréotypes non', h => `
        <p>Se moquer du genre, de l’origine ou du corps de quelqu’un répète le sexisme et les canons corporels que l’on voit dans la publicité et les médias. <b>Remettez en question les préjugés, pas les personnes qui les subissent.</b></p>
        <p class="ojo"><b>Avant de partager, demandez-vous :</b> de qui rit-on ? Est-ce que ça critique une idée ou est-ce que ça humilie une personne ?</p>`]
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
