// function to generate markdown for README
function generateMarkdown(data) {
  return `#${data.title}\n

###${data.description}
\n
####Built with: 
  * ${data.tech1}
  * ${data.tech2}

## Table of Contents
  * Installation
  * Usage
  * Contributing
  * Test
  * License
  * Questions

## Installation
* Clone the repo
\tgit clone https://github.com/your_username_/Project-Name.git
*Install NPM packages
\tnpm install

## Usage\n
![alt text](${data.imgPath})\n
${data.usage}
\n
## Contributing\n
To contribute to ${data.title}, follow these steps:
1. Fork this repository.
2. Create a branch: "git checkout -b <branch_name>".
3. Make your changes and commit them: "git commit -m '<commit_message>"
4. Push to the original branch: "git push origin <${data.title}>/<location>"
5. Create the pull request.
\n
## Test\n
${data.test}

## License\n
${data.license}

## Questions
${data.githubName}
${data.email}
  
`;
}

module.exports = generateMarkdown;
