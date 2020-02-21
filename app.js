/**
 * @file app.js
 * @author swan
 */

/* globals swan */

import agl from 'angelia-swan';
agl.init();
App({
    onLaunch(options) {
        // do something when launch
        // 引导添加，参见文档： http://smartprogram.baidu.com/docs/design/component/guide_add/
        if (swan.canIUse('showFavoriteGuide')) {
            swan.showFavoriteGuide({
                type: 'bar',
                content: '一键关注小程序',
                success(res) {
                    console.log('关注成功：', res);
                },
                fail(err) {
                    console.log('关注失败：', err);
                }
            });
        }
    },
    onShow(evt) {
        // do something when show
        swan.showToast({
            title: `bdvid: ${(evt.query.bdVid || '').slice(0, 8)}`
        });
    },
    onHide() {
        // do something when hide
    }
});
