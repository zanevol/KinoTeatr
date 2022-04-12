import slideMenu from "./burgerMenu.js";

document.addEventListener("DOMContentLoaded", () => {

  slideMenu({
    openBtn: ".header__burger-btn",
    menu: ".navigation",
    classActiveMenu: "navigation_active",
    closeTrigger: ".navigation__link , .navigation__close"
  });

});

/**
 * fa12ae0ede0cc30bc0a03b2a29f4c1a7
 */
