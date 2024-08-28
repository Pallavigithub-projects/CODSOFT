window.onload = function() {
    var input = document.getElementById("inputBox");
    var container = document.getElementById("container");

    container.addEventListener("click", function(e) {
        buttonClick(e.target.id);
    });

    var calc = document.getElementById("Button=");
    calc.addEventListener("click",calculate);

    var C = document.getElementById("ButtonAC");
    C.addEventListener("click", erase);

    function buttonClick(buttonId) {
        if((buttonId != "ButtonAC") && (buttonId != "Button=")) {
            var button = document.getElementById(buttonId);
             var p = buttonId;
             p = p.replace("Button", "");
             entries(p);
        }
    }
    

    function entries(p) {
        input.value += p;
        
    }

    function calculate() {
        if(input.value == ".") {
            alert("Please Enter a Mathematical Expression");
        }
        input.value = eval(input.value);
    }

    function erase() {
        input.value = "";
    }
};