MyApp.cardsvideos = function (params) {
    var procedure = MyApp.db.getProcedureById(params.id);

    return {
        videos: procedure.videos,
        id: procedure.id
    };
};