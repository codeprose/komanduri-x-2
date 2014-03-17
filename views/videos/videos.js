(function () {
    MyApp.videos = function (params) {
        var procedure = params.id;

        return {
            videos: MyApp.db.getProcedureById(procedure).videos
        };
    };
})();