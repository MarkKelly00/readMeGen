function generateMarkdown(data) {
    return `
# ${data.name}
[![Github license](https://img.shields.io/badge/license-${data.license}-blue.svg)]

## Description
${data.description}

## Table of contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Test](#test)
* [Profiel Picture](#profilePic)
* [Github Email](#profileEmail)

## Installation
${data.installation}

## Usage
\`\`\`
${data.usage}
\`\`\`

## Contributing
${data.contributing}

## License
[![Github license](https://img.shields.io/badge/license-${data.license}-blue.svg)]

## Test
\`\`\`
${data.test}
\`\`\`

## Profile Picture
[![Profile Pic](${data.profilePic})]

## Github Email
${data.profileEmail}
`;
}

module.exports = generateMarkdown;