const getCountElement = (strArr) =>{
    // Khởi tạo một đối tượng rỗng để lưu trữ số lần xuất hiện
    const occurrenceCount = {};

    // Xử lý trường hợp mảng đầu vào rỗng hoặc không hợp lệ
    if (!strArr || !Array.isArray(strArr)) {
        return {};
    }

    // Duyệt qua từng chuỗi trong mảng
    strArr.forEach(str => {
        // Kiểm tra xem chuỗi đã tồn tại trong đối tượng đếm chưa
        if (occurrenceCount[str]) {
            // Nếu đã tồn tại, tăng giá trị lên 1
            occurrenceCount[str]++;
        } else {
            // Nếu chưa tồn tại, khởi tạo giá trị là 1
            occurrenceCount[str] = 1;
        }
    });

    return occurrenceCount;
}
const result = getCountElement(["one", "two", "three", "one", "one", "three"]);
console.log(result);