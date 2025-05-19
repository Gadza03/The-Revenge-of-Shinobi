class Postavke {
  constructor() {
    if (this instanceof Postavke) {
      throw new Error("Statička klasa nema instance!");
    }
  }

  /** @type {Joe} */
  static joe;

  /** @type {Projektil} */
  static projektil;

  /** @type {Item} */
  static kutije = [];
  static mud = null;
  /**@type {Coin} */
  static coins = [];
  /**@type {Heart} */
  static hearts = [];

  static random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  static spikes = [];
  static dog = null;
  static mummy = null;
  static coin = null;
  static boss = null;
  static bosses = [];
  static heart = null;
  static mumije = [];
  static dogs = [];
  static dog = null;
  static projektili = [];
  static projektili2 = [];

  // static dno = 9 * 64;

  static ukloniProjektil(p) {
    for (let i = Postavke.projektili.length - 1; i >= 0; i--) {
      if (Postavke.projektili[i] === p) {
        Postavke.projektili.splice(i, 1); // brisanje i-tog elementa

        break;
      }
    }
  }

  static ukloniProjektil2(p) {
    for (let i = Postavke.projektili2.length - 1; i >= 0; i--) {
      if (Postavke.projektili2[i] === p) {
        Postavke.projektili2.splice(i, 1); // brisanje i-tog elementa

        break;
      }
    }
  }
}
