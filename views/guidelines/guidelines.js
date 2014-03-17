(function () {
    MyApp.guidelines = function (params) {
        var procedure = params.id;

        return {
            guidelines: MyApp.db.getProcedureById(procedure).guidelines
        };
    };
})();