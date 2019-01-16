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

$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why hello there, ribbit!</li>");

    $("ul#user").children("li").first().click(function() {
    $(this).remove();

  });
    $("ul#webpage").children("li").first().click(function() {
    $(this).remove();
  });
});

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>Goodbye, dear user, ribbit!</li>");

    $("ul#user").children("li").first().click(function() {
    $(this).remove();

  });
    $("ul#webpage").children("li").first().click(function() {
    $(this).remove();
  });
  });


  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Pardon me. I meant no offense, croak.</li>");

    $("ul#user").children("li").first().click(function() {
    $(this).remove();

  });
    $("ul#webpage").children("li").first().click(function() {
    $(this).remove();
  });
  });


});
