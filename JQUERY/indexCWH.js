/* <script>

//  $(function(){ }) - Can Also be written in this way

    $(document).ready(function () {
        // Your Jquery code here

        $('p').click(function () {
            console.log("Clicked on P");
            //$('p').hide(); // It hide all the p

            $(this).hide(); // hide the one u clicked
            $('#id').hide(); //to hide id
            $('.class').hide(); // to hide class


        })//execute the function when u click the "P"

    })

</script> */



$(document).ready(function () {

    console.log("  Writing JQuery  ");
    /* 
    //Click Event 
        $('p').click(function () {
            console.log("Clicked on P" , this);
        })
    
    //Double Click Event
        $('p').dblclick(function () {
            console.log("You Double Clicked on P" , this);
        })
    
    //Mouse Enter Event
        $('p').mouseenter(function () {
            console.log("You Mouse Enter  on P" , this);
        })
    
    //Mouse Leave Event
        $('p').mouseleave(function () {
            console.log("You Mouse Leave on P" , this);
        })
    
    //Mouse Down Event
        $('p').mousedown(function () {
            console.log("You Mouse Down on P" , this);
        })
    
    //Mouse Up  Event
        $('p').mouseup(function () {
            console.log("You Mouse Up  on P" , this);
        })
    
    //Hover
    $('p').hover(function () {
        console.log("You HOVER  on P" , this);
    }
    , 
    // we can also do this
    function(){
        console.log(" You're seeing this Because you Hover It ! ")
    }
    )
    
     */

    //Demonstrating the on Method

    $('p').on(
        {
            click: function () {
                console.log('Thanks for clicking , Executing On  ', this);
            },
            mouseleave: function () {
                console.log('Multi Function , Mouse Leave ', this);
            }

        })

    /*  $('p').on("mouseover" ,function () {
            console.log('Thanks for clicking , Executing On  ', this);
            });    */

    // Hide And Show
    /* $('#wiki'); // Getting all wiki Element
    $('#wiki').hide(); // Hiding Wiki 
    $('#wiki').hide(1000); // Hiding After 1 sec i.e 1000 milisec 
    $('#wiki').show(); // Showing Wiki
    
    $('#wiki').hide(1000, function () {  
        console.log("Hidden");
    })
    
    $('#wiki').show(5000, function () {  
        console.log("Showing After Hiding");
    }) */

    /* //Toggle
        $('#but').click(function(){
        $('#wiki').toggle(3000); // Toggle will show and hide
    
    })
     */

    /* //Fade Out
    $('#but').click(function(){
        $('#wiki').fadeOut(3000); // Toggle will show and hide
    
    }) */

    /* //Fade In
    $('#but').click(function(){
        $('#wiki').fadeIn(3000); 
    
    }) */

    /* //Fade Toggle , It toggle between hide and show i.e fade in and out
    $('#but').click(function(){
        $('#wiki').fadeToggle("slow"); 
    
    }) */

    /* //Fade To , It toggle between hide and show i.e fade in and out
    $('#but').click(function(){
        $('#wiki').fadeTo("slow" , 0.15); 
    }) */

    //Sliding Method - callback & speed parameters  method are optional
    /* //Slide Down
    $("#flip").click(function(){
        $("#panel").slideDown("slow");
        }); */

    /* //Slide Up
    $("#flip").click(function(){
        $("#panel").slideUp(3000);
        }); */

    /* //Slide Toggle
    $("#flip").click(function(){
        $("#panel").slideToggle("fast" , function(){
            console.log("Toggling Up : Sliding");
        });
        }); */

    //Animate 
    /* $("#wiki").animate({
        opacity: 0.3,
        height :'150px',
        windth:'350px'
    }, 3000); 
    
    $("button").on("click" , function(){
        $("p").hide();
    })
    
    
    
    
    */

    //Now this will execute Queue wise 
    /* $("#wiki").animate({opacity: 0.3}, 3000);
    $("#wiki").animate({height: '300px'}, 3000);
    $("#wiki").animate({width: '300px'}, 3000);

    $("#wiki").stop(); //If we do then the animate will stop at that point only  */

    //Using Jquery For Html

    $("#wiki").text(); //Return/ gives the text of Wiki
    // $("#wiki").text('This is text Change By jQuery. '); //Changes the inner text

    $("body").html(); //Return/ gives the HTML of Body
    //$("body").html('The Inner Body is change !');


    //When We change the form field we must use .val
    //$('#ta').val();
    $('#ta').val(' Hi Changing TextArea ');  // Changing value


    /*     //Remove Element
        $("#wiki").empty(); // Empty the content OF wiki
        $("#wiki").remove(); //Remove the div */


    /*     //Adding Element
        $("h1").before("<button>New</button>");
        $("h1").after("<button>New</button>");
        $("h1").prepend("<button>New</button>");//insert at the beginning  h1
        $("h1").append("<button>New</button>");//insert at the end of   h1
    */




    //Adding Class
    $("#wiki").addClass('myClass');

    //Remove Class
    $("#wiki").removeClass('myClass');

    //Toogle Class , If Present it will remove , If not It will Add
    $("button").click(function () {
        $("p").toggleClass("main");
    });

    //Atributes Using Jquery
    $("img").attr("src");  // Getting value
    //$("img").attr("src" , "bulb-off.jpg");  //Stting VAlue Value 


    $("a").attr("href");  //Getting Value 
    //$("a").attr("href", "https://www.yahoo.com");  //Setting attribute



    //Using Jquery For CSS
    $("#wiki").css('background-color', 'red'); // Sets the bg Color to RED
    $("#wiki").css('background-color'); //Will tell that it is rgb


    /* AJAX using JQuery
    $.get('https://code.jquery.com/jquery-3.6.1.js'); 

$.get('https://code.jquery.com/jquery-3.6.1.js',function(data,status){alert(data);}); 


$.get('https://code.jquery.com/jquery-3.6.1.js',function(data,status){alert(status)}); 

$.post('https://code.jquery.com/jquery-3.6.1.js',
{name: 'Anuj' , height: '170cm'},
function(data, status){alert(satus)}); 

    */

});
