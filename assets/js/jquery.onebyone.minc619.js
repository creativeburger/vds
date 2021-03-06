(function (c) {
    var a = ["rollIn", "fadeIn", "fadeInUp", "fadeInDown", "fadeInLeft", "fadeInRight", "fadeInRight", "bounceIn", "bounceInDown", "bounceInUp", "bounceInLeft", "bounceInRight", "rotateIn", "rotateInDownLeft", "rotateInDownRight", "rotateInUpLeft", "rotateInUpRight", "fadeInLeftBig", "fadeInRightBig", "fadeInUpBig", "fadeInDownBig", "flipInX", "flipInY", "lightSpeedIn"];
    var b = a.length;
    c.fn.oneByOne = function (h) {
        var E = {
            className: "oneByOne",
            sliderClassName: "oneByOne_item",
            pauseByHover: true,
            easeType: "fadeInLeft",
            height: 420,

            delay: 300,
            tolerance: 0.25,
            enableDrag: false,
            showArrow: true,
            showButton: true,
            slideShow: false,
            slideShowDelay: 5000,
            responsive: false,
            autoHideButton: true
        };
        if (h) {
            c.extend(E, h);
        }
        var q;
        var y;
        var H = -1;
        var D = E.width;
        var f = E.height;
        var p = D;
        var G = f;
        var t = 0;
        var m = false;
        var I = false;
        var v = [];
        var A;
        var e = [];
        var o = 0;
        var z = 0,
            n, x, s;
        var j = false;
        y = this;
        y.wrap('<div class="' + E.className + '"/>');
        q = y.parent();
        q.css("overflow", "hidden");
        y.find("." + E.sliderClassName).each(function (i) {
            c(this).hide();
            o++;
            c(this).css("left", D * i);
            e[i] = c(this);
        });
        if (E.showButton) {
            n = c('<div class="buttonArea"><div class="buttonCon"></div></div>');
            q.append(n);
            x = n.find(".buttonCon");
            for (var C = 0; C < o; C++) {
                x.append('<a class="theButton" rel="' + C + '">' + (C + 1) + "</a>").css("cursor", "pointer");
            }
            c(".buttonCon a", n).bind("click", function (J) {
                if (c(this).hasClass("active")) {
                    return false;
                }
                var i = c(this).attr("rel");
                u(i);
            });
        }
        if (E.showArrow) {
            s = c('<div class="arrowButton"><div class="prevArrow"></div><div class="nextArrow"></div></div>');
            q.append(s);
            var l = c(".nextArrow", s).bind("click", function (i) {
                r();
            });
            var k = c(".prevArrow", s).bind("click", function (i) {
                F();
            });
        }
        if (x) {
            x.hide();
        }
        if (s && E.autoHideButton) {
            s.hide();
        }
        u(0);
        if (E.slideShow) {
            slideShowInt = setInterval(function () {
                r();
            }, E.slideShowDelay);
            y.data("interval", slideShowInt);
            j = true;
        }

        function u(i) {
            if (E.slideShow) {
                g();
            }
            y.stop(true, true).animate({
                left: -i * D
            }, E.delay, function () {
                if (i != H) {
                    z = H;
                    if (e[z]) {
                        if (!(c.browser.msie || c.browser.opera)) {
                            e[z].fadeOut();
                        }
                        if (c.browser.msie && c.browser.version <= 9) {
                            e[z].children().each(function (J) {
                                c(this).css("opacity", 0);
                            });
                        }
                        c(".buttonArea a:eq(" + z + ")", q).removeClass("active");
                    }
                    c(".buttonArea a:eq(" + i + ")", q).addClass("active");
                    if (E.easeType.toLowerCase() != "random") {
                        e[i].show().children().each(function (L) {
                            var K = L;
                            var M = c(this);
                            var N = "";
                            var J = false;
                            if (c(this).hasClass(E.easeType)) {
                                c(this).removeClass(E.easeType);
                                c(this).hide();
                            }
                            if (M.data("animate")) {
                                J = true;
                                N = M.data("animate");
                                M.removeClass(N);
                                M.hide();
                            }
                            if (c.browser.msie && c.browser.version <= 9) {
                                M.css("opacity", 0);
                                M.show().animate({
                                    opacity: 1
                                }, 200 + 200 * K);
                            } else {
                                if (J) {
                                    M.show().addClass("animate" + K + " " + N);
                                } else {
                                    M.show().addClass("animate" + K + " " + E.easeType);
                                } if (E.responsive && B < E.minWidth && !c(this).is("img")) {
                                    M.hide();
                                }
                            }
                        });
                    } else {
                        A = a[Math.floor(Math.random() * b)];
                        v[i] = A;
                        if (e[z]) {
                            e[z].children().each(function (J) {
                                if (c(this).hasClass(v[z])) {
                                    c(this).removeClass(v[z]);
                                    c(this).hide();
                                }
                            });
                        }
                        e[i].show().children().each(function (L) {
                            var K = L;
                            var M = c(this);
                            var N = "";
                            var J = false;
                            if (M.data("animate")) {
                                J = true;
                                N = M.data("animate");
                                M.removeClass(N);
                                M.hide();
                            }
                            if (c.browser.msie && c.browser.version <= 9) {
                                M.css("opacity", 0);
                                M.show().animate({
                                    opacity: 1
                                }, 200 + 200 * K);
                            } else {
                                if (J) {
                                    M.show().addClass("animate" + K + " " + N);
                                } else {
                                    M.show().addClass("animate" + K + " " + A);
                                } if (E.responsive && B < E.minWidth && !c(this).is("img")) {
                                    M.hide();
                                }
                            }
                        });
                    }
                    y.delay(e[i].children().length * 200).queue(function () {
                        if (E.slideShow && j) {
                            d();
                        }
                    });
                    if (s) {
                        s.css("cursor", "pointer");
                    }
                    H = i;
                }
            });
        }
        var B = y.parent().width();
        if (E.responsive) {
            y.parent().css("height", G * B / p);
            c(window).load(w);
            c(window).resize(w);
        }

        function w(i) {
            B = y.parent().width();
            y.parent().css("height", G * B / p);
            y.find("." + E.sliderClassName).each(function (J) {
                c(this).css("height", G * B / p);
                if (B < E.minWidth) {
                    c(this).find("span").css("display", "none");
                    s.css("display", "none");
                } else {
                    c(this).find("span").css("display", "");
                    s.css("display", "");
                }
            });
            if (l) {
                l.css("top", G * B / p * 0.5 - 40);
            }
            if (k) {
                k.css("top", G * B / p * 0.5 - 40);
            }
        }

        function g() {
            clearInterval(y.data("interval"));
        }

        function d() {
            clearInterval(y.data("interval"));
            slideShowInt = setInterval(function () {
                r();
            }, E.slideShowDelay);
            y.data("interval", slideShowInt);
        }

        function r() {
            var i = H;
            i++;
            i = i >= o ? 0 : i;
            u(i);
        }

        function F() {
            var i = H;
            i--;
            i = i < 0 ? o - 1 : i;
            u(i);
        }
        return this;
    };
})(jQuery);