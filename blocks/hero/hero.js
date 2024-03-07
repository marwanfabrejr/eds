export default function decorate(block) {
  var overlayDiv = document.createElement('div');
  overlayDiv.classList.add('overlay');
  var heroDiv = document.querySelector('.hero');
  heroDiv.appendChild(overlayDiv);
  var heroH = document.getElementById('this-is-a-headline');
  var heroP = document.createElement('p');
  overlayDiv.classList.add('heroP');
  heroP.innerHTML = 'Subheading · All Breakpoints';
  var nextSibling = heroH.nextSibling;
  if (nextSibling) {
    referenceElement.parentNode.insertBefore(heroP, nextSibling);
    console.log(heroDiv);
  } else {
    referenceElement.parentNode.appendChild(heroP);
    console.log(heroDiv);
  }
}
