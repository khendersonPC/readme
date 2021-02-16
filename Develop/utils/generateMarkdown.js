// function to generate markdown for README
function generateMarkdown(data) {
  return `
  ![](https://img.shields.io/badge/license-${data.license}-green)

  # ${data.title}\n

### ${data.description}

#### Built with: 
  * ${data.tech1}
  * ${data.tech2}

## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Test](#test)
  * [License](#license)
  * [Questions](#questions)

## Installation
* Clone the repo--> git clone https://github.com/${data.githubName}/${data.title}.git

* Install NPM packages--> npm install

## Usage
![alt text](${data.imgPath})\n
${data.usage}

## Contributing
To contribute to ${data.title}, follow these steps:
1. Fork this repository.
2. Create a branch: "git checkout -b <branch_name>".
3. Make your changes and commit them: "git commit -m '<commit_message>"
4. Push to the original branch: "git push origin <${data.title}>/<location>"
5. Create the pull request.
\n
## Test
${data.test}

## License
This project is covered under a ${data.license} license. 

## Questions
This is my [GitHub Profile](https://github.com/${data.githubName}/) to check out my other repos.
Best way to reach me?\n 
${data.email}
  
`;
}

module.exports = generateMarkdown;
