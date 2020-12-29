document.addEventListener("DOMContentLoaded", () => {
  const menuParent = document.querySelector(".tabheader__items");
  const menuImage = document.querySelectorAll(".tabcontent");
  const menuItems = document.querySelectorAll(".tabheader__item");

  function hideContent() {
    menuImage.forEach((image) => {
      image.classList.add("hide");
      image.classList.remove("show", "fade");
    });
    menuItems.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  }
  function showContent(i = 0) {
    menuImage[i].classList.add("show", "fade");
    menuImage[i].classList.remove("hide");
    menuItems[i].classList.add("tabheader__item_active");
  }
  hideContent();
  showContent();

  menuParent.addEventListener("click", (evt) => {
    const target = evt.target;
    if (target && target.classList.contains("tabheader__item")) {
      menuItems.forEach((item, i) => {
        if (target == item) {
          hideContent();
          showContent(i);
        }
      });
    }
  });
});
