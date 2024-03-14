export default function decorate(block) {
  var mainElement = document.querySelector('main');
  mainElement.lastElementChild.remove();

  var heroH = document.getElementById('helix-design-system-components');
  var heroP = document.createElement('p');
  heroP.classList.add('heroP');
  heroP.innerHTML = 'implemented with AEM Franklin';
  heroH.after(heroP);

  var introH = document.getElementById(
    'built-with-helix--aem-franklin-explore-component-interactions'
  );
  var introParent = introH.parentElement;
  introParent.classList.add('intro');
  var firstChild = introParent.firstElementChild;
  firstChild.classList.add('firstChild');

  var introP = introH.nextElementSibling;
  introP.classList.add('introP');
}
