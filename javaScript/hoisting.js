//+++++++++++++++++++++++++++++++Variables and Function+++++++++++++++++++++++++++++++++++++++++++++++//
getName();  //Namaste_JavaScript
//getName2(); //getName2 is not a function
// getName3();   // getName3 is not a function
console.log(x);
console.log(getName());
var x = 10;

function getName() {
  // here it behave like a function
  console.log("Namaste_JavaScript");
}

var getName3 = function () {
  // it beheve like variable
  console.log(`hello kajol`);
};

var getName2 = () => {
  // hear also behave like variable
  console.log(`hello kajol`);
};

// when we use arrow function it beheave another variable, in memory execution phase it reserved as variable  hoisting is
