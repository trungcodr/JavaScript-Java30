/* Khai niem dong bo trong js 
- Thuc hien cac cong viec tuan tu, xong cong viec nay den cong viec khac.
- Tong thoi gian: tong thoi gian cac cong viec cong lai voi nhau.
*/

/* Khai niem bat dong bo trong js
- Thuc hien cac cong viec cung 1 luc.
- Tong thoi gian: bang cong viec dai nhat.
===========================CHU Y==================================
- Trong JS => chuong trinh mac dinh chay bat dong bo
-Neu bi loi, lap tuc dung chuong trinh
*/
// JS co san 1 FN setTimeout() -> quy dinh thoi gian thuc hien logic (pending)
// const fnA = () =>{
//     setTimeout(() => {
//         console.log("Ham settime out");

//     },3000); //Thoi gian thuc hien cong viec, tinh theo ms
// }

// const fnB = () =>{
//     setTimeout(() => {
//         console.log("thuc hien cong viec 2");

//     },5000); //Thoi gian thuc hien cong viec, tinh theo ms
// }
// fnA();
// fnB();

// Tong thoi gian chay hai fn la 5s

/* Callback Function
- Callback la mot ham se duoc thuc hien sau khi 1 ham khac da duoc thuc hien xong
=> ban chat giup cho js thuc hien cong viec mot cach tuan tu
*/

/*
- Input 3 cong viec: 
+ lam bai tap (3s)
+ Di da bong (5s)
+ Xem ti vi (6s)

*/

// Mac dinh js
// const work1 = () => {
//   console.log("Work 1 run: ");

//   setTimeout(() => { // <--- Gọi setTimeout
//     console.log("Lam bai tap");
//   }, 3000);
// };

// const work2 = () => {
//   console.log("Work 2 run: "); // Đã thay đổi thành Work 2 để mô tả rõ hơn

//   setTimeout(() => { // <--- Gọi setTimeout
//     console.log("Di da bong");
//   }, 5000);
// };

// const work3 = () => {
//   console.log("Work 3 run:");
//   setTimeout(() => { // <--- Gọi setTimeout
//     console.log("Di tam");
//   }, 6000);
// };
// //Thuc thi
// work1();
// work2();
// work3();

// Su dung Callback Function => bat dong bo ve dong bo. (cach cu khong dung bay gio)
// const work1 = (name,Callback) => {
//     console.log("Bat dau thuc hien:")
//     setTimeout(() =>{
//         console.log(name);
//         Callback();
//     },3000);
// }

// const work2 = (name,Callback) =>{
//     console.log('Cong viec 2:...');
//     setTimeout(() =>{
//         console.log(name);
//         Callback();
//     },5000);
// }

// const work3 = (name) =>{
//     console.log("Cong viec 3....")
//     setTimeout(() =>{
//         console.log(name)
//     },6000);
// }
// work1("Thuc hien cong viec 1! Xong", () =>{
//     work2("Thuc hien cong viec da bong. Xong", () =>{
//         work3("thuc hien cong viec di tam. Xong");
//     });
// });

/* Su dung promise => bat dong bo ve dong bo (Giai quyet bai toan Callback Function)*/
// let money = 40000;
// let priceIphone = 35000;
// let priceApple = 5000;
// // Khai bao promise
// let buyIphone = new Promise((resolve, reject) => {
//     // console.log(resolve);
//     if(money > 35000) {
//         resolve("Mua iphone 17promax")
//     } else{
//         reject("Code them du an...")
//     }
// });

// let buyApple = new Promise((resolve, reject) => {
//     if(money - priceIphone - priceApple >= 0) {
//         resolve("Mua luon apple watch");
//     } else{
//         reject("Khong du tien mua :((");
//     }
// });

// // thuc thi promise
// buyIphone.then((result) =>{
//     console.log("Ket qua tra ve:",result)
//     return buyApple;
// }).catch((err) =>{
//     console.log(err);
// })

// buyApple.then((respond)=>{
//     console.log("Ket qua tra ve:", respond)
    
// }).catch((err1) =>{
//     console.log(err1);
// })

// Async /Await

// Async dat truoc 1 fn -> fn tu binh thuong -> promise
const hello = async() =>{
    return "hello";
}
// console.log(hello());

hello()
    .then((abx) =>{
        console.log(abx);
    })
    .catch((err) =>{
        console.log(err);
    })
