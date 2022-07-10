function contact() {
  const menuItems = document.createElement('div');
  menuItems.classList.add('menu-items');
  menuItems.classList.add('contact-item');
  menuItems.innerHTML = `
    <h3>Address: Something St., 25/17</h3>
    <h3>Phone: (123) 4-567-890</h3>
    <h3>Email: lonesoulcafe@supermail.com</h3>
  `
  document.body.appendChild(menuItems);
}

export default contact;