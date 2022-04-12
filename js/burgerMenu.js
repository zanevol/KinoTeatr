const openMenu = (nav, active) => {
  nav.classList.add(active);
};

const closeMenu = (nav, active) => {
  nav.classList.remove(active);
};

const slideMenu = ({openBtn, menu, classActiveMenu, closeTrigger}) => {
  const burgerBtn = document.querySelector(openBtn),
    navigation = document.querySelector(menu),
    navigationClose = document.querySelectorAll(closeTrigger);


  burgerBtn.addEventListener("click", () => {
    openMenu(navigation, classActiveMenu);
  });

  navigationClose.forEach(el => {
    el.addEventListener("click", () => {
      closeMenu(navigation, classActiveMenu);
    });
  });
};


export default slideMenu;
