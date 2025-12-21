import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function formatDMS(value: number) {
  const deg = Math.floor(value);
  const minFloat = (value - deg) * 60;
  const min = Math.floor(minFloat);
  const sec = Math.floor((minFloat - min) * 60);
  return `${deg}° ${String(min).padStart(2, '0')}' ${String(sec).padStart(2, '0')}"`;
}

function initAnimations() {
  // Reveal sections
  document.querySelectorAll<HTMLElement>('.reveal-fx').forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  });

  // Parallax images
  document.querySelectorAll<HTMLElement>('.parallax-img').forEach((img) => {
    const speedRaw = img.getAttribute('data-speed');
    const speed = speedRaw ? Number.parseFloat(speedRaw) : 0.5;
    // Stronger parallax to match the demo feel.
    // Example: 0.5 -> ~40%, 0.3 -> ~30%, 0.8 -> ~54%
    const amount = Math.max(28, Math.min(58, Math.round(20 + speed * 40)));

    const dir = img.getAttribute('data-parallax-dir');
    const sign = dir === 'up' ? -1 : 1;

    // For hero sections, use the hero container as trigger (more consistent than absolute wrappers)
    const heroTrigger = img.closest('[data-parallax-section="hero"]') as HTMLElement | null;
    const trigger = heroTrigger ?? img.parentElement ?? undefined;
    const start = heroTrigger ? 'top top' : 'top bottom';
    const end = heroTrigger ? 'bottom top' : 'bottom top';
    gsap.to(img, {
      y: `${sign * amount}%`,
      ease: 'none',
      scrollTrigger: {
        trigger,
        start,
        end,
        scrub: 1,
      },
    });
  });
}

function initCursorAndCoords() {
  const cursor = document.querySelector<HTMLElement>('.cursor-cross');
  const gps = document.getElementById('gps-coords') as HTMLElement | null;

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

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  function start() {
    // Mark site ready so hero animations can start AFTER preloader
    document.documentElement.classList.add('site-ready');

    lenis.start();

    // Show GPS coords (if present)
    const gps = document.getElementById('gps-coords') as HTMLElement | null;
    if (gps) gps.style.opacity = '1';

    requestAnimationFrame(raf);
    initAnimations();
    initCursorAndCoords();
    initBackToTop(lenis);
  }

  // Preloader Logic (solo se presente)
  window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (!preloader) {
      start();
      return;
    }

    // Blocca scroll e Lenis durante il preloader
    lenis.stop();
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      preloader.classList.add('hidden');
      document.body.style.overflow = 'auto';
      start();
    }, 3500);
  });
}

// Auto-init
initSite();


