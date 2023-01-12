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
let z = $(".accnt");
$(".account").on("click", function () {
  z.css("display", "block");
});
$(".layout").on("click", function () {
  z.css("display", "none");
});

let mc = $(".mobile-content");
let back = $(".back");
$(".open").on("click", function () {
  mc.css("left", "0");
  back.css("display", "block");
});
$(".close").on("click", function () {
  mc.css("left", "-256px");
  back.css("display", "none");
});
