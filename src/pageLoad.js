function pageLoad() {
  // Content
  const content = document.querySelector('#content');
  const div = document.createElement('div');
  // Title
  const title = document.createElement('h1');
  title.innerText = 'Lone Soul Cafe';
  content.appendChild(title);
  
  // Menu title
  const menuText = document.createElement('div');
  menuText.classList.add('menu-text');
  menuText.innerHTML = `<span>Today we are serving</span><span class="material-symbols-outlined">
  arrow_downward
  </span>`;
  content.appendChild(menuText);
  
  // Menu container
  const menuContainer = div;
  menuContainer.classList.add('menu-container');
  content.appendChild(menuContainer);
  // // Menu tabs
  // const menuTab = document.createElement('div');
  // menuTab.classList.add('menu-tab');
  // menuContainer.appendChild(menuTab);
  // Tabs
  const about = document.createElement('div');
  about.innerText = 'About';
  about.classList.add('tab');
  about.classList.add('about');
  about.classList.add('tab-active');
  const menu = document.createElement('div');
  menu.innerText = 'Menu';
  menu.classList.add('tab');
  menu.classList.add('menu');
  const contact = document.createElement('div');
  contact.innerText = 'Contact';
  contact.classList.add('tab');
  contact.classList.add('contact');
  menuContainer.appendChild(about);
  menuContainer.appendChild(menu);
  menuContainer.appendChild(contact);

  // // Menu Items
  // const menuItems = document.createElement('div');
  // menuItems.classList.add('menu-items');
  // menuContainer.appendChild(menuItems);

  // // Items
  // const itemOne = document.createElement('div');
  // itemOne.classList.add('item');
  // menuItems.appendChild(itemOne);
  // const itemTwo = document.createElement('div');
  // itemTwo.classList.add('item');
  // menuItems.appendChild(itemTwo);
  // const itemThree = document.createElement('div');
  // itemThree.classList.add('item');
  // menuItems.appendChild(itemThree);

}
export default pageLoad;