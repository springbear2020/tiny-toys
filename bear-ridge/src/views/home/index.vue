<script setup>
import { ref, onMounted } from "vue";
import TypeIt from "typeit";

const elementRef = ref();
const greetingWords = [
  "🎉 来了，欢迎，终于等到你！这里没有 996，只有书墨香和偶现的 debug 警告（尴尬已被捕获）",
  "🐻 我是春天熊，活力如春，坚毅如熊。写代码如写情书的程序员，GitHub 主页比朋友圈更有料",
  "💻 白天用代码编织银河系帝国，深夜用海明威式文风写技术博客。是的，我管这叫赛博人格分裂",
  "📸 镜头里藏着两个平行宇宙：代码构建的精密星图和生活中跳动的烟火气，如魔幻广场舞晚霞版",
  "📚 书架上演《百年孤独》VS《代码整洁之道》：一个说要魔幻，一个说要重构，最后判定我加班",
  "🎾 羽毛球拍的杀球弧线比函数调用栈更加优雅，但接不住老妈「再不找对象就断线」的致命扣杀",
  "🌌 人生新版本开发中：用编程重写 25 岁的莽撞，用笔尖勾画周末的诗意，用相机定格人间的美好",
  "💌 写给未来的小情书：git commit -m '心跳算法优化：新增并行线程处理星海、远方和你的微笑'",
];

onMounted(() => {
  new TypeIt(elementRef.value, {
    strings: greetingWords,
    speed: 50,
  }).go();
});
</script>

<template>
  <div class="home-box">
    <h3 ref="elementRef"></h3>
  </div>
</template>

<style scoped lang="scss">
@use "@/styles/variables";

.home-box {
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  color: variables.$theme-color;
  padding: 0 16px;

  h3 {
    line-height: 2;
  }
}
</style>