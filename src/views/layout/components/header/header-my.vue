<script setup>
// 构建 menu 数据源
const menuArr = [
  {
    id: '0',
    icon: 'profile',
    title: '个人资料',
    path: '/member'
  },
  {
    id: '1',
    icon: 'vip-profile',
    title: '升级vip',
    path: '/member'
  },
  {
    id: '2',
    icon: 'logout',
    title: '退出登录',
    path: ''
  },
]
</script>

<template>
  <m-popover placement="bottom-left" class="flex items-center ">
    <template #reference>
      <div class="relative flex items-center p-0.5 rounded-sm cursor-pointer hover:bg-zinc-100 duration-200 outline-none">
        <!-- 头像 -->
        <img class="w-3 h-3 rounded-sm"
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_source%2F0c%2Fef%2Fa0%2F0cefa0f17b83255217eddc20b15395f9.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651074011&t=ba5d64079381425813e4c269bcac1a1b"
          alt="">
        <!-- 下拉箭头 -->
        <m-svg-icon name="down-arrow" class="h-1.5 w-1.5 ml-0" fillClass="bg-zinc-900"></m-svg-icon>
        <!-- vip -->
        <m-svg-icon name="vip" class="h-1.5 w-1.5 absolute right-[16px] bottom-0"></m-svg-icon>
      </div>
    </template>
    <!-- 下拉气泡 -->
    <div class="w-[140px] overflow-hidden">
      <div v-for="item in menuArr" :key="item.id" class="flex items-center cursor-pointer p-1 rounded hover:bg-zinc-100">
        <m-svg-icon :name="item.icon" class="w-1.5 h-1.5 mr-1" fillClass="bg-zinc-900"></m-svg-icon>
        <span class="text-sm text-zinc-800">{{ item.title }}</span>
      </div>
    </div>
  </m-popover>
</template>

<style lang='scss' scoped>
</style>
