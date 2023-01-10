const storage = (() => {
  function isThemeDark() {
    return JSON.parse(localStorage.getItem("dark"));
  }

  function toggleTheme() {
    const themeIsDark = isThemeDark();
    localStorage.setItem("dark", !themeIsDark);
  }

  return { isThemeDark, toggleTheme };
})();

const displayController = (() => {
  const root = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");

  function toggleTheme() {
    root.classList.toggle("dark");
  }

  function enableDarkMode() {
    root.classList.add("dark");
    themeToggle.checked = true;
  }

  function addToggleChangeListener(cb) {
    themeToggle.addEventListener("change", cb);
  }

  return { toggleTheme, enableDarkMode, addToggleChangeListener };
})();

function init() {
  const themeIsDark = storage.isThemeDark();

  if (themeIsDark) {
    displayController.enableDarkMode();
  }

  displayController.addToggleChangeListener(() => {
    storage.toggleTheme();
    displayController.toggleTheme();
  });
}

init();
