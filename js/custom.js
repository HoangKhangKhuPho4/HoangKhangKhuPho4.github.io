(function ($) {
  "use strict";

  // NAVBAR
  $(".navbar-nav .nav-link").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // REVIEWS CAROUSEL
  $(".reviews-carousel").owlCarousel({
    center: true,
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 300,
    smartSpeed: 500,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
        margin: 100,
      },
      1280: {
        items: 2,
        margin: 100,
      },
    },
  });

  // Banner Carousel
  var myCarousel = document.querySelector("#myCarousel");
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 1500,
  });

  // REVIEWS NAVIGATION
  function ReviewsNavResize() {
    $(".navbar").scrollspy({ offset: -94 });

    var ReviewsOwlItem = $(".reviews-carousel .owl-item").width();

    $(".reviews-carousel .owl-nav").css({ width: ReviewsOwlItem + "px" });
  }

  $(window).on("resize", ReviewsNavResize);
  $(document).on("ready", ReviewsNavResize);

  // HREF LINKS
  $('a[href*="#"]').click(function (event) {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 74,
          },
          1000
        );
      }
    }
  });
})(window.jQuery);

document.getElementById("ehrForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Xử lý dữ liệu của form ở đây
  // Lấy giá trị từ form
  var patientName = document.getElementById("patientName").value;
  var patientAge = document.getElementById("patientAge").value;
  var medicalHistory = document.getElementById("medicalHistory").value;

  console.log("Patient Name:", patientName);
  console.log("Patient Age:", patientAge);
  console.log("Medical History:", medicalHistory);

  // Đóng modal sau khi xử lý
  $("#ehrModal").modal("hide");
});
document.addEventListener("DOMContentLoaded", function () {
  // Xử lý khi nút "Lưu Thay Đổi" được nhấn
  document
    .querySelector("#ehrModal .btn-primary")
    .addEventListener("click", function () {
      // Lấy giá trị từ form
      var patientName = document.getElementById("patientName").value;
      var patientAge = document.getElementById("patientAge").value;
      var medicalHistory = document.getElementById("medicalHistory").value;

      // Thực hiện xử lý dữ liệu ở đây
      // Ví dụ: In ra console hoặc gửi đến server
      console.log("Patient Name:", patientName);
      console.log("Patient Age:", patientAge);
      console.log("Medical History:", medicalHistory);

      // Hiển thị thông báo cho người dùng
      alert("Dữ liệu đã được lưu!");

      // Đóng modal sau khi xử lý
      $("#ehrModal").modal("hide");
    });

  // Các xử lý khác...
});

// Trong file custom.js

window.onload = function () {
  scrollToBooking();
};

function scrollToBooking() {
  const bookingSection = document.getElementById("booking");

  // Tính toán vị trí của phần booking
  const bookingPosition =
    bookingSection.getBoundingClientRect().top + window.pageYOffset;

  // Cuộn trang đến vị trí đó
  window.scrollTo({ top: bookingPosition, behavior: "smooth" });
}
