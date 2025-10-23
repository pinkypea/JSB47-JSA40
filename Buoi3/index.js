/**
 * TOÁN TỬ TÍNH TOÁN
 */
let a = 20;
let b = 10;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

let x = 10;
x += 10; // x = x + 10
console.log(x);
x -= 10;
console.log(x);
x *= 10;
x /= 10;

/**
 * TOÁN TỬ LOGIC
 */
let x = 10;
let y = 5;
console.log(x > y);
console.log(x < y);
console.log(x == y);
console.log(x != y);

// Toán tử and (&&)
console.log(x > 0 && y > 0);
console.log(x < 0 && y > 0);

// Toán tử or (||)
console.log(x < 0 || y < 0);
console.log(x > 0 || y < 0);

// Toán tử not (!)
let a = true;
let b = false;
console.log(!a);
console.log(!b);

/**
 * CÂU ĐIỀU KIỆN
 */

// Kiểm tra nếu 8 <= score <= 10 thì in ra "Bạn là học sinh giỏi".
let score = 9;
if (score <= 10 && score >= 8) {
    console.log("Bạn là học sinh giỏi");
}

// Kiểm tra nếu nhiệt độ lớn hơn 30, thì in ra "Thời tiết nóng",
// nếu không thì in ra "Thời tiết không đủ nóng".

let temperture = 30;
if (temperture > 30) {
    console.log("Thời tiết nóng");
}
else {
    console.log("Thời tiết không đủ nóng");
}

// Kiểm tra nếu 8 <= score <= 10 thì in ra "Bạn là học sinh giỏi".
// Nếu 6.5 <= score < 8 thì in ra "Bạn là học sinh khá",
// nếu 4 <= score < 6.5 thì in ra "Bạn là học sinh trung bình",
// nếu 0 <= score < 4 thì in ra "Bạn học sinh yếu".

let score1 = 11;
if (score1 >= 8 && score1 <= 10) {
    console.log("Bạn là học sinh giỏi");
}
else if (score1 >= 6.5 && score1 < 8) {
    console.log("Bạn là học sinh khá");
}
else if (score1 >= 4 && score1 < 6.5) {
    console.log("Bạn là học sinh trung bình");
}
else {
    console.log("Bạn là học sinh yếu");
}

let scoop = 5;
if (scoop >= 5) {
    console.log("Ăn nhanh lên, kem sắp chảy");
}
else if (scoop == 3) {
    console.log("Kem sắp hết");
}
else if (scoop == 2) {
    console.log("Lần một");
}
else if (scoop == 1) {
    console.log("Lần hai");
}
else if (scoop == 0) {
    console.log("Hết rồi");
}
else {
    console.log("Vẫn còn nhiều kem");
}

/**
 * VÒNG LẶP
 */

// Vòng lặp for
console.log("Vòng lặp for");
for (let i = 1; i <= 50; i++) {
    console.log(i);
}

// for (let i = 50; i >= 1; i--) {
//     console.log(i);
// }

// Vòng lặp while
console.log("Vòng lặp while");
let i = 1;
while (i <= 50) {
    console.log(i);
    i++;
}

// Vòng lặp do - while
console.log("Vòng lặp do - while");
let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 50)

// Bài thực hành số 2
let number1 = 3;
let number2 = -7;
let number3 = 2;
let product = number1 * number2 * number3;
if (product >= 0) {
    console.log("Dấu là +");
}
else {
    console.log("Dấu là -");
}

// Bài thực hành số 3
for (let i = 0; i <= 15; i++){
    if (i % 2 == 0) {
        console.log(i, "là số chẵn");
    }
    else {
        console.log(i, "là số lẻ");
    }
}

