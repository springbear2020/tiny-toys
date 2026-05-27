<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const handleClick = () => {
  router.push("/");
};
</script>

<template>
  <div class="error-box">
    <el-empty
      description="页面被熊吃掉啦~"
      image="https://cdn.springbear.cn/2026/03/267c1d3f15f0cda28b390cec10fada10.png"
      :image-size="512"
    >
      <el-button round type="primary" icon="ArrowLeft" @click="handleClick"
        >返回主页
      </el-button>
    </el-empty>
  </div>
</template>

<style scoped lang="scss">
.error-box {
  height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
