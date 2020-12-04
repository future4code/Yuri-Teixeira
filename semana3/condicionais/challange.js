/* 1 */
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (i = 0; i < a.length; i++) {
  console.log(a[i]);
}

/* 2 */
a.push(16);

for (i = 0; i < a.length; i++) {
  console.log(a[i]);
}

/* 3 */
let b = []
for (i = 0; i < a.length; i++) {
  b.push(String(a[i]));
}

for (i = 0; i < b.length; i++) {
  console.log(b[i]);
}