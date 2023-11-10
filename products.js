// Lấy thẻ nút "Thanh toán"
const checkoutButton = document.getElementById("checkoutButton");

// Thêm sự kiện "click" cho nút "Thanh toán"
checkoutButton.addEventListener("click", () => {
  // Thực hiện các tác vụ thanh toán ở đây
  // Ví dụ: Hiển thị thông báo thanh toán thành công
  alert("Thanh toán thành công!");
  // Sau khi thanh toán thành công, bạn có thể làm sạch giỏ hàng bằng cách xóa tất cả các sản phẩm khỏi biến cartItems và cập nhật giỏ hàng
  cartItems = [];
  updateCart();
});
// Lấy thẻ ô tìm kiếm và nút tìm kiếm
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

// Lấy danh sách sản phẩm
const products = [
  {
    name: "Cà phê đen",
    price: 20000,
    image: "capheden.jpg",
    link: "",
  },
  // Thêm các sản phẩm khác vào đây
];

// Đối tượng sản phẩm thứ 2
const product2 = {
  name: "Cà phê sữa",
  price: 25000,
  image: "caphesua.jpg",
  link: "",
};

// Thêm sản phẩm thứ 2 vào mảng products
products.push(product2);

const product3 = {
  name: "Cà phê đá xoay",
  price: 30000,
  image: "caphedaxoay.jpg",
  link: "",
};

// Thêm sản phẩm thứ 2 vào mảng products
products.push(product3);

const product4 = {
  name: "Cà phê cốt dừa",
  price: 35000,
  image: "caphecotdua.jpg",
  link: "",
};

// Thêm sản phẩm thứ 2 vào mảng products
products.push(product4);

const product5 = {
  name: "Machiato",
  price: 100000,
  image: "machiato.jpg",
  link: "",
};

// Thêm sản phẩm thứ 2 vào mảng products
products.push(product5);

const product6 = {
  name: "latte",
  price: 200000,
  image: "latte.jpg",
  link: "",
};

// Thêm sản phẩm thứ 2 vào mảng products
products.push(product6);

const product7 = {
  name: "Mocha",
  price: 500000,
  image: "mocha.jpg",
  link: "",
};

// Thêm sản phẩm thứ 2 vào mảng products
products.push(product7);

// Thêm sự kiện "click" cho nút tìm kiếm
searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const searchResults = searchProducts(products, searchTerm);
  displaySearchResults(searchResults);
});

// Hàm tìm kiếm sản phẩm
function searchProducts(products, term) {
  // Chuyển đổi từ khóa tìm kiếm và tên sản phẩm thành chữ thường
  const searchTermLower = term.toLowerCase();

  // Sử dụng phương thức filter để tìm kiếm sản phẩm
  return products.filter((product) =>
    product.name.toLowerCase().includes(searchTermLower)
  );
}

// Hàm hiển thị kết quả tìm kiếm
function displaySearchResults(results) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = ""; // Xóa nội dung hiện tại của danh sách sản phẩm

  if (results.length === 0) {
    productList.innerHTML = "<p>Không tìm thấy sản phẩm.</p>";
  } else {
    results.forEach((product) => {
      productList.innerHTML += `
                <div class="product">
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>Giá: ${product.price} VNĐ</p>
                    <a href="${product.link}" class="product-link">Xem chi tiết</a>
                </div>
            `;
    });
  }
}
// Hàm xóa sản phẩm khỏi giỏ hàng
function removeFromCart(productName) {
  // Tìm sản phẩm có tên trùng khớp trong giỏ hàng và xóa nó
  const index = cartItems.findIndex((item) => item.name === productName);
  if (index !== -1) {
    cartItems.splice(index, 1);
    updateCart(); // Cập nhật giỏ hàng sau khi xóa sản phẩm
  }
}
// Lấy thẻ nút xóa bên cạnh nút thanh toán
const removeItemButton = document.getElementById("removeItemButton");

// Thêm sự kiện "click" cho nút xóa
removeItemButton.addEventListener("click", () => {
  removeFromCart("Cà phê đen"); // Thay 'Cà phê đen' bằng tên sản phẩm bạn muốn xóa
});

removeItemButton.addEventListener("click", () => {
  removeFromCart("Cà phê sữa"); // Thay 'Cà phê đen' bằng tên sản phẩm bạn muốn xóa
});

removeItemButton.addEventListener("click", () => {
  removeFromCart("Cà phê đá xoay"); // Thay 'Cà phê đen' bằng tên sản phẩm bạn muốn xóa
});

removeItemButton.addEventListener("click", () => {
  removeFromCart("Cà phê cốt dừa"); // Thay 'Cà phê đen' bằng tên sản phẩm bạn muốn xóa
});

removeItemButton.addEventListener("click", () => {
  removeFromCart("Machiato"); // Thay 'Cà phê đen' bằng tên sản phẩm bạn muốn xóa
});

removeItemButton.addEventListener("click", () => {
  removeFromCart("latte"); // Thay 'Cà phê đen' bằng tên sản phẩm bạn muốn xóa
});
removeItemButton.addEventListener("click", () => {
  removeFromCart("Mocha"); // Thay 'Cà phê đen' bằng tên sản phẩm bạn muốn xóa
});

// Lấy thẻ ô tìm kiếm
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    searchProductsAndDisplay(searchInput.value);
  }
});

function searchProductsAndDisplay(term) {
  const results = searchProducts(products, term);
  displaySearchResults(results);
}
