const {Engineer} = require('../lib/Engineer');

test ('Creates new Engineer', () => {
    const employee = new Engineer('Billy Bobert', 1234, 'bb@thorton.com', 'billy-bob-thort');

    expect(employee.name).toBe("Billy Bobert");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.github).toEqual(expect.any(String));
})

test ('Checks all methods for Engineer class', () => {
    const employee = new Engineer('Billy Bobert', 1234, 'bb@thorton.com', 'billy-bob-thort');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getGithub()).toBe(employee.github);
    expect(employee.getRole()).toBe('Engineer');
})