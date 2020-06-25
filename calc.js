function press1(str){
    var a = document.getElementById("input1");
    a.value += str;
}

function remove(){
    var a = document.getElementById("input1");
    var display1 = a.value.toString()
    var display2 = ""
    // alert(display1)
    for (var i = 0; i < display1.length; i++){
        // alert(display1[i])
        if(i==(display1.length-1)){
            continue
        }
        else{
            display2+=display1[i]
        }
        

    }
    a.value = display2
}