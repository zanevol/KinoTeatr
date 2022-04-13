import slideMenu from "./burgerMenu.js";
import renderVideo from "./renderVideo.js";
import menuLink from "./menuLink.js";

document.addEventListener("DOMContentLoaded", () => {

  slideMenu({
    openBtn: ".header__burger-btn",
    menu: ".navigation",
    classActiveMenu: "navigation_active",
    closeTrigger: ".navigation__link , .navigation__close",
  });
  menuLink();
  renderVideo();
});
