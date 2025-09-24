// # Javascript Functions Task

// -----------------------------------------------------------------------------------------------
// ## Task-01

// ```
// İstifadəçi adını parametr kimi qəbul edən və konsola
// «[İstifadəçi adı] is active now» mesajı çıxaran funksiya tərtib edin.
// Funksiyanı 3 müxtəlif ad üçün çağırın.
// ```

// normal function method
// function user (name){
//     console.log(`İstifadəçi adi ${name}`);
// }
// user("Qafar")
// user("Abdul")
// user("Nilufer")

// arrow function method
// let user = name => console.log(`İstifadəçi adi ${name}`);
// user("Qafar")
// user("Abdul")
// user("Nilufer")

// -----------------------------------------------------------------------------------------------
// ## Task-02

// ```
// Parametr olaraq üç ədəd qəbul edən və konsolda ən böyüyünü göstərən bir funksiya tərtib edin.
// Fərqli arqumentlərlə funksiyanı üç dəfə çağırın.
// ```

// normal function method
// function num(num1,num2,num3){
//     console.log(Math.max(num1,num2,num3));
// }
// num(15,12,77)
// num(5,3,9)
// num(22,55,44)

// arrow function method
// let num = (num1,num2,num3) => console.log(Math.max(num1,num2,num3));
// num(15,12,77)
// num(5,3,9)
// num(22,55,44)

// -----------------------------------------------------------------------------------------------

// ## Task-03

// ```
// Rubl və dollarla hesab qəbul edən və bütün hesablardakı məbləğin
// cəmin rublla göstərən funksiya yazın.
// Tutaq ki, müştərinin rubl hesabında 1200 rubl, dollar hesabında isə 20 dollar var.
// Bir dollar üçün məzənnə 75 rubl təşkil edir.
// Bu halda, funksiya belə mesaj göstərməlidir: Bütün depozitlər üzrə məbləğ: 2700 rubl.
// ```


// function bank() {
//     let mezenne = 83.62
//     let account_ruble = 1200
//     let account_dolar = 20
//     let reverse_bank = account_dolar * mezenne
//     let account_ruble_total = reverse_bank + account_ruble
//     console.log(`Sizin hesabda ${account_ruble} ruble ve ${account_dolar} dolarin var. Toplam hesabda olan ruble  ${account_ruble_total}-dir`);
// }
// bank()

// function bank(account_ruble, account_dolar) {
//     let mezenne = 75;
//     let reverse_bank = account_dolar * mezenne; 
//     let total_ruble = account_ruble + reverse_bank;b
//     console.log(`Bütün depozitlər üzrə məbləğ: ${total_ruble} rubl.`);
// }
// bank(1200, 20); 

// -----------------------------------------------------------------------------------------------

// ## Task-04

// ```
// İstifadəçidən 1 ilə 99 arasında rəqəm daxil etməsini tələb edən və
// onu mətn şəklində konsola çıxaran numberToText funksiyası tərtib edin.
// Birdən ona qədər rəqəmin daxil edilməsi zamanı  bir söz göstərilir.(bir ,iki, üç və.s)
// Hər hansı digər iki rəqəmli rəqəmi daxil edilməsi zamanı, boşluqla ayrılmış iki söz göstərilir,
// məsələn, "iyirmi bir".
// ```


// function numberText(num) {
//     const birden_doqquza = ["", "bir", "iki", "uc", "dord", "bes", "alte", "yeddi", "sekkiz", "doqquz"];
//     const ondan_yuze = ["", "on", "iyirmi", "otuz", "qirx", "elli", "altmis", "yetmis", "seksen", "doxsan"];
//     if (num < 10) {
//         return birden_doqquza[num];
//     }
//     if (num < 20) {
//         return "on" + birden_doqquza[num - 10];
//     }
//     return ondan_yuze[Math.floor(num / 10)] + (num % 10 ? " " + birden_doqquza[num % 10] : "");
// }
// console.log(numberText(7));
// console.log(numberText(15));
// console.log(numberText(21));
// console.log(numberText(65));



// -----------------------------------------------------------------------------------------------

// ## Task-05

// ```
// Parametr kimi iki ədəd qəbul edən və onlardan ən kiçiyini qaytaran min() funksiyası tərtib edin.
// ```

// arrow function method
// let num = (num1,num2) => console.log(Math.min(num1,num2));
// num(5,2)

// -----------------------------------------------------------------------------------------------


// ## Task-06

// ```
// Parametr kimi iki ədəd və riyazi əməliyyatın işarəsini qəbul edən və
// bu riyazi əməliyyatın nəticəsini qaytaran calc funksiyasını yazın.
// Məsələn, calc(4, 6, '+');  //  10 qaytaracaq
// ```

// function callback(num1, num2, sym){
//     num1 = +num1;
//     num2 = +num2;
//     if (sym === "+") {
//         console.log(`${num1} + ${num2} = ${num1 + num2}`);
//     }
//     else if (sym === "-") {
//         console.log(`${num1} - ${num2} = ${num1 - num2}`);
//     }
//     else if (sym === "*") {
//         console.log(`${num1} * ${num2} = ${num1 * num2}`);
//     }
//     else if (sym === "/") {
//         console.log(`${num1} / ${num2} = ${num1 / num2}`);
//     }
//     else {
//         console.log("zehmet olmasa reqem yazin!");
//     }
// }
// callback("55",44,"-")

// function callback(num1, num2, sym, numbers) {
//     numbers(num1, num2, sym);
// }

// const user = (num1, num2, sym) => {
//     if (sym === "+") {
//         console.log(`${num1} + ${num2} = ${num1 + num2}`);
//     }
//     else if (sym === "-") {
//         console.log(`${num1} - ${num2} = ${num1 - num2}`);
//     }
//     else if (sym === "*") {
//         console.log(`${num1} * ${num2} = ${num1 * num2}`);
//     }
//     else if (sym === "/") {
//         console.log(`${num1} / ${num2} = ${num1 / num2}`);
//     }
//     else {
//         console.log("zehmet olmasa reqem yazin!");
//     }
// };

// callback(55, 2, "+", user);

// -----------------------------------------------------------------------------------------------

// ## Task-07

// ```
// Altı rəqəmli ədəd qəbul edən və ilk üç rəqəminin cəminin ikinci üç rəqəminin cəminə bərabər
// olduğunu yoxlayan isLucky funksiyasını yazın.
// Bilet uğurlu olarsa, funksiya true, uğursuz olarsa, false qaytarmalıdır.
// Məsələn, isLucky(234801);  // true qaytaracaq
// ```

// function sumOfDigits(num) {
//     let str = String(num).split("");
//     let sum = 0;
//     for (let a = 0; a < str.length; a++) {
//         sum += +(str[a]);
//     }
//     return  console.log(true);
// }

// sumOfDigits(195456)




// function number(num) {
//     let arr = String(num).split("")
//     let a = +(arr[0])
//     let b = +(arr[1])
//     let c = +(arr[2])
//     let d = +(arr[3])
//     let e = +(arr[4])
//     let m = +(arr[5])
//     if (a + b + c === d + e + m) {
//         console.log(true);
//     } else console.log(false);
// }
// number(234801)


// function isLucky(num) {
//     let str = String(num);
//     return +str[0] + +str[1] + +str[2] === +str[3] + +str[4] + +str[5]
// }
// console.log(isLucky(234801));
// console.log(isLucky(123456));
// console.log(isLucky(111222));


// -----------------------------------------------------------------------------------------------

// ## Task-08

// ```
// Funksiya parametr kimi bir neçə sözdən ibarət mətn qəbul edir.
// Funksiya geriyə eyni mətni qaytarmalıdır, lakin içindəki hər söz böyük hərflə başlamalıdır.
// Məsələn, capitalizeWords('Hello my name is Harry'); // 'Hello My Name Is Harry' qaytaracaq.
// ```

// function capitalizeWords(text) {
//     let words = text.split(" ");
//     for (let i = 0; i < words.length; i++) {
//         let ary = words[i];
//         if (ary.length > 0) {
//             words[i] = ary[0].toUpperCase() + ary.slice(1).toLowerCase();
//         }
//     }
//     return words.join(" ");
// }

// console.log(capitalizeWords("hello my name is harry"));

// -----------------------------------------------------------------------------------------------
// ## Task-09

// ```
// Bir ədədi parametr kimi qəbul edən və cüt olduqda true,
// tək olduqda isə false qaytaran isEven() funksiyasını yazın.
// ```

// function number(num){
//     return console.log(num % 2 === 0);
// }
// number(2)
// number(3)

// -----------------------------------------------------------------------------------------------


// ## Task-10

// ```
// Telefon nömrəsini parametr kimi qəbul edən ısvalidnumber() funksiyasını yazın.
// Telefon nömrəsi 11 rəqəmdən ibarət olduqda və +7 ilə başladıqda, funksiya true qaytarır.
// +7123456789
// ```
// ^\+7(\d{3}-\d{3}-\d{4}|\d{10})$|^\+994(\d{2}-\d{3}-\d{4}|\d{9})$


// function user(tel) {
//     let reg = /^(\+7(\d{10}|\d{3}-\d{3}-\d{4})|\+994(\d{9}|\d{2}-\d{3}-\d{2}-\d{2}))$/;
//     let telefon = reg.test(tel);
//     console.log(telefon);
// }

// user("+71234567890");
// user("+99450-123-45-67");
// user("+7123-456-7890");
// user("+712345678901");


// -----------------------------------------------------------------------------------------------

// ## Task-11

// ```
// Mətni parametr kimi qəbul edən və bu mətndəki hərflərin sayını qaytaran numCounter funksiyasını yazın.
// "15263538479359486()-="';:!@#$%^&*()"
// REGEX()
// ```

// /[a-zA-Z]/g
// normal fucntion
// function numCounter(text){
//     console.log(text.match(/[a-zA-Z]/g).join("").length);
// }
// numCounter("Qafartestdsad dsadsad 23123")

// arrow function
// let numCounter = text => console.log(text.match(/[a-zA-Z]/g).join("").length);
// numCounter("Qafartestdsad dsadsad 23123");


// -----------------------------------------------------------------------------------------------


// ## Task-12

// ```
// Verilmiş ədədin sadə olub-olmadığını yoxlayan `isPrime()` funksiyasını yazın.
// Məsələn, `isPrime(7)` çağırıldıqda `true`, `isPrime(8)` çağırıldıqda `false` qaytarmalıdır.
// ```

// function isPrime(num) {
//     if (num <= 1) {
//         console.log("sade deyil");
//         return;
//     }
//     for (let a = 2; a < num; a++) {
//         if (num % a === 0) {
//             console.log("sade eded deyil");
//             return;
//         }
//     }
//     console.log("sade ededir");
// }

// isPrime(7);
// isPrime(8);
// isPrime(2029);



// -----------------------------------------------------------------------------------------------

// ## Task-13

// ```
// Verilmiş ədədin rəqəmlərinin cəmini qaytaran `sumOfDigits()` funksiyasını yazın.
// Məsələn, `sumOfDigits(1234)` çağırıldıqda `10` qaytarmalıdır (1 + 2 + 3 + 4 = 10).
// ```


// let num = 1234
// let str = String(num).split("")
// let total = +str[0] + +str[1] + +str[2] + +str[3]
// console.log(total);

// function sumOfDigits(num) {
//     let str = String(num).split("");
//     let sum = 0;
//     for (let a = 0; a < str.length; a++) {
//         sum += +(str[a]);
//     }
//     return sum;
// }

// console.log(sumOfDigits(1234));



// -----------------------------------------------------------------------------------------------

// ## Task-14

// ```
// Verilmiş mətnin palindrom olub-olmadığını yoxlayan `isPalindrome()` funksiyasını yazın.
// Məsələn, `isPalindrome("level")` çağırıldıqda `true`, `isPalindrome("hello")` çağırıldıqda `false` qaytarmalıdır.
// ```

// function palendrom(text) {
//     let cevirmek = text.split("").reverse().join("")
//     if (cevirmek === text) {
//         console.log("bu palendrom-dur")
//     }
//     else {
//         console.log("bu palendrom deyil")
//     }
// }
// palendrom("4004")
// palendrom("ata")
// palendrom("qafar")



// -----------------------------------------------------------------------------------------------

// ## Task-15

// ```
// Verilmiş cümlədəki ən uzun sözü qaytaran `longestWord()` funksiyasını yazın.
// Məsələn, `longestWord("Javascript is a powerful language")` çağırıldıqda `"powerful"` qaytarmalıdır.
// ```
// let text = "Javascript is a powerful language";
// let word = text.split(" ");
// let long = "";
// for (let i = 0; i < word.length; i++) {
//     if (word[i].length > long.length) {
//         long = word[i];
//     }
// }

// console.log(long);


// function longestWord(text) {
//     let word = text.split(" ");
//     let long = "";
//     for (let i = 0; i < word.length; i++) {
//         if (word[i].length > long.length) {
//             long = word[i];
//         }
//     }
//     console.log(long);
// }
// longestWord("Javascript is a powerful language")




// -----------------------------------------------------------------------------------------------

// ## Task-16

// ```
// Daxil edilən iki tarix arasındakı günlərin sayını qaytaran `daysBetweenDates()` funksiyasını yazın.
// Məsələn, `daysBetweenDates("2025-04-01", "2025-04-10")` çağırıldıqda `9` qaytarmalıdır.
// ```

// const date_1 = new Date("2025-04-01");
// const date_2 = new Date("2025-04-10");
// console.log((date_2 - date_1) / (1000 * 60 * 60 * 24));

// function daysBetweenDates(date1, date2) {
//     const d1 = new Date(date1);
//     const d2 = new Date(date2);
//     console.log((d2 - d1) / (1000 * 60 * 60 * 24));

// }
// daysBetweenDates("2025-04-01", "2025-04-10");

// -----------------------------------------------------------------------------------------------


// ## Task-17

// ```
// Verilmiş stringi tərsinə çevirən `reverseArray()` funksiyasını yazın.
// Məsələn, `reverseArray("1, 2, 3, 4, 5")` çağırıldıqda `"5, 4, 3, 2, 1"` qaytarmalıdır.
// ```

// function reverseArray(text){
//     let rever = text.split("").reverse().join("")
//     return rever
// }
// console.log(reverseArray("1,2,3,4,5"));



// -----------------------------------------------------------------------------------------------


// ## Task-18

// ```
// İstifadəçi adı və yaş parametr kimi qəbul edən və `"[Ad] is [Yaş] years old"` mesajını qaytaran `userInfo()` funksiyasını yazın.
// Məsələn, `userInfo("Murad", 25)` çağırıldıqda `"Murad is 25 years old"` qaytarmalıdır.
// ```

// function userInfo(name,age){
//     console.log(`${name} is ${age} years old`);
// }
// userInfo("Qafar",20)



// -----------------------------------------------------------------------------------------------

// ## Task-19

// ```
// Daxil edilən mətnin hər bir simvolunun ASCII dəyərini qaytaran `charCodes()` funksiyasını yazın.
// Məsələn, `charCodes("ABC")` çağırıldıqda '65, 66, 67' qaytarmalıdır.
// ```
// function charCodes(text) {
//     let ary = [];
//     for (let i = 0; i < text.length; i++) {
//         ary.push(text.charCodeAt(i));
//     }
//     return ary.join(",");
// }
// console.log(charCodes("ABC"));
// console.log(charCodes("Qafar"));


// -----------------------------------------------------------------------------------------------


// ## Task-20

// ```
// Verilmiş ədədin faktorialını qaytaran bir `factorial()` funksiyası yazın.
// Məsələn, `factorial(5)` çağırıldıqda `120` qaytarmalıdır.
// ```

// function factorial(num) {
//     let hasil = 1
//     for (let a = 1; a <= num; a++) {
//         hasil *= a
//     }
//     console.log(hasil);
// }
// factorial(5)

// -----------------------------------------------------------------------------------------------

