document.addEventListener("DOMContentLoaded", () => {
  const menuParent: HTMLElement = document.querySelector(".tabheader__items");
  const menuImage: NodeListOf<Element> = document.querySelectorAll(
    ".slidecontent"
  );
  const menuItems: NodeListOf<Element> = document.querySelectorAll(
    ".slideheader__item"
  );

  function hideContent(): void {
    menuImage.forEach((image) => {
      image.classList.add("hide");
      image.classList.remove("show", "fade");
    });
    menuItems.forEach((item) => {
      item.classList.remove("slideheader__item_active");
    });
  }

  function showContent(index = 0): void {
    menuImage[index].classList.add("show", "fade");
    menuImage[index].classList.remove("hide");
    menuItems[index].classList.add("slideheader__item_active");
  }

  hideContent();
  showContent();

  menuParent.addEventListener("click", (evt): void => {
    const target: EventTarget = evt.target;
    if (
      target &&
      (target as HTMLElement).classList.contains("slideheader__item")
    ) {
      menuItems.forEach((item: HTMLElement, i: number) => {
        if (target === item) {
          hideContent();
          showContent(i);
        }
      });
    }
  });
  // Countdown timer food delivery
  const deadline: string = "2021-05-11";
  function getTimeRemaining(endTime: string): Object {
    let now: Date = new Date();
    const timeCurrent: number = Date.parse(endTime) - Number(now),
      days: number = Math.floor(timeCurrent / (1000 * 60 * 60 * 24)),
      hours: number = Math.floor((timeCurrent / (1000 * 60 * 60)) % 24),
      minutes: number = Math.floor((timeCurrent / 1000 / 60) % 60),
      seconds: number = Math.floor((timeCurrent / 1000) % 60);

    return {
      total: timeCurrent,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }
  function getZero(num: number): string | number {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }
  function setTimer(selector: any, endTime: string) {
    const timer: HTMLElement = document.querySelector(selector);
    const days: HTMLElement = timer.querySelector("#days");
    const hours: HTMLElement = timer.querySelector("#hours");
    const minutes: HTMLElement = timer.querySelector("#minutes");
    const seconds: HTMLElement = timer.querySelector("#seconds");
    const timeInterval = setInterval(updateTimer, 1000);
    updateTimer();
    function updateTimer() {
      const time: any = getTimeRemaining(endTime);
      days.innerHTML = String(getZero(time.days));
      hours.innerHTML = String(getZero(time.hours));
      minutes.innerHTML = String(getZero(time.minutes));
      seconds.innerHTML = String(getZero(time.seconds));
      if (time.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }
  setTimer(".timer", deadline);
});
