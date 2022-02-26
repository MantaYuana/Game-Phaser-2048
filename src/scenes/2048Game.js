import Phaser from "phaser";

export default class Game2048 extends Phaser.Scene {
  constructor() {
    super("2048-main-scene");
  }

  //tiles = tile
  //tilesGroup = tileGroup
  //tilesPlacement = tilesPlacement
  init() {
    this.gameHalfWidth = this.scale.width * 0.5; // 400 px
    this.gameHalfHeight = this.scale.height * 0.5; // 512 px
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
    this.tilesPlacement = [];
  }

  preload() {
    // Background = 576 px x 1024 px
    // Tile = 128 px x 128 px
    this.load.image("bg", "../assets/Background.png");
    this.load.image("reset-btn", "../assets/Bottom UI.png");

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
    var resetBtn = this.add
      .sprite(this.gameHalfWidth, 100, "reset-btn")
      .setInteractive();
    resetBtn.on("pointerdown", function (pointer) {
      location.reload();
      console.log("reset");
    });

    this.tilesGroup = new Phaser.GameObjects.Group(this);

    for (let i = 0; i < 4; i++) {
      this.tilesPlacement[i] = [];
      for (let j = 0; j < 4; j++) {
        let tile = this.add.sprite(
          (j + 1) * 128 + 80,
          (i + 1) * 128 + 368,
          "tile2"
        );
        this.tilesGroup.add(tile);
        tile.setVisible(false);

        let tileTexture = tile.setTexture("tile2");

        this.tilesPlacement[i][j] = {
          tileSprite: tile,
          tileSkin: tileTexture,
          value: 0,
        };
      }
    }

    this.spawnTile();
    this.spawnTile();

    this.input.keyboard.on("keyup", this.handleKey, this);
  }

  spawnTile() {
    let emptyTile = [];
    this.tilesPlacement.forEach(function (tile) {
      tile.forEach(function (tile) {
        if (tile.value == 0) {
          emptyTile.push(tile);
        }
      });
    });

    let tile = Phaser.Utils.Array.GetRandom(emptyTile);
    tile.tileSprite.setVisible(true);
    tile.tileSkin.setTexture("tile2");

    tile.value = 2;
  }

  handleKey(event) {
    switch (event.key) {
      case "w":
        // console.log("w is Pressed");
        // console.log(this.tilesPlacement)
        this.handleMove(0, -1);
        break;
      case "a":
        // console.log("a is pressed");
        // console.log(this.tilesPlacement)
        this.handleMove(-1, 0);
        break;
      case "s":
        // console.log("s is pressed");
        // console.log(this.tilesPlacement)
        this.handleMove(0, 1);
        break;
      case "d":
        // console.log("d is pressed");
        // console.log(this.tilesPlacement)
        this.handleMove(1, 0);
        break;
      default:
        break;
    }
  }

  // handleMove(tileX, tileY) {
  //   //tileX = tileX, tileY = tileY
  //   let i = 0;
  //   let j = 0;
  //   let isMoved = false;

  //   if (tileX != 0) {
  //     j = tileX > 0 ? (j = 3) : (j = 0);
  //   } else {
  //     i = tileY > 0 ? (i = 3) : (i = 0);
  //   }

  //   let tempJ = j;

  //   for (; i < 4 && i >= 0; tileY > 0 ? i-- : i++) {
  //     for (j = tempJ; j < 4 && j >= 0; tileX > 0 ? j-- : j++) {
  //       console.log("(i,j)", i, j);
  //       let tile = this.tilesPlacement[i][j];
  //       if (tile.value > 0) {
  //         let newX = i + tileY;
  //         let newY = j + tileX;
  //         console.log("former x and y ", newX, newY);

  //         while (
  //           this.isOnBoard(newX, newY) &&
  //           (this.tilesPlacement[newX][newY].value == tile.value ||
  //             this.tilesPlacement[newX][newY].value == 0)
  //         ) {
  //           let isEqualValue =
  //             this.tilesPlacement[newX][newY].value == tile.value;
  //           isMoved = true;
  //           this.moveTile(tile, newX, newY, isEqualValue);
  //           tile = this.tilesPlacement[newX][newY];
  //           newX += tileY;
  //           newY += tileX;
  //           console.log("while inside");
  //           console.log("new x and y ", newX, newY);
  //           console.log();
  //         }
  //       }
  //     }

  //     if (isMoved) {
  //       this.spawnTile();
  //     }
  //   }
  // }

  handleMove(tileX, tileY) {
    let i = 0;
    let j = 0;
    let isMoved = false;

    if (tileX != 0) {
      j = tileX > 0 ? (j = 3) : (j = 0);
    } else {
      i = tileY > 0 ? (i = 3) : (i = 0);
    }

    let tempj = j;

    for (; i < 4 && i >= 0; tileY > 0 ? i-- : i++) {
      for (j = tempj; j < 4 && j >= 0; tileX > 0 ? j-- : j++) {
        // console.log("(i,j)", i, j);
        let tiles = this.tilesPlacement[i][j];
        if (tiles.value > 0) {
          let newX = i + tileY;
          let newY = j + tileX;
          // console.log("new x y", newX, newY);
          while (
            this.isOnBoard(newX, newY) &&
            (this.tilesPlacement[newX][newY].value == tiles.value ||
              this.tilesPlacement[newX][newY].value == 0)
          ) {
            let isEqualValue =
              this.tilesPlacement[newX][newY].value == tiles.value;
            isMoved = true;
            this.moveTile(tiles,newX,newY,isEqualValue);
            tiles = this.tilesPlacement[newX][newY];
            newX += tileY;
            newY += tileX;
            // console.log("new x and y ", newX, newY);
            console.log();
          }
        }
      }
    }

    if (isMoved) {
      this.spawnTile();
    }
  }

  moveTile(tile, x, y, isEqualValue) {
    let newTile = this.tilesPlacement[x][y];

    if (isEqualValue) {
      let value = newTile.value + tile.value;
      tile.tileSprite.setVisible(false);
      tile.value = 0;
      tile.tileSkin.setTexture(`tile${value}`);

      newTile.tileSprite.setVisible(true);
      newTile.value = value;
      newTile.tileSkin.setTexture(`tile${value}`);
    } else {
      newTile.tileSprite.setVisible(true);
      newTile.value = tile.value;
      newTile.tileSkin.setTexture(`tile${tile.value}`);

      tile.tileSprite.setVisible(false);
      tile.value = 0;
      tile.tileSkin.setTexture("tile2");
    }
    this.add.tween({
      targets: [newTile.tileSprite, newTile.tileSkin],
      alpha: 1,
      duration: 100,
    });

    this.add.tween({
      targets: [tile.tileSprite, tile.tileSkin],
      alpha: 1,
      duration: 100,
    });
  }

  isOnBoard(x, y) {
    let checkX = x >= 0 && x < 4 ? true : false;
    let checkY = y >= 0 && y < 4 ? true : false;

    return checkX && checkY;
  }
}
