var languages = [
    'Javascript',
    'Java',
    'C++'
];

console.log(languages);

// 1. To String: bien array thanh string

console.log(languages.toString());

// 2. Join: them 1 vai ki tu xen giua cac phan tu array
console.log(languages.join(', '));

// 3. Pop: xoa element cuoi mang, tra ve phan tu da xoa
// tu da xoa

console.log(languages.pop());
// 4. Push: them phan tu vao cuoi mang, tra ve do dai moi cua mang

console.log(languages.push('Python'))

// 5. Shift: xoa di 1 phan tu dau mang, tra ve phan tu da xoa

console.log(languages.shift());

// 6. Unshift: them 1 phan tu vao dau mang, tra ve do dai cua mang
console.log(languages.unshift('C'));

// 7. Splicing
languages.splice(1, 2, 'HTML') // dat vi tri con tro, xem xoa may phan tu, co chen hay khong

// 8. Concat: noi 2 mang voi nhau
var languages2 = [
    'React',
    'Node'
]
console.log(languages.concat(languages2));

// 9. Slicing: cat mang

console.log(languages.slice(1, 2))




