// メイン初期化
document.addEventListener("DOMContentLoaded", () => {
  setupGradeTabs();
  setupToolToggles();
  setupCalculator();
  setupFractionTool();
  setupLengthConverter();
  setupAreaConverter();
  setupVolumeConverter();
  setupMassConverter();
  setupSpeedConverter();
});

/* ---------------------------
 * 学年タブ切り替え
 * -------------------------*/
function setupGradeTabs() {
  const tabs = document.querySelectorAll(".grade-tab");
  const sections = document.querySelectorAll(".grade-section");
  if (!tabs.length || !sections.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const grade = tab.dataset.grade;
      tabs.forEach((t) => t.classList.toggle("is-active", t === tab));
      sections.forEach((section) => {
        section.hidden = section.dataset.grade !== grade;
      });
    });
  });
}

/* ---------------------------
 * ツールカードの開閉
 * -------------------------*/
function setupToolToggles() {
  const buttons = document.querySelectorAll(".js-toggle-tool");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".tool-card");
      if (!card) return;
      const body = card.querySelector(".tool-body");
      if (!body) return;

      const isHidden = body.hidden;
      body.hidden = !isHidden;
      button.textContent = isHidden ? "閉じる" : "開く";
    });
  });
}

/* ---------------------------
 * 電卓ツール
 * -------------------------*/
function setupCalculator() {
  const input = document.getElementById("calculator-expression");
  const button = document.getElementById("calculator-eval-button");
  const resultEl = document.getElementById("calculator-result");

  if (!input || !button || !resultEl) return;

  function calc() {
    const expr = input.value.trim();
    if (!expr) {
      resultEl.textContent = "結果：入力がありません。";
      return;
    }

    // 安全のため、使える文字を制限
    if (!/^[0-9+\-*/().\s]+$/.test(expr)) {
      resultEl.textContent =
        "結果：数字と + - * / ( ) . だけ使用できます。";
      return;
    }

    let value;
    try {
      // evalの代わりに Function を使って式を評価
      // ※ ユーザー入力は上で絞っているので、ここではOKとする
      // eslint-disable-next-line no-new-func
      value = Function('"use strict"; return (' + expr + ");")();
    } catch (e) {
      resultEl.textContent = "結果：式が正しくありません。";
      return;
    }

    if (typeof value !== "number" || !isFinite(value)) {
      resultEl.textContent = "結果：計算できませんでした。";
      return;
    }

    resultEl.textContent = "結果：" + formatNumber(value);
  }

  button.addEventListener("click", calc);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      calc();
    }
  });
}

/* ---------------------------
 * 分数・小数・百分率ツール
 * -------------------------*/
function setupFractionTool() {
  const fractionInput = document.getElementById("fraction-input");
  const decimalInput = document.getElementById("decimal-input");
  const percentInput = document.getElementById("percent-input");

  const fromFractionBtn = document.getElementById("fraction-from-fraction");
  const fromDecimalBtn = document.getElementById("fraction-from-decimal");
  const fromPercentBtn = document.getElementById("fraction-from-percent");

  const messageEl = document.getElementById("fraction-message");

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

  // 分数 → 小数・％
  fromFractionBtn.addEventListener("click", () => {
    const text = fractionInput.value.trim();
    if (!text) {
      showMessage("分数を入力してください。");
      return;
    }
    const parts = text.split("/");
    if (parts.length !== 2) {
      showMessage("a/b の形で入力してください。");
      return;
    }
    const num = parseFloat(parts[0]);
    const den = parseFloat(parts[1]);
    if (!isFinite(num) || !isFinite(den) || den === 0) {
      showMessage("分子・分母の値が正しくありません。");
      return;
    }
    const decimal = num / den;
    decimalInput.value = formatNumber(decimal);
    percentInput.value = formatNumber(decimal * 100);
    showMessage("分数から変換しました。");
  });

  // 小数 → 分数・％
  fromDecimalBtn.addEventListener("click", () => {
    const text = decimalInput.value.trim();
    if (!text) {
      showMessage("小数を入力してください。");
      return;
    }
    const dec = parseFloat(text);
    if (!isFinite(dec)) {
      showMessage("小数の値が正しくありません。");
      return;
    }
    fractionInput.value = decimalToFraction(dec);
    percentInput.value = formatNumber(dec * 100);
    showMessage("小数から変換しました。");
  });

  // ％ → 分数・小数
  fromPercentBtn.addEventListener("click", () => {
    let text = percentInput.value.trim();
    if (!text) {
      showMessage("％の値を入力してください。");
      return;
    }
    if (text.endsWith("%")) {
      text = text.slice(0, -1);
    }
    const p = parseFloat(text);
    if (!isFinite(p)) {
      showMessage("％の値が正しくありません。");
      return;
    }
    const dec = p / 100;
    decimalInput.value = formatNumber(dec);
    fractionInput.value = decimalToFraction(dec);
    showMessage("％から変換しました。");
  });
}

/* 小数 → 分数（最大6桁くらいまで） */
function decimalToFraction(decimal) {
  if (!isFinite(decimal)) return "";

  if (decimal === 0) {
    return "0/1";
  }

  const negative = decimal < 0;
  let x = Math.abs(decimal);

  // ある程度丸めておく
  x = parseFloat(x.toFixed(6));

  const s = x.toString();
  if (!s.includes(".")) {
    return (negative ? "-" : "") + s + "/1";
  }

  const [intStr, fracStrRaw] = s.split(".");
  let fracStr = fracStrRaw;
  if (fracStr.length > 6) {
    fracStr = fracStr.slice(0, 6);
  }

  const denominator = Math.pow(10, fracStr.length);
  let numerator = parseInt(intStr, 10) * denominator + parseInt(fracStr, 10);

  const g = gcd(numerator, denominator);
  numerator /= g;
  const denom = denominator / g;

  let result = numerator + "/" + denom;
  if (negative) {
    result = "-" + result;
  }
  return result;
}

/* 最大公約数 */
function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  if (!a && !b) return 1;
  while (b !== 0) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a || 1;
}

/* ---------------------------
 * 単位換算 共通関数
 * -------------------------*/
function createUnitConverter(config) {
  const valueInput = document.getElementById(config.valueId);
  const fromSelect = document.getElementById(config.fromId);
  const toSelect = document.getElementById(config.toId);
  const button = document.getElementById(config.buttonId);
  const resultEl = document.getElementById(config.resultId);

  if (!valueInput || !fromSelect || !toSelect || !button || !resultEl) {
    return;
  }

  function convert() {
    const raw = valueInput.value.trim();
    const value = parseFloat(raw);
    if (!isFinite(value)) {
      resultEl.textContent = "結果：数値を入力してください。";
      return;
    }

    const from = fromSelect.value;
    const to = toSelect.value;
    const factors = config.factors;

    if (!(from in factors) || !(to in factors)) {
      resultEl.textContent = "結果：単位の指定が正しくありません。";
      return;
    }

    const base = value * factors[from]; // 基準単位へ
    const converted = base / factors[to];

    const label =
      config.unitLabels && config.unitLabels[to]
        ? config.unitLabels[to]
        : to;

    resultEl.textContent = "結果：" + formatNumber(converted) + " " + label;
  }

  button.addEventListener("click", convert);
  valueInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      convert();
    }
  });
}

/* 長さ */
function setupLengthConverter() {
  createUnitConverter({
    valueId: "length-value",
    fromId: "length-from",
    toId: "length-to",
    buttonId: "length-convert-button",
    resultId: "length-result",
    factors: {
      mm: 0.001,
      cm: 0.01,
      m: 1,
      km: 1000
    },
    unitLabels: {
      mm: "mm",
      cm: "cm",
      m: "m",
      km: "km"
    }
  });
}

/* 面積 */
function setupAreaConverter() {
  createUnitConverter({
    valueId: "area-value",
    fromId: "area-from",
    toId: "area-to",
    buttonId: "area-convert-button",
    resultId: "area-result",
    // 基準を m² とした係数
    factors: {
      cm2: 0.0001, // (0.01)^2
      m2: 1,
      km2: 1000000 // (1000)^2
    },
    unitLabels: {
      cm2: "cm²",
      m2: "m²",
      km2: "km²"
    }
  });
}

/* 体積・容積 */
function setupVolumeConverter() {
  createUnitConverter({
    valueId: "volume-value",
    fromId: "volume-from",
    toId: "volume-to",
    buttonId: "volume-convert-button",
    resultId: "volume-result",
    // 基準を L とした係数
    factors: {
      ml: 0.001,
      l: 1,
      m3: 1000 // 1m³ = 1000L
    },
    unitLabels: {
      ml: "mL",
      l: "L",
      m3: "m³"
    }
  });
}

/* 質量 */
function setupMassConverter() {
  createUnitConverter({
    valueId: "mass-value",
    fromId: "mass-from",
    toId: "mass-to",
    buttonId: "mass-convert-button",
    resultId: "mass-result",
    // 基準を kg とした係数
    factors: {
      g: 0.001,
      kg: 1
    },
    unitLabels: {
      g: "g",
      kg: "kg"
    }
  });
}

/* 速さ */
function setupSpeedConverter() {
  createUnitConverter({
    valueId: "speed-value",
    fromId: "speed-from",
    toId: "speed-to",
    buttonId: "speed-convert-button",
    resultId: "speed-result",
    // 基準を m/s とした係数
    factors: {
      ms: 1,
      kmh: 1000 / 3600 // 1 km/h = 1000/3600 m/s
    },
    unitLabels: {
      ms: "m/s",
      kmh: "km/h"
    }
  });
}

/* ---------------------------
 * 数値フォーマット
 * -------------------------*/
function formatNumber(num) {
  if (!isFinite(num)) return String(num);

  const abs = Math.abs(num);

  // かなり大きい or かなり小さい場合は指数表示
  if (abs !== 0 && (abs >= 1e9 || abs < 1e-4)) {
    return num.toExponential(6).replace(/0+e/, "e").replace(/\.e/, "e");
  }

  // 小数点以下は最大10桁まで → 末尾の0を削る
  let s = num.toFixed(10);
  s = s.replace(/\.?0+$/, "");
  return s;
}
