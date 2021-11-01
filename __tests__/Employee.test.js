//const expectExport = require('expect');
const Employee = require('../lib/Employee.js');

test("Logs a new employee", () => {
    const employee = new Employee ("Devin");

    expect(employee.name).toEqual(expect.any(String));
});