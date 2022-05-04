<template>
  <div class="container">
    <div class="game_box">
      <div class="food" :style="`left: ${food.x}px; top:${food.y}px`"></div>
      <div
        class="snake_head"
        :style="`left: ${snake.x}px; top:${snake.y}px`"
        @keyup.enter="food.beEated"
      ></div>
    </div>
    <div class="under_text">
      <h3>SCORE: 3</h3>
      <h3>LEVEL: 3</h3>
    </div>
  </div>

  {{ food.x }}
  {{ food.y }}
</template>

<script setup lang="ts">
import { snake } from "../utils/snake";
import { food } from "../utils/food";

window.onkeydown = function (e: KeyboardEvent): void {
  switch (e.key) {
    case "ArrowUp":
      snake.up();
      break;
    case "ArrowDown":
      snake.down();
      break;
    case "ArrowRight":
      snake.right();
      break;
    case "ArrowLeft":
      snake.left();
      break;
    default:
      break;
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/snake.scss";
</style>
