import pageLoad from './pageLoad';
import './css/style.css';
import wipeOut from './wipeOut';
import aboutLoad from './aboutLoad';
import drinksLoad from './drinksLoad';
import contact from './contact';

pageLoad();
aboutLoad();

menuCheck();
function menuCheck() {
  const tabs = document.querySelectorAll('.tab');
  const content = document.querySelector('#content');

  tabs.forEach(tab => {
    tab.addEventListener('click', function(e) {
      if (e.target.className.includes('about')) {
        wipeOut();
        aboutLoad();
      } else if (e.target.className.includes('menu')) {
        wipeOut();
        drinksLoad();
        console.log('Menu');
      } else if (e.target.className.includes('contact')) {
        wipeOut();
        contact();
      }
    })
  })
}