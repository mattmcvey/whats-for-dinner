
var suggestedFood = document.querySelector('.you-should-make');
var letsCookButton = document.querySelector(".lets-cook-button");
var cookpot = document.querySelector(".cookpot");
var rightBox = document.querySelector(".right-box");
var sidesButton = document.querySelector("#choice-1");
var mainsButton = document.querySelector("#choice-2");
var dessertsButton = document.querySelector("#choice-3");
var entireButton = document.querySelector("#choice-4");
var bottomNav = document.querySelector(".bottom-nav");
var addRecipeButton = document.querySelector(".add-recipe-button");
var recipeType = document.querySelector("#left-input");
var recipeName = document.querySelector("#right-input");
var addNewButton = document.querySelector(".add-new");
var submitButton = document.querySelector(".submit");
var submitInput = document.querySelector("#name");
var centerBoxes = document.querySelector(".center-page-boxes");
var loginBox = document.querySelector(".login");
var topBanner = document.querySelector(".top-banner");
var loginBanner = document.querySelector(".login-name");

addRecipeButton.addEventListener('click', makeBottomNavAppear);
letsCookButton.addEventListener('click', checkingRadioButtons);
addNewButton.addEventListener('click', addRecipe);
submitButton.addEventListener('click', submitLoginName);

function addRecipe() {
  event.preventDefault();
  var lowerCaseType = recipeType.value.toLowerCase()
  if(lowerCaseType === "side"){
    sides.push(recipeName.value)
    rightBox.innerHTML = `
    <h2>You should make:</h2>
    <h3>${recipeName.value}!</h3>`
  } else if(lowerCaseType === "main dish"){
    mains.push(recipeName.value)
    rightBox.innerHTML = `
    <h2>You should make:</h2>
    <h3>${recipeName.value}!</h3>`
  } else if(lowerCaseType === "dessert"){
    desserts.push(recipeName.value)
    rightBox.innerHTML = `
    <h2>You should make:</h2>
    <h3>${recipeName.value}!</h3>`
  } else {
    rightBox.innerHTML = `
      <h2>ERROR! Recipe Type: ${recipeType.value} is not a valide type! Please choose from radio button selections.</h2>
      `
  }
}

function makeBottomNavAppear() {
  bottomNav.classList.remove("hidden")
}

function checkingRadioButtons() {
  event.preventDefault();
  if(sidesButton.checked){
    rightBox.innerHTML = `
      <h2>You should make:</h2>
      <h3>${sides[getRandomIndex(sides)]}!
      `
  }else if(mainsButton.checked){
    rightBox.innerHTML = `
      <h2>You should make:</h2>
      <h3>${mains[getRandomIndex(mains)]}!
      `
  }else if(dessertsButton.checked){
    rightBox.innerHTML = `
      <h2>You should make:</h2>
      <h3>${desserts[getRandomIndex(desserts)]}!
      `
  }else if(entireButton.checked) {
    rightBox.innerHTML = `
      <h2>You should make:</h2>
      <h3>${sides[getRandomIndex(sides)]}!</h3>
      <h3>${mains[getRandomIndex(mains)]}!</h3>
      <h3>${desserts[getRandomIndex(desserts)]}!</h3>
      `
  }
}

function submitLoginName() {
  event.preventDefault();
  var name = submitInput.value;
  addRecipeButton.classList.remove("hidden");
  centerBoxes.classList.remove("hidden");
  loginBox.classList.add("hidden");
  loginBanner.innerText = `
    Welcome, ${name}! What's for dinner tonight?
  `
}


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
