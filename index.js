// TODO: Include packages needed for this applic
const inquirer = require('inquirer');
const fs = require ('fs');
 
const Project = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [{
    type: 'confirm',
    name: 'WELCOME!',
    message: 'Welcome to my Readme Generator!'
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
    message: 'how do you use the app?'
},
{
    type: 'input',
    name: 'contributing',
    message: 'Contribution guidelines:'
},
{
    type: 'input',
    name: 'test',
    message: 'instructions to be follow:'
},
{
    type: 'input',
    name: 'license',
    message: 'What license did you use? ',
    choices: ['GNU GPLv3','MIT','Apache 2.0','N/A']
},
{
    type: 'input',
    name: 'username',
    message: 'Please enter your Github username: '
}, 
    
];


// TODO: Create a function to write README file 
function writeToFile(fileName,data) {
    fs.writeToFile(fileName, data, (err)=>
    err ? console.error(err) : console.log ('I think I did it?'))
}
// TODO: Create a function to initialize app 
function init (){
    inquirer.prompt(questions)
    .then(answers) => {
        // const readmeContent = Project(answers);
        console.log(answers);
        fs.writeToFile('log.text' , JSON.stringify(answers),function(err){
            return err ? console.err(err): console.log('akdsjf')
        });
        console.log('ahsdhf');
}}
// Function call to initialize app
init();