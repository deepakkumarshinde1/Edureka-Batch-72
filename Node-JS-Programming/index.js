/**
 * Create server application
 * Create Desktop App
 * Mobile Application
 * For developing Front End With Angular, React or Vue
 */

// import modules
const http = require("http");
const getFileData = require("./getFilesData");

getFileData.sayHello();

// instance create server
const server = http.createServer(function (request, response) {
  getFileData.getData(function (result) {
    response.write(result);
    response.end();
  });
});

server.listen(3001, function () {
  console.log("application is running on port", 3001);
});
