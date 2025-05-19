//#region okvir
/// <reference path="../otter/lib-00-GameSettings.js"/>
/// <reference path="../otter/lib-01-tiled.js"/>
/// <reference path="../otter/lib-02-sensing.js"/>
/// <reference path="../otter/lib-03-display.js"/>
/// <reference path="../otter/lib-04-engine.js"/>
/// <reference path="../otter/lib-05-game.js"/>
/// <reference path="../otter/lib-06-main.js"/>
//#endregion

class Character extends Sprite {
  constructor(x, y, layer) {
    super(x + 4, y + 4, 64 - 8, 64 - 8);

    this.frame_sets = {};

    this.layer = layer;
    this.visible = true;
  }

  jump(h = 50) {
    if (!this.jumping) {
      this.jumping = true;
      this.velocity_y -= h;
    }
  }
}

class Joe extends Character {
  #zivoti;
  constructor(layer) {
    super(0, 0, layer);

    this.frame_sets = {
      up: [31],
      "walk-up": [31],
      right: [31],
      "walk-right": [32, 33, 34],
      down: [31],
      "walk-down": [31],
      left: [38],
      "walk-left": [37, 36, 35],
    };

    this.puca = false;
    this.points = 0;
    this.#zivoti = 1;
    this.boxTouch = false;
    this.activeProjektili = 0;

    //! postaviti smjer glavnog lika
    this.direction = 90;
  }

  get zivoti() {
    return this.#zivoti;
  }
  set zivoti(v) {
    if (v <= 0) {
      btnStop_click();
    } else {
      this.#zivoti = v;
    }
  }

  moveRight() {
    let a = arguments.length;
    switch (a) {
      case 0:
        super.moveRight();
        break;
      case 1:
        this.direction = 90;
        this.velocity_x += arguments[0];
      default:
        break;
    }
  }

  moveLeft() {
    let a = arguments.length;
    switch (a) {
      case 0:
        super.moveLeft();

        break;
      case 1:
        this.direction = 270;
        this.velocity_x -= arguments[0];
      default:
        break;
    }
  }

  pucaj() {
    if (this.activeProjektili < 3) {
      // Provjera broja aktivnih projektila
      let p = new Projektil(GAME.getSpriteLayer("Projektil1"));

      GAME.addSprite(p);

      p.rbr = Postavke.projektili.length;
      Postavke.projektili.push(p);

      p.x = this.x;
      p.y = this.y;
      p.direction = this.direction;

      p.put = 0;
      p.visible = true;
      p.move = true;

      this.activeProjektili++; // Povećavamo broj aktivnih projektila
    }
  }
}
class Boss extends Character {
  #zivoti;
  constructor(x, y, layer) {
    super(x, y, layer);
    this.frame_sets = {
      up: [1],
      "walk-up": [1],
      right: [1],
      "walk-right": [2, 3, 4],
      down: [1],
      "walk-down": [1],
      left: [8],
      "walk-left": [7, 6, 5],
    };
    this.#zivoti = 5;
    this.dead = false;
  }

  moveRight() {
    this.direction = 90;
    this.velocity_x += 1.7;
  }

  moveLeft() {
    this.direction = 270;
    this.velocity_x -= 1.7;
  }

  get zivoti() {
    return this.#zivoti;
  }
  set zivoti(v) {
    if (v <= 0) {
      this.visible = false;
      this.dead = true;
    } else {
      this.#zivoti = v;
    }
  }
}
class Dog extends Character {
  constructor(x, y, layer) {
    super(x, y, layer);
    this.frame_sets = {
      up: [91],
      "walk-up": [91],
      right: [91],
      "walk-right": [92, 93, 94],
      down: [91],
      "walk-down": [91],
      left: [98],
      "walk-left": [97, 96, 95],
    };

    this.dead = false;
    this.direction = 270;
  }
  moveRight() {
    this.direction = 90;
    this.velocity_x += 1.7;
  }

  moveLeft() {
    this.direction = 270;
    this.velocity_x -= 1.7;
  }
}
class Mummy extends Character {
  constructor(x, y, layer) {
    super(x, y, layer);
    this.frame_sets = {
      up: [61],
      "walk-up": [61],
      right: [61],
      "walk-right": [61],
      down: [61],
      "walk-down": [61],
      left: [63],
      "walk-left": [62],
    };
    this.direction = 270;
    this.puca = false;
    this.dead = false;
    this.projektil = null;
  }

  pucaj() {
    if (!this.puca && !this.dead) {
      //! stvaramo novi objekt projektil
      let p = new Projektil(GAME.getSpriteLayer("Projektil2"));

      GAME.addSprite(p);

      //! dodajemo ga u poseban popis za lakše praćenje
      p.rbr = Postavke.projektili2.length;
      Postavke.projektili2.push(p);

      // postavi na poziciju i smjer trenutnog lika
      p.x = this.x;
      p.y = this.y;
      p.direction = this.direction;

      p.put = 0;
      p.visible = true;
      p.move = true;

      this.puca = true;
      setTimeout(() => {
        this.puca = false;
      }, 1100);
    }
  }
}

class Collectable extends Item {
  constructor(x, y, layer) {
    super(x, y, layer);

    if (this.constructor == Collectable) {
      throw new Error("Collectable se ne može instancirati");
    }
  }
  getType() {
    console.log("mora biti pregazena!");
  }
}

class Coin extends Collectable {
  constructor(layer) {
    super(layer);
    this.points = 10;
  }
  getType() {
    return "Coin";
  }
}

class Heart extends Collectable {
  constructor(layer) {
    super(layer);
    this.zivoti = 1;
  }
  getType() {
    return "Heart";
  }
}

class Spike extends Collectable {
  constructor(layer) {
    super(layer);
    this.damage = 1;
    this.prikazan = true;
    this.togglePrikaz();
  }

  getType() {
    return "Spike";
  }

  togglePrikaz() {
    setInterval(() => {
      this.prikazan = !this.prikazan;
    }, 1000);
  }

  update() {
    this.visible = this.prikazan;
  }
}

class Projektil extends Item {
  #put;
  constructor(layer) {
    super(layer);
    this.visible = false;
    this.put = 0;
    this.move = true;
    this.height = 40;

    // ne možemo koristiti #collidedPlatform jer će se dogoditi greška
    // klasa Sprite nema svojstvo, a collidedPlatform se koristi na više mjesta
    this._collidedPlatform = "";
  }

  // potrebno je definirati svojstvo kako bi se točno znalo u kojem trenutku dira neku platformu
  get collidedPlatform() {
    return this._collidedPlatform;
  }
  set collidedPlatform(v) {
    // ako dira platformu, onda string nije prazan već se radi o strani s koje je dira
    if (v != "") {
      // zaustavi projektil
      this.stop();
    }

    this._collidedPlatform = v;
  }

  get put() {
    return this.#put;
  }
  set put(v) {
    if (v >= 250) {
      this.#put = 0;
      this.stop(); // vraća sve postavke za projektil
    } else {
      this.#put = v;
    }
  }

  updatePosition() {
    if (this.move) {
      // ovo mora biti prije promjene x-a kako bi se ponašalo "normalno"
      // kod dodira s platformom (update old_x i old_y)
      //super.updatePosition();

      // kretanje projektila po posebnim pravilima
      if (this.direction == 90) {
        this.x += 10; // ide desno
        this.put += 10; // povećava put
      } else {
        this.x -= 10; // ide lijevo
        this.put += 10; // povećava put
      }
    }
  }
  stop() {
    this.visible = false;
    this.move = false;

    // popis svih likova u mapi
    let sprites = GAME.activeWorldMap.sprites;

    for (let i = sprites.length - 1; i >= 0; i--) {
      if (sprites[i] === this) {
        sprites.splice(i, 1); // brisanje i-tog elementa

        if (this.layer.name === "Projektil1") {
          Postavke.ukloniProjektil(this);
          Postavke.joe.activeProjektili--;
        } else if (this.layer.name === "Projektil2") {
          Postavke.ukloniProjektil2(this);
        }
        break;
      }
    }
  }
}
