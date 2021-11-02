const fs = require('fs');
const inquirer = require('inquirer');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
 

const teamProfiles = [];

var profileQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Manager name: ',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Required input!")
                    return false;
                }
            }
        },

    ])

    .then(managerProfile => {
        let manager = new Manager(managerProfile.name, managerProfile.id, managerProfile.email, managerProfile.officeNumber);

        teamProfiles.push(manager);
        console.log(teamProfiles);
    })
};

function addEmployees() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Employee name: ',
            validate: nameInput => {
                if(!nameInput) {
                    console.log("Required input!")
                    return false;

                } else {
                    return true;
                }
            }

        },
        {
            name: "role",
            type: 'list',
            message: "Select employee role.",
            choices: ["Engineer","Intern"]
            

        },

        {
            name: 'id',
            type: 'input',
            message: 'Enter employee ID: ',
            validate: idInput => {
                if(!idInput) {
                    console.log("Required input!")
                    return false;

                } else {
                    return true;
                }
                
            }
        },

        {
            name: 'email',
            type: 'input',
            message: "Enter employee email: ",
            validate: emailInput => {
                if(!emailInput) {
                    console.log("Required input!")
                    return false;

                } else {
                    return true;
                }
            }

        },

        {

        }


    ])

    .then (employeeProfile => {
        let employee = new Employee(employeeProfile.name, employeeProfile.id, employeeProfile.email, employeeProfile.officeNumber);

        teamProfiles.push(employee);
        console.log(teamProfiles);
    })
}

profileQuestions();