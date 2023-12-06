class CustomMenu {
  constructor(el, menuClass, toggleClass) {
    this.el = el;
    this.menuClassName = menuClass;
    this.toggleClassName = toggleClass;
    this.menu = this.el.querySelector(`.${this.menuClassName}`);
    this.toggle = this.el.querySelector(`.${this.toggleClassName}`);
  }

  init() {
    if (!this.menu || !this.toggle) return;

    this.toggle.addEventListener('click', () => this.onClickHandler());
  }

  onClickHandler() {
    if (!this.menu.classList.contains(`${this.menuClassName}--active`)) {
      this.addMenuActiveClass();
      this.addToggleActiveClass();
    } else {
      this.removeMenuActiveClass();
      this.removeToggleActiveClass();
    }
  }

  addMenuActiveClass() {
    this.menu.classList.add(`${this.menuClassName}--active`);
  }

  removeMenuActiveClass() {
    this.menu.classList.remove(`${this.menuClassName}--active`);
  }

  addToggleActiveClass() {
    this.toggle.classList.add(`${this.toggleClassName}--toggled`);
  }

  removeToggleActiveClass() {
    this.toggle.classList.remove(`${this.toggleClassName}--toggled`);
  }
}

const initMobileMenu = () => {
  const menuClassName = 'header__nav-mobile';
  const toggleClassName = 'icon-menu';

  const navbar = document.querySelector(".header__navbar-mobile");

  if (!navbar) return;

  new CustomMenu(navbar, menuClassName, toggleClassName).init();
};

export default initMobileMenu;
