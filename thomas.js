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

randomKul();

function randomKul() {
    disp.innerHTML = random;
    if (random == array[0]) {
        disp2.innerHTML = `
            <button onclick="randAction(1)">Kul1</button>
            <button onclick="randAction(2)">Kul2</button>
            <button onclick="randAction(3)">Kul3</button>
        `;
    } else if (random == array[1]) {
        disp2.innerHTML = `
            <button onclick="randAction(3)">Kul3</button>
            <button onclick="randAction(2)">Kul2</button>
            <button onclick="randAction(1)">Kul1</button>
        `;
    } else if (random == array[2]) {
        disp2.innerHTML = `
            <button onclick="randAction(1)">Kul1</button>
            <button onclick="randAction(3)">Kul3</button>
            <button onclick="randAction(2)">Kul2</button>
        `;
    } else if (random == array[3]) {
        disp2.innerHTML = `
            <button onclick="randAction(4)">Ikke kul1</button>
            <button onclick="randAction(5)">Ikke kul2</button>
            <button onclick="randAction(6)">Ikke kul3</button>
        `;
    } else if (random == array[4]) {
        disp2.innerHTML = `
            <button onclick="randAction(5)">Ikke kul2</button>
            <button onclick="randAction(6)">Ikke kul3</button>
            <button onclick="randAction(4)">Ikke kul1</button>
        `;
    } else if (random == array[5]) {
        disp2.innerHTML = `
            <button onclick="randAction(6)">Ikke kul3</button>
            <button onclick="randAction(5)">Ikke kul2</button>
            <button onclick="randAction(4)">Ikke kul1</button>
        `;
    } else if (random == array[6]) {
        disp2.innerHTML = `
            <button onclick="randAction(7)">Yo</button>
            <button onclick="randAction(8)">Hallo</button>
            <button onclick="randAction(9)">Morn</button>
        `;
    } else if (random == array[7]) {
        disp2.innerHTML = `
            <button onclick="randAction(8)">Hallo</button>
            <button onclick="randAction(7)">Yo</button>
            <button onclick="randAction(9)">Morn</button>
        `;
    } else if (random == array[8]) {
        disp2.innerHTML = `
            <button onclick="randAction(9)">Morn</button>
            <button onclick="randAction(7)">Yo</button>
            <button onclick="randAction(8)">Hallo</button>
        `;
    } else {
        disp2.innerHTML = `
            <button onclick="randomKul()">Kjør</button>  
        `;
    }
}
