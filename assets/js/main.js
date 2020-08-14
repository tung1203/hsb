$(document).ready(function () {
  // nav mobile
  $(".nav-bar").click(function () {
    $(".header__right").addClass("active");
    $(".nav-bar--close").addClass("active");
    $(this).addClass("de-active");
  });
  $(".nav-bar--close").click(function () {
    $(".header__right").removeClass("active");
    $(this).removeClass("active");
    $(".nav-bar").removeClass("de-active");
  });

  //mega menu
  $(".mega-menu__content:not(:nth-child(1))").css("display", "none");
  $(".mega-menu__list li").hover(function () {
    $(".mega-menu__content").css("display", "none");
    let currentHover = $(this).attr("data");
    $(".mega-menu__content[data='" + currentHover + "']").css(
      "display",
      "grid"
    );
  });
});
