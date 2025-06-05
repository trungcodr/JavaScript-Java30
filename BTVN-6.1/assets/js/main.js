const counter = document.querySelector("#counter");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

// console.log(nextBtn);

const handleNextBtn = () =>{
    let currentValue = parseInt(counter.innerHTML);
    currentValue += 1;
    counter.innerHTML = currentValue;
    updateColorCounter();
}
// handleNextBtn();

nextBtn.addEventListener("click",handleNextBtn);

const handlePrevBtn = () =>{
    let currentValue = parseInt(counter.innerHTML);
    currentValue -= 1;
    counter.innerHTML = currentValue;
    updateColorCounter();
}

prevBtn.addEventListener("click",handlePrevBtn);

const updateColorCounter = () =>{
    let currentValue = parseInt(counter.innerHTML);
    if(currentValue == 0) {
        counter.style.color = "#333333";
    }
    else if(currentValue > 0) {
        counter.style.color = "green";
    }
    else{
        counter.style.color = "red";
    }
}