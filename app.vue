<script setup lang="ts">
useSeoMeta({
  // 標題
  title: '嗶哩嗶哩 (゜-゜)つロ 乾杯~-bilibili',
  // 網站描述
  description:
    'bilibili是國內知名的線上影片彈幕網站，擁有最棒的ACG氛圍，嗶哩嗶哩內容豐富多元，涵蓋動漫、電影、二次元舞蹈影片、線上音樂、娛樂時尚、科技生活、鬼畜影片等。 下載客戶端還可離線下載電影、動漫。',
  // 搜索關鍵詞
  keywords: 'B站,bilibili,嗶哩嗶哩,嗶哩嗶哩動畫,動漫,電影,線上動漫,高清電影',
  meta: [
    { name: 'referrer', content: 'no-referrer' },
  ]
});
</script>

<template>
  <div> 
    <!-- Nuxt 頁面路由, 相當於 RouterView -->
    <!-- 緩存10個頁面，提升用戶切換 -->
    <NuxtPage :keepalive="{ max: 10 }" />
  </div>
</template>

<style lang="scss">
// 基础样式
@import './assets/styles/base.scss';
// 字体图标
@import './assets/styles/iconfont.scss';
:root {
  --van-primary-color: #fb7299 !important;
}
</style>