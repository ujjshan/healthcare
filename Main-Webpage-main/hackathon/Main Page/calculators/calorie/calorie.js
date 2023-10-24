function displayCalories() {
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;
  let age = document.getElementById("age").value;
  let activityLevel = document.getElementById("activityLevel").value;
  let submitButton = document.querySelector(".submit");
  let result = document.querySelector(".result");

  let calories = [];
  if (document.getElementById("male").checked) {
    calories = Number(10 * weight + 6.25 * height - 5 * age + 5).toFixed(0);
  } else if (document.getElementById("female").checked) {
    calories = Number(10 * weight + 6.25 * height - 5 * age - 161).toFixed(0);
  }

  result.innerHTML = `Calorie Count is ${calories} kcal/day`;
}
