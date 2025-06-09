const p = document.getElementById("content");
let text = p.innerText;


// Tách từ và highlight nếu >= 5 ký tự
const highlighted = text
  .split(/\s+/)
  .map((word) => {
    const cleanWord = word.replace(/[^\w\u00C0-\u1EF9]/g, ""); // bỏ ký tự đặc biệt trừ tiếng Việt
    if (cleanWord.length >= 5) {
      return `<span style="background-color: yellow">${word}</span>`;
    }
    return word;
  })
  .join(" ");

// Gán lại HTML cho đoạn văn
p.innerHTML = highlighted;

// Thêm link hiển thị text “facebook” link đến trang facebook.com ở sau thẻ p
const fbLink = document.createElement("a");
fbLink.href = "https://facebook.com";
fbLink.textContent = "facebook";
fbLink.target = "_blank";
p.insertAdjacentElement("afterend", fbLink);

// Đếm số từ có trong đoạn văn. Tạo 1 thẻ div để hiển thị số từ
const wordCount = text.trim().split(/\s+/).length;
const countDiv = document.getElementById("wordCount");
countDiv.textContent = `Số từ trong đoạn văn: ${wordCount}`;
// Thay thế dấu ',' và '.' trong HTML đã được gán
p.innerHTML = p.innerHTML.replace(/,/g, "🤔").replace(/\./g, "😲");

