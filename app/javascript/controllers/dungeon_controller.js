import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="dungeon"
export default class extends Controller {
  // static targets = ["box","g00","g01","g02","g10","g11","g12","g20","g21","g22"];
  static targets = (function() {
    let ans = ["box"];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        ans.push(`g${i}${j}`);
      }
    }
    return ans;
  })();

  n = 8;
  x = 0;
  y = 7;

  g = [
    ".......v",
    ".#######",
    ".#T.|...",
    ".######.",
    ".#...|..",
    ".#T..##.",
    ".######.",
    "........"
  ];

  seen = [
    [..."@@@@@@@@"],
    [..."@@@@@@@@"],
    [..."@@@@@@@@"],
    [..."@@@@@@@@"],
    [..."@@@@@@@@"],
    [..."@@@@@@@@"],
    [..."@@@@@@@@"],
    [..."@@@@@@@@"],
  ];


  connect() {
    this.see(this.y, this.x);
    this.show();
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        this[`g${j}${i}Target`].innerHTML = this.floor(j - 1, i - 1);
      }
    }
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        this[`g${this.y + j}${this.x + i}Target`].classList.toggle("scale-0");
      }
    }
  }

  floor(y,x) {
    if (y < 0 || this.n <= y || x < 0 || this.n <= x) {
      return "#";
    } else if (this.seen[y][x] == "@") {
      return "?";
    } else {
      return this.g[y][x];
    }
  }

  isOut(y,x) {
    return y < 0 || this.n <= y || x < 0 || this.n <= x;
  }

  isWall(y,x) {
    if (this.isOut(y,x)) {
      return true;
    } else if (this.g[y][x] != ".") {
      return true;
    } else {
      return false;
    }
  }

  left() {
    if (this.move(0,-1)) {
      for (let i = 0; i < 3; i++) {
        this[`g${this.y + i}${this.x}Target`].classList.toggle("scale-0");
        this[`g${this.y + i}${this.x + 3}Target`].classList.toggle("scale-0");
      }
    }
  }

  right() {
    if (this.move(0,1)) {
      for (let i = 0; i < 3; i++) {
        this[`g${this.y + i}${this.x - 1}Target`].classList.toggle("scale-0");
        this[`g${this.y + i}${this.x + 2}Target`].classList.toggle("scale-0");
      }
    }
  }

  up() {
    if (this.move(-1,0)) {
      for (let i = 0; i < 3; i++) {
        this[`g${this.y}${this.x + i}Target`].classList.toggle("scale-0");
        this[`g${this.y + 3}${this.x + i}Target`].classList.toggle("scale-0");
      }
    }
  }

  down() {
    if (this.move(1,0)) {
      for (let i = 0; i < 3; i++) {
        this[`g${this.y - 1}${this.x + i}Target`].classList.toggle("scale-0");
        this[`g${this.y + 2}${this.x + i}Target`].classList.toggle("scale-0");
      }
    }
  }

  move(dy,dx) {
    let ny = this.y + dy;
    let nx = this.x + dx;
    if (this.isWall(ny, nx)) {
      this.boxTarget.innerHTML = "ouch!";
      return false;
    } else {
      this.y = ny;
      this.x = nx;
      this.see(ny, nx);
      this.show();
      return true;
    }
  }

  see(y,x) {
    for (let dy = -1; dy < 2; dy++) {
      for (let dx = -1; dx < 2; dx++) {
        let ny = y + dy;
        let nx = x + dx;
        if (!this.isOut(ny, nx)) {
          this.seen[ny][nx] = ".";
          this[`g${ny + 1}${nx + 1}Target`].innerHTML = this.floor(ny, nx);
        }
      }
    }
  }

  show() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        this[`g${j}${i}Target`].innerHTML = this.floor(this.y + j - 1, this.x + i - 1);
      }
    }

    // this.g00Target.innerHTML = this.floor(this.y - 1, this.x - 1);
    // this.g01Target.innerHTML = this.floor(this.y - 1, this.x);
    // this.g02Target.innerHTML = this.floor(this.y - 1, this.x + 1);
    // this.g10Target.innerHTML = this.floor(this.y, this.x - 1);
    // this.g11Target.innerHTML = this.floor(this.y, this.x);
    // this.g12Target.innerHTML = this.floor(this.y, this.x + 1);
    // this.g20Target.innerHTML = this.floor(this.y + 1, this.x - 1);
    // this.g21Target.innerHTML = this.floor(this.y + 1, this.x);
    // this.g22Target.innerHTML = this.floor(this.y + 1, this.x + 1);
  }
}
