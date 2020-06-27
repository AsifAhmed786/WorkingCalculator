document.getElementById("input1").value = "0";
var para1 = 0;
var para2 = 0;
var operationStatus = false;
var lastOperator = ""
var clickStatus = false;

// for numeric button press if zero then no digit prcoeding the zero 
function press1(str) {
    var a = document.getElementById("input1");
    if(clickStatus==false){
        a.value = "0"
    }
    else{

    }


    if(a.value=="0"){        
        a.value = str;
    }
    else{
        a.value += str;
    }
    clickStatus = true;
    
}
function pressDot(){
    var a = document.getElementById("input1");
    var str1 = a.value.toString();
    if(str1.indexOf(".")!=-1){        
        // a.value = str;
    }
    else{
        a.value += ".";
    }
    // clickStatus = true;
    
}


// for delete function
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
    if(display2===""){
        a.value = "0"
    }
    else{
        a.value = display2
    }
    
}




// recording the status of operation
function operationStart(operator1) {
    clickStatus = false;
    var a = document.getElementById("input1");
    if (operationStatus == false) {
        para1 = parseFloat(a.value);
        a.value = "0";
        operationStatus = true;
        lastOperator = operator1;
        if (operator1 == "=") {

        }
        else {
            // lastOperator = operator1;
        }        
    }
    else {
        if (operator1 == "=") {

        }
        else {
            // lastOperator = operator1;

        }        
        para2 = parseFloat(a.value);
        // operationStatus = false;
        if (lastOperator == "+") {
            // lastoperator = operator1;
            para1 = parseFloat(para1 + para2);
            a.value = para1;            
            para2 = 0;
            // lastoperator = "";
        }
        else if (lastOperator == "-") {
            // lastoperator = operator1;
            para1 = parseFloat(para1 - para2);
            a.value = para1;            
            para2 = 0;
            // lastoperator = "";

        }
        else if (lastOperator == "X") {
            // lastoperator = operator1;
            a.value = para1 * para2;
            para1 = para1 * para2;;
            para2 = 0;
            // lastoperator = "";
        }   
        else if (lastOperator == "/") {
            // lastoperator = operator1;
            para1 = parseFloat(para1 / para2);
            a.value = para1
            para2 = 0;            
            // lastoperator = "";
        }
        else if (opeartor1=="%"){
            lastoperator = operator1;
            para1 = 0;
            para2 = 0;
            a.value = para1/100;
        }
    }
    

}


// for clearing screen
function clearScreen() {
    document.getElementById("input1").value = "0";
}


// for clearing memory
function clearWhole() {
    para1 = 0;
    para2 = 0;
    operationStatus = false;
    lastOperator = ""
    document.getElementById("input1").value = "0";
    // alert(para1,para2)
}