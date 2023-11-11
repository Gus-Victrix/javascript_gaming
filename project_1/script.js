const canvas = document.getElementById('canvas1');
const context = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'shadow_dog.png';


function animate(){
	context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	context.fillRect(100, 50, 100, 100);
	context.drawImage(playerImage, 0, 0, 1800, 800, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	requestAnimationFrame(animate);
}
animate();
