var Rint = Rint || {};
Rint.ScrollAnimation = (function () {
    // private variable
    var array = [];

    // ScrollAnimation class
    function ScrollAnimation(options) {
        array.push(this);

        this.from = options.from || 0;
        this.to = options.to || 0;
        this.distance = this.to - this.from;
        this.onprogress = options.onprogress || function () { };
    }
    ScrollAnimation.prototype.setFrom = function (value) {
        this.from = value;
        this.distance = this.to - this.from;
        return this;
    };
    ScrollAnimation.prototype.setTo = function (value) {
        this.to = value;
        this.distance = this.to - this.from;
        return this;
    };
    ScrollAnimation.prototype.setOnProgressListener = function (callback) {
        this.onprogress = callback;
        return this;
    };

    // import method
    ScrollAnimation.import = function () { window.ScrollAnimation = ScrollAnimation; }
    ScrollAnimation.importTo = function (target) { target.ScrollAnimation = ScrollAnimation; };

    // static method
    ScrollAnimation.play = function (distancePerFrame) {
        var speed = distancePerFrame || 1;
        if (speed == 'slow') {
            speed = 1;
        } else if (speed == 'normal') {
            speed = 2;
        } else if (speed == 'fast') {
            speed = 3;
        }

        function animation() {
            window.scrollBy(0, speed);
            if ($(window).scrollTop() + $(window).height() < $(document).height()) {
                setTimeout(animation, 1000 / 60);
            }
        }
        setTimeout(animation, 1000 / 60);
    }

    // scroll event emitter
    function scrollEmitter(event) {
        var scrollTop = $(window).scrollTop();
        array.forEach(function (item) {
            if (scrollTop <= item.to) {
                var current = scrollTop - item.from;
                if (current >= 0) {
                    item.onprogress(current / item.distance);
                }
            }
        });
    }

    // Default target is Window
    $(window).on('scroll', scrollEmitter);

    // return ScrollAnimation class
    return ScrollAnimation;
})();