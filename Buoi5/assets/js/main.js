// Truy cap phan tu theo id
// const title_1 = document.getElementById("title-1");
// console.log(title_1);

// Truy cap phan tu theo class
// const title_2 = document.getElementsByClassName("title-2");
// console.log(title_2);

// Truy cap theo tag name
// const title_3 = document.getElementsByTagName("h3");
// console.log(title_3);

// Truy cap phan tu theo QuerrySelector
// Truyen vao cach dat ten cua the 
// Ket qua tra ve la gia tri dau tien no tim thay ~ getElementById
// Nen nho de su dung cho du an
// const title_4 = document.querySelector(".title-4");
// console.log(title_4);

// Truy cap phan tu theo QuerrySelectorAll() ~ class , tag
// const title_5 = document.querySelectorAll(".title-5");
// console.log("",title_5);

// 3. Quan he giua cac Node trong DOM

// 3.1 Truy cap phan tu cha theo phan tu con
// b1: Truy cap vao phan tu con
const param_1 = document.querySelector(".param-1");
// console.log(param_1);

// b2: Truy cap nguoc vao cha thong qua con
const parentParam_1 = param_1.parentNode;
// console.log(parentParam_1);

// 3.2  TRuy cap phan tu con thong qua phan tu hien tai
// b1: truy cap vao phan tu hien tai can lay phan tu con
let box_2 = document.querySelector(".box-2");
// console.log(box_2);

let chilBox_2 = box_2.childNodes;
// console.log("",chilBox_2);

// 4. lay noi dung cho phan tu
// b1: Truy cap phan tu can lay noi dung
let para_3 = document.querySelector(".para-3");
// console.log(para_3);

// b2: lay noi dung
let content = para_3.innerHTML;
// console.log(content);

// b3: thay the noi dung khac
para_3.innerHTML = "Java3000000";

// 5.Thay doi thuoc tinh cua phan tu
// b1: truy cap phan tu can thay doi
let para_4 = document.querySelector(".para-4");

// b2: them thuoc tinh
para_4.style.color = "red";

// 6.Them phan tu DOM

// Them phan tu vao phan tu cha cua no voi appendChild()
// b1: dung js tao ra the ao (khong co noi dung)
// b2: sau khi co the ao tu js tao ra --> gan noi dung cho no
// b3: xac dinh vi tri minh can them

/*
    y/c them 1 doan van moi vao trong box-3
*/ 
let box_3 = document.querySelector(".box-3");
// console.log(box_3);
let java30 = document.createElement("p");
// console.log(java30);

java30.innerHTML = "Anh nho em qua!! :((";
// console.log(java30);
box_3.appendChild(java30);


