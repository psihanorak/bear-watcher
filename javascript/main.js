document.getElementById('container-navigation').hidden = true;
document.getElementById('container-footer').hidden = true;
document.getElementById('bear-form').hidden = true;
document.getElementById('learn-more').addEventListener('click', function() {
  document.getElementById('jumbotron').hidden = true;
  document.getElementById('jumbotron-bear').hidden = true;
  document.getElementById('container-navigation').hidden = false;
  document.getElementById('container-footer').hidden = false;
  document.getElementById('bear-form').hidden = false;
}, false);

import river from './javascript/river.js';

const init = () => {
  river.clickEvent();
}

init();
