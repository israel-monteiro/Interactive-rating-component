"use strict";
const ratingButtons = document.querySelectorAll(".rating-card__button");
const submitButton = document.getElementById("submit-rating");
const ratingCard = document.getElementById("rating-card");
const thankYouCard = document.getElementById("thank-you-card");
const selectedRating = document.getElementById("selected-rating");
let selectedScore = "";
ratingButtons.forEach((button) => {
    button.addEventListener("click", () => addSelection(button));
});
function addSelection(button) {
    ratingButtons.forEach((b) => {
        b.classList.remove("selected");
    });
    button.classList.add("selected");
    selectedScore = button.dataset.rating ?? "";
    selectedRating.textContent = selectedScore;
}
submitButton?.addEventListener("click", () => submitRating());
function submitRating() {
    if (!selectedScore) {
        alert("Escolha uma nota!");
        return;
    }
    ratingCard?.classList.add("hidden");
    thankYouCard?.classList.remove("hidden");
}
//# sourceMappingURL=main.js.map