// if i have a multiple student data how handel it
var studentList = [
  {
    name: "Sunita",
    marks: 35,
  },
  { name: "Sunita", marks: 30 },

  {
    name: "Deepak",
    marks: 20,
  },
  {
    name: "Mohit",
    marks: 50,
  },
  {
    name: "Ali",
    marks: 40,
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
 *
 *  ReCreate an array
 *    .map() , slice()
 *  Reduce Array
 *    .reduce()
 *  Sort Array
 *    .sort()
 */
/*
// for
var length = studentList.length;
for (var index = 0; index < length; index++) {
  console.log(studentList[index]);
}*/

console.log(studentList);
/** Read from array */
//console.log(studentList[3]);
/*studentList.forEach(function (value, index) {
  console.log(value.marks, index);
});*/

/*** add  are record */
let student = {
  name: "Vinod",
  marks: 60,
};

// studentList.push(student); // end
//studentList.unshift(student);// starting

/*** remove a data */
// studentList.pop(); // delete data form end
// studentList.shift(); // delete data from start
// studentList.splice(3, 2); // index , deleteCount   // delete for exact position

/*** search da data from array */
var searchStudent = "Sanjay";

/*var searchData = studentList.find(function (value, index) {
  return value.name === searchStudent;
}); */ // if record is found we get result else we get "undefined"

/*var searchData = studentList.filter(function (value, index) {
  return value.name === searchStudent;
});*/ // if found filter will return multiple records else []

/*** ReCreate an array */
let newRecord = studentList.map(function (value, index) {
  return `<li>${value.name},${value.marks}</li>`;
});

// convert from array to string
// newRecord = newRecord.join("");
// console.log(newRecord);

/*var addResult = studentList.reduce(function (pValue, cValue) {
  console.log(pValue, cValue);
  return pValue + cValue.marks;
}, 0);
console.log(addResult);*/

var sortedList = studentList.sort(function (a, b) {
  // ASC
  // b is pre value ={}
  // a is next value = {}
  // -1 swap
  // 1 don't swap

  // for alphabets convert words to smallCase  or to upperCase
  var text2 = b.name.toUpperCase();
  var text1 = a.name.toUpperCase();
  if (b.marks > a.marks) return -1;
  if (b.marks < a.marks) return 1;
  //   if (text2 < text1) return 1;

  //   if (text2 > text1) return -1;
});

console.log(sortedList);
