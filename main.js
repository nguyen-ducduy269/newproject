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

let ma = $(".mobile-account");
let ab = $(".account-back");
$(".mobile-acc").on("click", function () {
  ma.css("display", "block");
  ab.css("display", "block");
});
ab.on("click", function () {
  ma.css("display", "none");
  ab.css("display", "none");
});

$(".circle").on("click", function () {
  z.css("display", "block");
});
$("#shopofy-mobile").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
