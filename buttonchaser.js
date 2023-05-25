function win() {
    document.getElementById("whitespace").innerHTML = "&#9760";
}

function buttonRunVertical() {
    let ogpos = document.getElementById("button").style.top
    pos = Number(ogpos.replace("px", ""))
    console.log(pos)
    document.getElementById("button").style.top = pos-50+"px";
}