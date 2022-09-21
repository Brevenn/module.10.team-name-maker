const { Intern } = require('../lib/Intern');

test ('Creates new employee', () => {
    const employee = new Intern('Billy Bobert', 1234, 'bb@thorton.com', 'Baylor');

    expect(employee.name).toBe("Billy Bobert");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.school).toEqual(expect.any(String));
})

test ('Checks all methods for Interns class', () => {
    const employee = new Intern('Billy Bobert', 1234, 'bb@thorton.com', 'Baylor');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getSchool()).toBe(employee.school);
    expect(employee.getRole()).toBe('Intern');
})