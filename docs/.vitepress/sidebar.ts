// 侧边栏配置
export const sidebar = {
    // 指南部分
    '/guide/': [
        {
            text: '从这里开始',
            collapsed: false,
            items: [

                { text: '服务器介绍', link: '/guide/' },
                { text: '服务器规则', link: '/guide/rules' },
                { text: '常见问题', link: '/guide/faq' },
                {
                    text: '加入服务器',
                    collapsed: true,
                    items: [
                        { text: '正版JAVA玩家加入', link: '/guide/join/official' },
                        { text: '离线JAVA玩家加入', link: '/guide/join/offline' },
                        { text: '基岩版玩家加入', link: '/guide/join/bedrock' }
                    ]
                }
            ]
        },
        {
            text: '玩法攻略',
            collapsed: false,
            items: [
                { text: '命令大全', link: '/guide/gameplay/commands' },
                { text: '玩法1', link: '/guide/gameplay/1' },
                { text: '玩法2', link: '/guide/gameplay/2' }
            ]
        },
        {
            text: '其他',
            collapsed: false,
            items: [
                { text: 'QQ交流群', link: '/guide/other/qq' },
                {
                    text: '更新日志',
                    collapsed: true,
                    items: [
                        { text: '更新历史', link: '/guide/updates/' },
                        { text: '未来计划', link: '/guide/updates/roadmap' }
                    ]
                },
                { text: '管理团队', link: '/guide/other/admin' }
            ]
        }
    ]
}