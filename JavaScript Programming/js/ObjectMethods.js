// What is Object ?
var studentDetails = {
  name: "Deepakkumar",
  course: "MERN Stack",
  duration: "75hrs",
};

// all keys in an array
//var keyArray = ['name','course','duration']
var keyArray = Object.keys(studentDetails);
// console.log(keyArray);

// var objectValues = ["deepakkumar", "MERN Stack", "75hrs"];
var objectValues = Object.values(studentDetails);
console.log(objectValues);

// var objToArray = [
//   ["name", "deepakkumar"],
//   ["course", "MERN Stack"],
//   ["duration", "75hrs"],
// ];

var objToArray = Object.entries(studentDetails);
console.log(objToArray);
