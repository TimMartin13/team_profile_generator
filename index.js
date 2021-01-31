const inquirer = require('inquirer');
const fs = require('fs');
// Page for the HTML render template
const render = require('./src/page-template');

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
            type: 'input',
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
                type: 'input',
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
            return inquirer
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
                    return inquirer
                        .prompt(options)
        .then(({ role }) => {
            if (role.includes('Engineer'))      getTeamMember('Engineer');
            else if (role.includes('Intern'))   getTeamMember('Intern');
            else renderTeam();
            })
        });
    });
}
// Render the team in html
function renderTeam() {
    let destinationFolder = 'team-profile-generator';
    writeToFile(destinationFolder, employees);
}

// Copy the style.css into the dist folder
function copyToFolder(destinationFolder) {
    // Copy CSS to dist folder
    fs.copyFile('./assets/css/style.css', destinationFolder + 'style.css', (err) =>
        err ? console.error(err) : console.log('Success!')
    );
    // Copy background image to dist folder
    fs.copyFile('./assets/images/cell_background.jpg', destinationFolder + 'cell_background.jpg', (err) =>
        err ? console.error(err) : console.log('Success!')
     );
}

// Write the data to the folder named
function writeToFile(folderName, data) {
    // Get the directory that index.js is in
    const myDir = __dirname;

    // Check if dist folder exists, if not make it
    if(!fs.existsSync(myDir + "/dist")){
        fs.mkdirSync(myDir + "/dist");
    }
    // Check if folder you want to save to exists, if not, make it
    if(!fs.existsSync(myDir + "/dist/" + folderName)){
        fs.mkdirSync(myDir + "/dist/" + folderName);
    }
    // Write to the file in the folder
    fs.writeFileSync(myDir + '/dist/' + folderName + '/index.html', render(data),(err) =>
        err ? console.error(err) : console.log('Success!')
    );
    // Copy the style.css to the dist folder also
    copyToFolder(myDir + '/dist/' + folderName + '/');
}
// Start application
getTeamMember("Manager");

