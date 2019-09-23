









let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// let lul1 = 10*(Math.cos( 45 * Math.PI / 180));
// let lul2 = 10*(Math.sin(45 * Math.PI / 180));
//
// let lul3 = 10*(Math.cos( 135 * Math.PI / 180));
// let lul4 = 10*(Math.sin(135 * Math.PI / 180));
//
// let lul5 = 10*(Math.cos( 225 * Math.PI / 180));
// let lul6 = 10*(Math.sin(225 * Math.PI / 180));
//
// let lul7 = 10*(Math.cos( 315 * Math.PI / 180));
// let lul8 = 10*(Math.sin(315 * Math.PI / 180));
// console.log(lul1 + " " + lul2 + " " + lul3 + " " + lul4 + " " + lul5 + " " + lul6 + " " + lul7 + " " + lul8);
//
// Math.random() * (80 - 10) + 2);           x+ y+
// Math.random() * (170 - 100) + 100);        x+ y-
// Math.random() * (260 - 190) + 190);      x- y-
// Math.random() * (350 - 280) + 280)       x- y+


function Circle(radius, color1, color2) {
    this.radius = radius;
    this.color1 = color1;
    this.color2 = color2;
    this.iX = 0;
    this.iY = 0;
    this.speed = 9;
    this.dxX = Math.round( (this.speed * (Math.sin(135 * Math.PI / 180))) * 1000) / 1000; // base velocity
    this.dxY = -Math.round( (this.speed * (Math.cos(135 * Math.PI / 180))) * 1000) / 1000;
    this.iteration = 0; // used to skip frame check if circle just appeared
    this.iteration2 = -1; // used to skip frame checking after we applied new angles (reduces circle jiggling)
    this.angle = 0;
    this.drawCircle = function() {
        ctx.beginPath();

        let grd = ctx.createLinearGradient(this.iX -  this.radius, this.iY - this.radius, this.iX + this.radius, this.iY + this.radius);
        grd.addColorStop(0, color1);
        grd.addColorStop(1, color2);
        ctx.fillStyle = grd;

        ctx.arc(this.iX, this.iY, this.radius, 0, 2 * Math.PI, false);
        ctx.fill();
    };
    this.update = function () {
        if (this.iteration > (this.radius / this.dxX) && this.iteration2 < 0) { // frame checking

            if ((this.iX + this.radius) >= window.innerWidth) {

                if (this.dxY > 0) {
                    this.angle = Math.ceil(Math.random() * (260 - 190) + 190);
                } else {
                    this.angle = Math.ceil(Math.random() * (350 - 280) + 280);
                }
                this.dxX = Math.round( (this.speed * (Math.sin(this.angle * Math.PI / 180))) * 1000) / 1000;
                this.dxY = -Math.round( ( this.speed * (Math.cos(this.angle * Math.PI / 180))) * 1000) / 1000;
                this.iteration2 = 4;
            }
            if ((this.iY + this.radius) >= window.innerHeight) {

                if (this.dxX > 0) {
                    this.angle = Math.ceil(Math.random() * (80 - 10) + 10);
                } else {
                    this.angle = Math.ceil(Math.random() * (350 - 280) + 280);
                }

                this.dxX = Math.round( (this.speed * (Math.sin(this.angle * Math.PI / 180))) * 1000) / 1000;
                this.dxY = -Math.round( ( this.speed * (Math.cos(this.angle * Math.PI / 180))) * 1000) / 1000;

                this.iteration2 = 4;

            }
            if ((this.iX - this.radius) <= 0) {


                if (this.dxY > 0) {
                    this.angle = Math.ceil(Math.random() * (170 - 100) + 100);
                } else {
                    this.angle = Math.ceil(Math.random() * (80 - 10) + 10);
                }

                this.dxX = Math.round( (this.speed * (Math.sin(this.angle * Math.PI / 180))) * 1000) / 1000;
                this.dxY = -Math.round( (this.speed * (Math.cos(this.angle * Math.PI / 180))) * 1000) / 1000;

                this.iteration2 = 4;

            }
            if ((this.iY - this.radius) <= 0) {

                if (this.dxX > 0) {
                    this.angle = Math.ceil(Math.random() * (170 - 100) + 100);
                } else {
                    this.angle = Math.ceil(Math.random() * (260 - 190) + 190);
                }

                this.dxX = Math.round( (this.speed * (Math.sin(this.angle * Math.PI / 180))) * 1000) / 1000;
                this.dxY = -Math.round( (this.speed * (Math.cos(this.angle * Math.PI / 180))) * 1000) / 1000;
                this.iteration2 = 4;
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
    let colorR2 = Math.random() * (256 - 2) + 2;
    let colorB2 = Math.random() * (256 - 2) + 2;
    let colorG2 = Math.random() * (256 - 2) + 2;
    let circle = new Circle(Math.ceil(Math.random() * (50 - 20) + 20), `rgb(${colorR1}, ${colorB1}, ${colorG1})`, `rgb(${colorR2}, ${colorB2}, ${colorG2})`);
    arrayOfCircles.push(circle);
    function draw() {
        requestAnimationFrame(draw);
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        for(let i = 0; i < arrayOfCircles.length; i++){
            arrayOfCircles[i].update();
        }
    }
    if(!arrayOfCircles[1]){draw();}
}

let sI = 2;
let circlesAmount = 20;
let arrayOfCircles = [];

myFu();
let myInterval = setInterval(function () {
    myFu();
    if(sI === circlesAmount){
        clearInterval(myInterval);
    }
    sI++;
    console.log(arrayOfCircles);
}, 5000);

