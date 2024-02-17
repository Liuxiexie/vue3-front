<script setup>
defineEmits(['onItemClick'])
</script>

<template>
  <div class="py-1.5 h-[80vh] flex flex-col">
    <h2 class="text-xl text-zinc-900 dark:text-zinc-200 font-bold px-1.5 pb-2">所有分类</h2>
    <ul class="overflow-x-scroll">
      <li @click="$emit('onItemClick', index)"
        class="text-lg text-zinc-900 dark:text-zinc-300 px-1 py-1.5 duration-100 active:bg-zinc-100 dark:active:bg-zinc-900"
        v-for="(item, index) in $store.getters.categorys" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<style lang='scss' scoped>
</style>
