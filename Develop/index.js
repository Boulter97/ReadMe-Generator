const fs = require ('fs');
const inquirer = require('requirer');
const generateMarkdown = require ('./generateMarkdown');

const questions = [
    { type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },

    { type: 'input',
      name: 'title',
      message: 'What is your decription for your project?',
    },

    { type: 'input',
      name: 'title',
      message: 'input your table of contents',
    },
    { type: 'input',
      name: 'title',
      message: 'how do you install/run your project?',
    },
    { type: 'input',
      name: 'title',
    message: 'What is the use of this project?',
    },
    { type: 'input',
      name: 'title',
      message: 'Choose a licence for your project',
    },
    { type: 'input',
      name: 'title',
      message: 'Who has contributed to this project?',
    },
    { type: 'input',
      name: 'title',
      message: 'how do you test your project?',
    },

    { type: 'input',
      name: 'title',
      message: 'common questions about your project?',
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
