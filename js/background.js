var colors = ["#ECF4E8", "#CBF3BB", "#ABE7B2", "#93BFC7"];
var index = 0;

function ubahBackground() {
    document.body.style.backgroundColor = colors[index];
    document.getElementById("loncat").style.backgroundColor = colors[index];

    index++;

    if (index >= colors.length) {
        index = 0;
    }
}
