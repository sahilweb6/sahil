//**************************Flex Slider Rooms page**************************//
$(window).load(function(){
      $('.rooms_slider').flexslider({
        animation: "slide",
        animationLoop: false,
		auto : false,
        minItem: 1,
		maxItem:1,
		touch : true,
		itemHeight:900,
	
	
		
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

			
