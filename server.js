// Set up server
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Set up Middleware
app.use(express.static("public"));

// Set up Handlebars
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: 'main'}));
app.set("view engine", "handlebars");

// Set up Routes
const routes = require("./controller/controller.js");
app.use("/", routes);

// Listen
app.listen(PORT, ()=>{
    console.log("Listening on Port:", PORT);
})