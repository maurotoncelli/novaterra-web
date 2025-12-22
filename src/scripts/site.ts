import Lenis from 'lenis';

function formatDMS(value: number) {
  const deg = Math.floor(value);
  const minFloat = (value - deg) * 60;
  const min = Math.floor(minFloat);
  const sec = Math.floor((minFloat - min) * 60);
  return `${deg}° ${String(min).padStart(2, '0')}' ${String(sec).padStart(2, '0')}"`;
}

function initRevealFx() {
  const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal-fx'));
  if (!els.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        (entry.target as HTMLElement).classList.add('is-visible');
        io.unobserve(entry.target);
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
  );

  for (const el of els) io.observe(el);
}

// Parallax handler (ported from reference.html):
// yPos = distanceFromCenter * speed; transform = scale(1.1) translateY(yPos)
function handleParallax() {
  const windowHeight = window.innerHeight || 0;
  if (!windowHeight) return;

  const images = document.querySelectorAll<HTMLElement>('.parallax-img');
  images.forEach((img) => {
    const rect = img.getBoundingClientRect();

    // If visible in viewport
    if (rect.top < windowHeight && rect.bottom > 0) {
      const speedAttr = img.getAttribute('data-speed');
      const speed = speedAttr ? Number.parseFloat(speedAttr) : 0.1;

      const distanceFromCenter = rect.top + rect.height / 2 - windowHeight / 2;

      // Default direction matches reference.html.
      // If explicitly set, honor "up"/"down" (back-compat with the previous GSAP implementation).
      const dir = img.getAttribute('data-parallax-dir');
      const sign = dir === 'up' ? -1 : 1;

      const yPos = distanceFromCenter * speed * sign;

      img.style.transform = `scale(1.1) translateY(${yPos}px)`;
    }
  });
}

function initCursorAndCoords() {
  // Avoid double init (in case of re-hydration / repeated script execution)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as any;
  if (w.__novaCursorCoordsInited) return;
  w.__novaCursorCoordsInited = true;

  const cursor = document.querySelector<HTMLElement>('.cursor-cross');
  const gps = document.getElementById('gps-coords') as HTMLElement | null;
  if (gps) gps.style.opacity = '1';

  // base ~ Toscana (come demo), variazioni piccole
  const baseLat = 43 + 31 / 60 + 36 / 3600;
  const baseLng = 10 + 40 / 60 + 54 / 3600;
  const maxDelta = 0.006; // ~20-25 arcsec

  let lastX = 0;
  let lastY = 0;
  let scheduled = false;

  function updateGpsFromCursor() {
    scheduled = false;
    if (!gps) return;

    const nx = window.innerWidth ? lastX / window.innerWidth : 0.5;
    const ny = window.innerHeight ? lastY / window.innerHeight : 0.5;

    const lat = baseLat + (0.5 - ny) * maxDelta;
    const lng = baseLng + (nx - 0.5) * maxDelta;

    gps.textContent = `${formatDMS(lat)} N  ${formatDMS(lng)} E`;
  }

  document.addEventListener('mousemove', (e) => {
    if (cursor) {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    }

    lastX = e.clientX;
    lastY = e.clientY;

    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(updateGpsFromCursor);
    }
  });
}

function initBackToTop(lenis: Lenis) {
  const btn = document.getElementById('back-to-top') as HTMLButtonElement | null;
  if (!btn) return;

  let visible = false;

  function setVisible(next: boolean) {
    if (visible === next) return;
    visible = next;
    btn.classList.toggle('is-visible', visible);
  }

  // Progressive reveal range (demo-like): fades/slides in gradually while scrolling down.
  const REVEAL_START = 220; // px
  const REVEAL_END = 760; // px
  const CLICKABLE_AFTER = 0.55; // progress (0..1)

  function updateProgress(y: number) {
    const pRaw = (y - REVEAL_START) / (REVEAL_END - REVEAL_START);
    const p = Math.max(0, Math.min(1, pRaw));
    btn.style.setProperty('--btt-progress', String(p));
    setVisible(p >= CLICKABLE_AFTER);
  }

  // Toggle visibility while scrolling (Lenis-driven)
  try {
    // Lenis emits { scroll, limit, velocity, direction, progress }
    // Types vary across versions, so keep it defensive.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (lenis as any).on?.('scroll', (e: any) => {
      const y = typeof e?.scroll === 'number' ? e.scroll : window.scrollY;
      updateProgress(y);
    });
  } catch {
    // Fallback: window scroll
    window.addEventListener('scroll', () => updateProgress(window.scrollY), { passive: true });
  }

  // Initial state
  updateProgress(window.scrollY);

  btn.addEventListener('click', () => {
    // Smooth scroll to top (demo-like)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const scrollTo = (lenis as any).scrollTo?.bind(lenis);
    if (scrollTo) {
      scrollTo(0, { duration: 1.1, easing: (t: number) => 1 - Math.pow(1 - t, 3) });
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

export function initSite() {
  // Initialize Lenis
  const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
  let started = false;
  let rafStarted = false;

  // Cursor + GPS coords should work even before the preloader ends.
  // This also guarantees the coords are visible on desktop as soon as JS loads.
  initCursorAndCoords();

  function raf(time: number) {
    lenis.raf(time);
    // Keep parallax synced with Lenis RAF (same approach as reference.html)
    handleParallax();
    requestAnimationFrame(raf);
  }

  // Always run the RAF loop so parallax stays responsive even if the "start" path is delayed.
  if (!rafStarted) {
    rafStarted = true;
    requestAnimationFrame(raf);
  }

  function start() {
    if (started) return;
    started = true;

    // Mark site ready so hero animations can start AFTER preloader
    document.documentElement.classList.add('site-ready');

    lenis.start();

    // Show GPS coords (if present)
    const gps = document.getElementById('gps-coords') as HTMLElement | null;
    if (gps) gps.style.opacity = '1';

    // Reveal effect (reference-like): IntersectionObserver + CSS
    initRevealFx();
    initBackToTop(lenis);
  }

  // Preloader logic
  // IMPORTANT: don't rely on `window.load` because it waits for external assets (e.g. unpkg Leaflet),
  // which can hang and keep the preloader stuck forever in production.
  const preloader = document.getElementById('preloader');
  if (!preloader) {
    start();
    return;
  }

  // Block scroll & Lenis while preloader is visible
  lenis.stop();
  document.body.style.overflow = 'hidden';

  let dismissed = false;
  function dismissPreloader() {
    if (dismissed) return;
    dismissed = true;
    preloader.classList.add('hidden');
    document.body.style.overflow = 'auto';
    start();
  }

  // Normal dismissal (keeps the intended animation timing)
  setTimeout(dismissPreloader, 3500);
  // Safety net: if something blocks timers/events, ensure we never stay stuck.
  setTimeout(dismissPreloader, 8000);
}

function boot() {
  try {
    initSite();
  } catch (e) {
    // Last-resort fallback: never leave the preloader blocking the page
    const preloader = document.getElementById('preloader');
    if (preloader) preloader.classList.add('hidden');
    document.body.style.overflow = 'auto';
    document.documentElement.classList.add('site-ready');
    // eslint-disable-next-line no-console
    console.error('[site] init failed', e);
  }
}

// Auto-init on DOM ready (avoid waiting for slow/blocked external assets)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
  boot();
}


