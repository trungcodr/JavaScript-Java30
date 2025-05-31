// Đặt màu văn bản thành #777
const colorText  = document.querySelector("#text");
colorText.style.color = "#8e44ad";

// Đặt kích thước phông chữ thành 2rem
colorText.style.fontSize = "2rem";

// Đặt nội dung HTML thành Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.
colorText.innerHTML = "Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript."

// Sử dụng vòng lặp để đặt màu chữ cho tất cả thẻ li thành màu blue (tạo thẻ ul-li bằng html)
const ulElement = document.querySelector("ul");
const liElement = ulElement.children;

// console.log(colorLI);
for (const element of liElement) {
    element.style.color = "blue";
}

// Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách
const ul = document.querySelector("#list");

for (let i = 8; i <= 10; i++) {
    const li = document.createElement('li'); // Tạo thẻ <li> mới
    li.textContent = `Item ${i}`; // Gán nội dung cho thẻ
    ul.appendChild(li); // Thêm thẻ <li> vào cuối <ul>
}

// Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)
const firtLI = ul.children[0];
firtLI.style.color = "red";

// Sửa background cho thẻ <li> 3 thành màu xanh (background-color)
const thirdLI = ul.children[2];
thirdLI.style.backgroundColor = "green";

// Remove thẻ <li> 4
const fourLI = ul.children[3];
fourLI.remove();

// Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ
const newLI= document.createElement('li');
newLI.textContent = "New Replacement Item";
const referenceLI = ul.children[3];
ul.insertBefore(newLI,referenceLI);