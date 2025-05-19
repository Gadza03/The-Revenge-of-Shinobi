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

// što će se pokrenuti kad se klikne button Setup:
let btnSetupGame = document.getElementById("btnSetupGame");
btnSetupGame.addEventListener("click", setup);

function setup() {
  GAME.clearSprites();

  Postavke.projektili2 = [];
  Postavke.dogs = [];
  Postavke.mumije = [];
  Postavke.coins = [];
  Postavke.hearts = [];
  Postavke.kutije = [];
  Postavke.bosses = [];
  Postavke.spikes = [];
  let odabrana = GAME.activeWorldMap.name;
  GameSettings.output(odabrana);

  switch (odabrana) {
    case "PrvaRazina":
      setupPrvaRazina();
      break;

    case "DrugaRazina":
      setupDrugaRazina();
      break;
    default:
      throw "Ne postoji setup za " + GAME.activeWorldMap.name;
      break;
  }

  render_main();
}
//kreiramo sve kutije koje se mogu razbiti
function createItems(nazivName, count) {
  for (let i = 1; i <= count; i++) {
    let nazivLayera = nazivName + i;

    switch (nazivLayera) {
      case "box" + i:
        let kutija = new Item(GAME.getSpriteLayer(nazivLayera));
        kutija.visible = true;
        GAME.addSprite(kutija);
        Postavke.kutije.push(kutija);
        break;
      case "c" + i:
        let c = new Coin(GAME.getSpriteLayer(nazivLayera));
        c.visible = false;
        GAME.addSprite(c);
        Postavke.coins.push(c);
        break;
      case "h" + i:
        let h = new Heart(GAME.getSpriteLayer(nazivLayera));
        h.visible = false;
        GAME.addSprite(h);
        Postavke.heart = h;
        Postavke.hearts.push(h);
        break;

      case "spike" + i:
        let s = new Spike(GAME.getSpriteLayer(nazivLayera));
        s.visible = true;
        GAME.addSprite(s);
        Postavke.spikes.push(s);
      default:
        break;
    }
  }
}
function createMummy(x, y) {
  let m = new Mummy(x, y, GAME.getSpriteLayer("Enemy-mumia"));
  GAME.addSprite(m);
  m.visible = true;
  Postavke.mummy = m;
  Postavke.mumije.push(m);
}

function createBoss(x, y) {
  let b = new Boss(x, y, GAME.getSpriteLayer("Boss"));
  GAME.addSprite(b);
  b.visible = true;
  Postavke.boss = b;
  Postavke.bosses.push(b);
}

function createDog(x, y) {
  let d = new Dog(x, y, GAME.getSpriteLayer("dog"));
  GAME.addSprite(d);
  Postavke.dog = d;
  Postavke.dogs.push(d);
}
function createMud() {
  let blato = new Item(GAME.getSpriteLayer("mud"));
  blato.visible = true;
  GAME.addSprite(blato);
  Postavke.mud = blato;
}
/* LEVELS */
function setupPrvaRazina() {
  GAME.activeWorldMap.setCollisions("box-platform");
  let j = new Joe(GAME.getSpriteLayer("Joe-main"));
  GAME.addSprite(j);
  Postavke.joe = j;
  createMummy(64 * 5, 0);
  createMummy(64 * 17, 0);
  createMummy(64 * 13, 0);
  createMummy(64 * 27, 0);
  createDog(64 * 14, 64 * 18);
  createDog(64 * 21, 64 * 18);
  createItems("box", 5);
  createItems("c", 5);
  createItems("h", 4);

  createMud();
}
function setupDrugaRazina() {
  GAME.activeWorldMap.setCollisions("Platforma");
  let j = new Joe(GAME.getSpriteLayer("Joe"));
  j.y = 64 * 6;
  GAME.addSprite(j);
  Postavke.joe = j;
  createMud();
  createMummy(64 * 10, 0);
  createMummy(64 * 20, 64 * 6);
  createMummy(64 * 28, 64 * 3);
  createMummy(64 * 19, 0);
  createBoss(64 * 2, 64 * 6);
  createBoss(64 * 7, 64 * 3);
  createBoss(64 * 9, 64 * 3);
  createBoss(64 * 15, 64 * 6);
  createBoss(64 * 14, 0);
  createBoss(64 * 21, 64 * 3);
  createBoss(64 * 21, 0);
  createItems("c", 11);
  createItems("spike", 4);
}
