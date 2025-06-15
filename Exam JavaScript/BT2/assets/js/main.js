const users = [
  {
    name: "Bùi Công Sơn",
    age: 30,
    isStatus: true,
  },
  {
    name: "Nguyễn Thu Hằng",
    age: 27,
    isStatus: false,
  },
  {
    name: "Phạm Văn Dũng",
    age: 20,
    isStatus: false,
  },
];

// console.log(users);

// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age > 25 và isStatus = true
const getUser = (users) => {
  const listUser = users.filter(
    (user) => user.age > 25 && user.isStatus == true
  );
  return listUser;
};

console.log("Mảng các user có age > 25 và isStatus = true la:",getUser(users));

// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age tăng dần
const getAgeUser = (users) => {
  const sortedUsers = [];

  // Lặp qua mảng gốc và push từng phần tử vào mảng mới
  users.forEach((user) => {
    sortedUsers.push(user);
  });

  // Sắp xếp bản sao này
  sortedUsers.sort((current, next) => current.age - next.age);

  return sortedUsers;
};
console.log("Mảng các user có age tăng dần la:", getAgeUser(users));
