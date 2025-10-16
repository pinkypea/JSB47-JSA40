console.log("Xin chào các bạn học viên lớp JSA40");

let age = 25;
console.log(age);

const score = 10;
// let; // biến cục bộ (local variable)
// var; // biến toàn cục (global variable)

let winners = 2;
let name = "Duke";
let isEligible = false;

let first_name = "Kiên";
let last_name = "Đào";
let email = "daotrungkien@gmail.com";
let hometown = "Hanoi";
let hobby = "unknowed";

console.log(first_name, last_name, email, hometown, hobby);

// 5 kiểu dữ liệu cơ bản trong JS
// Kiểu number
let price = 99.99;
let height = 20;

// Kiểu string
let subject = "Math";
let message = "Hello, John";

// Kiểu boolean
let is_student = true;
let has_completed = false;

// Kiểu null
let selected_item = null;

// Kiểu undefined
// let result;

// Xử lý chuỗi
// Gộp chuỗi bằng dấu +
let str1 = "Hello";
let str2 = "world";
let result = str1 + " " + str2;
console.log(result);

// Đếm số ký tự trong chuỗi
let str = "Hello world";
console.log("Số ký tự trong chuỗi là", str.length);

// Tách chuỗi bằng split()
let data = "apple banana orange";
let sub_string = data.split(" ");
console.log(sub_string);

// In hoa chuỗi
let text = "hello world";
let upper_text = text.toUpperCase();
console.log(upper_text);

// In thường chuỗi
let text1 = "HELLO WORLD";
let lower_text = text1.toLowerCase();
console.log(lower_text);

// Xóa các khoảng trắng thừa
let username = "               kiendao              ";
let trimmed_text = username.trim();
console.log(trimmed_text);