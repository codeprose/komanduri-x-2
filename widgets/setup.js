//$(function () {
//    $('link[rel="cp-template"]').each(function (i, link) {
//        var templateUri = $(link).attr('href');
//        var templatePath = templateUri.split('/');
//        var templateName = templatePath[templatePath.length - 1].split('.')[0];

//        $.ajax({
//            "url": templateUri,
//            "async": false,
//            "dataType": "html",
//            "type": "GET",
//            "timeout": this.timeout,
//            "success": function (templateHtml) { 
//                var templateScript = $('<script type="text/html" id="' + templateName + '-template' + '"></script>').append(templateHtml);
//                $('body').append(templateScript);            
//            },
//            "error": function(exception) {
//                if (this.useDefaultErrorTemplate)
//                    templateHtml = this.defaultErrorTemplateHtml.replace('{STATUSCODE}', exception.status);
//            }.bind(this)
//        });
//    });
//});

(function ($) {
    window.codeprose = $.extend(true, window.codeprose, {
        widget: function (widgetName) {
            return {
                init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
                    // This will be called when the binding is first applied to an element
                    // Set up any initial state, event handlers, etc. here

                    try {
                        var widgetBindings = allBindings()[widgetName];
                        var bindableTemplate = $('<div />', { "data-bind": "template: { name: '" + widgetName + "-template', data: " + JSON.stringify(widgetBindings) + " }" });
                        $(element).html(bindableTemplate);
                    } catch(e) {
                        var error = new Error('Widget binding exception.');
                        error.OriginalException = e;
                        console.log(error);
                    }
                },
                update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
                    // This will be called once when the binding is first applied to an element,
                    // and again whenever the associated observable changes value.
                    // Update the DOM element based on the supplied values here.
                }
            };
        }
    });

    $(function () {
        $('link[rel="cp-template"]').each(function (i, link) {
            var templateUri = $(link).attr('href');
            var templatePath = templateUri.split('/');
            var templateName = templatePath[templatePath.length - 1].split('.')[0];

            ko.bindingHandlers[templateName] = codeprose.widget(templateName);

////            $.ajax({
////                "url": templateUri,
////                "async": false,
////                "dataType": "html",
////                "type": "GET",
////                "timeout": this.timeout,
////                "success": function (templateHtml) {
////                    var templateScript = $('<script type="text/html" id="' + templateName + '-template' + '"></script>').append(templateHtml);
////                    $('body').append(templateScript);
////                },
////                "error": function (exception) {
////                    if (this.useDefaultErrorTemplate)
////                        templateHtml = this.defaultErrorTemplateHtml.replace('{STATUSCODE}', exception.status);
////                } .bind(this)
////            });
        });
    });
})(jQuery);