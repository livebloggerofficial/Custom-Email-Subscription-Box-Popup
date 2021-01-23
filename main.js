const emailSubscriptionOverlay = document.querySelector(".email-subscription-overlay");
const emailCloseButton = document.querySelector(".email-close-btn");

setTimeout(() => {
    if (!localStorage.getItem('popupClosed')) {
        emailSubscriptionOverlay.classList.add("active");
        localStorage.setItem('popupClosed', 'true');
    }
}, 5000);

emailCloseButton.addEventListener("click", () => {
    emailSubscriptionOverlay.classList.remove("active");
});