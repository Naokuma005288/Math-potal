document.addEventListener("DOMContentLoaded", function () {
  if (typeof setupGradeTabs === "function") setupGradeTabs();
  if (typeof setupToolToggles === "function") setupToolToggles();

  if (typeof setupCalculator === "function") setupCalculator();
  if (typeof setupFractionTool === "function") setupFractionTool();

  if (typeof setupLengthConverter === "function") setupLengthConverter();
  if (typeof setupAreaConverter === "function") setupAreaConverter();
  if (typeof setupVolumeConverter === "function") setupVolumeConverter();
  if (typeof setupMassConverter === "function") setupMassConverter();
  if (typeof setupSpeedConverter === "function") setupSpeedConverter();

  if (typeof setupTopicDetailModal === "function") setupTopicDetailModal();
});
