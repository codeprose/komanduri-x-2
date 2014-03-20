MyApp.cardswatchvideo = function (params) {
    var procedure = MyApp.db.getProcedureById(params.id);
    var index = params.index;

    return {
        video: procedure.videos[index]
    };
};