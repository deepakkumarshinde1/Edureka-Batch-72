// main entry file of out project
// how create a server by using express js
// #1 import express
const express = require("express");
// #1 create instance of app
const app = express();
const PORT = 3001;

// routing
// Routing
//  /admin /product /team /about
// HTTP Methods
// GET(default), POST , PUT, DELETE
app.get("/", (request, response) => {
  response.send("Hello express js");
});

app.listen(PORT, () => {
  console.log("project is running on ", PORT);
});

// function(request,response){

// }

// (request,response) =>  {

// }
