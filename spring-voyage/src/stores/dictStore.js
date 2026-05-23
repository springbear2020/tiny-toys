import { defineStore } from "pinia";
import { getDictMap } from "@/api/dict";

export const useDictStore = defineStore("dict", {
  state: () => ({
    categoryMap: {}, // 分类映射
    tagMap: {}, // 标签映射
    loaded: false, // 标记：是否已经请求过
  }),

  actions: {
    async initDict() {
      if (this.loaded) return;

      try {
        // 并行请求分类、标签
        const [category, tag] = await Promise.all([
          getDictMap("csdn_blog_category"),
          getDictMap("csdn_blog_tag"),
        ]);
        this.categoryMap = category;
        this.tagMap = tag;
        this.loaded = true; // 标记加载完成
      } catch (err) {
        console.error("字典请求失败", err);
      }
    },
  },
});
