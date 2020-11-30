


let link = document.querySelector('a');



function changeText (event) {
    event.preventDefault();
    let promptValue = prompt("Введите данные", "любой текст");
    link.textContent = promptValue;
    
}

link.addEventListener('click', changeText);

div = document.querySelector('#out-1');
input1 = document.querySelector('#input1');

// document.querySelector('#input1').addEventListener('keyup', () => {
//     div.innerHTML = input1.value;
// });

// document.querySelector('button').addEventListener('click',  () => {
//     if (input1.value >= 22) {
//         div.textContent = input1.value;
//         }
//     else {
//         div.textContent = "false";
//     }    
// } )


// document.querySelector('button').onclick = () => {
// for ( i=25; i>=7; i --) {

//     div.innerHTML += i + ' ';
// }

// }


// let info;

// do { 
//     info = prompt("введите число больше 100", 43);
    
// }


// while(info<= 100);

// for (let i=1; i<4; i++){
    
    
//     for (let k=0; k<1; k++){
//         div.innerHTML += i + "<br>";
        
//     }
    
//     div.innerHTML += "*_*_*_" + "<br>";
// }

// function t1(x,y){
//     x = 5;
//     y = 5;
//     return div.innerHTML = x*y;
// }

// document.querySelector("button").onclick = t1; 


let arr = [5,10,5]

let sum = 0;

for(let i = 0; i < arr.length; i++){

    sum = sum+arr[i];

}

// let out = '';

// for(let i = 0; i<arr.length; i++){
//     out += arr[i] + ' ';
// }

document.querySelector("button").onclick =  () => {
    div.innerHTML = sum;
};