/*! Lazy Load XT v0.8.7 2013-12-26
 * http://ressio.github.io/lazy-load-xt
 * (C) 2013 RESS.io
 * Licensed under MIT */

(function ($) {
    var options = $.lazyLoadXT,
        widgetAttr = options.widgetAttr || 'data-lazy-widget',
        reComment = /<!--([\s\S]*)-->/;

    options.selector += ',[' + widgetAttr + ']';

    $(document).on('lazyshow', '[' + widgetAttr + ']', function () {
        var $this = $(this),
            id = $this.attr(widgetAttr),
            match;

        if (id) {
            $this = $('#' + id);
        }

        if ($this.length) {
            match = reComment.exec($this.html());
            if (match) {
                $this.replaceWith($.trim(match[1]));
            }
        }
    });

})(window.jQuery || window.Zepto);
