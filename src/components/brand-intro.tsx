// Run before body paint so returning sessions never flash an overlay.
// The intro is progressive enhancement: without scripts/storage, content stays available.
const bootstrap = `(() => {
  if (window.__senzIntroBooted) return;
  window.__senzIntroBooted = true;
  const root = document.documentElement;
  const key = 'senz-intro-seen';
  let motion;
  try {
    if (sessionStorage.getItem(key)) return;
    motion = matchMedia('(prefers-reduced-motion: reduce)');
    if (motion.matches) { sessionStorage.setItem(key, '1'); return; }
    sessionStorage.setItem('senz-intro-storage-check', '1');
    sessionStorage.removeItem('senz-intro-storage-check');
  } catch { return; }
  let timer;
  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    delete root.dataset.senzIntro;
    clearTimeout(timer);
    try { sessionStorage.setItem(key, '1'); } catch {}
    document.removeEventListener('keydown', finish, true);
    document.removeEventListener('pointerdown', finish, true);
    document.removeEventListener('focusin', finish, true);
    document.removeEventListener('animationend', onEnd);
    document.removeEventListener('visibilitychange', onVisibility);
    window.removeEventListener('pagehide', finish);
    motion.removeEventListener('change', onMotion);
  };
  const onEnd = (event) => { if (event.animationName === 'senz-intro-exit') finish(); };
  const onVisibility = () => { if (document.hidden) finish(); };
  const onMotion = () => { if (motion.matches) finish(); };
  document.addEventListener('keydown', finish, true);
  document.addEventListener('pointerdown', finish, true);
  document.addEventListener('focusin', finish, true);
  document.addEventListener('animationend', onEnd);
  document.addEventListener('visibilitychange', onVisibility);
  window.addEventListener('pagehide', finish);
  motion.addEventListener('change', onMotion);
  root.dataset.senzIntro = 'active';
  timer = setTimeout(finish, 2200);
})();`;

export function BrandIntroScript() {
  return <script id="senz-brand-intro" dangerouslySetInnerHTML={{ __html: bootstrap }} />;
}

export function BrandIntro() {
  return (
    <div className="brand-intro" aria-hidden="true">
      <div className="brand-intro-mark">
        <span>s</span>
        <span>e</span>
        <span>n</span>
        <span>z</span>
        <span className="brand-dot">.</span>
      </div>
    </div>
  );
}
