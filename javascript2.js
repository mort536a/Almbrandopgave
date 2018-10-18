let kvikrente = 1.45;
let forbrugsrente = 1.07;

let slider = document.getElementById("myRange");
let pris = document.getElementById("price");
let fly_kvik = document.getElementById("fly_kvik");
let fly_forbrug = document.getElementById("fly_forbrug");
let kaffe_kvik = document.getElementById("kaffe_kvik");
let kaffe_forbrug = document.getElementById("kaffe_forbrug");
let biograf_kvik = document.getElementById("biograf_kvik");
let biograf_forbrug = document.getElementById("biograf_forbrug");
let cykler_kvik = document.getElementById("cykler_kvik");
let cykler_forbrug = document.getElementById("cykler_forbrug");
let computer_kvik = document.getElementById("computer_kvik");
let computer_forbrug = document.getElementById("computer_forbrug");
let smartphone_kvik = document.getElementById("smartphone_kvik");
let smartphone_forbrug = document.getElementById("smartphone_forbrug");

pris.innerHTML = slider.value;

fly_kvik.innerHTML = fly_kvik.value;
fly_forbrug.innerHTML = fly_forbrug.value;
kaffe_kvik.innerHTML = kaffe_kvik.value;
kaffe_forbrug.innerHTML = fly_forbrug.value;
biograf_kvik.innerHTML = biograf_kvik.value;
biograf_forbrug.innerHTML = biograf_forbrug.value;
cykler_kvik.innerHTML = cykler_kvik.value;
cykler_forbrug.innerHTML = cykler_forbrug.value;
computer_kvik.innerHTML = computer_kvik.value;
computer_forbrug.innerHTML = computer_forbrug.value;
smartphone_kvik.innerHTML = smartphone_kvik.value;
smartphone_forbrug.innerHTML = smartphone_forbrug.value;


slider.addEventListener("input", shownumbers);

shownumbers();

function shownumbers() {

    let myvalue = slider.value;

    let kvik = myvalue * kvikrente;
    let forbrug = myvalue * forbrugsrente;

    pris.innerHTML = myvalue;
    fly_kvik.innerHTML = Math.round(kvik / 2800);
    fly_forbrug.innerHTML = Math.round(forbrug / 2800);
    kaffe_kvik.innerHTML = Math.round(kvik / 04);
    kaffe_forbrug.innerHTML = Math.round(forbrug / 04);
    biograf_kvik.innerHTML = Math.round(kvik / 120);
    biograf_forbrug.innerHTML = Math.round(forbrug / 120)
    cykler_kvik.innerHTML = Math.round(kvik / 3000);
    cykler_forbrug.innerHTML = Math.round(forbrug / 3000);
    computer_kvik.innerHTML = Math.round(kvik / 5000);
    computer_forbrug.innerHTML = Math.round(forbrug / 3000);
    smartphone_kvik.innerHTML = Math.round(kvik / 4000);
    smartphone_forbrug.innerHTML = Math.round(forbrug / 4000);

}
