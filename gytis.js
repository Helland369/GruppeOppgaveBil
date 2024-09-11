updateView()
function updateView(){
    document.getElementById('main').innerHTML = /*HTML*/`
    <button onclick="drive()">Kjør</button>
    <button onclick="pickUp()">Plukk opp</button>
    <button onclick="ignore()">Ignorer</button>
    
    <div id="hils">
        <button onclick="hils1">What's up</button>
        <button onclick="hils2">God dag</button>
        <button onclick="hils3">High five</button>
    </div>

    `
}