function win() {
    document.getElementById("whitespace").innerHTML = "&#9760";
}

function buttonRunVertical() {
    let ogPos = document.getElementById("button").style.top
    let Pos = Number(ogPos.replace("px", ""))
    document.getElementById("button").style.top = Pos-50+"px";
}

function buttonRunHorizontal() {
    let ogPos = document.getElementById("button").style.left
    let Pos = Number(ogPos.replace("px", ""))
    document.getElementById("button").style.left = Pos-50+"px";
}

function mousePosRelToButtonPos() {
    let horOgPos = document.getElementById("button").style.left
    let horPos = Number(horOgPos.replace("px", "")) + 120

    let vertOgPos = document.getElementById("button").style.top
    let vertPos = Number(vertOgPos.replace("px", ""))

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

    // if (vertDifference < 50 && horDifference < 100) {
    //     buttonRunVertical();
    // }
    // if (horDifference < 50 && vertDifference < 100) {
    //     buttonRunHorizontal();
    // }
} 