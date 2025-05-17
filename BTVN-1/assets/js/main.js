// Bai 1
function inputMark(mark) {
    if(mark >= 85) {
        console.log('A');
    } else if(70 <= mark && mark < 85) {
        console.log('B');
    } else if(40 <= mark && mark < 70) {
        console.log('C')
    } else {
        console.log('D');
    }
}
inputMark(90);

// Bai 2
function checkNumberBigger(a ,b) {
    if (a > b) {
        console.log(a);
    } else {
        console.log(b);
    }
}

checkNumberBigger(2,4);

// Bai 3
function checkNumber(number) {
    if(number > 0) {
        console.log(`${number} la so duong!`)
    } else{
        console.log(`${number} la so am!`)
    }
}
checkNumber(-1.5);
checkNumber(10);


 //Bai 4
 function checkNumber4(num) {
    if( num % 2 == 0) {
        console.log(`${num} la so chan!`);
    } else{
        console.log(`${num} la so le!`);
    }
 }
 checkNumber4(4.6);

 //Bai 5
function checkNumber5(num) {
    if(num % 3 == 0 && num % 5 ==0 ) {
        console.log(`${num} chia het cho ca 3 va 5`);
    } else{
        console.log(`${num}  khong chia het cho ca 3 va 5`);
    }
}
checkNumber5(15);
checkNumber5(1);
checkNumber5(10);


//Bai 6
function checkNumber6(a,b,c) {
    const sum = a + b;
    if(c == sum ) {
        console.log(`${c} bang ${a} cong ${b}`)
    } else {
        console.log(`${c} khong bang ${a} cong ${b}`);
    }
}

// const result = checkNumber6(3,5,8);
// console.log(result);
checkNumber6(0,1,2);
checkNumber6(1,4,5);