MyApp.cardsimages = function (params) {
    var procedure = MyApp.db.getProcedureById(params.id);

    return {
        images: procedure.photos    
    };
};