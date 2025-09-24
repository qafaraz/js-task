// task 1
// function number(num) {
//     if (num < 10 || num > 99) {
//         console.log("eded 10-99 arasinda olmalidir");
//         return;
//     }
//     let str = String(num).split("").join(" ")
//     console.log(str);
// }
// number(111)
// number(24)


// task 2
// function number(num){
//     if (num <= 0) {
//         console.log("menfi eded yazma!!");
//         return;
//     }
//     let str = String(num).length
//     console.log(str);
// }
// number(12345);
// number(2)
// number(-12-21-321)



// task 3
//  iki eded kravatin cemi
// function kravat(num1, num2) {
//     console.log(num1 + num2);
// }
// kravat(5, 10)
// kravat(15, 25)


// task 4
// function word(a,b,c){
//     console.log(a);
//     console.log(b+b);
//     console.log(c+c+c);
// }
// word("a","b","c")


// task 4
// function number(a,b,c){
//     let minimal = Math.min(a,b,c)
//     console.log(minimal);
// }
// number(30,15,45)

// task 5
// bunlari 2 * 3 * 5 = 30
// function number(num) {
//     let total = 1;
//     let str = String(num).split("");
//     for (let i = 0; i < str.length; i++) {
//         total *= +str[i];
//     }
//     console.log(total);
// }
// number(235)

// task 6 
// function number(a,b){
//     let kvadrat_a = a * a
//     let kvradrat_b = b * b
//     console.log(kvadrat_a + kvradrat_b);
// }
// number(2,3)


// task 7
// function number(num) {
//     let zero = 0;
//     for (; num !== 1; zero++) {
//         if (num % 2 === 0) {
//             num = num / 2;
//         } else {
//             num = num + 1;
//         }
//     }
//     return zero;
// }

// console.log(number(11));

// task 8
//  n deniz qulduru
//  m deniz qulduru
// nece nefer arasinda paylasdiraq
// function korsanSayisiniBul(a, m) {
//   let n = 2; 
//   while (true) {
//     let hesaplanan_m = (n * (2 * a + n - 1)) / 2 + (a + n - 1);
//     if (hesaplanan_m === m) {
//       return n;
//     }
//     n++;
//   }
// }

// let a = 5;
// let m = 25;
// let sonuc = korsanSayisiniBul(a, m);

// console.log(sonuc); 

