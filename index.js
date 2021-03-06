const inquirer = require("inquirer");
const fileSystem = require("fs");
const util = require("util");
const writeTheFile = util.promisify(fileSystem.writeFile);
const getLicense = require("./utils/getLicense");
const generateMarkdown = require("./utils/generateMarkdown");

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
      message: "What installs was necessary for this application?. Write NONE if doesn't apply!",
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
      type: "list",
      message: "Please choose a license. Use arrow keys to navigate, Press enter to confirm.",
      choices: ["Apache", "MIT", "ISC", "Unlicense"],
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
  .then((answers) => {
    const licenseData = getLicense(answers);
    return writeTheFile("README.md", generateMarkdown(answers, licenseData));
  })
  .then(() => console.log("Successfully generated README.md file"))
  .catch((err) => console.error(err));
