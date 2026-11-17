/* INSERT ART · Idiomas: español (es), inglés (en), francés (fr), ruso (ru) */
(function () {
  const LANGS = { es: 'ES', en: 'EN', fr: 'FR', ru: 'RU' };
  const UI = {
    es: {
      langLabel: 'Idioma', materias: 'Materias', manual: 'Manual', credits: 'CRÉDITOS',
      tag: 'La web de Dibujo del IES Nueva Andalucía. Elige tu materia, entra en tu nivel y encuentra la teoría, las actividades y las rúbricas.',
      foot1: 'IES NUEVA ANDALUCÍA · DEPARTAMENTO DE ARTES', foot2: 'PROF. LUIS ALBERTO DELGADO MÁRQUEZ',
      elige: 'Elige tu materia', manualBtn: 'Manual del jugador', mundo: 'MUNDO', niveles: 'NIVELES', nivel: 'NIVEL', nivelCorto: 'Nivel',
      cambiar: '◂ Cambiar de materia', descMateria: (n, k) => `${n}. ${k} niveles repartidos en tres trimestres.`,
      tMapa: 'Mapa de niveles', tMaterial: 'Material', tEval: 'Cómo se evalúa', cuadernoArt: 'Cuaderno de artista', manualDT: 'Manual de DT',
      trim: ['Primer trimestre', 'Segundo trimestre', 'Tercer trimestre'],
      st: { done: 'Superado', live: 'En juego', locked: 'Bloqueado' },
      mapaDe: m => `◂ Mapa de ${m}`, otros: 'Otros niveles',
      tabsNivel: { mision: 'Misión', teoria: 'Teoría', actividades: 'Actividades', recursos: 'Recursos', rubrica: 'Rúbrica' },
      obras: 'Zona en obras',
      o: {
        material: 'Aquí irá la lista de material que necesitas para esta materia.',
        evaluacion: 'Aquí irán los criterios de calificación explicados de forma sencilla.',
        cuadernoDT: 'Aquí irá cómo se organiza tu Manual de DT.', cuaderno: 'Aquí irá cómo se organiza tu cuaderno de artista.',
        mision: 'Aquí irá el reto de este nivel y el producto final que vas a crear.',
        teoria: 'Aquí irán los contenidos de la unidad para que los consultes cuando quieras.',
        actividades: c => `Aquí irán las actividades sesión a sesión, también las del ${c}.`,
        recursos: 'Aquí irán los enlaces a presentaciones, vídeos y documentos.',
        rubrica: 'Aquí irá la rúbrica: qué se valora y cómo conseguir cada nivel.',
        normas: 'Aquí irán las normas de uso del aula-taller y de los materiales.',
        materialComun: 'Aquí irá el material que se usa en todas las materias.',
        cuadernoManual: 'Aquí irá qué es el cuaderno de artista y cómo se trabaja en él.',
        classroom: 'Aquí irá cómo entregar los trabajos en Classroom y organizar tu carpeta de Drive.'
      },
      manualTitle: 'Manual del jugador', manualDesc: 'Lo que sirve para todas las materias de Dibujo.', volver: '◂ Volver a las materias',
      tabsManual: { normas: 'Normas del aula-taller', material: 'Material común', cuaderno: 'Cuaderno de artista', classroom: 'Entregas y Classroom' },
      meses: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
      p: { pulsa: 'Pulsa ▶ para ver la construcción paso a paso.', paso: 'Paso', PASO: 'PASO', listo: 'LISTO', play: '▶ Reproducir', pausa: '❚❚ Pausa', repetir: '⟲ Repetir', video: '▶ Ver el vídeo en YouTube', reset: 'Empezar de nuevo', prev: 'Paso anterior', next: 'Paso siguiente' },
      aviso: ''
    },
    en: {
      langLabel: 'Language', materias: 'Subjects', manual: 'Handbook', credits: 'CREDITS',
      tag: 'The Art & Technical Drawing website of IES Nueva Andalucía. Choose your subject, enter your level and find the theory, the activities and the rubrics.',
      foot1: 'IES NUEVA ANDALUCÍA · ARTS DEPARTMENT', foot2: 'TEACHER: LUIS ALBERTO DELGADO MÁRQUEZ',
      elige: 'Choose your subject', manualBtn: 'Player’s handbook', mundo: 'WORLD', niveles: 'LEVELS', nivel: 'LEVEL', nivelCorto: 'Level',
      cambiar: '◂ Change subject', descMateria: (n, k) => `${n}. ${k} levels across three terms.`,
      tMapa: 'Level map', tMaterial: 'Materials', tEval: 'How you are assessed', cuadernoArt: 'Artist’s sketchbook', manualDT: 'TD handbook',
      trim: ['First term', 'Second term', 'Third term'],
      st: { done: 'Cleared', live: 'In play', locked: 'Locked' },
      mapaDe: m => `◂ ${m} map`, otros: 'Other levels',
      tabsNivel: { mision: 'Mission', teoria: 'Theory', actividades: 'Activities', recursos: 'Resources', rubrica: 'Rubric' },
      obras: 'Under construction',
      o: {
        material: 'The list of materials you need for this subject will go here.',
        evaluacion: 'The grading criteria, explained simply, will go here.',
        cuadernoDT: 'How to organise your TD handbook will go here.', cuaderno: 'How to organise your artist’s sketchbook will go here.',
        mision: 'This level’s challenge and the final product you will create will go here.',
        teoria: 'The unit’s content will go here, so you can check it whenever you want.',
        actividades: c => `The session-by-session activities will go here, including those for your ${c}.`,
        recursos: 'Links to presentations, videos and documents will go here.',
        rubrica: 'The rubric will go here: what is assessed and how to reach each level.',
        normas: 'The rules for using the art room and its materials will go here.',
        materialComun: 'The materials used in every subject will go here.',
        cuadernoManual: 'What the artist’s sketchbook is and how to work in it will go here.',
        classroom: 'How to hand in work on Classroom and organise your Drive folder will go here.'
      },
      manualTitle: 'Player’s handbook', manualDesc: 'What you need for every Art and Technical Drawing subject.', volver: '◂ Back to subjects',
      tabsManual: { normas: 'Art room rules', material: 'Shared materials', cuaderno: 'Artist’s sketchbook', classroom: 'Handing in & Classroom' },
      meses: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      p: { pulsa: 'Press ▶ to see the construction step by step.', paso: 'Step', PASO: 'STEP', listo: 'READY', play: '▶ Play', pausa: '❚❚ Pause', repetir: '⟲ Replay', video: '▶ Watch the video on YouTube', reset: 'Start again', prev: 'Previous step', next: 'Next step' },
      aviso: 'Translated from Spanish. If something is unclear, ask your teacher.'
    },
    fr: {
      langLabel: 'Langue', materias: 'Matières', manual: 'Manuel', credits: 'CRÉDITS',
      tag: 'Le site de Dessin de l’IES Nueva Andalucía. Choisis ta matière, entre dans ton niveau et trouve la théorie, les activités et les grilles d’évaluation.',
      foot1: 'IES NUEVA ANDALUCÍA · DÉPARTEMENT D’ARTS', foot2: 'PROFESSEUR : LUIS ALBERTO DELGADO MÁRQUEZ',
      elige: 'Choisis ta matière', manualBtn: 'Manuel du joueur', mundo: 'MONDE', niveles: 'NIVEAUX', nivel: 'NIVEAU', nivelCorto: 'Niveau',
      cambiar: '◂ Changer de matière', descMateria: (n, k) => `${n}. ${k} niveaux répartis sur trois trimestres.`,
      tMapa: 'Carte des niveaux', tMaterial: 'Matériel', tEval: 'Comment tu es évalué·e', cuadernoArt: 'Carnet d’artiste', manualDT: 'Manuel de DT',
      trim: ['Premier trimestre', 'Deuxième trimestre', 'Troisième trimestre'],
      st: { done: 'Réussi', live: 'En jeu', locked: 'Verrouillé' },
      mapaDe: m => `◂ Carte de ${m}`, otros: 'Autres niveaux',
      tabsNivel: { mision: 'Mission', teoria: 'Théorie', actividades: 'Activités', recursos: 'Ressources', rubrica: 'Grille' },
      obras: 'Zone en travaux',
      o: {
        material: 'Ici, il y aura la liste du matériel nécessaire pour cette matière.',
        evaluacion: 'Ici, il y aura les critères de notation expliqués simplement.',
        cuadernoDT: 'Ici, il y aura comment organiser ton manuel de DT.', cuaderno: 'Ici, il y aura comment organiser ton carnet d’artiste.',
        mision: 'Ici, il y aura le défi de ce niveau et le produit final que tu vas créer.',
        teoria: 'Ici, il y aura les contenus de l’unité, à consulter quand tu veux.',
        actividades: c => `Ici, il y aura les activités séance par séance, y compris celles du ${c}.`,
        recursos: 'Ici, il y aura les liens vers les présentations, les vidéos et les documents.',
        rubrica: 'Ici, il y aura la grille : ce qui est évalué et comment atteindre chaque niveau.',
        normas: 'Ici, il y aura les règles d’utilisation de la salle d’arts et du matériel.',
        materialComun: 'Ici, il y aura le matériel utilisé dans toutes les matières.',
        cuadernoManual: 'Ici, il y aura ce qu’est le carnet d’artiste et comment y travailler.',
        classroom: 'Ici, il y aura comment rendre les travaux sur Classroom et organiser ton dossier Drive.'
      },
      manualTitle: 'Manuel du joueur', manualDesc: 'Ce qui sert pour toutes les matières de Dessin.', volver: '◂ Retour aux matières',
      tabsManual: { normas: 'Règles de la salle d’arts', material: 'Matériel commun', cuaderno: 'Carnet d’artiste', classroom: 'Rendus et Classroom' },
      meses: ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'],
      p: { pulsa: 'Appuie sur ▶ pour voir la construction étape par étape.', paso: 'Étape', PASO: 'ÉTAPE', listo: 'PRÊT', play: '▶ Lecture', pausa: '❚❚ Pause', repetir: '⟲ Revoir', video: '▶ Voir la vidéo sur YouTube', reset: 'Recommencer', prev: 'Étape précédente', next: 'Étape suivante' },
      aviso: 'Traduit de l’espagnol. Si quelque chose n’est pas clair, demande à ton professeur.'
    },
    ru: {
      langLabel: 'Язык', materias: 'Предметы', manual: 'Справочник', credits: 'КРЕДИТЫ',
      tag: 'Сайт по рисованию и черчению школы IES Nueva Andalucía. Выбери свой предмет, войди в свой уровень и найди теорию, задания и критерии оценивания.',
      foot1: 'IES NUEVA ANDALUCÍA · КАФЕДРА ИСКУССТВ', foot2: 'УЧИТЕЛЬ: LUIS ALBERTO DELGADO MÁRQUEZ',
      elige: 'Выбери предмет', manualBtn: 'Справочник игрока', mundo: 'МИР', niveles: 'УРОВНИ', nivel: 'УРОВЕНЬ', nivelCorto: 'Уровень',
      cambiar: '◂ Сменить предмет', descMateria: (n, k) => `${n}. ${k} уровней на три триместра.`,
      tMapa: 'Карта уровней', tMaterial: 'Материалы', tEval: 'Как тебя оценивают', cuadernoArt: 'Альбом художника', manualDT: 'Справочник по черчению',
      trim: ['Первый триместр', 'Второй триместр', 'Третий триместр'],
      st: { done: 'Пройден', live: 'Идёт сейчас', locked: 'Закрыт' },
      mapaDe: m => `◂ Карта: ${m}`, otros: 'Другие уровни',
      tabsNivel: { mision: 'Миссия', teoria: 'Теория', actividades: 'Задания', recursos: 'Ресурсы', rubrica: 'Критерии' },
      obras: 'Идёт строительство',
      o: {
        material: 'Здесь будет список материалов для этого предмета.',
        evaluacion: 'Здесь будут критерии оценивания, объяснённые простыми словами.',
        cuadernoDT: 'Здесь будет, как оформлять твой справочник по черчению.', cuaderno: 'Здесь будет, как оформлять твой альбом художника.',
        mision: 'Здесь будет задача этого уровня и итоговый продукт, который ты создашь.',
        teoria: 'Здесь будет теория раздела, чтобы ты мог(ла) смотреть её в любой момент.',
        actividades: c => `Здесь будут задания по урокам, в том числе для: ${c}.`,
        recursos: 'Здесь будут ссылки на презентации, видео и документы.',
        rubrica: 'Здесь будут критерии оценивания: что оценивается и как достичь каждого уровня.',
        normas: 'Здесь будут правила работы в мастерской и с материалами.',
        materialComun: 'Здесь будут материалы, которые нужны на всех предметах.',
        cuadernoManual: 'Здесь будет, что такое альбом художника и как с ним работать.',
        classroom: 'Здесь будет, как сдавать работы в Classroom и упорядочить папку на Drive.'
      },
      manualTitle: 'Справочник игрока', manualDesc: 'То, что нужно на всех предметах по рисованию и черчению.', volver: '◂ Назад к предметам',
      tabsManual: { normas: 'Правила мастерской', material: 'Общие материалы', cuaderno: 'Альбом художника', classroom: 'Сдача работ и Classroom' },
      meses: ['янв.', 'фев.', 'мар.', 'апр.', 'мая', 'июн.', 'июл.', 'авг.', 'сен.', 'окт.', 'нояб.', 'дек.'],
      p: { pulsa: 'Нажми ▶, чтобы увидеть построение шаг за шагом.', paso: 'Шаг', PASO: 'ШАГ', listo: 'ГОТОВО', play: '▶ Запустить', pausa: '❚❚ Пауза', repetir: '⟲ Повторить', video: '▶ Смотреть видео на YouTube', reset: 'Начать заново', prev: 'Предыдущий шаг', next: 'Следующий шаг' },
      aviso: 'Перевод с испанского. Если что-то непонятно, спроси учителя.'
    }
  };

  /* Nombres de materias y títulos de niveles */
  const NOMBRES = {
    en: { epva1: 'Visual and Audiovisual Arts', pepa2: 'Visual and Audiovisual Arts Project', epva3: 'Visual and Audiovisual Arts', dt4: 'Technical Drawing', exp4: 'Artistic Expression' },
    fr: { epva1: 'Arts plastiques, visuels et audiovisuels', pepa2: 'Projet d’arts plastiques et audiovisuels', epva3: 'Arts plastiques, visuels et audiovisuels', dt4: 'Dessin technique', exp4: 'Expression artistique' },
    ru: { epva1: 'Изобразительное и аудиовизуальное искусство', pepa2: 'Проект по изобразительному и аудиовизуальному искусству', epva3: 'Изобразительное и аудиовизуальное искусство', dt4: 'Техническое черчение', exp4: 'Художественное выражение' }
  };
  const NIVELES = {
    en: {
      epva1: ['Card bestiary', 'Workshop pictograms', 'Al-Andalus tiles', 'Moving images', 'Comic strips about living together', 'The Year 1 museum'],
      pepa2: ['25N poster: seeing like Javier Jaén', 'Winter prints', 'Light that draws', 'The school wall', 'School stories', 'Second life', 'Bringing the school to life'],
      epva3: ['A historical triptych', 'Imaginary doors of the school', 'Colour and perception', 'Real or fake? Reading images', 'Al-Andalus patterns', 'From flat to volume', 'Views in motion'],
      dt4: ['Natural geometry: the golden carton', 'Nasrid tilework', 'Branded curves', 'Space on two planes', 'The school in perspective', 'Technical data sheet', 'Design your school'],
      exp4: ['Potions', 'Graphic humour', 'Fake food for creative hunger', 'Artists and artisans', 'Ephemeral sculpture', 'An ad against hoaxes and stereotypes', 'Walls with a voice', 'ESO promo video']
    },
    fr: {
      epva1: ['Bestiaire de cartes', 'Pictogrammes de l’atelier', 'Tesselles d’al-Andalus', 'Images qui bougent', 'Vignettes du vivre-ensemble', 'Le musée de 1.º'],
      pepa2: ['Affiche 25N : regarder comme Javier Jaén', 'Estampes d’hiver', 'La lumière qui dessine', 'Le mur du lycée', 'Histoires du lycée', 'Seconde vie', 'On anime le lycée'],
      epva3: ['Un triptyque historique', 'Portes imaginaires du lycée', 'Couleur et perception', 'Vraie ou fausse ? Lire les images', 'Trames d’al-Andalus', 'Du plan au volume', 'Regards en mouvement'],
      dt4: ['Géométrie naturelle : l’emballage d’or', 'Carrelage nasride', 'Courbes de marque', 'L’espace sur deux plans', 'Le lycée en perspective', 'Fiche technique', 'Conçois ton lycée'],
      exp4: ['Potions', 'Humour graphique', 'Fausse nourriture pour la faim créative', 'Artistes et artisans', 'Sculpture éphémère', 'Spot contre les fake news et les stéréotypes', 'Murs qui parlent', 'Vidéo promotionnelle de l’ESO']
    },
    ru: {
      epva1: ['Бестиарий карточек', 'Пиктограммы мастерской', 'Мозаики аль-Андалуса', 'Движущиеся изображения', 'Комиксы о жизни в школе', 'Музей 1-го курса'],
      pepa2: ['Плакат 25N: смотреть как Хавьер Хаэн', 'Зимние оттиски', 'Свет, который рисует', 'Стена школы', 'Истории школы', 'Вторая жизнь', 'Оживляем школу'],
      epva3: ['Исторический триптих', 'Воображаемые двери школы', 'Цвет и восприятие', 'Правда или фейк? Читаем изображения', 'Узоры аль-Андалуса', 'От плоскости к объёму', 'Взгляды в движении'],
      dt4: ['Природная геометрия: золотая упаковка', 'Насридская плитка', 'Фирменные кривые', 'Пространство в двух плоскостях', 'Школа в перспективе', 'Технический лист', 'Спроектируй свою школу'],
      exp4: ['Зелья', 'Графический юмор', 'Ненастоящая еда для творческого голода', 'Художники и ремесленники', 'Эфемерная скульптура', 'Ролик против фейков и стереотипов', 'Стены с голосом', 'Промо-видео ESO']
    }
  };

  let lang = 'es';
  try { const s = localStorage.getItem('insertart-lang'); if (s && UI[s]) lang = s; } catch (e) { }
  const listeners = [];
  window.I18N = {
    LANGS,
    get lang() { return lang; },
    get ui() { return UI[lang]; },
    set(l) {
      if (!UI[l] || l === lang) return;
      lang = l;
      try { localStorage.setItem('insertart-lang', l); } catch (e) { }
      document.documentElement.lang = l;
      listeners.forEach(fn => fn(l));
    },
    on(fn) { listeners.push(fn); },
    nombre(m) { return (NOMBRES[lang] || {})[m.id] || m.nombre; },
    nivel(m, j) { return ((NIVELES[lang] || {})[m.id] || [])[j] || m.niveles[j][0]; }
  };
  document.documentElement.lang = lang;
})();
