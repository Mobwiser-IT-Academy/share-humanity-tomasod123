const issueList = [
  {
    category: ["all", "health"],
    title: "Violence, Cholera, Hunger, Coronavirus",
    src: "/Users/tomasodwyer/development/mobwiser/Humanitarian Project/landing-page-icons/elements-20-military-icons-FLE558-2017-02-16/SVG/mask.svg",
    location: "Yemen",
    peopleAffected: "24,000,000",
    rank: "1",
  },
  {
    category: ["all", "social"],
    title: "Syrian Civil War",
    src: "/Users/tomasodwyer/development/mobwiser/Humanitarian Project/landing-page-icons/elements-20-military-icons-FLE558-2017-02-16/SVG/solder.svg",
    location: "Syria",
    peopleAffected: "12,000,000",
    rank: "2",
  },
  {
    category: ["all", "social"],
    title: "Armed Conflicts, Food Insecurity, Epidemics",
    src: "/Users/tomasodwyer/development/mobwiser/Humanitarian Project/landing-page-icons/elements-20-military-icons-FLE558-2017-02-16/SVG/gun.svg",
    location: "Democratic Republic of Congo",
    peopleAffected: "15,740,000",
    rank: "3",
  },
];

makeHTML('all'); // default is all so can see everything

function makeHTML() {
  let html = '';
  let issueSelected = document.getElementById("my-select").value;
  let issueBox = document.getElementById('issue-box');
  let categoryChosen = (document.getElementById("my-select") === null) ? 'all' : issueSelected; // ternary operation

  for (let i = 0; i < issueList.length; i++) {
    if (issueList[i].category.some((issue) => issue === categoryChosen)) {
      html += `<div class='container-panel'>
                    <div class='panel pricing-table'>
                      <div class='pricing-plan'>
                        <img src=${issueList[i].src} class="pricing-img"/>
                        <h2 class='pricing-header'>${issueList[i].title}</h2>
                        <ul class='pricing-features'>
                          <li class='pricing-features-item'>Rank: ${issueList[i].rank}</li>
                          <li class='pricing-features-item'>
                            Location: ${issueList[i].location}
                          </li>
                        </ul>
                        <span class='pricing-price'>Population Affected: ${issueList[i].peopleAffected}</span>
                        <a href="detail.html" class='pricing-button'>More Info</a>
                      </div>
                    </div>
                  </div>`
    }

    issueBox.innerHTML = html;
  }
}
