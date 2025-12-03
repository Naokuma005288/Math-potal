// 数値フォーマット（指数表記や小数の0カット）
function formatNumber(num) {
  if (!isFinite(num)) return String(num);

  var abs = Math.abs(num);

  if (abs !== 0 && (abs >= 1e9 || abs < 1e-4)) {
    return num.toExponential(6).replace(/0+e/, "e").replace(/\.e/, "e");
  }

  var s = num.toFixed(10);
  s = s.replace(/\.?0+$/, "");
  return s;
}

// 最大公約数
function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  if (!a && !b) return 1;
  while (b !== 0) {
    var t = b;
    b = a % b;
    a = t;
  }
  return a || 1;
}

// 小数 → 分数（0〜小数第6位くらいまで）
function decimalToFraction(decimal) {
  if (!isFinite(decimal)) return "";

  if (decimal === 0) {
    return "0/1";
  }

  var negative = decimal < 0;
  var x = Math.abs(decimal);

  x = parseFloat(x.toFixed(6));

  var s = x.toString();
  if (s.indexOf(".") === -1) {
    return (negative ? "-" : "") + s + "/1";
  }

  var parts = s.split(".");
  var intStr = parts[0];
  var fracStrRaw = parts[1];
  var fracStr = fracStrRaw;

  if (fracStr.length > 6) {
    fracStr = fracStr.slice(0, 6);
  }

  var denominator = Math.pow(10, fracStr.length);
  var numerator = parseInt(intStr, 10) * denominator + parseInt(fracStr, 10);

  var g = gcd(numerator, denominator);
  numerator /= g;
  var denom = denominator / g;

  var result = numerator + "/" + denom;
  if (negative) {
    result = "-" + result;
  }
  return result;
}

// 単位換算の共通ロジック
function createUnitConverter(config) {
  var valueInput = document.getElementById(config.valueId);
  var fromSelect = document.getElementById(config.fromId);
  var toSelect = document.getElementById(config.toId);
  var button = document.getElementById(config.buttonId);
  var resultEl = document.getElementById(config.resultId);

  if (!valueInput || !fromSelect || !toSelect || !button || !resultEl) {
    return;
  }

  function convert() {
    var raw = valueInput.value.trim();
    var value = parseFloat(raw);
    if (!isFinite(value)) {
      resultEl.textContent = "結果：数値を入力してください。";
      return;
    }

    var from = fromSelect.value;
    var to = toSelect.value;
    var factors = config.factors;

    if (!factors.hasOwnProperty(from) || !factors.hasOwnProperty(to)) {
      resultEl.textContent = "結果：単位の指定が正しくありません。";
      return;
    }

    var base = value * factors[from]; // 基準単位へ
    var converted = base / factors[to];

    var label =
      config.unitLabels && config.unitLabels[to]
        ? config.unitLabels[to]
        : to;

    resultEl.textContent = "結果：" + formatNumber(converted) + " " + label;
  }

  button.addEventListener("click", convert);
  valueInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      convert();
    }
  });
}
