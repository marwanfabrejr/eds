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
      // Select the parent div by its class name
      var parentDiv = document.querySelector(
        '.columns.cardsband.block.columns-2-cols'
      );

      // Get all direct child divs of the parent div
      var childDivs = parentDiv.children;

      // Loop through each of the child divs
      for (var i = 0; i < childDivs.length; i++) {
        // Add 'cardContainer' class to each child div (which is the parent of each pair of divs)
        childDivs[i].classList.add('cardContainer');
        // Assuming each child div has exactly 2 divs as per your description
        var innerDivs = childDivs[i].children;
        if (innerDivs.length >= 2) {
          // Make sure there are at least two divs
          // Add 'imageContainer' class to the first div
          innerDivs[0].classList.add('imageContainer');

          // Add 'contentContainer' class to the second div
          innerDivs[1].classList.add('contentContainer');
        }
      }
      // Step 1: Select the parent div and add the 'contentContainer' class to it
      var parentDiv1 = document.querySelector(
        '.columns.feature.block.columns-2-cols'
      );
      parentDiv1.classList.add('contentContainer');

      // Step 2: Add the 'imageContainer' class to the first div
      var firstDiv = parentDiv1.querySelector('div > div:first-child');
      firstDiv.classList.add('imageContainer');

      // Since there are only two divs directly under the parent div,
      // the second div is targeted by :nth-child(2) assuming the structure is consistent.
      // Step 3: Add the 'content' class to the second div
      var secondDiv = parentDiv1.querySelector('div > div:nth-child(2)');
      secondDiv.classList.add('content');

      // Step 4: Add the 'featureP' class to the paragraph element that comes after the h1 element in the second div
      var paragraphAfterH1 = secondDiv.querySelector('h1 + p');
      if (paragraphAfterH1) {
        // Make sure the paragraph exists
        paragraphAfterH1.classList.add('featureP');
      }
      var accordionContainers = document.querySelectorAll(
        '.columns.accordion.block.columns-2-cols > div'
      );

      accordionContainers.forEach(function (container) {
        // Add 'accordionContainer' class to each parent container
        container.classList.add('accordionContainer');

        // Assuming each container div directly contains exactly 2 divs: one for question, one for answer
        var questionDiv = container.children[0];
        var answerDiv = container.children[1];

        questionDiv.classList.add('question');
        answerDiv.classList.add('answer');

        // Initially hide the answer part
        answerDiv.style.display = 'none';
      });
      accordionContainers.forEach(function (container) {
        var questionDiv = container.children[0];
        var answerDiv = container.children[1];

        questionDiv.addEventListener('click', function () {
          // Toggle the display property
          var secondH2 = questionDiv.querySelectorAll('h2')[1]; // QuerySelectorAll returns all h2 elements, and [1] selects the second
          secondH2.textContent = '-';
          if (answerDiv.style.display === 'none') {
            answerDiv.style.display = 'block';
          } else answerDiv.style.display = 'none';
        });
      });

      // Select the outer parent div by its class name
      var outerDiv = document.querySelector(
        '.columns.category.block.columns-2-cols'
      );

      // Get all direct child divs (the four parent divs)
      var parentDivs = outerDiv.children;

      // Loop through each parent div
      for (var i = 0; i < parentDivs.length; i++) {
        // Add 'categoryContainer' class to each parent div
        parentDivs[i].classList.add('categoryContainer');

        // Assuming each parent div directly contains exactly 2 divs: one for header (categoryH) and one for paragraphs (categoryP)
        var childDivs = parentDivs[i].children;

        if (childDivs[0]) {
          // Check if the first child div exists
          childDivs[0].classList.add('categoryH');
        }

        if (childDivs[1]) {
          // Check if the second child div exists
          childDivs[1].classList.add('categoryP');
        }
      }
    });
  });
}
