$(function() {
    $(document).on('click', '.cardmenu-indicator', function(clickEvent) {
        var menu = $(clickEvent.target).siblings('ul').first();

        if (menu.is(':visible')) {
            menu.hide();
        } else {
            menu.show();
        }
    });
});