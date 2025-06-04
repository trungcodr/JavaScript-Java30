// 1. Xoa phan tu trong DOM

// b1: Truy cap phan tu trong DOM
// const children = document.querySelector(".children");
// const parent = document.querySelector(".parent");

// b1: Xoa phan tu children trong DOM
// parent.removeChild(children);
// console.log(children.parentNode);
// children.parentNode.removeChild(children);

// 2. Thay the phan tu trong DOM

// b1: Truy cap phan tu trong DOM
let child_1 = document.querySelector(".child-1");
let parent_1 = document.querySelector(".parent-1");

// b2: Tao the chua noi dung can thay the
let java30 = document.createElement("h1");
// console.log(java30);
java30.innerHTML = "Ngo Minh Nguyet";
// console.log(java30);

/* Thay the noi dung*/
parent_1.replaceChild(java30, child_1);