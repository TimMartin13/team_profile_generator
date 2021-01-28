const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, userSchool) {
        const school = userSchool;
        const userName = name;
        const userId = id;
        const userEmail = email;
        
        super(userName, userId, userEmail);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
    
    getRole() {
        return 'Intern';
    };

}

module.exports = Intern;