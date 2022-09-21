
const { Manager, managerQuestionsArr} = require('./lib/Manager');
const { Engineer, engineerQuestionsArr } = require('./lib/Engineer');
const { Intern, internQuestionsArr } = require('./lib/Intern');
const employeeArr = [];
const inquirer = require('inquirer');
const template = require ('./src/page-template');
const writeFile = require('./src/page-write-file');

const init = () => { managerQuestionsArr() }
const managerQuestions = () => {
    inquirer.createPromptModule(managerQuestionsArr)
    .then(( answers ) => {
        answers = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        employeesArr.push(answers);
        return employeePrompt();
    })
}

const engineerQuestions = () => {
    inquirer.createPromptModule(engineerQuestionsArr)
    .then(( answers ) => {
        answers = new Engineer(answers.name, answers.id, answers.email, answers.github)
        employeesArr.push(answers);
        return employeePrompt();
    })
}

const internQuestions = () => {
    inquirer.createPromptModule(internQuestionsArr)
    .then(( answers ) => {
        answers = new Intern(answers.name, answers.id, answers.email, answers.github)
        employeesArr.push(answers);
        return employeePrompt();
    })
}

const employeePrompt = () => {
    inquirer.createPromptModule([{
        type: 'list',
        name: 'employeeType',
        message: "What kind of team member would you like to add?",
        choices: [
            {name: 'Engineer', value: "addEngineer"},
            {name: 'Intern', value: "addIntern"},
            {name: 'DONE', value: "done"}
        ]
    }])
    .then( answer => {
        if (answer.employeeType === 'addEngineer') { engineerQuestions(); };
        if (answer.employeeType === 'addIntern') { internQuestions(); };
        if (answer.employeeType === 'done') {

            let html = template(employeesArr)
            console.log('...')

            writeFile(html);
        }
    })
}

init();