;
(function () {
    var bannerHeight = $(".navbar .container").height() - 10
    window.activeArray = []
    var vm = avalon.define({
        $id: "nav",
        aname: "",
        bname: "",
        aclick: function (href, sub, name) {
            avalon.vmodels.tutorial.currentName = name
        },
        bclick: function (e, href) {
            e.preventDefault()
            var d = document.getElementById(href)
            if(d){
                var top = avalon(d).offset().top - 50
                $('html,body').animate({
                    scrollTop: Math.max(0, top)
                }, 500)
            }
        },
        array: [
            {
                href: "tutorial/home",
                name: "介绍",
                anchors: [
                    {
                        href: "home-download",
                        name: "下载"
                    },
                    {
                        href: "home-cdn",
                        name: "CDN"
                    },
                    {
                        href: "home-10",
                        name: "10秒看懂avalon"
                    },
                    {
                        href: "home-origin",
                        name: "avalon的起源"
                    }

                ]
            },

            {
                href: "tutorial/concepts",
                name: "核心概念",
                sub: [
                    {
                        href: "tutorial/concepts/vmodel",
                        name: "视图模型"
                    },
                    {
                        href: "tutorial/concepts/$model",
                        name: "数据模型"
                    },
                    {
                        href: "tutorial/concepts/observable",
                        name: "监控属性"
                    },
                    {
                        href: "tutorial/concepts/collection",
                        name: "监控数组"
                    },
                    {
                        href: "tutorial/concepts/computed",
                        name: "计算属性"
                    },
                    {
                        href: "tutorial/concepts/$watch",
                        name: "$watch方法"
                    },
                    {
                        href: "tutorial/concepts/$unwatch",
                        name: "$unwatch方法"
                    },
                    {
                        href: "tutorial/concepts/unobservable",
                        name: "非监控属性"
                    }
                ]
            },
            {
                href: "tutorial/directives",
                name: "指令",
                sub: [
                    {
                        href: "tutorial/directives/attr",
                        name: "ms-attr"
                    },
                    {
                        href: "tutorial/directives/class",
                        name: "ms-active"
                    },
                    {
                        href: "tutorial/directives/controller",
                        name: "ms-controller"
                    },
                    {
                        href: "tutorial/directives/class",
                        name: "ms-class"
                    },
                    {
                        href: "tutorial/directives/css",
                        name: "ms-css"
                    },
                    {
                        href: "tutorial/directives/data",
                        name: "ms-data"
                    },
                    {
                        href: "tutorial/directives/duplex",
                        name: "ms-duplex"
                    },
                    {
                        href: "tutorial/directives/repeat",
                        name: "ms-each"
                    },
                    {
                        href: "tutorial/directives/effect",
                        name: "ms-effect"
                    },
                    {
                        href: "tutorial/directives/text",
                        name: "ms-html"
                    },
                    {
                        href: "tutorial/directives/class",
                        name: "ms-hover"
                    },
                    {
                        href: "tutorial/directives/if",
                        name: "ms-if"
                    },
                    {
                        href: "tutorial/directives/controller",
                        name: "ms-important"
                    },
                    {
                        href: "tutorial/directives/include",
                        name: "ms-include"
                    },
                    {
                        href: "tutorial/directives/on",
                        name: "ms-on"
                    },
                    {
                        href: "tutorial/directives/repeat",
                        name: "ms-repeat"
                    },
                    {
                        href: "tutorial/directives/controller",
                        name: "ms-skip"
                    },
                    {
                        href: "tutorial/directives/text",
                        name: "ms-text"
                    },
                    {
                        href: "tutorial/directives/visible",
                        name: "ms-visible"
                    },
                    {
                        href: "tutorial/directives/repeat",
                        name: "ms-with"
                    },
                    {
                        href: "tutorial/directives/widget",
                        name: "ms-widget"
                    },
                     {
                        href: "tutorial/directives/custom",
                        name: "自定义标签"
                    },
                     {
                        href: "tutorial/directives/i20n",
                        name: "国际化"
                    }
                ]
            },
            {
                href: "tutorial/filters",
                name: "过滤器",
                anchors: [
                    {
                        href: "camelize",
                        name: "camelize"
                    },
                    {
                        href: "currency",
                        name: "currency"
                    },
                    {
                        href: "date",
                        name: "date"
                    },
                    {
                        href: "escape",
                        name: "escape"
                    },
                    {
                        href: "html",
                        name: "html"
                    },
                    {
                        href: "lowercase",
                        name: "lowercase"
                    },
                    {
                        href: "number",
                        name: "number"
                    },
                    {
                        href: "sanitize",
                        name: "sanitize"
                    },
                    {
                        href: "truncate",
                        name: "truncate"
                    },
                    {
                        href: "uppercase",
                        name: "uppercase"
                    }
                ]
            },
            {
                href: "tutorial/interceptors",
                name: "拦截器",
                anchors: [
                    {
                        href: "ms-duplex-string",
                        name: "ms-duplex-string"
                    },
                    {
                        href: "ms-duplex-checked",
                        name: "ms-duplex-checked"
                    },
                    {
                        href: "ms-duplex-boolean",
                        name: "ms-duplex-boolean"
                    },
                    {
                        href: "ms-duplex-number",
                        name: "ms-duplex-number"
                    }
                ]
            },
            {
                href: "tutorial/component",
                name: "组件",
                anchors: [
                    {
                        href: "callbacks",
                        name: "所有回调的执行顺序"
                    },
                    {
                        href: "config",
                        name: "组件的配置"
                    },
                    {
                        href: "slot",
                        name: "插入点的使用"
                    },
                    {
                        href: "getvm",
                        name: "获取组件VM"
                    },
                    {
                        href: "construct",
                        name: "组件的构建全过程"
                    },
                    {
                        href: "ie68",
                        name: "IE6-8的特殊处理"
                    },
                    {
                        href: "tag",
                        name: "自定义标签"
                    }
                ]
            },
            {
                href: "tutorial/callbacks",
                name: "回调"
            },
            {
                href: "tutorial/configuration",
                name: "配置"
            },
            {
                href: "tutorial/engineering",
                name: "工程化",
                sub:[
                  {
                      href: "tutorial/engineering/jquery",
                      name: "与jquery混用"
                  },
                  {
                      href: "tutorial/engineering/weixin",
                      name: "在微信中使用"
                  },
                   {
                      href: "tutorial/engineering/mobile",
                      name: "在移动端使用"
                  },
                  {
                      href: "tutorial/engineering/loader",
                      name: "与requirejs混用"
                  },
                   {
                      href: "tutorial/engineering/webpack",
                      name: "使用webpack打包"
                  },
                   {
                      href: "tutorial/engineering/project",
                      name: "webpack+avalon"
                  },
                   {
                      href: "tutorial/engineering/fis",
                      name: "fis3+avalon"
                  },
                    {
                      href: "tutorial/engineering/seo",
                      name: "SEO"
                  }
                ]
            }
        ]

    })

    // avalon.scan(0, vm)
    $(".navbar-nav a").click(function (e) {
        var hash = this.getAttribute("href", 2)
        if (hash.indexOf("/") > 0) {
            vm.aname = hash.replace(/^#/, "")
        }
    })
    var bname = ""
    var now = new Date - 0

    $(window).scroll(function () {
        var then = new Date
        if (then - now > 30) {
            now = then
            var height = $(window).scrollTop()
            var name = ""
            window.activeArray.forEach(function (el) {
                if (el.top + bannerHeight < height) {
                    name = el.id
                }
            })

            if (name != bname && name) {
                bname = vm.bname = name
            }
        }

    })


})();
