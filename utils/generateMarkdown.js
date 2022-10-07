// this function renders the license badge that the user selected to generate a badge from the shields website
function renderLicenseBadge(license) {
  if(license !== "None"){
    return `![License Badge](https://img.shields.io/badge/License-${license}-brightgreen)`
  }
    return "";
};

// this function renders the license link base on what the user selected for their license
function renderLicenseLink(license) {
  switch (license) {
    case `MIT`: 
    return "[License MIT](https://opensource.org/licenses/MIT)"
    case `Apache`:
    return "[License: Apache 2.0](https://opensource.org/licenses/Apache-2.0)"
    case `ISC`:
    return "[License: ISC](https://opensource.org/licenses/ISC)"
    case `IBM`:
    return "[License: IPL 1.0](https://opensource.org/licenses/IPL-1.0)"
  }
};

// this function displays the License section to the README if a license was selected other than none.
function renderLicenseSection(license) {
  if(license !== "None"){
    return `## License
    
    This project is licensed under the ${license} license.` //${renderLicenseSection(data.license)}
    }
    return "There is no license associated with this project.";
}

// this generates the content on the readme file each section has data provide by the user by ${data.whatever input}
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
* ${renderLicenseLink(data.license)}


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

//exports the data to README
module.exports = generateMarkdown;
