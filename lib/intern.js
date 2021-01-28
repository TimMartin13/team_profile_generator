const Employee = require('./employee');

class Intern extends Employee {
    school;

    getSchool() {
        return this.school;
    }
    getRole() {
        return 'Intern';
    };

}

module.exports = Intern;