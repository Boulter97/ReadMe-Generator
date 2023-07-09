const fs = require ('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


const questions = [
    { type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },

    { type: 'input',
      name: 'description',
      message: 'What is your description for your project?',
    },

    { type: 'input',
      name: 'table of contents',
      message: 'input your table of contents',
    },
    { type: 'input',
      name: 'installation',
      message: 'how do you install/run your project?',
    },
    { type: 'input',
      name: 'usage',
    message: 'What is the use of this project?',
    },
    { type: 'input',
      name: 'license',
      message: 'Choose a licence for your project',
    },
    { type: 'input',
      name: 'contributors',
      message: 'Who has contributed to this project?',
    },
    { type: 'input',
      name: 'testing',
      message: 'how do you test your project?',
    },

    { type: 'input',
      name: 'questions',
      message: 'common questions about your project?',
    },
];



function writeToFile(fileName, data) {
fs.writeFile(fileName, data, (err) => {
   if (err) {
    console.error(err);
 } else {
    console.log('README.md file generated');
 } 
});
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
    const markdown = generateMarkdown(answers);
    writeToFile('README.md', markdown);    
    });
}

// Function call to initialize app
init();
