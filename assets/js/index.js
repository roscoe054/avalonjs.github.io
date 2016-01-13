'use strict'

// avalon.config({
//     debug: false
// })

require(["mmRouter/mmState"], function () {
    var logos = [{
        src: "qunar.jpg",
        link: "http://www.qunar.com/"
    }, {
        src: "wuxian.baidu.jpg",
        link: "http://wuxian.baidu.com/"
    }, {
        src: "market.baidu.jpg",
        link: "javascript:void 0"
    }, {
        src: "baidutuiguang.jpeg",
        link: "http://tuiguang.baidu.com"
    }, {
        src: "bianfeng.png",
        link: "http://www.bianfeng.com/"
    }, {
        src: "ccssoft.jpg",
        link: "http://www.ccssoft.com.cn/"
    }, {
        src: "maimaiys.png",
        link: "http://www.maimaiys.com/"
    }, {
        src: "quanshi_logo.jpg",
        link: "http://www.quanshi.com/"
    }, {
        src: "ronglian.png",
        link: "http://www.ronglian.com/"
    }, {
        src: "sdl_logo.png",
        link: "http://www.cloudary.com.cn/"
    }, {
        src: "sohulogo.png",
        link: "http://www.sohu.com/"
    }, {
        src: "ustack.png",
        link: "http://www.ustack.com/"
    }, {
        src: "wiz.jpg",
        link: "https://note.wiz.cn/"
    }, {
        src: "wps.jpg",
        link: "https://vip.wps.cn/"
    }, {
        src: "xiaojukeji.png",
        link: "http://www.xiaojukeji.com/website/index.html"
    }, {
        src: "isoftstone.png",
        link: "http://www.isoftstone.com/cn/industries/insurance.aspx?id=insurance"
    }, {
        src: "cevlink.png",
        link: "http://www.cevlink.com/"
    }, {
        src: "xiezhe.png",
        link: "http://xizhe.it"
    }, {
        src: "chinaedu.jpg",
        link: "http://www.chinaedu.net/"
    }, {
        src: "itangyuan.png",
        link: "http://itangyuan.com"
    }, {
        src: "syntop_logo.png",
        link: "http://www.syntop.com"
    }, {
        src: "angelcrunch.png",
        link: "http://angelcrunch.com/"
    }, {
        src: "newwwedu.png",
        link: "http://www.newwwedu.com/"
    }, {
        src: "vcb.jpg",
        link: "http://crmdemo.vcb.cn/loginview.aspx?ReturnUrl=/default.aspx"
    }, {
        src: "niaobushi.png",
        link: "http://www.niaobushi360.com/"
    }, {
        src: "mokylin.png",
        link: "http://www.mokylin.com/"
    }, {
        src: "aiispo.jpg",
        link: "http://aiispo.cn/"
    }, {
        src: "wohuizhong.png",
        link: "http://www.wohuizhong.com/"
    }, {
        src: "kagou.png",
        link: "http://www.cargopm.com/dzg-system-front/#!/home"
    }, {
        src: "easyzhx.png",
        link: "http://www.easyzhx.com/"
    }, {
        src: "aoyou.jpg",
        title: "中青旅遨游网",
        link: "http://www.aoyou.com/"
    }];

    avalon.define({
        $id: "container"
    })

    avalon.define({
        $id: "home",
        logos: logos
    })

    avalon.state("index", {
        url: "/",
        views: {
            "": {
                templateUrl: "home.html",
                controller: "home"
            }
        },
        onEnter: function () {}
    })

    avalon.state.config({
        onLoad: function(){

        }
    })

    avalon.history.start({
        basepath: "/"
    })

    avalon.scan();
})
