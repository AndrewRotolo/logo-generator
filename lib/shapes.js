const fs = require('fs');
const svgSettings = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">'

//these are the specifics for drawing the triangle in SVG
const trianglePoints = "0,290 100,70 200,290";

//specifics for circle
const circleRadius = "80";

//specifics for square
const squareSize = 'width="200" height="200"';

//common properties for all shapes
function Shape(shape, text, textColor, shapeColor) {
    this.shape = shape;
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
}

function Triangle(shape, text, textColor, shapeColor, points) {
    Shape.call(this, shape, text, textColor, shapeColor);
    this.points = points;
    //draws the triangle. Change the trianglePoints variable for tweaking
    points = trianglePoints;

    this.render = function () {
        let triangleText = 
`${svgSettings}

<polygon points="${points}" fill="${shapeColor} />"

<text x="95" y="270" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>`

        fs.writeFile('./logo.svg', triangleText, err => {
            if (err) {
                console.error(err);
            }
        })
        console.log("Generated logo.svg");
    }
}

function Circle(shape, text, textColor, shapeColor, radius) {
    Shape.call(this, shape, text, textColor, shapeColor);
    this.radius = radius;
    //same as Triangle
    radius = circleRadius;

    this.render = function() {
        let circleText =
`${svgSettings}

<circle cx="110" cy="100" r="${radius}" fill="${shapeColor} />

<text x="107" y="120" font-size="67" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>`;

        fs.writeFile('./logo.svg', circleText, err => {
            if (err) {
                console.error(err);
            }
        })
        console.log("Generated logo.svg");
    }
}

function Square(shape, text, textColor, shapeColor, scale) {
    Shape.call(this, shape, text, textColor, shapeColor);
    this.scale = scale;
    //same as Triangle and Circle
    scale = squareSize;

    this.render = function() {
        let squareText = 
`${svgSettings}

<rect ${scale} fill="${shapeColor}" />

<text x="100" y="125" font-size="90" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>`;

        fs.writeFile('./logo.svg', squareText, err => {
            if (err) {
            console.error(err);
            }
            
        })
        console.log("Generated logo.svg");
    }
}

module.exports = { Triangle, Circle, Square};