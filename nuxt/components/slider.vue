<template>
  <section class="slider">
    <div class="slider-container">
      <div class="slider-section">
        <div class="slider-info">
          <div class="slider__icon">
            <Icon name="my-icon:vector-third" />
            <span class="slider__text">Wallets</span>
          </div>
          <div class="slider__value">
            {{ slider1Value }}
          </div>
        </div>
        <input
          type="range"
          :max="max1"
          v-model="slider1Value"
          class="slider__input"
        />
        <div class="slider__scale">
          <span class="slider__scale-mark slider__scale-mark--start">0</span>
          <span class="slider__scale-mark slider__scale-mark--second">250</span>
          <span class="slider__scale-mark slider__scale-mark--half">500</span>
          <span class="slider__scale-mark slider__scale-mark--full">1000</span>
        </div>
      </div>

      <div class="slider-section slider-padding">
        <div class="slider-info">
          <div class="slider__icon">
            <Icon name="my-icon:vector-four" />
            <span class="slider__text">Transactions</span>
          </div>
          <div class="slider__value">
            {{ slider2Value }}
          </div>
        </div>
        <input
          type="range"
          :max="max2"
          v-model="slider2Value"
          class="slider__input"
        />
        <div class="slider__scale">
          <span class="slider__scale-mark slider__scale-mark--start">0</span>
          <span class="slider__scale-mark slider__two-scale-mark--second">50</span>
          <span class="slider__scale-mark slider__two-scale-mark--half">100</span>
          <span class="slider__scale-mark slider__scale-mark--full">200</span>
        </div>
      </div>

      <div class="slider-section slider-padding">
        <div class="slider-info">
          <div class="slider__icon">
            <Icon name="my-icon:vector-five" />
            <span class="slider__text">Services</span>
          </div>
          <div class="slider__value">
            {{ slider3Value }}
          </div>
        </div>
        <input
          type="range"
          :max="max3"
          v-model="slider3Value"
          class="slider__input"
        />
        <div class="slider__scale">
          <span class="slider__scale-mark slider__scale-mark--start">0</span>
          <span class="slider__scale-mark slider__three-scale-mark--second">20</span>
          <span class="slider__scale-mark slider__three-mark--half">40</span>
          <span class="slider__scale-mark slider__scale-mark--full">80</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const slider1Value = ref(560);
    const slider2Value = ref(75);
    const slider3Value = ref(20);
    const max1 = 1000;
    const max2 = 200;
    const max3 = 80;

    return {
      slider1Value,
      slider2Value,
      slider3Value,
      max1,
      max2,
      max3
    };
  },
};
</script>
<style>
@import url("~/styles/slider/style.scss");
</style>
