import { reactive } from "vue";
import Snake from "../interfaces/snake";

export const snake: Snake = reactive({
  length: 10,
  x: 20,
  y: 20,
  up() {
    if (this.y >= 20) {
      this.y -= 20;
    } else {
      alert("boom");
    }
  },
  down() {
    if (this.y <= 460) {
      this.y += 20;
    } else {
      alert("boom");
    }
  },
  left() {
    if (this.x >= 20) {
      this.x -= 20;
    } else {
      alert("boom");
    }
  },
  right() {
    if (this.x <= 460) {
      this.x += 20;
    } else {
      alert("boom");
    }
  },
  eat() {},
});
