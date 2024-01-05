const inquirer = require('inquirer')
const userInput = require('./lib/userinput.js')

const questions = [
    {
        type:'input',
        message:'Please Enter Up To 3 Characters For Your Logo',
        name:'characters',
    },
    {
        type:'input',
        message:'What Color Whould You Like Your Text To Be(Hexidecimal or A Color Keyword)',
        name:'textColor',
    },
    {
        type:'input',
        message:'What Shape Would You Like: Circle, Triangle, or Square',
        name:'shape',
    },
    {
        type:'input',
        message:'What Color Whould You Like Your Shape To Be(Hexidecimal or A Color Keyword)',
        name:'shapeColor',
    },
]

//