/* ============================================================
   I18N.JS
   Detecta el idioma del sistema/navegador y arma el bloque
   principal de cada página (por ahora: el home).
   ============================================================ */

const SUPPORTED_LANGS = ["es", "en"];
const STORAGE_KEY = "site-lang";

function detectLang() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved && SUPPORTED_LANGS.includes(saved)) return saved;

  const browserLangs = navigator.languages && navigator.languages.length
    ? navigator.languages
    : [navigator.language || "es"];

  for (const l of browserLangs) {
    const short = l.slice(0, 2).toLowerCase();
    if (SUPPORTED_LANGS.includes(short)) return short;
  }
  return "es";
}

let currentLang = detectLang();

function setLang(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) return;
  currentLang = lang;
  localStorage.setItem(STORAGE_KEY, lang);
  document.documentElement.setAttribute("lang", lang);
  renderPage();
}

function toggleLang() {
  setLang(currentLang === "es" ? "en" : "es");
}

/* Each page defines window.renderMain = function(t) { ... }
   and renders into #app. */
function renderPage() {
  const t = CONTENT[currentLang];
  document.title = t.meta.title;
  if (typeof window.renderMain === "function") {
    const mount = document.getElementById("app");
    mount.innerHTML = window.renderMain(t);
  }
  const footerEl = document.getElementById("footer-text");
  if (footerEl) footerEl.textContent = t.footer;
}

document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.setAttribute("lang", currentLang);
  renderPage();
});