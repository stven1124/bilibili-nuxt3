import channel from '@/database/chnnel'

// 通過 defineEventHandler 定義接口
export default defineEventHandler(() => {
  return channel;
})