module.exports = [
    {
        name: 'title',
        message: 'What would you like to call this Project?',
        type: 'input'
    },
    {
        name: 'description',
        message: 'describe your project',
        type: 'input'

    },
    {
       name: 'installation',
       message: 'How was your project installed?',
       type: 'input'
    },
    {
        name: 'usage',
        message: 'What is the primary use of the application?',
        type: 'input'
    },
    {
        type: 'rawlist',
        name: 'license',
        choices: ['MIT', 'IPL 1.0', 'MPL 2.0', 'None'],
        message: "What type of license do you like to use?"

        
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
        default: 'https//github.com'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Who contributed to this project?'
    }
]