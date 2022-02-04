import Phaser from 'phaser'

import Game2048 from './scenes/2048Game'

const config = {
	type: Phaser.AUTO,
	width: 800, // 800
	height: 1024, // 600
	scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 0 }
		}
	},
	scene: [Game2048]
}

export default new Phaser.Game(config)
