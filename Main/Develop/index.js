// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
inquirer
    .prompt().then((answers) => {
        // console.log(answers)
        const template = `# <${answers.title}>

        ## Description
        ${answers.description}
        
        
        ## Table of Contents (Optional)
        
       
        
        ## Installation
       ${answers.installation}
        
        ## Usage
        
      ${answers.usage}
        
        ## Credits
        
      
        ## License
       ${answers.license}
        
        ---`;
        console.log(answers.installation)
        if (!fs.existsSync('output')) {
            fs.mkdirSync('output');
        }
        fs.writeFileSync('output/README.md', template);
    })

    

    



// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
