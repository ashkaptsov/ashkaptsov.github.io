const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Марина",
            "id_3": "Альяна",
            "id_4": "Анна",
            "id_5": "Ольга",
            "id_6": "Франческа",
            "id_7": "Ирина",
            "id_8": "Мария",
            "id_9": "Елена",
            "id_10": "Дуся"
        }
    }`,


    firstFathersName: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Владимир",
            "id_3": "Олег",
            "id_4": "Антон",
            "id_5": "Павл",
            "id_6": "Максим",
            "id_7": "Ашот",
            "id_8": "Кирилл",
            "id_9": "Денис",
            "id_10": "Владислав"
        }
    }`,


    firstBornYear: `{
        "count": 10,
        "list": {     
            "id_1": "1963",
            "id_2": "1990",
            "id_3": "1950",
            "id_4": "1986",
            "id_5": "1940",
            "id_6": "1971",
            "id_7": "2001",
            "id_8": "1989",
            "id_9": "1997",
            "id_10": "1959"
        }
    }`,


    maleProfession: `{
        "count": 10,
        "list": {     
            "id_1": "Шахтер",
            "id_2": "Футболист",
            "id_3": "Певец",
            "id_4": "Тракторист",
            "id_5": "Учитель",
            "id_6": "Токарь",
            "id_7": "Спортсмен",
            "id_8": "Почтальон",
            "id_9": "Мясник",
            "id_10": "Скотовод"
        }
    }`,
    femaleProfession: `{
        "count": 10,
        "list": {     
            "id_1": "Сваха",
            "id_2": "Певица",
            "id_3": "Швея",
            "id_4": "Тансовщица",
            "id_5": "Няня",
            "id_6": "Портная",
            "id_7": "Плотница",
            "id_8": "Продавщица",
            "id_9": "Организатор мероприятий",
            "id_10": "Дизайнер"
        }
    }`,





    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },


    randomGender: function() {
        return this.randomIntNumber() === 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },




    randomFirstName: function() {
        if (this.person.gender === this.GENDER_MALE) {
            return this.randomValue(this.firstNameMaleJson);
        } else if (this.person.gender === this.GENDER_FEMALE) {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },


     randomSurname: function() {
        if (this.person.gender === this.GENDER_MALE){
        return this.randomValue(this.surnameJson);
        }
        else
         {
            return this.randomValue(this.surnameJson)+"a";
        }

    },


    randomFathersName: function() {
        if (this.person.gender === this.GENDER_MALE) {
            return this.randomValue(this.firstFathersName)+"ович";
        } else if (this.person.gender === this.GENDER_FEMALE) {
            return this.randomValue(this.firstFathersName)+"овна";
        }
    },


    randomProfession: function() {
        if (this.person.gender === this.GENDER_MALE) {
            return this.randomValue(this.maleProfession);
        } else if (this.person.gender === this.GENDER_FEMALE) {
            return this.randomValue(this.femaleProfession);
        }
    },


    randomBornYear: function() {
            return this.randomValue(this.firstBornYear);
    },

    


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surName = this.randomSurname();
        this.person.fathersName = this.randomFathersName();
        this.person.bornYear = this.randomBornYear();
        this.person.profession = this.randomProfession();
        return this.person;
    }
};

