//const expectExport = require('expect');
const Engineer = require('../lib/Engineer.js');

test("Logs a new employee", () => {
    const engineer = new Engineer ("Devin");

    expect(engineer.name).toEqual(expect.any(String));
});