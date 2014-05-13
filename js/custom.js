
//*******************datepicker****************//
  $(function() {
    $( "#datepicker" ).datepicker();
	$( "#datepicker1" ).datepicker();
	
  });
//*****************datepicker****************//  
//**************************Background-HomePage**********************//
// JavaScript Document
	 jQuery(function($){
            $("body").bgStretcher({
                images: ["images/home-img1.jpg", "images/home-img2.jpg"],
                imageWidth: 1682,
                imageHeight: 1122,
                slideShow: true,
				nextSlideDelay: 8000,
            })
        });
//**************************Background-HomePage**********************//
//**************************Slideout Tab***************************//
 $(function(){
        $('.slide-out-div').tabSlideOut({
            tabHandle: '.handle',                     //class of the element that will become your tab
    											 //path to the image for the tab //Optionally can be set using css
                               //width of tab image            //Optionally can be set using css
            tabLocation: 'bottom',                      //side of screen where tab lives, top, right, bottom, or left
            speed: 300,                               //speed of animation
            action: 'click',                          //options: 'click' or 'hover', action to trigger animation
                                    //position from the top/ use if tabLocation is left or right
                                //position from left/ use if tabLocation is bottom or top
            fixedPosition: false                      //options: true makes it stick(fixed position) on scroll
        });

    });
//**************************Slideout Tab***************************//
//**************************Animation on menu button**************************//



//**************************Animation on menu button**************************//
//**************************Flex slider search page**************************//
  $(window).load(function(){
      $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: false,
		auto : false,
        itemWidth: 340,
       itemMargin:10,
      minItems: 1,
       maxItems: 4,
		touch : true,
	
	
		
        start: function(slider){
          $('body').removeClass('loading');        }
      });
   });
	
//**************************Flex slider search page**************************//
//**************************Flex Slider Rooms page**************************//
$(window).load(function(){
      $('.rooms_slider').flexslider({
        animation: "slide",
        animationLoop: false,
		auto : false,
        minItem: 1,
		maxItem:1,
		touch : true,
		itemHeight:'auto',
	
	
		
        start: function(slider){
          $('body').removeClass('loading');
        }
      });
    });
//**************************Flex Slider Rooms page**************************//
	
var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),

				showLeft = document.getElementById( 'showLeft' ),

				
				body = document.body;
				var isItOpen;

			showLeft.onclick = function() {
				
				classie.toggle( menuLeft, 'cbp-spmenu-open' );
			if(isItOpen == "yes"){
					isItOpen=null;
					}else{
				isItOpen="yes";
					}
			};
			function closeItPls() {

					classie.toggle( menuLeft, 'cbp-spmenu-open' );
			}
			document.getElementById("main-wrapper").onclick= function(){
				if(isItOpen == "yes"){
					closeItPls();
					isItOpen=null;
					}
				
				}
				document.getElementByClassName("bgstretcher").onclick= function(){
				if(isItOpen == "yes"){
					closeItPls();
					isItOpen=null;
					}
				
				}

			
