updateView()
function updateView(){
    document.getElementById('main').innerHTML = /*HTML*/`
    <button onclick="drive()">Kjør</button><br>
    <button onclick="ignore()">Ignorer</button><br>
    <button onclick="pickUp()">Plukk opp</button><br>
    
    <div id="hils">
        <button onclick="hils1()">What's up</button>
        <button onclick="hils2()">God dag</button>
        <button onclick="hils3()">High five</button>
    </div>

    `
}