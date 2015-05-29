/**
* Created with Drop Calc.
* User: Chavez-Mendez
* Date: 2015-03-06
* Time: 06:28 PM
* To change this template use Tools | Templates.
*/

var button = document.getElementById("submitButton");

button.addEventListener("click", doMath);
 
    var num1 = document.getElementById('Number1');

    var num2 = document.getElementById('Number2');

function doMath() {

       if (document.getElementById("DropdownMenu1") == "+"){ /*Addition*/
        var answer = parseInt(num1.value) + parseInt(num2.value);
           document.getElementById('Answer').innerHTML = answer;
*/ /
} else if (document.getElementById("DropdownMenu1") == "-"){ /*Subtraction*/
        var answer = parseInt(num1.value) - parseInt(num2);
           document.getElementById('Answer').innerHTML = answer;

} else if (document.getElementById("DropdownMenu1") == "+"){ /*Multiplication*/
        var answer = parseInt(num1.value) * parseInt(num2);
           document.getElementById('Answer').innerHTML = answer;

} else if (document.getElementById("DropdownMenu1") == "/"){ /*Devision*/
        var answer = parseInt(num1.value) / parseInt(num2);
           document.getElementById('Answer').innerHTML = answer;
    }
}