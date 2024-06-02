var firstValue = 0;
var secondValue = 0;
var result = "0";

var func;

var isFirstValue = true;

const fieldID = "field-text";

document.addEventListener("DOMContentLoaded", () => {
    outputResult();
  });

function countValue(func) {
    outputLogs("countValue(" + func + ")");

    if (func == "sum") {
        result = firstValue + secondValue;       
    } else if (func == "sub") {
        result = firstValue - secondValue;
    } else if (func == "div") {
        if (secondValue == 0) {
            alert("Так нельзя. *cancel*");
            onClickCancel();
            return;
        }
        result = firstValue / secondValue;
    } else {
        result = firstValue * secondValue;
    }

    firstValue = result;
    secondValue = 0;

    result = "" + result;
}

function onClickSum() {
    outputLogs("onClickEqual()");

     if (!isFirstValue) {
        countValue(func);    
    } else {
        isFirstValue = false;
        
    }

    result += " + ";

    func = "sum";
    outputResult();
}

function onClickEqual() {
    outputLogs("onClickEqual()");

    if (!isFirstValue) {
        countValue(func);    
    }
    
    isFirstValue = true;

    outputResult();
}

function onClickSub() {
    outputLogs("onClickSub()");

    if (!isFirstValue) {
        countValue(func);    
    } else {
        isFirstValue = false;  
    } 

    result += " - "; 

    func = "sub";
    outputResult();
}

function onClickDiv() {
    outputLogs("onClickDiv()");

    if (!isFirstValue) {
        countValue(func);    
    } else {
        isFirstValue = false;   
    }

    result += " / ";

    func = "div";
    outputResult();
}

function onClickMul() {
    outputLogs("onClickMul()");

    if (!isFirstValue) {
        countValue(func);    
    }  else {
        isFirstValue = false;  
    }

    result += " * "; 

    func = "mul";
    outputResult();
}

function onClickCancel() {
    outputLogs("onClickCancel()");

    firstValue = 0;
    secondValue = 0;
    result = 0;
    isFirstValue = true;

    outputResult();
}

function outputResult() {
    outputLogs("outputResult()");

    document.getElementById(fieldID).textContent = result;
    
}

// deprecated
function changeField(value) {
    document.getElementById(fieldID).textContent = value;
}

function addNumber(number) {
    outputLogs("addNumber(" + number + ")");

    if(isFirstValue) {

        if (firstValue == 0) {
            str = "" + number;
        } else {
            str = "" + firstValue + number;
        }

        firstValue = parseInt(str);

    } else {

        if (secondValue == 0) {
            str = "" + number;
        } else {
            str = "" + secondValue + number;
        }

        secondValue = parseInt(str);

    } 
    
    if (result == "0") {
        result = "" + number;    
    } else {
        result = "" + result + number;
    }    

    outputResult();
}

function outputLogs(functionName) {
    console.log(functionName);
    console.log(firstValue + ", type: " + typeof(firstValue));
    console.log(secondValue + ", type: " + typeof(secondValue));
    console.log(result + ", type: " + typeof(result));
    console.log(isFirstValue + ", type: " + typeof(isFirstValue));
    //console.log(isResult + ", type: " + typeof(isResult));
    console.log(func + ", type: " + typeof(func));
    console.log("==============================================");    
}
