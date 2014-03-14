﻿window.logMessages = [];
var MyApp = window.MyApp = {};

$(document).on('deviceready', function () {
    try {
        console.log('Device is ready. Setting up Komanduri navigation.');

        MyApp.app = new DevExpress.framework.html.HtmlApplication({
            namespace: MyApp,
            navigationType: "navbar",
            navigation: [
                    {
                        title: "Home",
                        action: "#home",
                        icon: "home"
                    },
                    {
                        title: "My Library",
                        action: "#library",
                        icon: "favorites"
                    },
                    {
                        title: "Settings",
                        action: "#settings",
                        icon: "info"
                    }
                ]
        });

        console.log('Registering routes.');
        
        MyApp.app.router.register(":view", { view: "home" });
        MyApp.app.router.register(":view", { view: "library" });
        MyApp.app.router.register(":view", { view: "settings" });
        MyApp.app.router.register(":view/:id", { view: "procedure", id: null });
    } catch (e) {
        console.log(e);
        window.logMessages.push(e);
    }
});

//$(function () {



//});
