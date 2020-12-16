
var suggestedFood = document.querySelector('.you-should-make')
var letsCookButton = document.querySelector(".lets-cook-button")

letsCookButton.addEventListener('click', radioButtons)

function radioButtons() {
  event.preventDefault();
  var checkedDish;
  var foods = document.querySelectorAll("input[name='food']");
  for(var i = 0; i < foods.length; i++){
    if(foods[i].checked){
      checkedDish = foods[i].value
      console.log(checkedDish)
      return checkedDish;
    }
  }
}
