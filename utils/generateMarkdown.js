// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  
  ![License: ${answers.license ? answers.license : "None"}](https://img.shields.io/badge/Demetri%20Dillard-${
    answers.license ? answers.license : "None"
  }-brightgreen)

  ## Description:
    ${answers.description}

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
  ![License: ${answers.license ? answers.license : "None"}](https://img.shields.io/badge/License-${
    answers.license ? answers.license : "None"
  }-red)
  ![License](https://choosealicense.com/licenses/${answers.license}/)`;
}

module.exports = generateMarkdown;
