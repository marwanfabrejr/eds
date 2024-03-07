export default function decorate(block) {
  var overlayDiv = document.createElement('div');
  overlayDiv.classList.add('overlay');
  var heroDiv = document.querySelector('.hero');
  heroDiv.appendChild(overlayDiv);
  var heroH = document.getElementById('this-is-a-headline');
  var heroP = document.createElement('p');
  heroP.classList.add('heroP');
  heroP.innerHTML = 'Subheading · All Breakpoints';
  heroH.after(heroP);
}
