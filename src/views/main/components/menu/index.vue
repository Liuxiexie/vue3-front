<script setup>
defineProps({
  categorys: {
    type: Array,
    required: true
  }
})
defineEmits(['onItemClick'])
</script>

<template>
  <div class="py-1.5 h-[80vh] flex flex-col">
    <h2 class="text-xl text-zinc-900 font-bold px-1.5 pb-2">所有分类</h2>
    <ul class="overflow-x-scroll">
      <li @click="$emit('onItemClick', index)" class="text-lg px-1.5 py-1 duration-100 active:bg-zinc-100"
        v-for="(item, index) in categorys" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<style lang='scss' scoped>
</style>
