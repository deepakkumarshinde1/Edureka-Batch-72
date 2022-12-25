// create a instance of a date

var array = new Array(); // older
var array = []; // new way

var obj = new Object(); // older
var obj = {};

var date = new Date(); // Date is constructor
// var output = date.toDateString();
// convert string to array
// output = output.split(" ");
//console.log(output);
//var formateDate = `${output[2]}th, ${output[1]} ${output[3]}`;

// date date
var output = date.getDate();
output = date.getDay(); // 0 => sunday .... 6 => saturday
output = date.getMonth(); // 0 => Jan  ..... 11 => Dec
output = date.getFullYear();

// time logic
var hr = date.getHours(); // 24hs
var min = date.getMinutes();
var sec = date.getSeconds();

// var hr12 = hr > 12 ?  hr - 12 :   hr;

var hr12 = hr > 12 ? hr - 12 : hr;
var meridiem = hr >= 12 ? "pm" : "am";
var time = `${hr12}:${min}:${sec} ${meridiem}`;
console.log(time);
