function renderLicenseSection(license) {
  if (!license || license === 'None') return '';
  return `## License\n\nThis project is licensed under the ${license} license.`;
}

function generateMarkdown(answers) {
  return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Credits
${answers.credits}
${renderLicenseSection(answers.license)}

## Features
${answers.features}
`;
}

module.exports = generateMarkdown;
