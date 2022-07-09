function pageLoad() {
  const content = document.querySelector('#content');
  const title = document.createElement('h1');
  const menuText = document.createElement('h2');
  title.innerText = 'Lone Soul Cafe';
  content.appendChild(title);
  menuText.innerText = 'Today we are serwing:';
  content.appendChild(menuText);
}
export default pageLoad;