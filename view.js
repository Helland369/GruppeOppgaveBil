const main = document.getElementById("main");
let eventBox = document.getElementById("textB");


dispMain();

function dispMain() {
    main.innerHTML = `
        <div id="disp"></div>
        <div id="disp2"></div>
        <button onclick="getRandomItem()">Kjør</button>  
        <button onclick="randAction(1)">1</button>
        <button onclick="randAction(2)">2</button>
        <button onclick="randAction(3)">3</button>
        <button onclick="randAction(4)">4</button>
        <button onclick="randAction(5)">5</button>
        <button onclick="randAction(6)">6</button>
        <button onclick="randAction(7)">6</button>
        <button onclick="randAction(8)">7</button>
        <button onclick="randAction(9)">8</button>
        <button onclick="getRandomItem()">Kjør</button>
    `;
}

const disp = document.getElementById("disp");
const disp2 = document.getElementById("disp2");

//-------------------------------------------------------------

updateTextBox();
function updateTextBox() {}
