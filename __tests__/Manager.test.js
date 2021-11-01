//const expectExport = require('expect');
const Manager = require('../lib/Manager.js');

test("Logs a new employee", () => {
    const manager = new Manager ("Devin");

    expect(manager.name).toEqual(expect.any(String));
});