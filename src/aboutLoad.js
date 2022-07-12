function aboutLoad() {
  // // Menu Items
  const menuItems = document.createElement('div');
  menuItems.classList.add('menu-items');
  menuItems.classList.add('about-item');
  menuItems.innerHTML = `
    <h3>About Us</h3>
    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dignissim, risus interdum molestie rutrum, lorem mi rhoncus erat, nec mollis libero dolor at nibh. Sed sit amet libero euismod, ullamcorper nulla in, rutrum diam. Duis nec finibus sapien. Proin pretium eros id mollis feugiat. Integer tempus placerat nisi. Aliquam erat volutpat. Maecenas ullamcorper nibh eu elit iaculis, quis porta enim commodo. Quisque libero massa, consequat a turpis in, commodo dignissim eros. Quisque non feugiat justo. Duis bibendum tortor eget feugiat ullamcorper. Fusce auctor cursus viverra. Nullam pulvinar lacus arcu, eget feugiat leo faucibus sed. Curabitur ipsum tellus, efficitur ac ex a, commodo commodo ligula.</h4>
  `
  document.body.appendChild(menuItems);
}

export default aboutLoad;