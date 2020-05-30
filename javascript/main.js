document.getElementById('container-navigation').hidden = true;
document.getElementById('container-footer').hidden = true;
document.getElementById('learn-more').addEventListener('click', function() {
  document.getElementById('jumbotron').hidden = true;
  document.getElementById('jumbotron-bear').hidden = true;
  document.getElementById('container-navigation').hidden = false;
  document.getElementById('container-footer').hidden = false;
}, false);







const init = () => {
}

init();
