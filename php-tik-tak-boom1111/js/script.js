window.onload = function()
{
    tikTakBoom.init(
        tasks,
        document.getElementById('timerField'),
        document.getElementById('gameStatusField'),
        document.getElementById('questionField'),
        document.getElementById('answer1'),
        document.getElementById('answer2'),
    )
    startGame();
}




startGame = function(){

document.querySelector("#input").hidden = false;    
document.querySelector("#btn-2").hidden = true;
document.querySelector("#btn").hidden = false;
}; 


let input = document.querySelector("#input");

document.querySelector("#btn").onclick = () => {
    if (input.value <=4){
    buttonClickStartGame();}
    else {
        alert("Максимальное количество игроков = 4");
    }
};





buttonClickStartGame = function(){

    document.querySelector("#input").hidden = true;
        const countdown = (time) => {
        document.querySelector("#btn").hidden = true;
        if (time > 0) {
            document.querySelector("#timerField").textContent = time;
          time -= 1;
          setTimeout(countdown, 1000, time);
        } else {
            tikTakBoom.run();
        }
    };
      
      countdown(3);
};

    








    //     document.querySelector("#btn").onclick = function(){
    //     document.querySelector("#input").hidden = true;
    //     const countdown = (time) => {
    //     document.querySelector("#btn").hidden = true;
    //     if (time > 0) {
    //         document.querySelector("#timerField").textContent = time;
    //       time -= 1;
    //       setTimeout(countdown, 1000, time);
    //     } else {
    //         tikTakBoom.run();
    //     }
    // };
      
    //   countdown(3);
    // }

        


// };


// document.querySelector("#input").value = 4

// document.querySelector("#btn").onclick = function(){
//     alert("Максимальное количество игроков = 4");

// }