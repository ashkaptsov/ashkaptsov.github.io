
const zero = 0;
let gameRun = false;

let minValue = parseInt(document.getElementById('from').value);
let maxValue = parseInt(document.getElementById('to').value);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');
orderNumberField.innerText = orderNumber;

document.getElementById('start_button').addEventListener('click', startGame);

function startGame() {

    minValue = parseInt(document.getElementById('from').value);
    maxValue = parseInt(document.getElementById('to').value);
    if (isNaN(minValue)){
        alert("Недопустимое значение!Используйте только цифры");
    }
    else {
    minValue = minValue || 0;
    minValue = (minValue <-999) ? -999: minValue;}

    if (isNaN(maxValue)){
    alert("Недопустимое значение!Используйте только цифры");
    }
    else{
    maxValue = maxValue || 100;
    maxValue = (maxValue >999) ? 999: maxValue;
    }    
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;


    

    
    answerField.innerText = `Вы загадали число ${text20(answerNumber)}?`;
}



//const zero = 0;
//let inputMinValue = document.getElementById('from');
//let inputMaxValue = document.getElementById('to');
//let minValue =  inputMinValue.value; //parseInt(prompt('Минимальное знание числа для игры','0'));
//minValue = minValue || 0;
//minValue = (minValue <-999) ? -999: minValue;
//let maxValue = inputMaxValue.value; //parseInt(prompt('Максимальное знание числа для игры','100'));
//maxValue = maxValue || 100;
//maxValue = (maxValue >999) ? 999: maxValue;
//alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);



//let answerNumber  = Math.floor((minValue + maxValue) / 2);
//let orderNumber = 1;
//let gameRun = true;


//const orderNumberField = document.getElementById('orderNumberField');
//const answerField = document.getElementById('answerField');

//orderNumberField.innerText = orderNumber;
//answerField.innerText = `Вы загадали число ${text20(answerNumber)}?`;



document.getElementById('btnRetry').addEventListener('click', function () {
    orderNumber = 0;
    orderNumberField.innerText = 1;
    answerField.innerText = "Загадайте ваше число!";
    document.getElementById('from').value = -999;
    document.getElementById('to').value = 999;
    gameRun = false;

})
    // minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
    // minValue = minValue || 0;
    // minValue = (minValue <-999) ? -999: minValue;
    // maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
    // maxValue = maxValue || 100;
    // maxValue = (maxValue >999) ? 999: maxValue;
    // alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    // answerNumber  = Math.floor((minValue + maxValue) / 2);
    // orderNumber = 0;
    // orderNumberField.innerText = 1;
    // answerField.innerText = `Вы загадали число ${text20(answerNumber)}?`;
    // gameRun = true;
//})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun == true){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            var answers = [ `Может это ${text20(answerNumber)}?`, `Думаю это число ${text20(answerNumber)}?`, `Наверняка это ${text20(answerNumber)}?` ];
            var randomAnswers = Math.floor(Math.random() * 3);
            answerField.innerText = answers[randomAnswers];
            orderNumberField.innerText = orderNumber;
        }
    }
    else if(gameRun == false){
        alert("Нажмите на кнопку 'Поехали'");
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            var answers = [ `Вы загадали число ${text20(answerNumber)}?`, `Наверное это число ${text20(answerNumber)}?`, `Скорее всего ваше число ${text20(answerNumber)}?` ];
            var randomAnswers = Math.floor(Math.random() * 3);
            answerField.innerText = answers[randomAnswers];
            orderNumberField.innerText = orderNumber;
        }
    }
    else if(gameRun == false){
        alert("Нажмите на кнопку 'Поехали'");
    }
})




document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        var response = [ `Я всегда угадываю\n\u{1F60E}`, `Я же говорил, что угадаю!`, `Это было легко и просто!` ];
        var randomResponse = Math.floor(Math.random() * 3);
        answerField.innerText = response[randomResponse];
        gameRun = false;
    }
    else if(gameRun == false){
        alert("Нажмите на кнопку 'Поехали'");
    }
})

//Перевод числа в текстовый вид, но не более 19 символов, включая пробелы
function text20(number){
    let oneNine = {
        1: "один",
        2: "два",
        3: "три",
        4: "четыре",
        5: "пять",
        6: "шесть",
        7: "семь",
        8: "восемь",
        9: "девять"
    };

    let tenNineteen = {
        10: "десять",
        11: "одиннадцать",
        12: "двенадцать",
        13: "тринадцать",
        14: "четырнадцать",
        15: "пятнадцать",
        16: "шестнадцать",
        17: "семнадцать",
        18: "восемнадцать",
        19: "девятнадцать"
    };

    let dozens = {
        2: "двадцать",
        3: "тридцать",
        4: "сорок",
        5: "пятьдесят",
        6: "шестьдесят",
        7: "семьдесят",
        8: "восемьдесят",
        9: "девяносто"
    };

    let hundreds = {
        1: "сто",
        2: "двести",
        3: "триста",
        4: "четыреста",
        5: "пятьсот",
        6: "шестьсот",
        7: "семьсот",
        8: "восемьсот",
        9: "девятьсот"
    }

    let text = "";
    let num = parseInt(number);
    key = null;

    if (num == 0){
        text = "0";
        return text;
    }

    if (num<0){
        text += "минус ";
        num = Math.abs(num);
    }

    if (num>=100){
       key = Math.floor(num/100);
       num = num - key*100;
       text += hundreds[key] + " ";
    }

    if (num>=10 && num<20){
        text += tenNineteen[num] + " ";
    }
    else if(num<10 && num>0){
        text += oneNine[num] + " ";
    }
    else if (num>=20){
        key = Math.floor(num/10);
        num = num - key*10;
        text += dozens[key] + " ";
        
        if (num>0){
            text += oneNine[num];
        }
    }

    text.trim; 
    
    return text.length<20 ? text : number;
}