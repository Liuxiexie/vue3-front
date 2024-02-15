<script setup>
import { ref } from 'vue'
import { getCategory } from '@/api/category';

const getCategoryData = async () => {
  const res = await getCategory()
  console.log(res);
}
getCategoryData()
</script>

<template>
  我是移动端下的navigation
</template>

<style lang='scss' scoped>
</style>
