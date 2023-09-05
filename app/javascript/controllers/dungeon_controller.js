import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="dungeon"
export default class extends Controller {
  static targets = ["box","left","mid","right"];
  cnt = 0;
  g = [
    "|#..#..v|",
    "|#v.v|v^|",
    "|v^|^.^#|",
    "|^.....B|"
  ];

  n = this.g[0].length
  x = 1;
  y = 0;

  connect() {
    this.show();
  }

  left() {
    if (this.g[this.y][this.x - 1] == "|") {
      this.boxTarget.innerHTML = "ouch!";
    } else {
      this.x -= 1;
      this.show();
    }
  }

  right() {
    if (this.g[this.y][this.x + 1] == "|") {
      this.boxTarget.innerHTML = "ouch!";
    } else {
      this.x += 1;
      this.show();
    }
  }

  action() {
    if (this.g[this.y][this.x] == "^") {
      this.y -= 1;
      this.show();
    } else if (this.g[this.y][this.x] == "v") {
      this.y += 1;
      this.show();
    }
  }

  show() {
    this.leftTarget.innerHTML = this.g[this.y][(this.x-1) % this.n];
    this.midTarget.innerHTML = this.g[this.y][this.x % this.n];
    this.rightTarget.innerHTML = this.g[this.y][(this.x+1) % this.n];
  }
}
