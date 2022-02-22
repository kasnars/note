module.exports = {
  "title": "",
  "description": "",
  "dest": "public",
  "base":'/markdown-blog/',
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    valineConfig: {
      appId: '7U9I2lud28rt2J3cQptUGPL3-gzGzoHsz',// your appId
      appKey: 'Q3GItuVLrrpGxeoSOaHVNrei', // your appKey
    },
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "文档",
        "icon": "reco-message",
        "items": [
          {
            "text": "前端知识点总结",
            "link": "/docs/theme-reco/"
          }
        ]
      },
      {
        "text": "链接",
        "icon": "reco-message",
        "items": [
          {
            "text": "Gitee",
            "link": "https://gitee.com/kasnars",
            "icon": "reco-mayun"
          },
          {
            "text": "稀土掘金",
            "link": "https://juejin.cn/user/2287450072292567",
            "icon": "reco-juejin"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "js",
        "ts",
        "vue",
        "react"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 4,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "kasnars",
    "authorAvatar": "/avatar.png",
    "record": "xxxx",
    "startYear": "2021"
  },
  "markdown": {
    "lineNumbers": true
  }
}