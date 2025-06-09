// http://127.0.0.1:5500/detail.html?id=6

// De biet trang nao la trang detail => get Id
let params = new URLSearchParams(document.location.search);

let idDetail = params.get("id");

// Call Api theo fetch()
const getApi = async() =>{
    try {
        const respond = await fetch(`https://fakestoreapi.com/products/${idDetail}`);
        const result = await respond.json();
        // console.log(result);
        renderData(result);
    } catch (error) {
        console.log(error);
    }
}

getApi();

// show data to ui
const renderData = (data) =>{
    // console.log(data);
    let detailHTML = document.querySelector(".detail-js");
    // console.log(detailHTML);
    detailHTML.innerHTML = 
    `
        <img src = "${data.image}">
        <h2>${data.title}</h2>
        <h4>${data.price}</h4>

    `
}
