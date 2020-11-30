const inquirer = require("inquirer");
const fileSystem = require("fs");
const util = require("util");
//const generateReadMe = require("./utils/generateMarkdown");
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
      message: "Please choose a license.",
      choices: ["Apache", "MIT", "ISC", "GNU GPLv3"],
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
  ]);

// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
    # Table of Contents
  
    - [Description](description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributing](#contributing)
    - [Test](#test)
    - [Credits](#credits)
    - [License](#license)
    - [Questions](#questions)
  
    ## Description:
      ${answers.description}
    ## Installation:
      ${answers.installation}
    ## Usage:
      ${answers.usage}
    ## Contributing:
      ${answers.contribution}
    ## Test:
      ${answers.test}
    ## Credits:
      ${answers.credit}
    ## License:
      ${answers.license}
      [License](https://choosealicense.com/licenses/${answers.license}/)`;
}

promptUser()
  .then((answers) => writeFileAsync("README.md", generateMarkdown(answers)))
  .then(() => console.log("Successfully generated READ.md file"))
  .catch((err) => console.error(err));
