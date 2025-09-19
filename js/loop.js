// # Javascript Task(loop)

// ## Task-01-dən Task-06-ya qədər While ilə yazılmalıdır!

// ### Task-01

// ```
// İstifadəçidən ikirəqəmli ədəd daxil etməsini xahiş edin.
// Bu rəqəmi üçrəqəmli olana kimi 7 vahid artırın.
// Son dəyəri konsola çıxarın.
// ```


// let user = 7
// while (user + 7 < 100) {
//     user += 7
//     console.log(user);
// }




// ### Task-02

// ```
// Konsola N dəfə «I know how to use cycles» mesajı çıxaran proqram yazın.
// Proqram N ədədini istifadəçidən soruşur.
// ```

// let user = "n"
// while (user === "n") {
//     console.log("I know how to use cycles");
//     user = "y"
// }

// let a = 6
// let b = 0;

// while (b < a) {
//     console.log("I know how to use cycles");
//     b++;
// }


// ### Task-03

// ```
// Sonu 0 ilə bitən bütün üçrəqəmli ədədləri konsola çıxaran proqram yazın.
// ```

// let i = 109;

// while (i <= 999) {
//     if (i % 10 === 0) {
//         console.log(i);
//     }
//     i++;
// }

// let num = 656;
// while (num < 1000) {

//   if (num % 10 !== 0) {
//     num++
//   } else {
//     console.log(num);
//     num += 10
//   }

// ### Task-04

// ```
// Bütün ikirəqəmli tək ədədlərin cəmini konsola çıxaran proqram yazın.
// ```

// let user = 12; 
// let sum = 0;

// while (user <= 99) {
//     sum += i;      
//     i += 2;      
// }

// console.log("İkirəqəmli tək ədədlərin cəmi: " + sum);

// let num = 44;
// let sum = 0
// while (num < 100) {
//   if (num % 2 === 1) {
//     sum += num
//   }
//   num++
// }

// console.log(sum);

// ### Task-05

// ```
// İstifadəçinin daxil etdiyi ədədin bölünəni olan bütün üçrəqəmli ədədlərin cəmini hesablayan proqram yazın.
// ```

// let num = 45;

// let cnt = 100;
// let sum = 0
// while (cnt < 1000) {
//   if (cnt % num !== 0) {
//     cnt++
//   } else {
//     sum += cnt
//     console.log(`cnt = ${cnt} , sum = ${sum}`);
//     cnt += num;
//   }
// }


// console.log(sum);

// ### Task-06

// ```
// Sadə ədədləri çıxaran proqram yazın.
// İstifadəçidən n ədədini soruşan və n-dən 0-a kimi bütün sadə ədədləri azalan ardıcıllıqla çıxaran proqram yazın.
// «23» ədədi daxil edildikdə, konsola «23», «19», «17», «13», «11», «7», «5», «3», «2», «1» ardıcıllığı çıxarılmalıdır.
// ```
// let num1 = 0
// let num2 = 1
// for( let num = 0; num < 100;){
//     console.log(num)
//     num = num1 + num2
//     num1 = num2 
//     num2 = num
// }

// riyaziyyat bilmirem!!!


// ## Task-07-dən Task-10-a qədər for ilə yazılmalıdır!
// ### Task-07
// ```
// 10-a qədər bütün reqemlerin hasilin tapan proqram tərtib edin
// Alınan dəyəri konsola çıxarın.
// ```

// let user = 1
// for(let i = 1;i <= 10; i++){
//     user*= i
// }

// console.log(user)



// ### Task-08

// ```
// İstifadəçidən mətn daxil etməsini tələb edən və mətn elementlərini əks qaydada düzən proqram tərtib edin.
// ```

// let name = "qafar"
// let namereverse = name.split("").reverse().join("")
// console.log(namereverse);


// let name = "rafaq";
// let reversed = ""; 
// for (let i = name.length - 1; i >= 0; i--) {
//     reversed += name[i];
// }

// console.log(reversed);


// ### Task-09

// ```
// Mətndə "." hərfinin ilk dəfə hansı indeksdə yerləşdiyini tapan proqram tərtib edin.
// ```

// let text = "Salam dunya. Azerbaycan. Turkiye.";
// for (let num = 0; num < text.length; num++) {
//   if (text[num] === ".") {
//     console.log(i);
//   }
// }



// ### Task-10 (isNaN)


// ```
// Mətndə rəqəmlərin olub olmadığını yoxlayan proqram yazın.
// İstifadəçidən mətn daxil etməsini tələb edən və mətndə rəqəmlərin
// olub-olmaması barədə konsola mesaj çıxaran proqram tərtib edin.
// ```


// let user = "q2far";

// for (let num = 0; num < user.length; num++) {
//     if (/\d/.test(user[num])) { 
//         console.log("reqem var");
//         break
//     }
//     else if (num === user.length - 1) {
//         console.log("reqem yoxdur");
//     }
// }



// elaveler
// let name = ["Baki", "Gence", "Samaxi"]

// for (let i = 0; i < name.length; i++) {
//     console.log(name[i])
// }

// let country = ["turkey", "azerbaijan"]
// let newcountry = []
// for (let i = 0; i < country.length; i++) {
//     newcountry.push(country[i].toLocaleUpperCase("TR"))
// }
// console.log(newcountry);


// let num = 10
// while(num >= 1){
//     console.log(num)
//     --num
// }

// let reqem = 0
// while (reqem <= 10) {
//     console.log(reqem)
//     reqem++
// }