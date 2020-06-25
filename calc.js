document.getElementById("input1").value = "0";
para1 = 0;
para2 = 0;
operationStatus = false;
lastOperator = ""


function press1(str) {
    var a = document.getElementById("input1");
    if(a.value=="0"){        
        a.value = str;
    }
    else{
        a.value += str;
    }
    
}



function remove() {
    var a = document.getElementById("input1");
    var display1 = a.value.toString()
    var display2 = ""
    // alert(display1)
    for (var i = 0; i < display1.length; i++) {
        // alert(display1[i])
        if (i == (display1.length - 1)) {
            continue
        }
        else {
            display2 += display1[i]
        }


    }
    a.value = display2
}





function operationStart(operator1) {
    var a = document.getElementById("input1");
    if (operationStatus == false) {
        para1 = parseInt(a.value);
        a.value = "0";
        operationStatus = true;
        if (operator1 == "=") {

        }
        else {
            lastOperator = operator1;

        }        
    }
    else {
        para2 = parseInt(a.value);
        operationStatus = false;
        if (lastOperator == "+") {
            a.value = para1 + para2;
            para1 = 0;
            para2 = 0;
        }
        else if (lastOperator == "-") {
            a.value = para1 - para2;
            para1 = 0;
            para2 = 0;

        }
        else if (lastOperator == "X") {
            a.value = para1 * para2;
            para1 = 0;
            para2 = 0;
        }
        else if (lastOperator == "/") {
            a.value = para1 / para2;
            para1 = 0;
            para2 = 0;
        }


    }

}



function clearScreen() {
    document.getElementById("input1").value = "0";
}



function clearWhole() {
    para1 = 0;
    para2 = 0;
    operationStatus = false;
    lastOperator = ""
    document.getElementById("input1").value = "0";
}