//const expectExport = require('expect');
const Intern = require('../lib/Intern.js');

test("Logs a new employee", () => {
    const intern = new Intern ("Devin");

    expect(intern.name).toEqual(expect.any(String));
});