$(".readmore-btn").on('click', function () {
    $(this).parent().toggleClass("showContent");

    // Shorthand if-else statment
    var replaceText = $(this).parent().hasClass("showContent") ? "READ LESS" : "READ MORE";
    $(this).text(replaceText);
});