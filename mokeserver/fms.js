var fms = require('fms')
var is_auth = false
fms.run({
    port: 9001,

})
fms.ajax(
    {
        title: '用户登录',
        type: 'post',
        url: '/login/',
        request: {
            user: 'chenjsh',
            password: '1234',
            verifycode: '2xs2',
            _verifycode: '验证码'
        },
        res: {
            ok: {
                status: 200,
                msg: '登录成功'
            },
            err: {
                status: 400,
                msg: '登录失败'
            },

        }
    }
)
fms.ajax(
    {
        url: '/test/',
        type: 'get',
        res: {
            ok: {
                status: 200,
                msg: '请求成功'
            },
            err: {
                status: 401,
                msg: '请求失败'
            },
        }
    }
)

fms.ajax(
    {
        url: '/articles/lastarticles/',
        type: 'get',
        dataType: 'json',
        res: {
            ok: {
                status: 200,
                msg: '请求成功',
                data: {
                    last_articles: [
                        {
                            id: 1,
                            title: '今年最火的动漫',
                            name: '在下版本，有何贵干',
                            img: 'http://i0.hdslb.com/bfs/archive/c1a3366a52995125fc4102e2e950a44b52494779.jpg',
                            content: '非常搞笑的动漫',
                            type: ['搞笑', '校园', '感动'],
                            actors: ['版本'],
                            director: '导演',
                            company: '中北明',
                            evaluate: 99,
                        },
                        {
                            id: 2,
                            title: '今年期待的动漫',
                            name: '半田君的日常生活',
                            img: 'http://rs.bukade.com/upfiles/2016/06/081648339.jpg',
                            content: '主人公有毒',
                            type: ['热血', '校园', '脑残'],
                            actors: ['半田君'],
                            director: '王金',
                            company: '斐波那契',
                            evaluate: 90,
                        },
                        {
                            id: 3,
                            title: '今年最火的动漫',
                            name: '在下版本，有何贵干',
                            img: 'http://i0.hdslb.com/bfs/archive/c1a3366a52995125fc4102e2e950a44b52494779.jpg',
                            content: '非常搞笑的动漫',
                            type: ['搞笑', '校园', '感动'],
                            actors: ['版本'],
                            director: '导演',
                            company: '中北明',
                            evaluate: 99,
                        },
                        {
                            id: 4,
                            title: '今年期待的动漫',
                            name: '半田君的日常生活',
                            img: 'http://rs.bukade.com/upfiles/2016/06/081648339.jpg',
                            content: '主人公有毒',
                            type: ['热血', '校园', '脑残'],
                            actors: ['半田君'],
                            director: '王金',
                            company: '斐波那契',
                            evaluate: 90,
                        },
                        {
                            id: 5,
                            title: '今年最火的动漫',
                            name: '在下版本，有何贵干',
                            img: 'http://i0.hdslb.com/bfs/archive/c1a3366a52995125fc4102e2e950a44b52494779.jpg',
                            content: '非常搞笑的动漫',
                            type: ['搞笑', '校园', '感动'],
                            actors: ['版本'],
                            director: '导演',
                            company: '中北明',
                            evaluate: 99,
                        },
                        {
                            id: 6,
                            title: '今年期待的动漫',
                            name: '半田君的日常生活',
                            img: 'http://rs.bukade.com/upfiles/2016/06/081648339.jpg',
                            content: '主人公有毒',
                            type: ['热血', '校园', '脑残'],
                            actors: ['半田君'],
                            director: '王金',
                            company: '斐波那契',
                            evaluate: 90,
                        },
                        {
                            id: 7,
                            title: '今年最火的动漫',
                            name: '在下版本，有何贵干',
                            img: 'http://i0.hdslb.com/bfs/archive/c1a3366a52995125fc4102e2e950a44b52494779.jpg',
                            content: '非常搞笑的动漫',
                            type: ['搞笑', '校园', '感动'],
                            actors: ['版本'],
                            director: '导演',
                            company: '中北明',
                            evaluate: 99,
                        },
                        {
                            id: 8,
                            title: '今年期待的动漫',
                            name: '半田君的日常生活',
                            img: 'http://rs.bukade.com/upfiles/2016/06/081648339.jpg',
                            content: '主人公有毒',
                            type: ['热血', '校园', '脑残'],
                            actors: ['半田君'],
                            director: '王金',
                            company: '斐波那契',
                            evaluate: 90,
                        }
                    ],
                }
            },
            err: {
                status: 401,
                msg: '作品数据请求失败'
            }
        }
})

fms.ajax({
    url: '/articles/articletypes/',
    type: 'get',
    dataType: 'json',
    res: {
        ok: {
            status: 200,
            msg: '请求成功',
            data: {
                article_types: [
                    {
                        id: 1,
                        first_type: '动漫',
                        sec_type: '校园'
                    },{
                        id: 2,
                        first_type: '动漫',
                        sec_type: '搞笑'
                    },{
                        id: 3,
                        first_type: '动漫',
                        sec_type: '感动'
                    },{
                        id: 4,
                        first_type: '动漫',
                        sec_type: '脑残'
                    },{
                        id: 5,
                        first_type: '电影',
                        sec_type: '热血'
                    },{
                        id: 6,
                        first_type: '电影',
                        sec_type: '经典'
                    },{
                        id: 7,
                        first_type: '电影',
                        sec_type: '好莱坞'
                    },{
                        id: 8,
                        first_type: '电影',
                        sec_type: '国外'
                    },{
                        id: 9,
                        first_type: '电影',
                        sec_type: '日韩'
                    }
                ]
            }
        },
        err: {
            status: 401,
            msg: '作品类型请求失败'
        }
    }
})