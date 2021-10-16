//const expectExport = require('expect');
const Employee = require('./lib/Employee.js');

test("Logs a new employee", () => {
    const employee = new Employee ("Devin");

    expectExport(employee.name).toEqual(expect.any(String));
});