// Переключатель цветов

// массив цветов в hex-формат
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

//  скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на случайное значение из массива используя инлайн-стиль. При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.

//Переменные
const refs = {
  body: document.querySelector('body'),
  buttonStart: document.querySelector('button[data-action="start"]'),
  buttonStop: document.querySelector('button[data-action="stop"]'),
};

refs.buttonStart.addEventListener('click', onStartClick);
refs.buttonStop.addEventListener('click', onStopClick);


// Функция нажатия кнопки Start, раз в секунду меняет цвет фона body на случайное значение из массива используя инлайн-стиль, делает кнопку Start не активной.
let intervalId;

function onStartClick() {
  intervalId = setInterval(setRendomColor, 1000, colors);
  refs.buttonStart.disabled = true;
}

// Функция нажатия на кнопку Stop, изменение цвета фона  останавливается, кнопка Старт становится активной
function onStopClick() {
  refs.buttonStart.disabled = false;
  clearInterval(intervalId);
  }


// Функция генерации случайного числа (индекс элемента массива цветов),
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function setRendomColor(colors) {
  let colorCurrent = colors[randomIntegerFromInterval(0, colors.length - 1)];
  refs.body.style.backgroundColor = colorCurrent;
 console.log(colorCurrent);
}

