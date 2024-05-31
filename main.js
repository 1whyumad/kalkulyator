var firstValue = 0;
var secondValue = 0;
var result = 0;

var func;

var isFirstValue = true;
var isEnd = false;

const fieldID = "field-text";

document.addEventListener("DOMContentLoaded", () => {
    changeField(firstValue);
  });

function countValue(func, value1, value2) {
    if (func == "sum") {
        result = value1 + value2;       
    } else if (func == "sub") {
        result = value1 - value2;
    } else if (func == "div") {
        result = value1 / value2;
    } else {
        result = value1 * value2;
    }

    changeField(result);
    isFirstValue = true;
    isEnd = true;
    firstValue = 0;
    secondValue = 0;
}

function onClickSum() {
    if(isEnd) {
        countValue(func, result, secondValue)
    } else if (!isFirstValue) {
        countValue(func, firstValue, secondValue);    
    } else {
        isFirstValue = false;   
    }

    func = "sum";
}

function onClickEqual() {
    if (!isFirstValue) {
        countValue(func, firstValue, secondValue);    
    } 
}

function onClickSub() {
    if(isEnd) {
        countValue(func, result, secondValue)
    } else
    if (!isFirstValue) {
        countValue(func);    
    } else {
        isFirstValue = false;   
    } 

    func = "sub";
}

function onClickDiv() {
    if(isEnd) {
        countValue(func, result, secondValue)
    } else if (!isFirstValue) {
        countValue(func);    
    } else {
        isFirstValue = false;   
    } 

    func = "div";
}

function onClickMul() {
    if(isEnd) {
        countValue(func, result, secondValue)
    } else if (!isFirstValue) {
        countValue(func);    
    }  else {
        isFirstValue = false;   
    }

    func = "mul";
}

function changeField(value) {
    document.getElementById(fieldID).textContent = value;
}


function addZero() {

    isEnd = false;

    if(isFirstValue) {

        if (firstValue == 0) {
            str = "" + 0;
        } else {
            str = "" + firstValue + 0;
        }

        firstValue = parseInt(str);

        changeField(firstValue)

    } else {

        if (secondValue == 0) {
            str = "" + 0;
        } else {
            str = "" + secondValue + 0;
        }

        secondValue = parseInt(str);

        changeField(secondValue)

    }
}

function addOne() {
    isEnd = false;

    if(isFirstValue) {

        if (firstValue == 0) {
            str = "" + 1;
        } else {
            str = "" + firstValue + 1;
        }

        firstValue = parseInt(str);

        changeField(firstValue)

    } else {

        if (secondValue == 0) {
            str = "" + 1;
        } else {
            str = "" + secondValue + 1;
        }

        secondValue = parseInt(str);

        changeField(secondValue)

    }
}

function addTwo() {
    isEnd = false;

    if(isFirstValue) {

        if (firstValue == 0) {
            str = "" + 2;
        } else {
            str = "" + firstValue + 2;
        }

        firstValue = parseInt(str);

        changeField(firstValue)

    } else {

        if (secondValue == 0) {
            str = "" + 2;
        } else {
            str = "" + secondValue + 2;
        }

        secondValue = parseInt(str);

        changeField(secondValue)

    }
}

function addThree() {
    isEnd = false;

    if(isFirstValue) {

        if (firstValue == 0) {
            str = "" + 3;
        } else {
            str = "" + firstValue + 3;
        }

        firstValue = parseInt(str);

        changeField(firstValue)

    } else {

        if (secondValue == 0) {
            str = "" + 3;
        } else {
            str = "" + secondValue + 3;
        }

        secondValue = parseInt(str);

        changeField(secondValue)

    }
}

function addFour() {

    isEnd = false;

    if(isFirstValue) {

        if (firstValue == 0) {
            str = "" + 4;
        } else {
            str = "" + firstValue + 4;
        }

        firstValue = parseInt(str);

        changeField(firstValue)

    } else {

        if (secondValue == 0) {
            str = "" + 4;
        } else {
            str = "" + secondValue + 4;
        }

        secondValue = parseInt(str);

        changeField(secondValue)

    }
}


function addFive() {
    isEnd = false;

    if(isFirstValue) {

        if (firstValue == 0) {
            str = "" + 5;
        } else {
            str = "" + firstValue + 5;
        }

        firstValue = parseInt(str);

        changeField(firstValue)

    } else {

        if (secondValue == 0) {
            str = "" + 5;
        } else {
            str = "" + secondValue + 5;
        }

        secondValue = parseInt(str);

        changeField(secondValue)

    }
}

function addSix() {
    isEnd = false;

    if(isFirstValue) {

        if (firstValue == 0) {
            str = "" + 6;
        } else {
            str = "" + firstValue + 6;
        }

        firstValue = parseInt(str);

        changeField(firstValue)

    } else {

        if (secondValue == 0) {
            str = "" + 6;
        } else {
            str = "" + secondValue + 6;
        }

        secondValue = parseInt(str);

        changeField(secondValue)

    }
}

function addSeven() {
    isEnd = false;

    if(isFirstValue) {

        if (firstValue == 0) {
            str = "" + 7;
        } else {
            str = "" + firstValue + 7;
        }

        firstValue = parseInt(str);

        changeField(firstValue)

    } else {

        if (secondValue == 0) {
            str = "" + 7;
        } else {
            str = "" + secondValue + 7;
        }

        secondValue = parseInt(str);

        changeField(secondValue)

    }
}

function addEight() {
    isEnd = false;

    if(isFirstValue) {

        if (firstValue == 0) {
            str = "" + 8;
        } else {
            str = "" + firstValue + 8;
        }

        firstValue = parseInt(str);

        changeField(firstValue)

    } else {

        if (secondValue == 0) {
            str = "" + 8;
        } else {
            str = "" + secondValue + 8;
        }

        secondValue = parseInt(str);

        changeField(secondValue)

    }
}

function addNine() {
    isEnd = false;

    if(isFirstValue) {

        if (firstValue == 0) {
            str = "" + 9;
        } else {
            str = "" + firstValue + 9;
        }

        firstValue = parseInt(str);

        changeField(firstValue)

    } else {

        if (secondValue == 0) {
            str = "" + 9;
        } else {
            str = "" + secondValue + 9;
        }

        secondValue = parseInt(str);

        changeField(secondValue)

    }
}