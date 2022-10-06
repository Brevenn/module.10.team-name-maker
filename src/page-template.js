const manager = managerData => {
    return `
    <div "id=${managerData.getRole()}-card" class="p-3 col-4">
        <div class="card">
            <div class="card-header">
                <h2>${managerData.getName()}</h2>
                <h3>Role: ${managerData.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${managerData.getId()}</li>
                    <li class="list-group-item">Email: <a href="malito:${managerData.getEmail()}">${managerData.getEmail()}</a></li>
                    <li class="list-group-item">Office Number: ${managerData.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
    </div>
`
}

const engineer = engineerData => {
    return `
    <div id="${engineerData.getRole()}-card" class="p-3 col-4">
        <div class= "card">
            <div class="box name-role engineer-name">
                <h2>${engineerData.getName()}</h2>
                <h3>Role: ${engineerData.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${engineerData.getId()}</li>
                    <li class="list-group-item">Email: <a href="malito:${engineerData.getEmail()}">${engineerData.getEmail()}</a></li>
                    <li class="list-group-item">Github:
                        <a href="https://github.com/${engineerData.getGithub()}" target="_blank">www.github.com/${engineerData.getGithub()}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
`
}

const intern = internData => {
    return`
    <div id="${internData.getRole()}-card" class="p-3 col-4">
        <div class = "card">
            <div class="box name-role intern-name">
                <h2>${internData.getName()}</h2>
                <h3>Role: ${internData.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${internData.getId()}</li>
                    <li class="list-group-item">Email: <a href="malito:${internData.getEmail()}">${internData.getEmail()}</a></li>
                    <li class="list-group-item">School: ${internData.getSchool()}</li>
                </ul>
            </div>
        </div>
    </div>
`
}

const employeesDiv = employeesArr => {
    let employeeHtml = ''

    for ( i = 0; i < employeesArr.length; i++) {
    if ( employeesArr[i].getRole() === 'Manager') {
        employeeHtml = employeeHtml + manager(employeesArr[i])
    }
    if (employeesArr[i].getRole() === "Engineer"){
        employeeHtml = employeeHtml + engineer(employeesArr[i])
    }
    if (employeesArr[i].getRole() === "Intern"){
        employeeHtml = employeeHtml + intern(employeesArr[i])
    }
  } return employeeHtml
}

const template = data => {
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <title>Team Name</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <link rel="stylesheet" href="./style.css"><source src="../page-template.js" type="page-template">
        </head>
        <body>
            <header class = "text-center fs-1">

            My Team

            </header>
            <main class = "container row d-flex flex-wrap m-auto">
                ${employeesDiv(data)}
            </main>
        </body>
    </html>

`
}

module.exports = template;