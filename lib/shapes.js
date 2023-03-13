class Shapes {
    constructor(logoCharacters, charatersClr, shapeClr){
        this.logoCharacters = logoCharacters; logoCharacters = "";
        this. charatersClr= charatersClr;
        this. shapeClr= shapeClr;
    }
}

class Circle extends Shapes {
    constructor( logoCharacters, charatersClr, circle, shapeClr){
        super(logoCharacters, charatersClr, shapeClr);
        this. circle= circle;
    }

    setColor(shapeClr){
        this.logoCharacters = `<circle cx="150" cy="100" r="80" fill="${shapeClr}" />`;
    }
    render() {
        return this.logoCharacters;
    }
}

class Triangle extends Shapes {
    constructor( logoCharacters, charatersClr, triangle, shapeClr){
        super(logoCharacters, charatersClr, shapeClr);
        this. triangle= triangle;
    }
    
    setColor(shapeClr) {
        this.logoCharacters = `<polygon points="150,18 244,182 56,182" fill="${shapeClr}"/>`;
    }
    render() {
        return this.logoCharacters;
    }
}

class Square extends Shapes {
    constructor( logoCharacters, charatersClr, square, shapeClr){
        super(logoCharacters, charatersClr, shapeClr);
        this. square= square;
    }

    setColor(shapeClr) {
        this.logoCharacters = `<rect width="100%" height="100%" fill="${shapeClr}" />`;
    }
    render() {
        return this.logoCharacters;
    }
}


// module.exports = Shapes;
module.exports = {Circle, Triangle, Square};