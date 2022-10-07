// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "None"){
    return `![License Badge](https://img.shields.io/badge/License-${license}-brightgreen)`
  }
    return "";
};
// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case value:
      
      break;
  
    default:
      break;
  }
  // if(license !== "None"){
  // return `* [License Link]((https://opensource.org/licenses/${data.license}))`
  // }
  // return "";
};

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== "None"){
    return `## License
    
    This project is licensed under the ${license} license.` //${renderLicenseSection(data.license)}
    }
    return "There is no license associated with this project.";
}

// // TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
<h1 align="center"> ${data.title} </h1>

${renderLicenseBadge(data.license)}

## Description
* ${data.projectDescription}

GitHub Repository: [**${data.github}**](https://github.com/${data.github}/${data.title})


## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [User-Story](#user-story)
* [Usage](#usage)
* [Contributions](#contributions)
* [Credits](#credits)
* [Technologies-Used](#technologies-used)
* [Badges](#badges)
* [License](#license)
* [Questions](#questions)
* [Test](#test)

## Installation
${data.installationProcedure}

## User-Story
${data.userStory}

## Usage
${data.usage}

## Contributions
${data.contributions}

## Credits
${data.credits}

## Technologies-Used
${data.technologiesUsed}

## Badges
${renderLicenseBadge(data.license)}

${renderLicenseSection(data.license)}
${renderLicenseSection(data.license)}


## Questions
*For further questions:*

If you have any questions, how to contribute or additional feedback, please contact our GitHub Repository and we will get back to you as soon as possible.

*Contact Info:*

GitHub: [**${data.github}**](https://github.com/${data.github})

Email: ${data.email}

## Test
${data.test}

`;
}

module.exports = generateMarkdown;
