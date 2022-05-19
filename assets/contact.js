import $ from "jquery";
if ($(".alert").length > 0) {
  setTimeout(function () {
    $(".alert").fadeOut(500, function () {
      $(".alert").remove();
    });
  }, 2000);
}
