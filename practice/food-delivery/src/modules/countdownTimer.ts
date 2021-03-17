function getTimeRemaining(endTime: string): Object {
  const now: Date = new Date()
  const timeCurrent: number = Date.parse(endTime) - Number(now)
  const days: number = Math.floor(timeCurrent / (1000 * 60 * 60 * 24))
  const hours: number = Math.floor((timeCurrent / (1000 * 60 * 60)) % 24)
  const minutes: number = Math.floor((timeCurrent / 1000 / 60) % 60)
  const seconds: number = Math.floor((timeCurrent / 1000) % 60)

  return {
    total: timeCurrent,
    days,
    hours,
    minutes,
    seconds,
  }
}
function getZero(num: number): string | number {
  if (num >= 0 && num < 10) {
    return `0${num}`
  }
  return num
}
function setTimer(selector: any, endTime: string) {
  const timer: HTMLElement = document.querySelector(selector)
  const days: HTMLElement = timer.querySelector('#days')
  const hours: HTMLElement = timer.querySelector('#hours')
  const minutes: HTMLElement = timer.querySelector('#minutes')
  const seconds: HTMLElement = timer.querySelector('#seconds')

  function updateTimer() {
    const timeInterval = setInterval(updateTimer, 1000)
    const time: any = getTimeRemaining(endTime)
    days.innerHTML = String(getZero(time.days))
    hours.innerHTML = String(getZero(time.hours))
    minutes.innerHTML = String(getZero(time.minutes))
    seconds.innerHTML = String(getZero(time.seconds))
    if (time.total <= 0) {
      clearInterval(timeInterval)
    }
  }
  updateTimer()
}

export { setTimer }
