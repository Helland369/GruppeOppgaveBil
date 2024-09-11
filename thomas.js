const game = document.getElementById("game");

let array = [
    "Kul1",
    "Kul2",
    "Kul3",
    "Ikke kul1",
    "Ikke kul2",
    "Ikke kul3",
    "Yo",
    "Hallo",
    "Morn",
];

//let hils = ["Yo", "Hallo", "Morn"];

let random = array[Math.floor(Math.random() * array.length)];

console.log(random);

//hilsner(1);
function randAction(select) {
    if (random == "Kul1" && select == 1) {
    } else if (random == "Kul2" && select == 2) {
    } else if (random == "Kul3" && select == 3) {
    } else if (random == "Ikke kul1" && select == 4) {
    } else if (random == "Ikke kul2" && select == 5) {
    } else if (random == "Ikke kul3" && select == 6) {
    } else if (random == "Yo" && select == 7) {
    } else if (random == "Hallo" && select == 8) {
    } else if (random == "Morn" && select == 9) {
    }
}

function randomKul() {}
