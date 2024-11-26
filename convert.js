function convert() {
  let value = parseFloat(document.getElementById("valueInput").value);
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;

  let result = 0;

  if (from === "meter") {
    result = value;
  } else if (from === "kilometer") {
    result = value * 1000;
  } else if (from === "centimeter") {
    result = value / 100;
  } else if (from === "mile") {
    result = value * 1609.34;
  }

  if (to === "meter") {
  } else if (to === "kilometer") {
    result = result / 1000;
  } else if (to === "centimeter") {
    result = result * 100;
  } else if (to === "mile") {
    result = result / 1609.34;
  }

  document.getElementById(
    "result"
  ).innerHTML = `Converted Value: ${result.toFixed(2)} ${to}`;
}
