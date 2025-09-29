// # Javascript Object Tasks

// ## Task-01

// ```
// Adınız, cinsiniz və doğum tarixiniz olan user obyekti
// yaradın (name, gender, birthday).
// Konsola doğum tarixini çıxarın.
// ```

// let users = {
//         name: "Qafar",
//         surname: "Qemberzade",
//         gender : "Male",
//         birthday : "16.04.2005"
//     }
// console.log(users.birthday);


// ## Task-02

// ```
// Bu obyektə yaş (age) əlavə edin və doğum tarixini silin.
// Alınmış obyekti konsola çıxarın.
// ```
// let users = [
//     {
//         name: "Qafar",
//         surname: "Qemberzade",
//         gender : "Male",
//         birthday : "16.04.2005"
//     }
// ]
// users[0].age = 20
// delete users[0].birthday
// console.log(users);

// ## Task-03

// ```
// Obyektə metodlar əlavə edin.
//     setAge — istifadəçi yaşını dəyişdirən metoddur.
//     getYearsBeforeRetirement — pensiyaya qədər istifadəçinin
// qalan illərinin sayını qaytaran metoddur.
// Bu metodları çağırın.
// ```

// let users = [
//     {
//         name: "Qafar",
//         surname: "Qemberzade",
//         age: 20,
//         getYearsBeforeRetirement: function () {
//             return `${65 - this.age} iliniz qalib pensiyaya!`
//         }
//     },
// ]
// console.log(users[0].getYearsBeforeRetirement());


// ## Task-04

// Müştəri Kredit kartı ilə işləmək üçün obyekt yaradın.
// Müştərinin hesabı haqqında əsas məlumatları və onunla işləmə
// metodlarını əhatə edən client obyekti yaradın.

// #### =>client obyekti yaradın.

// ```
//     Kredit kartı müştərisi üçün aşağıdakı xüsusiyyətlərə malik obyekt yaradın:
//     - Tam adı müştərinin (fullName).
//     - Kredit limiti (creditLimit).
//     - Cari balans (balans).
//     - Minimum ödənişin faizi (precentOfMinPayment).
// ```
// #### =>Cari balans əldə etmək üçün getBalance metodu əlavə edin.
// ```
//     getBalance metodu, balans mənfi olarsa, müştərinin balansı və ya onun borcu haqqında bir mesaj qaytarır.
//     Metodun çağırılma nümunəsi:
//     console.log(client.getBalance()).
//     Mesaj nümunələri:
//     «Balansınız 3000»,
//     «Borcunuz 2000».
// ```
// #### =>Minimum ödəniş məbləği üçün getMinPaymant metodunu əlavə edin.
// ```
//     getMinPaymant metodu borc məbləği və minimum ödəniş
//     faizinə əsasən formalaşan minimum
//     ödəniş məbləği haqqında mesaj qaytarır.
//     Əgər borc yoxdursa, metod müvafiq mesajı qaytarır.
//     Metodun çağırılma nümunəsi:
//     console.log(client.getMinPaymant()).
//     Mesaj nümunələri:
//     «Minimum ödənişiniz 240»,
//     «Sizin borcunuz yoxdur».
// ```
// #### =>Hesabdan pul silmək üçün withdraw metodu əlavə edin.
// ```
//     withdraw metodu cari balansı parametr kimi ötürülən
//     pul məbləği qədər azaldır.
//     Mövcud vəsait kifayət deyilsə (cari balans və kredit
//     limitinin cəmi), metod konsola müvafiq mesajı çıxarır.
//     client.widthdraw(900)
// ```
// #### =>Hesaba pul əlavə etmək üçün refill metodu əlavə edin.
// ```
//     refill metodu parametr kimi qəbul edilən məbləğ qədər balansı artırır.
//     client.refill(1000)
// ```
// let client = {
//     name: "Qafar",
//     surname: "Qemberzade",
//     fullName: function () {
//         return this.name + " " + this.surname;
//     },
//     creditLimit: 5000,
//     balans: 3000,
//     precentOfMinPayment: 8,
//     getBalance: function () {
//         if (this.balans >= 0) {
//             return `balans ${this.balans}`;
//         } else {
//             return `borc ${Math.abs(this.balans)}`;
//         }
//     },
//     getMinPayment: function () {
//         if (this.balans < 0) {
//             let minPayment = Math.abs(this.balans) * this.precentOfMinPayment / 100;
//             return `minimum odenis ${minPayment}`;
//         } else {
//             return `sizin borcunuz yoxdur`;
//         }
//     },
//     withdraw: function (amount) {
//         if (this.balans - amount >= -this.creditLimit) {
//             this.balans -= amount;
//         } else {
//             console.log("Kifayet qeder mebleg yoxdur");
//         }
//     },
//     refill: function (amount) {
//         return this.balans += amount;
//     }

// }

// console.log(client.fullName());
// console.log(client.getBalance());
// console.log(client.getMinPayment());
// client.withdraw(1000);
// console.log(client.getBalance());
// console.log(client.refill(5000));




// ## Task-05

// ```
// Kalkulyator obyekti yaradın.
// Əsas riyazi hesablamaları yerinə yetirən və nəticəni
// yaddaşda saxlaya bilən kalkulyator obyekti yaradın.
//     - Obyekt yaradın və toplama, çıxma, vurma,
//     bölmə üçün metodlar əlavə edin.
//     Metodlar parametr kimi 2 ədəd götürür və bu ədədlər
//      üzərində müvafiq əməliyyatın nəticəsini qaytarır.
//     Yaddaşla işləmək imkanı əlavə edin.
//     - Obyektə dəyəri saxlamaq üçün özəllik əlavə edin.
//     Onunla işləmək üçün metodlar yaradın:
//     dəyərin yaddaşda saxlanması, yaddaşın təmizlənməsi,
//     yaddaşdan dəyərin oxunması.
// ```

// let calculator = {
//     memory: 0,
//     toplama: (a, b) => a + b,
//     cixma: (a, b) => a - b,
//     vurma: (a, b) => a * b,
//     bolme: (a, b) => {
//         if (b !== 0) return a / b;
//         else return "bolme sifira beraber ola bilmez";
//     },
//     saxla: value => calculator.memory = value,
//     temizle: () => calculator.memory = 0,
//     yaddas: () => calculator.memory
// };
// console.log(calculator.toplama(5, 3));
// console.log(calculator.cixma(10, 4));
// console.log(calculator.vurma(6, 7));
// console.log(calculator.bolme(20, 4));
// console.log(calculator.bolme(20, 0));
// console.log(calculator.saxla(15));
// console.log(calculator.yaddas());
// console.log(calculator.temizle());




// ## Task-06

// ```
// Verilmiş stringdə ən çox təkrarlanan elementi qaytaran `mostFrequent()` funksiyasını yazın.
// Məsələn, `mostFrequent("1, 3, 2, 3, 4, 3, 5, 3")` çağırıldıqda `3` qaytarmalıdır.
// ```

