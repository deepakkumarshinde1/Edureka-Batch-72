//alert("Hi"); // popup => predefined / system / native function

// test code or outputs ==> inBuild "console" => Object

// print testing data => console.log('abc')
// create error => console.error('message')
// create a warning => console.warn('message')

// "abc" => string
// 123 => number
// '2a' => string
// store this data we need variables => var abl

// var
var studentName = "Amar"; // string Type
var studentRollNo = 20; // number
var studentMarks = 70.5; // number
var studentParentDetails = null; // Object
var isPresent = true; //boolean
var subject; // undefined
/**
 * string , number ,boolean, object
 *
 * object => null , array, jsObject, function
 */

// How to check a data type => typeof keyword
// ind
var type = typeof subject;
console.log(type);

// Ways Defined a variable
var abc = "hello";
var ABC = "hello";
var studentName = "hello";
var StudentName = "Rohan";
var student_name = "hello";
var _abc = "hello";
var $abc = "hello";
var a1 = "hello";

// javascript variables are case sensitive
var studentName = "Deepak";
var StudentName = "Rohan";

console.log(studentName, StudentName);

var a = Number("35");
var b = 10;

//var result = a + b;// + => Math or  join | concat
var result = a + b; // 45
console.log(result);

// - * / % ==> convert sting number data to pure number data => implicit type casting
// + => Number() => explicit type casting

// Arithmetic Operations We have Operators
// + - * / %

/**   assignment operators */
var a = 10;
//a += 10; // a = a +10;
//a -= 10; // a = a - 10;
//a *= 10; // a = a *10;
//a /= 10;  // a = a /10;
//a %= 10;  // a = a % 10;

// console.log(a);

var a = 10;
var b = 10;

//a equals to b ==> 'Yes is equal' else "The are not equals"

// conditional statement
// if else
// switch

if (false) {
  console.log("yes");
  // true code
} else {
  // else code
  // console.log("no");
}

/**   comparisons operators
 *  ==
 *  ===
 *  !=
 *  !==
 *  <
 *  >
 *  <=
 *  >=
 *
 */

var a = 41;
var b = 40;

// if (a >= b) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

/**   logical operators */

var a = 10;
var b = 50;
var c = 20;

// a === b and b == c => True else False

// a === b or b == c => True else False

// and  &&
// or  ||
// not !
if (a === b || b == c) {
  // console.log("yes");
} else {
  //console.log("no");
}

var value = true;
value = !value;
value = !value;

/// statements , functions , array , math ,date

/** statements   ==>
 *    if else  ....
 *    switch
 *  */

if (false === false) {
  // true output
  //console.log("They are equals too");
} else {
  // false output
  console.log("they are not equals too");
}

// we are having name of restaurant
// Hotel Taj, KFC, Baba Ka Dhaba, Hotel Green
var userRestaurant = "123";

if (userRestaurant === "Hotel Taj") {
  console.log("Welcome to hotel taj");
} else if (userRestaurant === "KFC") {
  console.log("Welcome to KFC");
} else if (userRestaurant === "Baba Ka Dhaba") {
  console.log("Welcome to Baba Ka Dhaba");
} else if (userRestaurant === "Hotel Green") {
  console.log("Welcome to  Hotel Green");
} else {
  // console.log("Invalid Hotel  ");
}

//
switch (userRestaurant) {
  case "Hotel Taj":
    console.log("Welcome to hotel taj");
    break;
  case "KFC":
    console.log("Welcome to KFC");
    break;
  case "Baba Ka Dhaba":
    console.log("Welcome to Baba Ka Dhaba");
    break;
  case "Hotel Green":
    console.log("Welcome to  Hotel Green");
    break;
  default:
  //  console.log("Invalid Hotel");
}

/*** function
 *    function is a block of code which performs a task
 */
// addition of a number
// scope of variable
var a = 10;
var b = 10; // global variable

function add(varOne, varTwo) {
  // (varOne, varTwo) => formal parameters
  var addResult = varOne + varTwo;
  // local variable => variables defined in a function
  //                => only have only life in function only
  console.log("addition is ", addResult);
} // function definition

add(a, b); // (a,b) actual parameters
add(50, 60); // (50,60) actual parameters

// array backbone of javascript
// all data is handel buy array only
// array is collection on multiple data having same or different data types
// How to declare a array ?
var listOfData = [1, 2, 3, "abc", true, null, add, [100, 200, 300], {}];
// in array the keys are autogen;
// keys are also called index and its starts form 0
// if the array is [] => index as -1
console.log(listOfData);

// var studentData = ["suraj", 20, 29];
var studentData = {
  name: "suraj",
  rollNo: 20,
  age: 29,
}; // JS Object => hold a custom property/index/key with user value
// JSON => Javascript Object Notation
console.log(studentData);

// types of function
function abc() {
  // function code
}

// expression function
var result = 10 + 20; //30

var xyz = function () {};

xyz();

// callback function
// is a function which is written in other function call
function printData(callback) {
  console.log("printData");
  callback(10);
}

printData(function (result) {
  console.log("printMathData");
  // callback / or inline function
});

// iife => Immediate Invoke Function Expression
(function (data) {
  console.log("iife ", data); // iife 30
})(10); // if you create library or any plugin

// arrow function

// if i have a multiple student data how handel it
var studentList = [
  {
    name: "Deepak",
    marks: 20,
  },
  { name: "Suraj", marks: 30 },
  {
    name: "Sunita",
    marks: 35,
  },
  {
    name: "Ali",
    marks: 40,
  },
  {
    name: "Mohit",
    marks: 50,
  },
]; // object array
//console.log(studentList);
/**
 *  Read
 *    [index] , .forEach()
 *  Add
 *    .push()
 *  Delete
 *    .pop(), splice()
 *  Search
 *    .find() , .filter()
 *  ReCreate an array
 *    .map() , slice()
 *  Reduce Array
 *    .reduce()
 *  Sort Array
 *    .sort()
 */
