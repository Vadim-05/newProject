<template>
  <div class="category">
    <div class="category-selector__buttons">
      <div class="category-selector__button" 
              @click="selectCategory('Bridges')" 
              :class="{ 'category-button-active': selectedCategory === 'Bridges' }">
        <Icon class='category-selector__icon-btn' name="my-icon:vector-one" />
        Bridges 
      </div>
      <div class="category-selector__button" 
              @click="selectCategory('Swaps')" 
              :class="{ 'category-button-active': selectedCategory === 'Swaps' }">
            <Icon class='category-selector__icon-btn' name="my-icon:vector-one" />
            Swaps
      </div>
      <div class="category-selector__button" 
            @click="selectCategory('Landings')" 
            :class="{ 'category-button-active': selectedCategory === 'Landings' }">
          <Icon class='category-selector__icon-btn' name="my-icon:vector-one" />
          Landings
      </div>
    </div>
    <ul class="category-selector__list" v-if="myData[selectedCategory]">
      <li class="category-selector__list-item" v-for="(item, index) in myData[selectedCategory]" :key="index">
          <Icon class='category-selector__icon' name="my-icon:vector-one" />
          {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { myDataStore } from '~/store/pinia'
import { storeToRefs } from 'pinia'

const filtersStore = myDataStore()
const { myData } = storeToRefs(filtersStore)

const selectedCategory = ref('Bridges')

const selectCategory = (category) => {
  selectedCategory.value = category
}
</script>
<style>
@import url("~/styles/tabs/style.scss");
</style>