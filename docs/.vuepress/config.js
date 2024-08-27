module.exports = {
    markdown: {
        lineNumbers: true
    },
    locales: {
        '/': {
            lang: 'zh-CN',
            title: '洛曦霜的笔记',
            description: '洛曦霜的笔记小站<科技/数码/社媒/哲学>'
        },
        '/en/': {
            lang: 'en-US',
            title: 'Luo\'s Note',
            description: 'A note site of LuoXishuang. Tech/Digi/SocialMedia/Philosophy'
        }
    },
    themeConfig: {
        locales: {
            '/': {
                selectText: '语言',
                label: '🇨🇳',
                nav: [
                    { text: '主页', link: '/' }
                ]
            },
            '/en/': {
                selectText: 'Languages',
                label: '🇺🇸',
                nav: [
                    { text: 'Homepage', link: '/en/' }
                ]
            }
        }
    }
}