function pageLoad() {
  // Content
  const content = document.querySelector('#content');
  const div = document.createElement('div');
  // Title
  const title = document.createElement('h1');
  title.innerText = 'Lone Soul Cafe';
  content.appendChild(title);
  
  // Menu container
  const menuContainer = div;
  menuContainer.classList.add('menu-container');
  content.appendChild(menuContainer);
  // Menu tabs
  const menuTab = document.createElement('div');
  menuTab.classList.add('menu-tab');
  menuContainer.appendChild(menuTab);
  // Tabs
  const drinks = document.createElement('div');
  drinks.innerText = 'Drinks';
  drinks.classList.add('tab');
  drinks.classList.add('tab-active');
  menuTab.appendChild(drinks);
  const snacks = document.createElement('div');
  snacks.innerText = 'Snacks';
  snacks.classList.add('tab');
  menuTab.appendChild(snacks);
  const games = document.createElement('div');
  games.innerText = 'Games';
  games.classList.add('tab');
  menuTab.appendChild(drinks);
  menuTab.appendChild(snacks);
  menuTab.appendChild(games);
  // Menu Items
  const menuItems = document.createElement('div');
  menuItems.classList.add('menu-items');
  menuContainer.appendChild(menuItems);

  // Items

  // Menu title
  const menuText = document.createElement('div');
  menuText.classList.add('menu-text');
  menuText.innerHTML = `<span>Today we are serving</span><span class="material-symbols-outlined">
  arrow_upward
  </span>`;
  content.appendChild(menuText);
}
export default pageLoad;