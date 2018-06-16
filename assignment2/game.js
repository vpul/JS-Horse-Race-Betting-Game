//Trigger when "start" button is clicked
document.getElementById('start').onclick = function () {
    var horses = document.getElementsByClassName("horse");
    //Running Animation for every horse
    for (const horse of horses) {
        horse.classList.add("runRight");
        horse.classList.remove("standRight");
    }
};