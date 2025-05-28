//Truy cap phan tu theo id - hoc de biet
let title1 = document.getElementById("title-1");
// console.log(title1);
title1.style.color = "red";

// Truy cap phan tu theo class
const title_2 = document.getElementsByClassName("title_2");
for(const element of title_2) {
    element.style.backgroundColor = "green";
}

// Truy cap thong qua Tag Name
const tagH3 = document.getElementsByTagName("h3");
console.log(tagH3);