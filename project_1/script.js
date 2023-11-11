const canvas = document.getElementById('canvas1');
const context = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 523;
let frameX = 1;
let frameY = 1;

function animate(){
	context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	context.fillRect(100, 50, 100, 100);
	context.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight,
		spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
	if (frameX < 6) frameX++;
	else frameX = 0;
	requestAnimationFrame(animate);
}
animate();
