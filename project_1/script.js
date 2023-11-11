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
let gameFrame = 0;
const staggerFrames = 5;
const spriteAnimations = [];
const animationStates = [
	{
		name: 'idle',
		frames: 7,
	},
	{
		name: 'jump',
		frames: 7,
	}
];

animationStates.forEach((state, index) => {
	let frames = {
		loc: [],
	}
	for (let j = 0; j < state.frames; j++){
		let positionX = j * spriteWidth;
		let positionY = index * spriteHeight;
		frames.loc.push({x: positionX, y: positionY});
	}
	spriteAnimations[state.name] = frames;
});

function animate(){
	context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	let postition = Math.floor(gameFrame/staggerFrames) % 6;
	frameX = spriteWidth * position;
	context.drawImage(playerImage, frameX, frameY * spriteHeight,
		spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);

	gameFrame++;
	requestAnimationFrame(animate);
}
animate();
