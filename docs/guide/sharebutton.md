---
title: 页面分享按钮
---

## 引入组件

```ts [.vitepress/theme/index.ts]
import DefaultTheme from 'vitepress/theme'
import { ShareButton } from '@theojs/lumen' // [!code ++]
import { h } from 'vue'// [!code ++]

export default {
  extends: DefaultTheme,
  Layout() {// [!code ++]
    return h(DefaultTheme.Layout, null, {// [!code ++]
      'aside-outline-before': () => h(ShareButton),// [!code ++]
    })// [!code ++]
  },// [!code ++]
 ...
}
```

## 自定义按钮文本

```ts [.vitepress/theme/index.ts]
import DefaultTheme from 'vitepress/theme'
import { ShareButton } from '@theojs/lumen'
import { h } from 'vue'

export default {
  extends: DefaultTheme,
  Layout() {// [!code ++]
    return h(DefaultTheme.Layout, null, {// [!code ++]
      'aside-outline-before': () =>// [!code ++]
        h(ShareButton, {// [!code ++]
          buttonIcon: 'fa6-solid:share-nodes', // 自定义图标 // [!code ++]
          buttonText: '分享此页面', // 自定义按钮文本// [!code ++]
          copiedIcon: 'mdi:thumbs-up', // 自定义复制成功后的图标// [!code ++]
          copiedText: '链接已复制！' // 自定义复制成功后的文本// [!code ++]
        })// [!code ++]
    })// [!code ++]
  }// [!code ++]
  ...
}
```

## 参数说明

|    参数名    |   类型   |                                   默认值                                   | 描述                                                                                 |
| :----------: | :------: | :------------------------------------------------------------------------: | ------------------------------------------------------------------------------------ |
| `buttonIcon` | `string` | `solar:share-bold` : <iconify-icon icon="solar:share-bold"></iconify-icon> | 按钮图标的类名，支持 [iconify](https://icon-sets.iconify.design/) 图标。             |
| `buttonText` | `string` |                                `分享此页面`                                | 按钮显示的文本。                                                                     |
| `copiedIcon` | `string` |    `mdi:thumbs-up` : <iconify-icon icon="mdi:thumbs-up"></iconify-icon>    | 复制成功后显示的图标的类名，支持 [iconify](https://icon-sets.iconify.design/) 图标。 |
| `copiedText` | `string` |                               `链接已复制!`                                | 复制成功后显示的文本。                                                               |
