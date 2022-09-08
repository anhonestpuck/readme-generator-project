// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const templateQuestions = require ('./utils/templatequestions.js')
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
inquirer
    .prompt(templateQuestions)
    .then((answers) => {
        // console.log(answers)
        generateMarkdown(answers)
        
    if (!fs.existsSync('output')) {
            fs.mkdirSync('output');
        }
        fs.writeFileSync('output/README.md', generateMarkdown(answers));
    })

    

    



// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
