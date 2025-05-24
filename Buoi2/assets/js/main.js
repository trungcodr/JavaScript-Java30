//Khai bao array rong
let arr =  [];

//Khai bao array
let number = [];

//Gan gia tri cho cac phan tu cua array thong qua chi so
number[0] = 1;
number[1] = "Thanh Trung";
number[2] = true;

//Khai bao va khoi tao gia tri cho array
let myArr = [1,2,3,4,"Thanh Trung", true];

console.log(myArr[4]);
console.log(myArr.length - 2);

//Cap nhat gia tri moi cho phan tu trong mang
myArr[0] = 10;
console.log(myArr[0]);

// Js cung cap 2 kieu du lieu la primitives va objects
// Primitives bao gom: string, number, boolean, symbols, null, undefined
const number1 = 10;
const bool = false;
const str = "TRung";
const missingObject = null;
const nothing = undefined;

//Objects
//Objects thuan tuy
const user = {
    name: "Trung"
};

const array1 = [11,22,33];

// Function
function sum(a,b) {
    return a + b;
}

// khai bao mang so
let numbers = [1,2,3,4,5];
// Duyet qua mang so va in ra gia tri cua chung
for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
// 2. Tính tổng các giá trị trong mảng
let sumArr = 0;
for (let i = 0; i < numbers.length; i++) {
    sumArr += numbers[i]
}
console.log(`Tong cua cac gia tri trong mang la: ${sumArr}`);

// 3.Tinh tong cac gia tri le cua mang
let sumOid = 0;
for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 != 0) {
        sumOid += numbers[i];
    }
}
console.log(`Tong cac gia tri le trong mang la: ${sumOid}`);

//Bai 1
// function findMax(arr1) {
//     let max = arr1[0];
//     for(let i = 0; i < arr1.length; i++) {
//         if(arr1[i] > max) {
//             max = arr1[i];
//         }
//     }
//     return max;
// }
// const mang1 = [1,2,3,4,5];
// console.log(`So lon nhat trong mang ${mang1} la:`, findMax(mang1));

//Bai 2
// function findMin(arr2) {
//     let min = arr2[0];
//     for(let i = 0; i < arr2.length; i++) {
//         if (arr2[i] < min) {
//             min = arr[i];
//         }
//     }
//     return min;
// }
// const mang2 = [1,2,3,4,5];
// console.log(`So nho nhat trong mang ${mang2} la:`, findMin(mang2));

//Bai 3
// function laySoDuKhiChia2(arr3) {
//     const mangSoDu = [];
//     for(let i = 0; i < arr3.length; i++) {
//         const soHienTai = arr3[i];
//         const soDu = soHienTai % 2;
//         mangSoDu.push(soDu);
//     }
//     return mangSoDu;
// }
// const mangGoc1 = [4, 2, 5, 6, 2, 7];
// const mangKetQua1 = laySoDuKhiChia2(mangGoc1);
// console.log(`Mảng gốc: [${mangGoc1}] => Mảng số dư: [${mangKetQua1}]`);

//Bai 4
// function saoChepChuoiRepeat(arr4) {
//     return arr4.repeat(10);
// }

// console.log(saoChepChuoiRepeat('a'));

//Bai 5
// function saoChepVanNganCach(arr5) {
//     const chuoiLapCoGachNgang = (arr5 + "-").repeat(10);
//     return chuoiLapCoGachNgang.slice(0,-1);
// }
// console.log(saoChepVanNganCach('a'));

//Function ES6
const hi = () => {
    console.log("Hi 500 ae");
}
hi();

//Phân biệt tham số và đối số
function counter () {
    console.log(100);
}

// Các function thường gặp
/* Function có tham số, ko co gia tri tra ve -> rat it su dung 
    Gia tri tra ve return
*/
function sayHello(name) {
    console.log(`hello 500 ae ${name}`);
}
sayHello("web41");

/* Function có tham số, co gia tri tra ve -> rat hay su dung 
    Gia tri tra ve return
*/
function sum(a,b) {
    const result = a+b;
    return result;
}
console.log(sum(1,2))

// 4. Cau lenh if
// = : Gan gia tri
// ==: So sanh gia tri
// === : So sanh gia tri + kieu gia tri
let money = 30000000;
if (money >= 25000000) {
    console.log("Mua Iphone");
}

let money1 = 10000;
switch(money1) {
    case 12000:
        console.log("Cafe Sua da");
        break;
    case 10000:
        console.log("Ca phe da.");
        break;
    case 8000:
        console.log("String dau.");
        break;
    case 2000:
        console.log("Tra da.");
        break;
}

//First Class Function
// const count = function sum(a,b) {
//     return a+b;
// }
// console.log(count(3,4));

//Su dung ham lam doi so cho ham khac
// function sum(a,b) {
//     return a+b;
// }
// console.log(sum(3,4));

// function result (c,d) {
//     return c+d;
// }
// console.log(result(sum(3,4),5));

//ES5 Arrow Function
const fnBuy = (price) => {
    console.log(price);
}
fnBuy("150k");
