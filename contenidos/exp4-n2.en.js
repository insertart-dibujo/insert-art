/* INSERT ART · EXP 4 · Level 02 · Graphic humour · ENGLISH */
(function () {
  window.EXP4N2 = window.EXP4N2 || {};
  window.EXP4N2.en = {
    t: {
      'Escala de planos: la misma figura vista con seis encuadres distintos': 'Shot sizes: the same figure seen with six different framings',
      'Gran plano general': 'Extreme long shot', 'Plano general': 'Long shot', 'Plano americano': 'American shot', 'Plano medio': 'Medium shot', 'Primer plano': 'Close-up', 'Plano detalle': 'Detail shot',
      'Cuatro leyes de la percepción: proximidad, semejanza, cierre y figura-fondo': 'Four laws of perception: proximity, similarity, closure and figure-ground',
      'PROXIMIDAD': 'PROXIMITY', 'SEMEJANZA': 'SIMILARITY', 'CIERRE': 'CLOSURE', 'FIGURA Y FONDO': 'FIGURE AND GROUND',
      'Esquema de un meme: texto arriba, imagen en el centro, contexto y giro': 'Diagram of a meme: text at the top, image in the middle, context and twist',
      'YO: HOY EMPIEZO CON TIEMPO': 'ME: TODAY I START EARLY', 'TAMBIÉN YO, LA NOCHE ANTES:': 'ALSO ME, THE NIGHT BEFORE:',
      'TEXTO': 'TEXT', 'IMAGEN': 'IMAGE', 'GIRO': 'TWIST'
    },
    ui: { indice: 'Contents', tocAria: 'Theory contents', cuadernoLabel: 'In your artist\'s sketchbook:', misionK: 'MISSION',
      diasIntro: 'The theory is split into <b>five days</b>. Each day is read or explained in class in <b>15 minutes at most</b> and prepares you for an activity. The “Watch more” videos are for going further at home: they are not part of those 15 minutes.',
      diaK: 'DAY', minutos: '15 min', prepara: 'Prepares you for', actK: 'Activity',
      dias: ['Reading art and laughing with it', 'Visual language', 'Building the idea', 'Framing and assembling', 'Present and evaluate'],
      saberK: 'Basic knowledge', verMas: 'Watch more (at home)', abreYT: 'Opens on YouTube',
      subt: 'The videos are in Spanish. On YouTube you can turn on subtitles and translate them automatically into your language.',
      videosT: 'Videos for this level', videosP: 'All the theory videos, organised by day. They open on YouTube.' },
    sec: {
      meme: ['What is a meme?', h => `
        <p class="def">A <b>meme</b> is an idea that is copied and changed as it passes from person to person.</p>
        <div class="flujo"><span>IDEA</span><b>→</b><span>COPY</span><b>→</b><span>NEW VERSION</span></div>
        <p>The biologist <b>Richard Dawkins</b> invented the word in his book <i>The Selfish Gene</i> (1976). Today we use it mostly for the images with text that circulate on the internet: they are shared, copied, and everyone gives them a new twist.</p>`],
      lectura: ['Reading an image: denotation and connotation', h => `
        <p>Before transforming an artwork you need to know how to read it. Every image can be read in two ways:</p>
        <div class="lectura">
          <div><h3>Denotative reading</h3><p><b>What you see</b>, objectively: everyone would agree.</p>
            <ul><li>Sheet: title, artist, date and technique.</li><li>Which figures and objects appear.</li><li>Colours, light and composition.</li></ul></div>
          <div><h3>Connotative reading</h3><p><b>What it suggests</b>: the meaning, which depends on who looks and when.</p>
            <ul><li>What emotions it conveys.</li><li>What symbols it uses and what they mean.</li><li>What it meant in its time and what it tells us today.</li></ul></div>
        </div>
        <p class="tip"><b>Tip:</b> if what you write starts with “you can see…”, it is denotation. If it starts with “it seems…”, “it suggests…” or “it represents…”, it is connotation.</p>
        ${h.cuaderno('first do the denotative reading and then the connotative reading of each artwork.')}`],
      historia: ['Art was laughing long before the internet', h => `
        <p>Critical humour was not invented by the internet. Look at <b>the technique</b> each artist used: it was the way to make their image reach many people.</p>
        <ul class="cual">
          <li><b>Goya</b><span><i>Los Caprichos</i> (1799). <b>Printmaking</b> with etching and aquatint: many copies are printed from one plate. Satire of the vices and power of his time.</span></li>
          <li><b>Daumier</b><span>19th century. <b>Lithography</b> for newspapers: caricatures that exaggerate the features of the powerful to criticise them.</span></li>
          <li><b>Arts Incohérents</b><span>Paris, 1880s. Artists who parodied famous artworks with absurd humour: memes before memes.</span></li>
          <li><b>Duchamp</b><span><i>L.H.O.O.Q.</i> (1919). <b>Pencil on a postcard</b> of the Mona Lisa: he draws a moustache and a goatee. He changes an art icon to provoke.</span></li>
        </ul>
        <p class="def"><b>From art to design:</b> these techniques did not stay in museums. Printmaking illustrated books, lithography filled posters and newspapers, and photomontage ended up on magazine covers and in advertising.</p>
        <p>Like them, you will start from a well-known artwork and change its meaning to say something new.</p>`],
      lenguaje: ['Visual language: elements, composition and colour', h => `
        <p class="def">An image is built with <b>visual elements</b>, just as a sentence is built with words.</p>
        <ul class="cual cual5">
          <li><b>Point</b><span>Attracts the eye.</span></li>
          <li><b>Line</b><span>Guides the eye and creates movement.</span></li>
          <li><b>Shape</b><span>Figures and patches.</span></li>
          <li><b>Colour</b><span>Emotion and contrast.</span></li>
          <li><b>Texture</b><span>How it looks to the touch.</span></li>
        </ul>
        <h3 class="sub">Composition: how the elements are arranged</h3>
        <ul class="cual">
          <li><b>Focal point</b><span>The first thing you look at. Place it where you want people to look.</span></li>
          <li><b>Visual weight</b><span>What is big, dark, saturated or isolated weighs more.</span></li>
          <li><b>Balance</b><span>Symmetrical: calm and order. Asymmetrical: movement and tension.</span></li>
          <li><b>Rule of thirds</b><span>Divide the image into 3 × 3 and place the important things where the lines cross.</span></li>
        </ul>
        <h3 class="sub">Colour</h3>
        <ul class="cards3">
          <li><b>Warm and cool</b><span>Red, orange and yellow come forward and give energy. Blue, green and violet recede and calm.</span></li>
          <li><b>Complementary</b><span>Red-green, blue-orange, yellow-violet. Together they give maximum contrast.</span></li>
          <li><b>Symbolic</b><span>Red can mean passion or danger. The meaning depends on culture and context.</span></li>
        </ul>
        ${h.cuaderno('in the denotative reading of each artwork, point out the focal point, the type of balance and the dominant colours.')}`],
      percepcion: ['How we look: visual perception', h => `
        <p>We do not see things separately: the brain <b>organises</b> them to make sense of them. <b>Gestalt</b> psychology (Germany, early 20th century) described the laws it follows.</p>
        ${h.gestalt()}
        <ul class="cual">
          <li><b>Proximity</b><span>Things that are close together are seen as a group.</span></li>
          <li><b>Similarity</b><span>Things that look alike (shape, colour) are grouped.</span></li>
          <li><b>Closure</b><span>The brain completes incomplete shapes.</span></li>
          <li><b>Figure and ground</b><span>We separate what stands out from what is behind. Sometimes they can swap.</span></li>
        </ul>
        <p class="tip"><b>In your meme:</b> the main figure must stand out clearly from the background, and the pieces that go together must be close or look alike.</p>`],
      anatomia: ['Anatomy of a meme', h => `
        ${h.fig()}
        <ul class="cual"><li><b>Text</b><span>Sets up the situation.</span></li><li><b>Image</b><span>Gives the reaction.</span></li><li><b>Context</b><span>We recognise something that happens to us.</span></li><li><b>Twist</b><span>The contradiction creates the humour.</span></li></ul>`],
      recursos: ['Advertising: persuade and make people laugh', h => `
        <p>Advertising wants you to do something: buy, vote, think in a certain way. To persuade you it uses three kinds of devices:</p>
        <ul class="cards3">
          <li><b>Formal</b><span>What you see: composition, colour, typography and shot.</span></li>
          <li><b>Linguistic</b><span>What is said: a short slogan, wordplay, rhyme, questions and commands (“Try it!”).</span></li>
          <li><b>Persuasive</b><span>How it convinces you: emotion, humour, desire, a famous person or the feeling of belonging to the group.</span></li>
        </ul>
        <h3 class="sub">Four figures shared by memes and advertising</h3>
        <ul class="cual">
          <li><b>Hyperbole</b><span>Exaggerating: “I have a million homework tasks”. A million?</span></li>
          <li><b>Irony</b><span>Saying the opposite: “Great”, when the internet goes down.</span></li>
          <li><b>Visual metaphor</b><span>Replacing: a backpack turned into a mountain.</span></li>
          <li><b>Incongruity</b><span>Breaking logic: a king waiting for the bus.</span></li>
        </ul>
        <p class="def"><b>Consumer society:</b> many adverts do not sell a product, they sell a desire (being happy, popular, admired). A critical meme can turn that message upside down.</p>
        <p class="tip"><b>To practise:</b> in the <b>Resources</b> tab you have the game “Which device is it?”.</p>`],
      estereotipos: ['Humour yes, stereotypes no', h => `
        <p class="def">A <b>stereotype</b> is a simplified, repeated idea about a group of people: “girls are…”, “people from that place are…”.</p>
        <ul class="cards3">
          <li><b>Sexist roles</b><span>Adverts where she cleans and he drives, or toys are “for girls” and “for boys”.</span></li>
          <li><b>Body standards</b><span>Retouched bodies that hardly anyone has, shown as normal.</span></li>
          <li><b>Hurtful humour</b><span>Laughing at someone's gender, origin or body repeats those stereotypes.</span></li>
        </ul>
        <p><b>Question prejudices, not the people who suffer them.</b></p>
        <p class="ojo"><b>Before accepting your idea, ask yourselves:</b> who are we laughing at? Does it criticise an idea or humiliate a person?</p>`],
      planos: ['Framing, shot and angle', h => `
        <p class="def"><b>Framing</b> means deciding what stays inside the image and what stays outside. Depending on how close we are, we talk about different <b>shots</b>.</p>
        ${h.planos()}
        <ul class="cual cual3">
          <li><b>Extreme long shot</b><span>The place. The figure is small: it sets the scene.</span></li>
          <li><b>Long shot</b><span>The whole figure in its surroundings.</span></li>
          <li><b>American shot</b><span>Down to the knees: figure and action.</span></li>
          <li><b>Medium shot</b><span>Down to the waist: what they are doing.</span></li>
          <li><b>Close-up</b><span>The face: the emotion.</span></li>
          <li><b>Detail shot</b><span>A small part that matters.</span></li>
        </ul>
        <h3 class="sub">Angle: where we look from</h3>
        <ul class="cual">
          <li><b>Eye level</b><span>At eye height: neutral.</span></li>
          <li><b>High angle</b><span>From above: the figure looks small or weak.</span></li>
          <li><b>Low angle</b><span>From below: the figure looks big and powerful.</span></li>
          <li><b>Dutch angle</b><span>Tilted image: instability, something is wrong.</span></li>
        </ul>
        <p><b>Sequential image:</b> several images in order that tell a story, like comics, the <i>storyboard</i> or two-panel memes “what I expect / what happens”.</p>
        <p class="tip"><b>In your meme:</b> cutting out a face in close-up or a whole figure changes what it tells. A character in low angle will look powerful; in high angle, small.</p>`],
      fotomontaje: ['Traditional and digital photomontage', h => `
        <p class="def"><b>Photomontage:</b> joining fragments of different photographs or images to create a new image with a different meaning.</p>
        <p><b>Origin:</b> in Berlin, around 1918–1920, the Dadaists <b>Hannah Höch</b>, <b>Raoul Hausmann</b> and <b>John Heartfield</b> cut out photos from newspapers and magazines to criticise war and politics. Heartfield took photomontage to magazine covers: from art to graphic design.</p>
        <div class="lectura">
          <div><h3>Traditional</h3><ul><li>Scissors, glue and printed reproductions.</li><li>The pieces are moved around on the paper before gluing.</li><li>The cut edges show, and that is expressive too.</li></ul></div>
          <div><h3>Digital</h3><ul><li>A digital photograph is made of <b>pixels</b>.</li><li>Editing programs work in <b>layers</b>.</li><li>You can cut out, resize and change colour without leaving a trace.</li></ul></div>
        </div>
        <ol class="pasos3"><li><b>Cut out</b>Fragments of different artworks: a head, a background, an object…</li><li><b>Try combinations</b>Move the pieces around before gluing. Look for contrast.</li><li><b>Glue with intention</b>Every piece must say something.</li></ol>
        <p class="ojo"><b>A photo can lie too.</b> Digital montages are used to create hoaxes. Before believing or sharing an image, check where it comes from.</p>
        <p class="tip"><b>You work in traditional photomontage:</b> cut-outs of reproductions of artworks, on paper.</p>`],
      vistazo: ['Understood at a glance', h => `
        <ul class="cards3"><li><b>Contrast</b><span>Big / small. Serious / absurd.</span></li><li><b>Synthesis</b><span>Few elements. One clear idea.</span></li><li><b>Text + image</b><span>Together they say something they would not say alone.</span></li></ul>
        <p class="tip"><b>The one-second test:</b> show the meme to someone for one second. If they get it, it works.</p>`],
      proceso: ['The creative process', h => `
        <p>An art project does not happen all at once: it goes through stages. This is yours:</p>
        <ol class="fases-n2">
          <li><b>Research</b><span>Read the artworks.</span><em>Activity 1</em></li>
          <li><b>Plan</b><span>What we want to say, with which device, for whom and where.</span><em>Activity 2</em></li>
          <li><b>Sketch</b><span>Try out several quick options.</span><em>Activity 2</em></li>
          <li><b>Make</b><span>The photomontage.</span><em>Activity 3</em></li>
          <li><b>Review</b><span>Is it clear? Does it hurt anyone? Fix it.</span><em>Activity 3</em></li>
          <li><b>Present</b><span>Tell the class about it.</span><em>Activity 4</em></li>
          <li><b>Evaluate</b><span>Assess the process and the result.</span><em>Activity 4</em></li>
        </ol>
        <h3 class="sub">Three ways to evaluate</h3>
        <ul class="cards3">
          <li><b>Self-reflection</b><span>What I have learnt, what was hard and what I would change.</span></li>
          <li><b>Self-assessment</b><span>I give myself a mark with the rubric.</span></li>
          <li><b>Peer assessment</b><span>I assess other pairs' work, with reasons and respect.</span></li>
        </ul>
        <p class="tip"><b>Mistakes are part of the process:</b> what did not work and how you fixed it is exactly what you will be asked in the presentation.</p>`]
    },
    mision: {
      titulo: 'Turn an artwork into a meme',
      reto: 'Artists have been using humour to criticise their time for centuries. Your mission, <b>in pairs</b>, is to turn a historical artwork into a <b>meme with a critical eye</b>, made with <b>traditional photomontage</b>: cutting out and gluing fragments of different artworks. Design it to be placed in <b>a space in the school</b>. With intention and without hurting anyone.',
      fasesT: 'How to play',
      fases: [
        ['Read the artwork', 'Choose two historical artworks, one of them Andalusian, and do their denotative and connotative reading.'],
        ['Find the idea', 'Decide which artwork you will transform, which device you will use, where the twist is and in which space of the school you would place it.'],
        ['Photomontage', 'Cut out, try combinations and glue with intention. One meme per pair.'],
        ['Present it', 'Explain your meme to the class and assess your work and that of the other pairs.']
      ],
      entregasT: 'What you have to hand in',
      entregas: [
        '<b>The meme</b>, by hand, and <b>a photo of the meme</b> in the Classroom assignment.',
        '<b>Photos of the pages of your artist\'s sketchbook</b> (reading of the artworks and sketch of the idea) in the Classroom assignment.',
        'The <b>presentation</b> in class and the <b>self-assessment</b>.'
      ],
      pista: '<b>Remember:</b> you cannot take photos inside the school. The meme is designed for a space in the school, but it is made on paper; take the photos for Classroom at home.'
    },
    act: {
      intro: 'You work <b>in pairs</b> and we are going fast: each activity fits into one or two sessions. Written work goes in your <b>artist\'s sketchbook</b>. <b>Hand-in:</b> the meme, by hand; and in the Classroom assignment, a photo of the meme and photos of the sketchbook pages (taken at home, never inside the school).',
      acts: [
        ['Read the artwork', 'Block 1', {"obj": "Learn to read an artwork before transforming it.", "pasos": ["Choose <b>two historical artworks</b> you would like to turn into a meme. <b>One must be Andalusian.</b>", "Make the <b>sheet</b> for each artwork: title, artist, date and technique.", "<b>Denotative reading:</b> write what you see (figures, objects, colours and composition).", "<b>Connotative reading:</b> write what it suggests (symbols, emotions and message).", "<b>Then and now:</b> explain what the artwork said in its time and what it could say today."], "donde": "In pairs, in your artist's sketchbook.", "entrega": "Photos of these sketchbook pages in the Classroom assignment (taken at home, never inside the school)."}],
        ['The idea', 'Block 2', {"obj": "Decide what your meme will say and where it will be seen.", "pasos": ["Choose <b>one</b> of the two artworks.", "Choose the <b>device</b>: hyperbole, irony, visual metaphor or incongruity.", "Decide where the <b>twist</b> is and write the <b>text</b>.", "Decide in which <b>space of the school</b> you would place it and for which <b>audience</b>.", "Make a <b>quick sketch</b> of the meme.", "Check: <b>does it criticise an idea or humiliate a person?</b> If it humiliates, change it."], "donde": "In pairs, in your artist's sketchbook.", "entrega": "Photos of these sketchbook pages in the Classroom assignment (taken at home, never inside the school)."}],
        ['Photomontage', 'Block 3', {"obj": "Make your meme on paper.", "pasos": ["Cut out <b>fragments of different artworks</b>: a head, a background, an object…", "<b>Try combinations</b> before gluing. Look for contrast.", "<b>Glue with intention</b>: each piece has to say something.", "Add the <b>text</b>.", "Check that it is <b>understood at a glance</b>: few elements, contrast, and text and image together."], "donde": "In pairs, in class. One meme per pair.", "entrega": "The meme, by hand. And a photo of the meme in the Classroom assignment (taken at home)."}],
        ['Presentation', 'Block 4', {"obj": "Tell the class about your meme and assess it.", "pasos": ["Prepare <b>as a pair</b> the answers to the questions in step 2.", ["Present your meme to the class: the idea and the space in the school you designed it for. <b>Your teacher will ask you these questions:</b>", ["<b>How did you do it?</b> Explain the steps, from reading the artworks to the finished photomontage. <span class=\"il-crit\">Criterion 4.2</span>", "<b>What was hardest and how did you solve it?</b> For example, finding the twist or making the pieces fit together. <span class=\"il-crit\">Criterion 4.2</span>", "<b>What are you proudest of and what would you change if you did it again?</b> <span class=\"il-crit\">Criterion 4.2</span>"]], "Then do the <b>self-assessment and peer assessment</b> in the form your teacher will give you."], "donde": "In pairs, in class.", "entrega": "The presentation is oral, in class. The self-assessment and peer assessment, in the form."}]
      ],
      cotejoT: 'Checklist: how are you doing?',
      cotejoP: 'Tick what you have already done. Your ticks are saved only on this device. When your teacher asks, <b>take a screenshot of this list and upload it to the Classroom assignment</b>: that way they can give you feedback.',
      grupos: [
        ['Read the artwork', ['We have two historical artworks and one is Andalusian.', 'Each artwork has its sheet (title, artist, date and technique).', 'We have done the denotative reading of both.', 'We have done the connotative reading of both.', 'We have explained what each artwork said in its time and what it could say today.']],
        ['The idea', ['We have chosen the artwork and the humour device.', 'We know where the twist is and we have the text.', 'We have decided the space in the school and the audience.', 'We have checked that it does not humiliate anyone or repeat stereotypes.']],
        ['Photomontage', ['We have cut out fragments of different artworks.', 'We have tried combinations before gluing.', 'The meme has text and is understood at a glance.']],
        ['Presentation and hand-in', ['We have prepared the explanation: idea, space, process, difficulties and achievements.', 'We have done the self-assessment and peer assessment.', 'We have handed in the meme by hand.', 'We have uploaded the photo of the meme and the sketchbook photos to Classroom.']]
      ],
      progreso: (n, t) => `You have ${n} of ${t}`, borrar: 'Clear my ticks', confirmar: 'Sure? Press again to clear.'
    },
    juego: {
      titulo: 'Which device is it?',
      intro: 'Read each situation and choose the humour device it uses. There are eight rounds.',
      ops: { hiperbole: 'Hyperbole', ironia: 'Irony', metafora: 'Visual metaphor', incongruencia: 'Incongruity' },
      items: [
        ['“I have a million homework tasks for tomorrow.”', 'hiperbole', 'Nobody has a million tasks: it is exaggerated to be funny.'],
        ['A king with a crown and cape waiting for the bus.', 'incongruencia', 'A king does not wait for the bus: logic is broken.'],
        ['The wifi goes off right in the middle of a video and someone says: “Great”.', 'ironia', 'They say the opposite of what they think.'],
        ['A backpack drawn as a huge mountain on a student\'s back.', 'metafora', 'The mountain replaces the backpack to show how heavy it is.'],
        ['A Greek statue queuing in the school canteen.', 'incongruencia', 'It mixes two worlds that do not fit together.'],
        ['“I slept so much I saw the sun rise three times.”', 'hiperbole', 'An impossible exaggeration.'],
        ['A clock melting on the desk in the last lesson on Friday.', 'metafora', 'The melting clock replaces the idea that time is not passing.'],
        ['A “Very quiet library” sign surrounded by people shouting.', 'ironia', 'The text says the opposite of what we see.']
      ],
      bien: 'Correct!', mal: 'Not that one. The answer was:', siguiente: 'Next', otraVez: 'Play again',
      ronda: (i, n) => `Round ${i} of ${n}`, puntos: (p, n) => `Correct answers: ${p} of ${n}`,
      final: (p, n) => p === n ? `Full marks! ${p} of ${n}. You have mastered the devices.` : `You got ${p} of ${n}. Review the theory and try again.`
    },
    rub: {
      intro: 'This is how this level is assessed. Each indicator is scored from 1 to 10. The mark for each criterion is the average of its indicators and the level mark is the average of the five criteria.',
      criteriosT: 'Assessment criteria',
      criterios: [
        ['1.1', 'Analyse artistic works from different periods and cultures, placing them in context, describing their essential features, assessing the creative process and the final result, and showing an open, interested and respectful attitude.'],
        ['1.2', 'Critically assess the habits, tastes and artistic references of different periods and cultures, reflecting on how they have evolved and how they relate to those of the present.'],
        ['3.1', 'Take part, with initiative, confidence and creativity, in exploring different audiovisual media, techniques and formats, decoding their languages, identifying the tools and distinguishing their purposes.'],
        ['3.2', 'Create audiovisual productions, individually or collaboratively, taking on different roles; using digital technologies with expressive intention; aiming for a final result that fits the planned project; and choosing and using, correctly and creatively, the most suitable tools and media available.'],
        ['4.2', 'Present the final result of creating an artistic product, individually or in a group, sharing and critically assessing how it was made, the difficulties found, the progress made and the achievements.']
      ],
      niveles: ['Insufficient (1–4)', 'Pass (5)', 'Good (6)', 'Very good (7–8)', 'Excellent (9–10)'],
      criterio: 'Criterion',
      bloques: [
        ['Block 1. Read the artwork', [
          ['IL 1.1.1', 'Denotative reading', '1.1', 'Describes the two chosen artworks objectively (one Andalusian): sheet (title, artist, date and technique) and what you see (figures, colours, composition).', ['An artwork is missing, or the description is minimal or wrong.', 'Basic sheet; describes only some elements.', 'Complete sheet and correct description of the main points.', 'Organised, precise description of figures, colour and composition.', 'Complete description with technical vocabulary.']],
          ['IL 1.1.2', 'Connotative reading', '1.1', 'Interprets the meaning of the artworks: what they suggest, what symbols they use and what emotions they convey.', ['Does not interpret, or confuses describing with interpreting.', 'Vague interpretation, not based on the image.', 'Correct interpretation based on some detail.', 'Interprets symbols and emotions using details of the image.', 'Personal, reasoned interpretation with historical context.']],
          ['IL 1.2.1', 'Then and now', '1.2', 'Relates what the artwork said in its time to what it could say today (tastes, values, customs).', ['Makes no connection.', 'Superficial connection.', 'Explains a similarity or difference with the present.', 'Compares the period and the present with arguments.', 'Reflects critically on how things have changed and connects it to their meme.']]]],
        ['Block 2. The idea', [
          ['IL 3.1.1', 'Device and twist', '3.1', 'Chooses the humour device (hyperbole, irony, visual metaphor or incongruity) and explains where the twist of their meme is.', ['No device or twist.', 'Names a device, but does not apply it.', 'Device and twist identified.', 'Explains how the device creates the twist.', 'Very well chosen and justified device; tries alternatives in the sketch.']],
          ['IL 3.1.2', 'Space and audience', '3.1', 'Designs the meme for a space and an audience in the school and checks that it criticises an idea without reinforcing stereotypes.', ['No target audience, or it reinforces stereotypes.', 'Space or audience not well defined.', 'Space and audience defined, with no stereotypes.', 'The message is adapted to the space and the audience.', 'Justifies the choice and respectfully questions a prejudice.']]]],
        ['Block 3. Photomontage', [
          ['IL 3.2.1', 'Cut out and combine', '3.2', 'Makes the meme by traditional photomontage, cutting out fragments of different artworks and combining them with intention.', ['It is not a photomontage, or uses a single unchanged image.', 'Puts cut-outs together without a clear intention.', 'Combines fragments of several artworks with intention.', 'Clean cut-outs and a combination consistent with the idea.', 'Careful, surprising composition: the pieces say something new.']],
          ['IL 3.2.2', 'Understood at a glance', '3.2', 'The meme is understood at a glance: text and image together, contrast and few elements.', ['It cannot be understood.', 'It is only understood with an explanation.', 'It is understood; text and image are related.', 'Clear and direct, with good contrast and synthesis.', 'Immediate impact: text and image reinforce each other.']]]],
        ['Block 4. Presentation', [
          ['IL 4.2.1', 'Presentation', '4.2', 'Presents the meme to the class, explaining the idea, the process, the difficulties found and the achievements.', ['Does not present, or reads without explaining.', 'Short, unclear presentation.', 'Explains the idea and process clearly.', 'Explains idea, process, difficulties and achievements with technical vocabulary.', 'Clear, engaging presentation; answers questions.']],
          ['IL 4.2.2', 'Self-assessment and peer assessment', '4.2', 'Critically assesses their own work and that of other pairs, with arguments and respect.', ['Does not self-assess.', 'Superficial self-assessment.', 'Identifies successes and mistakes.', 'Suggests specific improvements for their work.', 'Assesses their own and other pairs\' work with sound judgement.']]]]
      ]
    }
  };
})();
