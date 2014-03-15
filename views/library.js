$(function () {
    console.log('library view model initiating');

    var library = {
        procedures: MyApp.db.ryansLibrary[0].items,
        photos: MyApp.db.ryansLibrary[1].items,
        videos: MyApp.db.ryansLibrary[2].items,
        guidelines: MyApp.db.ryansLibrary[3].items,
        links: MyApp.db.ryansLibrary[4].items
    };

    MyApp.library = function (params) {
        return {
            myLibrary: MyApp.db.library(),

            navigateToProcedure: function (itemClicked) {
                MyApp.app.navigate('procedure/' + itemClicked.itemData.id);
            },

            ryans: MyApp.db.ryansLibrary,

            library: library,

            listSource: [
                { key: 'My Procedures', items: [{ data: library.procedures, itemName: 'procedures' }] },
                { key: 'Photo Gallery', items: [{ data: library.photos, itemName: 'photos' }] },
                { key: 'Video Gallery', items: [{ data: library.videos, itemName: 'videos' }] },
                { key: 'Guidelines/Algorithm/PPT Gallery', items: [{ data: library.guidelines, itemName: 'guidelines' }] },
                { key: 'My Links', items: [{ data: library.links, itemName: 'links' }] }
            ]
        };
    };
});