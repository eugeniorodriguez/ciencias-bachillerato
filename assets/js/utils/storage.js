// Persistencia local (localStorage). Todas las adiciones del usuario se guardan aquí.
const PREFIX = 'ud10:';

export function load(key, fallback) {
  try {
    const raw = localStorage.getItem(PREFIX + key);
    return raw ? JSON.parse(raw) : fallback;
  } catch { return fallback; }
}
export function save(key, value) {
  try { localStorage.setItem(PREFIX + key, JSON.stringify(value)); } catch {}
}
export function remove(key) {
  try { localStorage.removeItem(PREFIX + key); } catch {}
}
