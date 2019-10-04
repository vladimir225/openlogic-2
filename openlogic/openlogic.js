const popupMenu = document.querySelector(".custom-menu__popup-menu");
const eventPopupMenu = document.querySelector(".custom-menu__item-show");

eventPopupMenu.addEventListener("click", event => {
  event.preventDefault();
  const state = document.querySelector(".custom-menu__popup-menu--show");
  if (!state) {
    popupMenu.classList.add("custom-menu__popup-menu--show");
    document.querySelector(".item-show__arrow").classList.add("rotate");
  } else {
    popupMenu.classList.remove("custom-menu__popup-menu--show");
    document.querySelector(".item-show__arrow").classList.remove("rotate");
  }
});

const eventPopupMenu2 = document.querySelector(".popup-menu__item-show-2");
const popupMenu2 = document.querySelector(".custom-menu__popup-menu-2");

eventPopupMenu2.addEventListener("click", event => {
  event.preventDefault();
  const state = document.querySelector(".custom-menu__popup-menu--show-2");
  if (!state) {
    popupMenu2.classList.add("custom-menu__popup-menu--show-2");
    document.querySelector(".item-show__arrow-2").classList.add("rotate");
  } else {
    popupMenu2.classList.remove("custom-menu__popup-menu--show-2");
    document.querySelector(".item-show__arrow-2").classList.remove("rotate");
  }
});
