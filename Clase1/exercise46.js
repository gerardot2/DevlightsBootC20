//Using let or const, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.
//Inside function fun1, assign 5 to oopsGlobal without using the var, let or const keywords.


let myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}