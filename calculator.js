var addBtn = document.getElementById("add");
var subtractBtn = document.getElementById("subtract");
var multiplyBtn = document.getElementById("multiply");
var divideBtn = document.getElementById("divide");

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
output.addEventListener("click", output);


function add(user1, user2) {
  var input1 = parseInt(document.getElementById("user1").value);
  var input2 = parseInt(document.getElementById("user2").value);
  var answer = document.getElementById("output")
  output.value = (input1 + input2);
}

function subtract(user1, user2) {
  var input1 = parseInt(document.getElementById("user1").value);
  var input2 = parseInt(document.getElementById("user2").value);
  var output = document.getElementById("output");
  output.value = (input1 - input2);

}

function multiply(user1, user2) {
  var input1 = parseInt(document.getElementById("user1").value);
  var input2 = parseInt(document.getElementById("user2").value);
  var output = document.getElementById("output");
  output.value = (input1 * input2);
}

function divide(user1, user2) {
  var input1 = parseInt(document.getElementById("user1").value);
  var input2 = parseInt(document.getElementById("user2").value);
  var output = document.getElementById("output");
  output.value = (input1 / input2);
}



