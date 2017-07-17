(function(document, $) {
    $.fn.smoothScroll = function(opts) {
        var defaults = {
                speed: 300,
                offset: 0,
                direction: 'v' // v: vertical h: horizontal
            },
            self = this,
            $body = $(document.body),
            $targets = self.find('a[href*="#"]')

        opts = $.extend({}, defaults, opts)

        $(window).scroll(function() {
            let $top = $(window).scrollTop();

            if (self.flag) return

            self.flag = setTimeout(function() {
                $targets.each(function() {
                    let hash = this.hash,
                        $hash = $(this.hash)

                    if ($top >= $hash.scrollTop()) {
                        $targets.removeClass('xxx')
                        $(`a[href="${hash}"]`).addClass('xxx');
                        console.log(1111)
                        return false
                    }
                })
                self.flag = null
            }, 200)

        })

        return $targets.click(function(event) {
            let hash = this.hash,
                $hash = $(hash);

            event.preventDefault()

            $body.stop().animate({
                'scroll-top': $hash.offset().top - opts.offset
            }, opts.speed, function() {})
        })

    }
}(document, jQuery))