// What DOM => Document Object Model
// DOM logical of web page

// handel click event
// work with the 3rd party api logic

// access the html element
//document.getElementById();
//document.getElementsByClassName();
//document.getElementsByTagName();
//document.querySelector(); // single element
//document.querySelectorAll(); // an array of elements
// .className
// #idName
// elementName

// events => user action
/**
 * click, dblclick, keypress, keyup, keydown, change
 * scroll, drag, drop, load (mounting) , unload (unmounting)
 */

/*
.addEventListener('event',function(event){

})

if you want to access input data => .value
if you want to reset (set) input data => .value

if we want set a text to element like h1,p => .innerHTML
if we want get a text from element like h1,p => .innerHTML
*/

var btn = document.querySelector("#btn");
var input = document.querySelector("#input");
var hidePassword = document.querySelector("#hide-password");
var h1ID = document.querySelector("#h1Id");
var pId = document.querySelector("#pId");

btn.addEventListener("click", function (event) {
  var text = input.value; // reading (get)
  input.value = ""; // writing (set)
  //   console.log(text);
  //input.type = "text";
  h1ID.innerHTML = text;
});

hidePassword.addEventListener("click", function () {
  input.type = "password";
});

pId.addEventListener("click", function () {
  var text = h1ID.innerHTML;
  console.log(text);
});

// multi element with same event and same functionality
// in that case you use forEach loop
var deleteBtn = document.querySelectorAll(".del");

deleteBtn.forEach(function (button) {
  button.addEventListener("click", function () {
    alert(button.id);
  });
});
