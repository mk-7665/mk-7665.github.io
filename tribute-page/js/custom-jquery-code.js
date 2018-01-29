//adding Bootstrap4's img-fluid class to every image, to accomodate smaller screen sizes
$("img").addClass("img-fluid");


//$("body").css({"background-color":"#F4F6F6"});

$("div#main-page").css({"margin-top": "70px"});

//text changes color when an h3 sentence is moused over
$("h3#why-hero").mouseenter(function(){
  $(this).css({"color":"#117A65"});
});

$("h3#why-hero").mouseleave(function(){
    $(this).css({"color": "#343a40"});
});