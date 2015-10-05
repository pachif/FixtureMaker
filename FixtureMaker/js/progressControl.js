//<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>

function showProgress(message, executeAction) {
    if (!$.isFunction(executeAction)) {
        executeAction = $.noop;
    }

    if (!message || message.lenght == 0) {
        message = "Processing ..."
    }
    var progressHtml = "<div id=\"progressControl\" class=\"progress-overlay valign-wrapper grey lighten-2\"><div class=\"valign\">    <div class=\"preloader-wrapper big active center-align\">        <div class=\"spinner-layer spinner-blue\"><div class=\"circle-clipper left\">    <div class=\"circle\"></div></div><div class=\"gap-patch\">    <div class=\"circle\"></div></div><div class=\"circle-clipper right\">    <div class=\"circle\"></div></div>        </div><div class=\"spinner-layer spinner-red\"><div class=\"circle-clipper left\">    <div class=\"circle\"></div></div><div class=\"gap-patch\">    <div class=\"circle\"></div></div><div class=\"circle-clipper right\">    <div class=\"circle\"></div></div>        </div><div class=\"spinner-layer spinner-yellow\"><div class=\"circle-clipper left\">    <div class=\"circle\"></div></div><div class=\"gap-patch\">    <div class=\"circle\"></div></div><div class=\"circle-clipper right\">    <div class=\"circle\"></div></div>        </div><div class=\"spinner-layer spinner-green\"><div class=\"circle-clipper left\">    <div class=\"circle\"></div></div><div class=\"gap-patch\">    <div class=\"circle\"></div></div><div class=\"circle-clipper right\">    <div class=\"circle\"></div></div></div></div>  <p id=\"progressText\" style=\"padding-left:-50%;font-style:italic\" class=\"condensed light \">" + message + "</p>   </div>  </div>";
    jQuery("body").prepend(progressHtml)

    // finally do the call
    executeAction();
}

function removeProgress() {
    var el = $('#progressControl');
    el.remove();
}

function SetProgressMessage(message) {
    var el = $('#progressText');
    el.html(message);
}