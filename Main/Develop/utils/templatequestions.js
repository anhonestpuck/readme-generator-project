module.exports = [
    {
        name: 'title',
        message: 'What would you like to call this Project?',
        type: 'input'
    },
    {
        name: 'Desription',
        message: 'describe your project',
        type: 'input'

    },
    {
       name: 'Installation',
       message: 'How was your project installed?',
       type: 'input'
    },
    {
        name: 'Usage',
        message: 'What is the primary use of the application?',
        type: 'input'
    },
    {
        name: 'License',
        message: 'Which license would you like to include?',
        type: 'list',
        choices: [
            'MIT',
            'GNU',
            'None'
        ]

        
    },
]