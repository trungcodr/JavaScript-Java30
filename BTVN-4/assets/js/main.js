// Danh sách các sản phẩm có trong giỏ hàng
let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 3000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]
console.log(products);
// 1. In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc sau
// Tên - Giá - Thương Hiệu - Số lượng
// Ví dụ : OPPO Find X3 Pro - 19500000 - OPPO - 3

// products.forEach((product,_) =>{
//     console.log(`${product.name} - ${product.price} - ${product.brand} - ${product.count}`);
// });

// 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
// Tổng tiền mỗi sản phẩm = price * count

// const calTotalPrice  = (products) => {
//     let totalPrice = 0;
//     products.forEach((product,_) => {
//         const productTotal = product.price * product.count;
//         totalPrice += productTotal;
//     });
//     return totalPrice;
// }
// const showCalTotalPrice = calTotalPrice(products);
// console.log("Tong tien tat ca san pham trong gio hang la:" + calTotalPrice(products));

// 3. Tìm các sản phẩm của thuơng hiệu "Apple"

// const brandApple = (products) => {
//     const findBrandApple = products.filter(item => item.brand === "Apple");
//     return findBrandApple;
// }

// console.log(brandApple(products));

// 4. Tìm các sản phẩm có giá > 20000000
// const findProduct = (products) => {
//     const expensivePriceProduct = [];
//     products.forEach((product,_) =>{
        
//         if(product.price > 20000000) {
//             expensivePriceProduct.push(product);
//         }
//     });
//     return expensivePriceProduct;

// }
// console.log(findProduct(products));

// 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)
// const namePro = (products) => {
//     const findNamePro = products.filter(product =>{
//         const productNameLower = product.name.toLowerCase();
//         return productNameLower.includes("pro");
//     });
//     return findNamePro;
// }

// console.log(namePro(products));

// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product
// products.push({
//     name: "Iphone 16 Pro",
//     price: 60000000,
//     brand: "Apple",
//     count:10
// });

// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng
// const deleteProduct = products.filter(product => product.brand != "Samsung");
// console.log(deleteProduct);

// 8. Sắp xếp giỏ hàng theo price tăng dần
// products.sort((itemA, itemB) => itemA.price - itemB.price);

// console.log(products);

// 9. Sắp xếp giỏ hàng theo count giảm dần
// products.sort((itemA,itemB) => itemB.count - itemA.count);

// console.log(products);
// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng

console.log(products.slice(2,));