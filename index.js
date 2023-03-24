const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./src/page-template.js");

// lib modules
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// Array for answers to questions
const newStaffMemberData = [];

// Array object questions asked in CLI to user
function addManager() {
    inquirer
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
            teamMembers.push(manager)
        })
        .then(() => init())
}

function addEngineer() {
    inquirer
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
            teamMembers.push(engineer)
        })
        .then(() => init())
}

function addIntern() {
    inquirer
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
            teamMembers.push(intern)
        })
        .then(() => init())
}
async function promptQuestions() {
  await questions()
    
  
  const addMemberAns = await inquirer
    .prompt([
      {
        name:'addMember',
        type: 'list',
        choices: ['Add a new member', 'Create team'],
        message: "What would you like to do next?"
      }
    ])

    if (addMemberAns.addMember === 'Add a new member') {
      return promptQuestions()
    }
    return createTeam();
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
