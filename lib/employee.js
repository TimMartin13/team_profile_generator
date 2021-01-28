class Employee {
    name;
    employeeId;
    email;

    getName() {
        return this.name;
    };

    getId() {
        return this.employeeId;
    };

    getEmail() {
        return this.email;
    };

    getRole() {
        return 'Employee';
    };

}

module.exports = Employee;