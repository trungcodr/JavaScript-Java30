const select = document.querySelector("#breed-list");
const subBreedBtn = document.querySelector("#sub-btn");
const subBreedResult = document.querySelector(".sub-breed-result");
const image = document.querySelector("#sub-image");

// Vừa load trang phải gọi API để render danh sách breed
// API : https://dog.ceo/api/breeds/list/all

const getBreedList = async () => {
  try {
    // Gọi API để lấy danh sách giống loài
    let res = await axios.get("https://dog.ceo/api/breeds/list/all");
    // Sau khi có data thì hiển thị kết quả trên giao diện
    renderBreed(res.data.message);
  } catch (error) {
    console.log("Lỗi khi lấy danh sách giống chó:", error);
  }
};

const renderBreed = (breeds) => {
  // Duyệt qua object breeds -> tạo thẻ option -> gắn vào DOM
  for (let breed in breeds) {
    const option = document.createElement("option");
    option.value = breed;
    option.textContent = breed;
    select.appendChild(option);
  }
};

// Xu ly khi bam nut Get Sub Breed
const handleGetSubBreed = async () => {
  const selectedBreed = select.value;
  const url = `https://dog.ceo/api/breed/${selectedBreed}/list`;
  try {
    const res = await axios.get(url);
    const subBreeds = res.data.message;

    // Xu ly hien thi
    let html = `<h1>Sub Breeds List</h1><ul>`;

    if (subBreeds.length === 0) {
      html += `<li>Không có sub breed</li>`;
    } else {
      html += subBreeds
        .map(
          (sub) =>
            `<li><a href="#" class="sub-item" data-breed="${selectedBreed}" data-sub="${sub}">${sub}</a></li>`
        )
        .join("");
    }

    html += `</ul>`;

    subBreedResult.innerHTML = html;

    document.querySelectorAll(".sub-item").forEach((item) => {
      item.addEventListener("click", async () => {
        const breed = item.dataset.breed;
        const sub = item.dataset.sub;
        const imgUrl = `https://dog.ceo/api/breed/${breed}/${sub}/images/random`;

        try {
          const imgRes = await axios.get(imgUrl);
          image.src = imgRes.data.message;
        } catch (error) {
          console.log("Lỗi khi tải ảnh sub breed:", error);
        }
      });
    });
  } catch (error) {
    console.log("Lỗi khi lấy sub breed:", error);
  }
};

subBreedBtn.addEventListener("click", handleGetSubBreed);

getBreedList();
