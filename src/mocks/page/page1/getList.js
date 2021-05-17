module.exports = {
    statusCode: 200,
    body: {
        code: 0,
        msg: '操作成功',
        data: {
            total: 1510, // 总数
            totalLeft: 112, // 余额总数
            totalConsumption: 13453, // 消费总数
            records: [
                {
                    id: 0,
                    time: 1546358400,
                    name: '企点',
                    num: +1230,
                    remark: '配额过期'
                },
                {
                    id: 1,
                    time: 1546358400,
                    name: '陈小柯',
                    num: -456,
                    remark: '2018双十一赠送'
                },
                {
                    id: 2,
                    time: 1546358400,
                    name: '企点',
                    num: -890,
                    remark: '预热'
                }
            ]
        }
    }
};
