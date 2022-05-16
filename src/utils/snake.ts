import { reactive } from "vue";
import gamecontrol from "./gamecontrol";

interface Snake {
  level: number;
  _x: number;
  _y: number;
  setX(x: number): void;
  setY(Y: number): void;
  setLevel(level: number): void;
}

const snake: Snake = reactive({
  level: 1,
  _x: 0,
  _y: 0,

  setX(x) {
    if (0 <= x && x <= 480) {
      this._x = x;
    } else {
      gamecontrol.isDead = true;
    }
  },
  setY(y) {
    if (0 <= y && y <= 480) {
      this._y = y;
    } else {
      gamecontrol.isDead = true;
    }
  },
  setLevel(level) {
    this.level = level;
  },
});

export default snake;
