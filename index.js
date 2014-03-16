"use strict";

window.MyApp = window.MyApp || {};

$(function() {
    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    // DevExpress.devices.current({ platform: "generic" });

    document.addEventListener("deviceready", function() { navigator.splashscreen.hide(); });

    MyApp.app = new DevExpress.framework.html.HtmlApplication({
        namespace: MyApp,
        navigationType: MyApp.config.navigationType
    });

    MyApp.app.router.register(":view", { view: "home" });
    MyApp.app.navigate();
});

//Globalize.culture(navigator.language || navigator.browserLanguage);
//Globalize.culture("fr");