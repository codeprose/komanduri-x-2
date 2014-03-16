(function () {
    MyApp.images = function (params) {
        var procedure = params.id;

        return {
            photos: MyApp.db.getProcedureById(procedure).photos
        };
    };
})();