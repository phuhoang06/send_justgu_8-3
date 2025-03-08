// Xử lý sự kiện xác nhận hiển thị nội dung chính
document.getElementById('confirmBtn').addEventListener('click', function() {
    // Lấy dữ liệu từ ô nhập và chuyển về dạng chữ thường, bỏ khoảng trắng thừa
    const inputValue = document.getElementById('confirmInput').value.trim().toLowerCase();

    // Danh sách giá trị được cho phép
    const allowedValues = ["ebee", "ny", "ngy", "vk", "mẹ", "phong thư nhỏ"];

    if (allowedValues.includes(inputValue)) {
        // Nếu giá trị hợp lệ, ẩn modal xác nhận và hiển thị nội dung chính
        document.getElementById('confirmModal').classList.add('hidden');
        document.getElementById('mainContent').classList.remove('hidden');
    } else {
        // Nếu không hợp lệ, hiển thị thông báo
        alert("phuhoang không làm nó cho bạn");
    }
});

// Hiển thị nút "Nhấn để xem thư" sau 1.2 giây sau khi trang load
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('revealBtn').classList.remove('hidden');
    }, 1200);
});

// Sự kiện khi nhấn nút "Nhấn để xem thư"
document.getElementById('revealBtn').addEventListener('click', function() {
    this.classList.add('hidden');
    document.getElementById('message').classList.remove('hidden');
});

// Sự kiện cho các nút quà tặng
document.querySelectorAll('.gift-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        const imageSrc = this.getAttribute('data-image');
        document.getElementById('modalImage').src = imageSrc;
        document.getElementById('giftModal').classList.remove('hidden');
    });
});

// Đóng modal quà tặng khi nhấn vào nút đóng
document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('giftModal').classList.add('hidden');
});

// Đóng modal quà tặng khi nhấn vào vùng ngoài modal-content
window.addEventListener('click', function(event) {
    const modal = document.getElementById('giftModal');
    if (event.target === modal) {
        modal.classList.add('hidden');
    }
});
