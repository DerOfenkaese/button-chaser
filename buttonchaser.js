function win() {
    let whitespace = document.getElementById("whitespace")
    whitespace.innerHTML = "&#128523"
    whitespace.style = "animation-name: yummy"
}

//little brother named this function certified
function pawPatrol() {
    let box = document.getElementById("box").style
    let boxTopNum = Number(box.top.replace("px", ""))
    let boxLeftNum = Number(box.left.replace("px", ""))

    if (boxTopNum > window.outerHeight - 180 || boxTopNum < -70 || boxLeftNum > window.outerWidth -180 || boxLeftNum < -90) {
        box.top = window.outerHeight / 2 + "px"
        box.left = window.outerHeight / 2 + "px"
    }
}

function buttonRunVertical(operator, increment) {
    let ogPos = window.getComputedStyle(document.querySelector('#box')).top
    // console.log(ogPos+"y")
    let Pos = Number(ogPos.replace("px", ""))
    if (operator=="down") {
        document.getElementById("box").style.top = Pos+increment+"px"
    }
    else {
        document.getElementById("box").style.top = Pos-increment+"px"
    }
}

function buttonRunHorizontal(operator, increment) {
    let ogPos = window.getComputedStyle(document.querySelector('#box')).left
    // console.log(ogPos +"x")
    let Pos = Number(ogPos.replace("px", ""))
    if (operator=="right") {
        document.getElementById("box").style.left = Pos+increment+"px"
    }
    else {
        document.getElementById("box").style.left = Pos-increment+"px"
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
    previousid = id;

    pawPatrol();

} 