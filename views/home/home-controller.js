//$(function () {
    MyApp.home = function (params) {
        alert('loading home controller...');

        var viewModel = {

            navigateToProcedure: function (itemClicked) {
                MyApp.app.navigate('procedure/' + itemClicked.itemData.id);
            },

            onGroupItemClicked: function (evt) {
                $('#home-nav-list').find('.dx-list-item').hide();

                var group = $(evt.element);
                group.parents('.dx-list-group').children('.dx-list-item').show();
            },

            viewShown: function (args) {
                // This shouldn't be necessary, but I think something
                // crazy is going on. Removing this will cause the library 
                // list to act wonky
                if (args.viewInfo.viewName === 'home') {
                    $('#home-nav-list').find('.dx-list-item').hide();
                }
            }
        };

        alert('home controller loaded');

        return viewModel;
    };
//});