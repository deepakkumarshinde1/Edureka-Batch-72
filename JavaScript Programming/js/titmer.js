var clock = document.getElementById("clock");
console.log(clock);

function timer() {
  var date = new Date();
  // time logic
  var hr = date.getHours(); // 24hs
  var min = date.getMinutes();
  var sec = date.getSeconds();

  // var hr12 = hr > 12 ?  hr - 12 :   hr;

  var hr12 = hr > 12 ? hr - 12 : hr;
  var meridiem = hr >= 12 ? "pm" : "am";
  var time = `${hr12}:${min}:${sec} ${meridiem}`;
  clock.innerHTML = time;
}

// inBuild Function in Javascript => setInterval
setInterval(function () {
  timer();
}, 1000); // 1s === 1000ms
