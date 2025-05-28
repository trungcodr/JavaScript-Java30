// Tao object
// const product = {
//     title:"San pham i",
//     price:200000,
//     rating: 900
// };
// console.log(product);

// Cach 1 it su dung ==> hoc de biet
// console.log(product["price"]);

// Cach 2 nen su dung
// console.log(product.rating);

// 3.Gan gia tr
// product.rating = 300;
// console.log(product);

// 4.Them phan tu moi
// product.discount = 10;
// console.log(product);

// 5.Xoa phan tu
// delete product.discount;
// console.log(product);

// 6.Cac phuong thuc voi mang

// 6.1 Duyet mang voi map()
// const array = [1,2,3,4,5];
// array.map((value,_) => {
//     console.log(value);
// });

// const array_1 = ["Nho","Cam","Oi","Tao"];
// array_1.map((item,index) =>{
//     console.log(item);
// });

// 6.2 Phuong thuc filter()
// const array_2 = [1,2,3,4,5,6,7]; // Tim so chan ~ so le
// const iphone = array_2.filter((value,index) =>{
//     return value % 2 == 0;
// });
// console.log(iphone);

// 6.3 Phuong thuc reduce()
// const array_3 = [100,22,33,4];

// const result = array_3.reduce((total, currentValue) =>{
//     // console.log("Bien tich luy sau moi vong, ban dau la ",total);
//     // console.log(currentValue);
//     return total + currentValue;
// },0); //dependencies
// console.log(result);

// 6.4 Phuong thuc find
// const array_4 = [
//   {
//     id: 1,
//     name: "Trung",
//   },
//   {
//     id: 2,
//     name: "Kiet",
//   },
//   {
//     id: 3,
//     name: "Thanh",
//   },
//   {
//     id: 4,
//     name: "Kiet",
//   },
//   {
//     id: 5,
//     name: "Thinh",
//   },
//   {
//     id: 6,
//     name: "Hieu",
//   },
// ];
// const result = array_4.find((value,_) =>{
//     // console.log(value.id);
//     return value.name == "Kiet";
// });
// console.log(result);

// 6.5 Phuong thuc findIndex()

// 7.Mot so phuong thuc cua object
// const student = {
//     name:"Ngueyn vab A",
//     age: 20,
//     email:"ngueynvan1@gmail.com"
// };
// console.log(student.age);



