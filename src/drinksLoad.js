function drinksLoad() {
  // // Menu Items
  const menuItems = document.createElement('div');
  menuItems.classList.add('menu-items');
  document.body.appendChild(menuItems);

  // // Items
  const itemOne = document.createElement('div');
  itemOne.classList.add('item');
  itemOne.innerHTML = `
    <img src="./drinks/beer.jpg">
    <h3>Beer</h3>
    <h4>$5</h4>
  `
  menuItems.appendChild(itemOne);

  const itemTwo = document.createElement('div');
  itemTwo.classList.add('item');
  itemTwo.innerHTML = `
    <img src="./drinks/snacks.jpg">
    <h3>Snacks</h3>
    <h4>$10</h4>
  `
  menuItems.appendChild(itemTwo);
  const itemThree = document.createElement('div');
  itemThree.classList.add('item');
  itemThree.innerHTML = `
    <img src="./drinks/games.jpg">
    <h3>Fun</h3>
    <h4>Priceless</h4>
  `
  menuItems.appendChild(itemThree);
  // document.body.appendChild(itemOne);
  // const itemTwo = document.createElement('div');
  // itemTwo.classList.add('item');
  // menuItems.appendChild(itemTwo);
  // const itemThree = document.createElement('div');
  // itemThree.classList.add('item');
  // menuItems.appendChild(itemThree);
}

export default drinksLoad;