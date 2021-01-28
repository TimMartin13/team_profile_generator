const Employee = require('./employee');

class Engineer extends Employee {
    github;

    getGithub() {
        return this.github;
    }
    getRole() {
        return 'Engineer';
    };

}

module.exports = Engineer;