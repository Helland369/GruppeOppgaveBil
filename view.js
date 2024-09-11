const main = document.getElementById("main");

dispMain();

function dispMain() {
    main.innerHTML = `
        <button onclick="randAction(1)">1</button>
        <button onclick="randAction(2)">2</button>
        <button onclick="randAction(3)">3</button>
        <button onclick="randAction(4)">4</button>
        <button onclick="randAction(5)">5</button>
        <button onclick="randAction(6)">6</button>
        <button onclick="randAction(7)">6</button>
        <button onclick="randAction(8)">7</button>
        <button onclick="randAction(9)">8</button>
    `;
}
