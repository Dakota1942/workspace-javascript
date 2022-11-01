$(function(){
    $("a").each(function(){
        $(this).css("text-decoration", "line-through");
        $(this).attr('href', "https://www.google.com");
    });
    // get image path correct?
    $("img").each(function(){
        var theSRC = $(this).attr('src');
        $(this).attr('src', "/img/" + theSRC);
    });
});