const inquirer = require("inquirer");
const fs = require("fs");
// const generateTeam = require("./src/page-template.js");

// lib modules
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// Array for answers to questions
const teamMembers = [];

// Array object questions asked in CLI to user
async function addManager() {
    await inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the manager's name?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the manager's id?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the manager's email?",
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "What is the manager's office number?",
            }
        ])
        .then(response => {
            const manager = new Manager(response.name, response.id, response.email, response.officeNumber)
            console.log(manager);
            teamMembers.push(manager)
        })
}

async function addEngineer() {
    await inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the engineer's name?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the engineer's id?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the engineer's email?",
            },
            {
                type: 'input',
                name: 'github',
                message: "What is the engineer's GitHub username?",
            }
        ])
        .then(response => {
            const engineer = new Engineer(response.name, response.id, response.email, response.github)
            console.log(engineer);
            teamMembers.push(engineer)
        })
}

async function addIntern() {
    await inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the intern's name?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the intern's id?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the intern's email?",
            },
            {
                type: 'input',
                name: 'school',
                message: "What is the name of the intern's school?",
            }
        ])
        .then(response => {
            const intern = new Intern(response.name, response.id, response.email, response.school)
            console.log(intern);
            teamMembers.push(intern)
        })
}


async function start() {

    console.log('Welcome, Please add a Manager to Continue forming your team\n');
    await addManager();

    let addMemberAns = await inquirer
        .prompt([
            {
                name: 'addMember',
                type: 'list',
                choices: ['Add a new member', 'Finish Team Creation'],
                message: "What would you like to do next?"
            }
        ])

    while (addMemberAns.addMember === 'Add a new member') {
        let memberType = await inquirer
            .prompt([
                {
                    name: 'memberType',
                    type: 'list',
                    choices: ['Engineer', 'Intern'],
                    message: "What type of Team Member would you like to add?"
                }
            ])

        if (memberType.memberType === 'Engineer') {
            await addEngineer();
        }
        else if (memberType.memberType === 'Intern') {
            await addIntern()
        }

        addMemberAns = await inquirer
            .prompt([
                {
                    name: 'addMember',
                    type: 'list',
                    choices: ['Add a new member', 'Finish Team Creation'],
                    message: "What would you like to do next?"
                }
            ])
    }

    if (addMemberAns.addMember === 'Finish Team Creation') {
        console.log('Team Created', teamMembers);
    }
}

function createFile() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    } else {

        fs.writeFileSync(outputPath, render(teamMembers), "UTF-8");
        console.log("File created in the output folder");
    }

}

start();
