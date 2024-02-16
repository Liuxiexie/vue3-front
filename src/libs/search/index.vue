<script setup>
</script>

<template>
  <div class="group relative w-full border-white rounded-xl p-0.5 hover:bg-red-100/50 duration-500">
    <div>
      <!-- 搜索图标 -->
      <m-svg-icon name="search" color='#707070'
        class="w-1.5 max-h-1.5 absolute translate-y-[-50%] top-[50%] left-2"></m-svg-icon>
      <!-- 输入框 -->
      <input type="text" placeholder="搜索"
        class="group-hover:border-zinc-100 group-hover:bg-white duration-500 block bg-zinc-100 text-sm w-full h-[44px] pl-4 rounded-xl outline-0 border-zinc-200 caret-zinc-700 border focus:border-red-300">
      <!-- 删除图标 -->
      <m-svg-icon name="input-delete" class="w-1.5 max-h-1.5 absolute translate-y-[-50%] top-[50%] right-8"></m-svg-icon>
      <!-- 分割线 -->
      <div class="min-h-1.5 w-[1px] absolute translate-y-[-50%] top-[50%] right-6 bg-zinc-400"></div>
    </div>
    <!-- 下拉区 -->
    <transition name="slide">
      <div
        class="w-full max-h-[500px] absolute top-[56px] rounded-md left-0 p-2 z-20 text-base duration-500 overflow-auto bg-white border border-zinc-200 hover:drop-shadow-xl">
        <slot name="dropdown"></slot>
      </div>
    </transition>
  </div>
</template>

<style lang='scss' scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(40px);
}
</style>
