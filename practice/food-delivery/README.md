# Описание

- В данном коде реализован таймер, ведущий отсчет до указанной в переменной `deadline`даты
- Функция `getTimeRemaining` высчитывает разницу между переданной в аргументе даты и текущим временем
- Функция `getZero` ревращает одноразрядное число в строку с нолем перед числом.
- Функция `setTimer` с интервалом в одну секунду вызывает функцию `updateTimer`, которая
  записывает в перепменные, содержащиеся в` setTimer`, результаты, полученные из функуии `getTimeRemaining`
