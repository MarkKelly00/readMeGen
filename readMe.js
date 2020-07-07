const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

const questions = [
    {
        type: 'input',
        message: 'Enter the project name: ',
        name: 'name',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project: ',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation: ',
    },
    {
        type: 'list',
        choices: ['MIT', 'BSD', 'GPL', 'None'],
        name: 'license',
        message: 'Select the project license: ',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What do you use to run this application? ',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What contributions were made? ',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Test that were made? ',
    },
    {
        type: 'input',
        name: 'profilePic',
        message: 'What is your github profile picture url? ',
    },
    {
        type: 'input',
        name: 'profileEmail',
        message: 'What is your github email? ',
    },
];

function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}

    function init() {
        inquirer.prompt(questions).then(answers => {
            const data = generateMarkdown(answers);
            writeToFile(__dirname + '/readme.md', data);
            console.log(answers.name);
        })
    }

    init();

