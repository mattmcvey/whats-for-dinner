
var suggestedFood = document.querySelector('.you-should-make');
var letsCookButton = document.querySelector(".lets-cook-button");
var cookpot = document.querySelector(".cookpot");
var rightBox = document.querySelector(".right-box");
var sidesButton = document.querySelector("#choice-1");
var mainsButton = document.querySelector("#choice-2");
var dessertsButton = document.querySelector("#choice-3");
var entireButton = document.querySelector("#choice-4");

letsCookButton.addEventListener('click', checkingRadioButtons)

function checkingRadioButtons() {
  event.preventDefault();
  if(sidesButton.checked){
    rightBox.innerHTML = `
      <h2>You should make:</h2>
      <h3>${sides[getRandomIndex(sides)]}!`
  }else if(mainsButton.checked){
    rightBox.innerHTML = `
      <h2>You should make:</h2>
      <h3>${mains[getRandomIndex(mains)]}!`
  }else if(dessertsButton.checked){
    rightBox.innerHTML = `
      <h2>You should make:</h2>
      <h3>${desserts[getRandomIndex(desserts)]}!`
  }
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
