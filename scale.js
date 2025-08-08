
// scale.js — Fit the XD artboard to the viewport while preserving positions
(function(){
  const ART_W = 1959; // px
  const ART_H = 2031; // px
  const root = document.getElementById('Mentinella_Studio');
  if (!root) return;

  function fit(){
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const scale = Math.min(vw / ART_W, vh / ART_H);

    // Apply scale
    root.style.transform = `scale(${scale})`;

    // Center horizontally; stick to top vertically (like your PDF)
    const left = Math.max(0, (vw - ART_W * scale) / 2);
    root.style.left = left + 'px';
    root.style.top  = '0px';

    // Ensure page can scroll if content taller than viewport
    const docH = Math.max(vh, ART_H * scale);
    document.body.style.minHeight = docH + 'px';
  }

  // Initial + on resize/orientation
  fit();
  window.addEventListener('resize', fit);
  window.addEventListener('orientationchange', fit);
})();
