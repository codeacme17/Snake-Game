import { reactive } from "vue";

interface Food {
  x: number;
  y: number;
  create(): void;
}

const food: Food = reactive({
  x: Math.round(Math.random() * 25) * 20 - 20,
  y: Math.round(Math.random() * 25) * 20 - 20,

  create() {
    this.x = Math.round(Math.random() * 24) * 20;
    this.y = Math.round(Math.random() * 24) * 20;
  },
});
export default food;
