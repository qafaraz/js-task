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