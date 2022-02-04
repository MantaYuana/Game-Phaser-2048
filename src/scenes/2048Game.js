import Phaser from "phaser";

export default class Game2048 extends Phaser.Scene {
  constructor() {
    super("2048-main-scene");
  }

  init() {
    this.gameHalfWidth = this.scale.width * 0.5;
    this.gameHalfHeight = this.scale.height * 0.5;
    this.tile2 = undefined;
    this.tile4 = undefined;
    this.tile8 = undefined;
    this.tile16 = undefined;
    this.tile32 = undefined;
    this.tile64 = undefined;
    this.tile128 = undefined;
    this.tile256 = undefined;
    this.tile512 = undefined;
    this.tile1024 = undefined;
    this.tile2056 = undefined;
  }

  preload() {
    // Background = 576 px x 1024 px
    // Tile = 128 px x 128 px
    this.load.image("bg", "../assets/Background.png");
    this.load.image("tile2", "../assets/2 Tile.png");
    this.load.image("tile4", "../assets/4 Tile.png");
    this.load.image("tile8", "../assets/8 Tile.png");
    this.load.image("tile16", "../assets/16 Tile.png");
    this.load.image("tile32", "../assets/32 Tile.png");
    this.load.image("tile64", "../assets/64 Tile.png");
    this.load.image("tile128", "../assets/128 Tile.png");
    this.load.image("tile256", "../assets/256 Tile.png");
    this.load.image("tile512", "../assets/512 Tile.png");
    this.load.image("tile1024", "../assets/1024 Tile.png");
    this.load.image("tile2048", "../assets/2048 Tile.png");
  }

  create() {
    this.add.image(400, 300, "bg").setScale(1.5);

    // this.add.sprite(592, 496, 'tile2');
    // this.add.sprite(592, 624, 'tile2');
    // this.add.sprite(592, 752, 'tile2');
    // this.add.sprite(592, 880, 'tile2');

    // this.add.sprite(464, 496, 'tile2');
    // this.add.sprite(464, 624, 'tile2');
    // this.add.sprite(464, 752, 'tile2');
    // this.add.sprite(464, 880, 'tile2');

    // this.add.sprite(336, 496, 'tile2');
    // this.add.sprite(336, 624, 'tile2');
    // this.add.sprite(336, 752, 'tile2');
    // this.add.sprite(336, 880, 'tile2');

    // this.add.sprite(208, 496, 'tile2');
    // this.add.sprite(208, 624, 'tile2');
    // this.add.sprite(208, 752, 'tile2');
    // this.add.sprite(208, 880, 'tile2');

    this.tile2 = this.physics.add.sprite(
      this.gameHalfWidth,
      this.gameHalfHeight,
      "tile2"
    );
    this.tile4= this.physics.add.sprite(
        this.gameHalfWidth,
        this.gameHalfHeight,
        "tile4"
      );

    this.physics.add.overlap(
      this.tile2,
      this.tile4,
      this.test,
      undefined,
      this
    );
  }

  test() {
    console.log("overlap");
  }
}
