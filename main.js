
var suggestedFood = document.querySelector('.you-should-make');
var letsCookButton = document.querySelector(".lets-cook-button");
var cookpot = document.querySelector(".cookpot");
var rightBox = document.querySelector(".right-box");


letsCookButton.addEventListener('click', checkingRadioButtons)

function checkingRadioButtons() {
  event.preventDefault();
  var checkedDish;
  var foods = document.querySelectorAll("input[name='food']");
  for(var i = 0; i < foods.length; i++){
    if(foods[i].checked){
      checkedDish = foods[i].value;
      break;
    };
  };
  if(checkedDish === "side"){
    rightBox.innerHTML = `
      <h2>You should make:</h2>
      <h3>${sides[getRandomIndex(sides)]}!`
  } else if(checkedDish === "main-dish"){
    rightBox.innerHTML = `
      <h2>You should make:</h2>
      <h3>${mains[getRandomIndex(mains)]}!`
  } else if(checkedDish === "dessert"){
    rightBox.innerHTML = `
      <h2>You should make:</h2>
      <h3>${desserts[getRandomIndex(desserts)]}!`
  }
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
