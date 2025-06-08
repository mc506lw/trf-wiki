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
                { text: '常见问题', link: '/guide/faq/' },
                {
                    text: '加入服务器',
                    collapsed: true,
                    items: [
                        { text: '请选择你的加入方式', link: '/guide/join/' },
                        { text: 'JAVA玩家加入', link: '/guide/join/java' },
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
                { text: '点歌', link: '/guide/gameplay/music' },
                { text: '图片', link: '/guide/gameplay/image' },
                { text: '枪械', collapsed: true, items: [{ text: '枪械介绍', link: '/guide/gameplay/weapon/weapons' }, { text: '伤害基准', link: '/guide/gameplay/weapon/norm'}] },
                { text: '称号系统', link: '/guide/gameplay/title' },
            ]
        },
        {
            text: '其他',
            collapsed: false,
            items: [
                { text: '小游戏服', link: '/guide/other/mgame' },
                { text: 'QQ交流群', link: '/guide/other/qq' },
                {
                    text: '更新日志',
                    collapsed: true,
                    items: [
                        { text: '更新历史', link: '/guide/updates/' },
                        { text: '未来计划', link: '/guide/other/scheme' }
                    ]
                },
                { text: '管理团队', link: '/guide/other/admin' },
                { text: '用户协议及隐私政策', link: '/guide/other/terms' }
            ]
        }
    ]
}