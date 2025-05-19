//#region okvir
/// <reference path="../otter/lib-00-GameSettings.js"/>
/// <reference path="../otter/lib-01-tiled.js"/>
/// <reference path="../otter/lib-02-sensing.js"/>
/// <reference path="../otter/lib-03-display.js"/>
/// <reference path="../otter/lib-04-engine.js"/>
/// <reference path="../otter/lib-05-game.js"/>
/// <reference path="../otter/lib-06-main.js"/>
//#endregion

/// <reference path="kod_01-likovi.js"/>
/// <reference path="kod_02-postavke.js"/>

/**
 * Promjena stanja likova - interakcije
 */
let startTime, startTime2, endTime;
function update_main() {
  if (GAME.activeWorldMap.name == "PrvaRazina") PrvaRazina();
  if (GAME.activeWorldMap.name == "DrugaRazina") DrugaRazina();

  GAME.update();
}

function endGame(start) {
  endTime = new Date();
  let timeDiff = endTime - start;
  timeDiff /= 1000;
  let seconds = Math.round(timeDiff % 60);
  let minutes = Math.floor(timeDiff / 60);
  return (
    "Prelazak razine je trajao: " +
    minutes +
    " minuta i " +
    seconds +
    " sekundi."
  );
}
function handleInput() {
  let activeInput = null;

  if (SENSING.left.active || SENSING.keyA.active) activeInput = "left";
  if (SENSING.right.active || SENSING.keyD.active) activeInput = "right";
  if (SENSING.up.active || SENSING.keyW.active) activeInput = "up";
  if (SENSING.space.active) activeInput = "space";

  switch (activeInput) {
    case "left":
      if (Postavke.joe.touching(Postavke.mud)) {
        Postavke.joe.moveLeft(0.4);
      } else {
        Postavke.joe.moveLeft();
      }

      break;
    case "right":
      if (Postavke.joe.touching(Postavke.mud)) {
        Postavke.joe.moveRight(0.4);
      } else {
        Postavke.joe.moveRight();
      }

      break;
    case "up":
      Postavke.joe.jump();
      break;
    case "space":
      if (!Postavke.joe.puca) {
        Postavke.joe.puca = true;
        Postavke.joe.pucaj();
      }
      break;
    default:
      Postavke.joe.puca = false;
      break;
  }
}

function collisionWithEnemy(sprite) {
  if (sprite instanceof Mummy && Postavke.joe.touching(sprite)) {
    console.log("Mumija te uhvatila!");
    Postavke.joe.zivoti -= 1;
  }
  if (sprite instanceof Dog && Postavke.joe.touching(sprite)) {
    console.log("Pas te uhvatio!");
    Postavke.joe.zivoti -= 1;
  }
  if (sprite instanceof Boss && Postavke.joe.touching(sprite)) {
    console.log("Boss te uhvatio!");
    Postavke.joe.zivoti -= 1;
  }
}

function EnemyHit() {
  for (let i = 0; i < Postavke.projektili2.length; i++) {
    let p = Postavke.projektili2[i];
    if (p.touching(Postavke.joe)) {
      p.stop();
      Postavke.joe.zivoti -= 1;
      console.log("Pogođen si!");
      break;
    }
  }
}

function JoeHit() {
  let enemies = [...Postavke.mumije, ...Postavke.dogs, ...Postavke.bosses];
  for (let i = 0; i < Postavke.projektili.length; i++) {
    let pr = Postavke.projektili[i];
    for (let j = 0; j < enemies.length; j++) {
      let el = enemies[j];

      if (pr.touching(el)) {
        pr.stop();
        if (el.layer.name === "Boss") {
          el.zivoti--;

          if (el.dead === true) {
            Postavke.coins[j].visible = true;
            Postavke.coins[j].x = el.x;
            Postavke.coins[j].y = el.y - 64;
          }
        } else {
          //ako smo ubili mumiju onda prikazi heart za prvu razinu
          if (GAME.activeWorldMap.name == "PrvaRazina") {
            if (el.layer.name === "Enemy-mumia") {
              let heartJ = Postavke.hearts[j];
              heartJ.visible = true;
              heartJ.x = el.x;
              heartJ.y = el.y - 64;
            }
          } else {
            Postavke.coins[j].x = el.x;
            Postavke.coins[j].y = el.y - 64;
            Postavke.coins[j].visible = true;
          }
          el.visible = false;
          el.dead = true;
        }
      }
    }
  }
}

function DogMovement(i, x, x2) {
  if (Postavke.dogs[i].direction === 270) {
    Postavke.dogs[i].moveLeft();
    if (Postavke.dogs[i].x <= x) {
      Postavke.dogs[i].direction = 90;
    }
  } else if ((Postavke.dogs[i].direction = 90)) {
    Postavke.dogs[i].moveRight();
    if (Postavke.dogs[i].x >= x2) {
      Postavke.dogs[i].direction = 270;
    }
  }
}
function BossMovement(i, x, x2) {
  if (Postavke.bosses[i].direction === 270) {
    Postavke.bosses[i].moveLeft();
    if (Postavke.bosses[i].x <= x) {
      Postavke.bosses[i].direction = 90;
    }
  } else if ((Postavke.bosses[i].direction = 90)) {
    Postavke.bosses[i].moveRight();
    if (Postavke.bosses[i].x >= x2) {
      Postavke.bosses[i].direction = 270;
    }
  }
}
function breakBoxCollision() {
  //Ako joe dira kutiju
  let dira = false;
  for (let i = 0; i < Postavke.kutije.length; i++) {
    const box = Postavke.kutije[i];
    if (box.touching(Postavke.joe) && box.visible) {
      Postavke.joe.boxTouch = true;
      if (Postavke.joe.boxTouch) {
        Postavke.joe.y = box.y - 1.000002 * 64;
      }
      dira = true;
      break;
    }
  }
  if (!dira) {
    Postavke.joe.boxTouch = false;
  }

  // Projvjeri za svaki od projektila je li dirnuo kutiju
  for (let i = 0; i < Postavke.projektili.length; i++) {
    const p = Postavke.projektili[i];

    // Provjeri koliziju sa svakom kutijom
    for (let j = 0; j < Postavke.kutije.length; j++) {
      const kutija = Postavke.kutije[j];
      if (p.touching(kutija)) {
        p.stop();
        kutija.visible = false;
        Postavke.coins[j].visible = true;
        break;
      }
    }
  }
}

function colletSupply(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Postavke.joe.touching(arr[i])) {
      let type = arr[i].getType();
      switch (type) {
        case "Coin":
          console.log("Diram coin!");
          Postavke.joe.points += arr[i].points;
          arr[i].visible = false;
          break;

        case "Heart":
          console.log("Diram heart!");

          Postavke.joe.zivoti += arr[i].zivoti;
          arr[i].visible = false;

          break;
        case "Spike":
          console.log("Diram spike!");
          Postavke.joe.zivoti -= arr[i].damage;
          break;
        default:
          break;
      }
    }
  }
}
function PrvaRazina() {
  let upute =
    "Info: Potrebno je razbiti sve tamije kutije i skupiti coin-e.\nNe dodirujte neprijatelje i izbjegavajte projektile, pas je malo brži i čuvajte se.\n";
  handleInput();
  if (!startTime) startTime = new Date();

  colletSupply(Postavke.coins);
  colletSupply(Postavke.hearts);
  let enemies = GAME.activeWorldMap.sprites;
  //provjera je li Joe dodirnuo enemy-a
  enemies.forEach((sprite) => {
    collisionWithEnemy(sprite);
  });

  //kretanje psa 64 * 10 64 * 14 | 64 * 21.2 64 * s
  DogMovement(0, 64 * 10, 64 * 14);
  DogMovement(1, 64 * 21.2, 64 * 25);

  JoeHit(); //Ako Joe pogodi nekog od enemy-a
  EnemyHit(); //Ako mumija pogodi Joe-a

  GameSettings.output(
    upute +
      "\nZivoti: " +
      Postavke.joe.zivoti +
      "\n" +
      "Bodovi: " +
      Postavke.joe.points,
    true
  );
  breakBoxCollision();
  Postavke.mumije.forEach((mumija) => {
    if (!mumija.dead) {
      mumija.pucaj();
    }
  });
  Postavke.mumije[0].visible = false;
  if (Postavke.joe.points === 50) {
    alert("Uspjeno ste presli level!\nPokrenite slijedecu razinu!\n");
    GameSettings.output(endGame(startTime));
    btnStop_click();
  }
}

function DrugaRazina() {
  let upute =
    "Info: Samurai ima 5 života, ne smijete dirati niti jednog neprijatelja i pazite da ne dodirnete spike u tunelima!";
  handleInput();
  if (!startTime2) startTime2 = new Date();
  let enemies = GAME.activeWorldMap.sprites;
  enemies.forEach((sprite) => {
    collisionWithEnemy(sprite);
  });

  GameSettings.output(
    upute +
      "\nZivoti: " +
      Postavke.joe.zivoti +
      "\n" +
      "Bodovi: " +
      Postavke.joe.points,

    true
  );

  JoeHit();
  EnemyHit();
  Postavke.mumije.forEach((mumija) => {
    if (!mumija.dead) {
      mumija.pucaj();
    }
  });
  BossMovement(0, 64 * 2, 64 * 3);
  BossMovement(1, 64 * 6, 64 * 7);
  BossMovement(2, 64 * 9.2, 64 * 10);
  BossMovement(3, 64 * 15, 64 * 16);
  BossMovement(4, 64 * 15, 64 * 18);
  BossMovement(5, 64 * 21.2, 64 * 24);
  BossMovement(6, 64 * 21, 64 * 25);
  colletSupply(Postavke.coins);
  colletSupply(Postavke.spikes);
  Postavke.spikes.forEach((spike) => {
    spike.update();
  });

  if (Postavke.joe.points === 110) {
    alert("Uspjeno ste presli zadnji level!\n");

    GameSettings.output(
      "Za ovu razinu: " +
        endGame(startTime2) +
        "\nZa obje razine: " +
        endGame(startTime)
    );

    btnStop_click();
  }
}
