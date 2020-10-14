const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  startButton: document.querySelector('button[data-action="start"]'),
  stopButton: document.querySelector('button[data-action="stop"]'),
  messageBox: document.querySelector(".js-message"),
};

const changeBodyColor = {
  isChanging: false,
  intervalId: null,

  onStartButtonClick() {
    if (this.isChanging) {
      refs.messageBox.classList.add("visible");

      setTimeout(() => {
        refs.messageBox.classList.remove("visible");
      }, 3000);

      return;
    }

    this.isChanging = true;
    this.intervalId = setInterval(this.setBodyColor, 1000);
  },

  onStopButtonClick() {
    clearInterval(this.intervalId);
    this.interval = null;
    this.isChanging = false;
  },

  setBodyColor() {
    const newColorIndex = randomIntegerFromInterval(0, colors.length);
    document.body.style.backgroundColor = colors[newColorIndex];
  },
};

refs.startButton.addEventListener(
  "click",
  changeBodyColor.onStartButtonClick.bind(changeBodyColor)
);
refs.stopButton.addEventListener(
  "click",
  changeBodyColor.onStopButtonClick.bind(changeBodyColor)
);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};