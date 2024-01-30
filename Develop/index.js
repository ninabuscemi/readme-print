const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the project title:'
  },

  {
    type: 'input',
    name: 'description',
    message: 'Provide a brief description of your project:'
  },

  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions:'
  },

  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage information:'
  },

  {
    type: 'input',
    name: 'contribution',
    message: 'Provide contribution guidelines:'
  },

  {
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions:'
  },

  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your application:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None']
  },

  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:'
  },
  
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:'
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Successfully wrote to ${fileName}`);
    }
  });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
      const readmeContent = generateMarkdown(answers); // Calls the generateMarkdown function here and passes the answers object
      // to generate the README content
      writeToFile('README.md', readmeContent); // Writes the content to the README.md file
    })
    .catch((error) => {
      console.error(error);
    });
}

// Function call to initialize app
init();
