// b1:Truy cap phan tu
let buttonChat = document.querySelector(".btn-chat");
// console.log(buttonChat);
let close = document.querySelector(".close");
// console.log(close);
let contentHTML = document.querySelector(".content");
// b2: click o chat mo ro popup
const handleOpenChat = () =>{
    contentHTML.style.bottom = "100px";
    contentHTML.style.transition = "bottom 0.3s";

}

const handleCloseChat = () =>{
    contentHTML.style.bottom = "-500px";
    

}
buttonChat.addEventListener("click",handleOpenChat);
close.addEventListener("click", handleCloseChat);