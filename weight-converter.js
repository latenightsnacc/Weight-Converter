var weightValue = document.getElementById("weight-input");
var error = document.getElementById("input-error");
var grams = document.getElementById("grams");
var kilograms = document.getElementById("kilograms");
var ounces = document.getElementById("ounces");
var pounds = document.getElementById("pounds");

function checkValue(){
    if (isNaN(weightValue.value)){
        error.innerHTML = "Only numbers allowed!";
        grams.innerHTML = "";
        kilograms.innerHTML = "";
        ounces.innerHTML = "";
        pounds.innerHTML = "";
    }
}
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

function clr(){
    weightValue.value = "";
    error.innerHTML = "";
    grams.innerHTML = "";
    kilograms.innerHTML = "";
    ounces.innerHTML = "";
    pounds.innerHTML = "";
}
