// 📌 Tapşırıq 1
// Aşağıdakı array verilib:
const fruits = ["apple", "banana", "orange", "kiwi", "apple"];

// 👉 Funksiya yaz ki:
// Array-dən təkrarlanan elementləri silsin
// Yeni unikal array qaytarsın
let copy = new Set(fruits)
console.log(copy)

function remoweCopy(arr){
  return new Set(arr)
}
console.log(remoweCopy(fruits))

// 📌 Tapşırıq 2
// Aşağıdakı array verilib:
// 👉 Funksiya yaz ki:
// Yalnız cüt ədədləri götürsün
// Onların kvadratlarını yeni array kimi qaytarsın

const numbers = [3, 6, 9, 12, 15, 18, 21];
function total(arr) {
  return arr.filter(num => num % 2 === 0).map(num => num * num);          
}
console.log(total(numbers));

// 📌 Tapşırıq 3
// Obyektin name və age sahələrini ekrana çıxart.
// scores array-indən orta balı hesabla
const student = {
  name: "Aysel",
  age: 20,
  scores: [90, 85, 78],
  fullName(){
    return `Adi ${this.name} ${this.age} yasi var`
  }
};
console.log(student.fullName())

// 📌 Tapşırıq 4
// Bu funksiya firstName və lastName qəbul etsin və onları birləşdirib tam ad kimi qaytarsın.
function fullName(firstName,lastName){
  return `${firstName} ${lastName}`
}
console.log(fullName("Qafar","Qemberzade"))

// 📌 Tapşırıq 5
// Bu funksiya array qəbul etsin və yalnız cüt ədədləri qaytarsın.
function cutededler(num){
  return num.filter(num => num % 2 === 0)
} 
console.log(cutededler([1,2,3,4,5,6,7,8,9,10]))

