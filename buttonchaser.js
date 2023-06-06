function win() {
    let whitespace = document.getElementById("whitespace");
    whitespace.innerHTML = "&#128523";
    whitespace.style = "animation-name: yummy;"
}

function buttonRunVertical(operator, increment) {
    let ogPos = window.getComputedStyle(document.querySelector('#box')).top
    // console.log(ogPos+"y")
    let Pos = Number(ogPos.replace("px", ""))
    if (operator=="down") {
        document.getElementById("box").style.top = Pos+increment+"px";
    }
    else {
        document.getElementById("box").style.top = Pos-increment+"px";
    }
}

function buttonRunHorizontal(operator, increment) {
    let ogPos = window.getComputedStyle(document.querySelector('#box')).left
    // console.log(ogPos +"x")
    let Pos = Number(ogPos.replace("px", ""))
    if (operator=="right") {
        document.getElementById("box").style.left = Pos+increment+"px";
    }
    else {
        document.getElementById("box").style.left = Pos-increment+"px";
    }
}

var previousid;
function buttonRun(id) {

    increment = 30

    if (id == "button") {
        id = previousid
        increment = 60
    }

    if (id == "top") {
        buttonRunVertical("down", increment)
    }
    if (id == "bottom") {
        buttonRunVertical("up", increment)
    }
    if (id == "left") {
        buttonRunHorizontal("right", increment)
    }
    if (id == "right") {
        buttonRunHorizontal("left", increment)
    }
    if (id == "topleft") {
        buttonRunVertical("down", increment)
        buttonRunHorizontal("right", increment)
    }
    if (id == "bottomleft") {
        buttonRunVertical("up",increment)
        buttonRunHorizontal("right",increment)
    }
    if (id == "topright") {
        buttonRunVertical("down",increment)
        buttonRunHorizontal("left",increment)
    }
    if (id == "bottomright") {
        buttonRunVertical("up",increment)
        buttonRunHorizontal("left",increment)
    }
    previousid = id
} 