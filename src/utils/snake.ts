import { reactive } from "vue";
import gamecontrol from "./gamecontrol";

interface Snake {
  level: number;
  _x: number;
  _y: number;
  setX(x: number): void;
  setY(Y: number): void;
}

const snake: Snake = reactive({
  level: Math.round(gamecontrol.score / 3) || 1,
  _x: 0,
  _y: 0,

  setX(x) {
    if (0 <= x && x <= 480) {
      this._x = x;
    }
  },
  setY(y) {
    if (0 <= y && y <= 480) {
      this._y = y;
    }
  },
});

export default snake;
