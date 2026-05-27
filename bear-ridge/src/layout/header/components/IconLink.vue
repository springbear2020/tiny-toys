<script setup>
import FullSearch from "@/layout/header/components/FullSearch.vue";
import { computed, ref } from "vue";

const props = defineProps({
  showSearch: {
    type: Boolean,
    default: false,
  },
});
const dynamicStyle = computed(() => {
  return props.showSearch
    ? {
        margin: "0 4px",
      }
    : null;
});

const fullSearchRef = ref();
const handleOpen = () => {
  fullSearchRef.value.handleOpen();
};
</script>

<template>
  <div class="link-box">
    <a v-if="showSearch" @click="handleOpen">
      <img
        class="link-item"
        src="https://cdn.springbear.cn/2026/03/111c75c273ad6e1de11fdb30adad8cb9.svg"
        alt="search"
      />
    </a>
    <a href="https://springbear.blog.csdn.net" target="_blank">
      <img
        class="link-item"
        src="https://cdn.springbear.cn/2026/03/19119a5ba7a62949797c2f030c41236b.svg"
        alt="csdn"
        :style="dynamicStyle"
      />
    </a>
    <a href="https://github.com/springbear2020" target="_blank">
      <img
        class="link-item"
        src="https://cdn.springbear.cn/2026/03/9a54e4dd74432c656f6ac173916cf9a9.svg"
        alt="github"
      />
    </a>
  </div>

  <full-search v-if="showSearch" ref="fullSearchRef" />
</template>

<style scoped lang="scss">
@use "@/styles/variables";

.link-box {
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .link-item {
    cursor: pointer;
    border-bottom: 1px solid transparent;
    border-top: 1px solid transparent;
  }

  .link-item:hover {
    border-bottom: 1px solid variables.$theme-color;
  }
}
</style>
