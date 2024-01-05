const inquirer = require('inquirer')
const userInput = require('./lib/userinput.js')
const { Circle, Triangle, Square} = require('./lib/shapes.js')

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

function init(){
    inquirer.prompt(questions)
    .then((responses) =>{
        let shape = ""
        switch(responses.shape)
            { 
               case "circle": 
                shape = new Circle(responses.shapeColor)

               break;
               case "triangle":
                shape = new Triangle(responses.shapeColor)

               break
               case "square":
                shape = new Square(responses.shapeColor)
                
               break
            }
            
    })

    
}


init()