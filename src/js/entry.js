require("./tools/jqUI.js");
require("./tools/jqFp.js");
require("../less/entry.less");
var Manage = require("./Container/PageComponent.js");

Manage
        .init()
            .addPage("pageOne")
                .addComponent({
                    type: "canvas",
                    name: "canvas",
                    // css: {
                    //     position: "absolute"
                    // }
                })
            .addPage("pageTwo")
                .addComponent({
                    type: "li",
                    width: 521,
                    height: 316,
                    css: {
                        backgroundImage: "url('./src/img/dialog.png')",
                        paddingTop: "20px",
                        position: "absolute",
                        top: 50,
                        left: -600,
                        opacity: 0  
                    },
                    name: "li",
                    liNumber: 6,
                    information: {
                        0: "出生日期： 1997.03.01",
                        1: "民族： 汉",
                        2: "性别： 男",
                        3: "地址： 广东省广州市白云区东平马市领",
                        4: "电话： 18846055230",
                        5: "邮箱： 1154611849@qq.com"
                    },
                    animateIn: {
                        left: "20px",
                        opacity: 1,
                    },
                    animateOut: {
                        left: "-600px",
                        opacity: 0,
                    }
                })
                .addComponent({
                    type: "li",
                    width: 521,
                    height: 316,
                    css: {
                        backgroundImage: "url('./src/img/dialog.png')",
                        paddingTop: "20px",
                        position: "absolute",
                        bottom: 100,
                        right: -600,
                        opacity: 0  
                    },
                    name: "li",
                    liNumber: 3,
                    information: {
                        0: "获得奖项：",
                        1: "         奖学金二等奖",
                        2: "         校足球联赛季军",
                    },
                    animateIn: {
                        right: "20px",
                        opacity: 1,
                    },
                    animateOut: {
                        right: "-600px",
                        opacity: 0,
                    },
                    delay: 500
                })     

                .addComponent({
                    height: 300,
                    width: 300,
                    center: true,
                    
                    css: {
                        borderRadius: "50%",
                        backgroundImage: "url('./src/img/1.jpg')",
                        backgroundSize: "100%",
                        opacity: 0,
                        top: -100
                    },
                    animateIn: {
                        opacity: 1,
                        top: 170
                    },
                    animateOut: {
                        opacity: 0,
                        top: -100
                    },
                    delay: 1000
                })
                .addComponent({
                    type: "light",
                    width: 300,
                    height: 50,
                    center: true,
                    css: {
                        background: "#222",
                        opacity: 0,
                        bottom: -100
                    },
                    animateIn: {
                        opacity: 1,
                        bottom: 200
                    },
                    animateOut: {
                        opacity: 0,
                        bottom: -100
                    },
                    delay: 1000
                })
            .addPage("pageThree")
                .addComponent({
                    type: "pie",
                    height: 200,
                    width: 200,
                    css: {
                        position: "absolute",
                        top: 250,
                        left: -200,
                        borderRadius: "50%",
                        opacity: 0
                    },
                    animateIn: {
                        opacity: 1,
                        left: 200
                    },
                    animateOut: {
                        opacity: 0,
                        left: -200
                    },
                    delay: 500,
                    roundColor: "red",
                    firstText: "html",
                    secondText: "掌握的不错"
                })
                .addComponent({
                    type: "pie",
                    height: 200,
                    width: 200,
                    css: {
                        position: "absolute",
                        top: 760,
                        left: 600,
                        borderRadius: "50%",
                        opacity: 0
                    },
                    animateIn: {
                        opacity: 1,
                        top: 250,
                    },
                    animateOut: {
                        opacity: 0,
                        top: 760
                    },
                    delay: 1000,
                    roundColor: "green",
                    firstText: "css",
                    secondText: "掌握的不错"
                })
                .addComponent({
                    type: "pie",
                    height: 200,
                    width: 200,
                    css: {
                        position: "absolute",
                        top: 250,
                        left: 1550,
                        borderRadius: "50%",
                        opacity: 0
                    },
                    animateIn: {
                        opacity: 1,
                        left: 1000,
                    },
                    animateOut: {
                        opacity: 0,
                        left: 1550
                    },
                    delay: 1500,
                    roundColor: "yellow",
                    firstText: "javaScript",
                    secondText: "掌握的不错"
                })                     
        .load();            

require("./ComponentCanvas/index.js");

