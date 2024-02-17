<script setup>
import { isMobileTerminal } from '@/utils/flexible';
import mobileNavigation from './mobile/index.vue'
import pcNavigationVue from './pc/index.vue'
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

store.dispatch('category/useCategoryData')
</script>

<template>
  <mobile-navigation v-if="isMobileTerminal" />
  <pc-navigation-vue v-else></pc-navigation-vue>
</template>

<style lang='scss' scoped>
</style>
