function win() {
    let whitespace = document.getElementById("whitespace");
    whitespace.innerHTML = "&#128523";
    whitespace.style = "animation-name: yummy;"
}

function buttonRunVertical(operator, increment) {
    let ogPos = document.getElementById("box").style.top
    let Pos = Number(ogPos.replace("px", ""))
    if (operator=="down") {
        document.getElementById("box").style.top = Pos+increment+"px";
    }
    else {
        document.getElementById("box").style.top = Pos-increment+"px";
    }
}

function buttonRunHorizontal(operator, increment) {
    let ogPos = document.getElementById("box").style.left
    let Pos = Number(ogPos.replace("px", ""))
    if (operator=="right") {
        document.getElementById("box").style.left = Pos+increment+"px";
    }
    else {
        document.getElementById("box").style.left = Pos-increment+"px";
    }
}
// need to finish diagonal
function buttonRunDiagonal(operator, increment) {
    let horPos = Number(document.getElementById("box").style.left.replace("px", ""))
    let vertPos = Number(document.getElementById("box").style.top.replace("px", ""))
    if (operator == "downright") {
        document.getElementById("box").style.left = horPos+increment+"px";
        document.getElementById("box").style.top = vertPos+increment+"px";
    }
    else if (operator == "upleft"){
        document.getElementById("box").style.left = horPos-increment+"px";
        document.getElementById("box").style.top = vertPos-increment+"px";
    }
}

function mousePosRelToButtonPos() {
    let horOgPos = document.getElementById("box").style.left;
    let horPos = Number(horOgPos.replace("px", "")) + 146;

    let vertOgPos = document.getElementById("box").style.top;
    let vertPos = Number(vertOgPos.replace("px", "")) + 86;

    window.addEventListener("mousemove", (event) => {
        mousePos = { x: event.clientX, y: event.clientY };
    })
    // console.log(mousePos.x + "|" + mousePos.y)  

    //actual movement

    if (mousePos.y > vertPos) {
        buttonRunVertical("up", 25);
    }
    else if (mousePos.y < vertPos) {
        buttonRunVertical("down", 25);
    }

    if (mousePos.x > horPos) {
        buttonRunHorizontal("left", 25);
    }
    else if (mousePos.x < horPos) {
        buttonRunHorizontal("right", 25);
    }
} 