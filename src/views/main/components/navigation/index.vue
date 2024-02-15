<script setup>
import { isMobileTerminal } from '@/utils/flexible';
import mobileNavigation from './mobile/index.vue'
</script>

<template>
  
  <mobile-navigation v-if="mobileNavigation"/>
</template>

<style lang='scss' scoped>
</style>
