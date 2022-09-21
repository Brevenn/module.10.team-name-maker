const { Manager } = require('../lib/Manager');

test ('Creates new Manager', () => {
    const employee = new Manager('Billy Bobert', 1234, 'bb@thorton.com', '90210');

    expect(employee.name).toBe("Billy Bobert");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.officeNumber).toEqual(expect.any(String));
})

test ('Checks all methods for Managers class', () => {
    const employee = new Manager('Billy Bobert', 1234, 'bb@thorton.com', '90210');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getOfficeNumber()).toBe(employee.officeNumber);
    expect(employee.getRole()).toBe('Manager');
})