/*global $*/
/*jslint sloppy:true, browser: true*/
/*
$("h1.page-title").text("Hello world");
$(window).on("click", function (e) {
    $('.logo').css({left: e.pageX,
                    top: e.pageY});
    
});
function randomMargin() {
    return Math.random() * 20 - 100;

}
*/
var vx = Math.random() * 10 - 5;
var vy = Math.random() * 10 - 5;
var x =$(window).width() / 2;
var y =$(window).height() / 2;
var theta = 0;
var vtheta = 1 * Math.PI /180;
var r = 300;
setInterval(function () {
    $('.logo').css({
        'left': x + r * Math.cos(theta),
        'top': y + r * Math.sin(theta)
});
theta = theta + vtheta;
    if (theta >= Math.PI) {
        vtheta = -vtheta;
    }
    if (theta = 0) {
        vtheta = -vtheta;
    }
    
    /*
    x = x + vx;
    y = y + vy;
    if (x < 0) {
        x = 0;
        vx = -vx;
    } else if (x > $(window).width()) {
            x = $(window).width();
               vx = -vx;
               }
     if (y < 0) {
        y = 0;
        vy = -vy;
    } else if (y > $(window).height()) {
            y = $(window).height();
               vy = -vy;
               }
    */
    
}, 10);