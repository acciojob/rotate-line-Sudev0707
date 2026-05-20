//your JS code here. If required.
let angle = 0;

function rotateLine() {
    angle += 2;
    const line = document.getElementById('line');
    line.style.transform = `rotate(${angle}deg)`;
}

setInterval(rotateLine, 20);