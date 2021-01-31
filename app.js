// THIS FILE IS THE SERVER
const express = require("express");
const app = express();

app.set("view engine", "ejs");

const issuesList = [
  {
    title: "Violence, Cholera, Hunger, Coronavirus",
    location: "Yemen",
    peopleAffected: "24,000,000",
    rank: "1",
  },
  {
    title: "Syrian Civil War",
    location: "Syria",
    peopleAffected: "12,000,000",
    rank: "2",
  },
  {
    title: "Armed Conflicts, Food Insecurity, Epidemics",
    location: "Democratic Republic of Congo",
    peopleAffected: "15,740,000",
    rank: "3",
  },
];

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
