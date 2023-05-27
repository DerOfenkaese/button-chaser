function win() {
    document.getElementById("whitespace").innerHTML = "&#128523";
}

function buttonRunVertical(operator) {
    let ogPos = document.getElementById("button").style.top
    let Pos = Number(ogPos.replace("px", ""))
    if (operator=="add") {
        document.getElementById("button").style.top = Pos+30+"px";
    }
    else {
        document.getElementById("button").style.top = Pos-30+"px";
    }
}

function buttonRunHorizontal(operator) {
    let ogPos = document.getElementById("button").style.left
    let Pos = Number(ogPos.replace("px", ""))
    if (operator=="add") {
        document.getElementById("button").style.left = Pos+30+"px";
    }
    else {
        document.getElementById("button").style.left = Pos-30+"px";
    }
}

function mousePosRelToButtonPos() {
    let horOgPos = document.getElementById("button").style.left
    let horPos = Number(horOgPos.replace("px", "")) + 73

    let vertOgPos = document.getElementById("button").style.top
    let vertPos = Number(vertOgPos.replace("px", "")) + 21.5

    window.addEventListener("mousemove", (event) => {
        mousePos = { x: event.clientX, y: event.clientY };
    })
    /*console.log(mousePos.x + "|" + mousePos.y)  
    /*very laggy after a few seconds lol*/

    let horDifference = 0
    let vertDifference = 0
    
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
        buttonRunVertical("subtract");
    }
    if (mousePos.y < vertPos && vertDifference < 30 && horDifference < 75) {
        buttonRunVertical("add");
    }

    if (mousePos.x > horPos && horDifference < 85 && vertDifference < 25) {
        buttonRunHorizontal("subtract");
    }
    if (mousePos.x < horPos && horDifference < 85 && vertDifference < 25) {
        buttonRunHorizontal("add");
    }
} 