module.exports = [
    {
        name: 'title',
        message: 'What would you like to call this Project?',
        type: 'input'
    },
    {
        name: 'desription',
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
        name: 'license',
        message: 'Which license would you like to include?',
        type: 'list',
        choices: [
            'MIT',
            'GNU',
            'None'
        ]

        
    },
]