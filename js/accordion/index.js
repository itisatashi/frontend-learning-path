const accordion = document.querySelector("[data-accordion]");
const triggers = accordion.querySelectorAll("[data-accordion-trigger]");

triggers.forEach((trigger) => {
  trigger.addEventListener("click", function () {
    const panelId = trigger.getAttribute("aria-controls");
    const panel = document.getElementById(panelId);
    const isOpen = trigger.getAttribute("aria-expanded") === "true";

    triggers.forEach((currentTrigger) => {
      const currentPanelId = currentTrigger.getAttribute("aria-controls");
      const currentPanel = document.getElementById(currentPanelId);

      currentTrigger.setAttribute("aria-expanded", "false");
      currentPanel.hidden = true;
      currentTrigger.closest(".accordion__item").classList.remove("is-open");
    });

    if (!isOpen) {
      trigger.setAttribute("aria-expanded", "true");
      panel.hidden = false;
      trigger.closest(".accordion__item").classList.add("is-open");
    }
  });
});
