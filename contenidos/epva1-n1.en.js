/* INSERT ART · EPVA 1 · Level 01 · Card bestiary · ENGLISH */
(function () {
  window.EPVA1N1 = window.EPVA1N1 || {};
  window.EPVA1N1.en = {
    t: {
      'Partes de una carta coleccionable': 'Parts of a collectible card', 'NOMBRE': 'NAME', 'Nombre': 'Name', 'quién es': 'who it is',
      'Tipo': 'Type', 'su elemento': 'its element', 'Ilustración': 'Illustration', 'cómo es': 'what it looks like',
      'Texto': 'Text', 'qué sabe hacer': 'what it can do', 'Estadísticas': 'Stats', 'números del juego': 'game numbers',
      'Esquema de la página del cuaderno de artista': 'Layout of the sketchbook page', 'Título': 'Title', 'Bestiario de cartas': 'Card bestiary',
      'Nombre de la bestia': 'Name of the beast', 'Jerarquía': 'Hierarchy', 'visual y color': 'visual and colour',
      'Reproducir': 'Reproduce', 'dibujo observado': 'observed drawing', 'Aislar': 'Isolate', 'lupas de detalle': 'detail magnifiers',
      'LA BESTIA': 'THE BEAST', 'diseño en el centro': 'design in the centre', 'Cualidades': 'Qualities', 'y poderes': 'and powers',
      'Textura': 'Texture', 'táctil y visual · grafismos': 'tactile and visual · marks',
      'Lenguaje de las formas: círculo, cuadrado y triángulo': 'Shape language: circle, square and triangle', 'Amable': 'Friendly', 'Fuerte': 'Strong', 'Peligroso': 'Dangerous',
      'Museo del Prado · El jardín de las delicias': 'Prado Museum · The Garden of Earthly Delights',
      'Busca «El jardín de las delicias» y amplía los seres híbridos de El Bosco: asociar en estado puro.': 'Search for “The Garden of Earthly Delights” and zoom into Bosch’s hybrid creatures: associating at its purest.',
      'Albertina (Viena) · Liebre joven de Durero': 'Albertina (Vienna) · Dürer’s Young Hare',
      'El museo que guarda la liebre que Durero reprodujo pelo a pelo en 1502.': 'The museum that keeps the hare Dürer reproduced hair by hair in 1502.',
      'Busca Arcimboldo, Georgia O\'Keeffe, Franz Marc o Van Gogh y amplía sus obras.': 'Search for Arcimboldo, Georgia O’Keeffe, Franz Marc or Van Gogh and zoom into their works.',
      'Adobe Color · círculo cromático': 'Adobe Color · colour wheel',
      'Prueba complementarios y gamas en una rueda de color interactiva, sin registrarte.': 'Try complementary colours and colour ranges on an interactive wheel, no sign-up needed.'
    },
    ui: {
      indice: 'Contents', tocAria: 'Theory contents', cuadernoLabel: 'In your artist’s sketchbook:', misionK: 'MISSION',
      diasIntro: 'The theory is split into <b>five days</b>. Each day is read or explained in class in <b>15 minutes at most</b> and prepares you for an activity. The “Find out more” videos are for home: they are not part of those 15 minutes.',
      diaK: 'DAY', minutos: '15 min', prepara: 'Prepares you for', actK: 'Activity',
      dias: ['Look before you create', 'Visual operations', 'Shape and texture', 'Colour', 'Composing the card'],
      saberK: 'Basic knowledge', verMas: 'Find out more (at home)', abreYT: 'Opens on YouTube',
      subt: 'The videos are in Spanish. On YouTube you can turn on subtitles and auto-translate them into your language.',
      videosT: 'Videos for this unit', videosP: 'All the theory videos, ordered by day. They open on YouTube.',
      enlacesT: 'To look and learn',
      recIntro: '<b>If you understand it and apply it, you are beating the game:</b> it is the first step to becoming a <i>concept artist</i>. Materials: artist’s sketchbook, graphite pencil, eraser, coloured pencils, felt-tip pens and card for the final card.'
    },
    sec: {
      carta: ['The card: an image that communicates', h => `
        <p class="def"><b>Visual language</b> communicates without words. A game card tells you who the character is, what type it is and what it can do <b>before you read the text</b>.</p>
        ${h.fig('carta')}
        <ul class="cual cual5">
          <li><b>Name</b><span>Says who the character is.</span></li>
          <li><b>Illustration</b><span>Shows what it looks like. It is the most important part.</span></li>
          <li><b>Type or element</b><span>Its class: fire, water, plant… You recognise it by the colour.</span></li>
          <li><b>Text</b><span>Explains what it can do: qualities and powers.</span></li>
          <li><b>Stats</b><span>The game numbers.</span></li>
        </ul>
        <p class="tip"><b>Look at some real cards</b> (Pokémon, Magic…): what do you see first? Why?</p>`],
      jerarquia: ['Visual hierarchy', h => `
        <p class="def"><b>Visual hierarchy</b> is the order in which the eye travels through an image. You get it by giving more <b>visual weight</b> to what matters most.</p>
        <ol class="pasos3"><li><b>1st Illustration</b>The biggest and most striking thing.</li><li><b>2nd Name</b>It stands out over the other texts.</li><li><b>3rd Colour and text</b>The element is recognised by its colour; the text is read last.</li></ol>
        <ul class="cards3">
          <li><b>Size</b><span>The biggest thing is looked at first.</span></li>
          <li><b>Contrast</b><span>What stands out most from the background attracts the eye.</span></li>
          <li><b>Colour</b><span>A saturated or warm colour weighs more. Colour works as a <strong>code</strong>: is a red card ice or fire?</span></li>
        </ul>`],
      pagina: ['Your sketchbook page', h => `
        <p>Activity 1 is done on <b>a single page</b> of the artist’s sketchbook, on both sides. Follow this layout:</p>
        <div class="duo-b1">${h.fig('pagina')}
          <div><h3 class="sub">Front</h3>
            <ul><li><b>Top:</b> the unit title and, below it, your beast’s name.</li>
            <li><b>Centre:</b> the design of your beast, made from parts of <b>three different animals</b>.</li>
            <li><b>Left side:</b> visual hierarchy and colour code, <b>reproduce</b> and <b>isolate</b>.</li>
            <li><b>Right side:</b> qualities and powers.</li>
            <li><b>Bottom:</b> texture (tactile and visual) with your marks.</li></ul>
            <h3 class="sub">Back</h3>
            <ul><li><b>Transform:</b> which resources you have used.</li><li><b>Associate:</b> how and why you joined the three animals.</li><li><b>Shape:</b> outline, silhouette and the silhouette test.</li></ul>
          </div></div>
        <p class="ojo"><b>Each concept in its area</b>, with a short explanation written by you and a drawing that shows it.</p>`],
      reproducir: ['Reproduce and isolate', h => `
        <p>Creating is not “pulling an idea out of nowhere”. Artists almost always start from something that exists and change it with the <b>visual operations</b>. There are four, applied in this order.</p>
        <div class="lectura">
          <div><h3>1 · Reproduce</h3><p>Representing something <b>as you observe it</b>: shape, proportions, texture and colour. It helps you know the model in depth; without observation, drawings become schematic (“the two-curve fish”).</p>
            <ul><li>Look at the model longer than at the paper.</li><li>Start with the general shape and finish with the details.</li><li>Compare sizes: is the leg longer or shorter than the neck?</li></ul>
            <p><b>Reference:</b> Albrecht Dürer, <i>Young Hare</i> (1502), a meticulous study from life.</p></div>
          <div><h3>2 · Isolate</h3><p><b>Selecting a fragment</b> and separating it from the whole, often enlarging it, as with a magnifying glass. You discover shapes and textures (an eye, a scale, a claw) that can become features of your beast.</p>
            <ul><li>A card window to frame.</li><li>Magnifier effect: draw the detail enlarged.</li></ul>
            <p><b>Reference:</b> Georgia O’Keeffe’s enlarged flowers and macro photography of nature.</p></div>
        </div>
        ${h.cuaderno('on the left side, draw parts of your three animals from observation (reproduce) and their enlarged details in “magnifiers” (isolate).')}`],
      transformar: ['Transform and associate', h => `
        <p class="def"><b>Transforming</b> means changing features of the model (shape, size, proportion, colour, texture) <b>without completely losing its identity</b>.</p>
        <ul class="cual cual3">
          <li><b>Exaggerate</b><span>Huge eyes, a giant spiral tail.</span></li>
          <li><b>Simplify or geometrise</b><span>Reduce the body to ovals and triangles.</span></li>
          <li><b>Change the scale</b><span>A chameleon the size of a building.</span></li>
          <li><b>Distort</b><span>Stretch the neck, curve the body.</span></li>
          <li><b>Change material or texture</b><span>Glass scales, stone skin.</span></li>
          <li><b>Anthropomorphise</b><span>Give it human postures or gestures.</span></li>
        </ul>
        <p><b>Reference:</b> Pablo Picasso, <i>The Bull</i> (1945-1946): the animal is transformed step by step, from a realistic image to a few lines.</p>
        <p class="def"><b>Associating</b> means combining elements from different sources to create a new image. It is the most inventive operation: it creates hybrid creatures with their own identity.</p>
        <ul class="cards3">
          <li><b>Arcimboldo</b><span><i>Vertumnus</i> (1591): a portrait made of fruit, vegetables and flowers.</span></li>
          <li><b>Bosch</b><span><i>The Garden of Earthly Delights</i> (Prado Museum): beings that are half animal, plant and object.</span></li>
          <li><b>Mythology</b><span>The griffin (eagle and lion), the mermaid or the chimera.</span></li>
        </ul>
        ${h.cuaderno('on the back, explain which transformation resources you have used and why you joined those three animals.')}`],
      forma: ['Shape', h => `
        <p class="def"><b>Shape</b> is the visual configuration of an object: its outline and its structure. The <b>outline</b> is the line that bounds it; the <b>silhouette</b> is the shape filled with a single tone, without details.</p>
        <p class="tip"><b>Silhouette test:</b> fill your sketch in black. If it is still recognisable and interesting, the design works. If it looks like a “blob”, exaggerate features: ears, tail, horns, fins.</p>
        ${h.fig('formas')}
        <ul class="cual cual3">
          <li><b>Circle / curve</b><span>Friendliness, softness, tenderness. Nice or peaceful creatures.</span></li>
          <li><b>Square / rectangle</b><span>Stability, strength, resistance. Defensive, earth creatures.</span></li>
          <li><b>Triangle / sharp angles</b><span>Dynamism, danger, aggression. Fast or threatening creatures.</span></li>
        </ul>
        <p class="ojo"><b>“I can’t draw”?</b> Build the creature by adding basic shapes (a circle for the head, an oval for the body, triangles for the claws) and then round off or sharpen the outline.</p>`],
      textura: ['Texture', h => `
        <p class="def"><b>Texture</b> is the quality of an object’s surface. <b>Tactile</b> texture is felt by touch (rough, smooth…); <b>visual</b> texture is only perceived by sight: it is the one we draw on paper.</p>
        <ul class="cual cual5">
          <li><b>Stippling</b><span>Grainy skin.</span></li>
          <li><b>Parallel hatching</b><span>Smooth surfaces and soft shadows.</span></li>
          <li><b>Cross-hatching</b><span>Darker shadows.</span></li>
          <li><b>Scales</b><span>A repeated motif: reptiles and fish.</span></li>
          <li><b>Wavy lines</b><span>Fur and water.</span></li>
        </ul>
        <h3 class="sub">Frottage (Max Ernst, 1925)</h3>
        <ol class="pasos3"><li><b>Place</b>A thin sheet on a textured surface: bark, a leaf, a grille, fabric.</li><li><b>Rub</b>With a soft pencil or a wax crayon held on its side.</li><li><b>Use</b>Cut out the texture and use it in a collage or as the frame’s background.</li></ol>
        ${h.cuaderno('in the bottom strip, explain the difference between tactile and visual texture and show at least two marks you use on your beast.')}`],
      colorQue: ['What is colour?', h => `
        <p class="def">Colour is a <b>sensation</b>. Light reaches objects: they absorb part of it and reflect the rest. <b>The reflected light is the colour we see.</b></p>
        <ul class="cual cual3">
          <li><b>Hue</b><span>The colour itself, its name: red, green, blue…</span></li>
          <li><b>Lightness or value</b><span>How light or dark it is: light blue / navy blue.</span></li>
          <li><b>Saturation</b><span>How pure or intense it is: bright red / dull red.</span></li>
        </ul>`],
      mezclas: ['Additive and subtractive mixing', h => `
        <div class="lectura">
          <div><h3>Light colour · additive mixing</h3><p>Screens, spotlights, projectors. <b>Each light ADDS light.</b></p>
            <ul><li>Primaries: <b>red, green and blue</b> (RGB).</li><li>Red + green = yellow · green + blue = cyan · red + blue = magenta.</li><li>All three together = <b>white</b>.</li></ul></div>
          <div><h3>Pigment colour · subtractive mixing</h3><p>Paints, pencils, inks, printers. <b>Each pigment SUBTRACTS (absorbs) light.</b></p>
            <ul><li>Primaries: <b>cyan, magenta and yellow</b> (CMY).</li><li>Magenta + yellow = red · cyan + yellow = green · cyan + magenta = blue-violet.</li><li>All three together = <b>black</b> (in practice, a very dark brown).</li></ul></div>
        </div>
        <p class="tip">On your card you work with pencils: <b>subtractive mixing</b>. Layer two colours softly to get the third. If the card is digitised, it moves to the screen’s additive mixing.</p>
        <h3 class="sub">Play and check</h3>
        ${h.fig('juego')}`],
      circulo: ['Colour wheel and complementary colours', h => `
        <p class="def">The <b>colour wheel</b> arranges colours in a circle: primaries, secondaries between them and tertiaries in between.</p>
        <ul class="cual cual3">
          <li><b>Primaries ●●●</b><span>Yellow, red and blue. They don’t come from any mix.</span></li>
          <li><b>Secondaries ●●</b><span>Orange, violet and green. Made by mixing two primaries.</span></li>
          <li><b>Tertiaries ●</b><span>Made by mixing a primary with the secondary next to it.</span></li>
        </ul>
        ${h.fig('rueda')}
        <p><b>Complementary</b> colours are <b>opposite</b> each other on the wheel. Together they create maximum contrast: each makes the other “vibrate”.</p>
        <ul class="cual cual3">
          <li><b>Red ↔ green</b><span>In the CMY model: cyan ↔ red.</span></li>
          <li><b>Blue ↔ orange</b><span>In the CMY model: magenta ↔ green.</span></li>
          <li><b>Yellow ↔ violet</b><span>In the CMY model: yellow ↔ blue-violet.</span></li>
        </ul>
        <p class="tip"><b>On your card:</b> choose a dominant palette and keep the complementary colour for the <b>focal point</b> (eyes, gem, weapon, aura). That is how you guide the eye.</p>
        <p><b>Reference:</b> Vincent van Gogh, <i>The Night Café</i> (1888): he set reds against greens to express tension.</p>`],
      gamas: ['Colour ranges, expressive colour and your element’s palette', h => `
        <ul class="cards3 c2">
          <li><b>Warm range</b><span>Reds, oranges, yellows. Energy, heat, closeness, aggression.</span></li>
          <li><b>Cool range</b><span>Blues, bluish greens, violets. Calm, cold, distance, mystery.</span></li>
        </ul>
        <p class="def"><b>Expressive colour:</b> colour does not have to be realistic; it is chosen for what it communicates. Franz Marc painted <i>Blue Horses</i> (1911) to express their character.</p>
        <h3 class="sub">Your element’s palette: 3 base colours + 1 complementary accent</h3>
        <ul class="cual">
          <li><b>Fire</b><span>Warm: red, orange, yellow · blue accent. Energy, danger.</span></li>
          <li><b>Water</b><span>Cool: blues, cyan, turquoise · orange accent. Calm, depth.</span></li>
          <li><b>Plant</b><span>Cool-temperate: greens, yellowish green · red or magenta accent. Growth, life.</span></li>
          <li><b>Earth</b><span>Muted warm: ochres, browns, sienna · blue-violet accent. Strength, stability.</span></li>
          <li><b>Air</b><span>Very light cool: whites, sky blues, light greys · warm yellow accent. Lightness, speed.</span></li>
          <li><b>Shadow</b><span>Dark cool: violets, blacks, greys · yellow accent. Mystery, threat.</span></li>
        </ul>
        <p class="tip">Inventing your own element? Fine, if you justify your palette.</p>`],
      colorear: ['Colour your beast step by step', h => `
        <p><b>Before colouring, make a colour map:</b> with a graphite pencil, very lightly, number the areas: 1 body (base colour, the lightest), 2 shadows (second colour), 3 details (third colour) and ★ focal point (complementary).</p>
        <ul class="cual cual5">
          <li><b>1 · Light base</b><span>Colour the whole area with the lightest colour and soft pressure.</span></li>
          <li><b>2 · Layers</b><span>Layer the second colour on the shadow areas.</span></li>
          <li><b>3 · Gradient</b><span>Increase the pressure little by little: from light to dark without jumps.</span></li>
          <li><b>4 · Accent</b><span>At the end, the complementary colour only on a small area.</span></li>
          <li><b>5 · Highlights</b><span>Keep the white of the paper for the shine.</span></li>
        </ul>
        <p class="ojo"><b>Final test:</b> can you guess your beast’s element without reading the card?</p>`],
      composicion: ['Composing the card', h => `
        <p class="def"><b>Composing</b> means arranging the elements inside the format so the image is clear, ordered and expressive. The card is <b>vertical</b>.</p>
        <ul class="cards3">
          <li><b>Visual weight</b><span>What is big, saturated or warm, contrasts with the background, is isolated or detailed weighs more.</span></li>
          <li><b>Balance</b><span><strong>Symmetrical</strong>: stable and solemn (front-facing creature). <strong>Asymmetrical</strong>: dynamic (diagonal, jumping creature). <strong>Radial</strong>: around a centre (auras, explosions).</span></li>
          <li><b>Proportion</b><span>The illustration takes up about half of the card. The character fills its area: it neither “floats” nor looks “squeezed”.</span></li>
        </ul>
        <h3 class="sub">Rhythm in the frame</h3>
        <ul class="cual cual3">
          <li><b>Repetition</b><span>The same motif at equal intervals: scales all around the frame.</span></li>
          <li><b>Alternation</b><span>Two motifs taking turns: leaf–drop–leaf–drop.</span></li>
          <li><b>Progression</b><span>The motif grows or shrinks: flames getting bigger and bigger.</span></li>
        </ul>
        <p class="tip"><b>Format:</b> 10 × 14 cm is almost the same proportion as a real card (63 × 88 mm). Your measurements can vary a little, but keep the card vertical and well proportioned. <b>Reference:</b> Ernst Haeckel, <i>Art Forms in Nature</i> (1904), with axial and radial symmetries.</p>`],
      tecnicas: ['Dry and wet techniques for your card', h => `
        <p>The final card is made with <b>at least two graphic techniques</b>. Choose the ones that best tell your beast’s story.</p>
        <div class="lectura">
          <div><h3>Dry techniques</h3><ul><li><b>Graphite</b>: sketching, outlines and marks.</li><li><b>Coloured pencils</b>: layers, gradients and subtractive mixing.</li><li><b>Wax crayons</b>: intense colour and frottage.</li></ul></div>
          <div><h3>Wet techniques</h3><ul><li><b>Felt-tip pen</b>: clean outlines and flat areas of colour.</li><li><b>Ink</b>: black line and stippled textures.</li><li><b>Watercolour or tempera</b>: backgrounds and washes (on thick card).</li></ul></div>
        </div>
        <p class="tip"><b>Combine with intention:</b> for example, felt-tip for the outline and the frame, and coloured pencils for the beast’s volume. A cut-out frottage can be the background texture.</p>`],
      presentar: ['Present your card', h => `
        <p>At the end you will present your card to the group. Explain in one minute, using the unit’s vocabulary:</p>
        <ul class="cards3">
          <li><b>My beast</b><span>Which three animals you have associated and how you have transformed them.</span></li>
          <li><b>Its colour</b><span>Its element, its colour range and where the complementary colour is.</span></li>
          <li><b>My card</b><span>How you have arranged the visual hierarchy and the composition.</span></li>
        </ul>
        <p class="ojo">The whole group’s cards form <b>the class deck</b>. Your creature may appear again in other units.</p>`],
      arena: ['The bestiary arena', h => `
        <p>Put your beast to the test: write its features as if you were filling in its card and face a classmate’s beast (or the computer), turn by turn, like in a card battle.</p>
        <ul class="cards3">
          <li><b>Shape matters</b><span>Circle: more life (friendly and tough). Square: more defence (strong). Triangle: more attack (dangerous).</span></li>
          <li><b>Colour is a code</b><span>The beast is painted automatically with its element’s palette: 3 base colours and eyes in the complementary colour, like the focal point.</span></li>
          <li><b>Stats</b><span>Share out 15 points between attack, defence and speed. The faster one starts.</span></li>
        </ul>
        ${h.fig('arena')}
        <p class="tip"><b>Use your card’s data:</b> the same name, element, shape and power you designed. If your beast always loses, what would you change in its design?</p>`]
    },
    mision: {
      titulo: 'Card bestiary',
      reto: 'Collectible card games hide many design decisions. Your challenge: create an <b>original card</b> with a creature born from <b>three animals</b> from Andalusia, give it an <b>element</b> that can be read through colour and compose the card with all its parts. The group’s cards will form <b>the class deck</b>.',
      fasesT: 'How to play',
      fases: [
        ['Observe', 'Reproduce and isolate parts of three real animals.'],
        ['Invent', 'Transform and associate those parts to create your beast.'],
        ['Colour', 'Choose its element and create its colour code.'],
        ['Compose and present', 'Design the final card and present it to the group.']
      ],
      entregasT: 'What you have to hand in',
      entregas: [
        'The <b>artist’s sketchbook page</b> “Card bestiary”, on both sides.',
        'The <b>colour worksheet</b>, cut out and stuck on the page after your beast.',
        'The <b>final card</b> on card, with at least two techniques, and its <b>oral presentation</b>.'
      ],
      pista: 'Pay attention to your teacher’s instructions on how to organise the sketchbook pages.'
    },
    act: {
      intro: 'Three assessed activities. The mark for each one comes from the <b>unit rubric</b>. Each activity also has its own tracking tool (feedback template, rating scale and target) so you know how you are doing and can improve before the final mark.',
      acts: [
        ['Design your beast', 'Pre-design in the sketchbook', {
          cuaderno: true,
          obj: 'Design a creature from three animals and explain visual hierarchy, the visual operations, shape and texture in the sketchbook.',
          pasos: [
            'Choose <b>three animals</b> from Andalusia and find reference images.',
            ['<b>Front</b> of the page, following the layout from day 1:', ['at the top, the title “Card bestiary” and, below it, your beast’s name;', 'in the centre, your beast, made with recognisable parts of the three animals;', 'left side: visual hierarchy and colour code, reproduce (observed drawings) and isolate (detail magnifiers);', 'right side: qualities and powers that match the animals;', 'bottom: tactile and visual texture with at least two marks.']],
            ['<b>Back</b> of the page:', ['transform: which resources you have used (exaggerate, geometrise, distort…);', 'associate: how and why you joined the three animals;', 'shape: outline, silhouette and your silhouette test.']],
            'Write each explanation in your own words, short and clear, next to a drawing that shows it.'
          ],
          donde: 'On one page of the artist’s sketchbook, on both sides.',
          entrega: 'The sketchbook, checked by the teacher in class.'
        }, '<div class="fw" data-fw="fb"></div>'],
        ['Your beast’s colour code', 'Colour worksheet', {
          cuaderno: true,
          obj: 'Understand additive and subtractive mixing, complementary colours and colour ranges, and create the palette of your beast’s element.',
          pasos: [
            'Play the <b>mixing game</b> on day 4 to check you understand additive and subtractive mixing.',
            ['<b>Front</b> of the worksheet · I understand colour:', ['A · additive and subtractive colour mixing;', 'B · colour wheel, complementary colours and colour ranges.']],
            ['<b>Back</b> · I apply colour:', ['C · my element’s palette (3 colours + 1 complementary);', 'D · my beast in colour: trace it and colour it in 5 steps;', 'E · I justify my colour with the unit’s vocabulary.']],
            'Cut out the worksheet and <b>stick it on the page after</b> your beast.',
            'Finish at home whatever you do not finish in class.'
          ],
          donde: 'On the worksheet the teacher hands out, stuck in the artist’s sketchbook.',
          entrega: 'The worksheet stuck in the sketchbook, checked by the teacher.'
        }, '<div class="fw" data-fw="escala"></div>'],
        ['The final card', 'Brings everything together', {
          cuaderno: false,
          obj: 'Compose your beast’s card with balance, proportion and rhythm, at least two techniques and a colour that communicates its element, and present it to the group.',
          pasos: [
            'Cut a <b>vertical piece of card</b> of about 10 × 14 cm (measurements can vary a little).',
            'Lay out the areas: name, type, illustration (about half of the card), text and stats.',
            'Draw your beast starting from the sketchbook design, and <b>improve it</b>.',
            'Use <b>at least two techniques</b> (for example, felt-tip and coloured pencils).',
            'Apply your element’s palette and the complementary colour on the focal point.',
            'Decorate the frame with a rhythm (repetition, alternation or progression).',
            'Present your card to the group in one minute, with the unit’s vocabulary.'
          ],
          donde: 'On card, separate from the sketchbook.',
          entrega: 'The card, to the teacher. The group’s cards form the class deck.'
        }, '<div class="fw" data-fw="diana"></div>']
      ],
      cuadSi: '📒 Done in the artist’s sketchbook', cuadNo: 'Not done in the artist’s sketchbook (done on card)',
      cotejoT: 'Checklist: how are you doing?',
      cotejoP: 'Tick what you have done. Your ticks are only saved on this device.',
      grupos: [
        ['Design your beast', ['The page follows the layout: title, name, beast in the centre and each concept in its area.', 'My beast has recognisable parts of three animals.', 'I have explained reproduce, isolate, transform and associate.', 'I have done the silhouette test and two texture marks.']],
        ['The colour code', ['I have completed A and B (mixing, wheel and colour ranges).', 'My palette has 3 colours + 1 complementary.', 'I have justified my colour (E).']],
        ['The final card', ['My card has all its areas and a main illustration.', 'I have used at least two techniques.', 'The frame has rhythm.', 'I have prepared my oral presentation.']]
      ],
      progreso: (n, t) => `${n} of ${t} done`, borrar: 'Clear my ticks', confirmar: 'Sure? Press again to clear.'
    },
    rub: {
      intro: 'This rubric assesses all the work in the unit: the sketchbook page (front and back), the colour work and the final card. <b>The mark for each activity comes from here.</b> Each indicator is marked from 1 to 10 and the mark for each criterion is the average of its indicators. The feedback template, the colour scale and the target are used during the process to guide you.',
      criteriosT: 'Assessment criteria',
      criterios: [
        ['2.3', 'Analyses, values and creates compositions inspired by nature, introducing basic compositional aspects and experimenting with at least two two-dimensional graphic techniques.'],
        ['5.2', 'Acquire and develop their own imagination through creative thinking whose messages are channelled through visual and audiovisual means, starting to integrate concepts such as reasoning, empathy and sensitivity.'],
        ['8.2', 'Recognise the communicative intention of different visual projects through the functions and resources of visual and audiovisual language, and begin to apply it in individual and group projects.']
      ],
      niveles: ['Insufficient (1–4)', 'Pass (5)', 'Good (6)', 'Very good (7–8)', 'Outstanding (9–10)'],
      criterio: 'Criterion',
      bloques: [
        ['Block 1. Sketchbook page (activity 1)', [
          ['IL 3.1', 'Design of the beast', '2.3', 'Builds the beast with parts of three different animals; reproduces and isolates (left side) and applies it in the drawing.', ['No design, or the original animals cannot be recognised. Reproduce and isolate are missing.', 'Basic design; one animal can be recognised. Reproduce or isolate incomplete.', 'Beast with recognisable parts of three animals; reproduces and isolates correctly.', 'Well-resolved beast; the isolated details clearly appear in the design.', 'Very elaborate beast; meticulous observation and isolated details skilfully integrated.']],
          ['IL 3.2', 'Layout and visual hierarchy', '8.2', 'Organises the page following the layout and explains and applies visual hierarchy.', ['Does not follow the layout; the page is messy.', 'Partly follows the layout; the hierarchy is unclear and not explained.', 'Follows the layout; explains visual hierarchy and applies it correctly.', 'Clear page; the beast dominates and title and name stand out with intention.', 'Very effective and creative page; hierarchy is explained and applied with varied resources.']],
          ['IL 3.3', 'Shape, texture and colour code', '8.2', 'Explains these concepts (front and back) and applies them to the beast.', ['Does not explain the concepts or does not apply them.', 'Explains some very briefly; little application.', 'Explains the three concepts and applies them correctly.', 'Clear explanation with suitable vocabulary; shape (silhouette), textures and colour communicate the character.', 'Complete, personal explanation; shape, texture and colour very well integrated in the beast.']],
          ['IL 3.4', 'Transform, associate, qualities and powers', '5.2', 'Explains how they transformed and associated the animals, and describes coherent qualities and powers.', ['Does not explain the operations; no qualities or powers.', 'Minimal explanation; qualities and powers loosely related to the beast.', 'Explains transform and associate; coherent qualities and powers.', 'Clear explanation of the resources used; character with its own identity.', 'Very original creature; reasoned explanation linking animals, appearance and powers.']]]],
        ['Block 2. Colour (activity 2)', [
          ['IL 3.5', 'Colour theory', '8.2', 'Distinguishes additive and subtractive mixing, identifies complementary colours and warm and cool ranges.', ['Does not distinguish the concepts.', 'Distinguishes them with mistakes.', 'Distinguishes and explains them correctly.', 'Explains them with specific vocabulary and own examples.', 'Full command; relates the concepts to their own card.']],
          ['IL 3.6', 'Element palette', '8.2', 'Creates a palette coherent with the element and uses the complementary colour as the focal point.', ['Palette unrelated to the element.', 'Partly related palette; no complementary colour.', 'Palette coherent with the element.', 'Coherent palette with intentional use of the complementary colour, and justifies it.', 'Very expressive, well-justified palette; careful mixing.']]]],
        ['Block 3. The final card (activity 3)', [
          ['IL 3.7', 'Composition of the card', '2.3', 'Organises the card with balance, proportion and rhythm.', ['Messy or incomplete areas.', 'All areas are there, with careless distribution.', 'Ordered composition and suitable proportion between areas.', 'Intentional balance, good proportion and rhythm in the frame.', 'Very elaborate composition; balance, proportion and rhythm justified.']],
          ['IL 3.8', 'Techniques and natural inspiration', '2.3', 'Makes the card with at least two graphic techniques based on the original animals.', ['A single technique, or the natural origin cannot be recognised.', 'Two techniques with basic control.', 'Two techniques used neatly; recognisable natural origin.', 'Masters two techniques and combines them with intention.', 'Excellent command; skilfully adds a third technique or texture.']],
          ['IL 3.9', 'From sketchbook to card', '5.2', 'The final card develops and improves the beast designed in the sketchbook.', ['The card is unrelated to the sketchbook work.', 'Weak link; the beast hardly evolves.', 'The card clearly comes from the sketchbook design.', 'The beast evolves and improves on the initial design.', 'Very notable evolution; the card gathers and surpasses all previous work.']],
          ['IL 3.10', 'Colour and hierarchy on the card', '8.2', 'Colour communicates the element and visual hierarchy orders the reading of the card.', ['Colour unrelated to the element; the main thing cannot be told apart.', 'Unclear colour and hierarchy.', 'Coherent colour and correct hierarchy.', 'Expressive colour with complementary; hierarchy reinforced with size or contrast.', 'Colour communicates the element without reading; very effective hierarchy.']],
          ['IL 3.11', 'Oral presentation', '8.2', 'Presents their card and explains its communicative intention with specific vocabulary.', ['Does not explain their card.', 'Explains it very briefly, without specific vocabulary.', 'Uses some specific terms.', 'Justifies shape, colour and composition with suitable vocabulary.', 'Clear, complete argument; links intention and result.']]]]
      ]
    },
    form: {
      aviso: 'Formative assessment: no mark. Your teacher tells you in class how you are doing and you tick it here to see your progress. It is only saved on this device.',
      borrar: 'Clear', confirmar: 'Sure? Press again.',
      fb: {
        titulo: 'Feedback template · activity 1',
        cols: ['Explains it', 'Applies it'],
        grupos: [
          ['Front of the page', [
            ['IL 1.1', '8.2', 'Page layout: title at the top, name below, design in the centre and each concept in its area.', 'a'],
            ['IL 1.2', '2.3', 'Design of the beast with recognisable parts of three different animals.', 'a'],
            ['IL 1.3', '8.2', 'Visual hierarchy: the beast dominates the page; title and name stand out over the texts.', 'ea'],
            ['IL 1.5', '2.3', 'Reproduce (left side): drawing parts of the animals from observation.', 'ea'],
            ['IL 1.6', '2.3', 'Isolate (left side): enlarged details (magnifiers) that appear on the beast.', 'ea'],
            ['IL 1.7', '8.2', 'Texture (bottom): tactile/visual difference and at least two marks applied.', 'ea'],
            ['IL 1.8', '5.2', 'Qualities and powers (right side) coherent with the animals and the appearance.', 'e']]],
          ['Back of the page', [
            ['IL 1.9', '5.2', 'Transform: explains the operation and identifies the resources used.', 'ea'],
            ['IL 1.10', '5.2', 'Associate: explains how and why the parts were combined.', 'ea'],
            ['IL 1.11', '8.2', 'Shape: outline, silhouette, shape language and silhouette test.', 'ea']]]
        ]
      },
      escala: {
        titulo: 'Colour rating scale · activity 2',
        niveles: ['Beginning', 'In progress', 'Achieved', 'Outstanding'],
        items: [
          ['IL 2.1', 'Distinguishes additive and subtractive mixing and identifies their primaries and secondaries.'],
          ['IL 2.2', 'Obtains the secondaries by subtractive mixing with class materials.'],
          ['IL 2.3', 'Identifies the pairs of complementary colours on the colour wheel.'],
          ['IL 2.4', 'Tells warm and cool ranges apart and links them to sensations.'],
          ['IL 2.5', 'Creates a palette coherent with their creature’s element.'],
          ['IL 2.6', 'Uses the complementary colour as the focal point.'],
          ['IL 2.7', 'Justifies their palette with specific vocabulary.']
        ]
      },
      diana: {
        titulo: 'Progress target · activity 3',
        intro: 'Each axis is one aspect of the card. Tap the ring you are on: the further out, the better. Use the 1st review halfway through and the 2nd at the end, and compare the two targets.',
        niveles: ['Beginning', 'In progress', 'Achieved', 'Outstanding'],
        ejes: [['Composition', 'IL 3.7'], ['Techniques', 'IL 3.8'], ['Sketchbook to card', 'IL 3.9'], ['Colour and hierarchy', 'IL 3.10'], ['Oral presentation', 'IL 3.11']],
        rondas: ['1st review', '2nd review']
      }
    },
    arena: {
      titulo: 'The bestiary arena', modos: ['2 players', 'Against the computer'],
      intro: 'Create both beasts and press “Fight!”. Nothing is saved: when you close the page, the beasts disappear.',
      jugador: 'Player', maquina: 'computer',
      campos: { nombre: 'Name', elem: 'Element', forma: 'Shape', poder: 'Name of its power' },
      elementos: { fuego: 'Fire', agua: 'Water', planta: 'Plant', tierra: 'Earth', aire: 'Air', sombra: 'Shadow' },
      formas: { circulo: 'Circle (friendly)', cuadrado: 'Square (strong)', triangulo: 'Triangle (dangerous)' },
      bonus: { circulo: 'Shape bonus: +10 life.', cuadrado: 'Shape bonus: +2 defence.', triangulo: 'Shape bonus: +2 attack.' },
      stats: { atq: 'Attack', def: 'Defence', vel: 'Speed' },
      puntos: n => n >= 0 ? `Points left: ${n}` : `${-n} point${n === -1 ? '' : 's'} too many`,
      ejemplo: [['Lynxblaze', 'fuego', 'triangulo', 'Burning claw'], ['Chamelivy', 'planta', 'circulo', 'Vine tongue']],
      ventajasT: 'Element advantage table',
      razon: { fuego: 'fire burns plants', planta: 'plants drink water', agua: 'water puts out fire', aire: 'wind wears away earth', tierra: 'earth buries shadow', sombra: 'shadow swallows the air' },
      luchar: 'Fight!', errorFicha: (j, p) => `Check player ${j}’s beast: it needs a name and a power, and ${p} points at most.`,
      empieza: n => `The battle begins! ${n} is faster and attacks first.`,
      turnoDe: n => `<b>${n}</b>’s turn. Choose a move:`, piensa: n => `${n} is thinking…`,
      ataqueDe: e => `${e} attack`, usado: 'used', defender: 'Defend',
      usa: (n, m, d) => `${n} uses <b>${m}</b>: ${d} damage.`, falla: n => `${n} launches its special attack… and misses!`,
      defiende: (n, c) => `${n} defends${c ? ` and recovers ${c} life` : ''}.`,
      critico: 'Critical hit!', eficaz: r => `It’s super effective! (${r})`, poco: 'It’s not very effective…',
      gana: n => `🏆 ${n} wins the battle!`, revancha: 'Rematch', editar: 'Change the beasts'
    },
    rueda: {
      titulo: 'The colour wheel', modos: ['Explore', 'Challenge'],
      filtros: { todos: 'All', prim: 'Primaries', sec: 'Secondaries', ter: 'Tertiaries' },
      tipos: { prim: 'Primary', sec: 'Secondary', ter: 'Tertiary' },
      colores: ['yellow', 'yellow-orange', 'orange', 'red-orange', 'red', 'red-violet', 'violet', 'blue-violet', 'blue', 'blue-green', 'green', 'yellow-green'],
      toca: 'Tap a colour on the wheel to see what type of colour it is, how it is made and what its complementary is.',
      def: {
        prim: '<b>Primaries</b> cannot be made by mixing other colours. Mixing them together gives you all the others.',
        sec: '<b>Secondaries</b> are made by mixing two primaries in equal parts.',
        ter: '<b>Tertiaries</b> are made by mixing a primary with the secondary next to it.'
      },
      noMezcla: 'It doesn’t come from any mix: it is a primary.',
      mezcla: (a, b) => `Made by mixing <b>${a}</b> + <b>${b}</b>.`,
      comp: c => `Its <b>complementary</b> (the opposite on the wheel) is <b>${c}</b>.`,
      vibra: 'Together they vibrate: maximum contrast. This is how it would look on your card, with the complementary as the focal point:',
      compQ: c => `Tap the complementary of <b>${c}</b>.`,
      mezQ: (a, b) => `Tap the colour you get by mixing <b>${a}</b> + <b>${b}</b>.`,
      tipoQ: t => `Tap a <b>${t}</b> colour.`,
      bien: 'Correct!', mal: 'Not that one. Look at the wheel and try again (only first-try answers count).',
      puntos: (p, n) => `Correct: ${p} of ${n}`, fin: (p, n) => `Challenge over: ${p} of ${n}.`, otra: 'Play again'
    },
    juego: {
      titulo: 'Light or pigment?', modos: ['Light · additive', 'Pigment · subtractive'],
      libre: 'Experiment', reto: 'Challenge', primarios: 'Switch primaries on or off:',
      nombres: { R: 'red', G: 'green', B: 'blue', C: 'cyan', M: 'magenta', Y: 'yellow' },
      resultado: 'Result', pista: { luz: 'Each light ADDS light: with all three, white.', pig: 'Each pigment SUBTRACTS light: with all three, black.' },
      colores: { negro: 'black (no light)', blanco: 'white', papel: 'white (the paper, no pigment)', negroP: 'black (very dark brown)', amarillo: 'yellow', cian: 'cyan', magenta: 'magenta', rojo: 'red', verde: 'green', azul: 'blue', azulv: 'blue-violet' },
      consigue: (c, m) => `Make <b>${c}</b> with ${m}`, conLuz: 'lights', conPig: 'pigments',
      comprobar: 'Check', siguiente: 'Next', bien: 'Correct!', mal: 'Not yet. Try another combination.',
      puntos: (p, n) => `Correct: ${p} of ${n}`, fin: (p, n) => `Challenge over: ${p} of ${n}.`, otra: 'Play again'
    }
  };
})();
