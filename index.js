// Instead of document.querySelector("h1") we can shorten it to the below code example using jQuery.
// Using the .css method we an alter the style of the h1 by using the property of color and the text green
$("h1").css("color", "green");

//you can add more classes by using a space
//$("h2").removeClass("big-title margin-50");
$("h2").addClass("big-title margin-50");

//You can also use jquery to change the text
$("p").text("Hi");

//We can also use html
$("p").html("<em>Hello</em>");

//This will select all the buttons on screen when using jQuery
$("button");


//Not only can we change the text, class name and the html, we can also change the attributes.
$("img").attr("src");

//This also works with classes
$("a").attr("href", "https://www.yahoo.com");

$(document).keypress(function (ev) {
    $("h2").text(ev.key);
})
