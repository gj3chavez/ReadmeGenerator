// TODO: Include packages needed for this applic
const inquirer = require('inquirer');
const fs = require ('fs');
 
// const Project = require('./utils/generateMarkdown.js');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'confirm',
    name: 'WELCOME!',
    message: 'Welcome to my Readme Generator! Would you like to begin?'
},
{
    type: 'input',
    name: 'title',
    message: "What's the Project Title?"
},
{
    type: 'input',
    name: 'description',
    message: 'Short description of your project:'
},
{
    type: 'input',
    name: 'installation',
    message: 'How do you install the app?'
},
{
    type: 'input',
    name: 'usage',
    message: 'How do you use the app?'
},
{
    type: 'input',
    name: 'contributing',
    message: 'Contribution guidelines:'
},
{
    type: 'input',
    name: 'test',
    message: 'Instructions to be follow:'
},
{
    type: 'list',
    name: 'license',
    message: 'What license did you use? ',
    choices: [
        "GNU GPLv3",
        "MIT",
        "Apache 2.0",
        "N/A"
    ]
},
{
    type: 'input',
    name: 'username',
    message: 'Please enter your Github username: '
}, 
{
    type: 'input',
    name: 'email',
    message: 'Please enter your email: '
}, 
    
];

// TODO: Create a function to write README file 
 function writeToFile(fileName,data) {
    fs.writeFile(fileName, data, function(err){
        return err ? console.error(err) : console.log ('Awesome! Your Readme file has been generated!');

});
};
    
    

// // TODO: Create a function to initialize app 
function init (){
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
        const newFile = generateMarkdown(answers);
        writeToFile('./utils/generateReadme.md', newFile);
      
         });
}; 

// Function call to initialize app
init();