import { Controller } from "@hotwired/stimulus"

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
    "barbarian"
  ];

  connect() {
    console.log("hello, i'm exam controller");
  }

  d6(n) {
    let cnt = 0;
    for (let i = 0; i < n; i++) {
      cnt += Math.floor(Math.random() * 6) + 1;
    }
    return cnt;
  }

  diceroll() {
    this.strTarget.value = this.d6(4);
    this.dexTarget.value = this.d6(4);
    this.conTarget.value = this.d6(4);
    this.intTarget.value = this.d6(4);
    this.wisTarget.value = this.d6(4);
    this.chaTarget.value = this.d6(4);

    this.fighterTarget.hidden = (this.strTarget.value < 16);
    this.clericTarget.hidden = (this.wisTarget.value < 16);
    this.wizardTarget.hidden = (this.intTarget.value < 16);
    this.thiefTarget.hidden = (this.dexTarget.value < 16);
    this.paradinTarget.hidden = (this.chaTarget.value < 16);
    this.barbarianTarget.hidden = (this.conTarget.value < 16);
  }
}
