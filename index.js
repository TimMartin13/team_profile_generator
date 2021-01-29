const inquirer = require('inquirer');
const fs = require('fs');
// Page for the HTML render template
const team = require('./src/page-template');

// Our main classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Main options
const options = [
    {
        type: 'list',
        message: 'Would you like to?',
        name: 'title',
        choices: [
            'Add an Engineer',
            'Add an Intern',
            'Finish building your team'
        ]
    }
]

// Questions for Everyone
function employeeQuestions(title) {
    const questions = [
        {
            type: 'input',
            message: `What is the ${ title }'s name?`,
            name: 'managerName',
        },
        {
            type: 'number',
            message: "Employee number?",
            name: 'managerId',
        },
        {
            type: 'input',
            message: "Email address?",
            name: 'managerEmail',
        }
    ]
    return questions;
}

// Question for Manager
const questionManager = [
    {
        type: 'number',
        message: "Office number?",
        name: 'managerOffice',
    }
]

// Question for Engineer
const questionEngineer = [
    {
        type: 'input',
        message: "Github username?",
        name: 'engineerGithub',
    }
]

// Question for Intern
const questionIntern = [
    {
        type: 'input',
        message: "School name?",
        name: 'internSchool',
    }
]

function init() {
    // Set title to manager
    let title = 'Manager';

    inquirer
        .prompt(employeeQuestions(title))
        .then((response) => console.log(response));
}

init();
// Start application (init)
// Set title to manager
// Ask Everyone questions
// Ask Manager question
// Create new Manager and save
// Prompt for Engineer, Intern or Finish
// If Engineer
    // Change title to Engineer
    // Ask Everyone questions
    // Ask Engineer question
    // Create new Engineer and save
// If Intern
    // Change title to Intern
    // Ask everyone questions
    // Ask Intern question
    // Create new Intern and save


 // -------------------------------------------- Teacher pseudo code ----------------------------------//
    
