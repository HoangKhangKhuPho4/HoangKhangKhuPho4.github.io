document.getElementById("search-button").onclick = function () {
  window.location.href = "thaytoan.html"; // chú ý tên file không có dấu
};

document.addEventListener("DOMContentLoaded", function () {
  // Lắng nghe sự kiện click trên nút
  document
    .getElementById("orderTicketBtn")
    .addEventListener("click", function (event) {
      event.preventDefault(); // Ngăn chặn hành vi mặc định của form

      // Chuyển hướng tới trang mới
      window.location.href = "thanhtoan.html"; // Thay 'newpage.html' bằng đường dẫn tới trang bạn muốn chuyển đến
    });
});
