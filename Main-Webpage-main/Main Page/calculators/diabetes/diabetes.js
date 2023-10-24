function displayResult() {
  let sex;
  if (document.getElementById("male").checked) {
    sex = 0;
  } else if (document.getElementById("female").checked) {
    sex = 1;
  }

  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;
  let age = document.getElementById("age").value;
  let familyHistory = document.getElementById("FamilyHistory").value;
  let ethnicity = document.getElementById("Ethnicity").value;
  let fastingGlucose = document.getElementById("fastingGlucose").value;
  let bloodPressure = document.getElementById("SBP").value;
  let cholesterol = document.getElementById("HDL").value;
  let submitButton = document.querySelector(".submit");
  let result = document.querySelector(".result");

  let bmi = weight / Math.pow(height, 2);
  let risk;
  console.log(ethnicity);
  risk =
    Number(
      100 /
        (1 +
          Math.exp(
            -1 *
              (0.028 * age +
                0.661 * sex +
                0.412 * ethnicity +
                0.079 * fastingGlucose +
                0.018 * bloodPressure -
                0.039 * cholesterol +
                0.07 * bmi +
                0.481 * familyHistory -
                13.415)
          ))
    ).toFixed(2) * 1;

  result.innerHTML = `Risk % of Diabetes: ${risk}%`;
}
