/* INSERT ART · DT 4.º ESO · Nivel 02 · Alicatado nazarí */
(function () {
  const { G, S } = window.GEO;
  const P = G.P;
  const svg = (vb, inner, label) => `<svg class="fig-ep fig-geo" viewBox="0 0 ${vb[0]} ${vb[1]}" role="img" aria-label="${label}">${inner}</svg>`;
  const T = (x, y, s, a = 'middle', cl = 'fg-l') => `<text class="${cl}" x="${x}" y="${y}" text-anchor="${a}">${s}</text>`;
  const pts = a => a.map(p => p.x.toFixed(1) + ' ' + p.y.toFixed(1)).join('L');

  /* arco menor de radio r entre p1 y p2; lado = 1 o -1 elige el centro */
  function arcoEntre(p1, p2, r, centroRef, haciaRef, cl) {
    const [c1, c2] = G.cc(p1, r, p2, r);
    const cerca = G.dist(c1, centroRef) < G.dist(c2, centroRef) ? c1 : c2, lejos = cerca === c1 ? c2 : c1;
    const C = haciaRef ? cerca : lejos;
    let a0 = G.ang(C, p1), a1 = G.ang(C, p2);
    if (((a1 - a0) % 360 + 360) % 360 > 180) [a0, a1] = [a1, a0];
    return S.arc(C, r, a0, a1, cl);
  }

  /* =============== FIGURAS ESTÁTICAS =============== */
  /* Las cuatro transformaciones isométricas */
  function figTransf(L) {
    const flecha = (dx, dy) => `<path class="fg-m" d="M0 0L${dx} ${dy}"/>`;
    const mot = (x, y, rot = 0, sx = 1, cl = 'fg-geo') => `<path class="${cl}" transform="translate(${x} ${y}) rotate(${rot}) scale(${sx} 1)" d="M0 0L36 0L36 14L14 14L14 44L0 44Z"/>`;
    const c1 = mot(20, 50) + mot(90, 50, 0, 1, 'fg-org') + `<path class="fg-q" d="M38 120L108 120"/><path class="fg-q" d="M100 114L108 120L100 126"/>`;
    const c2 = mot(200, 30) + `<g transform="rotate(90 195 100)">${mot(200, 30, 0, 1, 'fg-org')}</g>` + `<circle class="fg-k2" cx="195" cy="100" r="4"/>` + S.arc(P(195, 100), 50, -70, -10, 'fg-q');
    const c3 = mot(350, 50, 0, -1) + mot(370, 50, 0, 1, 'fg-org') + `<path class="fg-d" d="M360 30V130"/>`;
    const c4 = mot(470, 60) + mot(530, 140, 180, 1, 'fg-org') + `<circle class="fg-k2" cx="500" cy="100" r="4"/>`;
    return svg([600, 185], c1 + c2 + c3 + c4 + T(70, 175, L('Traslación')) + T(225, 175, L('Giro')) + T(360, 175, L('Simetría axial')) + T(500, 175, L('Simetría central')), L('Traslación, giro, simetría axial y simetría central'));
  }

  /* Teselaciones regulares y la semirregular 4.8.8 */
  function figTeselas(L) {
    const cuad = [...Array(16)].map((_, k) => `<rect class="fg-geo" x="${20 + (k % 4) * 30}" y="${30 + Math.floor(k / 4) * 30}" width="30" height="30"/>`).join('');
    const tri = [];
    for (let f = 0; f < 4; f++) for (let c = 0; c < 5; c++) {
      const x = 160 + c * 30 + (f % 2) * 15, y = 30 + f * 26;
      tri.push(`<path class="fg-geo" d="M${x} ${y + 26}L${x + 15} ${y}L${x + 30} ${y + 26}Z"/>`);
    }
    const hex = []; const r = 18;
    for (let f = 0; f < 4; f++) for (let c = 0; c < 4; c++) {
      const O = P(362 + c * r * 1.732 + (f % 2) * r * 0.866, 45 + f * r * 1.5);
      hex.push(`<path class="fg-geo" d="M${pts([...Array(6)].map((_, k) => G.polar(O, r, k * 60 - 90)))}Z"/>`);
    }
    const oct = []; const s = 14, a = s / Math.SQRT2, m = s + 2 * a;
    for (let f = 0; f < 3; f++) for (let c = 0; c < 3; c++) {
      const x = 500 + c * m, y = 30 + f * m;
      oct.push(`<path class="fg-org" d="M${pts([P(x + a, y), P(x + a + s, y), P(x + m, y + a), P(x + m, y + a + s), P(x + a + s, y + m), P(x + a, y + m), P(x, y + a + s), P(x, y + a)])}Z"/>`);
      if (f < 2 && c < 2) oct.push(`<path class="fg-geo" d="M${pts([P(x + m, y + m - a), P(x + m + a, y + m), P(x + m, y + m + a), P(x + m - a, y + m)])}Z"/>`);
    }
    return svg([660, 175], cuad + tri.join('') + hex.join('') + oct.join('') +
      T(80, 165, L('Cuadrados')) + T(240, 165, L('Triángulos')) + T(410, 165, L('Hexágonos')) + T(570, 165, L('Octógonos y cuadrados')),
      L('Teselaciones regulares de cuadrados, triángulos y hexágonos, y semirregular de octógonos y cuadrados'));
  }

  /* =============== CONSTRUCCIONES ANIMADAS =============== */
  const players = {
    octogono(L) {
      const O = P(300, 210), r = 160, V = [...Array(8)].map((_, k) => G.polar(O, r, k * 45 - 90));
      return { title: L('Octógono regular inscrito en una circunferencia'), vb: [600, 420], yt: 'https://www.youtube.com/watch?v=f90-wnfz_Xs', steps: [
        { t: L('Traza la circunferencia y dos diámetros perpendiculares. Sus extremos son los vértices 1, 3, 5 y 7.'), d: [S.circ(O, r, 'g-aux'), S.seg(V[0], V[4], 'g-aux'), S.seg(V[2], V[6], 'g-aux'), S.ra(O, P(1, 0), P(0, -1), 14), S.pt(V[0], '1', 8, -8), S.pt(V[2], '3', 10, 6), S.pt(V[4], '5', 8, 20), S.pt(V[6], '7', -22, 6)] },
        { t: L('Traza las bisectrices de los ángulos rectos (a 45º con la escuadra): cortan la circunferencia en los vértices 2, 4, 6 y 8.'), d: [S.seg(V[1], V[5], 'g-aux'), S.seg(V[3], V[7], 'g-aux'), S.pt(V[1], '2', 10, -4), S.pt(V[3], '4', 10, 16), S.pt(V[5], '6', -22, 16), S.pt(V[7], '8', -22, -4)] },
        { t: L('Une los ocho vértices en orden.'), d: [S.poly(V)] }
      ] };
    },
    estrella8(L) {
      const O = P(300, 210), r = 160, V = [...Array(8)].map((_, k) => G.polar(O, r, k * 45 - 90));
      const ord = [0, 3, 6, 1, 4, 7, 2, 5].map(k => V[k]);
      return { title: L('Estrella de ocho puntas'), vb: [600, 420], yt: 'https://www.youtube.com/watch?v=f0Js56GYaGg', steps: [
        { t: L('Divide la circunferencia en 8 partes iguales, como en el octógono.'), d: [S.circ(O, r, 'g-aux'), ...V.map((v, k) => S.pt(v, String(k + 1), v.x >= O.x ? 8 : -20, v.y > O.y ? 18 : -6))] },
        { t: L('Une cada punto con el que está tres puestos más allá: 1 con 4, 4 con 7, 7 con 2…'), d: [S.poly(ord.slice(0, 4), 'g-main', false)] },
        { t: L('Sigue hasta volver al punto 1: aparece la estrella de ocho puntas.'), d: [S.poly(ord, 'g-res')] }
      ] };
    },
    dodecagono(L) {
      const O = P(300, 215), r = 150, V = [...Array(12)].map((_, k) => G.polar(O, r, k * 30 - 90));
      const ext = [0, 3, 6, 9];
      return { title: L('Dodecágono regular inscrito en una circunferencia'), vb: [600, 430], yt: 'https://www.youtube.com/watch?v=LSx-ra1sgJY', steps: [
        { t: L('Traza la circunferencia y dos diámetros perpendiculares.'), d: [S.circ(O, r, 'g-aux'), S.seg(V[0], V[6], 'g-aux'), S.seg(V[3], V[9], 'g-aux'), ...ext.map(k => S.pt(V[k], '', 0, 0))] },
        { t: L('Con centro en cada uno de los cuatro extremos y el mismo radio de la circunferencia, traza un arco que la corte en dos puntos.'), d: ext.map(k => S.mark(V[k], V[(k + 2) % 12], 10) + S.mark(V[k], V[(k + 10) % 12], 10)) },
        { t: L('Ya tienes la circunferencia dividida en 12 partes iguales.'), d: V.map((v, k) => S.pt(v, String(k + 1), v.x >= O.x - 1 ? 8 : -22, v.y > O.y ? 18 : -6)) },
        { t: L('Une los doce puntos en orden.'), d: [S.poly(V)] }
      ] };
    },
    estrella12(L) {
      const O = P(300, 215), r = 150, V = [...Array(12)].map((_, k) => G.polar(O, r, k * 30 - 90));
      const ord = [...Array(12)].map((_, k) => V[(k * 5) % 12]);
      return { title: L('Estrella de doce puntas'), vb: [600, 430], yt: 'https://www.youtube.com/watch?v=LSx-ra1sgJY', steps: [
        { t: L('Divide la circunferencia en 12 partes iguales, como en el dodecágono.'), d: [S.circ(O, r, 'g-aux'), ...V.map((v, k) => S.pt(v, String(k + 1), v.x >= O.x - 1 ? 8 : -22, v.y > O.y ? 18 : -6))] },
        { t: L('Une cada punto con el que está cinco puestos más allá: 1 con 6, 6 con 11, 11 con 4…'), d: [S.poly(ord.slice(0, 5), 'g-main', false)] },
        { t: L('Sigue hasta volver al punto 1: aparece la estrella de doce puntas, la reina de los alicatados.'), d: [S.poly(ord, 'g-res')] }
      ] };
    },
    redCuadrada(L) {
      const x0 = 120, y0 = 360, s = 60, n = 6;
      const xs = [...Array(n + 1)].map((_, k) => x0 + k * s), ys = [...Array(n)].map((_, k) => y0 - k * s);
      return { title: L('Red modular cuadrada'), vb: [600, 420], yt: 'https://www.youtube.com/watch?v=9t0BymZifc4', steps: [
        { t: L('Traza una recta horizontal y, con escuadra y cartabón, una perpendicular en su extremo.'), d: [S.seg(P(80, y0), P(520, y0), 'g-data'), S.seg(P(x0, y0 + 30), P(x0, 40), 'g-data'), S.ra(P(x0, y0), P(1, 0), P(0, -1), 14)] },
        { t: L('Con el compás, lleva la medida del módulo varias veces sobre las dos rectas.'), d: xs.slice(1).map(x => S.mark(P(x - s, y0), P(x, y0), 8)).concat(ys.slice(1).map(y => S.mark(P(x0, y + s), P(x0, y), 8))) },
        { t: L('Por cada marca, traza paralelas deslizando la escuadra sobre el cartabón: verticales y horizontales.'), d: xs.slice(1).map(x => S.seg(P(x, y0), P(x, y0 - (n - 1) * s), 'g-main')).concat(ys.slice(1).map(y => S.seg(P(x0, y), P(x0 + n * s, y), 'g-main'))) },
        { t: L('Ya tienes la red: cada cuadrado es un módulo.'), d: [S.poly([P(x0 + 2 * s, y0 - s), P(x0 + 3 * s, y0 - s), P(x0 + 3 * s, y0 - 2 * s), P(x0 + 2 * s, y0 - 2 * s)], 'g-res')] }
      ] };
    },
    redTriangular(L) {
      const x0 = 70, y0 = 370, s = 70, hgt = s * Math.sqrt(3) / 2, n = 5, filas = 4;
      const pto = (k, t) => P(x0 + k * s + t * s / 2, y0 - t * hgt);          /* recorre las rectas a 60º */
      const base = [...Array(n + 1)].map((_, k) => pto(k, 0));
      const L60 = base.map((_, k) => S.seg(pto(k, 0), pto(k, filas), 'g-main'));
      const L120 = [];
      for (let k = 1; k <= n + filas; k++) {
        const t0 = Math.max(0, k - n), t1 = Math.min(filas, k);
        if (t1 > t0) L120.push(S.seg(pto(k - t0, t0), pto(k - t1, t1), 'g-main'));
      }
      const H = [...Array(filas)].map((_, f) => S.seg(pto(0, f + 1), pto(n, f + 1), 'g-main'));
      const cen = pto(1, 2);
      return { title: L('Red modular triangular'), vb: [600, 420], yt: 'https://www.youtube.com/watch?v=Bghonj22lq4', steps: [
        { t: L('Traza una recta horizontal y lleva con el compás la medida del lado varias veces.'), d: [S.seg(P(30, y0), P(470, y0), 'g-data'), ...base.slice(1).map((p, k) => S.mark(base[k], p, 8))] },
        { t: L('Por cada marca, traza rectas a 60º con el cartabón.'), d: L60 },
        { t: L('Gira el cartabón y traza rectas a 120º que pasen por los mismos cruces.'), d: L120 },
        { t: L('Une los cruces con horizontales: ya tienes la red de triángulos equiláteros. Seis triángulos forman un hexágono.'), d: H.concat([S.poly([...Array(6)].map((_, k) => G.polar(cen, s, k * 60)), 'g-res')]) }
      ] };
    },
    hueso(L) {
      const x0 = 180, y0 = 90, a = 240, q = a / 4, d = 30;
      const A = P(x0, y0), B = P(x0 + a, y0), C = P(x0 + a, y0 + a), D = P(x0, y0 + a);
      const arriba = [P(x0 + q, y0), P(x0 + q + d, y0 - d), P(x0 + 3 * q - d, y0 - d), P(x0 + 3 * q, y0)];
      const abajo = arriba.map(p => P(p.x, 2 * y0 + a - p.y));
      const izq = [P(x0, y0 + q), P(x0 + d, y0 + q + d), P(x0 + d, y0 + 3 * q - d), P(x0, y0 + 3 * q)];
      const der = izq.map(p => P(2 * x0 + a - p.x, p.y));
      const contorno = [A, ...arriba, B, ...der, C, ...abajo.slice().reverse(), D, ...izq.slice().reverse()];
      const marcas = [1, 2, 3].flatMap(k => [P(x0 + k * q, y0), P(x0 + k * q, y0 + a), P(x0, y0 + k * q), P(x0 + a, y0 + k * q)]);
      return { title: L('El hueso nazarí'), vb: [600, 400], yt: 'https://www.youtube.com/watch?v=TGqOPK25zng', steps: [
        { t: L('Dibuja un cuadrado.'), d: [S.poly([A, B, C, D], 'g-data')] },
        { t: L('Divide cada lado en cuatro partes iguales.'), d: marcas.map(p => S.pt(p, '', 0, 0)) },
        { t: L('Arriba y abajo, sobre las dos partes centrales, dibuja un trapecio hacia fuera con lados a 45º.'), d: [S.poly(arriba, 'g-main', false), S.poly(abajo, 'g-main', false)] },
        { t: L('A izquierda y derecha, dibuja el mismo trapecio hacia dentro: lo que sale por arriba entra por los lados.'), d: [S.poly(izq, 'g-main', false), S.poly(der, 'g-main', false)] },
        { t: L('Repasa el contorno: es el hueso. Girándolo 90º y repitiéndolo, encaja con sus vecinos sin dejar huecos.'), d: [S.poly(contorno, 'g-res')] }
      ] };
    },
    pajarita(L) {
      const l = 300, A = P(150, 330), B = P(450, 330), C = P(300, 330 - l * Math.sqrt(3) / 2), Gc = P(300, (330 * 2 + C.y) / 3);
      const lados = [[A, B], [B, C], [C, A]], r = l / 2;
      const Ms = lados.map(([X, Y]) => G.lerp(X, Y, .5));
      const arcos = (cl) => lados.map(([X, Y], i) => arcoEntre(X, Ms[i], r, Gc, true, cl) + arcoEntre(Ms[i], Y, r, Gc, false, cl));
      return { title: L('La pajarita nazarí'), vb: [600, 400], yt: 'https://www.youtube.com/watch?v=8tbkSSk8-jA', steps: [
        { t: L('Dibuja un triángulo equilátero.'), d: [S.poly([A, B, C], 'g-data'), S.pt(A, 'A', -20, 18), S.pt(B, 'B', 8, 18), S.pt(C, 'C', 10, -6)] },
        { t: L('Marca el punto medio de cada lado (con la mediatriz).'), d: Ms.map((m, i) => S.pt(m, 'M' + (i + 1), i === 2 ? -36 : 10, i === 0 ? 22 : 0)) },
        { t: L('En cada lado, desde el vértice hasta el punto medio, traza un arco hacia fuera con radio igual a medio lado.'), d: lados.map(([X], i) => arcoEntre(X, Ms[i], r, Gc, true, 'g-arc')) },
        { t: L('Desde el punto medio hasta el otro vértice, traza el mismo arco hacia dentro. Es un giro de 180º alrededor del punto medio.'), d: lados.map(([, Y], i) => arcoEntre(Ms[i], Y, r, Gc, false, 'g-arc')) },
        { t: L('Repasa la silueta: es la pajarita. Girándola 60º y 120º, rellena el plano.'), d: arcos('g-res') }
      ] };
    }
  };

  /* =============== TEXTOS =============== */
  const ES = {
    t: {},
    ui: {
      indice: 'Índice', tocAria: 'Índice de la teoría', cuadernoLabel: 'En tu Manual de DT:', misionK: 'MISIÓN',
      diasIntro: 'La teoría está repartida en <b>cinco días</b>. Cada día se lee o se explica en clase en <b>15 minutos como máximo</b> y te prepara para una actividad. Las construcciones se ven <b>paso a paso</b>: pulsa ▶ y repítelas en tu Manual de DT. Los vídeos son para practicar en casa.',
      diaK: 'DÍA', minutos: '15 min', prepara: 'Te prepara para', actK: 'Actividad',
      dias: ['La geometría de al-Ándalus', 'Polígonos regulares y estrellados', 'Redes modulares', 'Transformaciones geométricas', 'Del azulejo al mural'],
      saberK: 'Saber básico', verMas: 'Para ver más (en casa)', abreYT: 'Se abre en YouTube',
      subt: 'Los vídeos están en español. En YouTube puedes activar los subtítulos y traducirlos automáticamente a tu idioma.',
      videosT: 'Vídeos de la unidad', videosP: 'Todos los vídeos de la teoría, ordenados por días. Míralos con el compás en la mano y repite cada construcción en tu Manual de DT.'
    },
    sec: {
      historia: ['Una breve historia del dibujo técnico', h => `
        <ol class="fases-n2">
          <li><b>Egipto</b><span>Los «tensores de cuerda» medían y trazaban los campos y los templos con cuerdas anudadas.</span></li>
          <li><b>Grecia</b><span>Euclides (siglo III a. C.) reúne en los <i>Elementos</i> la geometría que se construye solo con regla y compás.</span></li>
          <li><b>Al-Ándalus</b><span>Los alarifes, maestros de obras, trazaban arcos, cúpulas y alicatados con compás y escuadra, sin medir con números.</span></li>
          <li><b>Siglo XVIII</b><span>Gaspard Monge crea la geometría descriptiva: representar el espacio sobre el plano. Es la base del dibujo técnico actual.</span></li>
        </ol>
        <p class="tip"><b>La idea clave:</b> durante siglos, la belleza de los edificios se ha construido con los mismos instrumentos que usas en clase.</p>`],

      alicatado: ['El alicatado: un puzle de cerámica', h => `
        <p>Un <b>alicatado</b> se hace con piezas de cerámica vidriada, cada una de <b>un solo color</b>, que se cortan una a una y se encajan como un puzle. Así se cubrían los zócalos de los palacios nazaríes.</p>
        <ul class="cual cual3">
          <li><b>Alicatado</b><span>Piezas recortadas y encajadas. Cada color es una pieza distinta.</span></li>
          <li><b>Cuerda seca</b><span>Azulejo entero en el que los colores se separan con una línea de grasa que no deja que se mezclen al cocerse.</span></li>
          <li><b>Arista</b><span>Azulejo con el dibujo en relieve, hecho con molde. Las aristas separan los colores. Muy típico de la cerámica de Triana.</span></li>
        </ul>
        <p class="ojo"><b>No confundas:</b> el alicatado no se pinta; se <b>recorta</b>. Por eso todo depende de que la geometría encaje.</p>`],

      patrimonio: ['¿Dónde está en Andalucía?', h => `
        <ul class="cards3">
          <li><b>La Alhambra (Granada)</b><span>Palacio nazarí (siglos XIII–XV). Zócalos de alicatado en el Salón de Embajadores del palacio de Comares, en el Mexuar y en las torres.</span></li>
          <li><b>El Alcázar de Sevilla</b><span>Palacio mudéjar de Pedro I (siglo XIV), hecho por artesanos que conocían el arte nazarí.</span></li>
          <li><b>La Mezquita de Córdoba</b><span>Su geometría de arcos, celosías y estrellas en las cúpulas es anterior a la Alhambra.</span></li>
        </ul>
        <p>El artista holandés <b>M. C. Escher</b> visitó la Alhambra en 1922 y en 1936. Allí copió los alicatados en su cuaderno y descubrió la idea que le hizo famoso: <b>llenar el plano con figuras que encajan sin dejar huecos</b>.</p>
        ${h.cuaderno('pega o dibuja un zócalo de la Alhambra y marca encima con color la estrella, la red y lo que se repite.')}`],

      poligonos: ['Polígonos regulares y estrellados', h => `
        <p class="def">Un <b>polígono regular</b> tiene todos sus lados y todos sus ángulos iguales. Se construye <b>inscrito</b> en una circunferencia dividiéndola en partes iguales.</p>
        <p class="def">Un <b>polígono estrellado</b> se obtiene uniendo los puntos de la circunferencia <b>saltando</b> siempre el mismo número de puntos. Con 8 puntos, saltando de 3 en 3, sale la estrella de ocho; con 12 puntos, de 5 en 5, la de doce.</p>
        <p>Recuerda de la unidad 1: ya sabes construir el triángulo, el cuadrado, el pentágono y el hexágono. Ahora añadimos los polígonos de la Alhambra:</p>
        ${h.player('octogono')}
        ${h.player('estrella8')}
        ${h.player('dodecagono')}
        ${h.player('estrella12')}`],

      redes: ['Módulo, submódulo y red', h => `
        <ul class="cual">
          <li><b>Módulo</b><span>La forma básica que se repite (en un alicatado, una estrella o una pieza).</span></li>
          <li><b>Submódulo</b><span>Las partes más pequeñas en que se divide un módulo.</span></li>
          <li><b>Red modular</b><span>La estructura de líneas que ordena dónde va cada módulo: cuadrada, triangular o hexagonal.</span></li>
        </ul>
        ${h.fig('teselas')}
        <p>Solo hay <b>tres polígonos regulares</b> que llenan el plano solos sin dejar huecos: el <b>triángulo</b>, el <b>cuadrado</b> y el <b>hexágono</b>, porque sus ángulos suman exactamente 360º alrededor de cada vértice. Si se combinan varios polígonos, aparecen las redes <b>semirregulares</b>, como la de octógonos y cuadrados, muy usada en los zócalos.</p>
        ${h.player('redCuadrada')}
        ${h.player('redTriangular')}`],

      transformaciones: ['Las cuatro transformaciones', h => `
        ${h.fig('transf')}
        <ul class="cual">
          <li><b>Traslación</b><span>La figura se desplaza en una dirección y una distancia, sin girar.</span></li>
          <li><b>Giro</b><span>La figura gira alrededor de un punto (centro de giro) un ángulo determinado.</span></li>
          <li><b>Simetría axial</b><span>La figura se refleja respecto a una recta, como en un espejo.</span></li>
          <li><b>Simetría central</b><span>La figura se refleja respecto a un punto. Es lo mismo que un giro de 180º.</span></li>
        </ul>
        <p>Las cuatro son <b>isométricas</b>: la figura no cambia de forma ni de tamaño, solo de posición. Por eso los módulos encajan.</p>`],

      nazaries: ['El truco nazarí: deformar sin dejar huecos', h => `
        <p>Los alarifes partían de un polígono que llena el plano y lo <b>deformaban</b>: lo que quitaban por un lado lo añadían por otro. Así la pieza sigue encajando con sus vecinas.</p>
        ${h.player('hueso')}
        ${h.player('pajarita')}
        <p class="tip"><b>Para tu azulejo:</b> puedes partir de un cuadrado o de un triángulo, deformarlo así y repetirlo con traslaciones y giros.</p>`],

      precision: ['Precisión, claridad y limpieza', h => `
        <ul class="cual">
          <li><b>Lápiz duro (2H)</b><span>Para la red y los trazados auxiliares: líneas finas y claras.</span></li>
          <li><b>Lápiz blando (HB o B)</b><span>Para el resultado: líneas firmes que se distinguen de las auxiliares.</span></li>
          <li><b>Compás</b><span>Mina afilada y a la misma altura que la punta, para que los arcos pasen justo por los puntos.</span></li>
          <li><b>Escuadra y cartabón</b><span>Limpios antes de empezar, para no arrastrar grafito sobre el dibujo.</span></li>
        </ul>
        <p class="ojo"><b>No borres los trazados auxiliares:</b> son la prueba de cómo has construido tu diseño.</p>`],

      mural: ['Del azulejo al mural', h => `
        <ol class="fases-n2">
          <li><b>Medida común</b><span>Todos los azulejos tienen la medida que indique tu profesor, para que encajen en el mural.</span></li>
          <li><b>Construir</b><span>Traza tu diseño con instrumentos a tamaño final sobre el cartón.</span></li>
          <li><b>Colorear</b><span>Como en un alicatado: cada zona de un solo color y sin salirte.</span></li>
          <li><b>Encajar</b><span>Comprueba que la red continúa en los bordes: tu azulejo tiene que «seguir» en el de al lado.</span></li>
          <li><b>Montar</b><span>Entre toda la clase, el mural se monta y se expone en el centro.</span></li>
        </ol>`]
    },

    mision: {
      titulo: 'Un muro de la Alhambra en el IES',
      reto: 'Los zócalos de la Alhambra parecen magia, pero son <b>geometría</b>: polígonos, estrellas, redes y transformaciones trazados con regla y compás. Tu misión es diseñar y construir <b>un azulejo en cartón</b> con esa geometría. Con los azulejos de toda la clase montaremos <b>un mural colectivo</b> que se expondrá en el centro.',
      fasesT: 'Cómo se juega',
      fases: [
        ['Lee un alicatado', 'Analiza en tu Manual de DT un alicatado andaluz: su historia, su red y su estrella.'],
        ['Taller de construcciones', 'Construye en tu Manual los polígonos, las estrellas, las redes y las piezas nazaríes.'],
        ['Diseña tu azulejo', 'Haz bocetos en el Manual y construye tu azulejo en cartón.'],
        ['Monta el mural', 'Tu azulejo se une a los de tus compañeros en el mural del centro.'],
        ['Examen', 'Demuestra lo que has aprendido en la prueba de la unidad.']
      ],
      entregasT: 'Qué tienes que entregar',
      entregas: [
        'Tu <b>Manual de DT</b> con el análisis del alicatado, los apuntes y las construcciones: fotos en la tarea de Classroom.',
        'Tu <b>azulejo en cartón</b>, en clase, para el mural. Haz también una foto y súbela a Classroom.',
        'Un <b>examen</b> con el contenido de la unidad.'
      ],
      pista: '<b>Pista:</b> en la pestaña <b>Teoría</b> tienes todas las construcciones paso a paso, con su vídeo.'
    },

    act: {
      intro: 'Trabajas de forma <b>individual</b>. Lo que se dibuja va en tu <b>Manual de DT</b> y las fotos, en la tarea de Classroom. El azulejo se hace en <b>cartón</b>.',
      acts: [
        ['Leer un alicatado', 'Análisis', {
          cuaderno: true,
          obj: 'Analizar un alicatado del patrimonio andaluz y descubrir la geometría que lo construye.',
          pasos: [
            'Elige un alicatado andaluz de los que te dé tu profesor.',
            'Sitúalo: dónde está, de qué época es y qué técnica se usó (alicatado, cuerda seca o arista).',
            'Haz un <b>croquis a mano alzada</b> del alicatado y marca encima con color: la <b>red</b>, el <b>módulo</b> y la <b>estrella o polígono</b> principal.',
            'Escribe qué <b>transformación</b> se repite (traslación, giro o simetría) y dónde la ves.',
            'Explica en dos o tres líneas por qué la geometría era tan importante para los alarifes.'
          ],
          donde: 'Individual, en tu Manual de DT.',
          entrega: 'Fotos de las páginas en la tarea de Classroom.'
        }],
        ['Taller de construcciones', 'Manual', {
          cuaderno: true,
          obj: 'Construir con instrumentos los trazados que necesitas para tu azulejo.',
          pasos: [
            'Toma <b>a mano alzada</b> los apuntes de la teoría (con tus palabras y croquis).',
            ['Construye con regla, escuadra, cartabón y compás:', [
              'el <b>octógono</b> inscrito y la <b>estrella de ocho puntas</b>;',
              'el <b>dodecágono</b> inscrito y la <b>estrella de doce puntas</b>;',
              'una <b>red cuadrada</b> y una <b>red triangular</b>;',
              'las <b>cuatro transformaciones</b> de una figura sencilla;',
              'el <b>hueso</b> y la <b>pajarita</b> nazaríes.'
            ]],
            'Deja visibles los <b>trazados auxiliares</b> y escribe el nombre de cada construcción.'
          ],
          donde: 'Individual, en tu Manual de DT.',
          entrega: 'Fotos de las páginas en la tarea de Classroom.'
        }],
        ['Mi azulejo nazarí', 'Diseño', {
          cuaderno: false,
          obj: 'Diseñar y construir un azulejo con geometría nazarí para el mural colectivo.',
          pasos: [
            'En tu Manual de DT, haz <b>tres bocetos</b> a mano alzada con ideas distintas.',
            'Elige uno y decide su <b>red</b> (cuadrada o triangular) y su <b>módulo</b>.',
            'Incluye al menos <b>un polígono o una estrella</b> y <b>una transformación</b> (traslación, giro o simetría).',
            'Construye el diseño con instrumentos a <b>tamaño final sobre el cartón</b>, con la medida que indique tu profesor.',
            'Colorea cada zona de un solo color, como un alicatado, y comprueba que la red continúa en los bordes.',
            'Haz una <b>foto</b> de tu azulejo y entrégalo en clase para el mural.'
          ],
          donde: 'Bocetos en tu Manual de DT; azulejo en cartón, en clase.',
          entrega: 'El azulejo, en clase. Fotos de los bocetos y del azulejo en la tarea de Classroom.'
        }],
        ['Examen', 'Examen', {
          obj: 'Demostrar lo que has aprendido en la unidad.',
          pasos: [
            'Repasa la pestaña <b>Teoría</b>, incluidas las construcciones paso a paso.',
            'Lleva <b>regla, escuadra, cartabón y compás</b>.',
            'Resuelve las preguntas dejando <b>visibles los trazados auxiliares</b>.'
          ],
          donde: 'En clase. La fecha te la dirá tu profesor.',
          entrega: 'Prueba escrita en clase.'
        }]
      ],
      cuadSi: '📐 Se realiza en el Manual de DT', cuadNo: 'No se realiza en el Manual de DT',
      cotejoT: 'Lista de cotejo: ¿cómo vas?',
      cotejoP: 'Marca lo que ya tienes hecho. Las marcas se guardan solo en este dispositivo. Cuando tu profesor te lo pida, <b>haz una captura de pantalla de esta lista y súbela a la tarea de Classroom</b>: así podrá darte retroalimentación.',
      grupos: [
        ['Leer un alicatado', ['He situado el alicatado: lugar, época y técnica.', 'He hecho el croquis y he marcado la red, el módulo y la estrella.', 'He escrito qué transformación se repite.']],
        ['Taller de construcciones', ['He tomado los apuntes a mano alzada.', 'Octógono y estrella de ocho', 'Dodecágono y estrella de doce', 'Red cuadrada y red triangular', 'Las cuatro transformaciones', 'Hueso y pajarita nazaríes']],
        ['Mi azulejo nazarí', ['He hecho tres bocetos.', 'Mi diseño tiene red, polígono o estrella y una transformación.', 'Lo he construido en cartón con instrumentos.', 'Lo he coloreado y la red continúa en los bordes.', 'He subido las fotos a Classroom.']],
        ['Examen', ['He repasado las construcciones de la Teoría.']]
      ],
      progreso: (n, t) => `Llevas ${n} de ${t}`, borrar: 'Borrar mis marcas', confirmar: '¿Seguro? Pulsa otra vez para borrar.'
    },

    rub: {
      intro: 'Así se evalúa esta unidad. Cada indicador se puntúa de 1 a 10. La nota de cada criterio es la media de sus indicadores.',
      criteriosT: 'Criterios de evaluación',
      criterios: [
        ['1.2', 'Analizar la importancia de la geometría en la Historia del Arte, especialmente en el Patrimonio Artístico Andaluz.'],
        ['2.1', 'Analizar mediante la realización de bocetos y croquis a mano alzada la geometría interna de formas bidimensionales.'],
        ['2.2', 'Dibujar formas geométricas poligonales y curvilíneas, resolver tangencias básicas y transformaciones geométricas.'],
        ['2.3', 'Presentar el trabajo realizado con limpieza y precisión en el trazado, tanto a mano alzada como en el trazado geométrico.']
      ],
      niveles: ['Insuficiente (1–4)', 'Suficiente (5)', 'Bien (6)', 'Notable (7–8)', 'Sobresaliente (9–10)'],
      criterio: 'Criterio',
      bloques: [
        ['Actividad 1. Leer un alicatado', [
          ['IL 1.2.1', 'Contexto histórico', '1.2', 'Sitúa el alicatado en su lugar, época y técnica, y explica el papel de la geometría para los alarifes.', ['No sitúa la obra.', 'Datos incompletos.', 'Lugar, época y técnica correctos.', 'Datos correctos y explica el papel de la geometría.', 'Contextualiza con precisión y relaciona con otras obras del patrimonio andaluz.']],
          ['IL 1.2.2', 'Geometría en el patrimonio', '1.2', 'Reconoce en el alicatado los recursos geométricos (estrellas, polígonos, red y transformaciones).', ['No reconoce la geometría.', 'Reconoce un elemento.', 'Reconoce la estrella y la red.', 'Reconoce estrella, red y transformación.', 'Lo explica todo con vocabulario técnico preciso.']],
          ['IL 2.1.1', 'Croquis del alicatado', '2.1', 'Analiza en un croquis a mano alzada la geometría interna del alicatado: red, módulo y estrella.', ['Sin croquis.', 'Croquis sin análisis.', 'Marca la red o el módulo.', 'Marca red, módulo y estrella con claridad.', 'Análisis completo, limpio y con color que lo aclara.']]]],
        ['Actividad 2. Taller de construcciones', [
          ['IL 2.2.1', 'Polígonos y estrellas', '2.2', 'Construye con instrumentos el octógono, el dodecágono y sus estrellas.', ['No los construye o están mal.', 'Faltan construcciones o hay errores graves.', 'Correctas con pequeños errores.', 'Correctas y precisas.', 'Precisas, completas y con los pasos descritos.']],
          ['IL 2.2.2', 'Redes modulares', '2.2', 'Construye las redes cuadrada y triangular con escuadra, cartabón y compás.', ['Sin redes.', 'Redes irregulares.', 'Redes correctas con algún desajuste.', 'Redes correctas y regulares.', 'Redes precisas y bien aprovechadas.']],
          ['IL 2.2.3', 'Transformaciones', '2.2', 'Aplica las cuatro transformaciones y construye el hueso y la pajarita nazaríes.', ['No las aplica.', 'Aplica alguna con errores.', 'Aplica las transformaciones y una pieza nazarí.', 'Todo correcto.', 'Todo correcto, preciso y explicado.']],
          ['IL 2.3.1', 'Presentación del Manual', '2.3', 'Presenta el Manual con limpieza, precisión y trazados auxiliares visibles.', ['Sucio o sin auxiliares.', 'Presentable con manchas o auxiliares borrados en parte.', 'Limpio y con auxiliares visibles.', 'Limpio, preciso y con jerarquía de trazos.', 'Impecable.']]]],
        ['Actividad 3. Mi azulejo nazarí', [
          ['IL 2.1.2', 'Bocetos', '2.1', 'Realiza bocetos a mano alzada que exploran la geometría interna del diseño.', ['Sin bocetos.', 'Un boceto sin geometría.', 'Tres bocetos con geometría.', 'Bocetos variados que muestran la red y el módulo.', 'Bocetos variados que explican cómo se ha llegado al diseño.']],
          ['IL 2.2.4', 'Módulo en la red', '2.2', 'Construye el azulejo sobre una red, con un polígono o estrella y al menos una transformación.', ['Sin red ni geometría.', 'Geometría incompleta o con errores.', 'Red, polígono y transformación correctos.', 'Diseño preciso y con la red continua en los bordes.', 'Diseño preciso, original y que encaja en el mural.']],
          ['IL 2.3.2', 'Acabado del azulejo', '2.3', 'Presenta el azulejo en cartón con precisión, limpieza y color sin salirse.', ['Sin terminar.', 'Terminado con poca limpieza.', 'Limpio y con color correcto.', 'Preciso y muy limpio.', 'Acabado impecable, listo para exponer.']]]],
        ['Actividad 4. Examen', [
          ['IL 1.2.3', 'Teoría', '1.2', 'Responde a las preguntas sobre la geometría en el patrimonio andaluz y la historia del dibujo técnico.', ['Respuestas erróneas.', 'Respuestas incompletas.', 'Respuestas correctas básicas.', 'Respuestas correctas y razonadas.', 'Respuestas completas con vocabulario técnico.']],
          ['IL 2.2.5', 'Construcciones', '2.2', 'Resuelve las construcciones de polígonos, estrellas, redes y transformaciones.', ['Incorrectas.', 'Con errores importantes.', 'Correctas con pequeños errores.', 'Correctas y precisas.', 'Precisas y bien resueltas.']],
          ['IL 2.3.3', 'Presentación del examen', '2.3', 'Presenta la prueba con limpieza, precisión y trazados auxiliares visibles.', ['Sin auxiliares o sucio.', 'Auxiliares incompletos.', 'Auxiliares visibles.', 'Limpio y preciso.', 'Impecable.']]]]
      ]
    }
  };

  NIVEL.crear({
    id: 'dt4-n2', ns: 'DT4N2', color: 'var(--fluor)', ES,
    DIAS: [
      [['historia', 'alicatado', 'patrimonio'], [0]],
      [['poligonos'], [1]],
      [['redes'], [1, 2]],
      [['transformaciones', 'nazaries'], [1, 2]],
      [['precision', 'mural'], [2, 3]]
    ],
    SABER: {
      historia: ['DBT.4.A.3'], alicatado: ['DBT.4.A.3', 'DBT.4.A.4'], patrimonio: ['DBT.4.A.4'],
      poligonos: ['DBT.4.B.1'], redes: ['DBT.4.B.1'],
      transformaciones: ['DBT.4.B.3'], nazaries: ['DBT.4.B.3', 'DBT.4.A.4'],
      precision: ['DBT.4.A.5'], mural: ['DBT.4.A.5', 'DBT.4.B.1']
    },
    VIDEOS: {
      alicatado: [['Trazado paso a paso de un alicatado de la Alhambra', 'p_tWM-FNa1I', '4 min', 'Editorial Almizate']],
      patrimonio: [['La geometría de la Alhambra (Rafael Pérez Gómez)', 'MYULZH12lQM', '5 min', 'Alhambra de Granada'], ['Los secretos matemáticos de la Alhambra', 'd0VGhwtITO4', '8 min', 'Xataka']],
      redes: [['Redes modulares: trazado', '9t0BymZifc4', '7 min', 'Carmen López Rey']],
      nazaries: [['La pajarita nazarí paso a paso', '4BGqQ3dMY0s', '6 min', 'Dibujo Técnico paso a paso']],
      mural: [['Trazado de un alicatado del Museo de la Alhambra', 'rcVf5QL9gj0', '2 min', 'Con Regla y Compás']]
    },
    ACT_IL: [['IL 1.2.1', 'IL 1.2.2', 'IL 2.1.1'], ['IL 2.2.1', 'IL 2.2.2', 'IL 2.2.3', 'IL 2.3.1'], ['IL 2.1.2', 'IL 2.2.4', 'IL 2.3.2'], ['IL 1.2.3', 'IL 2.2.5', 'IL 2.3.3']],
    figs: { transf: figTransf, teselas: figTeselas },
    players
  });
})();
