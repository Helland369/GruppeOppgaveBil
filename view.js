const main = document.getElementById("main");
let eventBox = document.getElementById("textB");

dispMain();

function dispMain() {
    main.innerHTML = `
        <div id="disp"></div>
        <div id="disp2"></div>
        <button onclick="randomKul()">Kjør</button>  
    `;
}

const disp = document.getElementById("disp");
const disp2 = document.getElementById("disp2");

//-------------------------------------------------------------

updateTextBox();
function updateTextBox() {}
