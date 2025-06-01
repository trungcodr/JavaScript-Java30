const grades = [
 {name: 'John', grade: 8, sex: 'M'},
 {name: 'Sarah', grade: 12, sex: 'F'},
 {name: 'Bob', grade: 16, sex: 'M'},
 {name: 'Johnny', grade: 2, sex: 'M'},
 {name: 'Ethan', grade: 4, sex: 'M'},
 {name: 'Paula', grade: 18, sex: 'F'},
 {name: 'Donald', grade: 5, sex: 'M'},
 {name: 'Jennifer', grade: 13, sex: 'F'},
 {name: 'Courtney', grade: 15, sex: 'F'},
 {name: 'Jane', grade: 9, sex: 'F'}
]
console.log(grades);

// Bai 1: Viết function tính thứ hạng trung bình của cả lớp
const averageRank = (grades) => {
    let totalGrades = 0;
    grades.forEach((a,_) => {
        totalGrades += a.grade;
    });
    return totalGrades / grades.length;
}
const showAverageRank = averageRank(grades);
console.log("Thu hang trung binh cua ca lop la: " + showAverageRank);

// Bai 2: Viết function tính thứ hạng trung bình của nam trong lớp
const averageRankMale = (grades) => {
    const maleGrades = grades.filter(student => student.sex === "M");
    let totalMaleGrades = 0;

    maleGrades.forEach ((student,_) =>{
        totalMaleGrades += student.grade;
    });
    return totalMaleGrades / maleGrades.length;
}
const showAverageRankMale = averageRankMale(grades);
console.log("Thu hang trung binh cua hoc sinh nam la: " + showAverageRankMale);

// Bai 3: Viết function tính thứ hạng trung bình của Nữ trong lớp
const averageRankFemale = (grades) => {
    const femaleGrades = grades.filter(student => student.sex === "F");
    let totalFemaleGrades = 0;

    femaleGrades.forEach ((student,_) =>{
        totalFemaleGrades += student.grade;
    });
    return totalFemaleGrades / femaleGrades.length;
}
const showAverageRankFemale = averageRankFemale(grades);
console.log("Thu hang trung binh cua hoc sinh nu la: " + showAverageRankFemale);

// Bai 4:Viết function tìm học viên Nam có thứ hạng cao nhất trong lớp
const maxRankMale  = (grades) => {
    const maleGrades = grades.filter(student => student.sex === "M");
    let maxMaleGrades = maleGrades[0];

    maleGrades.forEach((student,_) =>{
        if(student.grade < maxMaleGrades.grade) {
            maxMaleGrades = student;
        }
    });
    return maxMaleGrades;
}
const showMaxRankMale = maxRankMale(grades);
console.log(`Hoc vien nam co thu hang cao nhat trong lop la ${showMaxRankMale.name}, voi thu hang: ${showMaxRankMale.grade}`);

// Bai 5: Viết function tìm học viên Nữ có thứ hạng cao nhất trong lớp
const maxRankFemale  = (grades) => {
    const femaleGrades = grades.filter(student => student.sex === "F");
    let maxFemaleGrades = femaleGrades[0];

    femaleGrades.forEach((student,_) =>{
        if(student.grade < maxFemaleGrades.grade) {
            maxFemaleGrades = student;
        }
    });
    return maxFemaleGrades;
}
const showMaxRankFemale = maxRankFemale(grades);
console.log(`Hoc vien nu co thu hang cao nhat trong lop la ${showMaxRankFemale.name}, voi thu hang: ${showMaxRankFemale.grade}`);

// Bai 6: Viết function tìm học viên Nam có thứ hạng thấp nhất trong lớp
const minRankMale  = (grades) => {
    const maleGrades = grades.filter(student => student.sex === "M");
    let minMaleGrades = maleGrades[0];

    maleGrades.forEach((student,_) =>{
        if(student.grade > minMaleGrades.grade) {
            minMaleGrades = student;
        }
    });
    return minMaleGrades;
}
const showMinRankMale = minRankMale(grades);
console.log(`Hoc vien nam co thu hang thap nhat trong lop la ${showMinRankMale.name}, voi thu hang: ${showMinRankMale.grade}`);

// Bai 7: Viết function tìm học viên Nữ có thứ hạng thấp nhất trong lớp
const minRankFemale  = (grades) => {
    const femaleGrades = grades.filter(student => student.sex === "F");
    let minFemaleGrades = femaleGrades[0];

    femaleGrades.forEach((student,_) =>{
        if(student.grade > minFemaleGrades.grade) {
            minFemaleGrades = student;
        }
    });
    return minFemaleGrades;
}
const showMinRankFemale = minRankFemale(grades);
console.log(`Hoc vien nu co thu hang thap nhat trong lop la ${showMinRankFemale.name}, voi thu hang: ${showMinRankFemale.grade}`);

// Bai 8: Viết function thứ hạng cao nhất của cả lớp
const maxRank = (grades) => {
    let maxGrades = grades[0];
    grades.forEach((student,_) =>{
        if(student.grade < maxGrades.grade) {
            maxGrades = student;
        }
    });
    return maxGrades;
}
const showMaxRank = maxRank(grades);
console.log(`Hoc vien co thu hang cao nhat trong lop la ${showMaxRank.name}, voi thu hang: ${showMaxRank.grade};`)

// Bai 9: Viết function thứ hạng thấp nhất của cả lớp
const minRank = (grades) => {
    let minGrades = grades[0];
    grades.forEach((student,_) =>{
        if(student.grade > minGrades.grade) {
            minGrades = student;
        }
    });
    return minGrades;
}
const showMinRank = minRank(grades);
console.log(`Hoc vien co thu hang thap nhat trong lop la ${showMinRank.name}, voi thu hang: ${showMinRank.grade};`)

// Bai 10: Viết function lấy ra danh sách tất cả học viên Nữ trong lớp
const listFemale = (grades) =>{
    const femaleGrades = grades.filter(student => student.sex === "F");
    return femaleGrades;
}
const showListFemale = listFemale(grades);
console.log(showListFemale);


// Bai 12: Viết function sắp xếp thứ hạng học viên theo chiều giảm dần
const arangeGrades = (grades) =>{
    grades.sort((a,b) => b.grade - a.grade);
}
console.log(grades)

// bai 13: Viết function lấy ra học viên Nữ có tên bắt đầu bằng “J”
const getNameFemale = (grades) =>{
    return grades.filter(student => student.sex === "F" && student.name.startsWith('J'))
}

const femaleStudent = getNameFemale(grades);
femaleStudent.forEach(student => {
    console.log(`Cac hoc vien nu co ten bat dau bang chu 'J' la: ${student.name}`);
});

// Bai 14:
const getTopFiveStudent  =(grades) =>{
    const arr = grades.slice();
    arr.sort((a, b) => a.grade - b.grade);
    return arr.slice(0,5);
}
const topFive = getTopFiveStudent(grades);
console.log("Top 5 hoc vien co thu hang cao nhat: ")
topFive.forEach(student => {
    console.log(`${student.name} - Grade: ${student.grade}`)
});