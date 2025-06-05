let colors = ["#3498db", "#9b59b6", "#e74c3c", "#2c3e50", "#d35400"];

const boxesContainer = document.querySelector(".boxes");
const pointsSpan = document.querySelector(".points");
const moreBoxesBtn = document.querySelector("#btn");

let totalBoxes = 0; // Biến theo dõi tổng số hộp

// Hàm cập nhật số lượng hộp hiển thị

const updatePoints = () => {
  pointsSpan.textContent = totalBoxes;
};

// Hàm tạo và thêm một hộp màu

const createAndAppendBox = (color) => {
  const box = document.createElement("div");
  box.classList.add("box"); // Thêm class 'box'
  box.style.backgroundColor = color; 
  
  // Xử lý sự kiện khi click vào box: xóa box và giảm số lượng
  const handlerRemove = () => {
    box.remove(); // Xóa box khỏi DOM

    totalBoxes--; // Giảm tổng số hộp

    updatePoints(); // Cập nhật hiển thị
  };

  box.addEventListener("click", handlerRemove);

  boxesContainer.appendChild(box);

  totalBoxes++; // Tăng tổng số hộp khi thêm box
};

// Hàm để render nhiều hộp

const renderBoxes = (numToRender) => {
  for (let i = 0; i < numToRender; i++) {
    // Lấy màu từ mảng colors, lặp lại màu nếu đã hết

    const color = colors[i % colors.length];

    createAndAppendBox(color);
  }

  updatePoints(); // Cập nhật hiển thị sau khi render xong
};

// 1. Render 5 hộp ban đầu khi trang tải

renderBoxes(5);

// 2. Xử lý sự kiện click cho nút "More boxes"

const handleMoreBox = () => {
  renderBoxes(5); // Thêm 5 hộp nữa khi click
};

moreBoxesBtn.addEventListener("click", handleMoreBox);
