/* INSERT ART · DT 4.º ESO · Nivel 01 · Geometría natural: el envase áureo · TEORÍA */
(function () {
  const { G, S, player } = window.GEO;
  const P = G.P;
  /* Traducciones: window.DT4N1[lang] = { t: {texto español: traducción}, sec, ui, mision, espiral, capFormas } */
  window.DT4N1 = window.DT4N1 || {};
  const TR = () => window.DT4N1[window.I18N.lang] || null;
  const L = s => { const d = TR(); return (d && d.t && d.t[s]) || s; };

  /* =============== CONSTRUCCIONES ANIMADAS =============== */

  /* Mediatriz */
  function mediatriz() {
    const A = P(150, 230), B = P(450, 230), r = 200;
    const [Q, Pp] = G.cc(A, r, B, r).sort((a, b) => b.y - a.y);
    const M = P(300, 230);
    return {
      title: L('Mediatriz de un segmento'), vb: [600, 420], yt: 'https://www.youtube.com/watch?v=1yWlp91s_tk',
      steps: [
        { t: L('Dibuja el segmento AB.'), d: [S.seg(A, B, 'g-data'), S.pt(A, 'A', -20, 6), S.pt(B, 'B', 10, 6)] },
        { t: L('Con centro en A y una abertura mayor que la mitad de AB, traza un arco por encima y otro por debajo.'), d: [S.mark(A, Pp, 14), S.mark(A, Q, 14)] },
        { t: L('Con centro en B y la misma abertura, traza otros dos arcos. Se cortan en P y Q.'), d: [S.mark(B, Pp, 14), S.mark(B, Q, 14), S.pt(Pp, 'P', 10, -6), S.pt(Q, 'Q', 10, 18)] },
        { t: L('Une P y Q: esa recta es la mediatriz. Corta a AB en su punto medio M y forma 90º con él.'), d: [S.line(Pp, Q, 20, 20, 'g-res'), S.ra(M, P(1, 0), P(0, -1), 16, 'g-aux'), S.pt(M, 'M', -24, 22)] }
      ]
    };
  }

  /* Bisectriz */
  function bisectriz() {
    const V = P(110, 330), d1 = 0, d2 = -42, LL = 420;
    const E1 = G.polar(V, LL, d1), E2 = G.polar(V, LL, d2);
    const r = 170, M = G.polar(V, r, d1), N = G.polar(V, r, d2);
    const Pp = G.cc(M, 150, N, 150).sort((a, b) => G.dist(V, b) - G.dist(V, a))[0];
    return {
      title: L('Bisectriz de un ángulo'), vb: [600, 400], yt: 'https://www.youtube.com/watch?v=1yWlp91s_tk',
      steps: [
        { t: L('Dibuja el ángulo con vértice V.'), d: [S.seg(V, E1, 'g-data'), S.seg(V, E2, 'g-data'), S.pt(V, 'V', -22, 8)] },
        { t: L('Con centro en V traza un arco que corte los dos lados en M y N.'), d: [S.arc(V, r, d2 - 6, d1 + 6), S.pt(M, 'M', 6, 22), S.pt(N, 'N', -26, -6)] },
        { t: L('Con centro en M y en N y la misma abertura, traza dos arcos que se corten en P.'), d: [S.mark(M, Pp, 14), S.mark(N, Pp, 14), S.pt(Pp, 'P', 10, -8)] },
        { t: L('Une V con P: es la bisectriz. Divide el ángulo en dos ángulos iguales.'), d: [S.line(V, Pp, 0, 90, 'g-res')] }
      ]
    };
  }

  /* Thales: dividir AB en 5 partes iguales */
  function thales() {
    const A = P(70, 330), B = P(530, 330), n = 5, step = 78, a = -32;
    const marks = [...Array(n)].map((_, k) => G.polar(A, step * (k + 1), a));
    const d = G.sub(B, marks[n - 1]);
    const divs = marks.slice(0, n - 1).map(m => G.ll(m, d, A, P(1, 0)));
    return {
      title: L('Dividir un segmento en partes iguales con el teorema de Thales'), vb: [600, 400], yt: 'https://www.youtube.com/watch?v=igfbJVC-hfU',
      steps: [
        { t: L('Dibuja el segmento AB que quieres dividir (aquí, en 5 partes).'), d: [S.seg(A, B, 'g-data'), S.pt(A, 'A', -10, 26), S.pt(B, 'B', 4, 26)] },
        { t: L('Desde A traza una semirrecta auxiliar con cualquier inclinación.'), d: [S.seg(A, G.polar(A, step * n + 50, a), 'g-aux')] },
        { t: L('Con el compás, lleva sobre ella 5 medidas iguales: 1, 2, 3, 4 y 5.'), d: marks.map((m, k) => S.mark(k ? marks[k - 1] : A, m, 10) + S.pt(m, String(k + 1), -6, -12)) },
        { t: L('Une la última marca (5) con B.'), d: [S.seg(marks[n - 1], B, 'g-main')] },
        { t: L('Traza paralelas a esa recta por las demás marcas (con escuadra y cartabón). AB queda dividido en 5 partes iguales.'), d: marks.slice(0, n - 1).map((m, k) => S.seg(m, divs[k], 'g-main')).concat(divs.map(p => S.pt(p, '', 0, 0, 'res'))) }
      ]
    };
  }

  /* Tercera proporcional a/b = b/c */
  function tercera() {
    const O = P(50, 360), a = 150, b = 105, c = b * b / a, a2 = -34;
    const A1 = G.polar(O, a, 0), AB1 = G.polar(O, a + b, 0);
    const B2 = G.polar(O, b, a2), C2 = G.polar(O, b + c, a2);
    return {
      title: L('Tercera proporcional'), vb: [600, 420], yt: 'https://www.youtube.com/watch?v=6Y85GFqXcCg',
      steps: [
        { t: L('Partimos de dos segmentos dados, a y b.'), d: [S.dato(P(60, 60), P(60 + a, 60), 'a'), S.dato(P(260, 60), P(260 + b, 60), 'b')] },
        { t: L('Dibuja dos semirrectas que salgan del mismo punto O.'), d: [S.seg(O, G.polar(O, 520, 0), 'g-aux'), S.seg(O, G.polar(O, 380, a2), 'g-aux'), S.pt(O, 'O', -22, 8)] },
        { t: L('En la primera semirrecta lleva a y, a continuación, b.'), d: [S.seg(O, A1, 'g-data'), S.seg(A1, AB1, 'g-data'), S.pt(A1), S.pt(AB1), S.lab(O, A1, 'a', 20), S.lab(A1, AB1, 'b', 20)] },
        { t: L('En la segunda semirrecta lleva b.'), d: [S.seg(O, B2, 'g-data'), S.pt(B2), S.lab(O, B2, 'b', -16)] },
        { t: L('Une el final de a con el final de b.'), d: [S.seg(A1, B2, 'g-main')] },
        { t: L('Por el final de a + b traza una paralela a esa unión. El tramo nuevo de la segunda semirrecta es c, la tercera proporcional.'), d: [S.seg(AB1, C2, 'g-main'), S.seg(B2, C2, 'g-res'), S.pt(C2, '', 0, 0, 'res'), S.lab(B2, C2, 'c', -18, 'g-lbl it res')] }
      ]
    };
  }

  /* Cuarta proporcional a/b = c/d */
  function cuarta() {
    const O = P(50, 360), a = 140, b = 100, c = 120, d = b * c / a, a2 = -34;
    const A1 = G.polar(O, a, 0), AC1 = G.polar(O, a + c, 0);
    const B2 = G.polar(O, b, a2), D2 = G.polar(O, b + d, a2);
    return {
      title: L('Cuarta proporcional'), vb: [600, 420], yt: 'https://www.youtube.com/watch?v=vSu8nTCSAMI',
      steps: [
        { t: L('Partimos de tres segmentos dados, a, b y c.'), d: [S.dato(P(40, 60), P(40 + a, 60), 'a'), S.dato(P(220, 60), P(220 + b, 60), 'b'), S.dato(P(360, 60), P(360 + c, 60), 'c')] },
        { t: L('Dibuja dos semirrectas que salgan del mismo punto O.'), d: [S.seg(O, G.polar(O, 520, 0), 'g-aux'), S.seg(O, G.polar(O, 380, a2), 'g-aux'), S.pt(O, 'O', -22, 8)] },
        { t: L('En la primera semirrecta lleva a y, a continuación, c.'), d: [S.seg(O, A1, 'g-data'), S.seg(A1, AC1, 'g-data'), S.pt(A1), S.pt(AC1), S.lab(O, A1, 'a', 20), S.lab(A1, AC1, 'c', 20)] },
        { t: L('En la segunda semirrecta lleva b.'), d: [S.seg(O, B2, 'g-data'), S.pt(B2), S.lab(O, B2, 'b', -16)] },
        { t: L('Une el final de a con el final de b.'), d: [S.seg(A1, B2, 'g-main')] },
        { t: L('Por el final de c traza una paralela a esa unión. El tramo nuevo de la segunda semirrecta es d, la cuarta proporcional.'), d: [S.seg(AC1, D2, 'g-main'), S.seg(B2, D2, 'g-res'), S.pt(D2, '', 0, 0, 'res'), S.lab(B2, D2, 'd', -18, 'g-lbl it res')] }
      ]
    };
  }

  /* Media proporcional a·b = x² */
  function media() {
    const a = 210, b = 90, X = P(90, 330), Pm = P(90 + a, 330), Y = P(90 + a + b, 330);
    const O = G.lerp(X, Y, .5), r = (a + b) / 2, h = Math.sqrt(a * b), H = P(Pm.x, 330 - h);
    const [m1, m2] = G.cc(X, 168, Y, 168).sort((p, q) => p.y - q.y);
    return {
      title: L('Media proporcional'), vb: [600, 430], yt: 'https://www.youtube.com/watch?v=v-jaV2Slhck',
      steps: [
        { t: L('Partimos de dos segmentos dados, a y b.'), d: [S.dato(P(60, 50), P(60 + a, 50), 'a'), S.dato(P(330, 50), P(330 + b, 50), 'b')] },
        { t: L('Dibuja a y b seguidos sobre una recta. Llama P al punto donde se unen.'), d: [S.seg(X, Pm, 'g-data'), S.seg(Pm, Y, 'g-data'), S.pt(X), S.pt(Y), S.pt(Pm, 'P', 8, 22), S.lab(X, Pm, 'a', -16), S.lab(Pm, Y, 'b', -16)] },
        { t: L('Traza la mediatriz del segmento total (a + b) para hallar su punto medio O.'), d: [S.mark(X, m1, 10), S.mark(Y, m1, 10), S.mark(X, m2, 10), S.mark(Y, m2, 10), S.line(m1, m2, 0, 0, 'g-aux'), S.pt(O, 'O', -22, 22)] },
        { t: L('Con centro en O, traza la semicircunferencia de diámetro a + b.'), d: [S.arc(O, r, 180, 360)] },
        { t: L('Levanta una perpendicular en P hasta la semicircunferencia. Ese segmento es c, la media proporcional.'), d: [S.seg(Pm, H, 'g-res'), S.ra(Pm, P(-1, 0), P(0, -1), 14), S.pt(H, '', 0, 0, 'res'), S.lab(Pm, H, 'c', 16, 'g-lbl it res')] }
      ]
    };
  }

  /* Sección áurea */
  function aurea() {
    const A = P(80, 340), B = P(400, 340), l = 320, M = P(240, 340);
    const C = P(400, 340 - l / 2);
    const D = G.add(C, G.mul(G.unit(G.sub(A, C)), l / 2));
    const AD = G.dist(A, D), E = P(80 + AD, 340);
    const [m1, m2] = G.cc(A, 220, B, 220).sort((p, q) => p.y - q.y);
    return {
      title: L('Sección áurea de un segmento'), vb: [600, 425], yt: 'https://www.youtube.com/watch?v=8cVDWtA-CIk',
      steps: [
        { t: L('Dibuja el segmento AB.'), d: [S.seg(A, B, 'g-data'), S.pt(A, 'A', -10, 26), S.pt(B, 'B', 4, 26)] },
        { t: L('Traza su mediatriz para hallar el punto medio M.'), d: [S.mark(A, m1, 9), S.mark(B, m1, 9), S.mark(A, m2, 9), S.mark(B, m2, 9), S.seg(m1, P(240, 360), 'g-aux'), S.pt(M, 'M', 6, 26)] },
        { t: L('Levanta una perpendicular en B y lleva sobre ella la mitad de AB, es decir, (a + b)/2. Obtienes C.'), d: [S.seg(B, P(400, 140), 'g-aux'), S.ra(B, P(-1, 0), P(0, -1), 14), S.arc(B, l / 2, 180, 270), S.pt(C, 'C', 10, 4)] },
        { t: L('Une A con C.'), d: [S.seg(A, C, 'g-main')] },
        { t: L('Con centro en C y radio CB, traza un arco que corte a AC en D.'), d: [S.arc(C, l / 2, 90, G.ang(C, D) + 8), S.pt(D, 'D', -6, -14)] },
        { t: L('Con centro en A y radio AD, traza un arco que corte a AB en E. AE = b es la sección áurea de AB; el resto, EB, es a.'), d: [S.arc(A, AD, G.ang(A, D) - 4, 4), S.seg(A, E, 'g-res'), S.pt(E, 'E', -4, 26, 'res'), S.lab(A, E, 'b', 46, 'g-lbl it res'), S.lab(E, B, 'a', 46, 'g-lbl it'), S.txt(P(240, 412), 'b es la sección áurea del segmento a + b', 'g-lbl res')] }
      ]
    };
  }

  /* Triángulo equilátero */
  function triangulo() {
    const A = P(180, 330), B = P(420, 330), l = 240;
    const C = G.cc(A, l, B, l).sort((p, q) => p.y - q.y)[0];
    return {
      title: L('Triángulo equilátero dado el lado'), vb: [600, 400], yt: 'https://www.youtube.com/watch?v=6FaWFUs3PTw',
      steps: [
        { t: L('Dibuja el lado AB.'), d: [S.seg(A, B, 'g-data'), S.pt(A, 'A', -10, 26), S.pt(B, 'B', 4, 26)] },
        { t: L('Con centro en A y radio AB, traza un arco.'), d: [S.arc(A, l, -75, -45)] },
        { t: L('Con centro en B y el mismo radio, traza otro arco. Donde se cortan está el vértice C.'), d: [S.arc(B, l, 225, 255), S.pt(C, 'C', 10, -8)] },
        { t: L('Une A, B y C.'), d: [S.poly([A, B, C])] }
      ]
    };
  }

  /* Cuadrado dado el lado */
  function cuadrado() {
    const A = P(170, 340), B = P(370, 340), l = 200;
    const B1 = P(370 - 80, 340), B2 = P(370 + 80, 340);
    const top = G.cc(B1, 140, B2, 140).sort((p, q) => p.y - q.y)[0];
    const C = P(370, 140), D = P(170, 140);
    return {
      title: L('Cuadrado dado el lado'), vb: [600, 400], yt: 'https://www.youtube.com/watch?v=lNNVYh3DvcA',
      steps: [
        { t: L('Dibuja el lado AB y prolóngalo un poco por el lado de B.'), d: [S.seg(A, B, 'g-data'), S.seg(B, P(500, 340), 'g-aux'), S.pt(A, 'A', -10, 26), S.pt(B, 'B', -4, 26)] },
        { t: L('Levanta una perpendicular en B con el compás: arco con centro en B, y dos arcos iguales desde los cortes.'), d: [S.mark(B, B1, 14), S.mark(B, B2, 14), S.mark(B1, top, 12), S.mark(B2, top, 12), S.seg(B, P(370, 100), 'g-aux'), S.ra(B, P(-1, 0), P(0, -1), 14)] },
        { t: L('Con centro en B y radio AB, marca el punto C sobre la perpendicular.'), d: [S.arc(B, l, 255, 285), S.pt(C, 'C', 10, -8)] },
        { t: L('Con centro en A y en C y el mismo radio AB, traza dos arcos. Se cortan en el vértice D.'), d: [S.mark(A, D, 12), S.mark(C, D, 12), S.pt(D, 'D', -24, -8)] },
        { t: L('Une A, B, C y D.'), d: [S.poly([A, B, C, D])] }
      ]
    };
  }

  /* Pentágono regular dado el lado */
  function pentagono() {
    const l = 150, A = P(225, 375), B = P(375, 375), M = P(300, 375);
    const N = P(375, 375 - l), dg = l * (1 + Math.sqrt(5)) / 2, Pp = P(300 + G.dist(M, N), 375);
    const D = P(300, 375 - Math.sqrt(dg * dg - (l / 2) ** 2));
    const C = G.cc(A, dg, B, l).sort((p, q) => p.y - q.y)[0];
    const E = G.cc(B, dg, A, l).sort((p, q) => p.y - q.y)[0];
    const [m1, m2] = G.cc(A, 110, B, 110).sort((p, q) => p.y - q.y);
    return {
      title: L('Pentágono regular dado el lado'), vb: [600, 450], yt: 'https://www.youtube.com/watch?v=G-iWsFpF0yU',
      steps: [
        { t: L('Dibuja el lado AB y prolóngalo por el lado de B.'), d: [S.seg(A, B, 'g-data'), S.seg(B, P(520, 375), 'g-aux'), S.pt(A, 'A', -10, 26), S.pt(B, 'B', -4, 26)] },
        { t: L('Traza la mediatriz de AB y marca su punto medio M.'), d: [S.mark(A, m1, 10), S.mark(B, m1, 10), S.mark(A, m2, 10), S.mark(B, m2, 10), S.seg(P(300, 400), P(300, 70), 'g-aux'), S.pt(M, 'M', 6, 26)] },
        { t: L('Levanta una perpendicular en B y lleva sobre ella la medida AB. Obtienes N.'), d: [S.seg(B, P(375, 200), 'g-aux'), S.ra(B, P(-1, 0), P(0, -1), 12), S.arc(B, l, 255, 280), S.pt(N, 'N', -26, -4)] },
        { t: L('Con centro en M y radio MN, traza un arco hasta la prolongación de AB. Obtienes P: AP es la diagonal.'), d: [S.arc(M, G.dist(M, N), G.ang(M, N), 4), S.pt(Pp, 'P', -4, 26), S.seg(A, Pp, 'g-main'), S.lab(A, Pp, 'diagonal = lado × 1,618', 46, 'g-lbl')] },
        { t: L('Con centro en A y radio AP, corta la mediatriz: ahí está el vértice D.'), d: [S.mark(A, D, 10), S.pt(D, 'D', 10, -8)] },
        { t: L('Con centro en A (radio AP) y en B (radio AB), dos arcos dan el vértice C.'), d: [S.mark(A, C, 8), S.mark(B, C, 12), S.pt(C, 'C', 12, 0)] },
        { t: L('Con centro en B (radio AP) y en A (radio AB), dos arcos dan el vértice E.'), d: [S.mark(B, E, 8), S.mark(A, E, 12), S.pt(E, 'E', -26, 0)] },
        { t: L('Une A, B, C, D y E.'), d: [S.poly([A, B, C, D, E])] }
      ]
    };
  }

  /* Hexágono dado el radio */
  function hexagono() {
    const O = P(300, 210), r = 150;
    const V = [270, 330, 30, 90, 150, 210].map(a => G.polar(O, r, a)); // 1 arriba, sentido horario
    return {
      title: L('Hexágono regular dado el radio'), vb: [600, 420], yt: 'https://www.youtube.com/watch?v=pg0jkgm0HDM',
      steps: [
        { t: L('Traza la circunferencia con el radio dado y un diámetro vertical. Sus extremos son los vértices 1 y 4.'), d: [S.circ(O, r, 'g-aux'), S.seg(V[0], V[3], 'g-aux'), S.pt(O, 'O', 8, 4), S.pt(V[0], '1', 8, -8), S.pt(V[3], '4', 8, 20)] },
        { t: L('Con centro en 1 y el mismo radio, traza un arco: corta la circunferencia en los vértices 2 y 6.'), d: [S.arc(V[0], r, 0, 180), S.pt(V[1], '2', 10, -6), S.pt(V[5], '6', -24, -6)] },
        { t: L('Con centro en 4 y el mismo radio, haz lo mismo: obtienes los vértices 3 y 5.'), d: [S.arc(V[3], r, 180, 360), S.pt(V[2], '3', 10, 18), S.pt(V[4], '5', -24, 18)] },
        { t: L('Une los seis puntos en orden. El lado mide lo mismo que el radio.'), d: [S.poly(V)] }
      ]
    };
  }

  /* Espiral áurea (rectángulo áureo y cuartos de circunferencia), paso a paso */
  function espiral() {
    const s = 170, Y = 250, A = P(70, Y), B = P(70 + s, Y), C = P(70 + s, Y - s), D = P(70, Y - s);
    const O = P(70 + s / 2, Y), r = G.dist(O, C), E = P(O.x + r, Y), F = P(E.x, Y - s);
    const num = (x, y, w, n) => S.txt(P(x + w / 2, y + w / 2 + 5), n, 'g-num big');
    let rect = { x: B.x, y: C.y, w: E.x - B.x, h: s };
    const extra = [];
    const pos = ['arriba', 'a la derecha', 'abajo', 'a la izquierda'];
    for (let k = 0; k < 5; k++) {
      const { x, y, w, h } = rect, t = k % 4, n = k + 2;
      let d;
      if (t === 0) { d = [S.seg(P(x, y + w), P(x + w, y + w), 'g-main'), num(x, y, w, n), S.arc(P(x, y + w), w, 270, 360, 'g-res')]; rect = { x, y: y + w, w, h: h - w }; }
      if (t === 1) { d = [S.seg(P(x + w - h, y), P(x + w - h, y + h), 'g-main'), num(x + w - h, y, h, n), S.arc(P(x + w - h, y), h, 0, 90, 'g-res')]; rect = { x, y, w: w - h, h }; }
      if (t === 2) { d = [S.seg(P(x, y + h - w), P(x + w, y + h - w), 'g-main'), num(x, y + h - w, w, n), S.arc(P(x + w, y + h - w), w, 90, 180, 'g-res')]; rect = { x, y, w, h: h - w }; }
      if (t === 3) { d = [S.seg(P(x + h, y), P(x + h, y + h), 'g-main'), num(x, y, h, n), S.arc(P(x + h, y + h), h, 180, 270, 'g-res')]; rect = { x: x + h, y, w: w - h, h }; }
      const tr = TR();
      extra.push({ t: tr && tr.espiral ? tr.espiral(k, n, t) : (k === 0
        ? 'El rectángulo que sobra (BEFC) también es áureo. Traza dentro el cuadrado 2 (arriba) y su cuarto de circunferencia, que continúa la espiral.'
        : `Vuelve a sobrar un rectángulo áureo: traza el cuadrado ${n} (${pos[t]}) y su cuarto de circunferencia.`), d });
    }
    return {
      title: L('Espiral áurea'), vb: [460, 290], yt: 'https://www.youtube.com/watch?v=R3KNVxYwBFQ',
      steps: [
        { t: L('Dibuja el segmento AB y construye sobre él el cuadrado ABCD.'), d: [S.poly([A, B, C, D], 'g-data'), S.pt(A, 'A', -10, 24), S.pt(B, 'B', -4, 24), S.pt(C, 'C', -6, -10), S.pt(D, 'D', -10, -10), num(A.x, D.y, s, 1)] },
        { t: L('Traza la mediatriz de AB y marca su punto medio O.'), d: [S.seg(P(O.x, Y + 15), P(O.x, Y - 20), 'g-aux'), S.pt(O, 'O', -6, 24)] },
        { t: L('Con centro en O y radio OC, traza un arco hasta la prolongación de AB. Obtienes E.'), d: [S.seg(B, P(E.x + 20, Y), 'g-aux'), S.seg(O, C, 'g-aux'), S.arc(O, r, G.ang(O, C), 4), S.pt(E, 'E', -4, 24)] },
        { t: L('Completa el rectángulo AEFD: es un rectángulo áureo (su lado largo es el corto × 1,618).'), d: [S.seg(D, F, 'g-main'), S.seg(E, F, 'g-main'), S.pt(F, 'F', 6, -10)] },
        { t: L('Empieza la espiral en el cuadrado 1: con centro en B y radio BA, traza un cuarto de circunferencia de A a C.'), d: [S.arc(B, s, 180, 270, 'g-res')] },
        ...extra
      ]
    };
  }

  /* =============== FIGURAS ESTÁTICAS (recreadas de los apuntes) =============== */
  const fig = (vb, inner, label, cap) =>
    `<figure class="fig">${S.svg(vb, inner, L(label))}${cap ? `<figcaption>${L(cap)}</figcaption>` : ''}</figure>`;

  function figLugar() {
    /* Circunferencia */
    const O = P(110, 120), r = 80;
    const circ = S.circ(O, r, 'g-main') + [20, 140, 250].map(a => S.seg(O, G.polar(O, r, a), 'g-aux') + S.pt(G.polar(O, r, a))).join('') +
      S.pt(O, 'O', -18, 18) + S.lab(O, G.polar(O, r, 20), 'r', -12) + S.txt(P(110, 235), 'Circunferencia', 'g-cap');
    /* Esfera */
    const E = P(330, 120);
    const esf = S.circ(E, r, 'g-main') + `<ellipse class="g-aux dash" cx="330" cy="120" rx="80" ry="22"/>` + S.seg(E, G.polar(E, r, -40), 'g-aux') +
      S.pt(E, 'O', -18, 18) + S.lab(E, G.polar(E, r, -40), 'r', 12) + S.txt(P(330, 235), 'Esfera (en el espacio)', 'g-cap');
    /* Elipse */
    const F1 = P(500, 120), F2 = P(620, 120), X = P(585, 64);
    const eli = `<ellipse class="g-main" cx="560" cy="120" rx="100" ry="65"/>` + S.seg(F1, X, 'g-res') + S.seg(F2, X, 'g-res') +
      S.pt(F1, 'F₁', -8, 22) + S.pt(F2, 'F₂', -8, 22) + S.pt(X, 'X', 4, -12) +
      S.lab(F1, X, 'r₁', 14) + S.lab(X, F2, 'r₂', 14) + S.txt(P(560, 235), 'Elipse: r₁ + r₂ = constante', 'g-cap');
    return fig([700, 250], circ + esf + eli, 'Circunferencia, esfera y elipse como lugares geométricos');
  }

  function figElementos() {
    const r1a = P(30, 40), r1b = P(200, 150), s1a = P(30, 150), s1b = P(200, 40), X = G.ll(r1a, G.sub(r1b, r1a), s1a, G.sub(s1b, s1a));
    const punto = S.seg(r1a, r1b, 'g-aux') + S.seg(s1a, s1b, 'g-aux') + S.txt(P(206, 158), 'r', 'g-lbl it', 'start') + S.txt(P(206, 40), 's', 'g-lbl it', 'start') +
      S.pt(X, 'A', -6, -14, 'res') + S.txt(P(115, 200), 'Punto A: cruce de r y s', 'g-cap');
    const y1 = 60, y2 = 120, y3 = 180, x0 = 290, x1 = 560;
    const arrow = (p, dir) => { const a = G.add(p, G.mul(P(dir, 0), -12)); return `<path class="g-main" d="M${a.x} ${p.y - 7}L${p.x} ${p.y}L${a.x} ${p.y + 7}"/>`; };
    const lineas = S.seg(P(x0, y1), P(x1, y1), 'g-main') + arrow(P(x1, y1), 1) + arrow(P(x0, y1), -1) + S.txt(P(x1 + 14, y1 + 5), 'Recta r', 'g-lbl', 'start') +
      S.seg(P(x0 + 60, y2), P(x1, y2), 'g-main') + arrow(P(x1, y2), 1) + S.pt(P(x0 + 60, y2), 'A', -22, 6) + S.txt(P(x1 + 14, y2 + 5), 'Semirrecta', 'g-lbl', 'start') +
      S.seg(P(x0 + 60, y3), P(x1 - 60, y3), 'g-main') + S.pt(P(x0 + 60, y3), 'A', -22, 6) + S.pt(P(x1 - 60, y3), 'B', 10, 6) + S.txt(P(x1 + 14, y3 + 5), 'Segmento AB', 'g-lbl', 'start');
    return fig([700, 220], punto + lineas, 'Punto, recta, semirrecta y segmento');
  }

  function figPlanos() {
    const cap2 = (x, l1, l2) => `<text class="g-cap" x="${x}" y="178" text-anchor="middle">${L(l1)}<tspan x="${x}" dy="19">${L(l2)}</tspan></text>`;
    const plano = (ox, inner, l1, l2) => {
      const pts = [P(ox + 20, 140), P(ox + 150, 140), P(ox + 190, 40), P(ox + 60, 40)];
      return S.poly(pts, 'g-plane') + inner + cap2(ox + 105, l1, l2);
    };
    const a = plano(0, S.pt(P(70, 110)) + S.pt(P(120, 70)) + S.pt(P(150, 115)), 'Tres puntos', 'no alineados');
    const b = plano(200, S.seg(P(245, 125), P(365, 60), 'g-main') + S.seg(P(255, 60), P(375, 120), 'g-main'), 'Dos rectas', 'que se cortan');
    const c = plano(400, S.seg(P(440, 120), P(560, 65), 'g-main') + S.seg(P(460, 130), P(585, 75), 'g-main'), 'Dos rectas', 'paralelas');
    const d = plano(600, S.seg(P(645, 120), P(765, 65), 'g-main') + S.pt(P(670, 70), 'P', -18, 4), 'Una recta y', 'un punto exterior');
    return fig([800, 210], a + b + c + d, 'Cuatro formas de definir un plano');
  }

  function figPosiciones() {
    const par = S.seg(P(20, 60), P(200, 60), 'g-main') + S.seg(P(20, 130), P(200, 130), 'g-main') +
      S.seg(P(70, 60), P(70, 130), 'g-aux dash') + S.seg(P(150, 60), P(150, 130), 'g-aux dash') + S.txt(P(110, 185), 'Paralelas', 'g-cap');
    const C = P(360, 100);
    const sec = S.seg(G.polar(C, 95, 200), G.polar(C, 95, 20), 'g-main') + S.seg(G.polar(C, 95, 135), G.polar(C, 95, 315), 'g-main') + S.pt(C) + S.txt(P(360, 185), 'Secantes', 'g-cap');
    const Q = P(590, 100);
    const per = S.seg(P(500, 100), P(680, 100), 'g-main') + S.seg(P(590, 20), P(590, 165), 'g-main') +
      [[1, -1], [-1, -1], [-1, 1], [1, 1]].map(([u, v]) => S.ra(Q, P(u, 0), P(0, v), 14)).join('') + S.txt(P(590, 185), 'Perpendiculares (4 × 90º)', 'g-cap');
    return fig([700, 200], par + sec + per, 'Rectas paralelas, secantes y perpendiculares');
  }

  function figImpropios() {
    /* Recreación del dibujo de la pizarra: paralelas → punto impropio; planos paralelos → recta impropia; todo en el plano impropio */
    const tick = (x, y) => S.seg(P(x - 3, y - 8), P(x - 3, y + 8), 'g-main') + S.seg(P(x + 3, y - 8), P(x + 3, y + 8), 'g-main');
    const ys = [70, 120, 170], X = P(330, 120);
    let left = ys.map(y => S.seg(P(20, y), P(200, y), 'g-main') + tick(70, y) + S.seg(P(200, y), X, 'g-aux dash')).join('');
    left += S.txt(P(110, 215), 'Rectas paralelas', 'g-cap');
    /* zona del infinito */
    const inf = `<rect class="g-zone" x="235" y="30" width="250" height="200" rx="26"/>` +
      S.txt(P(360, 82), '∞', 'g-inf') +
      `<path class="g-res" d="M322 112L338 128M338 112L322 128"/>` + S.txt(P(330, 156), 'punto impropio', 'g-lbl res') +
      S.seg(P(410, 170), P(450, 100), 'g-blue') + S.txt(P(452, 200), 'recta impropia', 'g-lbl blue');
    /* dos planos paralelos */
    const pl = (y) => S.poly([P(530, y + 50), P(660, y + 50), P(700, y), P(570, y)], 'g-main') + tick(640, y + 50);
    let right = pl(45) + pl(125) + S.seg(P(530, 95), P(445, 120), 'g-aux dash') + S.seg(P(530, 175), P(420, 150), 'g-aux dash') +
      S.txt(P(615, 215), 'Planos paralelos', 'g-cap');
    const plano = S.txt(P(360, 262), '↑ plano impropio: contiene todos los elementos impropios', 'g-cap');
    return fig([720, 275], left + inf + right + plano, 'Elementos impropios: punto, recta y plano impropio');
  }

  function figVias() {
    const F = P(360, 60);
    const vias = S.seg(P(200, 175), F, 'g-main') + S.seg(P(520, 175), F, 'g-main') + S.seg(P(80, 60), P(640, 60), 'g-aux dash') +
      [175, 140, 112, 92, 78].map(y => { const t = (175 - y) / 115; return S.seg(P(200 + 160 * t, y), P(520 - 160 * t, y), 'g-aux'); }).join('') +
      S.pt(F, 'punto de fuga', 10, -10, 'res') + S.txt(P(360, 205), 'En un dibujo en perspectiva, el punto impropio se convierte en el punto de fuga', 'g-cap');
    return fig([720, 220], vias, 'Vías del tren en perspectiva');
  }

  function figFormas() {
    const cell = (i, inner, name) => {
      const ox = (i % 4) * 175, oy = Math.floor(i / 4) * 175;
      const [l1, l2] = L(name).split('|');
      return `<g transform="translate(${ox} ${oy})">${inner}<text class="g-cap" x="87" y="${l2 ? 150 : 160}" text-anchor="middle">${l1}${l2 ? `<tspan x="87" dy="17">${l2}</tspan>` : ''}</text></g>`;
    };
    const hex = [...Array(6)].map((_, k) => G.polar(P(87, 70), 52, k * 60));
    const V = P(87, 22);
    const items = [
      /* serie rectilínea de puntos */
      cell(0, S.seg(P(30, 20), P(150, 125), 'g-aux dash') + [...Array(9)].map((_, k) => S.pt(G.lerp(P(36, 25), P(144, 120), k / 8))).join(''), 'Serie rectilínea|de puntos'),
      /* haz de rectas del mismo plano: rectas por un punto dentro de un plano */
      cell(1, S.poly([P(25, 125), P(135, 125), P(160, 15), P(50, 15)], 'g-plane') +
        [0, 30, 60, 90, 120, 150].map(a => S.seg(G.polar(P(92, 70), 48, a), G.polar(P(92, 70), 48, a + 180), 'g-main')).join('') + S.pt(P(92, 70)), 'Haz de rectas|del mismo plano'),
      /* haz de planos: planos que giran alrededor de una recta común */
      cell(2, S.poly([P(87, 15), P(150, 35), P(150, 130), P(87, 110)], 'g-plane') + S.poly([P(87, 15), P(135, 0), P(135, 95), P(87, 110)], 'g-plane') +
        S.poly([P(87, 15), P(30, 30), P(30, 125), P(87, 110)], 'g-plane') + S.poly([P(87, 15), P(110, 45), P(110, 140), P(87, 110)], 'g-plane') +
        S.seg(P(87, 5), P(87, 135), 'g-res'), 'Haz de planos'),
      cell(3, S.poly(hex, 'g-main'), 'Polígono'),
      /* radiación de rectas: rectas del espacio por un punto (en ambos sentidos) */
      cell(4, [0, 1, 2, 3, 4, 5, 6].map(k => { const b = P(32 + k * 18.3, 125 + (k % 2 ? 6 : -6) * (k > 0 && k < 6 ? 1 : 0)); const u = G.sub(V, b); return S.seg(b, G.add(V, G.mul(u, .22)), 'g-main'); }).join('') +
        `<ellipse class="g-aux dash" cx="87" cy="125" rx="56" ry="12"/>` + S.pt(V), 'Radiación de rectas'),
      /* radiación de planos: planos que pasan por un mismo punto */
      cell(5, S.poly([P(20, 95), P(125, 95), P(155, 55), P(50, 55)], 'g-plane') +
        S.poly([P(40, 30), P(130, 30), P(130, 120), P(40, 120)], 'g-plane') + S.poly([P(70, 10), P(110, 45), P(110, 140), P(70, 105)], 'g-plane') +
        S.pt(P(88, 75)), 'Radiación de planos'),
      cell(6, S.poly([P(40, 55), P(110, 55), P(110, 125), P(40, 125)], 'g-main') + S.poly([P(40, 55), P(65, 30), P(135, 30), P(110, 55)], 'g-main') + S.poly([P(110, 55), P(135, 30), P(135, 100), P(110, 125)], 'g-main'), 'Poliedros'),
      cell(7, `<ellipse class="g-main" cx="87" cy="25" rx="40" ry="12"/>` + S.seg(P(47, 25), P(47, 110), 'g-main') + S.seg(P(127, 25), P(127, 110), 'g-main') + `<path class="g-main" d="M47 110A40 12 0 0 0 127 110"/><path class="g-aux dash" d="M47 110A40 12 0 0 1 127 110"/>`, 'Superficies curvas')
    ];
    const capES = '<span class="tag t1">1.ª categoría</span> serie rectilínea de puntos, haz de rectas, haz de planos · <span class="tag t2">2.ª categoría</span> polígono, radiación de rectas, radiación de planos · <span class="tag t3">3.ª categoría</span> poliedros, superficies curvas';
    return `<figure class="fig">${S.svg([700, 350], items.join(''), L('Ejemplos de formas geométricas'))}
      <figcaption>${(TR() && TR().capFormas) || capES}</figcaption></figure>`;
  }

  function figThales() {
    const O = P(40, 330), ur = P(1, 0), us = G.polar(P(0, 0), 1, -35), d = P(-0.3, -1);
    const onR = [170, 290, 410].map(k => G.add(O, G.mul(ur, k)));
    const onS = onR.map(p => G.ll(p, d, O, us));
    const names = ['A', 'B', 'C'];
    let inner = S.seg(O, P(620, 330), 'g-aux') + S.seg(O, G.add(O, G.mul(us, 440)), 'g-aux') +
      S.txt(P(628, 336), 'r', 'g-lbl it', 'start') + S.txt(G.add(O, G.mul(us, 455)), "r'", 'g-lbl it');
    onR.forEach((p, i) => { inner += S.line(p, onS[i], 22, 40, 'g-main') + S.pt(p, names[i], -6, 26) + S.pt(onS[i], names[i] + "'", -30, -2); });
    inner += S.seg(onR[0], onR[1], 'g-res') + S.seg(onS[0], onS[1], 'g-res') + S.pt(O, 'O', -10, 26);
    return fig([660, 360], inner, 'Teorema de Thales', 'Las rectas paralelas cortan r y r′ en segmentos proporcionales: AB / A′B′ = BC / B′C′');
  }

  function figNaturaleza() {
    /* panal: rejilla de hexágonos */
    let hex = '';
    const R6 = 26, w = Math.sqrt(3) * R6;
    for (let row = 0; row < 5; row++) for (let col = 0; col < 6; col++) {
      const c = P(30 + col * w + (row % 2) * w / 2, 30 + row * R6 * 1.5);
      hex += S.poly([...Array(6)].map((_, k) => G.polar(c, R6, 30 + k * 60)), (row === 2 && col === 2) ? 'g-res' : 'g-main');
    }
    /* cuadrados de Fibonacci y espiral */
    const u = 15, o = P(370 + 3 * u, 30 + 5 * u), Q = (x, y) => P(o.x + x * u, o.y + y * u);
    const sqs = [[0, 0, 1], [1, 0, 1], [0, 1, 2], [-3, 0, 3], [-3, -5, 5], [2, -5, 8]];
    let fib = sqs.map(([x, y, s]) => S.poly([Q(x, y), Q(x + s, y), Q(x + s, y + s), Q(x, y + s)], 'g-main') + S.txt(Q(x + s / 2, y + s / 2 + .35), s, 'g-num')).join('');
    const arcs = [[1, 1, 1, 180, 270], [1, 1, 1, 270, 360], [0, 1, 2, 0, 90], [0, 0, 3, 90, 180], [2, 0, 5, 180, 270], [2, 3, 8, 270, 360]];
    fib += arcs.map(([x, y, r, a0, a1]) => S.arc(Q(x, y), r * u, a0, a1, 'g-res')).join('');
    return fig([600, 210], hex + fib, 'Panal hexagonal y cuadrados de Fibonacci con su espiral',
      'Izquierda: un panal se organiza con hexágonos. Derecha: cuadrados de lado 1, 1, 2, 3, 5 y 8 (Fibonacci) y la espiral que forman.');
  }

  /* =============== TEXTO + MONTAJE =============== */
  const UI_ES = {
    indice: 'Índice', tocAria: 'Índice de la teoría', manualLabel: 'En tu Manual de DT:',
    videosT: 'Vídeos para practicar', videosP: 'Cada vídeo se abre en YouTube. Míralo con el compás en la mano y repite la construcción en tu Manual de DT.',
    mediatrizY: ' y bisectriz de un ángulo', instr: 'Uso de los instrumentos de dibujo técnico', presentacionT: 'Presentación de clase', canva: 'Geometría en la naturaleza (Canva)'
  };
  const ui = () => Object.assign({}, UI_ES, (TR() && TR().ui) || {});
  const ORDEN = ['instrumentos', 'geometria', 'naturaleza', 'lugar', 'elementos', 'impropios', 'formas', 'proporcionalidad', 'poligonos'];
  const SEC_ES = {
    instrumentos: ['Instrumentos de dibujo técnico', h => `
      <p>Antes de empezar a trazar, practica con tus herramientas: <b>regla</b>, <b>escuadra</b>, <b>cartabón</b>, <b>compás</b> y <b>lápiz</b>. Saber colocarlas y moverlas bien es la base para que tus construcciones salgan precisas.</p>
      ${h.video('https://www.youtube.com/watch?v=bOYgYUfm_8s', 'Practica el uso de los instrumentos de dibujo técnico')}
      ${h.manual('repite los ejercicios del vídeo hasta que manejes los instrumentos con soltura.')}`],
    
    geometria: ['¿Qué es la geometría?', h => `
      <p>La palabra <i>geometría</i> significa «medida de la tierra». Tradicionalmente era un conjunto de experiencias y reglas de agrimensura (medir terrenos). El matemático griego <b>Euclides</b> las ordenó y las convirtió en una estructura lógica.</p>
      <p class="def">Hoy la <b>geometría</b> es la parte de las matemáticas y del dibujo que estudia y representa las formas del plano y del espacio: cómo son, qué propiedades tienen, cómo se relacionan entre sí y cómo se transforman.</p>
      <p>Tiene tres grandes ramas:</p>
      <ul class="cards3">
        <li><b>Plana</b><span>Estudia las formas de dos dimensiones (2D), las que se desarrollan en el plano.</span></li>
        <li><b>Descriptiva</b><span>Representa objetos de tres dimensiones (3D) sobre un plano.</span></li>
        <li><b>Analítica</b><span>Estudia las formas con números y coordenadas.</span></li>
      </ul>
      <p>En este nivel trabajamos la <b>geometría plana</b>. Sus elementos básicos son el punto, la recta y el plano; combinándolos aparecen las formas planas: líneas poligonales, circunferencias, polígonos, curvas cónicas, curvas técnicas…</p>`],
    naturaleza: ['La geometría en la naturaleza', h => `
      <p>Mira un panal de abejas y un copo de nieve: los dos se organizan con <b>hexágonos</b>. La naturaleza «usa» la geometría porque le resulta eficaz.</p>
      ${h.figNaturaleza()}
      <h3>La sucesión de Fibonacci</h3>
      <p>Es una serie de números en la que cada número es la suma de los dos anteriores:</p>
      <p class="formula">0 · 1 · 1 · 2 · 3 · 5 · 8 · 13 · 21 · 34 …</p>
      <p>Estos números aparecen con frecuencia en las plantas: hay flores de 3 pétalos, de 5 y margaritas de 21 o 34. Ojo: es un <b>patrón frecuente</b>, no una ley universal.</p>
      <h3>El número áureo</h3>
      <p>Si divides cada número de la sucesión entre el anterior, el resultado se acerca cada vez más a 1,618… Ese es el <b>número áureo</b>, φ (letra griega <i>fi</i>). Es la proporción que encontramos en la espiral de las pipas del girasol y en la concha del nautilus, y la que vamos a usar para diseñar nuestro envase.</p>
      <p class="formula">φ = 1,618…</p>`],
    lugar: ['Lugar geométrico', h => `
      <p class="def">Un <b>lugar geométrico</b> es el conjunto de todos los puntos que cumplen una o varias condiciones.</p>
      <ul>
        <li>Puede ser bidimensional (en el plano) o tridimensional (en el espacio).</li>
        <li>Es <b>simple</b> si cumple una sola condición (por ejemplo, la circunferencia).</li>
        <li>Es <b>complejo</b> si cumple varias condiciones a la vez (por ejemplo, la elipse).</li>
      </ul>
      ${h.figLugar()}
      <ul>
        <li><b>Circunferencia:</b> los puntos del plano que están a la misma distancia (el radio, <i>r</i>) de un punto fijo llamado centro (<i>O</i>).</li>
        <li><b>Esfera:</b> lo mismo, pero en el espacio.</li>
        <li><b>Elipse:</b> los puntos cuya suma de distancias a dos puntos fijos (los focos) es siempre la misma. Es un lugar geométrico complejo.</li>
      </ul>
      ${h.jugada('mediatriz', 'La <b>mediatriz</b> divide un segmento en dos partes iguales. También se define como el lugar geométrico de los puntos que equidistan (están a la misma distancia) de los extremos del segmento. Es perpendicular al segmento y pasa por su punto medio.')}
      ${h.jugada('bisectriz', 'La <b>bisectriz</b> divide un ángulo en dos partes iguales. También se define como el lugar geométrico de los puntos que equidistan de los lados del ángulo.')}`],
    elementos: ['Elementos geométricos básicos', h => `
      <p>Los elementos básicos de la geometría, también llamados <b>especies</b>, son el <b>punto</b>, la <b>recta</b> y el <b>plano</b>. Combinándolos se construyen todas las demás formas.</p>
      ${h.figElementos()}
      <ul>
        <li><b>Punto:</b> la mínima expresión de la geometría. Se define como la intersección (el cruce) de dos rectas. Se nombra con una letra mayúscula (A, B, C…) y se marca con una pequeña cruz o un círculo.</li>
        <li><b>Recta:</b> una sucesión infinita de puntos en la misma dirección. No tiene principio ni fin. Se nombra con una letra minúscula (r, s, t…).</li>
        <li><b>Semirrecta:</b> una porción de recta delimitada por un punto (el origen). Es infinita hacia un solo lado.</li>
        <li><b>Segmento:</b> una porción de recta delimitada por dos puntos, llamados extremos. Al contrario que la recta, se puede medir. Se nombra con sus extremos (AB) o con una letra minúscula (<i>a</i>).</li>
        <li><b>Plano:</b> una superficie bidimensional. Se nombra con una letra mayúscula (P, Q…) y queda determinado por cualquiera de estas cuatro cosas:</li>
      </ul>
      ${h.figPlanos()}
      <h3>Posición de dos rectas en un mismo plano</h3>
      ${h.figPosiciones()}
      <ul>
        <li><b>Paralelas:</b> no llegan a cortarse en un espacio finito, sino que equidistan (mantienen la misma distancia) en toda su extensión.</li>
        <li><b>Secantes:</b> se cortan en un punto.</li>
        <li><b>Perpendiculares:</b> son secantes que se cortan formando cuatro ángulos rectos (90º).</li>
      </ul>`],
    impropios: ['Elementos geométricos impropios', h => `
      <p class="def">Los elementos <b>impropios</b> son los que están en el infinito.</p>
      ${h.figImpropios()}
      <ul>
        <li><b>Punto impropio:</b> el elemento común de un haz de rectas paralelas. Las paralelas no se cortan en un espacio finito: decimos que «se cortan» en el infinito, en su punto impropio.</li>
        <li><b>Recta impropia:</b> el elemento común de un haz de planos paralelos.</li>
        <li><b>Plano impropio:</b> el único plano que contiene a todos los elementos impropios. Todo elemento que no esté en él es un elemento propio.</li>
      </ul>
      ${h.figVias()}
      <p class="tip"><b>¿Para qué sirve?</b> Piensa en unas vías de tren que se pierden en el horizonte. Las vías son paralelas, pero parece que se juntan en un punto. Ese punto (el punto de fuga) es la imagen del punto impropio, y lo usaremos en el nivel 5, cuando dibujemos en perspectiva.</p>`],
    formas: ['Formas geométricas', h => `
      <p class="def">Las <b>formas geométricas</b> son las que están formadas por los elementos geométricos básicos (punto, recta y plano). Según cuántas especies combinan, se clasifican en tres categorías.</p>
      ${h.figFormas()}
      <ul>
        <li><b>De 1.ª categoría</b> (elementos de una sola especie): <b>serie rectilínea de puntos</b> (puntos sobre una recta), <b>haz de rectas del mismo plano</b> (rectas de un plano que pasan por un punto) y <b>haz de planos</b> (planos que pasan por una misma recta).</li>
        <li><b>De 2.ª categoría</b> (elementos de dos especies): <b>polígono</b>, <b>radiación de rectas</b> (rectas del espacio que pasan por un punto) y <b>radiación de planos</b> (planos que pasan por un mismo punto).</li>
        <li><b>De 3.ª categoría</b> (elementos de tres especies): <b>poliedros</b> (el cubo, la pirámide…) y <b>superficies curvas</b> (el cilindro, el cono…).</li>
      </ul>`],
    proporcionalidad: ['Proporcionalidad de segmentos', h => `
      <p class="def">Dos parejas de segmentos son <b>proporcionales</b> cuando la razón (la división) entre los segmentos de cada pareja es la misma.</p>
      <h3>Teorema de Thales</h3>
      <p>Si dos rectas de un mismo plano se cortan con un conjunto de rectas paralelas, en cada una se forman segmentos que son proporcionales entre sí.</p>
      <p class="formula">AB / A′B′ = BC / B′C′ = CD / C′D′ = constante</p>
      <p>Gracias al teorema de Thales podemos dividir un segmento en partes iguales o en partes proporcionales.</p>
      ${h.figThales()}
      ${h.jugada('thales', 'La aplicación más útil: <b>dividir un segmento en partes iguales</b> sin medir.', '<p class="tip"><b>Partes proporcionales:</b> se hace igual, pero en el paso 3 llevas los segmentos que te dan (m, n…) en lugar de medidas iguales.</p>')}
      ${h.jugada('tercera', 'Dados dos segmentos <i>a</i> y <i>b</i>, la tercera proporcional es el segmento <i>c</i> que cumple:<span class="formula">a / b = b / c</span>')}
      ${h.jugada('cuarta', 'Dados tres segmentos <i>a</i>, <i>b</i> y <i>c</i>, la cuarta proporcional es el segmento <i>d</i> que cumple:<span class="formula">a / b = c / d</span>')}
      ${h.jugada('media', 'Dados dos segmentos <i>a</i> y <i>b</i>, el segmento media proporcional es un tercer segmento <i>c</i> tal que:<span class="formula">a · b = c²</span>')}
      ${h.jugada('aurea', 'Dado un segmento <i>a + b</i>, su <b>sección áurea</b> es el segmento <i>b</i> (la parte mayor) tal que:<span class="formula">a / b = b / (a + b)</span>La parte menor, <i>a</i>, es la <b>media razón</b>. La relación entre las partes es el número áureo: b ÷ a = (a + b) ÷ b = φ ≈ 1,618.')}
      ${h.manual('dibuja cada construcción dejando visibles todas las líneas y arcos auxiliares. Sin ellos, el ejercicio no vale.')}`],
    poligonos: ['Polígonos y espiral áurea', h => `
      <p class="def">Un <b>polígono</b> es una figura plana cerrada formada por segmentos (sus lados). Es <b>regular</b> cuando todos sus lados y todos sus ángulos son iguales.</p>
      ${h.jugada('triangulo', 'Un triángulo es <b>equilátero</b> cuando tiene los tres lados iguales.')}
      ${h.jugada('cuadrado')}
      ${h.jugada('pentagono', 'Fíjate en el paso 4: la diagonal del pentágono es el lado multiplicado por φ. ¡Aquí también aparece el número áureo!')}
      ${h.jugada('hexagono', 'En el hexágono regular, el lado mide lo mismo que el radio de la circunferencia en la que está inscrito. Además, los hexágonos encajan entre sí sin dejar huecos, como en el panal.')}
      ${h.jugada('espiral', 'La espiral que vemos en el girasol y en el nautilus se construye a partir del rectángulo áureo.', '<p class="tip">Lo que dibujamos así es una <b>aproximación</b> de la espiral áurea, hecha con arcos de circunferencia.</p>')}
      ${h.manual('construye el triángulo, el cuadrado, el pentágono, el hexágono y la espiral áurea. Son la base geométrica de tu envase.')}`]
  };

  function construir() {
    window.GEO_L = L;
    const C = {
      mediatriz: mediatriz(), bisectriz: bisectriz(), thales: thales(), tercera: tercera(), cuarta: cuarta(),
      media: media(), aurea: aurea(), triangulo: triangulo(), cuadrado: cuadrado(), pentagono: pentagono(),
      hexagono: hexagono(), espiral: espiral()
    };
    const h = {
      figNaturaleza, figLugar, figElementos, figPlanos, figPosiciones, figImpropios, figVias, figFormas, figThales,
      jugada: (k, intro = '', extra = '') => `
        <div class="jugada">
          <h4>${C[k].title}</h4>
          ${intro ? `<p>${intro}</p>` : ''}
          ${player(C[k])}
          ${extra}
        </div>`,
      manual: s => `<p class="manual-tip"><b>${ui().manualLabel}</b> ${s}</p>`,
      video: (url, t) => `<p><a class="yt" href="${url}" target="_blank" rel="noopener noreferrer">▶ ${t}</a></p>`
    };
    const sec = (TR() && TR().sec) || {};
    const secciones = ORDEN.map(id => { const x = sec[id] || SEC_ES[id]; return [id, x[0], x[1](h)]; });
    return { C, secciones };
  }

  const teoria = {
    html() {
      const { secciones: SECCIONES } = construir();
      return `
      <div class="teoria" style="--c:var(--fluor)">
        <nav class="toc" aria-label="${ui().tocAria}">
          <p class="toc-t">${ui().indice}</p>
          ${SECCIONES.map(([id, t], i) => `<button type="button" data-go="${id}"><span>${String(i + 1).padStart(2, '0')}</span>${t}</button>`).join('')}
        </nav>
        <div class="doc">
          ${SECCIONES.map(([id, t, body], i) => `
            <section class="tsec" id="t-${id}">
              <h2><span class="sn">${String(i + 1).padStart(2, '0')}</span>${t}</h2>
              ${body}
            </section>`).join('')}
        </div>
      </div>`;
    },
    init(root) {
      GEO.initPlayers(root);
      root.querySelectorAll('[data-go]').forEach(b => b.addEventListener('click', () =>
        root.querySelector('#t-' + b.dataset.go).scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' })));
    }
  };

  /* Recursos: vídeos + presentación */
  const recursos = {
    html() {
      const { C } = construir();
      const vids = Object.values(C).filter(c => c.yt);
      const seen = new Set();
      return `
      <div class="recursos">
        <h2 class="rec-h">${ui().videosT}</h2>
        <p>${ui().videosP}</p>
        <ul class="vid-list">
          <li><a href="https://www.youtube.com/watch?v=bOYgYUfm_8s" target="_blank" rel="noopener noreferrer"><span class="play-ico">▶</span>${ui().instr}</a></li>
          ${vids.filter(c => !seen.has(c.yt) && seen.add(c.yt)).map((c, i) => `<li><a href="${c.yt}" target="_blank" rel="noopener noreferrer"><span class="play-ico">▶</span>${c.title}${i === 0 ? ui().mediatrizY : ''}</a></li>`).join('')}
        </ul>
        <h2 class="rec-h">${ui().presentacionT}</h2>
        <ul class="vid-list">
          <li><a href="https://www.canva.com/d/SiQy8zFt-GSjHYg" target="_blank" rel="noopener noreferrer"><span class="play-ico">◆</span>${ui().canva}</a></li>
        </ul>
      </div>`;
    }
  };


  /* Misión del nivel */
  const MISION_ES = {
    titulo: 'Diseña el envase áureo',
    reto: 'La naturaleza está llena de geometría: hexágonos en el panal, la espiral del girasol y de la concha del nautilus, pentágonos en la estrella de mar y en muchas flores. Tu misión es crear el <b>diseño para un envase tipo tetrabrik</b> tomando como referencia la <b>geometría de la naturaleza</b>.',
    fasesT: 'Cómo se juega',
    fases: [
      ['Observa', 'Elige una forma de la naturaleza con una geometría clara: un panal, un girasol, una caracola, una flor, un copo de nieve, una estrella de mar…'],
      ['Construye la geometría', 'En tu Manual de DT, traza con regla y compás la geometría que hay en esa forma: polígonos, espiral áurea… Primero va siempre la geometría.'],
      ['Dibuja la forma natural', 'Sobre esa geometría, desarrolla a mano alzada la forma natural que has elegido.'],
      ['Termina el diseño', 'Acaba el diseño en tu Manual de DT con limpieza y precisión, dejando visibles las líneas y los arcos auxiliares.'],
      ['Preséntalo en un tetrabrik', 'Pasa tu diseño por una herramienta de inteligencia artificial para verlo aplicado sobre un envase tipo tetrabrik. Tu profesor te dirá qué herramienta usar. No subas fotos tuyas ni datos personales: solo tu diseño.']
    ],
    entregasT: 'Qué tienes que entregar',
    entregas: [
      'El <b>diseño</b> para el tetrabrik, hecho en tu Manual de DT.',
      'Tu <b>Manual de DT</b> con todos los apuntes de la unidad, tomados a mano alzada y explicados.',
      'Las <b>actividades de construcción de polígonos</b>: triángulo equilátero, cuadrado, pentágono, hexágono y espiral áurea.',
      'Un <b>examen</b> con todo el contenido del nivel.'
    ],
    pista: '<b>Pista:</b> en la pestaña <b>Teoría</b> tienes todas las construcciones paso a paso, con su vídeo.'
  };
  const mision = {
    html() {
      const M = Object.assign({}, MISION_ES, (TR() && TR().mision) || {});
      return `
      <div class="mision" style="--c:var(--fluor)">
        <div class="mision-head">
          <p class="mision-kicker">${(TR() && TR().ui && TR().ui.misionK) || 'MISIÓN'}</p>
          <h2>${M.titulo}</h2>
          <p class="mision-reto">${M.reto}</p>
        </div>
        <h3>${M.fasesT}</h3>
        <ol class="fases">${M.fases.map(([t, d], i) => `<li><span class="fase-n">${i + 1}</span><b>${t}</b><span>${d}</span></li>`).join('')}</ol>
        <h3>${M.entregasT}</h3>
        <ul class="entregas">${M.entregas.map(e => `<li>${e}</li>`).join('')}</ul>
        <p class="tip">${M.pista}</p>
      </div>`;
    }
  };

  /* =============== ACTIVIDADES + LISTA DE COTEJO =============== */
  const ACT_ES = {
    intro: 'Todo lo haces en tu <b>Manual de DT</b> y lo entregas en <b>una sola tarea de Classroom</b>. Las medidas y el formato de las construcciones son libres.',
    acts: [
      ['Investiga y diseña tu envase', 'Diseño', 'Busca formas de la naturaleza con una geometría clara y anótalas con un croquis. Elige una y crea con ella el diseño para tu tetrabrik: <b>primero la geometría</b> (con regla y compás) y <b>después la forma natural a mano alzada</b> sobre ella. Termínalo en tu Manual con limpieza y con las líneas auxiliares visibles.'],
      ['Apuntes en tu Manual de DT', 'Manual', 'Toma <b>a mano alzada</b> los apuntes de toda la teoría: qué es la geometría, la geometría en la naturaleza, lugar geométrico, elementos básicos e impropios, formas geométricas, los trazados fundamentales (mediatriz, bisectriz, paralelas y perpendiculares) y la proporcionalidad (Thales, tercera, cuarta y media proporcional, sección áurea). Explica cada concepto con tus palabras y acompáñalo de su croquis.'],
      ['Construcciones en tu Manual de DT', 'Manual', 'Construye con instrumentos el <b>triángulo equilátero</b> y el <b>cuadrado</b> dado el lado, el <b>pentágono</b> dado el lado, el <b>hexágono</b> dado el radio y el <b>rectángulo y la espiral áureos</b>. Junto a cada una, <b>describe sus pasos</b>. Deja visibles las líneas y los arcos auxiliares.'],
      ['Presenta tu diseño con IA', 'Presentación', 'Pasa tu diseño por la herramienta de inteligencia artificial que te indique tu profesor para verlo aplicado sobre un tetrabrik. Sube solo tu diseño: nada de fotos tuyas ni datos personales.'],
      ['Examen', 'Examen', 'Prueba escrita sobre todo el contenido de la pestaña Teoría, incluidas las construcciones. Lleva regla, escuadra, cartabón y compás.']
    ],
    cotejoT: 'Lista de cotejo: ¿cómo vas?',
    cotejoP: 'Marca lo que ya tienes hecho. Las marcas se guardan solo en este dispositivo. Cuando tu profesor te lo pida, <b>haz una captura de pantalla de esta lista y súbela a la tarea de Classroom</b>: así podrá darte retroalimentación.',
    grupos: [
      ['Diseño del envase', ['He investigado formas de la naturaleza y las he anotado con croquis.', 'He construido la geometría con regla y compás.', 'He dibujado a mano alzada la forma natural sobre la geometría.', 'He terminado el diseño con limpieza y auxiliares visibles.', 'He visto mi diseño aplicado al tetrabrik con IA.']],
      ['Apuntes del Manual (a mano alzada, explicados y con croquis)', ['¿Qué es la geometría?', 'La geometría en la naturaleza (Fibonacci y número áureo)', 'Lugar geométrico: circunferencia, esfera, elipse, mediatriz y bisectriz', 'Elementos básicos: punto, recta, semirrecta, segmento y plano', 'Paralelas, secantes y perpendiculares', 'Elementos impropios', 'Formas geométricas (tres categorías)', 'Proporcionalidad: Thales, tercera, cuarta y media proporcional', 'Sección áurea']],
      ['Construcciones (con sus pasos descritos)', ['Triángulo equilátero dado el lado', 'Cuadrado dado el lado', 'Pentágono regular dado el lado', 'Hexágono regular dado el radio', 'Rectángulo áureo y espiral áurea']],
      ['Entrega y examen', ['He subido todo a la tarea de Classroom.', 'He repasado las construcciones en la pestaña Teoría para el examen.']]
    ],
    progreso: (n, t) => `Llevas ${n} de ${t}`, borrar: 'Borrar mis marcas', confirmar: '¿Seguro? Pulsa otra vez para borrar.'
  };
  const KEY = 'insertart-dt4n1-cotejo';
  const leer = () => { try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch (e) { return []; } };
  const guardar = v => { try { localStorage.setItem(KEY, JSON.stringify(v)); } catch (e) { } };
  const actividades = {
    html() {
      const A = Object.assign({}, ACT_ES, (TR() && TR().act) || {});
      const marcadas = new Set(leer());
      const total = A.grupos.reduce((n, g) => n + g[1].length, 0);
      return `
      <div class="acts" style="--c:var(--fluor)">
        <p class="act-intro">${A.intro}</p>
        <ol class="act-list">${A.acts.map(([t, tag, d], i) => `
          <li><span class="act-n">${i + 1}</span><div><p class="act-tag">${tag}</p><h3>${t}</h3><p>${d}</p></div></li>`).join('')}</ol>
        <section class="cotejo" aria-labelledby="cotejo-t">
          <h2 id="cotejo-t">${A.cotejoT}</h2>
          <p class="cotejo-p">${A.cotejoP}</p>
          <div class="cotejo-bar"><span class="cotejo-n" aria-live="polite"></span><span class="bar"><i></i></span></div>
          ${A.grupos.map(([gt, items], g) => `
            <fieldset><legend>${gt}</legend>
              ${items.map((it, i) => `<label><input type="checkbox" data-id="${g}-${i}" ${marcadas.has(g + '-' + i) ? 'checked' : ''}><span>${it}</span></label>`).join('')}
            </fieldset>`).join('')}
          <button type="button" class="cotejo-borrar">${A.borrar}</button>
        </section>
      </div>`;
    },
    init(root) {
      const A = Object.assign({}, ACT_ES, (TR() && TR().act) || {});
      const boxes = [...root.querySelectorAll('.cotejo input')];
      const pintar = () => {
        const n = boxes.filter(b => b.checked).length;
        root.querySelector('.cotejo-n').textContent = A.progreso(n, boxes.length);
        root.querySelector('.cotejo-bar i').style.width = (n / boxes.length * 100) + '%';
      };
      boxes.forEach(b => b.addEventListener('change', () => { guardar(boxes.filter(x => x.checked).map(x => x.dataset.id)); pintar(); if (b.checked && window.SFX) window.SFX.coin(); }));
      const del = root.querySelector('.cotejo-borrar'); let armado = false;
      del.addEventListener('click', () => {
        if (!armado) { armado = true; del.textContent = A.confirmar; setTimeout(() => { armado = false; del.textContent = A.borrar; }, 3000); return; }
        boxes.forEach(b => b.checked = false); guardar([]); pintar(); armado = false; del.textContent = A.borrar;
      });
      pintar();
    }
  };

  /* =============== RÚBRICA (la misma que la hoja de notas) =============== */
  const RUB_ES = {
    intro: 'Así se evalúa este nivel. Cada indicador se puntúa de 0 a 10. La nota de cada criterio es la media de sus indicadores y la nota del nivel es la media de los cuatro criterios.',
    criteriosT: 'Criterios de evaluación',
    criterios: [['1.1', 'Reconocer diferentes tipos de estructuras, formas y relaciones geométricas en la naturaleza, el entorno, el arte y el diseño.'], ['2.1', 'Analizar mediante la realización de bocetos y croquis a mano alzada la geometría interna de formas bidimensionales.'], ['2.2', 'Dibujar formas geométricas poligonales y curvilíneas, resolver tangencias básicas y transformaciones geométricas.'], ['2.3', 'Presentar el trabajo realizado con limpieza y precisión en el trazado, tanto a mano alzada como en el trazado geométrico.']],
    niveles: ['Insuficiente (0–4)', 'Suficiente (5)', 'Bien (6)', 'Notable (7–8)', 'Sobresaliente (9–10)'],
    criterio: 'Criterio',
    bloques: [
      ['Bloque 1. Diseño del envase áureo', [
        ['IL 1.1', 'Geometría de la naturaleza', '1.1', 'Investiga formas de la naturaleza, reconoce su geometría (polígonos, espiral, proporción áurea) y explica de qué elemento procede la de su diseño.', ['No identifica geometría o no la relaciona con la naturaleza.', 'Identifica una forma geométrica, pero no explica su origen.', 'Identifica la geometría y nombra el elemento natural.', 'Explica la relación entre forma natural y geometría con vocabulario técnico.', 'Relaciona varias estructuras (polígono, espiral, proporción) y lo justifica con precisión.']],
        ['IL 1.2', 'De la geometría a la forma', '2.1', 'Construye primero la geometría y, sobre ella, desarrolla a mano alzada la forma natural elegida, analizando su geometría interna.', ['Dibuja la forma sin base geométrica.', 'Hay geometría, pero la forma no se apoya en ella.', 'La forma se apoya en la geometría en lo esencial.', 'El dibujo a mano alzada se ajusta a la estructura geométrica en todo el diseño.', 'Analiza con claridad la geometría interna; se ve el proceso (bocetos, variantes).']],
        ['IL 1.3', 'Trazado del diseño', '2.2', 'Traza con instrumentos y con precisión los polígonos y curvas del diseño.', ['Trazados incorrectos o sin instrumentos.', 'Trazados con errores importantes.', 'Trazados correctos, con errores pequeños.', 'Trazados correctos y precisos.', 'Trazados precisos e integrados con soltura en el diseño.']],
        ['IL 1.4', 'Presentación del diseño', '2.3', 'Presenta el diseño en el Manual de DT con limpieza, precisión y líneas auxiliares visibles.', ['Sucio, impreciso o sin auxiliares.', 'Presentable, con manchas o auxiliares borrados en parte.', 'Limpio y con auxiliares visibles.', 'Limpio, preciso y con jerarquía de trazos (fino y grueso).', 'Acabado impecable, listo para presentar.']]]],
      ['Bloque 2. Manual de DT (apuntes)', [
        ['IL 2.1', 'Conceptos descritos', '1.1', 'Describe con sus palabras los elementos, formas y relaciones geométricas de la unidad (incluidos los trazados fundamentales y la proporcionalidad).', ['Faltan muchos apartados o copia sin entender.', 'Están los apartados, con descripciones incompletas.', 'Todos los apartados, con descripciones correctas.', 'Descripciones claras, con vocabulario técnico y ejemplos.', 'Añade ejemplos propios del entorno y la naturaleza y relaciona conceptos.']],
        ['IL 2.2', 'Croquis a mano alzada', '2.1', 'Acompaña cada concepto y cada trazado con un croquis a mano alzada que muestra su geometría.', ['Sin dibujos o muy pocos.', 'Varios conceptos sin dibujo.', 'Cada concepto tiene su croquis.', 'Croquis claros y proporcionados que explican el concepto.', 'Croquis rotulados que analizan la geometría interna.']],
        ['IL 2.3', 'Orden y presentación del Manual', '2.3', 'Presenta los apuntes ordenados, legibles y limpios, con trazo a mano alzada cuidado.', ['Desordenado o ilegible.', 'Legible, pero desordenado.', 'Ordenado y legible.', 'Ordenado, limpio y rotulado, con trazo cuidado.', 'Manual de consulta ejemplar: índice, títulos y páginas.']]]],
      ['Bloque 3. Construcciones en el Manual', [
        ['IL 3.1', 'Triángulo y cuadrado', '2.2', 'Construye el triángulo equilátero y el cuadrado dado el lado, y describe sus pasos.', ['No los construye o usa un método incorrecto.', 'Solo uno correcto, o pasos sin describir.', 'Los dos, con errores menores y pasos descritos.', 'Los dos correctos, precisos y con los pasos bien descritos.', 'Precisos, con vértices rotulados y pasos descritos con vocabulario técnico.']],
        ['IL 3.2', 'Pentágono y hexágono', '2.2', 'Construye el pentágono dado el lado y el hexágono dado el radio, y describe sus pasos.', ['No los construye o usa un método incorrecto.', 'Solo uno correcto, o pasos sin describir.', 'Los dos, con errores menores y pasos descritos.', 'Los dos correctos, precisos y con los pasos bien descritos.', 'Precisos, con vértices rotulados y pasos descritos con vocabulario técnico.']],
        ['IL 3.3', 'Rectángulo y espiral áureos', '2.2', 'Construye el rectángulo áureo y la espiral áurea, y describe sus pasos.', ['No construye el rectángulo áureo.', 'Rectángulo correcto; espiral incompleta o a mano.', 'Rectángulo y espiral con 3 cuadrados; pasos descritos.', 'Al menos 5 cuadrados y arcos bien enlazados; pasos bien descritos.', 'Espiral continua y precisa, cuadrados numerados y pasos con vocabulario técnico.']],
        ['IL 3.4', 'Precisión y auxiliares', '2.3', 'Traza las construcciones con precisión y deja visibles las líneas y arcos auxiliares.', ['Sin auxiliares o trazos sucios.', 'Auxiliares incompletos.', 'Auxiliares visibles y trazo limpio.', 'Además, buena jerarquía de trazos.', 'Construcciones impecables.']]]],
      ['Bloque 4. Examen', [
        ['IL 4.1', 'Geometría en la naturaleza', '1.1', 'Reconoce la geometría en la naturaleza: hexágono, sucesión de Fibonacci, número áureo y espirales.', ['No reconoce las formas.', 'Reconoce alguna, sin explicar.', 'Reconoce y nombra la mayoría.', 'Explica la relación con ejemplos.', 'Explica y aporta ejemplos propios del arte y el diseño.']],
        ['IL 4.2', 'Conceptos geométricos', '1.1', 'Define y reconoce lugar geométrico, elementos básicos e impropios y formas geométricas.', ['Definiciones erróneas o en blanco.', 'Algunas correctas.', 'La mayoría correctas.', 'Todas correctas, con vocabulario técnico.', 'Todas correctas, con ejemplos y croquis.']],
        ['IL 4.3', 'Trazados y proporcionalidad', '2.2', 'Resuelve mediatriz, bisectriz, paralelas y perpendiculares, Thales, tercera, cuarta y media proporcional y sección áurea.', ['Resuelve menos de la mitad.', 'Resuelve la mitad.', 'La mayoría correctos.', 'Todos correctos.', 'Todos correctos y precisos.']],
        ['IL 4.4', 'Polígonos y espiral áurea', '2.2', 'Construye los polígonos regulares de la unidad y la espiral áurea.', ['Menos de la mitad.', 'La mitad.', 'La mayoría correctos.', 'Todos correctos.', 'Todos correctos y precisos.']],
        ['IL 4.5', 'Presentación del examen', '2.3', 'Presenta la prueba con limpieza, precisión y construcciones auxiliares visibles.', ['Sin auxiliares o sucio.', 'Auxiliares incompletos.', 'Auxiliares visibles.', 'Limpio y preciso.', 'Impecable.']]]]
    ]
  };
  const rubrica = {
    html() {
      const R = Object.assign({}, RUB_ES, (TR() && TR().rub) || {});
      return `
      <div class="rub" style="--c:var(--fluor)">
        <p class="act-intro">${R.intro}</p>
        <h2 class="rec-h">${R.criteriosT}</h2>
        <ul class="crit-list">${R.criterios.map(([k, d]) => `<li><b>${k}</b><span>${d}</span></li>`).join('')}</ul>
        ${R.bloques.map(([bt, ils]) => `
          <h2 class="rec-h">${bt}</h2>
          ${ils.map(([code, name, crit, desc, lv]) => `
            <article class="il">
              <header><span class="il-code">${code}</span><h3>${name}</h3><span class="il-crit">${R.criterio} ${crit}</span></header>
              <p>${desc}</p>
              <ol class="lv">${lv.map((x, i) => `<li class="lv${i}"><b>${R.niveles[i]}</b><span>${x}</span></li>`).join('')}</ol>
            </article>`).join('')}`).join('')}
      </div>`;
    }
  };

  window.CONTENIDOS = window.CONTENIDOS || {};
  window.CONTENIDOS['dt4-n1'] = { mision, teoria, actividades, recursos, rubrica };
})();
