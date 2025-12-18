const display = document.getElementById("display");

function append(value) {
  const lastChar = display.value.slice(-1);

  // prevent double operators
  if (isOperator(lastChar) && isOperator(value)) return;

  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const expression = display.value
      .replace(/×/g, "*")
      .replace(/÷/g, "/")
      .replace(/−/g, "-");

    const result = eval(expression);

    if (result === Infinity || isNaN(result)) {
      display.value = "Error";
    } else {
      display.value = result;
    }
  } catch {
    display.value = "Error";
  }
}

function isOperator(char) {
  return ["+", "-", "*", "/", "×", "÷", "−"].includes(char);
}
