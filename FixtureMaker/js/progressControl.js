function showProgress(message, processEndedCallback, action) {
    if (!$.isFunction(processEndedCallback)) {
        processEndedCallback = $.noop;
    }

    if (!message || message.lenght == 0) {
        message = "Processing ..."
    }
    var progressHtml = "<div id=\"progressControl\" class=\"progress-overlay valign-wrapper grey lighten-2\"><div class=\"valign\">    <div class=\"preloader-wrapper big active center-align\">        <div class=\"spinner-layer spinner-blue\"><div class=\"circle-clipper left\">    <div class=\"circle\"></div></div><div class=\"gap-patch\">    <div class=\"circle\"></div></div><div class=\"circle-clipper right\">    <div class=\"circle\"></div></div>        </div><div class=\"spinner-layer spinner-red\"><div class=\"circle-clipper left\">    <div class=\"circle\"></div></div><div class=\"gap-patch\">    <div class=\"circle\"></div></div><div class=\"circle-clipper right\">    <div class=\"circle\"></div></div>        </div><div class=\"spinner-layer spinner-yellow\"><div class=\"circle-clipper left\">    <div class=\"circle\"></div></div><div class=\"gap-patch\">    <div class=\"circle\"></div></div><div class=\"circle-clipper right\">    <div class=\"circle\"></div></div>        </div><div class=\"spinner-layer spinner-green\"><div class=\"circle-clipper left\">    <div class=\"circle\"></div></div><div class=\"gap-patch\">    <div class=\"circle\"></div></div><div class=\"circle-clipper right\">    <div class=\"circle\"></div></div>        </div>    </div>    </div> <p id=\"progressText\" style=\"font-style:italic\" class=\"condensed light center-align\">" + message + "</p> </div>";
    //var progressDiv = document.createElement("div");
    //progressDiv.innerHTML = progressHtml;
    

    //document.body.appendChild(progressDiv)
    
    jQuery("body").prepend(progressHtml)

    // finally do the call
    //processEndedCallback();
}

function SetProgressMessage(message) {
    var el = $('#progressText');
    el.value(message);
}