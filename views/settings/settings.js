$(function () {
    console.log('library view model initiating');
    MyApp.settings = function (params) {
        var device = DevExpress.devices.current();

        var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        console.log('device-width: ' + width);

        return {
            deviceWidth: width,
            deviceType: device.deviceType,
            platform: device.platform
        };
    };
});