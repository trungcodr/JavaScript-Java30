// Tao object
const product = {
    title:"San pham i",
    price:200000,
    rating: 900
};
console.log(product);

// Cach 1 it su dung ==> hoc de biet
console.log(product["price"]);

// Cach 2 nen su dung
console.log(product.rating);

// 3.Gan gia tr
product.rating = 300;
console.log(product);

// 4.Them phan tu moi
product.discount = 10;
console.log(product);

// 5.Xoa phan tu
delete product.discount;
console.log(product);

// 6.Cac phuong thuc voi mang

// 6.1 Duyet mang voi map()
const array = [1,2,3,4,5];
array.map((value,_) => {
    console.log(value);
});