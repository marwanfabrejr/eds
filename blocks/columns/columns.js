export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('columns-img-col');
        }
      }
    });
  });
  var header = document.getElementById('header');
  var previousElement = header.previousElementSibling;
  previousElement.classList.add('subtitle');
  var nextElement = header.nextElementSibling;
  nextElement.classList.add('paragraph');
  var parentDiv = header.parentElement;
  parentDiv.classList.add('desc');
  var grandParentDiv = parentDiv.parentElement;
  grandParentDiv.classList.add('columnWrapper');
  var buttonElement = document.querySelector('[title="Button"]');
  buttonElement.classList.add('btn');
  var buttonParent = buttonElement.parentElement;
  buttonParent.classList.add('imageWrapper');
  var header1 = document.getElementById('header-1');
  var previousElement1 = header1.previousElementSibling;
  previousElement1.classList.add('subtitle');
  var nextElement1 = header1.nextElementSibling;
  nextElement1.classList.add('paragraph');
  var parentDiv1 = header1.parentElement;
  parentDiv1.classList.add('desc');
  var grandParentDiv1 = parentDiv1.parentElement;
  grandParentDiv1.classList.add('columnWrapper');
  buttonParent.classList.add('imageWrapper');
  buttonElement.classList.add('btn');
}
