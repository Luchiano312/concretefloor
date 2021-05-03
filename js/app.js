/*menu */
$(document).ready(function () {
  $(".nav-button").click(function () {
    $("body").toggleClass("nav-open");
  });
});

// $('.flex-center').click(function(){
//      $(this).parent().parent().remove();
// });
$(".nav-link").click(function () {
  $("#fecha").toggle();
});
$("#nav-icon3").click(function () {
  $("#fecha").show();
});
