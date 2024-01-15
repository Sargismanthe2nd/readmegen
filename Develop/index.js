var inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown'); 

const questions = [
    { type: 'input', name: 'title', message: 'What is the title of your project?' },
    { type: 'input', name: 'description', message: 'Enter a description for your project:' },
    { type: 'list', name: 'license', message: 'Choose a license for your application:', choices: ['MIT', 'GPL-3.0', 'Apache-2.0', 'BSD-3-Clause', 'None'] },
    { type: 'input', name: 'github', message: 'Enter your GitHub username:' },
    { type: 'input', name: 'email', message: 'Enter your email address:' }
];

function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, 'utf8');
}

function init() {
    inquirer.prompt(questions)
    .then(answers => {
        const readmeContent = generateMarkdown(answers);
        writeToFile('README.md', readmeContent);
        console.log('Successfully created README.md');
    })
    .catch(error => {
        console.error('An error occurred:', error);
    });
}


init();
