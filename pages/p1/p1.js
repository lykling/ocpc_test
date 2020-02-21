import agl from 'angelia-swan';
Page({
    data: {

    },
    onLoad: function () {
        // 监听页面加载的生命周期函数
    },
    onReady: function() {
        // 监听页面初次渲染完成的生命周期函数
    },
    onShow: function() {
        // 监听页面显示的生命周期函数
    },
    onHide: function() {
        // 监听页面隐藏的生命周期函数
    },
    onUnload: function() {
        // 监听页面卸载的生命周期函数
    },
    onPullDownRefresh: function() {
        // 监听用户下拉动作
    },
    onReachBottom: function() {
        // 页面上拉触底事件的处理函数
    },
    onShareAppMessage: function () {
        // 用户点击右上角转发
    },
    formSubmit: function (e) {
        console.log(`submitting form: ${JSON.stringify(e.detail.value, null, 4)}`);
        const cvtype = Number(e.detail.value.cvtype);
        if (!isNaN(cvtype) && cvtype > 0) {
            swan.request({
                url: 'https://fclog.baidu.com/log/test',
                method: 'POST',
                data: '{"actid": "xxx", "item": "candies", "amount": 20}',
                header: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                success: res => {
                    // 在请求成功的回调方法里回传转化数据
                    agl.log({
                        convertType: cvtype
                    });
                    swan.showToast({
                        title: `转化成功: ${cvtype}`
                    })
                },
                fail: err => {
                    swan.showToast({
                        title: `服务异常:${err}`
                    });
                }
            });
        }
        else {
            swan.showToast({
                title: '无效的转化类型'
            });
        }
    },
    formReset: function () {
        console.log('reset form');
    }
});
