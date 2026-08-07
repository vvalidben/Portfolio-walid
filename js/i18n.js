// Language toggle (EN / FR)
// Every translatable element carries class "i18n" and a data-fr attribute.
// By default it swaps textContent; elements with data-i18n-attr="<attr>"
// swap that attribute instead (used for placeholder/aria-label).
(function () {
  const STORAGE_KEY = 'lang';
  const i18nEls = document.querySelectorAll('.i18n');

  function currentValue(el) {
    const attr = el.getAttribute('data-i18n-attr');
    return attr ? el.getAttribute(attr) : el.textContent;
  }

  function setValue(el, value) {
    const attr = el.getAttribute('data-i18n-attr');
    if (attr) {
      el.setAttribute(attr, value);
    } else {
      el.textContent = value;
    }
  }

  // Cache the original English text/attribute before any translation runs.
  i18nEls.forEach((el) => {
    el.dataset.en = currentValue(el);
  });

  function applyLanguage(lang) {
    i18nEls.forEach((el) => {
      setValue(el, lang === 'fr' ? el.dataset.fr : el.dataset.en);
    });
    document.documentElement.lang = lang;
    const toggleBtn = document.getElementById('langToggle');
    if (toggleBtn) toggleBtn.textContent = lang === 'fr' ? 'EN' : 'FR';
    localStorage.setItem(STORAGE_KEY, lang);
  }

  const savedLang = localStorage.getItem(STORAGE_KEY) || 'en';
  applyLanguage(savedLang);

  const toggleBtn = document.getElementById('langToggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const nextLang = document.documentElement.lang === 'fr' ? 'en' : 'fr';
      applyLanguage(nextLang);
    });
  }
})();
