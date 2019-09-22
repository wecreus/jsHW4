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


let radius = 50;
let iX = 0;
let iY = 0;
let speed = 10;
let dxX = Math.round( (speed * (Math.sin(135 * Math.PI / 180))) * 1000) / 1000; // base velocity
let dxY = -Math.round( (speed * (Math.cos(135 * Math.PI / 180))) * 1000) / 1000;
let iteration = 0; // used to skip frame check if circle just appeared
let iteration2 = -1; // used to skip frame checking after we applied new angles (reduces circle jiggling)



function draw() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.beginPath();

    ctx.fillStyle = "blue";





    ctx.arc(iX, iY, radius, 0, 2 * Math.PI, false);
    ctx.fill();

    if (iteration > (radius / dxX) && iteration2 < 0) { // frame checking
        let angle;
        if ((iX + radius) >= window.innerWidth) {

            if (dxY > 0) {
                angle = Math.ceil(Math.random() * (260 - 190) + 190);
            } else {
                angle = Math.ceil(Math.random() * (350 - 280) + 280);
            }
            dxX = Math.round( (speed * (Math.sin(angle * Math.PI / 180))) * 1000) / 1000;
            dxY = -Math.round( ( speed * (Math.cos(angle * Math.PI / 180))) * 1000) / 1000;
            iteration2 = 4;
        }
        if ((iY + radius) >= window.innerHeight) {

            if (dxX > 0) {
                angle = Math.ceil(Math.random() * (80 - 10) + 10);
            } else {
                angle = Math.ceil(Math.random() * (350 - 280) + 280);
            }

            dxX = Math.round( (speed * (Math.sin(angle * Math.PI / 180))) * 1000) / 1000;
            dxY = -Math.round( ( speed * (Math.cos(angle * Math.PI / 180))) * 1000) / 1000;

            iteration2 = 4;

        }
        if ((iX - radius) <= 0) {


            if (dxY > 0) {
                angle = Math.ceil(Math.random() * (170 - 100) + 100);
            } else {
                angle = Math.ceil(Math.random() * (80 - 10) + 10);
            }

            dxX = Math.round( (speed * (Math.sin(angle * Math.PI / 180))) * 1000) / 1000;
            dxY = -Math.round( (speed * (Math.cos(angle * Math.PI / 180))) * 1000) / 1000;

            iteration2 = 4;

        }
        if ((iY - radius) <= 0) {

            if (dxX > 0) {
                angle = Math.ceil(Math.random() * (170 - 100) + 100);
            } else {
                angle = Math.ceil(Math.random() * (260 - 190) + 190);
            }

            dxX = Math.round( (speed * (Math.sin(angle * Math.PI / 180))) * 1000) / 1000;
            dxY = -Math.round( (speed * (Math.cos(angle * Math.PI / 180))) * 1000) / 1000;
            iteration2 = 4;
        }
    }


    iX += dxX;
    iY += dxY;
    iteration++;
    iteration2--;
    requestAnimationFrame(draw);
}
draw();


