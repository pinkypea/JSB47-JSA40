/**
 * HÀM
 */
// Khởi tạo hàm
function tinh_tong_2_so(a, b){
    let sum = a + b;
    console.log(sum);
}

tinh_tong_2_so(10, 20);
tinh_tong_2_so(5, 10);

let x = 1;
let y = 2;
tinh_tong_2_so(x, y);

// Hàm có giá trị trả về
function tinh_tich_2_so(a, b){
    let product = a * b;
    return product;
}

let result = tinh_tich_2_so(10, 20);
console.log(result);

// Hàm không có giá trị trả về
function tinh_hieu_2_so(a, b) {
    let difference = a - b;
    console.log(difference);
}

tinh_hieu_2_so(20, 10);

// Tính số dư của phép chia a/b
function tinh_so_du(a , b){
    let r = a % b;
    console(r);
}

// Bài thực hành số 3
function tinh_giai_thua(n) {
    let product = 1;
    for (let i = 1; i <= n; i++){
        product *= i;
    }
    return product;
}
let result2 = tinh_giai_thua(5);
console.log(result2);

// Bài thực hành số 4
function convert_C_to_F(C) {
    let F = C * 1.8 + 32;
    return F;
}

const data = ["Áo phông", "Áo sơ mi", "Quần âu", "Giày thể thao"];

let container = document.getElementById("container");
for (let i = 0; i < data.length; i++){
    // Tạo các div con để chứa data
    let new_element = document.createElement("div");

    // Tạo class cho new_element
    new_element.classList.add("item");
    
    // Chèn nội dung vào các thẻ div vừa tạo
    new_element.innerHTML = `<p>${data[i]}</p>`;

    // Chèn các div con vào container
    container.appendChild(new_element);
}

/**
 * LOCAL STORAGE
 */
// Lưu trữ các giá trị
localStorage.setItem("name", "Kiên");

// Truy vấn giá trị
let test = localStorage.getItem("name");
console.log(test);

// Xóa 1 giá trị
localStorage.removeItem("name");

// Xóa tất cả giá trị
localStorage.clear();

let user = {
    username: "daotrungkien",
    password: "daotrungkien123",
    email: "daotrungkien@gmail.com",
    age: 10
}
// Lưu dữ liệu thông qua JSON vào localStorage
localStorage.setItem("user", JSON.stringify(user));

// Lấy dữ liệu từ localStorage thông qua JSON
let test_data = JSON.parse(localStorage.getItem("user"));
console.log(test_data);