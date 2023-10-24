function displayProtein(){

    // let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    // let age = document.getElementById("age").value;
    let activityLevel = document.getElementById("activityLevel").value;
    // let submitButton = document.querySelector(".submit");
    let result = document.querySelector(".result");


    let proteins;
    if(activityLevel == 0){
        proteins = weight * 0.8;
    }
    else if(activityLevel == 1){
        proteins = weight * 1.8;
    }
    console.log(proteins);
    result.innerHTML = `Protein intake should be ${proteins} grams`;
}