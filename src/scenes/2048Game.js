import Phaser from 'phaser'

export default class Game2048 extends Phaser.Scene
{
	constructor()
	{
		super('2048-main-scene')
	}   

	preload()
    {
        // Background = 576 px x 1024 px
        // Tile = 128 px x 128 px
        this.load.image('bg', '../assets/Background.png'); 
        this.load.image('tile2', '../assets/2 Tile.png'); 
        this.load.image('tile4', '../assets/4 Tile.png');
        this.load.image('tile8', '../assets/8 Tile.png');
        this.load.image('tile16', '../assets/16 Tile.png');
        this.load.image('tile32', '../assets/32 Tile.png');
        this.load.image('tile64', '../assets/64 Tile.png');
        this.load.image('tile128', '../assets/128 Tile.png');
        this.load.image('tile256', '../assets/256 Tile.png');
        this.load.image('tile512', '../assets/512 Tile.png');
        this.load.image('tile1024', '../assets/1024 Tile.png');
        this.load.image('tile2048', '../assets/2048 Tile.png');
    }

    create()
    {
        this.add.image(400, 300, 'bg').setScale(1.2)
        this.add.sprite(400, 300, 'tile2')

    }
}
