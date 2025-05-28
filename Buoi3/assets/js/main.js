// // 1.Object Thuan tuy
// console.log("1.Object thuan tuy")
// const userName = {
//     name:"Nguyen Thanh Trung",
//     age: 20
// }
// console.log(userName);
// console.log("-------------------------------------------");

// // 2.Values Type
// let a = 1;
// let b = a;
// console.log(a);
// console.log(b = b + 2);
// console.log("-------------------------------------------");

// // 3.References Types
// let array_1 = [1,2,3,4,5];

// let array_2 = array_1;
// //Them 1 phan tu vao mang bang 2 cach
// // Cach 1: TRuy cap phan tu can them chi so => gan gia tri moi
// // array_2[5] = 7;
// // Cach 2: Su dung ham push trong JS(mot ham co san)
// array_2.push(7);

// console.log("array_1: " ,array_1);
// console.log("array_2: ",array_2);
// console.log("-------------------------------------------");

// // 4.Duyet mang
// const array_3 = [2,3,4,6,7,9];
// for(let i = 0; i < array_3.length; i++) {
//     console.log(array_3[i]);
// }
// console.log("-------------------------------------------");

// //Bai 1
// const array_4 = [1,2,4,5,6];
// let sum = 0;
// for(let i = 0; i < array_4.length;i++) {
//      sum += array_4[i]
// }
// console.log(sum);

// let sumOid = 0;
// for(let i = 0; i < array_4.length;i++) {
//     if(array_4[i] % 2 != 0) {
//         sumOid += array_4[i]
//     } 
// }
// console.log(sumOid);
// console.log("-------------------------------------------");

// Su dung for-each trong duyet mang
let result = 0;
const array5 = [1,2,3,4,5];
// Cach 1 theo ES5 --> Hoc de biet
array5.forEach(function (a,_) {
    // a,b chi la cach dat ten
    // a: gia tri cua mang -> tu dong tra ve
    // b: chi so cua mang -> tu dong tra ve
    // console.log("Gia tri cua mang: " ,a)
    // console.log("Chi so cua mang: ", b);
    result += a;
});
console.log("Tong cua mang array5:" , result);
let sum = 0;
// Cach 2 theo ES6 --> Hoc de lam du an
array5.forEach((a,b) => {
    // console.log("Gia tri cua mang: ", a);
    sum += a;
});
console.log("Tong cua mang array5:", sum);

// 6.Duyet mang voi for...of... --> rat it lam

