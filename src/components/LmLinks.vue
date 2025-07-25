<script setup lang="ts">
import { LmIcon, LmImage, LmLink } from './common'
import type { LinkItem } from '../types'

const props = defineProps<{
  items: LinkItem[]
  grid?: number
}>()
</script>

<template>
  <div
    class="grid"
    :style="typeof props.grid === 'number' ? { gridTemplateColumns: `repeat(${props.grid}, 1fr)` } : undefined"
  >
    <LmLink
      v-for="(link, i) in props.items"
      :key="link.name + i"
      class="link"
      :href="link.link"
      :rel="link.rel"
      :target="link.target"
      no-icon
    >
      <span class="row">
        <LmIcon v-if="link.icon" :icon="link.icon" :size="link.size || '32'" />
        <LmImage v-else-if="link.image" :image="link.image" :size="link.size || '32'" />
        <span class="name" v-html="link.name"></span>
      </span>
      <p v-if="link.desc" class="desc" v-html="link.desc"></p>
      <p v-if="link.linkText" class="link-text">
        {{ link.linkText }} <span class="vpi-arrow-right" style="margin-left: 6px" />
      </p>
    </LmLink>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 0.5em;
  margin: 0.5em 0;
}

.row {
  display: flex;
  align-items: center;
  gap: 0.75em;
  width: 100%;
  min-width: 0;
}

.link {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition:
    color 0.25s,
    transform 0.25s,
    box-shadow 0.25s,
    border-color 0.25s,
    background-color 0.25s;
  margin: 0;
  border: 1px solid var(--lm-Links-border);
  border-radius: 0.75em;
  background-color: var(--lm-Links-bg);
  padding: 1em;
  min-width: 0;
  text-decoration: none !important;
}

.link.lm-link {
  color: var(--lm-Links-name);
}

.link.lm-link:hover {
  transform: var(--lm-Links-transform-hover);
  box-shadow: var(--lm-Links-boxshadow-hover);
  border-color: var(--lm-Links-border-hover);
  background-color: var(--lm-Links-bg-hover);
  color: var(--lm-Links-name-hover);
}

.link.lm-link:active {
  transform: var(--lm-Links-transform-active);
}

.iconify {
  flex-shrink: 0;
  color: var(--lm-iconify-defColor);
}

.name {
  flex: 1 1 0%;
  width: 100%;
  min-width: 0;
  overflow: hidden;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.desc {
  margin: 0.875em 0 0 0;
  color: var(--lm-Links-desc);
  font-weight: 500;
  font-size: 0.75em;
  line-height: 1.5;
  word-break: break-all;
}

.link-text {
  display: flex;
  align-items: center;
  margin: 0;
  padding-top: 8px;
  font-weight: 500;
  font-size: 0.75em;
  line-height: 1.5;
}

@media (max-width: 600px) {
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(45%, 1fr)) !important;
  }
}
</style>
