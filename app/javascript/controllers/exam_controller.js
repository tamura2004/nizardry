import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="exam"
export default class extends Controller {
  static targets = [
    "str",
    "dex",
    "con",
    "int",
    "wis",
    "cha",
    "fighter",
    "cleric",
    "wizard",
    "thief",
    "paradin",
    "barbarian",
  ];

  connect() {
    console.log("hello, i'm exam controller");
  }

  shuffle(arrays) {
    const array = arrays.slice();
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  diceroll() {
    let d = this.shuffle([
      6, 6, 6, 6, 6, 6, 5, 5, 5, 4, 4, 4, 3, 3, 2, 2, 1, 1,
    ]);
    console.log(d);
    this.strTarget.value = d[0] + d[6] + d[12];
    this.dexTarget.value = d[1] + d[7] + d[13];
    this.conTarget.value = d[2] + d[8] + d[14];
    this.intTarget.value = d[3] + d[9] + d[15];
    this.wisTarget.value = d[4] + d[10] + d[16];
    this.chaTarget.value = d[5] + d[11] + d[17];

    this.fighterTarget.hidden = this.strTarget.value < 16;
    this.clericTarget.hidden = this.wisTarget.value < 16;
    this.wizardTarget.hidden = this.intTarget.value < 16;
    this.thiefTarget.hidden = this.dexTarget.value < 16;
    this.paradinTarget.hidden = this.chaTarget.value < 16;
    this.barbarianTarget.hidden = this.conTarget.value < 16;
  }
}
