//Invokes the fs function
const fs = require(`fs`);
//invokes the inquirer module
const inquirer = require(`inquirer`);
const path = require(`path`);

// attaches the generateMarkdown file to the index file
const generateMarkdown = require(`./utils/generateMarkdown`);

// and array of questions for the user to answer. if the user is not to input something they will be prompted to redo.
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
            name: 'projectDescription',
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
            name: 'installationProcedure',
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
            name: 'userStory',
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
            name: 'credits',
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
            name: 'technologiesUsed',
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
            name: 'github',
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
            choices: [`MIT`,`Apache`, `ISC`, `IBM`, `None`]
        },
        {
            type: `input`,
            name: 'test',
            message: `What command should be run to perform tests?`,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(`Please enter your GitHub username!`);
                    return false;
                }
            }
        }
];


//This function is to write to the README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// this function initialized the app and create the file readme from the generateMarkdown file 
function init() {
    inquirer.prompt(questions).then((inquirerResponses)=>{
        console.log("generating readme");
        writeToFile("README.md", generateMarkdown({...inquirerResponses}))
    })
    .catch (err => err ? console.log (err): console.log("Fail"))
}

// Function call to initialize app
init();
