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
    let vertPos = Number(vertOgPos.replace("px", "")) + 43;

    window.addEventListener("mousemove", (event) => {
        mousePos = { x: event.clientX, y: event.clientY };
    })
    // console.log(mousePos.x + "|" + mousePos.y)  

    let horDifference = 0;
    let vertDifference = 0;
    
    if (mousePos.y > vertPos) {
        vertDifference = mousePos.y - vertPos;
    }
    else {
        vertDifference = vertPos - mousePos.y;
    }

    if (mousePos.x > horPos) {
        horDifference = mousePos.x - horPos;
    }
    else {
        horDifference = horPos - mousePos.x;
    }
    //actual movement

    if (mousePos.y > vertPos && vertDifference < 30 && horDifference < 75) {
        buttonRunVertical("up", 25);
    }
    else if (mousePos.y < vertPos && vertDifference < 30 && horDifference < 75) {
        buttonRunVertical("down", 25);
    }

    if (mousePos.x > horPos && horDifference < 90 && vertDifference < 25) {
        buttonRunHorizontal("left", 25);
    }
    else if (mousePos.x < horPos && horDifference < 90 && vertDifference < 25) {
        buttonRunHorizontal("right", 25);
    }
} 