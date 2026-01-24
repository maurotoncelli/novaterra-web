import * as LeafletNS from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Leaflet export shape differs across bundlers (CJS/ESM interop)
const L: any = (LeafletNS as any).default ?? LeafletNS;

function initOne(el: HTMLElement) {
  if (el.dataset.mapInited === 'true') return;
  el.dataset.mapInited = 'true';

  const lat = Number(el.dataset.lat);
  const lng = Number(el.dataset.lng);
  const zoom = Number(el.dataset.zoom || 13);

  const fallback = document.getElementById('contact-map-fallback') as HTMLElement | null;
  const fallbackTitle = fallback ? (fallback.querySelector('.map-fallback-title') as HTMLElement | null) : null;

  if (!Number.isFinite(lat) || !Number.isFinite(lng) || !Number.isFinite(zoom)) {
    if (fallbackTitle) fallbackTitle.textContent = 'Coordinate mappa non valide.';
    el.dataset.mapInited = 'false';
    return;
  }

  try {
    const map = L.map(el, {
      scrollWheelZoom: false,
      zoomControl: true,
    }).setView([lat, lng], zoom);

    const primary = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
      subdomains: 'abcd',
      maxZoom: 20,
    });

    const fallbackLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19,
    });

    let tileErrors = 0;
    primary.on('tileerror', () => {
      tileErrors += 1;
      if (tileErrors >= 3 && map.hasLayer(primary)) {
        map.removeLayer(primary);
        fallbackLayer.addTo(map);
      }
    });

    primary.addTo(map);

    L.circleMarker([lat, lng], {
      radius: 8,
      color: '#cd5c2f',
      weight: 2,
      fillColor: '#cd5c2f',
      fillOpacity: 0.95,
    }).addTo(map);

    map.whenReady(() => {
      if (fallback) fallback.style.display = 'none';
      window.setTimeout(() => map.invalidateSize(), 120);
    });

    window.addEventListener('resize', () => map.invalidateSize(), { passive: true });
  } catch (e) {
    if (fallbackTitle) fallbackTitle.textContent = 'Impossibile caricare la mappa.';
    console.error('Contact map init failed:', e);
    el.dataset.mapInited = 'false';
  }
}

function initAll() {
  const el = document.getElementById('contact-map') as HTMLElement | null;
  if (!el) return;
  initOne(el);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll, { once: true });
} else {
  initAll();
}

