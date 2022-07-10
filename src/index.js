import pageLoad from './pageLoad';
import './css/style.css';
import aboutLoad from './aboutLoad';
import drinksLoad from './drinksLoad';

pageLoad();
aboutLoad();

menuCheck();
function menuCheck() {
  const tabs = document.querySelectorAll('.tab');

  tabs.forEach(tab => {
    tab.addEventListener('click', function(e) {
      if (e.target.className.includes('about')) {
        e.target.classList.add('tab-active');
      } else if (e.target.className.includes('menu')) {
        // drinksLoad();
        e.target.classList.add('tab-active');
      } else if (e.target.className.includes('contact')) {
        console.log('Contact');
        e.target.classList.add('tab-active');
      }
    })
  })
}