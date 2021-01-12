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
        if (target === item) {
          hideContent();
          showContent(i);
        }
      });
    }
  });
  // Countdown food delivery
  const deadline = "2021-05-11";
  function getTimeRemaining(endTime) {
    let now = new Date();
    const t = Date.parse(endTime) - now,
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24),
      minutes = Math.floor((t / 1000 / 60) % 60),
      seconds = Math.floor((t / 1000) % 60);

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }
  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }
  function setTimer(selector, endTime) {
    const timer = document.querySelector(selector);
    const days = timer.querySelector("#days");
    const hours = timer.querySelector("#hours");
    const minutes = timer.querySelector("#minutes");
    const seconds = timer.querySelector("#seconds");
    const timeInterval = setInterval(updateTimer, 1000);
    updateTimer();
    function updateTimer() {
      const t = getTimeRemaining(endTime);
      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);
      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }
  setTimer(".food delivery", deadline);
});
