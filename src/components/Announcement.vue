<script setup lang="ts">
import { usePrelink } from '../types'
import { Icon, Link } from './common'

const prelink = usePrelink()
</script>

<template>
  <Link v-if="prelink" class="prelink" :href="prelink.link" :rel="prelink.rel" :target="prelink.target">
    <div class="prelink-content">
      <span class="title" v-html="prelink.title"></span>
      <p v-if="prelink.content" class="content" v-html="prelink.content"></p>
      <div v-if="prelink.date" class="time-info">
        <Icon :icon="prelink.dateIcon || 'line-md:calendar'" :alt="prelink.alt || 'date'" size="14" />
        <time v-html="prelink.dateText || '活动时间: 即日至'"> </time>
        <time class="date">{{ prelink.date }}</time>
      </div>
    </div>
  </Link>
</template>

<style scoped>
.prelink {
  display: inline-flex;
  flex-direction: column;
  transition:
    transform 0.25s,
    border-color 0.25s,
    background-color 0.25s;
  margin-bottom: 1em;
  border: 1px solid var(--Announcement-border);
  border-radius: 0.5em;
  background-color: var(--Announcement-bg);
  padding: 0.15em 1em;
}

.prelink:hover {
  transform: var(--Announcement-transform-hover);
  border-color: var(--Announcement-border-hover);
  background-color: var(--Announcement-bg-hover);
}

.prelink:active {
  transform: var(--Announcement-transform-active);
}

.prelink-content {
  display: flex;
  flex-direction: column;
}

.title {
  font-weight: 600;
  font-size: 0.8em;
}

.content {
  font-weight: 500;
  font-size: 0.75em;
}

.time-info {
  display: flex;
  align-items: center;
  gap: 0.25em;
  font-weight: 500;
  font-size: 0.75em;
}

.date {
  color: var(--Announcement-data);
  font-weight: bold;
}

@media (max-width: 768px) {
  .time-info {
    justify-content: center;
  }
}
</style>
