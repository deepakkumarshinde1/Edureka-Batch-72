const fs = require("fs");

const data = `hello edureka`;

// fs.writeFile()
/*fs.writeFile("sample.html", data, function (error) {
  if (error) {
    console.log("unable to create a file");
  } else {
    console.log("file created successfully");
  }
});*/

/*fs.unlink("sample.html", function (error) {
  if (error) {
    console.log("unable to delete a file");
  } else {
    console.log("file deleted successfully");
  }
});*/

/*fs.appendFile("sample.html", data, function (error) {
  if (error) {
    console.log("unable to create a file");
  } else {
    console.log("file created successfully");
  }
});*/
// fs.readFile()
fs.readFile("sample.html", function (error, data) {
  if (error) {
    console.log("unable to create a file");
  } else {
    console.log(data.toString());
  }
});
