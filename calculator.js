var input1 = document.getElementById("user1");
var input2 = document.getElementById("user2");
var output = document.getElementById("output");
var addBtn = document.getElementById("add");
var subtractBtn = document.getElementById("subtract");
var multiplyBtn = document.getElementById("multiply");
var divideBtn = document.getElementById("divide");

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
output.addEventListener("click", output);


function userinput() {

}

function add(c,d) {
  var added = input1 + input2
  console.log("clicked add", add)
}

function subtract() {
  console.log("clicked subtract")
}

function multiply() {
  console.log("clicked multiply")
}

function divide() {
  console.log("clicked divide")
}