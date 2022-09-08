renderLicenseBadge = (license) => {
  switch (license) {
    case "MIT":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    case "IPL 1.0":
      return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
    case "MPL 2.0":
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    default:
      return
  }
}
//the links were easy to get together they were just a matter of copy/pasting in there and using a switch case
renderLicenseLink = (license) => {
  switch (license) {
    case "MIT":
      return `https://opensource.org/licenses/MIT`
    case "IPL 1.0":
      return `https://opensource.org/licenses/IPL-1.0`
    case "MPL 2.0":
      return `https://opensource.org/licenses/MPL-2.0`
    default:
      return
  }
}

renderLicenseSection = (license) => {
  if (license === 'MIT' || license === 'IPL 1.0' || license === 'MPL 2.0') {
    return `## License
Link to your license [${license}](${renderLicenseLink(license)})
${renderLicenseBadge(license)}`
  } else {
    return ``;
  }
}

// TODO: Create a function to generate markdown for README
//struggled a bit with making sure the format here was ok
function generateMarkdown(answers) {
  return `# ${answers.title}

${renderLicenseBadge(answers.license)}

  ## Description
  ${answers.description}
  
  
  ## Table of Contents (Optional)
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Link](#link)

 
---  
  
  ## Installation
  ${answers.installation}
  
  ## Usage
  
  ${answers.usage}
  
  



  
  ${renderLicenseSection(answers.license)}


  ---
  ## Contributing
  ${answers.contributions}

  ## Link 
  github: ${answers.github}

  ## Video Link
  https://www.awesomescreenshot.com/video/10980073?key=b4e0febba13eaa65ed67d52a8c697626

`;
}

module.exports = generateMarkdown;
