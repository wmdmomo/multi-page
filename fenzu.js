url: '/ea/meta/event/group'
methods: get,
request: {
    searchWorld: '' // 搜索关键字
},
response: {
        code: 0,
        data: {
            reocrds: [ //拍平
                {
                    eventId: 17,
                    label: '\u5c0f\u7a0b\u5e8f\u542f\u52a8',
                    code: '$MPLaunch',
                    type: 0   // 0可编辑可删除 1只可编辑 2只可删除              
                },
                {
                    eventId: 18,
                    label: '\u5c0f\u7a0b\u5e8f\u542f\u52a8',
                    code: '$MPLaunch',
                    type: 0                 
                }
            ]
        },
        msg: ""
}