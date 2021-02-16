const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown=require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter a title: ',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a short description: ',
    },
    {
        type: 'input',
        name: 'tech1',
        message: 'Technology used: ',
    },
    {
        type: 'input',
        name: 'tech2',
        message: 'Technology used: ',
    },
    {
        type: 'input',
        name: 'imgPath',
        message: 'Path to Screenshot Image: ',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is your project used? ',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Test instructions: ',
    },
    {
        type: 'list',
        message: 'Choose a license:',
        name: 'license',
        choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-2-Clause','BSD-3-Clause','BSD-4-Clause' ],
    },
    {
        type: 'input',
        name: 'githubName',
        message: 'GitHub UserName: ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Your email address: ',
    },
];


// function to write README file
function writeToFile(filename, readme) {
    
    fs.writeFile(filename, readme, (err) =>
        err ? console.log(err) : console.log('Success!')
    );

}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((data) => {
        const readme=generateMarkdown(data)
        writeToFile('readme.md', readme);

    });
}

// function call to initialize program
init();
