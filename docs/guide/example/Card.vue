<Card
  :items="[
    // iconify 图标
    {
      name: 'iconify',
      link: 'https://iconify.design/',
      icon: {
        icon: 'line-md:iconify2-static',
        color: '#1769AA',
        alt: 'iconify icon'
      },
      desc: '开源的图标库，提供了数以万计的矢量图标，支持多种框架和平台。',
      rel: 'noopener noreferrer'
    },
    // 普通图片
    {
      name: '支付宝',
      link: 'https://i.theojs.cn/alipay.webp',
      image: {
        src: 'https://i.theojs.cn/logo/alipay.svg',
        alt: 'alipay icon'
      },
      desc: '中国领先的第三方支付平台，支持转账、支付和理财服务。',
      rel: 'noopener noreferrer'
    },
    // 深浅模式图片
    {
      name: 'GitHub',
      link: 'https://github.com',
      image: {
        light: 'https://i.theojs.cn/logo/github.svg',
        dark: 'https://i.theojs.cn/logo/github-dark.svg',
        alt: 'github icon'
      },
      desc: '全球最大代码托管平台，支持版本控制和协作开发。',
      rel: 'noopener noreferrer'
    },
    // 深浅模式 iconify 图标
    {
      name: 'Vercel',
      link: 'https://vercel.com/',
      icon: {
        light: 'ion:logo-vercel',
        dark: 'ion:logo-vercel',
        color: { light: '#000000', dark: '#FFFFFF' },
        alt: 'Vercel icon'
      },
      desc: '适用于前端框架的无服务器部署平台，支持静态生成和即时预览。',
      rel: 'noopener noreferrer'
    }
  ]"
/>
