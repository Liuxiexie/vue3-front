<script setup>
import { isMobileTerminal } from '@/utils/flexible';
import mobileNavigation from './mobile/index.vue'
import { ref } from 'vue'
import { getCategory } from '@/api/category';

// 获取所有类目
const categoryData = ref()
const getCategoryData = async () => {
  const { categorys } = await getCategory()
  categoryData.value = categorys
}
getCategoryData()
</script>

<template>
  <mobile-navigation v-if="mobileNavigation" :data="categoryData" />
</template>

<style lang='scss' scoped>
</style>
