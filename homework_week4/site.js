//add

function add( num1, num2){

  var r = parseFloat(num1) + parseFloat(num2)
  addString = num1 + '+' + num2 + '=' + r;

  onclick=function(){

        document.getElementById('result').innerHTML=addString;
  }
}

//sub

function substract( num1, num2){

  var r = parseFloat(num1) - parseFloat(num2)
  subString = num1 + '-' + num2 + '=' + r;

  onclick=function(){
        document.getElementById('result').innerHTML=subString;
  }
}

//mult

function multiply( num1, num2){

  var r = parseFloat(num1) * parseFloat(num2)
  multString = num1 + '*' + num2 + '=' + r;

  onclick=function(){
        document.getElementById('result').innerHTML=multString;
  }
}

//div

function divide( num1, num2){

  var r = parseFloat(num1) / parseFloat(num2)
  divString = num1 + '/' + num2 + '=' + r;

  onclick=function(){
        document.getElementById('result').innerHTML=divString;
  }
}

function populatehtml (operation){
var input1 = document.getElementById('first').value;
var input2 = document.getElementById('second').value;
var output = operation(input1, input2);
        if (input1 == ' ' || input2 == ' '){
        document.getElementById('result').innerHTML = 'missing value'
      } else { 
        document.getElementById('result').innerHTML += output;
      }
 }

document.getElementById('add').onclick = function(){populatehtml(add)};
document.getElementById('substract').onclick = function(){populatehtml(substract)};
document.getElementById('multiply').onclick = function(){populatehtml(multiply)};
document.getElementById('divide').onclick = function (){populatehtml(divide)};
