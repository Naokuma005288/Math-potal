function setupCalculator() {
  var exprDisplay = document.getElementById("calculator-expression-display");
  var resultDisplay = document.getElementById("calculator-result-display");
  var input = document.getElementById("calculator-expression");
  var keys = document.querySelector(".calculator-keys");

  if (!exprDisplay || !resultDisplay || !input || !keys) return;

  var expr = input.value || "";

  function updateDisplays() {
    var displayText = expr || "0";
    exprDisplay.textContent = displayText
      .replace(/\*/g, "×")
      .replace(/\//g, "÷");
  }

  function showResultText(text) {
    resultDisplay.textContent = text;
  }

  function showResultNumber(value) {
    resultDisplay.textContent = "= " + formatNumber(value);
  }

  function clearResult() {
    resultDisplay.textContent = "= 0";
  }

  function calculate() {
    var raw = expr.trim();
    if (!raw) {
      clearResult();
      return;
    }

    if (!/^[0-9+\-*/().\s]+$/.test(raw)) {
      showResultText("式に使えない文字があります");
      return;
    }

    var value;
    try {
      // eslint-disable-next-line no-new-func
      var fn = new Function('"use strict"; return (' + raw + ");");
      value = fn();
    } catch (e) {
      showResultText("式が正しくありません");
      return;
    }

    if (typeof value !== "number" || !isFinite(value)) {
      showResultText("計算できません");
      return;
    }

    showResultNumber(value);
  }

  keys.addEventListener("click", function (event) {
    var btn = event.target.closest("button");
    if (!btn) return;

    var action = btn.dataset.action;
    var value = btn.dataset.value;

    if (action === "clear") {
      expr = "";
      input.value = "";
      updateDisplays();
      clearResult();
      return;
    }

    if (action === "delete") {
      expr = expr.slice(0, -1);
      input.value = expr;
      updateDisplays();
      return;
    }

    if (action === "eval") {
      calculate();
      return;
    }

    if (value) {
      expr += value;
      input.value = expr;
      updateDisplays();
    }
  });

  input.addEventListener("input", function () {
    expr = input.value;
    updateDisplays();
  });

  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      expr = input.value;
      calculate();
    }
  });

  updateDisplays();
  clearResult();
}
