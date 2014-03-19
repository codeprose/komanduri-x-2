(function ($) {
    window.codeprose = $.extend(true, window.codeprose, {
        widget: function (widgetName, widgetLocation) {

            return {
                init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                    // This will be called when the binding is first applied to an element
                    // Set up any initial state, event handlers, etc. here

                    try {
                        var widgetBindings = allBindings()[widgetName];
                        var bindableTemplate = $('<div />', { "data-bind": "template: { name: '" + widgetName + "', templateUrl: '" + widgetLocation + "', data: " + JSON.stringify(widgetBindings) + " }" });
                        $(element).html(bindableTemplate);
                    } catch (e) {
                        var error = new Error('Widget binding exception.');
                        error.OriginalException = e;
                        console.log(error);
                    }
                },
                update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                    // This will be called once when the binding is first applied to an element,
                    // and again whenever the associated observable changes value.
                    // Update the DOM element based on the supplied values here.
                }
            };
        }
    });

    $(document).ready(function () {
        $('link[rel="cp-template"]').each(function (i, link) {
            var templateUri = $(link).attr('href');
            var templatePath = templateUri.split('/');
            var templateLocation = templateUri.substring(0, templateUri.lastIndexOf('/'));
            var templateName = templatePath[templatePath.length - 1].split('.')[0];

            ko.bindingHandlers[templateName] = codeprose.widget(templateName, templateLocation);
        });
    });
})(jQuery);