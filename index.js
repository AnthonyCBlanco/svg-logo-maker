const inquirer = require('inquirer')
const fs = require('fs')
const { Circle, Triangle, Square} = require('./lib/shapes.js')

const questions = [
    {
        type:'input',
        message:'Please Enter Up To 3 Characters For Your Logo',
        name:'text',
    },
    {
        type:'input',
        message:'What Color Whould You Like Your Text To Be(Hexidecimal or A Color Keyword)',
        name:'textColor',
    },
    {
        type:'list',
        choices:['Circle', 'Triangle', 'Square'],
        message:'What Shape Would You Like:',
        name:'shape',
    },
    {
        type:'input',
        message:'What Color Whould You Like Your Shape To Be(Hexidecimal or A Color Keyword)',
        name:'shapeColor',
    },
]
function writeNewSVG(shape){
    fs.writeFile('logo.svg', shape, (err) => {
        if (err) throw err;
        console.log('New Logo Created')
    })
}

function init(){
    inquirer.prompt(questions)
    .then((responses) =>{
        console.log(responses.text)
        if(responses.text.length > 3 || responses.text.length === 0){
            console.error('!!Please Enter Up To 3 Characters!!')
        }else{
        let shape = ""
        switch(responses.shape)
            { 
               case "Circle": 
                shape = new Circle(responses.shapeColor, responses.text, responses.textColor)
                    writeNewSVG(shape.create())
               break;
               case "Triangle":
                shape = new Triangle(responses.shapeColor, responses.text, responses.textColor)
                    writeNewSVG(shape.create())
               break
               case "Square":
                shape = new Square(responses.shapeColor, responses.text, responses.textColor)
                    writeNewSVG(shape.create())
               break
            }
        }     
    })

}

init()