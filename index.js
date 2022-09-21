
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