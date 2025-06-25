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
                },
                { text: '绑定账号', link: '/guide/bind/' }
            ]
        },
        {
            text: '玩法攻略',
            collapsed: false,
            items: [
                { text: '命令大全', link: '/guide/gameplay/commands' },
                { text: '点歌[MOD+]', link: '/guide/gameplay/music' },
                { text: '超大视距[MOD+]', link: '/guide/gameplay/dhs' },
                { text: '箱子商店', link: '/guide/gameplay/quickshop' },
                { text: '额外附魔', link: '/guide/gameplay/ecoenchants' },
                { text: '图片', link: '/guide/gameplay/image' },
                { text: '枪械', collapsed: true, items: [{ text: '枪械介绍', link: '/guide/gameplay/weapon/weapons' }, { text: '伤害基准', link: '/guide/gameplay/weapon/norm'}] },
                { text: '称号系统', link: '/guide/gameplay/title' },
                { text: '假人', link: '/guide/gameplay/fakeplayer' },
                { text: '路径点', link: '/guide/gameplay/waypoint' },
                { text: '垃圾桶', link: '/guide/gameplay/trashbin' },
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
                        { text: '未来计划', link: '/guide/updates/scheme' }
                    ]
                },
                { text: '管理团队', link: '/guide/other/admin' },
                { text: '用户协议及隐私政策', link: '/guide/other/terms' }
            ]
        },
        {
            text: '管理团队相关',
            collapsed: false,
            items: [
                {
                    text: '管理员守则 (部分)',
                    collapsed: true,
                    items: [
                        { text: '第一章 管理规则', link: '/guide/admin/rule' },
                        { text: '第三章 成员职责', link: '/guide/admin/duty' },
                        { text: '第六章 培训考核', link: '/guide/admin/training'}
                    ]
                },
                { text: '招聘信息', link: '/guide/admin/recruit' }
            ]
        }
    ]
}