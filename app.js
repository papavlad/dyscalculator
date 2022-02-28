const button = document.querySelector(".plus");
const alertBox = document.querySelector(".alert-container");

let counter = 0;

const checkSumOver = () => {
  const parts = document.querySelectorAll(".part");
  let partSum = 0;
  parts.forEach((part) => {
    partSum += parseInt(part.value);
  });
  if (partSum > 100) {
    alertOver();
    return true;
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
  if (checkSumOver()) {
    return;
  }
  let sum = 0;
  const displayScore =
    window.innerWidth < 720
      ? document.querySelectorAll(".final-score")[1]
      : document.querySelectorAll(".final-score")[0];
  for (i = 0; i < parts.length; i++) {
    let percent = parts[i].value / 100;
    let multiply = wons[i].value * percent;
    sum += multiply;
  }
  displayScore.innerText = Math.round(sum * 100) / 100;
};

const generate = () => {
  const newInput = document.querySelector(".add-new").value;
  const main = document.querySelector("main");

  const inputWrap = document.createElement("DIV");
  inputWrap.classList.add("input-wrap", "temp");
  inputWrap.innerHTML =
    '<input class="add-new" type="text" value="" placeholder="Click to edit" /><span class="plus">plus</span>';

  if (newInput == "") {
    console.log("empty");
    return;
  }
  if (counter > 0) {
    const rowString = `<div class="input-wrap"><input type="text" value="${newInput}" /><span>pen</span></div><input type="number" class="part" min="0" max="100" value="0" /><input type="number" class="won" min="0" max="100" value="0" />`;
    const row = document.createElement("DIV");
    row.classList.add("row");
    row.innerHTML = rowString;

    const temps = document.querySelectorAll(".temp");
    temps.forEach((temp) => {
      temp.remove();
    });

    main.appendChild(row);
    main.appendChild(inputWrap);
  } else {
    const temps = document.querySelectorAll(".temp");
    const rowString = `<div class="input-wrap"><input type="text" value="${newInput}" /><span>pen</span></div><input type="number" class="part" min="0" max="100" value="0" /><input type="number" class="won" min="0" max="100" value="0" />`;
    const row = document.createElement("DIV");
    row.classList.add("row");
    row.innerHTML = rowString;
    temps.forEach((temp) => {
      temp.remove();
    });
    main.insertBefore(row, main.children[11]);
    main.appendChild(inputWrap);
    counter++;
  }

  const plus = document.querySelector(".plus");
  plus.addEventListener("click", generate);
};

const reset = () => {
  const main = document.querySelector("main");
  main.innerHTML = "";
  main.innerHTML =
    '<h2 class="first-heading">Requirement</h2>      <h2>% / fin</h2>      <h2>%</h2>      <h2 class="last-heading">Final</h2>      <div class="input-wrap">        <input type="text" value="Kolokvijum 1" /><span>pen</span>      </div>      <input type="number" class="part" min="0" max="100" value="50" />      <input type="number" class="won" min="0" max="100" value="0" />      <h3 class="final-score desktop">88</h3>      <div class="input-wrap">        <input type="text" value="Kolokvijum 2" /><span>pen</span>      </div>      <input type="number" class="part" min="0" max="100" value="50" />      <input type="number" class="won" min="0" max="100" value="0" />      <div class="input-wrap temp">        <input          class="add-new"          type="text"          value=""          placeholder="Click to edit"        /><span class="plus">plus</span>      </div>      <div class="empty temp"></div>      <div class="empty temp"></div>      <button class="eval desktop"><i class="fa-solid fa-equals"></i></button>      <button class="reset desktop">        <i class="fa-solid fa-arrows-rotate"></i>      </button>';

  const button = document.querySelector(".plus");

  checkIfMobile();
  button.addEventListener("click", generate);
  counter = 0;
};

const alertOver = () => {
  const alertBox = document.querySelector(".alert-container");
  alertBox.classList.add("toggle-vis");
};
const removeAlert = () => {
  const alertBox = document.querySelector(".alert-container");
  alertBox.classList.remove("toggle-vis");
};

const checkIfMobile = () => {
  if (window.innerWidth < 720) {
    const resetButton = document.querySelectorAll(".reset")[1];
    const evalButton = document.querySelectorAll(".eval")[1];
    evalButton.addEventListener("click", calculate);
    resetButton.addEventListener("click", reset);
  } else {
    const resetButton = document.querySelector(".reset");
    const evalButton = document.querySelector(".eval");
    evalButton.addEventListener("click", calculate);
    resetButton.addEventListener("click", reset);
  }
};

checkIfMobile();
button.addEventListener("click", generate);
