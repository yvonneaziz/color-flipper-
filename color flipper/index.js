const body = document.getElementsByTagName("body")[0]

function setColor(name) {
    body.style.backgroundColor = name;
}

function randomColor() {
    const red = Math.round(Math.random() * 255)
    const yellow = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)

    const color = `rgb(${red},${yellow},${green})`
    body.style.backgroundColor = color;
}

randomColor()

