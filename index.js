const inquirer = require ("inquirer");
const fs = require("fs");
// const Shapes = require("./lib/shapes.js");
const {Circle, Triangle, Square} = require("./lib/shapes.js");
let shape;

// ======================================================

function svgFile({logoCharacters, charactersClr, logoShape, shapeClr} , shape) {
    shape.setColor();
    shape = shape.render();
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${charactersClr}">${logoCharacters}</text>
    </svg>`;

}

// ======================================================


// User need to answer these questions to get his/her logo
const userInput = [
    {
    name:"logoCharacters",
    type:"input",
    message:"Please advise logo text ? (you can input up to 3 characters only)",
    validate: function(characters) {
        if (characters.length <=3) {
            return true;
        } else {
            return "You only can enter till max 3 characters.";
        }
    }},
    {
    name:"charactersClr",
    type:"input",
    message:"Please enter a color keyword or a hex no. to choose a TEXT color?",
    },
    {
    name:"logoShape",
    type:"list",
    message:"Which shape you preferred your logo to be ?",
    choices:["Circle", "Square", "Triangle"],
    },
    {
    name:"shapeClr",
    type:"input",
    message:"Please enter a color keyword or a hex no. to choose the LOGO color?",
    },
];

// initialize the app depending on user answers
function init() {
inquirer.prompt(userInput).then(userAnswers => {



switch (userAnswers.logoShape){
    case "Circle":
    shape = new Circle(userAnswers.logoCharacters, userAnswers.charactersClr, userAnswers.shapeClr);
    break;
    
    case "Square":
    shape = new Square(userAnswers.logoCharacters, userAnswers.charactersClr, userAnswers.shapeClr);
    break;
    
    case "Triangle":
    shape = new Triangle(userAnswers.logoCharacters, userAnswers.charactersClr, userAnswers.shapeClr);
    break;
    
    default:
    console.log("You have to choose a shape from list.");
    break;

}

// creating SVG file
const content = svgFile(userAnswers, shape);
fs.writeFile("./examples/logo.svg", content, (err) => 
    err ? console.log(err) : console.log("Created SVG file!")
);
})
.catch((error) => {
console.log("could not create file", error);
})};

init();