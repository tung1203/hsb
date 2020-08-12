$(document).ready(function () {
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
});
