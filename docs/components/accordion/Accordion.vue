<template>
  <component :is="heading">
    <button
      :id="id + '-header'"
      :aria-controls="id + '-panel'"
      :aria-expanded="isExpanded"
      @click="toggle"
    >
      {{ title }}
    </button>
  </component>
  <section
    :id="id + '-panel'"
    :aria-labelledby="id + '-header'"
    :hidden="!isExpanded"
  >
    <slot></slot>
  </section>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  heading: {
    type: String,
    default: "h3",
  },
});

const isExpanded = ref(false);

const toggle = () => {
  isExpanded.value = !isExpanded.value;
};
</script>