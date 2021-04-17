//declaring dependencies with variables
const generateTheReadme = require("./utils/generateMarkdown.js")
const fs = require("fs");
const util = require("util");
const writeTheFile = util.promisify(fs.writeFile);
const inquirer = require("inquirer");

//prompt for questions here
function thePrompts(){
    return inquirer.prompt([
        {
            type: "input",
            message: "Project Title",
            name: "theProjectTitle",
            
        },
        {
            type: "input",
            name: "theDescription",
            message: "Description here "
            
        },
        {
            type: "input",
            name: "theInstallation",
            message: "what was your installation process?",
        },
        {
            type: "input",
            name: "theUsage",
            message: "What would you use this project for?"
        },
        {
            type: "input",
            name: "contributing",
            message: "list contributors for the project"
        },
        {
            type: "input",
            name: "theTests",
            message: "are there any tests"
        },
        {
            type: "input",
            name: "theIssues",
            message: "list issues here "
        },
        {
            type: "input",
            name: "theEmail",
            message: "Put your email here "
        },
        {
            type: "input",
            name: "username",
            message: "what is your GitHub username "
        },
       
    ]);
} 

// Async function 
  async function init() {
    try {
        //asking the questions and generating the response
        const answers = await thePrompts();
        const contentGeneration = generateTheReadme(answers);
        // where writing the new readme
        await writeTheFile('THEREADME.md', contentGeneration);
        console.log('sucessfully made the read me');
    }   catch(err) {
        console.log(err);
    }
  }
  
  init();  