export default function decorate(block) {
  var overlayDiv = document.createElement('div');
  overlayDiv.classList.add('overlay');
  var heroDiv = document.querySelector('.hero');
  heroDiv.appendChild(overlayDiv);
  console.log(heroDiv);
}
