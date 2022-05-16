<template>
  <div class="container">
    <div class="game_box">
      <div class="food" :style="`left: ${food.x}px; top:${food.y}px`"></div>
      <div
        class="snake_head"
        :style="`left: ${snake._x}px; top:${snake._y}px`"
      ></div>
    </div>
    <div class="under_text">
      <h3>SCORE: {{ gamecontrol.score }}</h3>
      <h3>LEVEL: {{ snake.level }}</h3>
    </div>

    <button
      @click="gamecontrol.start"
      v-show="!gamecontrol.isMoving"
      style="height: 30px; width: 80px; cursor: pointer"
    >
      START
    </button>
    <button
      @click="gamecontrol.restart"
      v-show="gamecontrol.isDead"
      style="height: 30px; width: 80px; cursor: pointer"
    >
      RESTART
    </button>
  </div>
</template>

<script setup lang="ts">
import snake from "../utils/snake";
import food from "../utils/food";
import gamecontrol from "../utils/gamecontrol";
</script>

<style lang="scss" scoped>
@import "../assets/css/snake.scss";
</style>
