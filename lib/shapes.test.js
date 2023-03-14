// Testing for Triangle logo

const {Triangle, Circle} = require("../lib/shapes.js");

describe("Triangle", () => {

    describe("testTriangle", () => {
        it("Should return with blue triangle", () => {
            const shape = new Triangle();
            
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
            });
    });
    });

    describe("Circle", () => {

    describe("testCircle", () => {
        it("Should return with green circle", () => {
            const shape = new Circle();
            
            shape.setColor("green");
            expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="green" />`);
            });
    });
    });