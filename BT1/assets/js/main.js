const getStringHasMaxLength = (stringArr) =>{
    if(!stringArr || stringArr.length === 0) {
        return [];
    }
    // tim cac chuoi co do dai lon nhat
    let maxLength = 0;
    stringArr.forEach(str => {
        if(str.length > maxLength) {
            maxLength = str.length;
        }
    });
    // Cho tat cac chuoi lon nhat vao trong 1 mang
    const longestString = [];
    stringArr.forEach(str => {
        if(str.length === maxLength) {
            longestString.push(str);
        }
    });
    return longestString;
} 

const result1 = getStringHasMaxLength(['aba', 'aa', 'ad', 'c', 'vcd']);
console.log(result1); // Output: ['aba', 'vcd']