const config = {
	width: 960,
	height: 640,
	type: Phaser.AUTO,
	scene: {
		preload,
		create,
		update,
	},
};
const game = new Phaser.Game(config);

function preload() {
	this.load.image('meteor', './assets/meteor.png');
}

function create() {
	this.add.image(50, 100, 'meteor');
}

function update(time, delta) {}
