import { reactive } from "vue";
import gamecontrol from "./gamecontrol";

interface Snake {
  level: number;
  _x: number;
  _y: number;
  setX(x: number): void;
  setY(Y: number): void;
  setLevel(level: number): void;
  addBody(): void;
  moveBody(): void;
}

const snake: Snake = reactive({
  level: 1,
  _x: 0,
  _y: 0,

  bodies: document.getElementsByClassName("snake_body"),
  head: document.getElementById("snake_head"),

  setX(x) {
    if (0 <= x && x <= 480) {
      this._x = x;
      this.moveBody();
    } else {
      gamecontrol.isDead = true;
    }
  },

  setY(y) {
    if (0 <= y && y <= 480) {
      this._y = y;
      this.moveBody();
    } else {
      gamecontrol.isDead = true;
    }
  },

  setLevel(level) {
    this.level = level;
  },

  addBody() {
    const snakeBody: HTMLElement = document.getElementById(
      "snake"
    ) as HTMLElement;

    snakeBody.insertAdjacentHTML(
      "beforeend",
      "<div class='snake_bodies snake_body' style='background-color: white;width: 20px;height: 20px;position: absolute;'></div>"
    );
  },

  moveBody() {
    for (let i = this.bodies.length - 1; i > 0; i--) {
      let frontBodyX = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let frontBodyY = (this.bodies[i - 1] as HTMLElement).offsetTop;
      (this.bodies[i] as HTMLElement).style.left = frontBodyX + "px";
      (this.bodies[i] as HTMLElement).style.top = frontBodyY + "px";
    }
  },
});

export default snake;
