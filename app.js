const displayScore = document.querySelector(".final-score");
const button = document.querySelector("button.plus");
const alertBox = document.querySelector(".alert-container");

const checkSum = () => {
  const parts = document.querySelectorAll(".part");
  let partSum = 0;
  parts.forEach((part) => {
    partSum += parseInt(part.value);
  });
  if (partSum > 100) {
    alertOver();
  }
};

const divide = () => {
  const parts = document.querySelectorAll(".part");
  const startValue = 100 / parts.length;
  parts.forEach((part) => {
    part.value = Math.round(startValue * 10) / 10;
  });
};

const calculate = () => {
  const parts = document.querySelectorAll(".part");
  const wons = document.querySelectorAll(".won");
  checkSum();
  let sum = 0;

  for (i = 0; i < parts.length; i++) {
    let percent = parts[i].value / 100;
    let multiply = wons[i].value * percent;
    sum += multiply;
  }
  displayScore.innerText = Math.round(sum * 100) / 100;
};

const generate = () => {
  const newInput = document.querySelector(".add-new input").value;
  if (newInput == "") {
    return;
  }

  const column = document.querySelector(".column");
  const requirements = document.querySelector(".add-new");
  const newItem = document.createElement("h3");
  newItem.classList.add("requirements");
  newItem.innerHTML = newInput;
  column.insertBefore(newItem, requirements);

  const final = document.querySelector(".column:nth-of-type(2)");
  let ofFinal = document.createElement("input");
  ofFinal.value = 0;
  ofFinal.setAttribute("type", "number");
  ofFinal.classList.add("part");
  final.append(ofFinal);

  const won = document.querySelector(".column:nth-of-type(3)");
  let ofWon = document.createElement("input");
  ofWon.value = 0;
  ofWon.setAttribute("type", "number");
  ofWon.classList.add("won");
  won.append(ofWon);

  readd();
};

const alertOver = () => {
  alertBox.classList.add("toggle-vis");
};
const removeAlert = () => {
  alertBox.classList.remove("toggle-vis");
};

const readd = () => {
  const evalButton = document.querySelector(".eval");
  evalButton.addEventListener("click", calculate);

  button.addEventListener("click", generate);
};

readd();
