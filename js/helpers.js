$( document ).ready(function() {
  console.log('cargao');
  $(function() {
    $(".menu a").smoothscrolling();
    $(".navbar-brand").smoothscrolling();
  })
  $("#p1").fadeIn(1000);
  $("#p2").fadeIn(1000);
  $("#p3").fadeIn(2000);
  $("#p4").fadeIn(2000);

  $(".sections").click(function(){
    $(".sections").removeClass("activo");
    $(this).addClass("activo");
  });
      $(".regular").slick({
       dots: true,
        infinite: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1
      });

  $( ".subti" ).hover(function() {
  $( this ).addClass( "animated" );
$( this ).addClass( "slideInUp" );
});
});
