/**
 * ARRAY
 */
// Khởi tạo Array
let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4];
let mixed_array = [1, "Hello", true, null, undefined];

let empty_array = [];

let arr = [1, 2, "three", true, null];
// Truy vấn/Duyệt mảng
console.log(arr[1]);

for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

// Thêm phần tử bằng phương thức push
arr.push(5, 10);
console.log(arr);

// Cập nhật phần tử
arr[3] = false;
console.log(arr);

arr.splice(0, 2, 3);
console.log(arr);

// Tìm kiếm phần tử bằng indexOf
console.log(arr.indexOf("three"));
console.log(arr.indexOf(1000));

// Xóa phần tử
arr.splice(3, 1);
console.log(arr);

/**
 * OBJECT
 */

// Khai báo object
let person = {
    first_name: "John",
    last_name: "Wick",
    age: 40
}

// Truy xuất object
console.log(person.first_name);
console.log(person["first_name"]);

// Duyệt object
for (let key in person) {

}

// Thêm key-value
person.gender = "male";
person["pet"] = "dog";
person.age = 50;
console.log(person);

// Tìm kiếm
if ("age" in person){
    console.log("Key 'age' có tồn tại trong object 'person'");
}

if (person.hasOwnProperty("age")){
    console.log("Key 'age' có tồn tại trong object 'person'");
}

// Xóa khóa
delete person.age;
console.log(person);

let hoc_sinh = [
    { ten: "An", tuoi: 15, lop: "10A1"},
    { ten: "Bình", tuoi: 16, lop: "11A2"},
    { ten: "Châu", tuoi: 15, lop: "10A1"}
]

// Yêu cầu 1
hoc_sinh.push({ ten: "Dũng", tuoi: 17, lop: "11A3"});

// Yêu cầu 2
for (let i = 0; i < hoc_sinh.length; i++){
    console.log(`Tên: ${hoc_sinh[i].ten}; Tuổi: ${hoc_sinh[i].tuoi}; Lớp: ${hoc_sinh[i].lop}`);
}

// Yêu cầu 3
for (let i = 0; i < hoc_sinh.length; i++){
    if (hoc_sinh[i].ten == "Bình"){
        hoc_sinh[i].tuoi = 17;
    }
}

// Yêu cầu 4
hoc_sinh.splice(2, 1);
console.log(hoc_sinh);

/**
 * DOM
 */

let element = document.getElementById("paragraph");
let element1 = document.getElementsByClassName("paragraph");
let element2 = document.getElementsByTagName("p");

let element3 = document.querySelector("#paragraph");
let element4 = document.querySelector(".paragraph");

// Tạo phần tử mới
let new_element = document.createElement("div");

let container = document.querySelector("#container");

// Thêm phần tử con vào trong 1 phần tử cha
container.appendChild(new_element);

// innerHTML
new_element.innerHTML = '<p> Đây là 1 đoạn văn </p>';

// style
new_element.style.color = "red";
new_element.style.border = "2px solid blue";