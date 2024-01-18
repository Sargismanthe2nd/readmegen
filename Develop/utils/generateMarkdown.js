function renderLicenseSection(license) {
  const licenseBadges = {
    'MIT': '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
    'GPLv3': '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
    'Apache 2.0': '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',
    'BSD': '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)',
    'None': ''
  };

  return licenseBadges[license] || '';

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

## License
${renderLicenseSection(answers.license)}

## Features
${answers.features}
`;
}

module.exports = generateMarkdown;
  