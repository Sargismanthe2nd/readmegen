const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown'); 

const questions = [
    { type: 'input', name: 'title', message: 'What is the title of your project?' },
    { type: 'input', name: 'description', message: 'Enter a description for your project:' },
    { type: 'input', name: 'installation', message: 'How do you install this prject?' },
    { type: 'input', name: 'usage', message: 'How do you use this project?' },
    { type: 'input', name: 'credits', message: 'List your credits and/or contribution guides:' },
    { type: 'input', name: 'features', message: 'What features does your project provide?' },

    
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