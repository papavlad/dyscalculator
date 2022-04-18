//Answers calculation
const qEval = document.querySelector(".q-eval");
const qReset = document.querySelector(".q-reset");
const qFinal = document.querySelector(".q-final-score");

const calculateQ = () => {
  const maxQ = document.querySelector(".maxQ").value;
  const correctQ = document.querySelector(".correctQ").value;
  const questionPoints = 100 / maxQ;

  const finalPoints = correctQ * questionPoints;
  console.log(finalPoints);
  const finalPointsString = finalPoints.toString();

  if (finalPointsString < 11) {
    qFinal.innerText = finalPoints.toFixed(2);
  } else if (finalPointsString[1] > 0) {
    const toNum = Number(finalPointsString[0]) + 1;
    qFinal.innerText = toNum;
  } else {
    qFinal.innerText = finalPointsString[0];
  }
};

qMain = `<div class="title"><p>This function calculates how much correct answers you need to have toget a certain grade.</p></div><inputtype="number"name="number"id="number"min="1"placeholder="Number of questions"/><inputtype="number"name="number"id="number"min="1"placeholder="Correct answers"/><div class="q-final"><h3 class="final-score">88</h3><button class="q-eval"><i class="fa-solid fa-equals"></i></button><button class="q-eval">  <i class="fa-solid fa-arrows-rotate"></i></button></div>`;

qEval.addEventListener("click", calculateQ);
