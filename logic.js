const screen = document.querySelector(".calculator-screen");
const keys = document.querySelector(".calculator-keys");

let currentValue = "";
let previousValue = "";
let operator = "";

screen.value = "0";

keys.addEventListener("click", function (event) {
  const button = event.target;

  if (!button.matches("button")) {
    return;
  }

  const value = button.value;

  if (button.classList.contains("all-clear")) {
    currentValue = "";
    previousValue = "";
    operator = "";
    screen.value = "0";
    return;
  }

  if (button.classList.contains("decimal")) {
    if (!currentValue.includes(".")) {
      if (currentValue === "") {
        currentValue = "0.";
      } else {
        currentValue = currentValue + ".";
      }
      screen.value = currentValue;
    }
    return;
  }

  if (button.classList.contains("equal-sign")) {
    if (previousValue !== "" && currentValue !== "" && operator !== "") {
      let num1 = Number(previousValue);
      let num2 = Number(currentValue);
      let result = 0;

      if (operator === "+") {
        result = num1 + num2;
      } else if (operator === "-") {
        result = num1 - num2;
      } else if (operator === "*") {
        result = num1 * num2;
      } else if (operator === "/") {
        result = num1 / num2;
      }

      screen.value = result;
      currentValue = String(result);
      previousValue = "";
      operator = "";
    }
    return;
  }

  if (button.classList.contains("operator")) {
    if (currentValue !== "") {
      previousValue = currentValue;
      currentValue = "";
      operator = value;
    }
    return;
  }

  currentValue = currentValue + value;
  screen.value = currentValue;
});
