// Cach 1: Bat su kien truc tiep tu phan tu html 
// const  show = () =>{
//     alert('Hello My SunShine');
// }

// Cach 2: Su dung addEventListener() nen dung

// B1: Truy cap phan tu trong dom
let submitBtnForm = document.querySelector(".btn-submit");
// console.log(submitBtnForm);

/* B2: gan su kien nguoi dung click thuc thi hien thi thong bao voi noi dung "Submit Form"
- Chu y: Trong su kien them vao bo tu on chi con click cac truong hop khac tuong tu.
*/
// submitBtnForm.addEventListener("click", () =>{
//     alert("Submit Form");
// });
const handleSubmit = () =>{
    alert("Submit Form");
}

const handleDbColor = () =>{
    // Doi mau background button
    submitBtnForm.style.backgroundColor = "red";
    submitBtnForm.style.color = "white";
}
submitBtnForm.addEventListener("click", handleSubmit);
submitBtnForm.addEventListener("mouseout", handleDbColor);