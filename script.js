let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function Circle(radius, color) {
    this.radius = radius;
    this.iX = 0;
    this.iY = 0;
    this.speed = 5;
    this.dxX =
        Math.round(this.speed * Math.sin((135 * Math.PI) / 180) * 1000) / 1000; // base velocity
    this.dxY =
        -Math.round(this.speed * Math.cos((135 * Math.PI) / 180) * 1000) / 1000;
    this.iteration = 0; // used to skip frame check if circle just appeared
    this.iteration2 = -1; // used to skip frame checking after we applied new angles (reduces circle jiggling)
    this.angle = 0;
    this.drawCircle = function() {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(this.iX, this.iY, this.radius, 0, 2 * Math.PI, false);
        ctx.fill();
    };
    this.update = function() {
        if (this.iteration > this.radius / this.dxX && this.iteration2 < 0) {
            // frame checking
            let changeDirection = false;
            if (this.iX + this.radius >= window.innerWidth) {
                // circle touches right side
                if (this.dxY > 0) {
                    // calculating random angle every time we hit window side
                    this.angle = Math.ceil(Math.random() * (260 - 190) + 190);
                } else {
                    this.angle = Math.ceil(Math.random() * (350 - 280) + 280);
                }
                changeDirection = true;
                this.iteration2 = 4;
            }
            if (this.iY + this.radius >= window.innerHeight) {
                // circle touches bottom side

                if (this.dxX > 0) {
                    this.angle = Math.ceil(Math.random() * (80 - 10) + 10);
                } else {
                    this.angle = Math.ceil(Math.random() * (350 - 280) + 280);
                }

                changeDirection = true;

                this.iteration2 = 4;
            }
            if (this.iX - this.radius <= 0) {
                // circle touches left side

                if (this.dxY > 0) {
                    this.angle = Math.ceil(Math.random() * (170 - 100) + 100);
                } else {
                    this.angle = Math.ceil(Math.random() * (80 - 10) + 10);
                }

                changeDirection = true;

                this.iteration2 = 4;
            }
            if (this.iY - this.radius <= 0) {
                // circle touches top side

                if (this.dxX > 0) {
                    this.angle = Math.ceil(Math.random() * (170 - 100) + 100);
                } else {
                    this.angle = Math.ceil(Math.random() * (260 - 190) + 190);
                }

                changeDirection = true;
                this.iteration2 = 4;
            }
            if (changeDirection === true) {
                // this.speed * (Math.sin(this.angle * Math.PI / 180)) calculates x velocity by calculating x position
                // of point in space relative to coordinates 0.0 with distance of this.speed and this.angle angle
                this.dxX =
                    Math.round(
                        this.speed * Math.sin((this.angle * Math.PI) / 180) * 1000
                    ) / 1000;
                this.dxY =
                    -Math.round(
                        this.speed * Math.cos((this.angle * Math.PI) / 180) * 1000
                    ) / 1000;
            }
        }

        this.iX += this.dxX;
        this.iY += this.dxY;
        this.iteration++;
        this.iteration2--;
        this.drawCircle();
    };
}

function myFu() {
    let colorR1 = Math.random() * (256 - 2) + 2;
    let colorB1 = Math.random() * (256 - 2) + 2;
    let colorG1 = Math.random() * (256 - 2) + 2;
    let circle = new Circle(
        Math.ceil(Math.random() * (50 - 20) + 20),
        `rgb(${colorR1}, ${colorB1}, ${colorG1})`
    );
    arrayOfCircles.push(circle);
    function draw() {
        requestAnimationFrame(draw);
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        for (let i = 0; i < arrayOfCircles.length; i++) {
            arrayOfCircles[i].update();
        }
    }
    if (!arrayOfCircles[1]) {
        draw();
    } // if condition verifies that we call draw() function only one time
}

let sI = 2;
let circlesAmount = 20;
let arrayOfCircles = [];

myFu();
let myInterval = setInterval(function() {
    myFu();
    if (sI === circlesAmount) {
        clearInterval(myInterval);
    }
    sI++;
}, 5000);


