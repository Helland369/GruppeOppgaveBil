updateView()
function updateView(){
    document.getElementById('main').innerHTML = /*HTML*/`
    <button onclick="drive()">Kjør</button>
    <button onclick="pickUp()">Plukk opp</button>
    <button onclick="ignore()">Ignorer</button>

    <div id="hilse">
        <button onclick="hilse1">What's up</button>
        <button onclick="hilse2">God dag</button>
        <button onclick="hilse3">High five</button>
    </div>

    `
}