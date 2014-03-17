(function () {
    MyApp.images = function (params) {
        var procedure = params.id;

        return {
            photos: MyApp.db.getProcedureById(procedure).photos,
            addImage: function (selectedImageIndex, clickEvent) {
                MyApp.db.addImageToFavorites(clickEvent.model);
                $(clickEvent.element).hide();
            }
        };
    };
})();