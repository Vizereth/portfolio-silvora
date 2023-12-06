import Filterizr from 'filterizr';

const initFilterizr = () => {
  const initFilterButtons = () => {
    const filterList = document.querySelector('.portfolio__filter-list');
    const filterButtons = filterList.querySelectorAll('li');

    filterButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const prevActiveButton = filterList.querySelector(
          '.portfolio__filter-btn--active'
        );
        prevActiveButton.classList.remove('portfolio__filter-btn--active');

        const currActiveButton = e.target;
        currActiveButton.classList.add('portfolio__filter-btn--active');
      });
    });
  };

  const portfolioSection = document.querySelector('.portfolio');

  if (!portfolioSection) return;

  const portfolioItemsContainer =
    portfolioSection.querySelector('.portfolio__items');

  const options = {};
  const filterizr = new Filterizr(portfolioItemsContainer, options);
  initFilterButtons();
  //portfolioItemsContainer.style.width = "auto";
};

export default initFilterizr;
