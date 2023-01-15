const fs = require("fs");

module.exports.getData = function (callback) {
  fs.readFile("index.html", function (error, data) {
    if (error) {
      callback("Unable to read files");
    } else {
      callback(data);
    }
  });
};

module.exports.sayHello = function () {
  console.log("hello to all");
};

// export modules
