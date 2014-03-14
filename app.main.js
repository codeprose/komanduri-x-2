"use strict";

var MyApp = window.MyApp || {};

$(function () {
    try {
        document.addEventListener("deviceready", function () { navigator.splashscreen.hide(); });

        MyApp.app = new DevExpress.framework.html.HtmlApplication({
            namespace: MyApp
            ,navigationType: "empty"
//            ,navigation: [
//                    {
//                        title: "Home",
//                        action: "#home",
//                        icon: "home"
//                    },
//                    {
//                        title: "My Library",
//                        action: "#library",
//                        icon: "favorites"
//                    },
//                    {
//                        title: "Settings",
//                        action: "#settings",
//                        icon: "info"
//                    }
//                ]
        });

        MyApp.app.router.register(":view", { view: "home" });
        MyApp.app.router.register(":view", { view: "library" });
        MyApp.app.router.register(":view", { view: "settings" });
        MyApp.app.router.register(":view/:id", { view: "procedure", id: null });

        MyApp.app.navigate();
        console.log('navigated');
        alert('navigated');
    } catch (e) {
        alert(e);
    }
});