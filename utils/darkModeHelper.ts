const toggleDarkMode = (setDarkMode: any, checked: boolean) => {
  setDarkMode(checked);
  const root = document.querySelector(':root');
  root?.classList.toggle('dark', checked);
  let webConfig = JSON.parse(localStorage.getItem('brian-nyachae-web-config') || '{}');

  if (checked) {
    webConfig = { ...webConfig, darkMode: true }
  } else {
    webConfig = { ...webConfig, darkMode: false }
  }

  localStorage.setItem('brian-nyachae-web-config', JSON.stringify(webConfig));
}
export default toggleDarkMode;
