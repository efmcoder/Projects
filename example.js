//Constructor: Name of constructor Has to be a capital letter
var Person = function (name, yearOfBirth, job){
this.name = name;
this.yearOfBirth = yearOfBirth;
this.job = job;

}

//Create a function PROTOTYPE to calculate age that will be inherited and used
//by all objects
Person.prototype.calculateAge = function(){
  console.log(2019 - this.yearOfBirth);
}

//PROTOTYPE II
Person.prototype.lastName = "Wainaina";

var child = new Person("Cynthia", 1998, "intern");
var child1 = new Person("Tasha", 2004, "student");
var child2 = new Person("Tanya", 2007, "singer");
/*
console.log(child.calculateAge());
console.log(child1.calculateAge());
console.log(child2.calculateAge());
*/
console.log(child);
console.log(child1);
console.log(child2);

console.log(child.name);

console.log(child.hasOwnProperty("job")); //true
console.log(child.hasOwnProperty("lastName")); //false because this is not the child's own property
console.log(child instanceof Person); //true
