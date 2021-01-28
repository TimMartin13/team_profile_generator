const Employee = require('./employee');

class Manager extends Employee {
    officeNumber;

    getRole() {
        return 'Manager';
    };

}

module.exports = Manager;