/* INSERT ART · PEPA 2 · Level 02 · Winter prints · ENGLISH */
(function () {
  window.PEPA2N2 = window.PEPA2N2 || {};
  window.PEPA2N2.en = {
    t: {
      'HOLA': 'JOY', 'Matriz': 'Block', 'Dibujo en espejo': 'Mirror drawing', 'Entintar': 'Inking', 'Capa fina': 'Thin layer',
      'Presionar': 'Pressing', 'Rodillo o cuchara': 'Rolling pin or spoon', 'Estampa': 'Print', 'Sale al derecho': 'Comes out the right way',
      'El proceso de estampar: matriz, entintado, presión con el rodillo y estampa invertida': 'The printing process: block, inking, pressing with the roller and reversed print',
      'Directo': 'Direct', 'Aditivo': 'Additive', 'Sustractivo': 'Subtractive',
      'Tres procedimientos de estampación vistos de perfil: directo, aditivo y sustractivo': 'Three printing methods seen from the side: direct, additive and subtractive',
      'Museo del Prado': 'Prado Museum',
      'Busca «Caprichos» o «Desastres de la guerra»: los grabados de Goya en alta resolución.': 'Search for “Caprichos” or “Disasters of War”: Goya’s prints in high resolution.',
      'Biblioteca Digital Hispánica': 'Hispanic Digital Library',
      'Grabados, estampas y carteles antiguos de la Biblioteca Nacional de España.': 'Old engravings, prints and posters from the National Library of Spain.',
      'Museo Picasso Málaga': 'Museo Picasso Málaga',
      'Picasso, malagueño, hizo más de dos mil grabados. Aquí puedes ver su obra.': 'Picasso, born in Málaga, made more than two thousand prints. See his work here.',
      'Real Academia de Bellas Artes de San Fernando': 'Royal Academy of Fine Arts of San Fernando',
      'Guarda la Calcografía Nacional, con las planchas originales de Goya.': 'Home of the National Chalcography, with Goya’s original plates.',
      'Busca Durero, Rembrandt, Piranesi o Toulouse-Lautrec y amplía sus estampas.': 'Search for Dürer, Rembrandt, Piranesi or Toulouse-Lautrec and zoom into their prints.'
    },
    ui: {
      indice: 'Contents', tocAria: 'Theory contents', cuadernoLabel: 'In your artist’s sketchbook:', misionK: 'MISSION',
      diasIntro: 'The theory is split into <b>five days</b>. Each day is read or explained in class in <b>15 minutes at most</b> and prepares you for an activity. The “Find out more” videos are for home: they are not part of those 15 minutes.',
      diaK: 'DAY', minutos: '15 min', prepara: 'Prepares you for', actK: 'Activity',
      dias: ['What printing is', 'The mark of the gesture', 'Monoprinting', 'Block and edition', 'From idea to exhibition'],
      saberK: 'Basic knowledge', verMas: 'Find out more (at home)', abreYT: 'Opens on YouTube',
      subt: 'The videos are in Spanish. On YouTube you can turn on subtitles and auto-translate them into your language.',
      videosT: 'Videos for this unit', videosP: 'All the theory videos, ordered by day. They open on YouTube.',
      enlacesT: 'Where to see prints',
      recIntro: '<b>Workshop materials:</b> tempera paint, brushes (an old dry one is fine), a sponge, a <b>rolling pin</b> and the back of a spoon for pressing, a plastic sleeve or acetate sheet, paper and card. Each student brings <b>one clean polystyrene tray</b> (from fruit or vegetables) and old newspapers to protect the table. If the foam rollers arrive, we will use them for inking.'
    },
    sec: {
      estampar: ['Printing: workshop words', h => `
        <p class="def"><b>Printing</b> means transferring an image from one surface to another by pressing. The surface that carries the image is the <b>block</b> (or plate); what appears on the paper is the <b>print</b>.</p>
        ${h.fig('estampa')}
        <ul class="cual cual5">
          <li><b>Block</b><span>The plate you ink: wood, metal, lino, polystyrene, plastic…</span></li>
          <li><b>Print</b><span>The image printed on paper.</span></li>
          <li><b>Proof</b><span>A test print to see how it is going.</span></li>
          <li><b>Edition</b><span>The set of identical prints taken from one block.</span></li>
          <li><b>Signature and number</b><span>Under each print, in pencil: 2/5 is the second print of an edition of five.</span></li>
        </ul>
        <p class="ojo"><b>The print comes out reversed compared to the block</b>, like in a mirror. If you write a word, write it backwards on the block.</p>`],
      historia: ['Printmaking through history', h => `
        <p>For centuries, printmaking was the way to bring an image to many people: one block gives many copies. Look at each artist’s technique.</p>
        <ul class="cual cual3">
          <li><b>Dürer (16th c.)</b><span>Germany. <strong>Woodcut</strong>: he carves the wood and leaves the printing part raised. His <i>Rhinoceros</i> (1515) was drawn without ever seeing one.</span></li>
          <li><b>Mantegna (15th-16th c.)</b><span>Italy. Prints on <strong>metal</strong> with parallel lines that create volume.</span></li>
          <li><b>Rembrandt (17th c.)</b><span>Netherlands. <strong>Etching</strong>: acid “bites” the line into the metal. A master of light and shadow.</span></li>
          <li><b>Piranesi (18th c.)</b><span>Italy. The <i>Prisons</i>: huge, dark imaginary buildings.</span></li>
          <li><b>Goya (18th-19th c.)</b><span>Spain. <i>Los Caprichos</i>: etching and <strong>aquatint</strong> (grey tones) to criticise the vices of his time.</span></li>
          <li><b>Toulouse-Lautrec (19th c.)</b><span>France. Colour <strong>lithography</strong>: the posters of the Paris cabarets. Prints reach the street.</span></li>
          <li><b>Matisse (20th c.)</b><span>France. Linocuts with white lines on a black background: few lines, lots of expression.</span></li>
          <li><b>Picasso (20th c.)</b><span>Born in <strong>Málaga</strong>. <strong>Reduction</strong> linocut: he carves and prints the same block colour by colour.</span></li>
          <li><b>Miró (20th c.)</b><span>Barcelona. Prints of blots, signs and flat colours, almost like a game.</span></li>
        </ul>
        ${h.cuaderno('stick in or draw a small version of your artwork and note the artist, century, technique and what catches your eye most.')}`],
      hoy: ['Printing today: it is everywhere', h => `
        <p>What Dürer or Toulouse-Lautrec did has not disappeared: it has moved somewhere else.</p>
        <ul class="cards3">
          <li><b>On clothes</b><span>T-shirts and tote bags are printed with screen printing, a stencil technique.</span></li>
          <li><b>On paper</b><span>Rubber stamps, wrapping paper, gig posters and book covers.</span></li>
          <li><b>In today’s art</b><span>Printmaking studios, zines and artists who mix printing and painting.</span></li>
        </ul>
        <p class="tip"><b>Then and now:</b> in your fact sheet, find a present-day use that resembles the old artwork you analysed. What has changed and what is still the same?</p>`],
      gesto: ['Gesture and tool', h => `
        <p class="def">Each tool leaves a different <b>mark</b>, and the same tool changes with your <b>gesture</b>: fast or slow, hard or soft, dragging or dabbing.</p>
        <ul class="cual cual3">
          <li><b>Finger</b><span>Dots, blots and direct smears.</span></li>
          <li><b>Dry brush</b><span>Little paint: it shows the texture of the bristles, like grass or hair.</span></li>
          <li><b>Sponge</b><span>Dabbed: a porous texture, like stone or fog.</span></li>
          <li><b>Card edge</b><span>Dragged or stamped: straight lines and clean areas.</span></li>
          <li><b>Comb or fork</b><span>Parallel lines, waves and patterns.</span></li>
          <li><b>Leaves and objects</b><span>Inked and pressed: they leave their shape and texture.</span></li>
        </ul>
        <ul class="cards3">
          <li><b>Visual qualities</b><span>What the mark has: thickness, texture, transparency or density.</span></li>
          <li><b>Visual effect</b><span>What it looks like: movement, calm, cold, wind, snow…</span></li>
          <li><b>References</b><span>Miró filled his works with signs made by quick gestures. Dürer, with lines carved one by one.</span></li>
        </ul>`],
      tecnicas: ['Dry and wet techniques, and their support', h => `
        <div class="lectura">
          <div><h3>Dry techniques</h3><ul><li><b>Graphite pencil</b>: lines and gradients.</li><li><b>Coloured pencils</b>: colour in layers.</li><li><b>Charcoal</b>: deep blacks, it blends.</li><li><b>Pastel</b>: opaque, powdery colour.</li></ul><p>Charcoal and pastel smudge: protect them with <b>fixative</b> (or hairspray, always away from your face and in a ventilated room).</p></div>
          <div><h3>Wet techniques</h3><ul><li><b>Ink and felt-tip pen</b>: clean black line.</li><li><b>Watercolour</b>: transparent; the white is the paper.</li><li><b>Tempera</b>: opaque, it covers and dries fast.</li><li><b>Acrylic</b>: opaque; once dry it no longer dissolves in water.</li></ul></div>
        </div>
        <h3 class="sub">Each technique needs its support</h3>
        <ul class="cual">
          <li><b>Thin paper</b><span>Pencil and felt-tip. It wrinkles with water.</span></li>
          <li><b>Thick drawing paper</b><span>Tempera and watercolour: it takes water without tearing.</span></li>
          <li><b>Card</b><span>Tempera, prints and the final greeting card.</span></li>
          <li><b>Plastic or acetate</b><span>It does not absorb: perfect as a monoprint plate.</span></li>
        </ul>
        ${h.cuaderno('stick in each test from the lab and write next to it the tool, the gesture and the effect it creates.')}`],
      monotipia: ['Monoprinting: a one-off print', h => `
        <p class="def"><b>Monoprint</b>: you paint on a smooth surface that does not absorb (plastic, acetate, glass) and press a sheet of paper on top. Only <b>one good print</b> comes out: that is why it is called that.</p>
        <ul class="cards3">
          <li><b>Direct</b><span>You paint the drawing on the plastic with a brush, finger or sponge, and print.</span></li>
          <li><b>Subtractive</b><span>You cover the plastic with tempera and <strong>remove</strong> paint with a stick, a cotton bud or your finger. What you remove comes out white.</span></li>
          <li><b>Mixed</b><span>You combine both: removing and adding on the same plate.</span></li>
        </ul>
        <ol class="pasos3"><li><b>Paint fast</b>Tempera dries quickly. Work on a small area.</li><li><b>Press</b>Paper on top and rub with your hand, a spoon or the rolling pin.</li><li><b>Lift</b>Peel the paper off from one corner, without dragging.</li></ol>
        <p class="tip"><b>If it comes out dry or patchy</b>, the paint was too dry; <b>if it smudges</b>, there was too much. The second, paler print you take from the same plate is called a <b>ghost</b>.</p>`],
      procedimientos: ['Direct, additive and subtractive', h => `
        <p>Printing techniques are grouped by how the block is made:</p>
        ${h.fig('proced')}
        <ul class="cual cual3">
          <li><b>Direct</b><span>You paint on the plate and print: the monoprint.</span></li>
          <li><b>Additive</b><span>You glue materials onto card (string, fabric, leaves, cut-outs): <strong>collagraph</strong>. What sticks out prints.</span></li>
          <li><b>Subtractive</b><span>You remove or press down material: woodcut, linocut and your <strong>polystyrene tray</strong>.</span></li>
        </ul>
        <h3 class="sub">Your polystyrene block</h3>
        <ol class="pasos3"><li><b>Trim</b>Cut the edges off the tray to get a flat plate.</li><li><b>Draw by pressing</b>Press with a blunt pencil: every groove will print <b>white</b>.</li><li><b>Ink</b>Tempera in a thin layer, dabbed with a sponge or a flat brush. Too much fills the grooves.</li></ol>
        <p class="ojo"><b>Safety and hygiene:</b> do not use a craft knife; a pencil and scissors are enough. Bring the tray washed and dry, ideally from fruit or vegetables.</p>`],
      tirada: ['Proof, edition, signature and number', h => `
        <ul class="cual">
          <li><b>1 · Proof</b><span>Take a first print on ordinary paper. Fix the block if needed.</span></li>
          <li><b>2 · Pressure</b><span>Paper on the inked block, a clean sheet on top, and roll the <strong>rolling pin</strong> firmly one way and then the other.</span></li>
          <li><b>3 · Edition</b><span>Repeat 3 to 5 times, inking the same way each time so the prints look alike.</span></li>
          <li><b>4 · Signature</b><span>When they are dry, in pencil in the margin: number on the left, signature on the right.</span></li>
        </ul>
        <p class="tip"><b>No roller?</b> The back of a spoon, rubbed in small circles, also presses well.</p>
        <p class="ojo"><b>Cleaning:</b> tempera washes off with water. Wash the block straight away if you are going to ink it with another colour.</p>
        ${h.cuaderno('stick in your best proof and note what you corrected between the first and the last print.')}`],
      proceso: ['The creative process', h => `
        <ol class="fases-n2">
          <li><b>Goal</b><span>What do I want the person receiving the card to feel?</span><em>Activity 4</em></li>
          <li><b>Information</b><span>References: the artists from day 1 and your lab tests.</span><em>Activities 1 and 2</em></li>
          <li><b>Sketches</b><span>Three quick ideas in the sketchbook. Choose one.</span><em>Activity 4</em></li>
          <li><b>Plan</b><span>Technique, colours, text (mirrored!) and format.</span><em>Activity 4</em></li>
          <li><b>Making</b><span>Block, proof and final print on card.</span><em>Activity 4</em></li>
          <li><b>Presentation</b><span>The greeting card, on display.</span><em>Activity 4</em></li>
          <li><b>Assessment</b><span>Self-reflection, self-assessment and peer assessment.</span><em>Activity 4</em></li>
        </ol>
        <p class="tip"><b>A greeting card is read at a glance:</b> one clear image, few colours and a short text.</p>`],
      exponer: ['Presenting and assessing your work', h => `
        <p>When you present your card, explain in one minute:</p>
        <ul class="cards3">
          <li><b>What I wanted to say</b><span>The idea and who it is for.</span></li>
          <li><b>How I made it</b><span>The technique, the proofs and what I had to correct.</span></li>
          <li><b>What I achieved</b><span>What worked best and what I would change.</span></li>
        </ul>
        <p class="ojo"><b>When assessing other people’s work:</b> start with something that works and give one specific idea to improve. Talk about the work, not the person.</p>
        ${h.cuaderno('write your self-assessment with the three questions above and give yourself a mark with the rubric.')}`]
    },
    mision: {
      titulo: 'Winter prints',
      reto: 'Dürer, Goya and Picasso multiplied their images with a block. Now it is your turn: experiment with marks and printing techniques and create the <b>school’s winter greeting card</b>, a print of your own that will be displayed at school.',
      fasesT: 'How to play',
      fases: [
        ['Investigate', 'A historical print: who, when, how and what it has to do with today.'],
        ['Experiment', 'The mark lab: gestures, tools and techniques.'],
        ['Print', 'Monoprint and polystyrene block, with your signed and numbered edition.'],
        ['Greet', 'Your printed greeting card, displayed and assessed.']
      ],
      entregasT: 'What you have to hand in',
      entregas: [
        'The <b>artist’s sketchbook</b> with the print fact sheet, the lab tests, the best workshop proof, the sketches and the self-assessment.',
        'The workshop <b>edition</b> (3 to 5 signed and numbered prints).',
        'The <b>greeting card</b> on card, for the exhibition.'
      ],
      pista: 'The best prints come from lots of tests. Getting messy is part of the game.'
    },
    act: {
      intro: 'Four activities that go from looking to creating. Each one tells you whether it is done in the artist’s sketchbook and what you hand in.',
      acts: [
        ['Print detectives', 'Investigate', {
          cuaderno: true,
          obj: 'Analyse a historical print and compare it with a present-day use of printing.',
          pasos: [
            'Look at the list of artists from <b>day 1</b> and choose one (or the one your teacher assigns).',
            'Find one of their prints on the websites in the <b>Resources</b> tab.',
            ['Make its <b>fact sheet</b> in the artist’s sketchbook:', ['artist, century and country;', 'title of the work;', 'printmaking technique (woodcut, etching, aquatint, lithography, linocut…);', 'what you can see: figures, lines, light and shadow;', 'what you think it wanted to say.']],
            'Draw a small version of the work or stick in a printed copy.',
            'Find a <b>present-day use</b> of printing (T-shirt, stamp, poster, book…) and write how it is similar and how it is different.',
            'If you do not finish in class, complete the fact sheet at home.'
          ],
          donde: 'In the artist’s sketchbook.',
          entrega: 'The fact sheet in the artist’s sketchbook, checked by the teacher.'
        }],
        ['Mark lab', 'Experiment', {
          cuaderno: true,
          obj: 'Explore the mark each gesture and tool leaves, and which technique and support suit each effect.',
          pasos: [
            'Divide a sketchbook page (or a thick sheet you will stick in later) into <b>9 boxes</b>.',
            ['Fill six boxes with tempera, each one with a tool:', ['finger;', 'dry brush;', 'sponge;', 'card edge;', 'comb or fork;', 'an inked, pressed leaf.']],
            'In the three remaining boxes, try <b>dry techniques</b> (pencil, coloured pencils) and <b>wet techniques</b> (felt-tip pen) from your pencil case, alone or on top of dry tempera.',
            'Try the <b>same tool with two different gestures</b>: fast and slow, soft and hard.',
            'Next to each box write the tool, the gesture and the <b>effect</b> it creates (snow, wind, bark…).',
            'Mark which mark looks like that of an artist from day 1 and explain why.'
          ],
          donde: 'In the artist’s sketchbook, with tempera and your pencil-case materials.',
          entrega: 'The nine boxes with comments in the sketchbook.'
        }],
        ['Printing workshop', 'Print', {
          cuaderno: true,
          obj: 'Print with monoprint and with a polystyrene block, choosing the tool and gesture for the effect you want.',
          pasos: [
            ['<b>Direct monoprint</b>:', ['paint a winter landscape on the plastic sleeve with tempera;', 'place the paper on top and press with your hand or the rolling pin;', 'lift the paper from one corner.']],
            ['<b>Subtractive monoprint</b>:', ['cover the plastic with dark tempera;', 'draw by removing paint with a stick, a cotton bud or your finger;', 'print. What you removed will come out white, like snow or light.']],
            ['<b>Polystyrene block</b>:', ['trim the edges of your tray;', 'draw by pressing with the pencil (if you write, backwards!);', 'ink in a thin layer with a sponge or brush;', 'take a proof and correct it.']],
            '<b>Edition:</b> take 3 to 5 prints from the polystyrene block, pressing with the <b>rolling pin</b>.',
            'When they are dry, <b>sign and number them</b> in pencil (1/5, 2/5…).',
            'Stick your best monoprint and your best proof in the sketchbook, and note what you changed to improve.'
          ],
          donde: 'In the art room. The proofs are stuck in the artist’s sketchbook; the edition is printed on separate paper.',
          entrega: 'The signed and numbered edition, to the teacher, and the proofs stuck in the sketchbook.'
        }],
        ['The school greeting card', 'Create and present', {
          cuaderno: true,
          obj: 'Create a printed winter greeting card, explain how it was made and assess the process.',
          pasos: [
            'Think about who it is for and what you want them to feel: joy, calm, cold, light, getting along…',
            'Make <b>three quick sketches</b> in the sketchbook. Choose one and note the technique, colours and text.',
            'If it has text, write it <b>mirrored</b> on the block.',
            'Prepare the block (polystyrene, monoprint or both combined) and take a proof.',
            'Print the final version on <b>card</b>, in the format your teacher tells you.',
            'Sign it in pencil in the margin.',
            'Present your card to the class in one minute: what you wanted to say, how you made it and what you would change.',
            'Write your <b>self-assessment</b> in the sketchbook using this unit’s rubric.'
          ],
          donde: 'Sketches and self-assessment in the artist’s sketchbook; the greeting card, on card.',
          entrega: 'The greeting card, for the school exhibition, and the sketchbook with sketches and self-assessment.'
        }]
      ],
      cuadSi: '📒 Done in the artist’s sketchbook', cuadNo: 'Not done in the artist’s sketchbook',
      cotejoT: 'Checklist: how are you doing?',
      cotejoP: 'Tick what you have done. Your ticks are only saved on this device.',
      grupos: [
        ['Print detectives', ['The fact sheet has the artist, century, technique and what can be seen.', 'I have compared the work with a present-day use.']],
        ['Mark lab', ['I have nine boxes with their tool, gesture and effect.', 'I have tried dry and wet techniques.']],
        ['Printing workshop', ['I have made a direct and a subtractive monoprint.', 'My block has mirrored text (if it has text).', 'My edition is signed and numbered.']],
        ['Greeting card', ['I have three sketches and have chosen one.', 'The card is printed on card and signed.', 'I have written my self-assessment.']]
      ],
      progreso: (n, t) => `${n} of ${t} done`, borrar: 'Clear my ticks', confirmar: 'Sure? Press again to clear.'
    },
    rub: {
      intro: 'This is how this unit is assessed. Each indicator is marked from 1 to 10. The mark for each criterion is the average of its indicators.',
      criteriosT: 'Assessment criteria',
      criterios: [
        ['1.1', 'Analyse artistic works from different periods and cultures, placing them in context, describing their essential features, valuing the creative process of the final result, and showing openness, interest and respect when receiving them.'],
        ['1.2', 'Critically assess the habits, tastes and artistic references of different periods and cultures, reflecting on how they have evolved and on their relationship with those of the present.'],
        ['2.1', 'Take part, with initiative, confidence and creativity, in exploring different graphic and plastic techniques, using tools, media, supports and languages.'],
        ['2.2', 'Create graphic and plastic works creatively, deciding on the expressive intention and correctly choosing the most suitable tools, media, supports and languages from their personal range of resources.'],
        ['4.2', 'Present the final result of creating an artistic product, individually or in a group, sharing and critically assessing how it was developed, the difficulties found, the processes followed and the achievements reached.']
      ],
      niveles: ['Insufficient (1–4)', 'Pass (5)', 'Good (6)', 'Very good (7–8)', 'Outstanding (9–10)'],
      criterio: 'Criterion',
      bloques: [
        ['Activity 1. Print detectives', [
          ['IL 1.1.1', 'Context of the work', '1.1', 'Places the print: artist, century, country and printmaking technique.', ['Does not place the work.', 'Gives one or two facts.', 'Artist and century correct; technique missing or wrong.', 'Artist, century, country and technique correct.', 'All correct and explains how the technique works.']],
          ['IL 1.1.2', 'Description and process', '1.1', 'Describes what can be seen and how it was made, with interest and respect for the work.', ['Does not describe the work.', 'One-sentence description.', 'Describes figures and some feature of the technique.', 'Describes figures, lines and light, and how it was made.', 'Precise description with workshop vocabulary and a respectful opinion.']],
          ['IL 1.2.1', 'Then and now', '1.2', 'Compares the work with a present-day use of printing and reflects on what has changed.', ['Does not compare.', 'Names a present-day use without comparing.', 'Points out one similarity or difference.', 'Points out similarities and differences.', 'Compares thoughtfully and explains why it has changed.']]]],
        ['Activity 2. Mark lab', [
          ['IL 2.1.1', 'Gesture and tool', '2.1', 'Explores several tools and gestures with tempera, showing initiative.', ['Does not experiment.', 'Fewer than four boxes or all the same.', 'Six boxes with different tools.', 'Six boxes and the same tool with two gestures.', 'Varied, creative exploration that goes beyond the task.']],
          ['IL 2.1.2', 'Techniques and supports', '2.1', 'Tries dry and wet techniques and chooses the right support.', ['Does not try them.', 'Tries only one technique.', 'Tries dry and wet techniques.', 'Tries dry and wet techniques and explains which support suits them.', 'Combines techniques and justifies the support for each.']],
          ['IL 1.2.2', 'References', '1.2', 'Links one of their marks to an artist’s and explains it.', ['Makes no link.', 'Names an artist without explaining.', 'Links one mark to an artist.', 'Links it and explains the similarity.', 'Links several marks to artists and assesses their differences.']]]],
        ['Activity 3. Printing workshop', [
          ['IL 2.2.1', 'Monoprint', '2.2', 'Prints a direct and a subtractive monoprint with an expressive intention.', ['Does not make them.', 'Only one, or blurred.', 'Both, with some pressure or paint problems.', 'Both, clear and with intention.', 'Both, very expressive and well executed.']],
          ['IL 2.2.2', 'Polystyrene block', '2.2', 'Prepares the block with clear grooves and the image (and text) planned in mirror image.', ['No block.', 'Weak grooves or text the right way round.', 'Marked grooves with some mistakes.', 'Clear block, well planned in mirror image.', 'Careful block, with well-resolved textures and details.']],
          ['IL 2.2.3', 'Edition', '2.2', 'Takes 3 to 5 consistent prints, signed and numbered.', ['No edition.', 'One or two prints, or very uneven.', 'Three prints with differences.', 'Three to five consistent prints, signed and numbered.', 'Consistent, clean edition, correctly signed and numbered.']]]],
        ['Activity 4. The school greeting card', [
          ['IL 2.2.4', 'The greeting card', '2.2', 'Creates a printed greeting card with a clear intention and the right technique.', ['Unfinished.', 'Finished, without a clear intention.', 'Clear idea with printing mistakes.', 'Clear idea and correct printing on card.', 'Original, expressive and very well printed card.']],
          ['IL 4.2.1', 'Process in the sketchbook', '4.2', 'The sketches and proofs show how the result was reached.', ['No sketches.', 'One sketch.', 'Three sketches.', 'Three sketches with notes on technique, colour and text.', 'Complete, reasoned process from sketch to final piece.']],
          ['IL 4.2.2', 'Presentation', '4.2', 'Presents their card: what they wanted to say, how they made it and what they would change.', ['Does not present it.', 'Presents it without explaining.', 'Explains the idea or the process.', 'Explains the idea, the process and one difficulty.', 'Clearly explains the idea, process, difficulties and achievements.']],
          ['IL 4.2.3', 'Self-assessment', '4.2', 'Critically and respectfully assesses their own work and their classmates’.', ['Does not self-assess.', 'Only gives a mark.', 'Points out something that went well or badly.', 'Assesses achievements and difficulties with the rubric.', 'Critical, well-argued assessment of own and others’ work.']]]]
      ]
    }
  };
})();
