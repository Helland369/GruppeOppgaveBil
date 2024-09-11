//const main = document.getElementById("game");

let array = [
    "Kul1",
    "Kul2",
    "Kul3",
    "Ikke kul1",
    "Ikke kul2",
    "Ikke kul3",
    "Kompis sier Yo",
    "Kompis sier Hallo",
    "Kompis sier Morn",
    "Kompis",
    "Karen",
];

//let hils = ["Yo", "Hallo", "Morn"];

let random = array[Math.floor(Math.random() * array.length)];

console.log(random);

//hilsner(1);
function randAction(select) {
    if (random == "Kul1" && select == 1) {
        main.innerHTML = "Riktig Svar";
    } else if (random == "Kul2" && select == 2) {
        main.innerHTML = "Riktig Svar";
    } else if (random == "Kul3" && select == 3) {
        main.innerHTML = "Riktig svar";
    } else if (random == "Ikke kul1" && select == 4) {
        main.innerHTML = "Riktig svar";
    } else if (random == "Ikke kul2" && select == 5) {
        main.innerHTML = "Riktig svar";
    } else if (random == "Ikke kul3" && select == 6) {
        main.innerHTML = "Riktig svar";
    } else if (random == "Yo" && select == 7) {
        main.innerHTML = "Riktig svar";
    } else if (random == "Hallo" && select == 8) {
        main.innerHTML = "Riktig svar";
    } else if (random == "Morn" && select == 9) {
        main.innerHTML = "Riktig svar";
    } else {
        main.innerHTML = "Feil Svar";
    }
}

function randomKul() {}
