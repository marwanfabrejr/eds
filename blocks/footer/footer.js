import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const footerMeta = getMetadata('footer');
  block.textContent = '';

  // load footer fragment
  const footerPath = footerMeta.footer || '/footer';
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  const footer = document.createElement('div');
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

  block.append(footer);

  // Select the outer div with class 'footer'
  var footerDiv = document.querySelector('.footer');

  // Assuming you want to add the class to the first child div directly under the footer div
  var childDiv = footerDiv.children[0];

  // Add the 'footerWrapper' class to this div
  childDiv.classList.add('footerWrapper');
}
