const btn = document.querySelector("#btn");
const image = document.querySelector("#image");

const handleRandomImage = async() => {
    try{
        // Goi API lay anh random cua dog
        let res = await axios.get("https://dog.ceo/api/breeds/image/random");

        // Gan URL cho the image
        image.src = res.data.message;
    } catch(error) {
        console.log(error);
    }
}

btn.addEventListener("click", handleRandomImage);