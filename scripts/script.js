
$(document).ready(function(){
    $(".button-main--exchange, .popup__transparent--exchange").click(function(){
        $(".popup-exchange").slideToggle("slow");
    }); 

 $(".button-main--consultation, .popup__transparent--consultation").click(function(){
        $(".popup-consultation").slideToggle("slow");
    });

 $(".button-main--catalog, .popup__transparent--catalog").click(function(){
        $(".popup-consultation-catalog").slideToggle("slow");
    });

$("button.button-main--grey,.back").eq(1).click(function(){
        $(".popup-save").slideToggle("slow");});

$(".back").click(function(){
        $(".popup-save").slideToggle("slow");});



/*list-products*/
var priceLeft;
var priceRight;

$(".menu-old-products li").click(function(e){
  e.preventDefault();
  var id = $(this).attr("data-productid");

  $('.product-card--left').hide();
  if ( id ) {
    $('[data-id="'+id+'"]').show();
  }
  $(".menu-old-products").hide().css("order","2");
  $(".products--left").css("order","1");
   $(".products--left").css("display","block");
  $(".popup-content__transparent-block").hide();
   $(".menu-new-products li[data-parentproductid='"+id+"']").show();

   priceLeft = $(this).attr("data-price-left");
   console.log('priceLeft',priceLeft);


});

$(".menu-new-products li").click(function(e){
  e.preventDefault();
  var parent_id = $(this).attr("data-parentproductid");
  var sub_id = $(this).attr("data-subprodid");
  if ( sub_id ) { 
    $(".menu-new-products").hide().css("order","2");
  $(".products--right").css("order","1");
   $(".products--right").css("display","block");
  $(".product-card--right").hide();
    $("[data-subid='"+sub_id+"']").show();
$(".popup-content__sum").show();

    priceRight = $(this).attr("data-price-right");
   console.log('priceRight',priceRight);

   var sum = (+priceRight + +priceLeft);
   console.log('sum',sum);

var mainPriceText = $('<p/>',{
 	class: 'popup-content__sum-title',
	text:'Вы заработаете'+' '+ sum
  });
    $('.popup-content__sum').prepend(mainPriceText);



  }

});


$(".another-gadget--left").click(function(e){
 e.preventDefault();
  $('.menu-old-products').show().css("order","1");
$(".products--left").hide().css("order","2");
$(".popup-content__transparent-block").show();
$(".popup-content__sum").hide(); 
(".popup-content__sum-title").empty();
});

$(".another-gadget--right").click(function(e){
 e.preventDefault();
  $('.menu-new-products').show().css("order","1");
$(".products--right").hide().css("order","2"); 
$(".popup-content__sum").hide();
$(".popup-content__sum-title").empty();
});

	

	$(function() {
           $("#owl-demo").owlCarousel({     
              navigation : true, 
              slideSpeed : 500,
              paginationSpeed : 400,
              singleItem:true,
              autoPlay: true   
          });     
    });


$(function() {
    var ul = $(".menu-nav");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 800) {
            ul.removeClass('menu-nav').addClass("nav-active");
        } else {
            ul.removeClass("nav-active").addClass('menu-nav');
        }
    });
});

$("#menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;		
		$('body,html').animate({scrollTop: top}, 1500);
	});



});