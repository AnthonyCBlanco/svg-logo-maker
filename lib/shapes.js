class Shapes {
    constructor(color, text) {
        this.color = color
        this.text  = text
    }
}
class Triangle extends Shapes{
    constructor(color, text){
        super(color, text)
    }
    create(){
        return`
        <svg width="200px" height="200px">
            	<polygon points="50 15, 100 100, 0 100"/>
                <text x="50" y="60" dominant-baseline="middle" text-anchor="middle" fill="${this.color}">${this.text}</text>
        </svg>`
    }
}

class Circle extends Shapes{
    constructor(color, text){
        super(color, text)
    }
    create(){
        return`
        <svg width="200" height="200">
            <circle cx="50" cy="50" r="50" style="fill:${this.color};" />
            <text x="50" y="50" dominant-baseline="middle" text-anchor="middle" fill="${this.color}">${this.text}</text>
        </svg>
      `
    }
}

class Square extends Shapes{
    constructor(color, text){
        super(color, text)
    }
    create(){
        return`
        <svg width="200" height="200">  
            <rect width="100" height="100" style="fill:${this.color};" />
            <text x="50" y="50" dominant-baseline="middle" text-anchor="middle" fill="${this.color}">${this.text}</text>
        </svg>
        `
    }
}

module.exports = {
    Triangle,
    Circle,
    Square,
}