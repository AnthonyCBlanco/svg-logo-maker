class Shapes {
    constructor(color) {
        this.color = color
    }
}
class Triangle extends Shapes{
    constructor(color){
        super(color)
    }
    create(){
        return``
    }
}

class Circle extends Shapes{
    constructor(color){
        super(color)
    }
    create(){
        return``
    }
}

class Square extends Shapes{
    constructor(color){
        super(color)
    }
    create(){
        return`
        <svg width="200" height="200">  
            <rect width="200" height="200" style="fill:${this.color};" />
        </svg>
        `
    }
}

module.exports = {
    Triangle,
    Circle,
    Square,
}