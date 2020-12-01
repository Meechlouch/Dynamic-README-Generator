// function to generate markdown for README
function generateMarkdown(answers) {
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
  This project is subject to ![License:](https://img.shields.io/badge/License-${
    answers.license ? answers.license : "None"
  }-red)

  ## Questions:
  For additional questions, Get in touch at: ${answers.email}\n
  Check out my [GitHub](https://github.com/${answers.username})
  GitHub [Repository](https://github.com/${answers.username}/${answers.repo});`;
}

module.exports = generateMarkdown;
