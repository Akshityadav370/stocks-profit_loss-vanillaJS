const inputValues = document.querySelectorAll(".input-values");
const output = document.querySelector("#output");
const btn = document.querySelector("#submit");

function calculateProfit(initial_price, qty, current_price) {
  return (current_price - initial_price) * qty;
}
function calculateLoss(initial_price, qty, current_price) {
  return (initial_price - current_price) * qty;
}
function calculatePercent(result, qty, initial_price) {
  return (result / (qty * initial_price)) * 100;
}

function calculateProfitLoss() {
  const initial_price = Number(inputValues[0].value);
  const qty = Number(inputValues[1].value);
  const current_price = Number(inputValues[2].value);

  let result = 0,
    percent = 0;
  let text = "";

  if (current_price > initial_price) {
    result = calculateProfit(initial_price, qty, current_price);
    percent = calculatePercent(result, qty, initial_price);
    percent = percent.toFixed(2);
    
    text = `Yay! your profit is ${result} & profit percent is ${percent}%`;
  } else if (current_price < initial_price) {
    result = calculateLoss(initial_price, qty, current_price);
    percent = calculatePercent(result, qty, initial_price);
    percent = percent.toFixed(2);
    text = `Oh! Oh! your loss is ${result} & loss percent is ${percent}%`;
  } else {
    text = "No pain No gain & No gain No pain";
  }
  output.innerText = text;
}

btn.addEventListener("click", calculateProfitLoss);
