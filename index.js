const inquirer = require("inquirer");
const fileSystem = require("fs");
const util = require("util");
const generateReadMe = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fileSystem.writeFile);

const promptUser = () =>
  inquirer.prompt([
    {
      type: "input",
      message: "What is the name of your Project?",
      name: "title",
    },
    {
      type: "input",
      message: "Give a brief description of your Project.",
      name: "description",
    },
    {
      type: "input",
      message: "What are the installation instructions for this project. Write NONE if doesn't apply!",
      name: "installation",
    },
    {
      type: "input",
      message: "How will this application be used?",
      name: "usage",
    },
    {
      type: "input",
      message: "Are there any Contributors to this Project?",
      name: "contribution",
    },
    {
      type: "input",
      message: "Explain how others can test this Project.",
      name: "test",
    },
    {
      type: "checkbox",
      message: "Please choose a license. Press Space Bar to select, then press enter to confirm.",
      choices: ["apache", "mit", "isc", "gnu%20gplv3"],
      name: "license",
    },
    {
      type: "input",
      message: "Who would you like to credit for this Project?",
      name: "credit",
    },
    {
      name: "input",
      message: "What is your GitHub username?",
      name: "username",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the name of the GitHub Repository for this project? Use dash/hyphen for spaces!",
      name: "repo",
    },
  ]);

promptUser()
  .then((answers) => writeFileAsync("README.md", generateReadMe(answers)))
  .then(() => console.log("Successfully generated README.md file"))
  .catch((err) => console.error(err));
