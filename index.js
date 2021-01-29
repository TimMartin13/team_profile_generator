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