$(function () {
    MyApp.procedure = function (params) {
        var procedure = MyApp.db.getProcedureById(params.id);

        return {
            procedureId: params.id,
            procedureName: procedure.text,
            addVideo: function (selectedVideoIndex) {
                var videoUrl = procedure.videos[selectedVideoIndex];
                MyApp.db.ryansLibrary[2].items.push(videoUrl);
            },
            addProcedure: function () {
                MyApp.db.ryansLibrary[0].items.push(procedure);
            },
            currentProcedure: procedure
        };
    };
});