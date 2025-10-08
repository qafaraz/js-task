// # Javascript Dom Tasks

//     ```HTML KOD

// <h1>GeForce 20</h1>
// <ul>
//   <li>GTX 1650</li>
//   <li>GTX 1660</li>
//   <li class="primary">GTX 1660 Ti</li>
//   <li>RTX 2070</li>
//   <li>RTX 2080</li>
//   <li class="primary">RTX 2080 Ti</li>
// </ul>
// ```


// ## Task-01

//     ```
// HTML-kod verilmişdir. Siyahının ilk elementini konsola çıxarın.
// ```

// const oneList = document.querySelector("li:nth-child(1)")
// console.log(oneList);



// ## Task-02

//     ```
// HTML-kod verilmişdir. Yalnız JS-kodundan istifadə edərək dəyişklik edin:
// - Başlığı silin;
// - Siyahının sonuna mətn ilə yeni bir bölmə «TITAN RTX» əlavə edin .
// ```

// const deleteh1 = document.querySelector("h1")
// deleteh1.remove()

// const h2 = document.createElement("h2")
// h2.textContent = "TITAN RTX"
// h2.style.color = "blue"
// document.body.append(h2)


// ## Task-03

//     ```
// HTML-kod verilmişdir. Yalnız JS-kodundan istifadə edərək dəyişklik edin:
// - başlıq mətnini «GeForce 20 Series» -a;
// - fon rəngi stili primary klası olan elementləri #ebebeb rənginə dəyişdirin.
// ```

// const h1 = document.querySelector("h1")
// h1.textContent = "GeForce 20 Series"

// const colors = document.querySelectorAll(".primary")
// colors.forEach(list => {
//     list.className = "text-[#ebebeb]";
// });


// ## Task-04

//     ```
// HTML-kodu verilib. Siyahının primary klasına sahib olan bütün elementlərini konsola çıxarın.
// ```

// const colors = document.querySelectorAll(".primary")
// console.log(colors);



// ## Task-05

//     ```
// HTML-kod verilmişdir. Yalnız JS kodundan istifadə edərək sinifləri dəyişdirin:
// - bütün siyahı elementlərinə item sinifi əlavə edin;
// - siyahıda primary sinfi olmayan elementlərə secondary sinfi əlavə edin.
// ```


// const list = document.querySelectorAll("li");
// list.forEach(item => {
//     item.classList.add("item")
//     item.classList.toggle("secondary", !item.classList.contains("primary"));
// })


