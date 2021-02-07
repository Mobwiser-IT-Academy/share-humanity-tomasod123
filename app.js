// THIS FILE IS THE SERVER
const express = require("express");
const app = express();

app.set("view engine", "ejs");

//THIS IS WHERE WE'RE TELLING OUR SERVER (APP.JS WHERE TO LOOK FOR RESOURCES)
app.use(express.static(__dirname + '/public'));

//This is the section that is connecting us to "home.ejs"
app.get("/", (req, res) => {
  // This is what's defining what we're going to send into home.ejs
  res.render("home");
});

app.listen(8000, () => {
  console.log("LISTENING ON PORT 8000");
});