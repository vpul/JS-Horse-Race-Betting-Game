//Trigger when "start" button is clicked
document.getElementById('start').onclick = function () {
    var horses = document.getElementsByClassName("horse");
    //Running Animation for every horse
    for (const horse of horses) {
        horse.classList.add("runRight");
        horse.classList.remove("standRight");
        var x = 20;
        moveRight(horse, x);
    }
};

function moveRight(horse, x) {
    setTimeout(() => {
        x++;
        horse.style.left = x + "vw";
        if (x < 82.5) {
            moveRight(horse, x);
        }
    }, 500 / (Math.random() * 10 + 10));
}