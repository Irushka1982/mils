
$(document).ready(function(){
/* show and hide popup-exchange window*/
        $(".button-main--exchange, .popup__transparent--exchange, .popup__close-button--exchange").click(function(){
        $(".popup-exchange").slideToggle("slow");
        }); 
/* show and hide popup-consultation window*/
        $(".popup__close-button--consultation, .button-main--consultation, .consultation__picture,  .popup__transparent--consultation").click(function(){
        $(".popup-consultation").slideToggle("slow");
        });
/* show and hide popup-consultation-catalog window*/
        $(".popup__close-button--consultation-catalog, .button-main--catalog, .popup__transparent--catalog").click(function(){
        $(".popup-consultation-catalog").slideToggle("slow");
        });

    $("button.button-main--grey,.back").eq(1).click(function(){
         $(".popup-save").slideToggle("slow");});

    $(".back, .button-main--cost").click(function(){
            $(".popup-save").slideToggle("slow");
            $(".popup-content__result").hide();
            (".popup-content__result-title").empty();
        });

  /*variables to count*/
    var priceLeft;
    var priceRight;
    var mainprice;

    
/*  click function to select a product, menu-old-products; */
    
      $(".menu-old-products li").click(function(e){
          e.preventDefault();
          var id = $(this).attr("data-productid");/* get attributes;*/
          $('.selected-model--left').hide();
          if ( id ) {
            $('[data-id="'+id+'"]').show();
          }
          $(".menu-old-products").hide().css("order","2"); /*show-hide layers with products*/
          $(".products--left").css("order","1");
          $(".products--left").css("display","block");
          $(".popup-content__transparent-block").hide();
          $(".menu-new-products li[data-parentproductid='"+id+"']").show();
          $(".popup-content__select--arrow-left").hide();
       
           priceLeft = $(this).attr("data-price-left");           
       
      });

  /*  click function to select a product, menu-new-products; */
 
       $(".menu-new-products li").click(function(e){
            e.preventDefault();
            var parent_id = $(this).attr("data-parentproductid");/* get attributes*/
            var sub_id = $(this).attr("data-subprodid");
            if ( sub_id ) { 
            $(".menu-new-products").hide().css("order","2");/*show-hide layers with products and menu*/
            $(".products--right").css("order","1");
            $(".products--right").css("display","block");
            $(".selected-model--right").hide();
            $("[data-subid='"+sub_id+"']").show();
           $(".popup-content__result").show();
           $(".popup-content__select--arrow-right").hide();

          priceRight = $(this).attr("data-price-right");


             $(function countResults() {

            if(+priceLeft < +priceRight){
             mainprice = Math.abs(+priceLeft - +priceRight);/*count if priceLeft < priceRight*/
                  $( ".popup-content__result-title" ).prepend( document.createTextNode('Вы заработаете' + ' ' + +priceLeft + ' ' + 'грн') );
                 $( ".popup-content__result-titlea" ).prepend( document.createTextNode('Cумма к оплате ' + ' ' + mainprice + ' ' + 'грн') );
            } /*write the result to display*/

            else{

            mainprice = Math.abs(+priceRight - +priceLeft);/*count if priceLeft > priceRight*/
                     
                 $( ".popup-content__result-title" ).prepend( document.createTextNode('Вы заработаете ' + ' ' + mainprice + ' ' + 'грн') );
            }/*write the result to display*/
               
            });  
    }
});
  
/*return to the menu;
click on the link on the left cards-block;
*/
       $(".another-gadget--left").click(function(e){
         e.preventDefault(); 
       
          $(".popup-content__select--arrow-left").show();
          $('.menu-old-products').show().css("order","1");/*change of priorities layers*/
          $(".products--left").hide().css("order","2");
          $(".popup-content__transparent-block").show();

         $(".popup-content__result-titlea").empty(); /*cleans account of the results*/
         $(".popup-content__result-title").empty(); 
          $(".popup-content__result").hide(); 
      });

/*return to the menu;
click on the link on the right cards-block;*/

      $(".another-gadget--right").click(function(e){
       e.preventDefault();
          $('.menu-new-products').show().css("order","1");/*change of priorities layers*/
          $(".products--right").hide().css("order","2"); 
          $(".popup-content__result").hide();
          $(".popup-content__result-titlea").empty();/*cleans account of the results*/
          $(".popup-content__result-title").empty();
          $(".popup-content__select--arrow-right").show();
      });


/*return to the default state when close popup-save window*/
      $(".popup-save__button-close").click(function(e){
          $(".menu-old-products").show();
          $(".products--left").hide();
          $('.menu-new-products').show();
          $(".products--right").hide(); 
          $(".popup-save").slideToggle("slow");
          $(".popup-content__result").hide();
           $(".popup-content__result-titlea").empty();
          $(".popup-content__result-title").empty();
       });

/*carusel with testimonials*/
    	$(function () {
               $("#owl-demo").owlCarousel({     
                  navigation : true, 
                  slideSpeed : 500,
                  paginationSpeed : 400,
                  singleItem:true,
                  autoPlay: true   
              });     
        });

/* scroll for menu*/
      $(function() {
          var ul = $(".container-menu");
          $(window).scroll(function() {    
              var scroll = $(window).scrollTop();
          
              if (scroll >= 800) {
                  ul.removeClass('container-menu').addClass("nav-active");
              } else {
                  ul.removeClass("nav-active").addClass('container-menu');
              }
          });
      });

/*leaves menu on top*/
    $(".menu-nav").on("click","a", function (event) {
    		event.preventDefault();
    		var id  = $(this).attr('href'),
    		top = $(id).offset().top;		
    		$('body,html').animate({scrollTop: top}, 1500);
    	});

/*auto hover when scroll*/
       var lastId,
        topMenu = $(".menu-nav"),
        topMenuHeight = topMenu.outerHeight()+15,    
        menuItems = topMenu.find("a"),   
        scrollItems = menuItems.map(function(){
          var item = $($(this).attr("href"));
          if (item.length) { return item; }
        });



    $(window).scroll(function(){ 
       var fromTop = $(this).scrollTop()+topMenuHeight;   
       var cur = scrollItems.map(function(){
         if ($(this).offset().top < fromTop)
           return this;
       });
      
       cur = cur[cur.length-1];
       var id = cur && cur.length ? cur[0].id : "";
       
       if (lastId !== id) {
           lastId = id;
         
           menuItems
             .parent().removeClass("menu-nav__sell--active")
             .end().filter("[href='#"+id+"']").parent().addClass("menu-nav__sell--active");
       }                   
    });

});