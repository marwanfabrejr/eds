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
  var buttonParent = buttonElement.parentElement;
  buttonParent.classList.add('imageWrapper');
  var header1 = document.getElementById('header-1');
  var previousElement = header1.previousElementSibling;
  previousElement.classList.add('subtitle');
  var nextElement = header1.nextElementSibling;
  nextElement.classList.add('paragraph');
  var parentDiv = header1.parentElement;
  parentDiv.classList.add('desc');
  var grandParentDiv = parentDiv.parentElement;
  grandParentDiv.classList.add('columnWrapper');
  var buttonElement = document.querySelector('[title="Button"]');
  var buttonParent = buttonElement.parentElement;
  buttonParent.classList.add('imageWrapper');
  buttonElement.classList.add('btn');
}
