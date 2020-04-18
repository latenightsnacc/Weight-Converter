var weightValue = document.getElementById("weight-input").value;
var error = document.getElementById("input-error");
var grams = document.getElementById("grams");
var kilograms = document.getElementById("kilograms");
var ounces = document.getElementById("ounces");
var pounds = document.getElementById("pounds");

function checkValue(){
    if (isNaN(weightValue)){
        error.innerText = "Only numbers allowed!";
        grams.innerText = "";
        kilograms.innerText = "";
        ounces.innerText = "";
        pounds.innerText = "";
    }
}
function gm(){
   if (isNaN(weightValue)){
       checkValue();
   } else{
       grams.innerText = weightValue;
       kilograms.innerText = weightValue/1000;
       ounces.innerText = weightValue/28.35;
       pounds.innerText = weightValue/453.59237;
   } 
}

function kg(){
    if (isNaN(weightValue)){
        checkValue();
    } else{
        grams.innerText = weightValue * 1000;
        kilograms.innerText = weightValue;
        ounces.innerText = weightValue *  35.274;
        pounds.innerText = weightValue * 2.205;
    } 
}

function oz(){
    if (isNaN(weightValue)){
        checkValue();
    } else{
        grams.innerText = weightValue * 28.3495;
        kilograms.innerText = weightValue/35.274;
        ounces.innerText = weightValue;
        pounds.innerText = weightValue/16;
    } 
}

function lbs(){
    if (isNaN(weightValue)){
        checkValue();
    } else{
        grams.innerText = weightValue * 453.592;
        kilograms.innerText = weightValue/2.205;
        ounces.innerText = weightValue *  16;
        pounds.innerText = weightValue;
    } 
}

function clear(){
    error.innerText = "";
    grams.innerText = "";
    kilograms.innerText = "";
    ounces.innerText = "";
    pounds.innerText = "";
}
