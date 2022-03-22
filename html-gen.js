// generates the cards to place into the html
const teamGenerate = (team) => {
  const managerGenerate = (manager) => {
    return `<div class="card col-4 text-white bg-info mb-3" style="max-width: 20rem">
    <div class="card-header">${manager.getName()}</div>
    <div class="card-body">
      <h4 class="card-title">Manager</h4>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}}">${manager.getEmail()}</a></li>
        <li class="list-group-item">Office Number: ${manager.getOffice()}</li>
      </ul>
    </div>
  </div>`;
  };

  const engineerGenerate = (engineer) => {
   return `<div class="card col-4 text-white bg-info mb-3" style="max-width: 20rem">
    <div class="card-header">${engineer.getName()}</div>
    <div class="card-body">
      <h4 class="card-title">Engineer</h4>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
      </ul>
    </div>
  </div>`;
  };

  const internGenerate = (intern) => {
    return `<div class="card col-4 text-white bg-info mb-3" style="max-width: 20rem">
    <div class="card-header">${intern.getName()}</div>
    <div class="card-body">
      <h4 class="card-title">Intern</h4>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
        <li class="list-group-item">School: ${intern.getSchool()}</li>
      </ul>
    </div>
  </div>`;
  };

  // Filters through the answers and decides if it is a manager, engineer, or intern. Then they are sent to the respctive functions
  const cards = [];

  cards.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => managerGenerate(manager))
  );
  cards.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => engineerGenerate(engineer))
      .join("")
  );
  cards.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => internGenerate(intern))
      .join("")
  );

  return cards.join("");
};

// generates the layout for the html and then runs the teamGenerate function to generate the cards
const fileGenerate = team => {

  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <title>Team Profile</title>
  </head>

  <body>
    <header>
      <h1 class="text-center bg-info p-4 text-light mb-3">Team Profile</h1>
    </header>
    <div class="container">
      <div class="row">
        <div class="col-12 d-flex justify-content-center">

        ${teamGenerate(team)}

        </div>
      </div>
    </div>
  </body>
</html>
  `;
};

module.exports = fileGenerate;
