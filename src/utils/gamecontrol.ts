import { reactive } from "vue";
import food from "./food";
import snake from "../utils/snake";

interface GameControl {
  key: string;
  score: number;
  isMoving: boolean;
  isDead: boolean;
  start(): void;
  pause?(): void;
  restart(): void;
  keydownHandler(): void;
  move(): void;
  checkEat(X: number, Y: number): void;
}

const gamecontrol: GameControl = reactive({
  key: "ArrowRight",
  score: 0,
  isMoving: false as boolean,
  isDead: false as boolean,

  start() {
    this.move();
    this.keydownHandler();
  },

  restart() {
    snake.setX(0);
    snake.setY(0);
    food.create();
    this.key = "ArrowRight";
    this.score = 0;
    snake.setLevel(1);
    this.isDead = false;
    this.start();
  },

  keydownHandler() {
    const that = this;
    window.onkeydown = function (e: KeyboardEvent): void {
      that.key = e.key;
    };
  },

  move() {
    if (this.isDead) return;
    this.isMoving = true;
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
      snake.setLevel(Math.floor(this.score / 3) + 1);
      food.create();
    }
  },
});

export default gamecontrol;
