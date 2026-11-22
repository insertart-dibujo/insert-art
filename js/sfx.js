/* INSERT ART · Efectos de sonido sintetizados (sin archivos): láser, metal y moneda */
(function () {
  let ctx = null, on = true;
  try { on = localStorage.getItem('insertart-sfx') !== 'off'; } catch (e) { }
  const ac = () => {
    if (!ctx) { const C = window.AudioContext || window.webkitAudioContext; if (!C) return null; ctx = new C(); }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  };
  const VOL = 0.12;

  function laser() {
    const a = ac(); if (!a) return; const t = a.currentTime;
    const o = a.createOscillator(), g = a.createGain();
    o.type = 'sawtooth';
    o.frequency.setValueAtTime(1500, t);
    o.frequency.exponentialRampToValueAtTime(140, t + 0.2);
    g.gain.setValueAtTime(VOL, t);
    g.gain.exponentialRampToValueAtTime(0.0008, t + 0.22);
    o.connect(g).connect(a.destination); o.start(t); o.stop(t + 0.24);
  }
  function metal() {
    const a = ac(); if (!a) return; const t = a.currentTime;
    const out = a.createGain(); out.gain.value = VOL * 0.9; out.connect(a.destination);
    [523, 1271, 2093, 3307].forEach((fq, i) => {
      const o = a.createOscillator(), g = a.createGain();
      o.type = 'sine'; o.frequency.value = fq;
      g.gain.setValueAtTime(1 / (i + 1.4), t);
      g.gain.exponentialRampToValueAtTime(0.0005, t + 0.18 + 0.08 / (i + 1));
      o.connect(g).connect(out); o.start(t); o.stop(t + 0.32);
    });
    /* golpe inicial de ruido */
    const len = Math.floor(a.sampleRate * 0.03), buf = a.createBuffer(1, len, a.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len);
    const n = a.createBufferSource(), bp = a.createBiquadFilter();
    bp.type = 'bandpass'; bp.frequency.value = 3500; bp.Q.value = 2;
    n.buffer = buf; n.connect(bp).connect(out); n.start(t);
  }
  function coin() {
    const a = ac(); if (!a) return; const t = a.currentTime;
    [[988, 0], [1319, 0.08]].forEach(([fq, dt]) => {
      const o = a.createOscillator(), g = a.createGain();
      o.type = 'square'; o.frequency.value = fq;
      g.gain.setValueAtTime(VOL * 0.7, t + dt);
      g.gain.exponentialRampToValueAtTime(0.0008, t + dt + (dt ? 0.35 : 0.08));
      o.connect(g).connect(a.destination); o.start(t + dt); o.stop(t + dt + 0.4);
    });
  }
  function burbuja() {
    const a = ac(); if (!a) return; const t = a.currentTime;
    [0, 0.09, 0.2, 0.27].forEach((dt, i) => {
      const o = a.createOscillator(), g = a.createGain();
      const f0 = 260 + Math.random() * 260;
      o.type = 'sine';
      o.frequency.setValueAtTime(f0, t + dt);
      o.frequency.exponentialRampToValueAtTime(f0 * 2.6, t + dt + 0.07);
      g.gain.setValueAtTime(0.0001, t + dt);
      g.gain.exponentialRampToValueAtTime(VOL * (i % 2 ? 0.6 : 0.9), t + dt + 0.015);
      g.gain.exponentialRampToValueAtTime(0.0005, t + dt + 0.09);
      o.connect(g).connect(a.destination); o.start(t + dt); o.stop(t + dt + 0.11);
    });
  }
  /* las llamadas directas desde los contenidos también respetan el silencio */
  const SFX = {};
  [['laser', laser], ['metal', metal], ['coin', coin], ['burbuja', burbuja]].forEach(([k, fn]) => { SFX[k] = () => { if (on) fn(); }; });

  /* Qué suena en cada botón */
  const MAPA = [
    ['.press', 'coin'],
    ['.poster, .controls .play, .manual-btn, .level', 'laser'],
    ['.tab, .controls button, .langs button, .back, .level-nav a, .hud nav a, .toc button, .steps-list li, .brand', 'metal']
  ];
  document.addEventListener('click', e => {
    if (!on) return;
    for (const [sel, s] of MAPA) { if (e.target.closest(sel)) { try { SFX[s](); } catch (err) { } return; } }
  }, true);

  /* Botón para silenciar */
  const btn = document.getElementById('sfx-toggle');
  const pintar = () => { if (!btn) return; btn.textContent = on ? '🔊' : '🔇'; btn.setAttribute('aria-pressed', on); };
  if (btn) btn.addEventListener('click', () => {
    on = !on; try { localStorage.setItem('insertart-sfx', on ? 'on' : 'off'); } catch (e) { }
    pintar(); if (on) metal();
  });
  pintar();
  window.SFX = SFX;
})();
