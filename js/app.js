// # Bu tapşırıqlar ** JavaScript ** dilinin aşağıdakı mövzularını öyrənmiş tələbələr üçün hazırlanmışdır:

// ** Mövzular:**
//     `Data Types`, `Variables`, `Operators`, `if-else`, `switch-case`, `ternary`, `Math`

// ------------------------------------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------------------------------------
// ## Task-01

// Konsola mesaj verin: «My name is Murad».


// console.log("My name is Qafar");


// ------------------------------------------------------------------------------------------------------------------------------

// ## Task-02

// Adı `name` və adınızın mənimsədildiyi sabit dəyişən təyin edin.
// Bu dəyişənin dəyərini konsolda göstərin.


// let name = "My name is Qafar"
// console.log(name);


// ------------------------------------------------------------------------------------------------------------------------------

// ## Task-03

// Bu adlardan hansının dəyişən üçün istifadə oluna biləcəyini göstərin.
// Birdən çox variant seçin.

// - `2user`
//     - `c@rt`
//     - `person`
//     - `title color`
//     - `console`
//     - `$add`

// let person = "working person"
// let $add = "working $add"
// console.log(person, $add);

// ------------------------------------------------------------------------------------------------------------------------------

// ## Task-04

// Depodaki bütün kitabların ümumi dəyərini konsola çıxarın.
// Kitab mağazasındaki kitabın qiyməti `bookPrice` dəyişənində
// və depodaki kitab sayı `bookAmount` dəyişənində saxlanılır.


// const bookPrice = 30
// const bookAmount = 15
// const total = bookPrice * bookAmount
// console.log(total);


// ------------------------------------------------------------------------------------------------------------------------------

// ## Task-05

// Dəyişən dəyərini saniyə metrə çevirin və onu konsola çıxarın.
// `kmhSpeed` dəyişəni avtomobilin sürətinin "saatda kilometrlərlə"
// dəyərini saxlayır. `msSpeed` dəyişəni təyin edin və
// ona eyni sürət dəyərini "saniyədə metrə" çevirərək yazın.


// let carSpeed = 120
// let msSpeed = Math.round(carSpeed * 1000 / 3600)
// console.log(msSpeed);

// ------------------------------------------------------------------------------------------------------------------------------

// ## Task-06

// İstifadəçinin doğum tarixini soruşan və bu günə qədər yaşadığı
// günlərin sayını göstərən proqram yazın.


// const age =  prompt("Dogum ilinizi yazin")
// const agetotal =  2025 - age
// console.log(agetotal);

// const age = prompt("Dogum ilinizi yazin");
// const day = (2025 - age) * 365
// console.log(day);

// ------------------------------------------------------------------------------------------------------------------------------


// ## Task-07

// Ədədlər üzərində əməliyyatları yerinə yetirin.
// `num` dəyişənində iki rəqəmli ədəd saxlanılır.
// Belə proqram yazın:

// - Bu ədədin beşinci dərəcə qüvvətə qaldırılmış vəziyyətini.
// - 3 - ə bölünmədən qalan bu ədədin qalığını.


// const nums = prompt("reqem yazin")
// const num1 = (nums ** 5) % 3
// console.log(num1);


// ------------------------------------------------------------------------------------------------------------------------------


// ## Task -08

// firstName dəyişənində istifadəçinin adı,
//     lastName — dəyişənində isə soyadı saxlanır.
// Konsola bu növ mesaj çıxarın “Sizin adınız[firstName][lastName].Tanışlığımıza çox şadam!”

// const firstName = "Qafar"
// const lastName = "Qemberzade"
// console.log("Sizin adınız" ,firstName,lastName,"Tanışlığımıza çox şadam!");


// ------------------------------------------------------------------------------------------------------------------------------


// ## Task -09

// Şablon mətnlərdən istifadə edərək, konsola
// “Sizi bir daha görməyimizə şadıq, `[firstName]` `[lastName]`” mesajını çıxarın.

// const firstName = prompt("Adinizi Yazin")
// const lastName = prompt("Soy adinizi yazin")
// const fullName = firstName +" " + lastName
// console.log(fullName, "Sizi bir daha görməyimizə şadıq");

// ------------------------------------------------------------------------------------------------------------------------------

// ## Task - 10

// Addaki hərflərin sayını konsola çıxarın.
// `fullName` dəyişənində istifadəçinin tam adı saxlanılır.
// Probel hərf olaraq sayılmır.

// const fullName = "Qafar"
// console.log(fullName.length);


// ------------------------------------------------------------------------------------------------------------------------------


// ## Task - 11

// İstifadəçinin adını və soyadını boşluqlarla ayıraraq fullName dəyişəninə yazın.
// fullName dəyişəninin dəyərindən istifadə edərək istifadəçinin baş hərflərini
// konsola çıxaran proqram yazın.

// let fullName = "Qafar"
// console.log(fullName.slice(0,1));

// ------------------------------------------------------------------------------------------------------------------------------


// ## Task - 12

// İstifadəçidən tam adı «AD SOYAD» formatında daxil etməyi xahiş edin.
// Tam adını konsola fərqli qaydada yəni «SOYAD AD» formatında çıxarın,


// const name = "Qafar"
// const Surname = "Qemberzade"
// const swapName = Surname
// const swapSurname = name
// console.log("Name", swapName, "Surname", swapSurname);

// function fullName(name, surname) {
//     swap = name;
//     name = surname;
//     surname = swap;

//     console.log("Name: " + name);
//     console.log("Surname: " + surname);
// }
// fullName("Qafar", "Qemberzade");


// ------------------------------------------------------------------------------------------------------------------------------

// ## Task - 13

// İstifadəçidən adını daxil etməsini istəyin.
//     Konsola "Salam, [ad]!" formatında salamlama mesajı çıxarın.

// let name = prompt("Salam adinizi qeyd edin :)")
// alert(`Salam ${name}`)
// console.log(`Salam ${name}`);

// ------------------------------------------------------------------------------------------------------------------------------

// ## Task - 14

// İstifadəçidən iki ayrı prompt əmri ilə iki ədəd daxil etməsini istəyin.
// Bu ədədlərin toplama, çıxma, vurma və bölməsinin nəticələrin konsola
// alt - alta 4 sətir olaraq çıxarın.

// const num_1 = Number(prompt("Birinci rəqəmi yaz:"));
// const num_2 = Number(prompt("İkinci rəqəmi yaz:"));

// const toplama = num_1 + num_2;
// const cixma = num_1 - num_2;
// const vurma = num_1 * num_2;
// const bolme = num_1 / num_2;

// console.log(`${num_1} + ${num_2} = ${toplama}`);
// console.log(`${num_1} - ${num_2} = ${cixma}`);
// console.log(`${num_1} * ${num_2} = ${vurma}`);
// console.log(`${num_1} / ${num_2} = ${bolme}`);

// ------------------------------------------------------------------------------------------------------------------------------


// ## Task - 15

// 12345 və 98765 ədədlərinin hasilindən alınan nəticənin 6 - cı rəqəmini tapan proqram yazın.


// let num = 12345 * 98765
// console.log(num);
// let total = String(num)[6]
// let total = num.toString()[6]
// console.log(total);


// ------------------------------------------------------------------------------------------------------------------------------


// ## Task - 16

// Əməliyyatların nəticəsini müəyyənləşdirin.

// "" + 1 + 0 =
// "" - 1 + 0 =
// "true" - false =
// 6 / "3" =
// 4 + 5 + "px" =
// "$" + 4 + 5 =
// "4" - 2 =
// NaN + "px" =
// 7 / 0 =
// "-9" + 5 =
// "-9" - 5 =
// null + 1 =
// undefined + 1 =


// ------------------------------------------------------------------------------------------------------------------------------

// ## Task - 17

// Rəqəmlərin cəmini göstərən proqram yazın.
// İstifadəçidən dörd rəqəmli ədəd daxil etməsini xahiş edən və
// sonra daxil edilmiş ədədlərin rəqəmlərinin cəmini konsola çıxaran proqram yazın.

// let user = prompt("dörd rəqəmli ədəd daxil edin zehmet olmasa")
// let toplama = +user[0] + +user[1] + +user[2] + +user[3]
// console.log(toplama);


// ------------------------------------------------------------------------------------------------------------------------------

// ## Task - 18

// İstifadəçinin soyadını və adını almaq üçün proqram tərtib edin.
// Proqram bir mesajla istifadəçinin soyadını və adını daxil etməsini istəyir və
// konsola «Salam, <ad>!» mesajını çıxarır.

// let name =  prompt(`Salam adinizi yazin!`)
// console.log(`Salam ${name}`);


// ------------------------------------------------------------------------------------------------------------------------------

// ## Task-19

// Qiyməti mətn halına salan proqram tərtib edin.
// İstifadəçidən «530.90» formatında qiymət daxil etməyi xahiş edən və
// qiyməti «530 manat 90 qəpik» formatında konsola çıxaran proqram tərtib edin.

// let user = prompt(`"Salam manat ve qepik olaraq qeyd edin " Numunu : 530.90" `)
// let pul = user.split(".")
// console.log(`${pul[0]} manat ${pul[1]} qəpik»`);



// ------------------------------------------------------------------------------------------------------------------------------

// ## Task-20

// Vergi nəzərə alınmadan əmək haqqı məbləğini hesablayan proqram tərtib edin.
// Proqram istifadəçidən əmək haqqı məbləğin soruşur və
// 13% vergi istisna olmaqla məbləği konsola çıxarır.

// let emek = +prompt(`Salam gozel insan ne qeder emek haqqi alirsan ? duzgun de :)`)
// let emekhaqqi = emek * 13 / 100
// console.log(`Salam siz ${emekhaqqi} manat vergi verirsiniz DOVLETE !`);


// ------------------------------------------------------------------------------------------------------------------------------

// ## Task-21

// İstifadəçidən soyad, ad və ata adını istəyən,
// soyadı və baş hərfləri konsola çıxaran proqram tərtib edin.
// Məsələn, «İvanov Pyotr Sergeevich» — «İvanov P.S.».

// let surname = prompt("Soyadini yazin");
// let name = prompt("Adinizi yazin");
// let fatherName = prompt("Ata adini yazin");
// console.log(`${surname} ${name[0]}.${fatherName[0]}`);



// ------------------------------------------------------------------------------------------------------------------------------

// ## Task-22

// Depozitdən mənfəətin hesablanması üçün proqram yazın.
// Proqram istifadəçidən əmanətin məbləğini, müddətini və
// faiz dərəcəsini daxil etməsini istəyir və gözlənilən mənfəəti hesablayır.

// let emanetinMeblegi = prompt("Emanetin meblegini daxil edin:")
// let vaxt = prompt("Emanetin muddetini aylarla daxil edin:")
// let faiz = prompt("Faiz derecesini daxil edin:")
// let menfeet = (emanetinMeblegi * faiz * vaxt) / (12 * 100);
// console.log("Gözlənilən mənfəət: " + menfeet.toFixed(2));






// ------------------------------------------------------------------------------------------------------------------------------

// ## Task-23

// Müxtəlif müqayisə operatorları ilə 5 ifadə yazın.
// value dəyişəni üçün müxtəlif müqayisə operatorları ilə 5 ifadə yazın,
// hansıki əməliyyat nəticəsi value = 10 üçün true və value = 20 üçün false olacaq.


// let value = 10

// console.log(value === 10);
// console.log(value !== 10);
// console.log(value && 10);
// console.log(value && 20);
// console.log(value || 25);
// console.log(!(value > 15));
// console.log(value < 5);
// console.log(15 > value);
// console.log(20 !== value);
// console.log(!(value > 15) && !(value > 15) );



// ------------------------------------------------------------------------------------------------------------------------------

// ## Task-24

// İstifadəçidən yaşını soruşun.
// Əgər yaşı 18-dən azdırsa, o zaman brauzerdə «Access denied» bildirişi çıxarın.
// Əks halda «Access granted» bildirişini çıxarın.

// let age = prompt("yasinizi yazin");

// if (age === "" || age === null) {
//     alert("bosdu");
// } else if (+age < 18) {
//     alert("Access denied");
// } else if (+age >= 18) {
//     alert("Access granted");
// }


// ------------------------------------------------------------------------------------------------------------------------------

// ## Task-25

// Üç ədədin ortancılını tapmaq üçün proqram yazın.
// İstifadəçidən bir bildirişlə üç ikirəqəmli ədəd daxil etməsini xahiş edin.
// Konsola orta ədədi, yəni nə ən böyüyü, nə də ən kiçiyini çıxarmayın.
// İstifadəçi bir neçə eyni nömrə daxil edibsə, xəta bildirişi çıxarın.

// Məsələn:

// - "45 46 47"
// - "47 46 45"
// - "46 45 47"
// - "46 47 45"

// method v1
// let num = prompt(" üç ikirəqəmli ədəd daxil edin!!")
// let str = num.trim().split(" ").sort()
// let num1 = str[0]
// let num2 = str[1]
// let num3 = str[2]
// if(num1 === num2 || num1 === num3 || num2 === num3){
// console.log("404 reqemler eyni olmali deyil zehmet olmasa ferqli yaz")
// }
// console.log(num2);

// method v2
// let num = prompt(" üç ikirəqəmli ədəd daxil edin!!");
// let str = num.trim().split(" ").sort();
// let num1 = +str[0];
// let num2 = +str[1];
// let num3 = +str[2];
// (num1 === num2 || num1 === num3 || num2 === num3)
//     ? console.log("404 reqemler eyni olmali deyil")
//     : console.log(num2);




// ------------------------------------------------------------------------------------------------------------------------------



// ## Task-26

// İstifadəçidən bir il daxil etməsini soruşun və ilin uzun il olub olmadığını yoxlayın.
// Uzun il 4-ə qalıqsız bölünən ildir.
// Daxil edilmiş il uzun ildirsə, konsola mesaj cıxarın.
// «İl uzun il deyil» və ya «İl uzun ildir» mesajını çıxarın.


// let bildiris = prompt("Uzun il qeyd edin")
// if (bildiris % 4 === 0) {
//     console.log("Daxil etdiyiniz il uzun ildir");
// }
// else {
//     console.log("il uzun il deyiL");
// }




// ------------------------------------------------------------------------------------------------------------------------------

// ## Task-27

// if...else operatoru ilə yazılmış kodu switch operatoruna dəyişdirməklə kodu yenidən yazın.

// ```javascript
// let id = prompt("enter product id:");
// if (id === "1") {
//   alert("Available 10 pcs.");
// } else if (id === "2") {
//   alert("Available 256 pcs.");
// } else if (id === "3") {
//   alert("Available 53 pcs.");
// } else if (id === "4") {
//   alert("There are 3 available.");
// } else {
//   alert("Out of stock");
// }
// ```







// ------------------------------------------------------------------------------------------------------------------------------

// ## Task-28

// İstifadəçidən onun cinsini (M və ya F hərfləri şəklində) sorğulayan və
// gender dəyişəninə male yaxud female sözlərindən birini yazdıran proqramı yazın






// ------------------------------------------------------------------------------------------------------------------------------

// ## Task-29

// Ayın adını mətnlə konsola yazdıran bir program yazın.
// İstifadəçidən ayın nömrəsini soruşun və adını konsola çıxarın.






// ------------------------------------------------------------------------------------------------------------------------------

// ## Task-30

// İstifadəçi tərəfindən daxil edilmiş tarixin təsvirini çıxarın.
// İstifadəçidən tarixi «2009.12.19» formatında daxil etməyi xahiş edin.
// Tarixin təsvirini «19 Dekabr 2009-cu il» formatında çıxarın.
// Daxil edilmiş dəyərə validator əlavə edin.
// İstifadəçi səhv formatda dəyər daxil edərsə, «Yanlış dəyər daxil edilib» bildirişi göstərin.




// ------------------------------------------------------------------------------------------------------------------------------


// ## Task-31
// ```
// let p = 8;
// let q = p-- - --p + p++ + ++p;
// console.log(p, q);
// 8 16
// ```





// ------------------------------------------------------------------------------------------------------------------------------


// ## Task-32
// ```
// let a = 6, b = 4, c = 2;

// let x = ++a - b-- + c++ - --b + a++;
// let y = a-- + --c - ++b + x++ - --a;

// console.log(a, b, c, x, y); 
// 6 3 2 11 11
// ```








// ------------------------------------------------------------------------------------------------------------------------------

// ## Task-33
// ```
// let a = 7, b = 3, c = 5;

// let x = a-- - ++b + c++ - --a + b++ - --c + a++ - b-- + c++;
// let y = --x + a++ - --b + c-- - x++ + ++a - b++ + --c - x--;
// let z = a-- + ++b - --c + x++ - --y + b-- - ++x + c++ - --a + y++;

// console.log(a, b, c, x, y, z);
// 6 4 4 8 11 10
// ```








// ------------------------------------------------------------------------------------------------------------------------------

// ## Task-34

// Ədədin Müsbət, Mənfi və ya Sıfır Olduğunu Yoxla
// Verilmiş ədədin müsbət, mənfi və ya sıfır olduğunu müəyyən edin.








// ------------------------------------------------------------------------------------------------------------------------------


// ## Task-35

// **Üç Ədəddən Ən Böyüyünü Tap** <br>
// let a = 5, b = 8, c = 3;

// method v1
// let num = [5,8,3]
// let num1 = Math.max(...num)
// let num2 = Math.min(...num)

// console.log(num1);
// console.log(num2);

// method v2
// let num = [5,3,12].sort((a, b) => b - a);
// console.log(num[0]);






// ------------------------------------------------------------------------------------------------------------------------------


// ## Task-36

// **Cüt və ya Tək Ədəd** <br>
// Verilmiş ədədin cüt və ya tək olduğunu ternary operatoru ilə müəyyən edin.

// let num = 15
// let tekcut = num % 2 === 0
// ? console.log("reqem cutdur")
// : console.log("reqem tekdir")





// ------------------------------------------------------------------------------------------------------------------------------


// ## Task-37

// **Kvadratın Sahəsi və Perimetri** <br>
// Bir tərəfi `a` olan kvadrat üçün sahəni və perimetri tapın.

// method 1 
// let num1 = 2
// let num2 = 6
// let perimetri = num1 * num2
// let sahesi = (num1 + num2) * 2
// console.log(perimetri)
// console.log(sahesi);


// method 2
// function duzbucaqlinin_sahesini_hesabla(kisa,uzun){
//     let mesafa = kisa * uzun
//     let sahesi = ( kisa + uzun) * 2
//     return `Mesafesini:${mesafa} Sahesi: ${sahesi}`;
// }
// let netice = duzbucaqlinin_sahesini_hesabla(10,5)
// console.log(netice)





// ------------------------------------------------------------------------------------------------------------------------------


// ## Task-38

// **Qiymətə Görə Nəticə (switch-case)** <br>
// Qiymət verilir (0-100). Aşağıdakı qaydaya əsasən nəticəni `switch-case` ilə yazın:

// - 90-100: Əla
// - 75-89: Yaxşı
// - 60-74: Orta
// - 0-59: Zəif

// > Qeyd: `switch(true)` üsulu ilə istifadə edin.









// ------------------------------------------------------------------------------------------------------------------------------

// ## Task-39

// **0-50 Arasında Təsadüfi Ədəd** <br>
// 0 ilə 100 arasında `Math.random()` ilə təsadüfi ədəd yaradın və onun 0-50 arasında olub olmadığını yoxlayın.

// let random = Math.floor(Math.random() * 100)
// if (random <= 50 && random >= 0) {
//     console.log(`${random} reqeminiz 0-50 arasindadir`);
// }
// else {
//     console.log(`${random} reqeminiz 50-100 arasindadir`);

// }
// console.log((random <= 50 && random >= 0)
//     ? `${random} reqeminiz 0-50 arasindadir`
//     : `${random} reqeminiz 50-100 arasindadir`
// );

// ------------------------------------------------------------------------------------------------------------------------------


// ## Task-40
// **Sadə Kalkulyator (switch-case)** <br>
// İki ədəd və operator (`+`, `-`, `*`, `/`) verilib. `switch-case` ilə əməliyyatı icra edin.
// let a = 5, b = 3, op = "*";





// ------------------------------------------------------------------------------------------------------------------------------
