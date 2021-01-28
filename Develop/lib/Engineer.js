const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, userGithub) {
        const github = userGithub;
        const userName = name;
        const userId = id;
        const userEmail = email;
        
        super(userName, userId, userEmail);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    };

}

module.exports = Engineer;