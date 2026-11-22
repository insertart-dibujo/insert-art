/* INSERT ART · EXP 4 · Level 02 · Graphic humour · ENGLISH */
(function () {
  window.EXP4N2 = window.EXP4N2 || {};
  window.EXP4N2.en = {
    t: {
      'Esquema de un meme: texto arriba, imagen en el centro, contexto y giro': 'Diagram of a meme: text at the top, image in the middle, context and twist',
      'YO: HOY EMPIEZO CON TIEMPO': 'ME: TODAY I START EARLY', 'TAMBIÉN YO, LA NOCHE ANTES:': 'ALSO ME, THE NIGHT BEFORE:',
      'TEXTO': 'TEXT', 'IMAGEN': 'IMAGE', 'GIRO': 'TWIST'
    },
    ui: { indice: 'Contents', tocAria: 'Theory contents', cuadernoLabel: 'In your artist\'s sketchbook:', misionK: 'MISSION' },
    sec: {
      meme: ['What is a meme?', h => `
        <p class="def">A <b>meme</b> is an idea that is copied and changed as it passes from person to person.</p>
        <div class="flujo"><span>IDEA</span><b>→</b><span>COPY</span><b>→</b><span>NEW VERSION</span></div>
        <p>The biologist <b>Richard Dawkins</b> invented the word in his book <i>The Selfish Gene</i> (1976). Today we use it mostly for the images with text that circulate on the internet.</p>`],
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
      anatomia: ['Anatomy of a meme', h => `
        ${h.fig()}
        <ul class="cual"><li><b>Text</b><span>Sets up the situation.</span></li><li><b>Image</b><span>Gives the reaction.</span></li><li><b>Context</b><span>We recognise something that happens to us.</span></li><li><b>Twist</b><span>The contradiction makes it funny.</span></li></ul>`],
      historia: ['Art was laughing long before the internet', h => `
        <ul class="cards3">
          <li><b>Goya</b><span><i>Los Caprichos</i> (1799): satire of the vices and power of his time.</span></li>
          <li><b>Daumier</b><span>Caricatures in 19th-century newspapers to criticise society.</span></li>
          <li><b>Duchamp</b><span><i>L.H.O.O.Q.</i> (1919): changing an art icon to provoke.</span></li>
        </ul>
        <p>Like them, you will start from a well-known artwork and change its meaning to say something new.</p>`],
      fotomontaje: ['Traditional photomontage', h => `
        <p class="def"><b>Traditional photomontage:</b> cutting out fragments of different images and gluing them together to create a new image with a different meaning.</p>
        <ol class="pasos3"><li><b>Cut out</b>Fragments of different artworks: a head, a background, an object…</li><li><b>Try combinations</b>Move the pieces around before gluing. Look for contrast.</li><li><b>Glue with intention</b>Each piece has to say something.</li></ol>
        <p class="tip"><b>It is not just putting things together:</b> it is making the pieces say something.</p>`],
      vistazo: ['Understood at a glance', h => `
        <ul class="cards3"><li><b>Contrast</b><span>Big / small. Serious / absurd.</span></li><li><b>Synthesis</b><span>Few elements. One clear idea.</span></li><li><b>Text + image</b><span>Together they say something they would not say alone.</span></li></ul>`],
      recursos: ['Persuade and make people laugh', h => `
        <p>Memes and advertising share tricks. These are the four devices you will use:</p>
        <ul class="cual">
          <li><b>Hyperbole</b><span>Exaggerating: “I have a million homework tasks”. A million?</span></li>
          <li><b>Irony</b><span>Saying the opposite: “Great”, when the internet goes down.</span></li>
          <li><b>Visual metaphor</b><span>Replacing: a backpack turned into a mountain.</span></li>
          <li><b>Incongruity</b><span>Breaking logic: a king waiting for the bus.</span></li>
        </ul>
        <p class="tip"><b>To practise:</b> in the <b>Resources</b> tab you have the game “Which device is it?”.</p>`],
      estereotipos: ['Humour yes, stereotypes no', h => `
        <p>Laughing at someone's gender, origin or body repeats the sexism and body standards we see in advertising and the media. <b>Question prejudices, not the people who suffer them.</b></p>
        <p class="ojo"><b>Before sharing, ask yourselves:</b> who are we laughing at? Does it criticise an idea or humiliate a person?</p>`]
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
