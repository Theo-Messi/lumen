<script setup lang="ts">
import { useRouter } from 'vitepress'

import { PropType, computed } from 'vue'

import { Icon, useCopyLink } from '../types'

// 定义组件的 props 类型
const props = defineProps({
  /**
   * 按钮图标的类名。
   *
   * @default 'solar:share-bold'
   * @type {string}
   */
  buttonIcon: {
    type: String as PropType<string>,
    default: 'solar:share-bold' // Iconify 的图标名称
  },

  /**
   * 按钮显示的文本。
   *
   * @default '分享此页面'
   * @type {string}
   */
  buttonText: {
    type: String as PropType<string>,
    default: '分享此页面'
  },

  /**
   * 复制成功后显示的图标的类名。
   *
   * @default 'mdi:thumbs-up'
   * @type {string}
   */
  copiedIcon: {
    type: String as PropType<string>,
    default: 'mdi:thumbs-up' // Iconify 的图标名称
  },

  /**
   * 复制成功后显示的文本。
   *
   * @default '链接已复制!'
   * @type {string}
   */
  copiedText: {
    type: String as PropType<string>,
    default: '链接已复制!'
  }
})

// 获取 VitePress 路由对象
const router = useRouter()
const { copied, copyLink } = useCopyLink()

const shareLink = computed(() => {
  const currentPath = router.route.path
  return `${window.location.origin}${currentPath.replace(/^\/[a-z]{2}\//, '/')}`
})
</script>

<template>
  <div class="share-link-container">
    <button @click="copyLink(shareLink)" class="share-link-button" :class="{ copied }">
      <span v-if="!copied">
        <Icon :icon="props.buttonIcon" class="iconify" />
        {{ props.buttonText }}
      </span>

      <span v-else>
        <Icon :icon="props.copiedIcon" class="iconify" />
        {{ props.copiedText }}
      </span>
    </button>
  </div>
</template>

<style scoped>
.share-link-container {
  padding: 1rem;
}

.share-link-button {
  position: relative;
  overflow: hidden;
  background-color: var(--vp-c-bg-alt);
  color: var(--vp-c-brand-1);
  border: 1px solid transparent;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  cursor: pointer;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 0.875rem;
  z-index: 1;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.share-link-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background-color: var(--vp-c-brand-soft);
  transition: left 0.6s ease;
  z-index: -1;
}

.share-link-button:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-1px) scale(101%);
  background-color: var(--vp-c-bg-alt-hover);
}

.share-link-button:focus {
  outline: 2px solid var(--vp-c-brand-2);
  outline-offset: 2px;
}

.share-link-button.copied {
  color: var(--vp-c-brand-1);
}

.share-link-button.copied::before {
  left: 0;
  background-color: var(--vp-c-brand-soft);
}

.iconify {
  display: inline-block;
  font-size: 1.2em;
  flex-shrink: 0;
  margin: 0 0 -0.2em 0;
}
</style>
