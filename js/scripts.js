$(document).ready(function() {
  $("p").click(function() {
    $(".frog-showing").fadeToggle();
    $(".frog-hidden").fadeToggle();

  });
});

$(document).ready(function() {
  $("h1").click(function() {
    $(".facts-hidden").show();
    $(".facts-showing").fadeToggle();

  });
});
