const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes.js');
let output = ""

//starts the application by getting user parameters
inquirer.prompt([
    {
        name: "text",
        message: "What text would you like on your logo (max 3 characters)?",
        type: "input",
    },
    {
        name: "textColor",
        message: "What color should the text be (keyword or hex code)?",
        type: "input",
    },
    {
        name: "shape",
        message: "What shape should your logo be?",
        type: "list",
        choices: ["Circle", "Triangle", "Square"]
    },
    {
        name: "shapeColor",
        message: "What color should the shape be (keyword or hex code)?",
        type: "input",
    }])
    .then(function(response){
        //since the logo can only hold 3 characters, this will terminate the program if more than 3 are added
        if (response.text.length > 3) {
            throw new Error('Text must be no more than 3 characters. Try again!');
        }
        switch(response.shape){
            case "Circle":
                output = new Circle(response.shape, response.text, response.textColor, response.shapeColor, "80");
                output.render();
                break;
            case "Triangle":
                output = new Triangle(response.shape, response.text, response.textColor, response.shapeColor, "0,290 100,70 200,290");
                output.render();
                break;
            case "Square":
                output = new Square(response.shape, response.text, response.textColor, response.shapeColor, 'width="200" height="100"');
                output.render();
                break;
            default:
                //there shouldn't be a default case. Hopefully this message never triggers
                console.log("Andrew broke something");
        }
    })