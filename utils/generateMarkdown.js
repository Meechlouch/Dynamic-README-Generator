// function to generate markdown for README
function generateMarkdown(answers, licenseData) {
  return `# ${answers.title}
  
  ![License:](https://img.shields.io/badge/Demetri%20Dillard-${answers.license ? answers.license : "None"}-brightgreen)

  # Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Test](#test)
  - [Credits](#credits)
  - [License](#license)
  - [Questions](#questions)

  ## Description
  ${answers.description}\n
  <img src="./img/nodeIndexCommand.png" width="500">\n
  <img src="./img/userPrompts.png" width="500">\n
  Here is a [video](https://drive.google.com/file/d/1uRDHmz4OBj7ja9dvcLL4FXE7QSQOKxrG/view?usp=sharing) description.\n


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
  This project is subject to ![License:](https://img.shields.io/badge/License-${
    answers.license ? answers.license : "None"
  }-red)\n
  ${licenseData}
  For more information on this [License](https://choosealicense.com/licenses/${answers.license.toLowerCase()}/)

  ## Questions:
  For additional questions, Get in touch at: ${answers.email}\n
  Check out my [GitHub](https://github.com/${answers.username})\n
  GitHub [Repository](https://github.com/${answers.username}/${answers.repo})\n`;
}

module.exports = generateMarkdown;
