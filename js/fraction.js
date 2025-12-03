function setupFractionTool() {
  var fractionInput = document.getElementById("fraction-input");
  var decimalInput = document.getElementById("decimal-input");
  var percentInput = document.getElementById("percent-input");

  var fromFractionBtn = document.getElementById("fraction-from-fraction");
  var fromDecimalBtn = document.getElementById("fraction-from-decimal");
  var fromPercentBtn = document.getElementById("fraction-from-percent");

  var messageEl = document.getElementById("fraction-message");

  if (
    !fractionInput ||
    !decimalInput ||
    !percentInput ||
    !fromFractionBtn ||
    !fromDecimalBtn ||
    !fromPercentBtn
  ) {
    return;
  }

  function showMessage(msg) {
    if (messageEl) {
      messageEl.textContent = msg || "";
    }
  }

  fromFractionBtn.addEventListener("click", function () {
    var text = fractionInput.value.trim();
    if (!text) {
      showMessage("分数を入力してください。");
      return;
    }
    var parts = text.split("/");
    if (parts.length !== 2) {
      showMessage("a/b の形で入力してください。");
      return;
    }
    var num = parseFloat(parts[0]);
    var den = parseFloat(parts[1]);
    if (!isFinite(num) || !isFinite(den) || den === 0) {
      showMessage("分子・分母の値が正しくありません。");
      return;
    }
    var decimal = num / den;
    decimalInput.value = formatNumber(decimal);
    percentInput.value = formatNumber(decimal * 100);
    showMessage("分数から変換しました。");
  });

  fromDecimalBtn.addEventListener("click", function () {
    var text = decimalInput.value.trim();
    if (!text) {
      showMessage("小数を入力してください。");
      return;
    }
    var dec = parseFloat(text);
    if (!isFinite(dec)) {
      showMessage("小数の値が正しくありません。");
      return;
    }
    fractionInput.value = decimalToFraction(dec);
    percentInput.value = formatNumber(dec * 100);
    showMessage("小数から変換しました。");
  });

  fromPercentBtn.addEventListener("click", function () {
    var text = percentInput.value.trim();
    if (!text) {
      showMessage("％の値を入力してください。");
      return;
    }
    if (text.endsWith("%")) {
      text = text.slice(0, -1);
    }
    var p = parseFloat(text);
    if (!isFinite(p)) {
      showMessage("％の値が正しくありません。");
      return;
    }
    var dec = p / 100;
    decimalInput.value = formatNumber(dec);
    fractionInput.value = decimalToFraction(dec);
    showMessage("％から変換しました。");
  });
}
