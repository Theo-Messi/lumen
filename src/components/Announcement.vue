<script setup lang="ts">
import { Icon, Prelink, usePrelink } from '../types'

const prelink: Prelink | undefined = usePrelink()
</script>

<template>
  <a
    v-if="prelink"
    class="prelink"
    :href="prelink.link"
    :target="prelink.target"
    :title="prelink.title"
    :aria-label="prelink.title"
    rel="noopener noreferrer"
  >
    <div class="prelink-content">
      <span class="title" aria-hidden="true" v-html="prelink.title"></span>
      <span
        v-if="prelink.content"
        class="content"
        aria-hidden="true"
        v-html="prelink.content"
      ></span>
      <span v-if="prelink.date" class="time-info">
        <Icon
          class="iconify"
          alt="Icon"
          :icon="prelink.dateIcon || 'line-md:calendar'"
          aria-hidden="true"
        ></Icon>
        <span
          aria-hidden="true"
          v-html="prelink.dateText || '活动时间: 即日至'"
        ></span>
        <span class="date" :aria-label="prelink.date">{{ prelink.date }}</span>
      </span>
    </div>
  </a>
</template>

<style scoped>
.prelink {
  display: inline-flex;
  flex-direction: column;
  transition: all 0.5s ease;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.8rem;
  background-color: var(--vp-button-alt-bg);
  padding: 0.3rem 1.5rem;
}

.prelink:hover {
  transform: translateY(-1px);
  border-color: var(--vp-c-brand-1);
  background-color: var(--vp-c-brand-soft);
}

.prelink-content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.title {
  font-weight: 600;
  font-size: 0.8rem;
}

.content {
  font-weight: 500;
  font-size: 0.75rem;
}

.time-info {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-weight: 500;
  font-size: 0.75rem;
}

.iconify {
  font-size: 1.2em;
}

.date {
  color: var(--vp-c-brand-3);
  font-weight: bold;
}

@media (max-width: 768px) {
  .time-info {
    justify-content: center;
  }
}
</style>
