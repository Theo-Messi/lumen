<script setup lang="ts">
import { BoxItem, Icon, isExternal } from '../types'

const props = defineProps<{ items: BoxItem[] }>()
</script>

<template>
  <div class="container">
    <a
      v-for="(box, index) in props.items"
      :key="box.link + index"
      class="link"
      :href="box.link"
      :target="isExternal(box.link) ? '_blank' : '_self'"
      :rel="box.rel || (isExternal(box.link) ? 'noreferrer' : undefined)"
    >
      <template v-if="box.icon">
        <Icon
          v-if="typeof box.icon === 'object'"
          class="iconify light-only"
          :icon="box.icon.light"
          :color="typeof box.color === 'object' ? box.color.light : box.color"
          :ssr="true"
          :inline="true"
          :aria-label="box.alt"
          width="38"
          height="38"
        />
        <Icon
          v-if="typeof box.icon === 'object'"
          class="iconify dark-only"
          :icon="box.icon.dark"
          :color="typeof box.color === 'object' ? box.color.dark : box.color"
          :ssr="true"
          :inline="true"
          :aria-label="box.alt"
          width="38"
          height="38"
        />
        <Icon
          v-else
          class="iconify"
          :icon="box.icon"
          :color="typeof box.color === 'string' ? box.color : ''"
          :ssr="true"
          :inline="true"
          :aria-label="box.alt"
          width="38"
          height="38"
        />
      </template>
      <template v-else-if="box.image">
        <img
          v-if="typeof box.image === 'object'"
          class="light-only"
          :src="box.image.light"
          :alt="box.alt"
          loading="lazy"
          decoding="async"
          width="38"
          height="38"
        />
        <img
          v-if="typeof box.image === 'object'"
          class="dark-only"
          :src="box.image.dark"
          :alt="box.alt"
          loading="lazy"
          decoding="async"
          width="38"
          height="38"
        />
        <img
          v-else
          :src="box.image"
          :alt="box.alt"
          loading="lazy"
          decoding="async"
          width="38"
          height="38"
        />
      </template>
      <span class="name">{{ box.name }}</span>
      <p v-if="box.tag" class="tag">{{ box.tag }}</p>
    </a>
  </div>
</template>

<style scoped>
/**
 * 处理不同模式下的图标显示：暗色模式下隐藏浅色图标，浅色模式下隐藏暗色图标。
 */
:root:not(.dark) .dark-only,
:root:is(.dark) .light-only {
  display: none;
}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
}

.link {
  display: flex;
  position: relative;
  align-items: center;
  gap: 1em;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  border: 1px solid var(--Box-border);
  border-radius: 0.8em;
  background-color: var(--Box-bg);
  padding: 0 1.6em;
  width: 14em;
  height: 3.5em;
  text-decoration: none !important;
}

.link:hover {
  transform: var(--Box-transform-hover);
  box-shadow: var(--Box-boxshadow-hover);
  border-color: var(--Box-border-hover);
  background-color: var(--Box-bg-hover);
}

.link:active {
  transform: var(--Box-transform-active);
}

.link::after {
  display: none !important;
}

@media (max-width: 1024px) {
  .link {
    flex: 1 1 calc(50% - 0.5em);
    max-width: calc(50% - 0.5em);
  }
}

@media (max-width: 768px) {
  .link {
    flex: 1 1 calc(50% - 0.5em);
    max-width: calc(50% - 0.5em);
  }
}

.tag {
  display: inline-block;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  margin: 0;
  border-radius: 0 0.7em 0 0.7em;
  background-color: var(--Box-tag-bg);
  padding: 0.25em 0.5em;
  pointer-events: none;
  color: var(--Box-tag);
  font-weight: 500;
  font-size: 0.625em;
  line-height: 1;
  text-transform: uppercase;
}

.iconify {
  flex-shrink: 0;
  color: var(--iconify-defaultcolor);
}

.name {
  overflow: hidden;
  color: var(--Box-name);
  font-weight: 500;
  font-size: 0.875em;
  letter-spacing: 0.05em;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
