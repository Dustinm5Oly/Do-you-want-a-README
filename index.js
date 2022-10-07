// TODO: Include packages needed for this application
const fs = require(`fs`);
const inquirer = require(`inquirer`);
const { SocketAddress } = require("net");

const generateMarkdown = require(`./utils/generateMarkdown`);

// TODO: Create an array of questions for user input
const questions = [ 
        {
            type: `input`,
            name: 'title',
            message: `What is the title of your project?`,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(`Please enter the title of your project.`);
                    return false;
                }
                }
        },
        {
            type: `input`,
            name: 'project-description',
            message: `Please provide a description of your project.`,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(`Please enter a description of your project`);
                    return false;
                }
                }
        },
        {
            type: `input`,
            name: 'installation-procedure',
            message: `Please provide the steps required to install your project.`,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(`Please enter the steps required to install your project`);
                    return false;
                }
                }
        },
        {
            type: `input`,
            name: 'user-story',
            message: `Please provide a user story for your project.`,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(`Please enter your user story.`);
                    return false;
                }
                }
        },
        {
            type: `input`,
            name: 'usage',
            message: `Please enter how a user would use this product.`,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(`Please enter how this product will be used.`);
                    return false;
                }
                }
        },
        {
            type: `input`,
            name: 'contributions',
            message: `How can some contribute to your project?`,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(`Please enter how to contribute.`);
                    return false;
                }
                }
        },
        {
            type: `input`,
            name: 'Credits',
            message: `Did you have any collaborators in this project?`,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(`Please enter the names of your collaborators on this project.`);
                    return false;
                }
                }
        },
        {
            type: `input`,
            name: 'technologies-used',
            message: `Where there any technologies used in this project?`,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(`Please enter the technologies used in this project`);
                    return false;
                }
                }
        },
        {
            type: `input`,
            name: 'badges',
            message: `Were there any badges used in this project?`,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(`Please enter any badges used in this project.`);
                    return false;
                }
                }
        },
        {
            type: `input`,
            name: 'email',
            message: `Please enter your email address.`,
            validate:(answer) => {
                const pass = answer.match(/\S+@\S+\.\S+/);
                if (pass) {
                    return true;
                } 
                return "Please enter a valid email address."
                }
        },
        {
            type: `input`,
            name: 'GitHub',
            message: `What is your GitHub username?`,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(`Please enter your GitHub username!`);
                    return false;
                }
                }
        },
        {
            type: `list`,
            name: 'license',
            message: `What license was used in this project?`,
            choices: [`MIT`,`Apache 2.0`, `GPL 3.0`, `BSD 3`, `None`]
        },
        {
            type: `input`,
            name: 'test',
            message: `What command should be run to perform tests?`
        }.then(console.log("Success")),
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses)=>{
        console.log("generating readme");
        writeToFile("README.md", generateMarkdown({...inquirerResponses}))
    })
}

// Function call to initialize app
init();
