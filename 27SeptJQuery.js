// A $ sign to define/access jQuery
// A (selector) to "query (or find)" HTML elements
// A jQuery action() to be performed on the element(s)

$(this).hide() - hides the current element.
    $("p").hide() - hides all < p > elements.
        $(".test").hide() - hides all elements with class= "test".
            $("#test").hide() - hides the element with id = "test".


    $(document).ready(function () {
    $("button").click(function () {
    $("p").hide();
    });
});
//When a user clicks on a button, all <p> elements will be hidden:

$(document).ready(function(){
    $("button").click(function(){
    $("#test").hide();
    });
}); 
//When a user clicks on a button, the element with id="test" will be hidden:

Example
$(document).ready(function(){
$("button").click(function(){
    $(".test").hide();
    });
});
//When a user clicks on a button, the elements with class="test" will be hidden:
