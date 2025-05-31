const data = [
    {
        id: 1,
        name: "Ao Polo",
        imgSrc: "https://product.hstatic.net/200000690725/product/thiet_ke_chua_co_ten__4__afd7b6bf154041178b9bbcc8e40ce71b_master.png",
    },
    {
        id: 2,
        name: "Quan Short",
        imgSrc:"https://product.hstatic.net/200000690725/product/thiet_ke_chua_co_ten__4__afd7b6bf154041178b9bbcc8e40ce71b_master.png"
    },
    {
        id:3,
        name: "Ao balo",
        imgSrc:"https://product.hstatic.net/200000690725/product/bt900_afe890ccab214119b1fcb9b0340878f9_master.jpg"
    }
];
// console.log(data)
// b1: Truy cap phan tu
let rowProductJS = document.querySelector(".row-product-js");
console.log(rowProductJS);
// b2: Dung vong lap -> lap qua mang data
let productHTML = ``;
data.forEach((item,_) =>{
    console.log(item);
    productHTML += `<div class="col">
                
                 <div class="product-item">
                    <img src=${item.imgSrc} alt="Anh 1">
                    <h3>${item.name}</h3>
                 </div>
            </div>`
    
});
// console.log(productHTML);

// b3: in du lieu len giao dien
rowProductJS.innerHTML = productHTML;