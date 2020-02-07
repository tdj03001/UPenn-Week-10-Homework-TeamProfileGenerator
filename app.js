const fs = require("fs");
const http = require("http");
const path = require("path");
const util = require("util");
const inquirer = require("inquirer");
const open = require("open");
const mainHTML = require("./templates/mainhtml.js");
const managerHTML = require("./templates/managerhtml.js");
const engineerHTML = require("./templates/engineerhtml.js");
const internHTML = require("./templates/internhtml.js");


function generateEngineerHTML(data) {
  return `
<!DOCTYPE html>
<html lang="en-us">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap" rel="stylesheet">
  <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
  <link rel="stylesheet" href="../assets/css/main.css">
  <title>Manager Profile</title>
</head>

<body>

  <div class="card" style="width: 18rem;">
    <div class="card-header">
      <p>${data.name}</p>
      <br>
      <p>${data.title}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${data.id}</li>
      <li class="list-group-item">Email: ${data.email}</li>
      <li class="list-group-item">GitHub: ${data.github}</li>
    </ul>
  </div>

</body>

</html>`;
}


const mainQuestions = [

  {
    type: "input",
    name: "managerName",
    message: "What is your manager's name?"
  },
  {
    type: "input",
    name: "managerID",
    message: "What is your manager's ID?"
  },
  {
    type: "input",
    name: "managerEmail",
    message: "What is your manager's email?"
  },
  {
    type: "input",
    name: "managerOffNum",
    message: "What is your manager's office number?"
  },
  {
    type: "list",
    name: "memberType",
    message: "What type of team member do you wish to add?",
    choices: ["Engineer", "Intern"]
  }
];

const engineerQuestions = [
  {
    type: "input",
    name: "engineerName",
    message: "What is your engineer's name?"
  },
  {
    type: "input",
    name: "engineerID",
    message: "What is your engineer's ID?"
  },
  {
    type: "input",
    name: "engineerEmail",
    message: "What is your engineer's email?"
  },
  {
    type: "input",
    name: "engineerGitHub",
    message: "What is your engineer's GitHub username?"
  },
  {
    type: "list",
    name: "moreQuestions",
    message: "Would you like to add more team members?",
    choices: ["Yes", "No"]
  }
];

const internQuestions = [
  {
    type: "input",
    name: "internName",
    message: "What is your intern's name?"
  },
  {
    type: "input",
    name: "internID",
    message: "What is your intern's ID?"
  },
  {
    type: "input",
    name: "internEmail",
    message: "What is your intern's email?"
  },
  {
    type: "input",
    name: "internSchool",
    message: "What is your intern's school?"
  },
  {
    type: "list",
    name: "moreQuestions",
    message: "Would you like to add more team members?",
    choices: ["Yes", "No"]
  }
];

const writeFileAsync = util.promisify(fs.writeFile);

function init() {
  return inquirer.prompt(mainQuestions);
}

function engineerInfo() {
  inquirer.prompt(engineerQuestions)
}

function internInfo() {
  inquirer.prompt(internQuestions)
}

// function generateHTML(request, response) {
//   response.writeHead(200, { "Content-Type": "text/html" });
//   fs.readFile("./mainhtml.js", null, function (error, data) {
//     if (error) {
//       response.writeHead(404);
//       response.write("File not found!");
//     } else {
//       response.write(data);
//     };
//     response.end();
//   });
// }

// generateHTML();
// console.log(mainQuestions[4].choices);
init()
  .then(() => {
    if (mainQuestions[4].choices === "Engineer") {
      engineerQuestions();
    } else if (mainQuestions[4].choices === "Intern") {
      internQuestions();
    } else {
      console.log("you suck at back end coding")
    }
  })
  .then((data) => {
    const html = generateEngineerHTML(data);
    return writeFileAsync("engineer.html", html);
  })
  .then(function () {
    console.log("Successfully created HTML");
  })
  .catch(function (error) {
    console.log(error);
  });

