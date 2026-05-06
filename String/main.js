var fullName = new String('Minh Quang');
var fullName = 'Minh Quang la so 1';
console.log(fullName);

// Lam viec voi chuoi
// 1. Length
console.log(fullName.length);

// 2. Find index : tim vi tri dau tien, cuoi cung xuat hien chuoi
console.log(fullName.indexOf('Minh'));
console.log(fullName.lastIndexOf('Quang'));

// 3. Cut String: cat chuoi tu vi tri dau den vi tri ket thuc
console.log(fullName.slice(4, 7));

// 4. Replace: de tim tat ca chuoi can thay thi dung bieu thuc chinh quy: /chuoi/g
console.log(fullName.replace(/Quang/g, 'Chau'));

// 5. Convert to upper case: viet hoa
console.log(fullName.toUpperCase());

// 6. Convert to lower case: viet thuong
console.log(fullName.toLowerCase());

// 7. Trim: Loai bo ki tu khoang trang thua
console.log(fullName.trim());

// 8. Split: tach chuoi co diem chung
var languages = 'Javascript, PHP, Ruby';
console.log(languages.split(', '));

// 9. Get a character by index: tu index lay ra chu cai cho truoc
console.log(fullName.charAt(5));
console.log(fullName[5]);

