var weightValue = document.getElementById("weight-input");
var error = document.getElementById("input-error");
var grams = document.getElementById("grams");
var kilograms = document.getElementById("kilograms");
var ounces = document.getElementById("ounces");
var pounds = document.getElementById("pounds");

// please do well to comment your codes well and write good commit messages for your git

// This function checks if input set in weightValue is a number and returns an error message if true. it sets all other inputs to empty string
function checkValue(){
    if (isNaN(weightValue.value)){
        error.innerHTML = "Only numbers allowed!";
        grams.innerHTML = "";
        kilograms.innerHTML = "";
        ounces.innerHTML = "";
        pounds.innerHTML = "";
    }
}

// this function checks if an input set is a number, then converts this number to a gram equivalent
function gm(){
   if (isNaN(weightValue.value)){
       checkValue();
   } else{
        error.innerHTML = weightValue.value + " grams";
       grams.innerHTML = weightValue.value;
       kilograms.innerHTML = weightValue.value/1000;
       ounces.innerHTML = weightValue.value/28.35;
       pounds.innerHTML = weightValue.value/453.59237;
   } 
}


// this function checks if an input set is a number, then converts this number to kilogram equivalent
function kg(){
    if (isNaN(weightValue.value)){
        checkValue();
    } else{
        error.innerHTML = weightValue.value + " kilograms";
        grams.innerHTML = weightValue.value * 1000;
        kilograms.innerHTML = weightValue.value;
        ounces.innerHTML = weightValue.value *  35.274;
        pounds.innerHTML = weightValue.value * 2.205;
    } 
}

// this function checks if an input set is a number, then converts this number to ounce equivalent
function oz(){
    if (isNaN(weightValue.value)){
        checkValue();
    } else{
        error.innerHTML = weightValue.value + " ounces";
        grams.innerHTML = weightValue.value * 28.3495;
        kilograms.innerHTML = weightValue.value/35.274;
        ounces.innerHTML = weightValue.value;
        pounds.innerHTML = weightValue.value/16;
    } 
}

// this function checks if an input set is a number, then converts this number to pounds equivalent
function lbs(){
    if (isNaN(weightValue.value)){
        checkValue();
    } else{
        error.innerHTML = weightValue.value + " pounds";
        grams.innerHTML = weightValue.value * 453.592;
        kilograms.innerHTML = weightValue.value/2.205;
        ounces.innerHTML = weightValue.value *  16;
        pounds.innerHTML = weightValue.value;
    } 
}

// this function clears all fields.
function clr(){
    weightValue.value = "";
    error.innerHTML = "";
    grams.innerHTML = "";
    kilograms.innerHTML = "";
    ounces.innerHTML = "";
    pounds.innerHTML = "";
}
