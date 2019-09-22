let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



let i = 0;
function draw() {
    ctx.clearRect(0 , 0 , window.innerWidth, window.innerHeight);
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.arc(5 * i, 5 * i, 50, 0, 2*Math.PI, false);
    ctx.fill();
    i++;

    if(5 * i < window.innerHeight && 5 * i < window.innerWidth){
        requestAnimationFrame(draw);
    }

}
draw();



//
// for(let i = 0; i < 20; i++){
//     // random position
//     let x = Math.random() * window.innerWidth;
//     let y = Math.random() * window.innerHeight;
//
//     // random radius
//     let max = 50;
//     let min = 15;
//     let radius = Math.random() * (max - min) + min;
//
//     // random color
//     let colorR = Math.random() * 255;
//     let colorG = Math.random() * 255;
//     let colorB = Math.random() * 255;
//
//     ctx.beginPath();
//     ctx.fillStyle = `rgb(${colorR}, ${colorG}, ${colorB})`;
//     ctx.arc(x, y, radius, 0, 2*Math.PI, false);
//     ctx.fill();
// }

