ScrollAnimation = (function () {
    // Create Variables
    var scrolls = {};
    var interpolate = 0;

    // Connect Scroll Event
    window.addEventListener('scroll', function () {
        var scrollTop = ScrollAnimation.getScrollTop();

        for (var key in scrolls) {
            var item = scrolls[key];
            if (item.from_interpolate > scrollTop) {
                item.callback(0)
            } else if (scrollTop > item.to_interpolate) {
                item.callback(1)
            } else if (item.from_interpolate <= scrollTop && scrollTop <= item.to_interpolate) {
                var value = (scrollTop - item.from) / item.length;
                if (value < 0) { value = 0; }
                if (value > 1) { value = 1; }
                item.callback(value)
            }
        }
    });

    // Return Object
    return {
        create: function (name, from, to, callback) {
            scrolls[name] = {
                from: from,
                to: to,
                from_interpolate: from - interpolate,
                to_interpolate: to + interpolate,
                length: to - from,
                callback: callback
            };
        },
        remove: function (name) {
            delete scrolls[name];
        },
        play: function (from, to, interval, time) {
            var interval = interval || 1;
            var time = time || 1;

            var scroller = function () {
                var scrollTop = ScrollAnimation.getScrollTop();
                if (to > scrollTop) {
                    scrollBy(0, interval);
                    setTimeout(scroller, time)
                }
            };
            window.scrollTo(0, from);
            setTimeout(scroller, time);
        },
        getScrollTop: function () {
            return $(document).scrollTop();
        }
    }
})();
