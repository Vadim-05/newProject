<template>
  <div class="services">
    <button @click="toggleDropdown" class="services-toggle-mobile">
      {{ selectedOption ? selectedOption.name : 'Ethereum Mainnet' }}
    </button>
    <ul :class="{ 'services-menu-open': isOpen }" class="services-menu">
      <li v-for="(option, index) in options" :key="index" @click="selectOption(option)">
         <button class="services__option">{{ option.name }}</button>
      </li>
    </ul>
  </div>
  
  <div>
    <ul class="services-toggle-table">
      <li v-for="(option, index) in options" :key="index" @click="selectOption(option)"  
          class="services-item">
        <button :class="{ 'services-active': selectedOption === option }" class="services-button">
          <Icon name="my-icon:vector" />
          {{ option.name }}</button>
      </li>
    </ul>
  </div>
</template>



<script>
import { ref, reactive, onMounted } from 'vue';
import { myDataStore } from '~/store/pinia';
import { projectsData } from '~/projectsData'; 

export default {
  setup() {
    const isOpen = ref(false);
    const selectedOption = ref(null);
    const options = reactive({});

    const filtersStoreInstance = myDataStore();

    const toggleDropdown = () => {
      isOpen.value = !isOpen.value;
    };

    const selectOption = (option) => {
      selectedOption.value = option;
      isOpen.value = false;
      filtersStoreInstance.addMyData(option.data);
    };

    onMounted(() => {
      Object.assign(options, projectsData);
      selectedOption.value = options[Object.keys(options)[0]];
      selectOption(selectedOption.value);
    });

    return {
      isOpen,
      selectedOption,
      options,
      toggleDropdown,
      selectOption,
    };
  }
};
</script>
<style>
@import url("~/styles/service/style.scss");
</style>