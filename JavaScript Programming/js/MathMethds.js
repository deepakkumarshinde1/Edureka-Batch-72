// 144 = 12
// 49 = 7
// 16 = 4
// 45785945 = ?
var number = 45785945;
// var output = Math.sqrt(number);
// var number = 6766.531238382041;
// var output = number.toFixed(3);

var number = 1.5;
// var output = 2;
// var output = Math.ceil(number);
//var output = 1;
// var output = Math.floor(number);
// var output = Math.round(number);

// random number
function createRandomNumber() {
  var output = Math.random();
  output = output * 100;
  var otp = Math.floor(output);

  if (output < 50) {
    createRandomNumber();
  } else {
    //console.log(otp);
  }
}

// z = 50 + (100 - 50) * Math.random();
// z = 50 + 50 * 0.545685444584;

// create a OTP
createRandomNumber();

// var powerNumber = Math.pow(2, 3);
// console.log(powerNumber);
var pie = Math.PI;
// console.log(pie);
var r = 50;
var areaOfCircle = Math.PI * Math.pow(r, 2);
console.log(areaOfCircle);

// 10.15; // nearest round number ==> 10 => Math.floor(10.15) => 10
