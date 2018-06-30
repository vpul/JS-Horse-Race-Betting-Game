//Horse no. and their original position
var horseProp = [
    {
        no: 1,
        OriginTop: 68,
        //left: ,
    },
    {
        no: 2,
        OriginTop: 72,
        //left: ,
    },
    {
        no: 3,
        OriginTop: 76,
        //left: ,
    },
    {
        no: 4,
        OriginTop: 80,
        //left: ,
    },
];

var steps;
//Trigger the following when "start" button is clicked
document.getElementById('start').onclick = function () {
    var horses = document.getElementsByClassName("horse");
    //Running Animation and actual movement for every horse
    var horseNo = 0;   //Starting from horse #0
    for (const horse of horses) {
        //Following two class functions are for animation
        horse.classList.add("runRight");
        horse.classList.remove("standRight");
        horseProp[horseNo].left = 20;
        steps = 0;
        moveRight(horse, horseNo);
        horseNo++;
    }
};

function moveRight(horse, horseNo) {
  setTimeout(() => {
    horseProp[horseNo].left ++;
    horse.style.left = horseProp[horseNo].left + "vw";
    if (horseProp[horseNo].left < 82.5 - (horseNo+1) * 2.5) {
        moveRight(horse, horseNo);
        steps++;
        console.log("Steps for #horse" + horseNo + "=" + steps);
    } else {
        horseProp[horseNo].top = 68;
        moveUp(horse, horseNo);
    }
  }, 500 / (Math.random() * 10 + 10));
}

function moveUp(horse, horseNo) {
    setTimeout(() => {
        horse.classList.remove("runRight");
        horse.classList.add("runUp");
        horseProp[horseNo].top --;
        horse.style.top = horseProp[horseNo].top + "vh";
        if (horseProp[horseNo].top > 0 + horseNo * 4) {
          moveUp(horse, horseNo);
        } else {
          //moveLeft();
        }

    }, 500 / (Math.random() * 10 + 10));
}

function moveLeft(horse, y, originY, horseNo) {
  console.log(y);
  setTimeout(() => {
    horse.classList.remove("runRight");
    horse.classList.add("runUp");
    y--;
    horse.style.top = y + "vh";
    if (y > 0 + horseNo * 4) {
      moveUp(horse, y, originY, horseNo);
    } else {
      moveLeft();
    }
  }, 500 / (Math.random() * 10 + 10));
}