const consentPopup = document.getElementById("cookieConsent");
const acceptButton = document.querySelector(".accept-button");
const closeButton = document.querySelector(".close-button");
const storageKey = "cookie-consent-accepted";

const hideConsentPopup = () => {
  consentPopup.classList.add("hidden");
};

if (localStorage.getItem(storageKey) === "true") {
  hideConsentPopup();
}

acceptButton.addEventListener("click", () => {
  localStorage.setItem(storageKey, "true");
  hideConsentPopup();
});

closeButton.addEventListener("click", hideConsentPopup);
