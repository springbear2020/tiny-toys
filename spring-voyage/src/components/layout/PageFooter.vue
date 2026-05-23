<template>
  <footer
    class="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950"
  >
    <div
      class="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 px-4 py-6 text-sm text-slate-500 dark:text-slate-400 md:px-8"
    >
      <div class="flex flex-col items-center gap-1">
        <p>© {{ currentYear }} Spring-_-Bear. All rights reserved.</p>
      </div>
      <div class="flex flex-col items-center gap-2">
        <a
          href="https://beian.miit.gov.cn/"
          target="_blank"
          rel="noopener noreferrer"
          class="transition-colors hover:text-slate-900 dark:hover:text-white"
        >
          黔ICP备2026000823号-1
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>
