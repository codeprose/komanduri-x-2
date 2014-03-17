(function () {
    MyApp.videos = function (params) {
        var procedure = params.id;

        return {
            videos: MyApp.db.getProcedureById(procedure).videos,
            addImage: function (selectedImageIndex, clickEvent) {
                MyApp.db.addVideoToFavorites(clickEvent.model);
                $(clickEvent.element).hide();
            }            
        };
    };
})();