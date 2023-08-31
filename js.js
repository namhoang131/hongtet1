$(document).ready(function() {
    var t = [{
        
        name: "Giáp Thìn",
        m1: Date.parse("Feb 10 2024 00:00:00")
    }, {
        name: "Ất Tỵ",
        m1: Date.parse("Jan 29 2025 00:00:00")
    }, {
        name: "Bính Ngọ",
        m1: Date.parse("Feb 17 2026 00:00:00")
    }, {
        name: "Đinh Mùi",
        m1: Date.parse("Feb 7 2027 00:00:00")
    }, {
        name: "Mậu Thân",
        m1: Date.parse("Jan 26 2028 00:00:00")
    }, {
        name: "Kỷ Dậu",
        m1: Date.parse("Feb 13 2029 00:00:00")
    }, {
        name: "Canh Tuất",
        m1: Date.parse("Feb 2 2030 00:00:00")
    }, {
        name: "Tân Hợi",
        m1: Date.parse("Jan 23 2031 00:00:00")
    }, {
        name: "Nhâm Tý",
        m1: Date.parse("Feb 11 2032 00:00:00")
    }, {
        name: "Quý Sửu",
        m1: Date.parse("Jan 31 2033 00:00:00")
    }, {
        name: "Giáp Dần",
        m1: Date.parse("Feb 19 2034 00:00:00")
    }, {
        name: "Ất Mão",
        m1: Date.parse("Feb 8 2035 00:00:00")
    }, {
        name: "Bính Thìn",
        m1: Date.parse("Jan 28 2036 00:00:00")
    }, {
        name: "Đinh Tỵ",
        m1: Date.parse("Feb 15 2037 00:00:00")
    }, {
        name: "Mậu Ngọ",
        m1: Date.parse("Feb 4 2038 00:00:00")
    }, {
        name: "Kỷ Mùi",
        m1: Date.parse("Jan 24 2039 00:00:00")
    }, {
        name: "Canh Thân",
        m1: Date.parse("Feb 12 2040 00:00:00")
    }, {
        name: "Tân Dậu",
        m1: Date.parse("Feb 1 2041 00:00:00")
    }, {
        name: "Nhâm Tuất",
        m1: Date.parse("Feb 10 2042 00:00:00")
    }, {
        name: "Quý Hợi",
        m1: Date.parse("Jan 30 2043 00:00:00")
    }, {
        name: "Giáp Tý",
        m1: Date.parse("Feb 17 2044 00:00:00")
    }, {
        name: "Ất Sửu",
        m1: Date.parse("Feb 6 2045 00:00:00")
    }, {
        name: "Bính Dần",
        m1: Date.parse("Jan 26 2046 00:00:00")
    }, {
        name: "Đinh Mão",
        m1: Date.parse("Jan 23 2047 00:00:00")
    },]
      , e = t.length;
    setInterval(function() {
        for (var n = (new Date).getTime(), a = 0; a < e; a++) {
            var o = t[a].m1 - 864e5
              , r = t[a].m1 + 864e5
              , m = t[a].m1 + 2592e5;
            if (n <= m) {
                var i = t[a].m1
                  , s = !1
                  , c = a + 2024
                  , g = t[a].name + " " + c
                  , p = "Đếm ngược đến Tết " + g + " - Sắp Tết!"
                  , l = "Sắp Tết rồi!!! Chỉ còn..."
                  , h = "Chúc"
                  , u = "Mừng"
                  , x = "Năm"
                  , T = "Mới"
                  , f = "Ngày"
                  , y = "Giờ"
                  , d = "Phút"
                  , C = "Giây";
                if (n >= t[a].m1 && (i = m,
                n >= r ? l = "Sắp hết Tết rồi!!!" : (s = !0,
                l = "Tết rồi!!!Tết rồi!!!",
                f = "Cùsng",
                y = "Chúc",
                d = "Tân",
                C = "Xuân")),
                !s) {
                    var b = i - n;
                    T = Math.floor(b / 1e3 % 60),
                    x = Math.floor(b / 1e3 / 60 % 60),
                    u = Math.floor(b / 36e5 % 24),
                    h = Math.floor(b / 864e5)
                }
                $("#tetornot").text(l),
                $("#days").text(h),
                $("#hours").text(u),
                $("#mins").text(x),
                $("#secs").text(T),
                $("#days-text").text(f),
                $("#hours-text").text(y),
                $("#mins-text").text(d),
                $("#secs-text").text(C),
                $("#tentet").text(g),
                $("#tet").text(g),
                n >= o && ($("html").css({
                    background: "radial-gradient(ellipse at bottom, #efe81d 0%, #f80f1f 100%)"
                }),
                $(".clock").toggleClass("tet"),
                $(".clock .text").toggleClass("tet")),
                document.title = p,
                $('meta[name="description"]').attr("content", "Còn bao nhiêu ngày nữa đến Tết Nguyên Đán " + g + "?"),
                $('meta[property="og\\:title"]').attr("content", p),
                $('meta[property="og\\:description"]').attr("content", "Còn bao nhiêu ngày nữa đến Tết Nguyên Đán " + g + "?"),
                $('meta[property="og\\:image"]').attr("content", "/icon.png");
                break
            }
        }
    }, 1e3)
});
