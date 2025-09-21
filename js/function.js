// ### Task-11
// Dəyərin palendrom olub olmadığını yoxlayın:
// "ata" => true
// "level"=> true
// "school"=> false


// let number = [0,1,2,3,4,5,6,7]
// console.log(...number,number.length)

//split + reverse + join kodlari ile edecem sonra bunu function ile test edecem


// Palindrom, düz veya tersten okunuşu aynı olan kelime, kelime grubu, cümle veya sayıdır.
// Türkçe'de "adam", "kayak", "radar" gibi kelimeler; "Ey Nihat Adana'da tahin ye" 
// gibi cümleler; ve 121, 1331 gibi sayılar palindrom örneğidir. 

// let user = "qafar"
// let rever = user.split("").reverse().join("")
// if(user === rever){
//     console.log("bir birine oxsayir")
// }
// else{
//     console.log("elaqeder deyiller")
// }

// hazir
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



// ### Task-12
// Ən kiçik üçrəqəmli ədəddən başlayaraq yalnız 5-ə bölünəndə qalıq 2 verən ədədləri konsola çıxarın.
// Ədədlər 500-dən böyük olana qədər davam etsin.
// let user = 23

// while(user < 500){
//     user++
//     let bolme = user % 5 === 2
//     console.log(bolme);
// }

// for(let num = 1; num <= 500;num++){
//     if(num % 5 === 2){
//         console.log(`${num} % 5 = ${num % 5}`)
//     }
// }


//  hazir
// function numbers(number){
// for(let num = number; num <= 500;num++){
//     if(num % 5 === 2){
//         console.log(`${num} % 5 = ${Math.floor(num / 5)} (${num % 5} qaliq eded)`)
//     }
// }
// }
// numbers(100)






// ### Task-13
// İstifadəçidən tam ədəd daxil etməsini xahiş edin.
// Bu ədədin rəqəmlərindən ibarət olan bütün ədədlərin cəmini hesablayın.
// Məsələn: 453 daxil edildikdə nəticə 4+5+3=12 olmalıdır.

// let user = 453;
// let str = user.toString().split("");
// let zero = 0;
// for (let num = 0; num < str.length; num++) {
//     zero = zero + +str[num];
// }
// console.log(zero);

// zero = 0 + 4 = 4
// zero = 4 + 5 = 9
// zero = 9 + 3 = 12



// function calculation(num) {
//     let str = String(num).split("")
//     let zero = 0
//     for (let i = 0; i < str.length; i++) {
//         zero +=  +str[i]
//     }
//     console.log(zero);

// }
// calculation(453)



// ### Task-14
// İstifadəçidən ədəd daxil etməsini tələb edin və həmin ədədin bütün bölənlərini azalan sıra ilə konsola çıxarın.
// Məsələn: 12 daxil edildikdə 12, 6, 4, 3, 2, 1 göstərilməlidir.

// let num = 12
// let total = []
// for(let a = num; a >= 1; a--) {
//     if (num % a === 0) {
//         total.push(a)
//     }
//     total.sort((a, b) => b - a)
// }

// console.log(...total);

// function number(num) {
//     let total = []
//     for (let a = num; a >= 1; a--) {
//         if (num % a === 0) {
//             total.push(a)
//         }
//         total.sort((a, b) => b - a)
//     }
//     console.log(total.join(","));
// }
// number(12)






// ### Task-15
// 1-dən 30-a qədər yalnız 3-ə və 5-ə eyni anda bölünən ədədləri konsola çıxaran proqram yazın.

// let user = 30
// for(let a = 1; user > a; a++ ){
//     if(a % 3 === 0 && a % 5 === 0){
//         console.log(a)
//     }
// }


// function user(num) {
//     for (let a = 1; num > a; a++) {
//         if (a % 3 === 0 && a % 5 === 0) {
//             console.log(a)
//         }
//     }
// }
// user(30) 


// ### Task-16
// İstifadəçidən bir söz daxil etməsini tələb edin.
// Sözdəki hərfləri biri-birindən tire (-) ilə ayıraraq konsola çıxarın.
// Məsələn: "test" daxil edildikdə "t-e-s-t" çıxmalıdır.

// let user = "Qafar"
// let cut = user.split("").join("-")
// let cut = [...user].join("-")
// console.log(cut);


// function user(text,sym){
//     let cut = [...text].join(sym)
//     console.log(cut);
// }
// user("Qafar","-")






// ### Task-17
// Mətndə boşluq (" ") simvollarının sayını tapan proqram yazın.

// let user = "Q  A  F A R"
// let space = [...user].filter(a => a === " ")
// for (let a = 1; space.length > a; a++) {
//     if (space[a] === " ") {
//     }
// }
// console.log(space.length)

// normal function method
// function user(text) {
//     let space = [...text].filter(a => a === " ")
//     console.log(space.length)
// }
// user("Q a f a r")

// arrow function method
// let user = text => {
//     let space = [...text].filter(a => a === " ")
//     console.log(space.length)
// }
// user("Q a f a r")

// ### Task-18
// İstifadəçidən iki tam ədəd daxil etməsini xahiş edin.
// Kiçik ədəddən böyük ədədə qədər olan bütün ədədlərin kvadratlarını konsola çıxarın.
// Məsələn: 3 və 6 daxil edildikdə 9, 16, 25, 36 göstərilməlidir.

// let tam_1 = 3
// let tam_2 = 6
// for (let a = tam_1; a <= tam_2; a++) {
//     let space = a
//     let cal = space * a
//     console.log(cal);
// }

// normal function method
// function user(num1,num2){
//     let zero = 0
//     for(let a = num1; a <= num2;a++){
//         zero = a
//         let cal = zero * a
//         console.log(cal);
//     }
// }
// user(3,6)

// arrow function method
// let user = (num1,num2) =>{
//     let zero = 0
//     for(let a = num1; a <= num2;a++){
//         zero = a
//         let cal = zero * a
//         console.log(cal);
//     }
// }
// user(3,6)
