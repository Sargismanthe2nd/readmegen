function renderLicenseBadge(license) {
  if (!license) return '';
  return `![License](https://img.shields.io/badge/license-${encodeURI(license)}-blue.svg)`;
}

function renderLicenseLink(license) {
  if (!license) return '';
  return `https://opensource.org/licenses/${encodeURI(license)}`;
}

function renderLicenseSection(license) {
  if (!license) return '';
  return `## License

This project is licensed under the ${license} license. For more information see [here](${renderLicenseLink(license)}).`;
}

function generateMarkdown(answers) {
  return `
# ${answers.title}

${answers.description ? `## Description\n\n${answers.description}` : ''}

${answers.tableOfContents ? `## Table of Contents\n\n${answers.tableOfContents}` : ''}

${answers.installation ? `## Installation\n\n${answers.installation}` : ''}

${answers.usage ? `## Usage\n\n${answers.usage}` : ''}

${renderLicenseBadge(answers.license)}
${renderLicenseSection(answers.license)}

${answers.contributing ? `## Contributing\n\n${answers.contributing}` : ''}

${answers.tests ? `## Tests\n\n${answers.tests}` : ''}

## Questions

Got questions? Reach out to me on [GitHub](https://github.com/${answers.github}) or send me an email at ${answers.email}.
`;
}

module.exports = generateMarkdown;
