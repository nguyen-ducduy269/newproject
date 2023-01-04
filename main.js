import "./node_modules/bootstrap/dist/js/bootstrap.min.js";
// search
let x = $(".header-search");
$(".search").on("click", function () {
  x.css("top", "0");
});

$(".close").on("click", function () {
  x.css("top", "-200px");
});
// help
let y = $(".header-help");
$(".help").on("click", function () {
  y.css("top", "0");
});

$(".help-close").on("click", function () {
  y.css("top", "-350px");
});
// account
let z = $(".header-account");
$(".account").on("click", function () {
  z.css("right", "0");
});
