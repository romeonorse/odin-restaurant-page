function aboutLoad() {
  // // Menu Items
  const menuItems = document.createElement('div');
  menuItems.classList.add('menu-items');
  menuItems.innerHTML = `
    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at euismod neque. Nullam elementum iaculis tincidunt. Curabitur ut libero non nisi dapibus pharetra. Duis velit urna, efficitur et eros id, cursus egestas risus. Sed non dapibus ante. Sed ornare congue diam, sit amet rhoncus erat ultrices sit amet. Nulla et luctus nulla. Duis gravida ipsum lobortis sapien porttitor feugiat. Pellentesque lobortis ipsum sed elit faucibus, id blandit neque dictum. Nulla et accumsan ipsum, vel venenatis tortor. Aenean ornare velit eros.</h4>
  `
  document.body.appendChild(menuItems);
}

export default aboutLoad;