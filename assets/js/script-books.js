$(document).ready(function() {
    $(".book").click(function() {
        $(":first-child", this).addClass("cover-active");
        console.log("TEST");
    });
});