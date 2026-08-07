// Dark / light mode toggle
// Defaults to the OS preference (via prefers-color-scheme in CSS); an explicit
// user choice is stored in data-theme on <html> and persisted to localStorage,
// which overrides the OS preference from then on.
(function () {
  const STORAGE_KEY = 'theme';
  const root = document.documentElement;
  const toggleBtn = document.getElementById('themeToggle');

  function systemPrefersDark() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function effectiveTheme() {
    return root.getAttribute('data-theme') || (systemPrefersDark() ? 'dark' : 'light');
  }

  function updateIcon() {
    if (!toggleBtn) return;
    toggleBtn.textContent = effectiveTheme() === 'dark' ? '☀️' : '🌙';
  }

  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) root.setAttribute('data-theme', saved);
  updateIcon();

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const next = effectiveTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem(STORAGE_KEY, next);
      updateIcon();
    });
  }
})();
