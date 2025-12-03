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

function setupAreaConverter() {
  createUnitConverter({
    valueId: "area-value",
    fromId: "area-from",
    toId: "area-to",
    buttonId: "area-convert-button",
    resultId: "area-result",
    // 基準：m²
    factors: {
      cm2: 0.0001,
      m2: 1,
      km2: 1000000
    },
    unitLabels: {
      cm2: "cm²",
      m2: "m²",
      km2: "km²"
    }
  });
}

function setupVolumeConverter() {
  createUnitConverter({
    valueId: "volume-value",
    fromId: "volume-from",
    toId: "volume-to",
    buttonId: "volume-convert-button",
    resultId: "volume-result",
    // 基準：L
    factors: {
      ml: 0.001,
      l: 1,
      m3: 1000
    },
    unitLabels: {
      ml: "mL",
      l: "L",
      m3: "m³"
    }
  });
}

function setupMassConverter() {
  createUnitConverter({
    valueId: "mass-value",
    fromId: "mass-from",
    toId: "mass-to",
    buttonId: "mass-convert-button",
    resultId: "mass-result",
    // 基準：kg
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

function setupSpeedConverter() {
  createUnitConverter({
    valueId: "speed-value",
    fromId: "speed-from",
    toId: "speed-to",
    buttonId: "speed-convert-button",
    resultId: "speed-result",
    // 基準：m/s
    factors: {
      ms: 1,
      kmh: 1000 / 3600
    },
    unitLabels: {
      ms: "m/s",
      kmh: "km/h"
    }
  });
}
