// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'No license') {
    switch (license) {
      case 'GNU GPLv3':
        licenseBadge = `[![License](https://img.shields.io/badge/License-GNU%20GPLv3-yellow)]`;
        break;
      case 'MIT':
        licenseBadge = `[![License](https://img.shields.io/badge/License%20-MIT-orange)`;
        break;
      case 'Apache 2.0':
        licenseBadge = `[![License](https://img.shields.io/badge/License%20-Apache%202.0-green)]`;
        break;
      default:
        break;
    }
    return licenseBadge;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'No license') {
    switch (license) {
      case 'GNU GPLv3':
        licenseLink = `[![License](https://www.gnu.org/licenses/lgpl-3.0-standalone.html)]`;
        break;
      case 'MIT':
        licenseLink = `[![License](https://opensource.org/licenses/MIT)`;
        break;
      case 'Apache 2.0':
        licenseLink = `[![License](https://opensource.org/licenses/Apache-2.0)]`;
        break;
      default:
        break;
    }
    return licenseLink;
  } else {
    return ' ';
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'No license') {
    return `My readme generator is covered under: ${renderLicenseBadge(license)} ${renderLicenseLink}(license)`;
  } else {
    return ' ';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)} ${renderLicenseLink(data.license)}
}

## Description
  ${data.description}

## Table of Contents
  - [Description]
  - [Installation]
  - [Usage]
  - [License]
  - [Contributing]
  - [Tests]
  - [Questions]

  ## Installation
    ${data.installation}

  ## Usage
    ${data.usage}

  ## License
    ${renderLicenseSection(data.license)}
  
  ## Contributing
    ${data.contributing}

  ## Tests
    ${data.tests}

  ## Questions`;
}

module.exports = generateMarkdown;
