const btn = document.querySelector("#btn");
const image = document.querySelector("#image");
const select = document.querySelector("#breed-list");

// Vừa load trang phải gọi API để render danh sách breed
// API : https://dog.ceo/api/breeds/list/all

 
const getBreedList = async() => {
    try{
        // Gọi API để lấy danh sách giống loài
        let res = await axios.get("https://dog.ceo/api/breeds/list/all");
        // Sau khi có data thì hiển thị kết quả trên giao diện
        renderBreed(res.data.message);
    } catch(error){
        console.log("Lỗi khi lấy danh sách giống chó:",error);
    }
}

const loadImage = async (breed) => {
    try {
        const res = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);
        image.src = res.data.message;
    } catch (error) {
        console.log("Lỗi khi tải ảnh:", error);
    }
};

const renderBreed = (breeds) =>{
    // Duyệt qua object breeds -> tạo thẻ option -> gắn vào DOM
    for(let breed in breeds) {
        const option = document.createElement("option");
        option.value = breed;
        option.textContent = breed;
        select.appendChild(option);
    }
    // Sau khi render xong, hiển thị ảnh giống đầu tiên
    if (select.options.length > 0) {
        const firstBreed = select.options[0].value;
        loadImage(firstBreed);
    }
}

btn.addEventListener("click", () => {
    const selectedBreed = select.value;
    loadImage(selectedBreed);
});

getBreedList();

 
