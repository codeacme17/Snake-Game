import { reactive } from "vue";
import food from "./food";
import snake from "../utils/snake";

interface GameControl {
  key: string;
  score: number;
  start(): void;
  pause(): void;
  restart(): void;
  keydownHandler(): void;
  move(): void;
  checkEat(X: number, Y: number): void;
}

const gamecontrol: GameControl = reactive({
  key: "ArrowRight",
  score: 0,
  start() {
    this.move();
    this.keydownHandler();
  },

  restart() {
    snake.setX(0);
    snake.setY(0);
    food.create();
  },

  pause() {},

  keydownHandler() {
    const that = this;
    window.onkeydown = function (e: KeyboardEvent): void {
      that.key = e.key;
    };
  },

  move() {
    let X: number = snake._x;
    let Y: number = snake._y;
    switch (this.key) {
      case "ArrowUp":
        Y -= 20;
        break;
      case "ArrowDown":
        Y += 20;
        break;
      case "ArrowLeft":
        X -= 20;
        break;
      case "ArrowRight":
        X += 20;
        break;
      default:
        break;
    }
    snake.setX(X);
    snake.setY(Y);
    this.checkEat(X, Y);
    setTimeout(this.move.bind(this), 300 - (snake.level - 1) * 30);
  },

  checkEat(X, Y) {
    if (X === food.x && Y === food.y) {
      this.score++;
      food.create();
    }
  },
});

export default gamecontrol;
