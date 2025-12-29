const canvas = document.getElementById("dogface");
const ctx = canvas.getContext("2d");


// Set line width
ctx.lineWidth = 5;

// dog face outline
ctx.beginPath();
ctx.translate(250, 850);
ctx.moveTo(280, 55);
ctx.lineTo(10, -50);
ctx.quadraticCurveTo(-30, -100, -30, -600);
ctx.quadraticCurveTo( 90, -970, 150, -700);
ctx.lineTo(280, -700);
ctx.lineTo(500, -700);
ctx.lineTo(860, -700);
ctx.quadraticCurveTo(920, -970, 1040, -600);
ctx.quadraticCurveTo(1050, -100, 1020, -60);
ctx.lineTo(650, 80);
ctx.stroke();

