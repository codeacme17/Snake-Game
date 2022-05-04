import { reactive } from "vue";
import Food from "../interfaces/food";

export const food: Food = reactive({
  x: Math.round(Math.random() * 25) * 20,
  y: Math.round(Math.random() * 25) * 20,
  beEated() {
    this.x = Math.round(Math.random() * 20) * 20;
    this.y = Math.round(Math.random() * 20) * 20;
  },
});
