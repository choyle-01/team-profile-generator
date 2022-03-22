const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const fileGenerate = require("./html-gen")

// declaring an empty object to push things to later
let team = [];


// setting up questions 
const firstQuestion = {
  type: "list",
  message: "Would you like to add another team member or generate your team?",
  name: "Add",
  choices: ["Add Another Member", "Generate Team"],
};

const choosingQuestion = {
  type: "list",
  message: "Would you like to add another team member?",
  name: "choice",
  choices: ["Manager", "Intern", "Engineer", "None"],
};

const manager = [
  {
    type: "input",
    message: "What is the manager's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the manager's ID?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the manager's email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the manager's office number?",
    name: "office",
  },
];

const engineer = [
  {
    type: "input",
    message: "What is the engineer's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the engineer's ID?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the engineer's email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the engineer's GitHub?",
    name: "github",
  },
];

const intern = [
  {
    type: "input",
    message: "What is the intern's name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the intern's ID?",
    name: "id",
  },
  {
    type: "input",
    message: "What is the intern's email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the intern's school?",
    name: "school",
  },
];

// gives the choice to add another member or to generate the team
const init = function () {
  inquirer.prompt(firstQuestion).then((answer) => {
    if (answer.Add === "Add Another Member") {
      chooseRole();
    } else {
      generateTeam();
    }
  });
};

// decides if the user chooses to make the new member a member, engineer, or intern
const chooseRole = () => {
  inquirer.prompt(choosingQuestion).then((answer) => {
    if (answer.choice === "Manager") {
      managerQuestions();
    } else if (answer.choice === "Engineer") {
      engineerQuestions();
    } else {
      internQuestions();
    }
  });
};

// pulls all the manager answers into the manager class
managerQuestions = () => {
  inquirer.prompt(manager).then((answer) => {
    const manager = new Manager(answer.name, answer.id, answer.email, answer.office);
    team.push(manager)
    init();
  });
};

// pulls all the engineer answers into the engineer class
engineerQuestions = () => {
  inquirer.prompt(engineer).then((answer) => {
    const engineer = new Engineer(answer.name, answer.id, answer.email, answer.github);
    team.push(engineer)
    init();
  });
};

// pulls all the intern answers into the intern class
internQuestions = () => {
  inquirer.prompt(intern).then((answer) => {
    const intern = new Intern(answer.name, answer.id, answer.email, answer.school);
    team.push(intern)
    init();
  });
};

// sends the team object to the fileGenerate function
generateTeam = () => {
  fs.writeFileSync('./dist/index.html', fileGenerate(team), 'utf-8');  
};

init();
// module.exports = Init;
