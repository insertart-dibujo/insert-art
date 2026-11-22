/* INSERT ART · EXP 4 · Level 01 · Potions · ENGLISH */
(function () {
  window.EXP4N1 = window.EXP4N1 || {};
  const IMG = { arte: 'img/exp4/recetario-arte-escondido.jpg', curry: 'img/exp4/recetario-curry-platano.jpg', cacao: 'img/exp4/recetario-cacao-remolacha.jpg' };
  const LV = ['Insufficient (1–4)', 'Pass (5)', 'Good (6)', 'Very good (7–8)', 'Excellent (9–10)'];
  window.EXP4N1.en = {
    t: {
      'cúrcuma': 'turmeric', 'pimentón': 'paprika', 'cacao': 'cocoa', 'café': 'coffee', 'remolacha': 'beetroot', 'huevo': 'egg',
      'COLA': 'GLUE', 'HARINA': 'FLOUR', 'tiza': 'chalk', 'espinaca': 'spinach', 'mortero': 'mortar', 'tarros reutilizados': 'reused jars',
      'colador': 'strainer', 'pinceles y cuchara': 'brushes and spoon', 'envases que se reutilizan': 'containers we reuse',
      'restos sólidos al contenedor': 'solid waste in the bin', 'nada por el desagüe': 'nothing down the drain'
    },
    ui: {
      indice: 'Contents', tocAria: 'Theory contents', cuadernoLabel: 'In your recipe book:', misionK: 'MISSION',
      il: {
        ingredientes: 'Illustration: table with ingredients to make paint (turmeric, paprika, cocoa, coffee, beetroot, egg, glue, chalk, spinach and flour)',
        utensilios: 'Illustration: tools to make paint (mortar, jars, strainer, brushes and spoon)',
        humeda: 'Illustration: beetroot dye in a jar and its stain on paper',
        seca: 'Illustration: a turmeric pastel stick and the line it leaves on paper',
        residuos: 'Illustration: reused containers, waste bin and crossed-out drain'
      },
      museosT: 'For your research (reliable sources)',
      museosP: 'Look up your artworks on the official website of the museum that holds them: there you will find the correct date, technique and support.'
    },
    sec: {
      familias: ['Two families: dry and wet techniques', h => `
        <p>Every drawing and painting technique belongs to one of these two families. Knowing which one an artwork belongs to helps you work out how it was made.</p>
        <div class="duo">
          <div class="card"><h3>Dry techniques</h3>${h.il('seca')}
            <p>The material is applied <b>directly by rubbing</b>, with no solvent. The pigment gets trapped in the grain of the paper.</p>
            <p><b>Examples:</b> graphite, charcoal, sanguine, coloured pencils, pastel and wax crayons.</p></div>
          <div class="card"><h3>Wet techniques</h3>${h.il('humeda')}
            <p>The pigment is <b>mixed with a binder and diluted</b>. It dries by evaporation, oxidation or chemical reaction.</p>
            <p><b>Examples:</b> watercolour, ink, gouache, tempera, fresco, oil and acrylic.</p></div>
        </div>
        <p class="tip"><b>Tip to recognise them in an artwork:</b> in dry techniques you can see the stroke and the grain of the paper; in wet ones you see stains, glazes or brush marks.</p>`],
      anatomia: ['Anatomy of a paint', h => `
        <p>Any paint, from cave paintings to a tube of acrylic, is made with the same ingredients:</p>
        <div class="ecuacion"><span>Pigment<small>gives the colour</small></span><b>+</b><span>Binder<small>sticks the colour to the support</small></span><b>+</b><span>Solvent<small>makes it more fluid</small></span><b>=</b><span>Paint</span></div>
        <ul>
          <li><b>Pigment:</b> coloured powder. It can be mineral (earths, charcoal, chalk) or vegetable (turmeric, coffee, beetroot, spinach…).</li>
          <li><b>Binder:</b> the “glue” that holds the pigment particles together and fixes them to the support: egg, glue, oil, gum, flour…</li>
          <li><b>Solvent:</b> the liquid that lets you spread the mixture. In our potions, water.</li>
        </ul>
        ${h.il('ingredientes')}${h.il('utensilios')}
        ${h.cuaderno('always write down the amount of each ingredient (spoonfuls, millilitres…). Without amounts, nobody can repeat your recipe.')}`],
      soporte: ['The technique decides the support', h => `
        <p>Each technique needs a support that can hold it:</p>
        <ul class="cards3"><li><b>Lots of water</b><span>Thick paper that does not wrinkle.</span></li><li><b>Powdered pigment</b><span>Paper with grain that holds it.</span></li><li><b>Oil</b><span>A primed support that protects the fibre.</span></li></ul>
        <p class="tip"><b>The rule can be broken:</b> many artists break these rules on purpose to get new effects. If you do, explain why.</p>`],
      historia: ['From the cave to the tube: a history of recipes', h => `
        <p>For centuries, artists made their own paints. Each period has its recipe:</p>
        <ol class="linea">
          <li><b>Prehistory · Earths and charcoal</b>Iron oxides and charcoal mixed with fat or water. Cueva de la Pileta, Benaoján (Málaga).</li>
          <li><b>Middle Ages · Tempera</b>Egg yolk as a binder, on panels prepared with plaster. Gothic altarpieces and panels.</li>
          <li><b>15th–16th centuries · Oil and fresco</b>Flemish painters perfected oil painting; fresco covered walls and vaults. Michelangelo, Sistine Chapel.</li>
          <li><b>17th century · Oil on canvas</b>Seville school of the Golden Age: Velázquez, Murillo, Valdés Leal.</li>
          <li><b>20th century · Acrylic</b>Synthetic resin: dries quickly and works on almost any support. Mural painting and contemporary art.</li>
        </ol>
        <p class="ojo"><b>Be careful with dates.</b> Always check the century of the artwork on the museum's website: ancient Egypt is not Prehistory, a work from 1562 is no longer the Middle Ages and a work from the late 19th century is not 20th century.</p>`],
      toxicos: ['Beautiful colours, toxic ingredients', h => `
        <p>Some of the most beautiful colours in history were made with poisonous ingredients:</p>
        <ul class="toxicos">
          <li><span class="sym">Pb</span><b>Lead white</b>Also called ceruse. It contains lead. Today titanium white is used.</li>
          <li><span class="sym">Hg</span><b>Vermilion</b>Intense red made from mercury sulphide.</li>
          <li><span class="sym">As</span><b>Orpiment</b>Bright yellow that contains arsenic.</li>
        </ul>
        <p><b>Today</b> safer pigments are used. Even so: always read the label and never pour solvents down the drain.</p>
        <h3>What is a reliable source?</h3>
        <p>If you say an artwork contains a toxic pigment, you must be able to prove it. Reliable sources are the <b>official website of the museum</b> that holds the work (for example, the Prado Museum or MoMA), <b>technical conservation studies</b> and <b>publications</b> by specialists. A comment on social media is not.</p>
        ${h.cuaderno('always say where you got the information from: the name of the website or study.')}`],
      cualidades: ['Qualities of a paint', h => `
        <p>When you test your potion on paper, look at and write down these four qualities:</p>
        <ul class="cual"><li><b>Transparency</b><span>Can you see the paper or what is underneath?</span></li><li><b>Coverage</b><span>Does it completely cover what is underneath?</span></li><li><b>Drying</b><span>How long does it take to dry: minutes, hours…?</span></li><li><b>Adhesion</b><span>Does it stay stuck or come off when you touch it?</span></li></ul>
        <div class="duo">
          ${h.foto(h.IMG.cacao, 'Recipe page with a cocoa pod painted with cocoa and coffee', '<b>Covering paint.</b> The cocoa pod is painted with a cocoa and coffee potion: the colour is dense and the paper does not show through.', [20, 27.5, 27, 39])}
          ${h.foto(h.IMG.curry, 'Recipe page with the banana dye test', '<b>Non-covering (transparent) paint.</b> The banana peel dye test barely stains: you can see the white paper.', [44, 86.4, 48, 10])}
        </div>
        ${h.cuaderno('copy this table into each recipe and fill it in after testing your paint.')}
        <table class="tabla-cual"><tr><th>Quality</th><th>My potion</th></tr><tr><td>Transparency</td><td>high · medium · low</td></tr><tr><td>Coverage</td><td>high · medium · low</td></tr><tr><td>Drying</td><td>fast · medium · slow</td></tr><tr><td>Adhesion</td><td>good · fair · poor</td></tr></table>`],
      seguridad: ['Safety and waste', h => `
        <p>Just because an ingredient is food does not mean you can treat it as food:</p>
        <ul>
          <li>Once mixed, <b>the ingredients are not eaten or tasted</b>.</li>
          <li><b>Egg:</b> wash your hands after using it. A potion with egg cannot be kept: it goes off.</li>
          <li><b>Paprika, curry and spices:</b> do not touch your eyes.</li>
          <li><b>Powdered chalk and charcoal:</b> do not blow the powder.</li>
          <li><b>Beetroot and turmeric:</b> they stain a lot; protect your clothes and the table.</li>
          <li>Use non-toxic ingredients and follow the laboratory rules your teacher gives you.</li>
        </ul>
        ${h.il('residuos')}
        <p><b>When you finish:</b> reuse jars and containers, wash the tools and put solid waste in its bin, never down the drain.</p>`]
    },
    mision: {
      titulo: 'Make your own potions',
      reto: 'If you could not buy any materials, what would you paint with? For centuries, artists made their own paints with whatever they had at hand. Your mission, in groups, is to <b>research how artists from other periods painted</b>, <b>make your own paints</b> with non-toxic ingredients and collect it all in an <b>illustrated recipe book</b> that anyone can follow.',
      fasesT: 'How to play',
      fases: [
        ['Detectives', 'Research five artworks from different periods: what they were painted with and on, and which dangerous pigments were used.'],
        ['Laboratory', 'Make at least two materials, one dry technique and one wet technique, writing down every amount.'],
        ['Tests', 'Paint a sample of each material on a support and write down its qualities.'],
        ['Recipe book', 'Make one A4 page for each material, illustrated with your own potions.'],
        ['Presentation', 'Present the recipe book to the class and assess your work and that of the other groups.']
      ],
      entregasT: 'What you have to hand in',
      entregas: ['The <b>Detectives sheets</b> with the five artworks.', 'The <b>illustrated recipe book</b>: one A4 page per material, with its samples.', 'The <b>oral presentation</b> and the <b>self-assessment</b>.'],
      pista: '<b>To practise:</b> in the <b>Resources</b> tab you have the potion cauldron game.'
    },
    act: {
      intro: 'You work <b>in groups</b>. Part of the work goes in your <b>artist\'s sketchbook</b> and everything is handed in through the <b>Classroom assignment</b>.',
      acts: [
        ['Detectives', 'Block 1', {"obj": "Find out how people painted in different periods: with what materials and on what supports.", "pasos": ["Choose <b>five artworks</b>, one from each period: <b>Prehistory</b>, <b>Middle Ages</b>, <b>15th–16th centuries</b>, <b>17th century</b> and <b>20th century</b>.", "Check the requirements: at least <b>one Andalusian artwork</b>; <b>dry and wet techniques</b>; <b>no repeated technique</b>.", "Check the <b>date</b> of each artwork on the website of the museum that holds it.", "Make the <b>technical sheet</b> of each artwork: artist, title, date, technique, support and where it is kept.", "Describe the <b>visual feature</b> that reveals the technique, support and tools.", "Find a <b>toxic pigment</b> in one of the artworks, quote the <b>reliable source</b> and compare it with the pigment used today."], "donde": "In groups, in your artist's sketchbook.", "entrega": "In the Classroom assignment."}, `<div class="ojo"><b>Common mistakes in this activity:</b><ul>
            <li>Almost nobody chose <b>dry-technique</b> artworks: look for charcoal, sanguine or pastel drawings…</li>
            <li><b>Wrong dates:</b> ancient Egypt is not Prehistory; a work from 1562 is not from the Middle Ages; <i>Sunflowers</i> is from the 19th century, not the 20th.</li>
            <li><b>Wrong technique:</b> a fresco is a wet technique, not a dry one.</li>
            <li><b>Repeated techniques:</b> if you already have an oil painting, the next one must use another technique.</li>
            <li><b>Toxic pigment without a source:</b> without the museum's website or a technical study, the information does not count.</li>
            <li>Each sheet is about a different artwork: do not copy the data from one sheet to another.</li>
          </ul></div>`],
        ['Potion laboratory', 'Block 2', {"obj": "Make your own paints and test how they behave.", "pasos": ["Make <b>at least two materials</b>: one <b>dry technique</b> and one <b>wet technique</b>.", "Use <b>pigment, binder and solvent</b>. The colour must come <b>only from your ingredients</b>: mixing bought paints is not allowed.", "Write down the <b>exact amounts</b> (spoonfuls, millilitres, grams). If you change something while testing, write down the change.", "Paint a <b>sample of each material</b> on a support.", "Write down its <b>qualities</b>: transparency, coverage, drying and adhesion (table in the Theory).", "Use only <b>non-toxic</b> ingredients, follow the laboratory rules and clear away waste and containers."], "donde": "In groups, in the art room.", "entrega": "The samples and notes are part of the recipe book (activity 3)."}, `<div class="ojo"><b>Common mistakes in this activity:</b><ul>
            <li><b>Only wet materials:</b> almost every group made dyes. You also need a dry material (for example, a pastel made of pigment and chalk).</li>
            <li><b>Vague amounts:</b> “a little bit” is not a measurement. Use spoonfuls, millilitres, grams…</li>
            <li><b>Qualities not recorded:</b> no group wrote down the transparency, coverage, drying and adhesion of its samples.</li>
          </ul></div>`],
        ['Illustrated recipe book', 'Block 3', {"obj": "Collect your recipes so that anyone can repeat them.", "pasos": ["Make <b>one A4 page for each material</b>.", ["On each page include:", ["the <b>ingredients</b> with their amounts;", "the <b>steps</b>, numbered and illustrated;", "the material's <b>sample</b>;", "its <b>qualities</b>;", "the <b>safety</b> precautions;", "your <b>conclusions</b>."]], "Illustrate the page <b>with your own potions</b>.", "Check that the design is clear: <b>anyone must be able to follow the recipe</b>."], "donde": "In groups.", "entrega": "In the Classroom assignment."}, `<div class="galeria">
            <a href="${IMG.arte}" target="_blank" rel="noopener noreferrer"><img src="${IMG.arte}" alt="Recipe page «Art hidden in food» with red onion, spinach, carrot and tomato dyes" loading="lazy"><span>Four dyes, numbered steps and colour samples</span></a>
            <a href="${IMG.cacao}" target="_blank" rel="noopener noreferrer"><img src="${IMG.cacao}" alt="Recipe page with cocoa and coffee paint and beetroot paint with egg white" loading="lazy"><span>Illustrated with their own paints</span></a>
            <a href="${IMG.curry}" target="_blank" rel="noopener noreferrer"><img src="${IMG.curry}" alt="Recipe page with curry and banana peel dyes" loading="lazy"><span>Amounts measured in millilitres and spoonfuls</span></a>
          </div>
          <div class="ideas"><b>Good ideas from the class:</b><ul>
            <li>Using <b>white glue</b>, <b>egg white</b> or <b>flour</b> as a binder.</li>
            <li>Reusing leftovers: <b>onion skin</b> and <b>banana peel</b>.</li>
            <li>Getting <b>three shades</b> of one colour by changing only the amount of water.</li>
            <li>Painting the recipe book illustrations <b>with your own potions</b>.</li>
          </ul></div>
          <div class="ojo"><b>What was missing most:</b> the amounts, the qualities of each sample, safety and conclusions.</div>`],
        ['Presentation and self-assessment', 'Block 3', {"obj": "Tell the class about your work and assess it.", "pasos": ["Prepare <b>as a group</b> the answers to the five questions in step 2.", ["Present your recipe book to the class. <b>Your teacher will ask you these five questions:</b>", ["<b>How did you do it?</b> Explain the steps you followed, from the Detectives research to the finished recipe book. <span class=\"il-crit\">Criterion 4.2</span>", "<b>What was hardest and how did you solve it?</b> For example, a recipe that did not work the first time or a paint that did not stick to the paper. <span class=\"il-crit\">Criterion 4.2</span>", "<b>What are you proudest of and what would you change if you did it again?</b> <span class=\"il-crit\">Criterion 4.2</span>", "<b>Which jobs or studies work with what you have done?</b> For example, art restoration, museum conservation, illustration, design or materials chemistry. Would any of them interest you? <span class=\"il-crit\">Criterion 4.3</span>", "<b>What is it useful for you, outside class, to know how to make your own materials with natural ingredients and without creating waste?</b> Give your opinion and justify it. <span class=\"il-crit\">Criterion 4.3</span>"]], "Then do the <b>self-assessment</b> and assess the other groups, with arguments and respect, using the form your teacher will give you."], "donde": "In groups, in the art room.", "entrega": "The presentation is oral, in class. The self-assessment, in the form."}]
      ],
      cotejoT: 'Checklist: how are you doing?',
      cotejoP: 'Tick what you have already done. Your ticks are saved only on this device. When your teacher asks, <b>take a screenshot of this list and upload it to the Classroom assignment</b>: that way they can give you feedback.',
      grupos: [
        ['Detectives', ['We have five artworks, one from each period (Prehistory, Middle Ages, 15th–16th c., 17th c. and 20th c.).', 'We have checked the century of each artwork in a reliable source.', 'At least one artwork is Andalusian.', 'There are dry and wet techniques, with no repeated technique.', 'Each artwork has its complete technical sheet.', 'We have described the visual feature that reveals the technique, support and tools.', 'We have found a toxic pigment, with its reliable source and its modern substitute.']],
        ['Laboratory', ['We have made a dry-technique material.', 'We have made a wet-technique material.', 'The colour comes only from our ingredients.', 'We have written down the exact amounts (and the changes).', 'We have painted a sample of each material on a support.', 'We have recorded transparency, coverage, drying and adhesion.', 'We have followed the rules and managed the waste.']],
        ['Recipe book', ['There is one A4 page per material.', 'Each page has ingredients with amounts and numbered, illustrated steps.', 'Each page has its sample, its qualities, safety and conclusions.', 'We have illustrated the recipe book with our own potions.']],
        ['Presentation', ['We have prepared the explanation of the process, difficulties and achievements.', 'We have done the self-assessment and assessed the other groups.', 'We have handed everything in to the Classroom assignment.', 'We have prepared the answers to the five presentation questions.']]
      ],
      progreso: (n, t) => `You have ${n} of ${t}`, borrar: 'Clear my ticks', confirmar: 'Sure? Press again to clear.'
    },
    juego: {
      titulo: 'The potion cauldron',
      intro: 'If you could not buy any materials, what would you paint with? Choose a pigment, a binder and the amounts. Stir the cauldron and find out what potion you get. Each potion generates its recipe, just like a page of your recipe book.',
      est1: 'Shelf 1 · Pigments (the colour)', est2: 'Shelf 2 · Binders (what sticks the colour to the support)', est3: 'Shelf 3 · Amounts (in spoonfuls)', estH: 'Hidden shelf · From history',
      pigmentos: { curcuma: 'Turmeric', curry: 'Curry', cebolla: 'Onion skin', pimenton: 'Paprika', remolacha: 'Beetroot', granada: 'Pomegranate', arandanos: 'Blueberries', espinaca: 'Spinach', cafe: 'Coffee', cacao: 'Cocoa', platano: 'Banana peel', carbon: 'Charcoal', tiza: 'Chalk' },
      aglutinantes: { ninguno: 'None', cola: 'White glue', clara: 'Egg white', yema: 'Egg yolk', harina: 'Flour (paste)' },
      prohibidos: { albayalde: 'Ceruse', bermellon: 'Vermilion', oropimente: 'Orpiment' },
      cant: { pig: 'Pigment', agl: 'Binder', tiza: 'Ground chalk (gives body)', agua: 'Water' },
      cuch: n => n === 1 ? '1 spoonful' : `${n} spoonfuls`,
      remover: 'Stir the cauldron', vacio: 'Choose the ingredients and press “Stir the cauldron”.',
      seca: 'DRY TECHNIQUE', humeda: 'WET TECHNIQUE',
      cual: { trans: 'Transparency', cubr: 'Coverage', secado: 'Drying', adh: 'Adhesion' },
      nombres: { curcuma: 'Sun Potion', curry: 'Market Potion', cebolla: 'Autumn Potion', pimenton: 'Fire Potion', remolacha: 'Red Earth Potion', granada: 'Alhambra Potion', arandanos: 'Forest Potion', espinaca: 'Garden Potion', cafe: 'Night Potion', cacao: 'Chocolate Potion', platano: 'Snack Potion', carbon: 'Cave Potion', tiza: 'Blackboard Potion' },
      barra: 'stick', polvo: 'powder',
      recetaT: 'Recipe', ingT: 'Ingredients', pasosT: 'Steps', segT: 'Safety',
      prep: { polvo: 'Grind the pigment in the mortar until it is a fine powder.', vegetal: 'Chop the ingredient, crush it with a little hot water, leave it for 10 minutes and strain the liquid.' },
      pasoAgl: (a, n) => `Add ${n} of ${a.toLowerCase()} and mix until there are no lumps.`,
      pasoSinAgl: 'Do not add a binder: the colour will stay loose on the paper.',
      pasoBarra: 'Knead the paste, shape it into a stick and let it dry for a day before using it.',
      pasoPolvo: 'Apply the powder by rubbing it with your finger or a cloth on grainy paper.',
      pasoAgua: n => `Add ${n} of water little by little and stir.`,
      pasoProbar: 'Paint a sample on paper, let it dry and write down its qualities.',
      niveles: { trans: ['low', 'medium', 'high'], cubr: ['low', 'medium', 'high'], secado: ['fast', 'medium', 'slow'], adh: ['poor', 'fair', 'good'] },
      secoBarra: 'Dries in 1 day (stick)', secoPolvo: 'Does not need to dry',
      seg: {
        general: 'Even if they are food, once mixed they are not eaten.',
        huevo: 'Egg: wash your hands; the potion cannot be kept because it goes off.',
        especia: 'Paprika and curry: do not touch your eyes.',
        polvo: 'Chalk and charcoal: do not blow the powder.',
        mancha: 'It stains a lot: protect your clothes and the table.',
        final: 'When you finish, wash the tools and put solid waste in its bin, not down the drain.'
      },
      pistas: { sinAgl: 'Without a binder, the colour comes off when it dries. Try glue, egg white, egg yolk or flour.', diluida: 'Lots of water and little pigment: the colour will be very pale.' },
      toxico: {
        titulo: 'Forbidden potion!',
        albayalde: 'Ceruse or lead white: it contains lead. Today titanium white is used.',
        bermellon: 'Vermilion: a red made from mercury sulphide. Today safer synthetic pigments are used.',
        oropimente: 'Orpiment: a yellow that contains arsenic. Today safer synthetic pigments are used.',
        nota: 'These pigments are only in the game so you learn about history: they are not used in the classroom.'
      },
      retosT: 'Challenges', retosN: (n, t) => `Challenges completed: ${n} of ${t}`,
      retos: [
        ['First potion', 'Make any wet paint.'], ['Dry potion', 'Make a dry-technique material.'],
        ['Three shades', 'Get three shades of one colour by changing only the water.'], ['Cover the black', 'Make a paint with high coverage.'],
        ['Glass', 'Make a transparent paint that sticks well.'], ['The forbidden potion', 'Find the three toxic pigments on the hidden shelf.']
      ]
    },
    rub: {
      intro: 'This is how this level is assessed. Each indicator is scored from 1 to 10. The mark for each criterion is the average of its indicators and the level mark is the average of the criteria.',
      criteriosT: 'Assessment criteria',
      criterios: [
        ['1.1', 'Analyse artistic works from different periods and cultures, placing them in context, describing their essential features, assessing the creative process and the final result, and showing an open, interested and respectful attitude.'],
        ['1.2', 'Critically assess the habits, tastes and artistic references of different periods and cultures, reflecting on how they have evolved and how they relate to those of the present.'],
        ['2.1', 'Take part, with initiative, confidence and creativity, in exploring different graphic and visual art techniques, using tools, media, supports and languages.'],
        ['2.2', 'Create graphic and visual artworks creatively, deciding the expressive intentions and correctly choosing the most suitable tools, media, supports and languages from your personal repertoire.'],
        ['4.1', 'Create an individual or group artistic product, collaboratively and openly, designing the stages of the process and choosing the most suitable techniques and tools to achieve a result adapted to a given intention and audience.'],
        ['4.2', 'Present the final result of creating an artistic product, individually or in a group, sharing and critically assessing how it was made, the difficulties found, the progress made and the achievements.'],
        ['4.3', 'Identify opportunities for personal, social, academic or professional development related to the arts, understanding their added value and expressing a personal opinion in a reasoned and respectful way.']
      ],
      niveles: LV, criterio: 'Criterion',
      bloques: [
        ['Block 1. Detectives', [
          ['IL 1.1', 'Choice of artworks', '1.1', 'Chooses five artworks from the given periods that meet the requirements: one Andalusian and both dry and wet techniques, without repeating.', ['Artworks or periods missing, or most requirements not met.', 'Five artworks, but two requirements not met.', 'Five artworks; one requirement not met.', 'Five artworks that meet all the requirements.', 'Meets all requirements with varied, well-justified artworks.']],
          ['IL 1.2', 'Analysis of the artwork', '1.1', 'Completes the technical sheet and describes the visual feature that reveals the technique, support and tools.', ['Incomplete sheets or wrong data; no visual features described.', 'Basic sheets; vague or generic visual features.', 'Complete sheets; correct visual feature in most.', 'Complete, checked sheets; precise visual feature in all.', 'Analyses with technical vocabulary and links feature, tool and support.']],
          ['IL 1.3', 'Pigments then and now', '1.2', 'Identifies a toxic pigment with a reliable source and reflects on how materials have changed up to today.', ['Does not identify any toxic pigment or does not justify it.', 'Identifies the pigment, but without a reliable source.', 'Identifies the pigment and quotes a reliable source.', 'Also compares it with its modern substitute.', 'Reflects with judgement on how materials have evolved and how they relate to the present.']]]],
        ['Block 2. Laboratory', [
          ['IL 2.1', 'Formulation', '2.1', 'Makes at least two materials (one dry and one wet) with pigment, binder and solvent, and writes down their proportions.', ['Only one material, or materials that do not work.', 'Two materials that work, without proportions written down.', 'Two materials that work, with proportions written down.', 'Adjusts the proportions after testing and writes down the changes.', 'Explores variations on their own initiative and explains how the result changes.']],
          ['IL 2.2', 'Sample on a support', '2.1', 'Paints a sample of each material on a support and records its qualities: transparency, coverage, drying and adhesion.', ['No samples, or not painted with their materials.', 'Samples of only some materials, or unclear.', 'A sample of each material, not very careful.', 'A clear, well-painted sample of each material.', 'Also records its qualities and draws conclusions about each material.']],
          ['IL 2.3', 'Safety and sustainability', '2.2', 'Uses non-toxic ingredients, follows the laboratory rules and manages waste and containers.', ['Breaks the rules or uses unsuitable ingredients.', 'Follows the rules with frequent reminders.', 'Follows the rules and justifies the non-toxicity.', 'Also reuses containers and manages waste well.', 'Suggests sustainable improvements for the laboratory.']]]],
        ['Block 3. Recipe book', [
          ['IL 3.1', 'Project and stages', '4.1', 'Plans the recipe book as a group, shares out tasks and follows the stages of the process up to the final product.', ['No planning; disorganised or incomplete work.', 'Minimal planning; meets deadlines with help.', 'Follows the stages and shares out the tasks.', 'Independent, collaborative organisation in every stage.', 'Manages the process with initiative and helps other groups.']],
          ['IL 3.2', 'Page design', '4.1', 'Each page includes ingredients, illustrated steps, samples, results and safety, with a layout designed for others to use.', ['Sections missing; the recipe cannot be understood.', 'Complete sections, but disorganised.', 'Complete and readable page.', 'Clear, organised and well illustrated.', 'Careful, coherent design: anyone could follow the recipe.']],
          ['IL 3.3', 'Illustration with own potions', '2.2', 'Illustrates the recipe book with the materials made, with expressive intention and responsible use.', ['Does not use their materials.', 'Basic use of their materials.', 'Correct use in the illustrations.', 'Use with expressive intention.', 'Makes creative use of the qualities of each material.']],
          ['IL 3.4', 'Presentation', '4.2', 'Presents the recipe book to the class, explaining the process, the difficulties found and the achievements.', ['Does not present, or reads without explaining.', 'Short, unclear presentation.', 'Explains the process clearly.', 'Explains process, difficulties and achievements with technical vocabulary.', 'Clear, engaging presentation; answers questions.']],
          ['IL 3.5', 'Self-assessment and evaluation', '4.2', 'Critically assesses their own work and that of other groups, with arguments and respect.', ['Does not self-assess.', 'Superficial self-assessment.', 'Identifies successes and mistakes.', 'Suggests specific improvements for their work.', 'Assesses their own and other groups\' work with sound judgement.']],
          ['IL 3.6', 'Opportunities in art', '4.3', 'Identifies opportunities for personal, social, academic or professional development related to the work done and gives their opinion in a reasoned and respectful way (questions 4 and 5 of the guided presentation).', ['Does not identify any.', 'Names one, without explaining it.', 'Identifies some and explains why.', 'Relates several to what they learned and gives their opinion with arguments.', 'Reflects with sound judgement on the value of art in their life and future, respecting other opinions.']]]]
      ]
    }
  };
})();
