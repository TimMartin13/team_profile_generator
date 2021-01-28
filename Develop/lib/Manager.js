const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, userOffice) {
        const officeNumber = userOffice;
        const userName = name;
        const userId = id;
        const userEmail = email;
        
        super(userName, userId, userEmail);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    };

}

module.exports = Manager;