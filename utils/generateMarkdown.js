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

module.exports = generateMarkdown;
