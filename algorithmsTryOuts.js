var x = [2,7,4,6,5,8,1,0,3,9];

console.log(x);
console.log(x.length);

function arrange(arr){
  return arr.sort(function (a,b){
    return a - b;
  });
}
console.log("Arrange array: " + arrange(x)); //this works even when you include 2 digit numbers

console.log("Sort array: " + x.sort()); //this doesn't work for 2-digit numbers
console.log("reverse array: " + x.reverse()); //this doesn't work for 2-digit numbers

function disarrange(arr){
  return arr.sort(function (a,b){
    return a < b;
  });
}
console.log("Reverse array: " + disarrange(x)); //this doesn't work for 2-digit numbers

//USE ALL POSSIBLE FUNCTIONS
console.log(
  x.sort()

);
