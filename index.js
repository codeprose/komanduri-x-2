"use strict";

$(function () {
    FastClick.attach(document.body);
});

window.MyApp = window.MyApp || {};

$(function () {
    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    // DevExpress.devices.current({ platform: "generic" });

    document.addEventListener("deviceready", function () { navigator.splashscreen.hide(); });

    MyApp.app = new DevExpress.framework.html.HtmlApplication({
        namespace: MyApp,
        navigationType: MyApp.config.navigationType
    });

    MyApp.app.router.register(":view", { view: "cardshome" });
    MyApp.app.router.register(":view/:id", { view: "cardsimages", id: null });
    //    MyApp.app.router.register(":view", { view: "library" });
    //    MyApp.app.router.register(":view", { view: "settings" });
    //    MyApp.app.router.register(":view/:id", { view: "procedure", id: null });
    //    MyApp.app.router.register(":view/:id", { view: "images", id: null });
    MyApp.app.navigate();
});