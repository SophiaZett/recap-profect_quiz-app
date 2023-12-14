// phew… not a lot going on here. Please add some code!

// bookmark toggle button
const bookmarkButton = document.querySelector('[data-js="bookmark-button"]');

bookmarkButton.addEventListener("click", () => {
    bookmarkButton.classList.toggle("bookmark--active");
})

// show answer button

const showAnswerButton = document.querySelector('[data-js="show-answer"]');
const answer = document.querySelector('[data-js="cardAnswer"]');

showAnswerButton.addEventListener("click", () => {
    answer.classList.toggle("card__answer--active");
})