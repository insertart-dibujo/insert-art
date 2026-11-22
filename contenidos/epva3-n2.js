/* INSERT ART · EPVA 3.º ESO · Nivel 02 · Puertas imaginarias del IES */
(function () {
  const { G, S } = window.GEO;
  const P = G.P;
  const svg = (vb, inner, label) => `<svg class="fig-ep fig-geo" viewBox="0 0 ${vb[0]} ${vb[1]}" role="img" aria-label="${label}">${inner}</svg>`;
  const T = (x, y, s, a = 'middle', cl = 'fg-l') => `<text class="${cl}" x="${x}" y="${y}" text-anchor="${a}">${s}</text>`;

  /* =============== FIGURAS ESTÁTICAS =============== */
  /* Partes de una puerta con arco de herradura y alfiz */
  function figPuerta(L) {
    const O = P(240, 190), r = 100, R = 128, yI = 222;
    const dy = yI - O.y, dx = Math.sqrt(r * r - dy * dy), DX = Math.sqrt(R * R - dy * dy);
    const A = P(O.x - dx, yI), B = P(O.x + dx, yI);
    const a0 = G.ang(O, A), a1 = G.ang(O, B) + 360;
    const n = 9, dov = [...Array(n + 1)].map((_, k) => a0 + (a1 - a0) * k / n);
    const dovelas = dov.slice(1, -1).map(a => `<path class="fg-a" d="M${G.polar(O, r, a).x} ${G.polar(O, r, a).y}L${G.polar(O, R, a).x} ${G.polar(O, R, a).y}"/>`).join('');
    const ki = Math.floor(n / 2), kc = [dov[ki], dov[ki + 1]];
    const clave = `<path class="fg-k" d="M${G.polar(O, r, kc[0]).x} ${G.polar(O, r, kc[0]).y}L${G.polar(O, R, kc[0]).x} ${G.polar(O, R, kc[0]).y}A${R} ${R} 0 0 1 ${G.polar(O, R, kc[1]).x} ${G.polar(O, R, kc[1]).y}L${G.polar(O, r, kc[1]).x} ${G.polar(O, r, kc[1]).y}A${r} ${r} 0 0 0 ${G.polar(O, r, kc[0]).x} ${G.polar(O, r, kc[0]).y}Z"/>`;
    const intr = `<path class="fg-m" d="M${A.x} ${A.y}A${r} ${r} 0 1 1 ${B.x} ${B.y}"/>`;
    const extr = `<path class="fg-m" d="M${O.x - DX} ${yI}A${R} ${R} 0 1 1 ${O.x + DX} ${yI}"/>`;
    const alfiz = `<rect class="fg-z" x="${O.x - R - 22}" y="${O.y - R - 22}" width="${2 * R + 44}" height="${yI - (O.y - R - 22)}"/>`;
    const jambas = `<path class="fg-m" d="M${A.x} ${yI}V430M${B.x} ${yI}V430M${O.x - DX} ${yI}V430M${O.x + DX} ${yI}V430"/>`;
    const umbral = `<path class="fg-m" d="M${O.x - R - 40} 430H${O.x + R + 40}"/>`;
    const imp = `<path class="fg-d" d="M${O.x - R - 60} ${yI}H${O.x + R + 60}"/><path class="fg-d" d="M${O.x - R - 30} ${O.y}H${O.x + R + 30}"/>`;
    const lead = (x1, y1, x2, y2, s) => `<path class="fg-ld" d="M${x1} ${y1}L${x2} ${y2}"/>` + T(x2 + 6, y2 + 4, L(s), 'start');
    const kp = G.polar(O, (r + R) / 2, (kc[0] + kc[1]) / 2), dp = G.polar(O, (r + R) / 2, dov[2] + 8), ip = G.polar(O, r, 300), ep = G.polar(O, R, 320);
    const lbls = lead(kp.x, kp.y, 430, 40, 'Clave') + `<path class="fg-ld" d="M${dp.x} ${dp.y}L70 70"/>` + T(64, 74, L('Dovela'), 'end') +
      lead(ep.x, ep.y, 430, 92, 'Extradós') + lead(ip.x, ip.y, 430, 128, 'Intradós') +
      lead(O.x + R + 22, O.y - R - 22, 430, 18, 'Alfiz') + lead(O.x + R + 8, O.y - R + 4, 430, 64, 'Albanega') +
      lead(O.x + R + 60, yI, 430, 222, 'Línea de impostas') + lead(B.x, 330, 430, 330, 'Jamba') + lead(O.x + R + 40, 430, 430, 430, 'Umbral') +
      `<path class="fg-q" d="M${A.x} 410H${B.x}"/>` + T(O.x, 405, L('luz')) + `<path class="fg-q" d="M${O.x} ${yI}V${O.y - r}"/>` + T(O.x - 8, O.y - 40, L('flecha'), 'end');
    return svg([680, 450], `<g transform="translate(70 0)">` + alfiz  + imp + jambas + umbral + extr + intr + dovelas + clave + lbls + `</g>`, L('Partes de una puerta con arco de herradura'));
  }

  /* Tipos de arco */
  function figArcos(L) {
    const w = 150, cell = (i, path, name) => `<g transform="translate(${i * 165} 0)"><path class="fg-m" d="${path}"/><path class="fg-d" d="M5 130H${w - 5}"/>${T(w / 2, 182, L(name))}</g>`;
    const mp = `M25 160V130A50 50 0 0 1 125 130V160`;
    const he = `M40 160V130A55 55 0 1 1 110 130V160`;
    const ap = `M25 160V130A100 100 0 0 1 75 43.4A100 100 0 0 1 125 130V160`;
    const lo = `M25 160V130A17 17 0 0 1 42 113A25 25 0 0 1 75 75A25 25 0 0 1 108 113A17 17 0 0 1 125 130V160`;
    return svg([650, 192], cell(0, mp, 'Medio punto') + cell(1, he, 'Herradura') + cell(2, ap, 'Apuntado') + cell(3, lo, 'Lobulado'), L('Tipos de arco: medio punto, herradura, apuntado y lobulado'));
  }

  /* Geométrico frente a orgánico */
  function figGeoOrg(L) {
    const O = P(110, 95), V = [...Array(8)].map((_, k) => G.polar(O, 70, k * 45 - 90));
    const star = `M${[0, 3, 6, 1, 4, 7, 2, 5].map(k => V[k].x.toFixed(1) + ' ' + V[k].y.toFixed(1)).join('L')}Z`;
    const leaf = (x, y, rot, s = 1) => `<path class="fg-org" transform="translate(${x} ${y}) rotate(${rot}) scale(${s})" d="M0 0C14 -18 34 -18 46 0C34 18 14 18 0 0Z"/>`;
    const tallo = `<path class="fg-stem" d="M330 175C330 120 380 110 380 70C380 40 350 30 340 50"/>`;
    return svg([480, 210], `<path class="fg-geo" d="${star}"/><circle class="fg-geo" cx="${O.x}" cy="${O.y}" r="70"/>` + T(110, 200, L('Lacería (geométrico)')) +
      tallo + leaf(330, 140, -150) + leaf(330, 140, -30) + leaf(366, 100, -160, .8) + leaf(372, 96, -20, .8) + leaf(338, 52, 200, .6) + T(360, 200, L('Ataurique (orgánico)')),
      L('Decoración geométrica (lacería) y orgánica (ataurique)'));
  }

  /* Ángulos */
  function figAngulos(L) {
    const cell = (i, deg, name) => { const V = P(i * 160 + 30, 120), E1 = G.polar(V, 110, 0), E2 = G.polar(V, 110, -deg);
      return `<path class="fg-m" d="M${E1.x} ${E1.y}L${V.x} ${V.y}L${E2.x.toFixed(1)} ${E2.y.toFixed(1)}"/>` + S.arc(V, 30, -deg, 0, 'fg-k2') + T(i * 160 + 80, 160, L(name)); };
    return svg([640, 175], cell(0, 50, 'Agudo (menos de 90º)') + cell(1, 90, 'Recto (90º)') + cell(2, 130, 'Obtuso (más de 90º)') + cell(3, 180, 'Llano (180º)'), L('Clasificación de los ángulos'));
  }

  /* Triángulos y cuadriláteros */
  function figPoligonos(L, tipo) {
    const sets = tipo === 'tri' ? [
      ['Equilátero', [[60, 130], [140, 130], [100, 60.7]]], ['Isósceles', [[65, 130], [135, 130], [100, 40]]], ['Escaleno', [[50, 130], [150, 130], [80, 70]]],
      ['Rectángulo', [[60, 130], [140, 130], [60, 60]]], ['Obtusángulo', [[40, 130], [130, 130], [160, 80]]], ['Acutángulo', [[55, 130], [145, 130], [110, 50]]]
    ] : [
      ['Cuadrado', [[60, 60], [130, 60], [130, 130], [60, 130]]], ['Rectángulo', [[40, 75], [160, 75], [160, 130], [40, 130]]], ['Rombo', [[100, 45], [145, 90], [100, 135], [55, 90]]],
      ['Romboide', [[60, 75], [160, 75], [140, 130], [40, 130]]], ['Trapecio', [[70, 70], [130, 70], [160, 130], [40, 130]]], ['Trapezoide', [[50, 80], [130, 55], [160, 130], [60, 125]]]
    ];
    const lbl = tipo === 'tri' ? ['Según sus lados', 'Según sus ángulos'] : ['Paralelogramos', 'Trapecios y trapezoides'];
    return svg([620, 360], sets.map(([n, pts], i) => `<g transform="translate(${(i % 3) * 200 + 10} ${Math.floor(i / 3) * 175 + 15})"><path class="fg-m" d="M${pts.map(p => p.join(' ')).join('L')}Z"/>${T(100, 158, L(n))}</g>`).join('') +
      T(10, 12, L(lbl[0]), 'start', 'fg-h') + T(10, 187, L(lbl[1]), 'start', 'fg-h'), L(tipo === 'tri' ? 'Clasificación de los triángulos' : 'Clasificación de los cuadriláteros'));
  }

  /* Composición: simetría, ritmo y radial */
  function figComposicion(L) {
    const hoja = (x, y, rot, flip) => `<path class="fg-org" transform="translate(${x} ${y}) rotate(${rot}) scale(${flip ? -1 : 1} 1)" d="M0 0C10 -14 26 -14 34 0C26 14 10 14 0 0Z"/>`;
    const sim = `<path class="fg-d" d="M100 20V170"/>` + hoja(98, 70, 200) + hoja(102, 70, -20) + hoja(98, 120, 160) + hoja(102, 120, 20) + `<circle class="fg-geo" cx="100" cy="95" r="12"/>`;
    const rit = [0, 1, 2, 3, 4].map(k => `<g transform="translate(${230 + k * 36} 60)">${k % 2 ? `<circle class="fg-geo" cx="12" cy="35" r="12"/>` : `<rect class="fg-geo" x="2" y="20" width="22" height="30"/>`}</g>`).join('');
    const C = P(520, 95);
    const rad = [...Array(8)].map((_, k) => `<g transform="translate(${C.x} ${C.y}) rotate(${k * 45})"><path class="fg-org" d="M14 0C24 -10 40 -10 50 0C40 10 24 10 14 0Z"/></g>`).join('') + `<circle class="fg-geo" cx="${C.x}" cy="${C.y}" r="10"/>`;
    return svg([620, 200], sim + T(100, 192, L('Simetría axial')) + rit + T(320, 192, L('Ritmo alterno')) + rad + T(520, 192, L('Composición radial')), L('Simetría axial, ritmo y composición radial'));
  }

  /* =============== CONSTRUCCIONES ANIMADAS =============== */
  const players = {
    paralela(L) {
      const Pp = P(260, 140), M = P(140, 300), N = P(340, 300), Q = P(460, 140), d = 200;
      return { title: L('Paralela a una recta por un punto exterior (con compás)'), vb: [600, 380], yt: 'https://www.youtube.com/watch?v=nosS8NBU19A', steps: [
        { t: L('Dibuja la recta r y el punto P fuera de ella.'), d: [S.seg(P(40, 300), P(560, 300), 'g-data'), S.txt(P(548, 290), 'r', 'g-lbl it'), S.pt(Pp, 'P', -22, -6)] },
        { t: L('Con centro en P traza un arco que corte a r en M.'), d: [S.mark(Pp, M, 12), S.pt(M, 'M', -8, 24)] },
        { t: L('Con centro en M y el mismo radio, corta a r en N.'), d: [S.mark(M, N, 10), S.pt(N, 'N', -8, 24)] },
        { t: L('Con centro en N y en P, y el mismo radio, traza dos arcos que se cortan en Q.'), d: [S.mark(N, Q, 10), S.mark(Pp, Q, 8), S.pt(Q, 'Q', 10, -8)] },
        { t: L('Une P y Q: es la paralela a r.'), d: [S.line(Pp, Q, 120, 80, 'g-res')] }
      ] };
    },
    perpendicular(L) {
      const A = P(300, 300), M = P(180, 300), N = P(420, 300), Q = P(300, 140);
      return { title: L('Perpendicular a una recta por uno de sus puntos (con compás)'), vb: [600, 380], yt: 'https://www.youtube.com/watch?v=n5ULlzB5yYU', steps: [
        { t: L('Dibuja la recta r y marca el punto A sobre ella.'), d: [S.seg(P(40, 300), P(560, 300), 'g-data'), S.pt(A, 'A', -6, 24)] },
        { t: L('Con centro en A traza un arco que corte a r en M y N.'), d: [S.arc(A, 120, 170, 190), S.arc(A, 120, -10, 10), S.pt(M, 'M', -8, 24), S.pt(N, 'N', -8, 24)] },
        { t: L('Con centro en M y en N y una abertura mayor, traza dos arcos que se corten en Q.'), d: [S.mark(M, Q, 10), S.mark(N, Q, 10), S.pt(Q, 'Q', 10, -8)] },
        { t: L('Une A y Q: es la perpendicular. Forma 90º con r.'), d: [S.line(A, Q, 0, 100, 'g-res'), S.ra(A, P(1, 0), P(0, -1), 16)] }
      ] };
    },
    segmentos(L) {
      const a = 200, b = 120, O = P(60, 300), A = P(60 + a, 300), B = P(60 + a + b, 300), C = P(60 + a - b, 300);
      return { title: L('Suma y resta de segmentos'), vb: [600, 380], yt: 'https://www.youtube.com/watch?v=cJuJ2ARixRc', steps: [
        { t: L('Estos son los segmentos a y b.'), d: [S.dato(P(60, 90), P(60 + a, 90), 'a'), S.dato(P(320, 90), P(320 + b, 90), 'b')] },
        { t: L('Traza una semirrecta desde O.'), d: [S.seg(O, P(560, 300), 'g-aux'), S.pt(O, 'O', -8, 24)] },
        { t: L('Con el compás, lleva a desde O: obtienes A.'), d: [S.mark(O, A, 8), S.pt(A, 'A', -6, 24)] },
        { t: L('Desde A lleva b hacia delante: OB = a + b.'), d: [S.mark(A, B, 10), S.pt(B, 'B', -6, 24), S.seg(O, B, 'g-main'), S.lab(O, B, 'a + b', 40, 'g-lbl')] },
        { t: L('Desde A lleva b hacia atrás: OC = a − b.'), d: [S.mark(A, C, 10), S.pt(C, 'C', -6, 24), S.seg(O, C, 'g-res'), S.lab(O, C, 'a − b', -26, 'g-lbl')] }
      ] };
    },
    mediatriz(L) {
      const A = P(150, 230), B = P(450, 230), r = 200;
      const [Q, Pp] = G.cc(A, r, B, r).sort((a, b) => b.y - a.y), M = P(300, 230);
      return { title: L('Mediatriz de un segmento'), vb: [600, 420], yt: 'https://www.youtube.com/watch?v=TxvC6A587rM', steps: [
        { t: L('Dibuja el segmento AB.'), d: [S.seg(A, B, 'g-data'), S.pt(A, 'A', -20, 6), S.pt(B, 'B', 10, 6)] },
        { t: L('Con centro en A y una abertura mayor que la mitad de AB, traza un arco por encima y otro por debajo.'), d: [S.mark(A, Pp, 14), S.mark(A, Q, 14)] },
        { t: L('Con centro en B y la misma abertura, traza otros dos arcos. Se cortan en P y Q.'), d: [S.mark(B, Pp, 14), S.mark(B, Q, 14), S.pt(Pp, 'P', 10, -6), S.pt(Q, 'Q', 10, 18)] },
        { t: L('Une P y Q: es la mediatriz. Corta a AB en su punto medio M y forma 90º con él.'), d: [S.line(Pp, Q, 20, 20, 'g-res'), S.ra(M, P(1, 0), P(0, -1), 16, 'g-aux'), S.pt(M, 'M', -24, 22)] }
      ] };
    },
    bisectriz(L) {
      const V = P(110, 330), E1 = G.polar(V, 420, 0), E2 = G.polar(V, 420, -42), r = 170, M = G.polar(V, r, 0), N = G.polar(V, r, -42);
      const Pp = G.cc(M, 150, N, 150).sort((a, b) => G.dist(V, b) - G.dist(V, a))[0];
      return { title: L('Bisectriz de un ángulo'), vb: [600, 400], yt: 'https://www.youtube.com/watch?v=1b8GPGamYfI', steps: [
        { t: L('Dibuja el ángulo con vértice V.'), d: [S.seg(V, E1, 'g-data'), S.seg(V, E2, 'g-data'), S.pt(V, 'V', -22, 8)] },
        { t: L('Con centro en V traza un arco que corte los dos lados en M y N.'), d: [S.arc(V, r, -48, 6), S.pt(M, 'M', 6, 22), S.pt(N, 'N', -26, -6)] },
        { t: L('Con centro en M y en N y la misma abertura, traza dos arcos que se corten en P.'), d: [S.mark(M, Pp, 14), S.mark(N, Pp, 14), S.pt(Pp, 'P', 10, -8)] },
        { t: L('Une V con P: es la bisectriz. Divide el ángulo en dos ángulos iguales.'), d: [S.line(V, Pp, 0, 90, 'g-res')] }
      ] };
    },
    thales(L) {
      const A = P(70, 330), B = P(530, 330), n = 5, step = 78, a = -32;
      const marks = [...Array(n)].map((_, k) => G.polar(A, step * (k + 1), a));
      const d = G.sub(B, marks[n - 1]), divs = marks.slice(0, n - 1).map(m => G.ll(m, d, A, P(1, 0)));
      return { title: L('Dividir el ancho del marco en partes iguales (teorema de Thales)'), vb: [600, 400], yt: 'https://www.youtube.com/watch?v=dqWRtHWI0-c', steps: [
        { t: L('Dibuja el segmento AB que quieres dividir (aquí, el ancho del tramo en 5 módulos).'), d: [S.seg(A, B, 'g-data'), S.pt(A, 'A', -10, 26), S.pt(B, 'B', 4, 26)] },
        { t: L('Desde A traza una semirrecta auxiliar con cualquier inclinación.'), d: [S.seg(A, G.polar(A, step * n + 50, a), 'g-aux')] },
        { t: L('Con el compás, lleva sobre ella 5 medidas iguales: 1, 2, 3, 4 y 5.'), d: marks.map((m, k) => S.mark(k ? marks[k - 1] : A, m, 10) + S.pt(m, String(k + 1), -6, -12)) },
        { t: L('Une la última marca (5) con B.'), d: [S.seg(marks[n - 1], B, 'g-main')] },
        { t: L('Traza paralelas a esa recta por las demás marcas (con escuadra y cartabón). AB queda dividido en 5 partes iguales.'), d: marks.slice(0, n - 1).map((m, k) => S.seg(m, divs[k], 'g-main')).concat(divs.map(p => S.pt(p, '', 0, 0, 'res'))) }
      ] };
    },
    triangulo(L) {
      const A = P(180, 330), B = P(420, 330), l = 240, C = G.cc(A, l, B, l).sort((p, q) => p.y - q.y)[0];
      return { title: L('Triángulo equilátero dado el lado'), vb: [600, 400], yt: 'https://www.youtube.com/watch?v=6FaWFUs3PTw', steps: [
        { t: L('Dibuja el lado AB.'), d: [S.seg(A, B, 'g-data'), S.pt(A, 'A', -10, 26), S.pt(B, 'B', 4, 26)] },
        { t: L('Con centro en A y radio AB, traza un arco.'), d: [S.arc(A, l, -75, -45)] },
        { t: L('Con centro en B y el mismo radio, traza otro arco. Donde se cortan está el vértice C.'), d: [S.arc(B, l, 225, 255), S.pt(C, 'C', 10, -8)] },
        { t: L('Une A, B y C.'), d: [S.poly([A, B, C])] }
      ] };
    },
    cuadrado(L) {
      const A = P(170, 340), B = P(370, 340), l = 200, B1 = P(290, 340), B2 = P(450, 340);
      const top = G.cc(B1, 140, B2, 140).sort((p, q) => p.y - q.y)[0], C = P(370, 140), D = P(170, 140);
      return { title: L('Cuadrado dado el lado'), vb: [600, 400], yt: 'https://www.youtube.com/watch?v=lNNVYh3DvcA', steps: [
        { t: L('Dibuja el lado AB y prolóngalo un poco por el lado de B.'), d: [S.seg(A, B, 'g-data'), S.seg(B, P(500, 340), 'g-aux'), S.pt(A, 'A', -10, 26), S.pt(B, 'B', -4, 26)] },
        { t: L('Levanta una perpendicular en B con el compás: arco con centro en B, y dos arcos iguales desde los cortes.'), d: [S.mark(B, B1, 14), S.mark(B, B2, 14), S.mark(B1, top, 12), S.mark(B2, top, 12), S.seg(B, P(370, 100), 'g-aux'), S.ra(B, P(-1, 0), P(0, -1), 14)] },
        { t: L('Con centro en B y radio AB, marca el punto C sobre la perpendicular.'), d: [S.arc(B, l, 255, 285), S.pt(C, 'C', 10, -8)] },
        { t: L('Con centro en A y en C y el mismo radio AB, traza dos arcos. Se cortan en el vértice D.'), d: [S.mark(A, D, 12), S.mark(C, D, 12), S.pt(D, 'D', -24, -8)] },
        { t: L('Une A, B, C y D.'), d: [S.poly([A, B, C, D])] }
      ] };
    },
    hexagono(L) {
      const O = P(300, 210), r = 150, V = [270, 330, 30, 90, 150, 210].map(a => G.polar(O, r, a));
      return { title: L('Hexágono regular dado el radio'), vb: [600, 420], yt: 'https://www.youtube.com/watch?v=pg0jkgm0HDM', steps: [
        { t: L('Traza la circunferencia con el radio dado y un diámetro vertical. Sus extremos son los vértices 1 y 4.'), d: [S.circ(O, r, 'g-aux'), S.seg(V[0], V[3], 'g-aux'), S.pt(O, 'O', 8, 4), S.pt(V[0], '1', 8, -8), S.pt(V[3], '4', 8, 20)] },
        { t: L('Con centro en 1 y el mismo radio, traza un arco: corta la circunferencia en los vértices 2 y 6.'), d: [S.arc(V[0], r, 0, 180), S.pt(V[1], '2', 10, -6), S.pt(V[5], '6', -24, -6)] },
        { t: L('Con centro en 4 y el mismo radio, haz lo mismo: obtienes los vértices 3 y 5.'), d: [S.arc(V[3], r, 180, 360), S.pt(V[2], '3', 10, 18), S.pt(V[4], '5', -24, 18)] },
        { t: L('Une los seis puntos en orden. El lado mide lo mismo que el radio.'), d: [S.poly(V)] }
      ] };
    },
    octogono(L) {
      const O = P(300, 210), r = 160, V = [...Array(8)].map((_, k) => G.polar(O, r, k * 45 - 90));
      return { title: L('Octógono regular inscrito en una circunferencia'), vb: [600, 420], yt: 'https://www.youtube.com/watch?v=f90-wnfz_Xs', steps: [
        { t: L('Traza la circunferencia y dos diámetros perpendiculares. Sus extremos son los vértices 1, 3, 5 y 7.'), d: [S.circ(O, r, 'g-aux'), S.seg(V[0], V[4], 'g-aux'), S.seg(V[2], V[6], 'g-aux'), S.ra(O, P(1, 0), P(0, -1), 14), S.pt(V[0], '1', 8, -8), S.pt(V[2], '3', 10, 6), S.pt(V[4], '5', 8, 20), S.pt(V[6], '7', -22, 6)] },
        { t: L('Traza las bisectrices de los ángulos rectos: cortan la circunferencia en los vértices 2, 4, 6 y 8.'), d: [S.seg(V[1], V[5], 'g-aux'), S.seg(V[3], V[7], 'g-aux'), S.pt(V[1], '2', 10, -4), S.pt(V[3], '4', 10, 16), S.pt(V[5], '6', -22, 16), S.pt(V[7], '8', -22, -4)] },
        { t: L('Une los ocho vértices en orden.'), d: [S.poly(V)] }
      ] };
    },
    estrella(L) {
      const O = P(300, 210), r = 160, V = [...Array(8)].map((_, k) => G.polar(O, r, k * 45 - 90));
      const ord = [0, 3, 6, 1, 4, 7, 2, 5].map(k => V[k]);
      return { title: L('Estrella de ocho puntas (la base de la lacería)'), vb: [600, 420], yt: 'https://www.youtube.com/watch?v=f0Js56GYaGg', steps: [
        { t: L('Divide la circunferencia en 8 partes iguales, como en el octógono.'), d: [S.circ(O, r, 'g-aux'), ...V.map((v, k) => S.pt(v, String(k + 1), v.x >= O.x ? 8 : -20, v.y > O.y ? 18 : -6))] },
        { t: L('Une cada punto con el que está tres puestos más allá: 1 con 4, 4 con 7, 7 con 2…'), d: [S.poly(ord.slice(0, 4), 'g-main', false)] },
        { t: L('Sigue hasta volver al punto 1: aparece la estrella.'), d: [S.poly(ord, 'g-res')] }
      ] };
    },
    medioPunto(L) {
      const A = P(150, 300), B = P(450, 300), M = P(300, 300), r = 150, R = 195;
      const dov = [1, 2, 3, 4, 5, 6].map(k => 180 + k * 180 / 7);
      return { title: L('Arco de medio punto con sus dovelas'), vb: [600, 400], yt: 'https://www.youtube.com/watch?v=CnlSgdtwnjo', steps: [
        { t: L('Dibuja la luz AB sobre la línea de impostas y las jambas.'), d: [S.seg(A, B, 'g-data'), S.seg(A, P(150, 380), 'g-main'), S.seg(B, P(450, 380), 'g-main'), S.pt(A, 'A', -22, 6), S.pt(B, 'B', 10, 6)] },
        { t: L('Traza la mediatriz de AB: su punto medio M es el centro del arco.'), d: [S.seg(P(300, 320), P(300, 80), 'g-aux'), S.pt(M, 'M', 8, 20)] },
        { t: L('Con centro en M y radio MA, traza la semicircunferencia: es el intradós.'), d: [S.arc(M, r, 180, 360, 'g-res')] },
        { t: L('Con el mismo centro y un radio mayor, traza el extradós.'), d: [S.arc(M, R, 180, 360, 'g-main')] },
        { t: L('Divide el intradós en un número impar de partes (aquí, 7) y une cada división con M hasta el extradós: son las dovelas. La central es la clave.'), d: dov.map(a => S.seg(G.polar(M, r, a), G.polar(M, R, a), 'g-main')) }
      ] };
    },
    herradura(L) {
      const A = P(180, 300), B = P(420, 300), O = P(300, 240), r = G.dist(O, A);
      const a0 = G.ang(O, A), a1 = G.ang(O, B) + 360;
      return { title: L('Arco de herradura'), vb: [600, 400], yt: 'https://www.youtube.com/watch?v=zdFgR0_b4r0', steps: [
        { t: L('Dibuja la luz AB y las jambas.'), d: [S.seg(A, B, 'g-data'), S.seg(A, P(180, 380), 'g-main'), S.seg(B, P(420, 380), 'g-main'), S.pt(A, 'A', -22, 6), S.pt(B, 'B', 10, 6)] },
        { t: L('Traza la mediatriz de AB y elige en ella un centro O por encima de AB.'), d: [S.seg(P(300, 320), P(300, 60), 'g-aux'), S.pt(O, 'O', 10, -6), S.seg(P(120, 240), P(480, 240), 'g-aux')] },
        { t: L('Con centro en O y radio OA, traza el arco de A a B por arriba: es más que media circunferencia.'), d: [S.arc(O, r, a0, a1, 'g-res')] },
        { t: L('Enmárcalo con un rectángulo: el alfiz.'), d: [S.poly([P(300 - r - 25, 300), P(300 - r - 25, 240 - r - 25), P(300 + r + 25, 240 - r - 25), P(300 + r + 25, 300)], 'g-main', false)] }
      ] };
    },
    apuntado(L) {
      const A = P(180, 320), B = P(420, 320), l = 240, C = G.cc(A, l, B, l).sort((p, q) => p.y - q.y)[0];
      return { title: L('Arco apuntado (equilátero)'), vb: [600, 400], yt: 'https://www.youtube.com/watch?v=CnlSgdtwnjo', steps: [
        { t: L('Dibuja la luz AB y las jambas.'), d: [S.seg(A, B, 'g-data'), S.seg(A, P(180, 390), 'g-main'), S.seg(B, P(420, 390), 'g-main'), S.pt(A, 'A', -22, 6), S.pt(B, 'B', 10, 6)] },
        { t: L('Con centro en A y radio AB, traza un arco desde B hacia arriba.'), d: [S.arc(A, l, -60, 0, 'g-res')] },
        { t: L('Con centro en B y el mismo radio, traza otro arco desde A. Se cortan en la clave C.'), d: [S.arc(B, l, 180, 240, 'g-res'), S.pt(C, 'C', 10, -8)] },
        { t: L('A, B y C forman un triángulo equilátero: por eso se llama apuntado equilátero.'), d: [S.poly([A, B, C], 'g-aux')] }
      ] };
    }
  };

  /* =============== TEXTOS =============== */
  const ES = {
    t: {},
    ui: {
      indice: 'Índice', tocAria: 'Índice de la teoría', cuadernoLabel: 'En vuestro cuaderno de artista:', misionK: 'MISIÓN',
      diasIntro: 'La teoría está repartida en <b>cinco días</b>. Cada día se lee o se explica en clase en <b>15 minutos como máximo</b> y te prepara para una actividad. Las construcciones se ven <b>paso a paso</b>: pulsa ▶ y repítelas en tu cuaderno. Los vídeos son para practicar en casa.',
      diaK: 'DÍA', minutos: '15 min', prepara: 'Te prepara para', actK: 'Actividad',
      dias: ['Anatomía de una puerta', 'Trazados I: rectas, segmentos y ángulos', 'Trazados II: Thales, polígonos y arcos', 'Diseñar el marco', 'Del cartón a la puerta'],
      saberK: 'Saber básico', verMas: 'Para ver más (en casa)', abreYT: 'Se abre en YouTube',
      subt: 'Los vídeos están en español. En YouTube puedes activar los subtítulos y traducirlos automáticamente a tu idioma.',
      videosT: 'Vídeos de la unidad', videosP: 'Todos los vídeos de la teoría, ordenados por días. Míralos con el compás en la mano y repite cada construcción en tu cuaderno.'
    },
    sec: {
      puerta: ['Las partes de una puerta y del arco', h => `
        <p>Una puerta monumental no es solo un hueco: es arquitectura pensada para <b>invitar, proteger e impresionar</b>. Para analizarla, primero hay que saber nombrar sus partes.</p>
        ${h.fig('puerta')}
        <ul class="cual cual3">
          <li><b>Vano</b><span>El hueco del muro. Su anchura es la <strong>luz</strong> y la altura del arco, la <strong>flecha</strong>.</span></li>
          <li><b>Jambas</b><span>Los laterales verticales que sostienen el arco o el dintel.</span></li>
          <li><b>Dovelas</b><span>Piezas en forma de cuña que forman el arco. La central, la que lo cierra, es la <strong>clave</strong>.</span></li>
          <li><b>Intradós y extradós</b><span>La curva interior y la exterior del arco.</span></li>
          <li><b>Alfiz</b><span>Marco rectangular que rodea el arco. Muy típico del arte andalusí.</span></li>
          <li><b>Albanegas</b><span>Los dos espacios entre el arco y el alfiz. Suelen ir decorados.</span></li>
        </ul>
        <h3 class="sub">Tipos de arco</h3>
        ${h.fig('arcos')}
        <p>Se distinguen por dónde está su centro respecto a la <b>línea de impostas</b>, la línea horizontal donde arranca el arco. Si el arco se «cierra» por debajo de ella, es de herradura.</p>`],

      geometria: ['Geométrico frente a orgánico', h => `
        ${h.fig('geoorg')}
        <div class="lectura">
          <div><h3>Geométrico</h3><p>Formas que se construyen con <b>regla y compás</b>: rectas, circunferencias, polígonos y estrellas. Se repiten con medidas exactas.</p><ul><li><b>Lacería:</b> lazos que se cruzan formando estrellas.</li><li><b>Sebka:</b> red de rombos hecha con arcos.</li><li><b>Mocárabes:</b> prismas que cuelgan como estalactitas.</li></ul></div>
          <div><h3>Orgánico</h3><p>Formas que nacen de la <b>naturaleza</b>: hojas, tallos y flores. Se dibujan a mano alzada.</p><ul><li><b>Ataurique:</b> decoración vegetal estilizada.</li><li>En el Barroco: hojas de acanto, guirnaldas y volutas.</li></ul></div>
        </div>
        <p class="ojo"><b>Cuidado:</b> un arco es curvo, pero es <b>geométrico</b>, porque se traza con compás. Orgánico es lo que imita la naturaleza.</p>
        ${h.cuaderno('marcad en azul lo geométrico y en rosa lo orgánico.')}`],

      tresPuertas: ['Tres puertas, mil años de geometría', h => `
        <ul class="cual cual3">
          <li><b>Puerta de San Esteban</b><span><strong>Mezquita de Córdoba</strong>, siglo IX (emiral). Arco de herradura con dovelas que alternan ladrillo y piedra, alfiz, arcos ciegos y celosías.</span></li>
          <li><b>Puerta de la Justicia</b><span><strong>Alhambra de Granada</strong>, 1348, con el sultán nazarí Yusuf I. Gran arco de herradura apuntado con alfiz; una mano tallada en el arco exterior y una llave en el interior.</span></li>
          <li><b>Portada de la Encarnación</b><span><strong>Casco antiguo de Marbella</strong>, siglo XVIII (barroco tardío). Domina lo orgánico, pero la geometría sigue ordenándolo todo: eje, simetría y arcos.</span></li>
        </ul>
        <p class="tip"><b>¿Historia o leyenda?</b> La fecha, el sultán y la posición de la mano y la llave son <b>historia</b>. Que el día que la mano alcance la llave caerá la Alhambra es <b>leyenda</b>. Lo que simbolizan está entre las dos: es <b>interpretación</b>.</p>`],

      instrumentos: ['Instrumentos y rectas paralelas y perpendiculares', h => `
        <ul class="cual">
          <li><b>Escuadra</b><span>Triángulo con un ángulo de 90º y dos de 45º.</span></li>
          <li><b>Cartabón</b><span>Triángulo con ángulos de 90º, 60º y 30º.</span></li>
          <li><b>Compás</b><span>Traza circunferencias y arcos, y traslada medidas.</span></li>
          <li><b>Lápiz</b><span>Duro (2H) para los trazados auxiliares; blando (HB) para el resultado.</span></li>
        </ul>
        <p><b>Paralelas</b> son rectas que nunca se cortan; <b>perpendiculares</b>, las que se cortan formando cuatro ángulos de 90º. Se trazan apoyando la escuadra en el cartabón y deslizándola, o solo con compás:</p>
        ${h.player('paralela')}
        ${h.player('perpendicular')}`],

      segmentos: ['Operaciones con segmentos', h => `
        <p>Con el compás se <b>trasladan medidas</b> sin regla graduada: abres el compás con la longitud de un segmento y la llevas a otro sitio. Así se copia, se suma y se resta.</p>
        ${h.player('segmentos')}`],

      lugares: ['Lugares geométricos: mediatriz y bisectriz', h => `
        <p class="def">Un <b>lugar geométrico</b> es el conjunto de puntos que cumplen una misma condición. La circunferencia es el lugar de los puntos que están a la misma distancia del centro.</p>
        <ul class="cards3 c2">
          <li><b>Mediatriz</b><span>Puntos que están a la misma distancia de los extremos de un segmento. Es el <strong>eje de simetría</strong> de tu puerta y el primer paso para trazar cualquier arco.</span></li>
          <li><b>Bisectriz</b><span>Puntos que están a la misma distancia de los dos lados de un ángulo. Lo divide en dos ángulos iguales.</span></li>
        </ul>
        ${h.player('mediatriz')}
        ${h.player('bisectriz')}`],

      angulos: ['Ángulos', h => `
        ${h.fig('angulos')}
        <p><b>Complementarios</b> suman 90º; <b>suplementarios</b>, 180º.</p>
        <p><b>Con escuadra y cartabón</b> se trazan los ángulos de 30º, 45º, 60º y 90º, y combinándolos (sumando o restando), 15º, 75º, 105º, 120º, 135º y 150º. Con el <b>compás</b> también se pueden copiar, sumar y restar ángulos (mira los vídeos).</p>`],

      thales: ['Proporcionalidad: el teorema de Thales', h => `
        <p>Si cortas dos rectas con varias <b>paralelas</b>, los segmentos que quedan en una son proporcionales a los de la otra. Gracias a eso puedes dividir un segmento en <b>partes iguales</b> sin medir con la regla.</p>
        <p class="tip"><b>En vuestro marco:</b> con Thales dividiréis el ancho de vuestro tramo en módulos iguales para repetir un motivo con ritmo.</p>
        ${h.player('thales')}`],

      triangulos: ['Triángulos y cuadriláteros', h => `
        ${h.fig('tri')}
        <p><b>Puntos notables del triángulo:</b> el <b>circuncentro</b> (donde se cortan las mediatrices) es el centro de la circunferencia que pasa por los tres vértices; el <b>incentro</b> (donde se cortan las bisectrices), el de la circunferencia inscrita; el <b>baricentro</b> (donde se cortan las medianas), su centro de gravedad.</p>
        ${h.player('triangulo')}
        ${h.fig('cua')}
        ${h.player('cuadrado')}`],

      poligonos: ['Polígonos regulares y estrellas', h => `
        <p class="def">Un <b>polígono regular</b> tiene todos sus lados y todos sus ángulos iguales. Se puede construir <b>inscrito</b> en una circunferencia (dado el radio) o <b>dado el lado</b>.</p>
        ${h.player('hexagono')}
        ${h.player('octogono')}
        ${h.player('estrella')}
        <p class="tip"><b>De la estrella a la lacería:</b> repite la estrella de ocho puntas y enlaza sus lados como cintas que pasan por encima y por debajo. Así se construyen los zócalos de la Alhambra.</p>`],

      arcos: ['Cómo se trazan los arcos', h => `
        <p>Todos los arcos empiezan igual: la <b>luz</b> AB sobre la línea de impostas y su <b>mediatriz</b>, donde estará el centro.</p>
        ${h.player('medioPunto')}
        ${h.player('herradura')}
        ${h.player('apuntado')}`],

      composicion: ['Composición: simetría, ritmo y proporción', h => `
        ${h.fig('composicion')}
        <ul class="cual">
          <li><b>Simetría axial</b><span>Las dos mitades son iguales respecto a un eje vertical. Casi todas las portadas la tienen.</span></li>
          <li><b>Ritmo</b><span>Repetir un elemento a intervalos iguales. Si alternan dos (como las dovelas de Córdoba), es ritmo alterno.</span></li>
          <li><b>Composición radial</b><span>Los elementos se ordenan alrededor de un centro, como en un rosetón.</span></li>
          <li><b>Proporción y equilibrio</b><span>Cada parte tiene el tamaño justo respecto al conjunto y el peso queda repartido.</span></li>
        </ul>`],

      naturaleza: ['De la naturaleza al motivo', h => `
        <p>El ataurique no copia una hoja: la <b>estiliza</b>. Para convertir algo de la naturaleza en un motivo decorativo:</p>
        <ol class="pasos3"><li><b>Observa</b>Dibuja la hoja, la flor o el tallo del natural.</li><li><b>Simplifica</b>Quédate con la forma esencial y elimina detalles.</li><li><b>Ordena</b>Repítela con simetría o ritmo y encájala en la geometría.</li></ol>`],

      mensaje: ['Una puerta también comunica', h => `
        <p>Las puertas siempre han tenido un mensaje: la Puerta de la Justicia mostraba el poder del sultán; una portada barroca, la fe y la riqueza de quien la pagó. Vuestro marco también dirá algo de quienes estudiáis aquí: <b>bienvenida, identidad, creatividad</b>.</p>
        ${h.cuaderno('escribid en una frase qué queréis que transmita vuestro tramo del marco.')}`],

      bocetos: ['Del boceto rápido al boceto definitivo', h => `
        <ul class="cual cual3">
          <li><b>Miniaturas</b><span>Tres bocetos pequeños y rápidos, con composiciones distintas. Sirven para pensar.</span></li>
          <li><b>Elegir</b><span>Escoged la miniatura que mejor combine geometría, naturaleza y mensaje.</span></li>
          <li><b>Boceto definitivo</b><span>A escala, con instrumentos y en color. Es el plano que vais a construir.</span></li>
        </ul>
        <p class="tip"><b>Escala:</b> medid vuestro tramo del marco y dibujadlo, por ejemplo, a escala 1:10 (10 cm reales = 1 cm en el cuaderno).</p>`],

      materiales: ['Materiales y técnica: cartón con textura de piedra', h => `
        <ol class="fases-n2">
          <li><b>Trasladar</b><span>Pasa el diseño al cartón a tamaño real con una cuadrícula: cada cuadro del cuaderno es un cuadro grande en el cartón.</span></li>
          <li><b>Recortar</b><span>Con tijeras y con cuidado. Si hace falta cúter, siempre sobre una base de corte y con permiso de tu profesor.</span></li>
          <li><b>Pasta de papel</b><span>Papel troceado en remojo, escurrido y mezclado con cola blanca.</span></li>
          <li><b>Relieve</b><span>Aplícala en capas finas para modelar los relieves. Deja secar entre capa y capa.</span></li>
          <li><b>Color</b><span>Témpera en tonos de piedra (ocres, sienas, grises). Pasa un pincel casi seco por encima para resaltar el relieve.</span></li>
          <li><b>Montaje</b><span>Entre toda la clase, cada tramo en su sitio del marco, como indique tu profesor.</span></li>
        </ol>
        <p class="ojo"><b>Al terminar:</b> limpiad pinceles y mesas, guardad el material y tirad los restos de papel y cartón al contenedor azul.</p>`]
    },

    mision: {
      titulo: 'Transformad una puerta del instituto',
      reto: 'Las puertas andaluzas combinan <b>geometría y naturaleza</b> desde hace más de mil años. Vuestra misión es transformar entre toda la clase el <b>marco de una puerta del instituto</b>. Cada pareja diseña su tramo con <b>trazados geométricos</b> y <b>motivos de la naturaleza</b>, inspirados en una puerta real del patrimonio andaluz, y lo construye en <b>cartón con textura de piedra</b>.',
      fasesT: 'Cómo se juega',
      fases: [
        ['Anatomía de una puerta', 'Dibujad y analizad una puerta andaluza en el cuaderno.'],
        ['Taller de trazados', 'Aprended las construcciones geométricas que vais a necesitar.'],
        ['Diseño del marco', 'Por parejas, diseñad vuestro tramo del marco en el cuaderno.'],
        ['Del cartón a la puerta', 'Construid las piezas en cartón y montad el marco entre toda la clase.']
      ],
      entregasT: 'Qué tenéis que entregar',
      entregas: [
        'Fotos de las páginas del <b>cuaderno de artista</b> (actividades 1, 2 y 3) en la tarea de Classroom.',
        'Fotos de las <b>piezas de cartón</b> que habéis realizado (actividad 4) en la tarea de Classroom.',
        'Las piezas, en clase, para el <b>montaje del marco</b>.'
      ],
      pista: 'Trabajáis en parejas con dos roles que se alternan cada sesión: <b>trazador/a</b> (geometría e instrumentos) y <b>diseñador/a</b> (naturaleza, composición y color).'
    },

    act: {
      intro: 'Cada actividad dice qué hay que hacer, paso a paso. Lo que se dibuja va en tu <b>cuaderno de artista</b>, y las fotos, en la tarea de Classroom.',
      acts: [
        ['Anatomía de una puerta', 'Cuaderno', {
          obj: 'Analizar una puerta del patrimonio andaluz y separar lo geométrico de lo orgánico.',
          pasos: [
            'En una <b>doble página</b> de tu cuaderno, titulada «Anatomía de una puerta», dibuja a lápiz y en grande una puerta andaluza (la de la lámina o una de las tres de la teoría).',
            'Marca en <b>azul</b> lo geométrico y en <b>rosa</b> lo orgánico, con su leyenda.',
            'Rotula con flechas <b>al menos cinco partes</b> de la puerta.',
            'En la página derecha, haz «<b>Mi glosario</b>»: cinco partes dibujadas en pequeño, con su nombre y una frase.',
            'Escribe qué <b>trazados</b> harían falta para construirla (paralelas, perpendiculares, mediatriz, arcos con compás, polígonos…).'
          ],
          donde: 'Por parejas, cada uno en su cuaderno de artista.',
          entrega: 'Foto de la doble página en la tarea de Classroom.'
        }],
        ['Taller de trazados', 'Cuaderno', {
          obj: 'Aprender con instrumentos los trazados que vais a usar en el diseño.',
          pasos: [
            ['Construye en tu cuaderno, con escuadra, cartabón y compás:', [
              'paralelas y perpendiculares con escuadra y cartabón, y con compás;',
              'la suma y la resta de dos segmentos;',
              'la mediatriz de un segmento y la bisectriz de un ángulo;',
              'los ángulos de 15º a 150º con escuadra y cartabón;',
              'un segmento dividido en 5 partes iguales con el teorema de Thales;',
              'el triángulo equilátero y el cuadrado dado el lado;',
              'el hexágono y el octógono inscritos y la estrella de ocho puntas;',
              'los arcos de medio punto, herradura y apuntado.'
            ]],
            'Deja visibles los <b>trazados auxiliares</b>: son la prueba de cómo lo has hecho.',
            'Escribe el <b>nombre</b> de cada construcción.',
            'Si te atascas, mira la construcción <b>paso a paso</b> en la Teoría o su vídeo.'
          ],
          donde: 'Individual, en tu cuaderno de artista.',
          entrega: 'Fotos de las páginas del taller en la tarea de Classroom.'
        }],
        ['Diseño del marco', 'Pareja', {
          obj: 'Diseñar vuestro tramo del marco combinando geometría y naturaleza.',
          pasos: [
            'Medid el <b>tramo del marco</b> que os toca y anotad sus medidas.',
            'Elegid una <b>puerta real</b> del patrimonio andaluz como referencia y anotad qué tomáis de ella.',
            'Haced <b>tres miniaturas</b>: bocetos rápidos con composiciones distintas.',
            'Elegid la mejor y dibujad el <b>boceto definitivo a escala</b>, con instrumentos: dividid el tramo en módulos con Thales y trazad arcos, polígonos o estrellas.',
            'Añadid <b>motivos de la naturaleza</b> estilizados (hojas, flores, tallos) combinados con la geometría.',
            'Organizad el conjunto con <b>simetría y ritmo</b> y coloread el boceto.',
            'Escribid en una frase <b>qué queréis que transmita</b> vuestro tramo.'
          ],
          donde: 'En pareja, en vuestro cuaderno de artista.',
          entrega: 'Fotos de las páginas del diseño en la tarea de Classroom.'
        }],
        ['Del cartón a la puerta', 'Construcción', {
          obj: 'Construir vuestro tramo en cartón con textura de piedra y montar el marco entre toda la clase.',
          pasos: [
            'Pasad el diseño al <b>cartón a tamaño real</b> con una cuadrícula.',
            'Recortad las piezas con cuidado.',
            'Dad <b>relieve y textura de piedra</b> con pasta de papel y cola blanca, en capas finas.',
            'Dejad secar y <b>coloread con témpera</b> en tonos de piedra.',
            '<b>Montad</b> vuestro tramo en el marco de la puerta, como indique vuestro profesor.',
            '<b>Fotografiad</b> vuestras piezas para la entrega.',
            'Limpiad y recoged el material.'
          ],
          donde: 'En pareja y entre toda la clase, en el aula de plástica.',
          entrega: 'Las piezas, en clase. Fotos de las piezas en la tarea de Classroom.'
        }]
      ],
      cotejoT: 'Lista de cotejo: ¿cómo vais?',
      cotejoP: 'Marca lo que ya tienes hecho. Las marcas se guardan solo en este dispositivo. Cuando tu profesor te lo pida, <b>haz una captura de pantalla de esta lista y súbela a la tarea de Classroom</b>: así podrá darte retroalimentación.',
      grupos: [
        ['Anatomía de una puerta', ['He dibujado la puerta grande y a lápiz.', 'He marcado lo geométrico en azul y lo orgánico en rosa.', 'He rotulado cinco partes y he hecho «Mi glosario».', 'He escrito qué trazados la construyen.']],
        ['Taller de trazados', ['He hecho todas las construcciones de la lista.', 'Se ven los trazados auxiliares.', 'Cada construcción tiene su nombre.']],
        ['Diseño del marco', ['Tenemos las medidas del tramo y la puerta de referencia.', 'Hemos hecho tres miniaturas.', 'El boceto definitivo está a escala, con instrumentos y en color.', 'Combina geometría y naturaleza con simetría y ritmo.']],
        ['Del cartón a la puerta', ['Hemos pasado el diseño al cartón y recortado las piezas.', 'Tienen relieve, textura de piedra y color.', 'Hemos montado nuestro tramo y recogido el material.', 'He subido las fotos a Classroom.']]
      ],
      progreso: (n, t) => `Llevas ${n} de ${t}`, borrar: 'Borrar mis marcas', confirmar: '¿Seguro? Pulsa otra vez para borrar.'
    },

    rub: {
      intro: 'Así se evalúa esta unidad. Cada indicador se puntúa de 1 a 10. La nota de cada criterio es la media de sus indicadores.',
      criteriosT: 'Criterios de evaluación',
      criterios: [
        ['1.3', 'Analizar la importancia de las formas geométricas básicas identificando los elementos plásticos del lenguaje visual en el arte y en el entorno, tomando como modelo el legado andalusí y el mosaico romano.'],
        ['6.2', 'Utilizar creativamente referencias culturales y artísticas del entorno en la elaboración de producciones propias, mostrando una visión personal.'],
        ['2.3', 'Realizar composiciones inspiradas en la naturaleza donde puedan aplicarse distintas situaciones compositivas, utilizando para ello las técnicas de expresión gráfico-plásticas bidimensionales necesarias.'],
        ['5.3', 'Descubrir y seleccionar aquellos procedimientos y técnicas más idóneos en relación con los fines de presentación y representación perseguidos.']
      ],
      niveles: ['Insuficiente (1–4)', 'Suficiente (5–6)', 'Notable (7–8)', 'Excelente (9–10)'],
      criterio: 'Criterio',
      bloques: [
        ['Actividad 1. Anatomía de una puerta', [
          ['IL 1.3.1', 'Geométrico y orgánico', '1.3', 'Dibuja la puerta y distingue con color lo geométrico y lo orgánico.', ['Dibujo incompleto o sin distinguir.', 'Distingue solo algunos elementos o los confunde.', 'Distingue la mayoría correctamente, con leyenda.', 'Distingue todo con precisión y leyenda clara; dibujo grande y cuidado.']],
          ['IL 1.3.2', 'Partes y glosario', '1.3', 'Rotula las partes de la puerta y del arco y completa «Mi glosario».', ['No rotula o el glosario falta.', 'Menos de cinco partes o con errores.', 'Cinco partes correctas y glosario completo.', 'Más de cinco partes, vocabulario preciso y glosario muy claro.']],
          ['IL 1.3.3', 'Trazados de la puerta', '1.3', 'Identifica qué trazados geométricos construyen la puerta.', ['No los identifica.', 'Respuesta vaga («con regla»).', 'Nombra varios trazados correctos.', 'Nombra los trazados y dice para qué sirve cada uno.']]]],
        ['Actividad 2. Taller de trazados', [
          ['IL 1.3.4', 'Precisión de los trazados', '1.3', 'Realiza los trazados del taller con precisión, limpieza y auxiliares visibles.', ['Faltan muchas construcciones o están mal.', 'Construcciones incompletas o sin auxiliares.', 'Casi todas correctas y con auxiliares.', 'Todas correctas, precisas, limpias y con nombre.']]]],
        ['Actividad 3. Diseño del marco', [
          ['IL 6.2.1', 'Referencia andaluza', '6.2', 'Se inspira en una puerta real andaluza y la reinterpreta con una visión personal.', ['Sin referencia.', 'Copia la referencia sin aportar nada.', 'Toma elementos de la referencia y los adapta.', 'Reinterpreta la referencia con una idea propia y original.']],
          ['IL 6.2.2', 'Geometría exacta', '6.2', 'Construye los motivos geométricos con trazados exactos.', ['A mano alzada o sin geometría.', 'Trazados imprecisos.', 'Trazados correctos con instrumentos.', 'Trazados exactos y variados (Thales, arcos, polígonos o estrellas).']],
          ['IL 6.2.3', 'Composición', '6.2', 'Organiza la composición con simetría, ritmo y proporción adaptadas al marco.', ['Sin organización.', 'Composición poco clara o desproporcionada.', 'Composición ordenada y adaptada al tramo.', 'Composición equilibrada, rítmica y bien proporcionada.']],
          ['IL 2.3.1', 'Naturaleza estilizada', '2.3', 'Incluye motivos de la naturaleza estilizados y combinados con lo geométrico.', ['Sin motivos naturales.', 'Motivos copiados sin estilizar o sin relación con la geometría.', 'Motivos estilizados combinados con la geometría.', 'Motivos estilizados e integrados con originalidad.']],
          ['IL 2.3.2', 'Boceto definitivo', '2.3', 'El boceto definitivo está acabado en color y comunica una intención.', ['Sin boceto definitivo.', 'Boceto incompleto o sin color.', 'Boceto completo, en color y con su frase.', 'Boceto acabado y expresivo, con una intención clara.']]]],
        ['Actividad 4. Del cartón a la puerta', [
          ['IL 5.3.1', 'Materiales y técnica', '5.3', 'Selecciona y justifica los materiales y la técnica para pasar el diseño al marco.', ['No sigue el proceso.', 'Usa los materiales sin criterio.', 'Usa bien los materiales y explica por qué.', 'Elige y justifica cada material y técnica con acierto.']],
          ['IL 5.3.2', 'Ejecución de las piezas', '5.3', 'Ejecuta las piezas con limpieza: traslado, recorte, relieve, textura y color.', ['Piezas sin terminar.', 'Piezas terminadas con poca limpieza.', 'Piezas limpias, con relieve, textura y color.', 'Piezas impecables y fieles al diseño.']],
          ['IL 5.3.3', 'Montaje y cuidado', '5.3', 'Colabora en el montaje colectivo y cuida el material y el espacio.', ['No colabora.', 'Colabora poco o deja el material sin recoger.', 'Colabora y recoge.', 'Colabora activamente, ayuda a otras parejas y cuida todo.']]]]
      ]
    }
  };

  NIVEL.crear({
    id: 'epva3-n2', ns: 'EPVA3N2', color: 'var(--fucsia)', ES,
    DIAS: [
      [['puerta', 'geometria', 'tresPuertas'], [0]],
      [['instrumentos', 'segmentos', 'lugares', 'angulos'], [1]],
      [['thales', 'triangulos', 'poligonos', 'arcos'], [1]],
      [['composicion', 'naturaleza', 'mensaje', 'bocetos'], [2]],
      [['materiales'], [3]]
    ],
    SABER: {
      puerta: ['EPV.3.E.1'], geometria: ['EPV.3.E.1'], tresPuertas: ['EPV.3.E.1'],
      instrumentos: ['EPV.3.E.2'], segmentos: ['EPV.3.E.2'], lugares: ['EPV.3.E.2'], angulos: ['EPV.3.E.2'],
      thales: ['EPV.3.E.2'], triangulos: ['EPV.3.E.2'], poligonos: ['EPV.3.E.2'], arcos: ['EPV.3.E.2', 'EPV.3.E.1'],
      composicion: ['EPV.3.B.5'], naturaleza: ['EPV.3.B.5', 'EPV.3.E.1'], mensaje: ['EPV.3.B.1'], bocetos: ['EPV.3.C.1'],
      materiales: ['EPV.3.C.1']
    },
    VIDEOS: {
      geometria: [['El arte islámico en 3 minutos', 'VwDfRXuOl9k', '3 min', 'Con Mucho Arte']],
      tresPuertas: [['El arte de al-Ándalus: de la Mezquita de Córdoba a la Alhambra', 'MX6_aixNwAw', '24 min', 'Belén Montilla']],
      instrumentos: [['Paralelas y perpendiculares con escuadra y cartabón', 'wFNh_wx_79o', '7 min', 'Arturo Geometría']],
      angulos: [['Trazado de ángulos con compás', 't15t_NRqV6U', '5 min', 'Arturo Geometría'], ['Suma y resta de ángulos con compás', 'aVr0pLUvJPY', '4 min', 'Arturo Geometría']],
      composicion: [['Cómo aprender a componer un cuadro', 'SSgJMBhZQFc', '3 min', 'Antonio García Villarán']]
    },
    ACT_IL: [['IL 1.3.1', 'IL 1.3.2', 'IL 1.3.3'], ['IL 1.3.4'], ['IL 6.2.1', 'IL 6.2.2', 'IL 6.2.3', 'IL 2.3.1', 'IL 2.3.2'], ['IL 5.3.1', 'IL 5.3.2', 'IL 5.3.3']],
    figs: {
      puerta: figPuerta, arcos: figArcos, geoorg: figGeoOrg, angulos: figAngulos, composicion: figComposicion,
      tri: L => figPoligonos(L, 'tri'), cua: L => figPoligonos(L, 'cua')
    },
    players
  });
})();
