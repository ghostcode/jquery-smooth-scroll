(function(document, $) {
    $.fn.smoothScroll = function(opts) {
        var defaults = {
                speed: 300,
                offset: 0,
                direction: 'v' // v: vertical h: horizontal
            },
            self = this,
            $body = $(document.body)

        opts = $.extend({}, defaults, opts)

        return self.find('a[href*="#"]').click(function(event) {
            var hash = this.hash,
                $hash = $(hash);

            event.preventDefault()

            $body.stop().animate({
                'scroll-top': $hash.offset().top - opts.offset
            }, opts.speed, function() {
                console.log('ok')
            })
        })
    }
}(document, jQuery))