import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import Solistheme, { Twikoo, Info } from '@theojs/solis'
import { Twikoo_Data } from '../data'

export default {
  ...Solistheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-before': () => h(Info),
      'doc-after': () => h(Twikoo, { Twikoo_Data })
    })
  }
}
