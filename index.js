const inquirer = require('inquirer');
const fs = require('fs');
// Page for the HTML render template
const render = require('./src/page-template');
// console.log(team);
// Our main classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employees = [];
// Main options
const options = [
    {
        type: 'list',
        message: 'Would you like to?',
        name: 'role',
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
            name: 'employeeName',
        },
        {
            type: 'number',
            message: "Employee number?",
            name: 'employeeId',
        },
        {
            type: 'input',
            message: "Email address?",
            name: 'employeeEmail',
        }
    ]
    return questions;
}

function getFourthQuestion(title) {
    let question = [];
    // Question for Manager
    if (title === 'Manager') {
        question = [
            {
                type: 'number',
                message: "Office number?",
                name: 'fourthAnswer',
            }
        ]
    }
    
    // Question for Engineer
    if (title === 'Engineer') {
        question = [
            {
                type: 'input',
                message: "Github username?",
                name: 'fourthAnswer',
            }
        ]
    }
    
    // Question for Intern
    if (title === 'Intern') {
        question = [
            {
                type: 'input',
                message: "School name?",
                name: 'fourthAnswer',
            }
        ]
    }
    return question;
}

function getTeamMember(title) {
        
    // Ask Everyone questions
    inquirer
        .prompt(employeeQuestions(title))
        .then(({ employeeName, employeeId, employeeEmail }) => {
            // Ask question based on title
            inquirer
                .prompt(getFourthQuestion(title))
                .then(({ fourthAnswer }) => {
                    switch(title) {
                        case 'Manager': 
                            employees.push(new Manager(employeeName, employeeId, employeeEmail, fourthAnswer));
                            break;
                        case 'Engineer': 
                            employees.push(new Engineer(employeeName, employeeId, employeeEmail, fourthAnswer));
                            break;
                        case 'Intern': 
                            employees.push(new Intern(employeeName, employeeId, employeeEmail, fourthAnswer));
                            break;
                    }
                    inquirer
                        .prompt(options)
                        .then(({ role }) => {
                            if (role.includes('Engineer'))      getTeamMember('Engineer');
                            else if (role.includes('Intern'))   getTeamMember('Intern');
                            else renderTeam();
                        })
                    // console.log(employees);
                });
        });
}

function renderTeam() {
    console.log(employees);
    // team.push(employees);
    fs.writeFileSync('index.html', render(employees), (err) =>
      err ? console.error(err) : console.log('Success!')
    );
}
// Start application
getTeamMember("Manager");

// Set title to manager
// Ask Everyone questions
// Ask question based on title
// Create new (Title) and push to employee array
// Prompt for Engineer, Intern or Finish
    // set Title based on response, got to everyone questions

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

// questions for the employee
    // .then >> create Employee object
        // type of employee
            // if engineer >> create Engineer object
            // else intern >> create Intern object