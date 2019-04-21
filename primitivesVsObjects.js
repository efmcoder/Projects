//Primitives
var a = 23;
var b = a;
console.log(a); //answer = 23
console.log(b); //answer = 23
a = 46;
console.log(a); //answer = 46
console.log(b); //answer = 23

//Objects
var obj1 = {
  name: "John",
  age: 26
};

var obj2 = obj1;

obj1.age = 30;
console.log(obj1); //answer = 30
console.log(obj2); //answer = 30

//Functions
var age = 27;
var obj = {
  name: "James",
  city: "Orlando"
};
console.log(age);
console.log(obj.city);
console.log(obj.name);

function change(a, b, c) {
  a = 30;
  b.city = "San Francisco";
  //c.name = "Noah";
}
change (age, obj);
console.log(age);
console.log(obj.city);
console.log(obj.name);
