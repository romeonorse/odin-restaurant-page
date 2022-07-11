import Beer from './img/drinks/beer.jpg';
import Snacks from './img/drinks/snacks.jpg';
import Games from './img/drinks/games.jpg';

function drinksLoad() {
  // // Menu Items
  const menuItems = document.createElement('div');
  menuItems.classList.add('menu-items');
  document.body.appendChild(menuItems);

  // // Items
  const itemOne = document.createElement('div');
  itemOne.classList.add('item');
  itemOne.innerHTML = `
    <h3>Beer</h3>
    <h4>$5</h4>
  `
  const beer = new Image();
  beer.src = Beer;
  itemOne.appendChild(beer);

  menuItems.appendChild(itemOne);

  const itemTwo = document.createElement('div');
  itemTwo.classList.add('item');
  itemTwo.innerHTML = `
    <h3>Snacks</h3>
    <h4>$10</h4>
  `
  const snacks = new Image();
  snacks.src = Snacks;
  itemTwo.appendChild(snacks);

  menuItems.appendChild(itemTwo);

  const itemThree = document.createElement('div');
  itemThree.classList.add('item');
  itemThree.innerHTML = `
    <h3>Fun</h3>
    <h4>Priceless</h4>
  `
  const games = new Image();
  games.src = Games;
  itemThree.appendChild(games);

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