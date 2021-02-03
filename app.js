// THIS FILE IS THE SERVER
const express = require("express");
const app = express();

app.set("view engine", "ejs");

const issuesList = [
  {
    category: "health",
    title: "Violence, Cholera, Hunger, Coronavirus",
    location: "Yemen",
    peopleAffected: "24,000,000",
    rank: "1",
  },
  {
    category: "social",
    title: "Syrian Civil War",
    location: "Syria",
    peopleAffected: "12,000,000",
    rank: "2",
  },
  {
    category: "social",
    title: "Armed Conflicts, Food Insecurity, Epidemics",
    location: "Democratic Republic of Congo",
    peopleAffected: "15,740,000",
    rank: "3",
  },
];

//THIS IS WHERE WE'RE TELLING OUR SERVER (APP.JS WHERE TO LOOK FOR RESOURCES)
app.use(express.static(__dirname + "/public"));

//This is the section that is connecting us to "home.ejs"
app.get("/", (req, res) => {
  // This is what's defining what we're going to send into home.ejs
  res.render("home", {
    issues: issuesList,
  });
});

app.listen(8000, () => {
  console.log("LISTENING ON PORT 8000");
});
