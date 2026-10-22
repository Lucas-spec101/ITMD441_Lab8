//script.js 10.11.2026
// Lucas Callahan - Lab 7

//Console Test
const name = "Ada";
let labsCompleted = 6;
let isEnrolled = true;

let items = 5;

labsCompleted = labsCompleted + 1;
console.log(`${name} has completed ${labsCompleted} labs.`);
console.log(`You have ${items} items.`);

//File scripting
const likeBtn = document.querySelector("#like-btn");
const likeCount = document.querySelector("#like-count");

let likes = 0;

likeBtn.addEventListener("click", function() {
  likes = likes + 1;
  likeCount.textContent = `${likes} likes`;
});

const themeBtn = document.querySelector("#theme-btn");

themeBtn.addEventListener("click", function() {
  document.body.classList.toggle("dark");
});