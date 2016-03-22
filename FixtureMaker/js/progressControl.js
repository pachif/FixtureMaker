/*!
 * StrapComplete v1.0.0 (http://www.southoughs.com)
 * Copyright 2013-2016 Southoughts.
 * Licensed under the MIT license
 */

//<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
//<script   src="https://code.jquery.com/ui/1.11.3/jquery-ui.min.js"></script>

(function ($) {
    $.widget('fmn.progressControl', {
        options: {
            message: 'Processing...',
            executeAction: $.noop
        },
        _create: function () {

        },
        showControl: function () {
            var progressHtml = "<div class=\"progress-overlay valign-wrapper grey lighten-2\"><div class=\"valign\">    <div class=\"preloader-wrapper big active center-align\">        <div class=\"spinner-layer spinner-blue\"><div class=\"circle-clipper left\">    <div class=\"circle\"></div></div><div class=\"gap-patch\">    <div class=\"circle\"></div></div><div class=\"circle-clipper right\">    <div class=\"circle\"></div></div>        </div><div class=\"spinner-layer spinner-red\"><div class=\"circle-clipper left\">    <div class=\"circle\"></div></div><div class=\"gap-patch\">    <div class=\"circle\"></div></div><div class=\"circle-clipper right\">    <div class=\"circle\"></div></div>        </div><div class=\"spinner-layer spinner-yellow\"><div class=\"circle-clipper left\">    <div class=\"circle\"></div></div><div class=\"gap-patch\">    <div class=\"circle\"></div></div><div class=\"circle-clipper right\">    <div class=\"circle\"></div></div>        </div><div class=\"spinner-layer spinner-green\"><div class=\"circle-clipper left\">    <div class=\"circle\"></div></div><div class=\"gap-patch\">    <div class=\"circle\"></div></div><div class=\"circle-clipper right\">    <div class=\"circle\"></div></div></div></div>  <p id=\"progressText\" style=\"padding-left:-50%;font-style:italic\" class=\"condensed light \">" + this.options.message + "</p>   </div>  </div>";
            this.element.prepend(progressHtml)

            // finally do the call
            this.options.executeAction();
        },

        setMessage: function (message) {
            var el = $('#progressText');
            el.html(message);
        },

        hideControl: function () {
            this.element.children().remove();
        }
    });
})(jQuery);