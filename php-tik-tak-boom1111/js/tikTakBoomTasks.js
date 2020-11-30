const tasks = `

    [
        {
            "question": "2 * 2 = ",
            "answer1": { "result": true, "value": "4" },
            "answer2": { "result": false, "value": "3" }
        },
        {
            "question": "Как зовут крокодила, лучшего друга Чебурашки?",
            "answer1": { "result": false, "value": "Данди" },
            "answer2": { "result": true, "value": "Гена" }
        },
        {
            "question": "5 + 5",
            "answer1": { "result": false, "value": "1" },
            "answer2": { "result": true, "value": "10" }
        },
        {
            "question": "Столица Италии?",
            "answer1": { "result": false, "value": "Ватикан" },
            "answer2": { "result": true, "value": "Рим" }
        },

        {
            "question": "Начальный этап спортивного состязания",
            "answer1": { "result": true, "value": "Старт" },
            "answer2": { "result": false, "value": "Финиш" }
        },

        {
            "question": "Столица Швейцарии?",
            "answer1": { "result": true, "value": "Берн" },
            "answer2": { "result": false, "value": "Цюрих" }
        },
        
        {
            "question": "Птица – символ мудрости",
            "answer1": { "result": false, "value": "Голубь" },
            "answer2": { "result": true, "value": "Сова" }
        },
        
        {
            "question": "Как называют жителей города Смоленска в РФ?",
            "answer1": { "result": false, "value": "Смоленчаны" },
            "answer2": { "result": true, "value": "Смоляне" }
        },

        {
            "question": "Назовите самое соленое море в Мировом океане",
            "answer1": { "result": true, "value": "Красное море" },
            "answer2": { "result": false, "value": "Мертвое море" }
        },

        {
            "question": "Что такое удар в молоко?",
            "answer1": { "result": true, "value": "Удар сильно выше ворот" },
            "answer2": { "result": false, "value": "Автогол" }
        },

        {
            "question": "Сколько раз забрасывал невод в море старик из сказки О рыбаке и рыбке?",
            "answer1": { "result": false, "value": "1 раз" },
            "answer2": { "result": true, "value": "3 раза" }
        },

        {
            "question": "Какой герой сказки Буратино торговал пиявками?",
            "answer1": { "result": true, "value": "Дуремар" },
            "answer2": { "result": false, "value": "Папа Карло" }
        },

        {
            "question": "Какой братец из сказки Три поросенка построил самый прочный дом?",
            "answer1": { "result": true, "value": "Наф-наф" },
            "answer2": { "result": false, "value": "Ниф-ниф" }
        },

        {
            "question": "Откуда пошло выражение деньги не пахнут?",
            "answer1": { "result": false, "value": "От сборов за нестиранные носки" },
            "answer2": { "result": true, "value": "От налога на туалеты" }
        },
        
        {
            "question": "Какие три европейские столицы расположены на одной реке?",
            "answer1": { "result": false, "value": "Стокгольм, Осло, и Хельсинки" },
            "answer2": { "result": true, "value": "Вена, Будапешт и Белград" }
        },

        {
            "question": "Из чего состоит горб у верблюда?",
            "answer1": { "result": false, "value": "Из воды" },
            "answer2": { "result": true, "value": "Из жира" }
        },

        {
            "question": "В какой стране уже более 600 лет никак не может упасть Пизанская башня?",
            "answer1": { "result": true, "value": "В Италии" },
            "answer2": { "result": false, "value": "Во Франции" }
        },

        {
            "question": "Кто такой Иммануил Кант?",
            "answer1": { "result": false, "value": "Актёр" },
            "answer2": { "result": true, "value": "Философ" }
        },

        {
            "question": "Как называется горячее вино, прокипяченное с орехами и пряностями?",
            "answer1": { "result": true, "value": "Глинтвейн" },
            "answer2": { "result": false, "value": "Портвейн" }
        },


        {
            "question": "Как называется старинный польский торжественный танец-шествие?",
            "answer1": { "result": true, "value": "Полонез" },
            "answer2": { "result": false, "value": "Вальс" }
        },

        {
            "question": "Почетное обращение к выдающимся музыкантам?",
            "answer1": { "result": true, "value": "Маэстро" },
            "answer2": { "result": false, "value": "Магистр" }
        },

        {
            "question": "Как называются фрукты или сладкие блюда, подаваемые в конце обеда?",
            "answer1": { "result": false, "value": "Полдник" },
            "answer2": { "result": true, "value": "Десерт" }
        },

        {
            "question": "Неписаный закон, правила поведения в жизни?",
            "answer1": { "result": false, "value": "Кодекс чести" },
            "answer2": { "result": true, "value": "Этикет" }
        },

        {
            "question": "С какой из этих стран Чехия не граничит?",
            "answer1": { "result": true, "value": "Венгрия" },
            "answer2": { "result": false, "value": "Польша" }
        },

        {
            "question": "Какая березка стояла во поле?",
            "answer1": { "result": false, "value": "Зеленая" },
            "answer2": { "result": true, "value": "Кудрявая" }
        },

        {
            "question": "Какой узел нельзя развязать?",
            "answer1": { "result": true, "value": "Железнодорожный" },
            "answer2": { "result": false, "value": "Морской" }
        },

        {
            "question": "Сколько месяцев в году имеют 28 дней?",
            "answer1": { "result": true, "value": "Все месяцы" },
            "answer2": { "result": false, "value": "Февраль" }
        },

        {
            "question": "Может ли страус назвать себя птицей?",
            "answer1": { "result": true, "value": "Нет, он не может говорить" },
            "answer2": { "result": false, "value": "Да" }
        },

        {
            "question": "Сногсшибательный вид спорта.",
            "answer1": { "result": true, "value": "Бокс" },
            "answer2": { "result": false, "value": "Настольный теннис" }
        },

        {
            "question": "Последний российский император.",
            "answer1": { "result": true, "value": "Николай 2" },
            "answer2": { "result": false, "value": "Путин" }
        },

        {
            "question": "Пиратский напиток",
            "answer1": { "result": false, "value": "Водка" },
            "answer2": { "result": true, "value": "Ром" }
        }

    ]
`;


