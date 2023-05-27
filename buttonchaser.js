function win() {
    document.getElementById("whitespace").innerHTML = "&#9760";
}

function buttonRunVertical() {
    let ogpos = document.getElementById("button").style.top
    let pos = Number(ogpos.replace("px", ""))
    console.log(pos)
    document.getElementById("button").style.top = pos-50+"px";
}

function buttonRunHorizontal() {
    let ogpos = document.getElementById("button").style.left
    let pos = Number(ogpos.replace("px", ""))
    console.log(pos)
    document.getElementById("button").style.left = pos-50+"px";
}

function mousePosRelToButtonPos() {
    window.addEventListener("mousemove", (event) => {
        mousePos = { x: event.clientX, y: event.clientY };
    })
    /*console.log(mousePos.x + "|" + mousePos.y)  very laggy if uncommented and mouse moves fast lol*/

    
}