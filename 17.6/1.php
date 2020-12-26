<?php

$example_persons_array = [
    [
        'fullname' => 'Иванов Иван Иванович',
        'job' => 'tester',
    ],
    [
        'fullname' => 'Степанова Наталья Степановна',
        'job' => 'frontend-developer',
    ],
    [
        'fullname' => 'Пащенко Владимир Александрович',
        'job' => 'analyst',
    ],
    [
        'fullname' => 'Громов Александр Иванович',
        'job' => 'fullstack-developer',
    ],
    [
        'fullname' => 'Славин Семён Сергеевич',
        'job' => 'analyst',
    ],
    [
        'fullname' => 'Цой Владимир Антонович',
        'job' => 'frontend-developer',
    ],
    [
        'fullname' => 'Быстрая Юлия Сергеевна',
        'job' => 'PR-manager',
    ],
    [
        'fullname' => 'Шматко Антонина Сергеевна',
        'job' => 'HR-manager',
    ],
    [
        'fullname' => 'аль-Хорезми Мухаммад ибн-Муса',
        'job' => 'analyst',
    ],
    [
        'fullname' => 'Бардо Жаклин Фёдоровна',
        'job' => 'android-developer',
    ],
    [
        'fullname' => 'Шварцнегер Арнольд Густавович',
        'job' => 'babysitter',
    ],
];


function getFullnameFromParts($surname, $name, $patronomyc){
    return $surname . " " . $name . " " . $patronomyc;
}


function getPartsFromFullname($fullName){
    $separateFullName = explode(" ", $fullName);
    $fullNameOrder = ['surname', 'name', 'patronomyc'];
    $separateFullNameOrderArray = array_combine($fullNameOrder, $separateFullName);
    return $separateFullNameOrderArray;
}




function getShortName($shortName){

    $separateFullName = getPartsFromFullname($shortName);
    $name = $separateFullName['name'];
    $shortSurname = $separateFullName['surname'];
    return $name . ' ' . mb_substr($shortSurname,0,1) . '.';

}



function getGenderFromName($fullName){
    $separateFullName = getPartsFromFullname($fullName);
    $surname = $separateFullName['surname'];
    $name = $separateFullName['name'];
    $patronomyc = $separateFullName['patronomyc'];
    
    $checkFemaleSurname = mb_substr($surname, -2);
    $checkFemaleName = mb_substr($name, -1);
    $checkFemalePatronomyc = mb_substr($patronomyc, -3);

    $checkMaleSurname = mb_substr($surname, -1);
    $checkMaleName = mb_substr($name, -1);
    $checkMalePatronomyc = mb_substr($patronomyc, -2);

    $genderCount = 0;

    if($checkFemaleSurname == 'ва'){
        $genderCount -= 1;
    }elseif($checkFemaleName == 'а'){
        $genderCount -= 1;
    }elseif($checkFemalePatronomyc == 'вна'){
        $genderCount -= 1;
    }elseif($checkMaleSurname == 'в'){
        $genderCount += 1;
    }elseif($checkMaleName == 'й' || $checkMaleName == 'н'){
        $genderCount += 1;
    }elseif($checkMalePatronomyc == 'ич'){
        $genderCount += 1;
    }
    

    if ($genderCount > 0) {
        return $genderCount = 1;
    } else if ($genderCount < 0){
        return $genderCount = -1;
    } else if ($genderCount == 0){
        return $genderCount = 0;
    }
}








function getGenderDescription($array){

    foreach($array as $firstKey => $value){
        $names[] = $value['fullname'];
        }

    for($i = 0; $i < count($names); $i++){
        $genders[] = getGenderFromName($names[$i]);
    }

    $maleGender = array_filter($genders, function($genders){
        if($genders == 1){
            return true;
        }
    } );

    $femaleGender = array_filter($genders, function($genders){
        if($genders == -1){
            return true;
        }
    } );

    $genderIsNotDefined = array_filter($genders, function($genders){
        if($genders == 0){
            return true;
        }
    } );

$percentMaleGender = round(count($maleGender) / count($genders)*100);
$percentFeMaleGender = round(count($femaleGender) / count($genders)*100);
$percentGenderIsNotDefined = round(count($genderIsNotDefined) / count($genders)*100);
 

echo <<<TEXT
Гендерный состав аудитории: <br>
--------------------------- <br>
Мужчины - $percentMaleGender% <br>
Женщины - $percentFeMaleGender% <br>
Не удалось определить - $percentGenderIsNotDefined% <br>

TEXT;

}






function getPerfectPartner($surname, $name, $patronomyc, $array){

    $getFullName = getFullnameFromParts($surname, $name, $patronomyc);
    $getGender = getGenderFromName($getFullName);

    

        foreach($array as $firstKey => $value){
            $names[] = $value['fullname'];
        }

    $randomPerson = $names[rand(0,count($names))];
    $getGenderRandomPerson = getGenderFromName($randomPerson); 

    


    function getCompatibility($nameFromFunc, $arrayFromFunc){
        $nameFromFunc = getShortName($nameFromFunc);
        $arrayFromFunc = getShortName($arrayFromFunc);
    
        $convertCaseNameFromFunc = mb_convert_case($nameFromFunc, MB_CASE_TITLE);
        $convertCaseArrayFromFunc = mb_convert_case($arrayFromFunc, MB_CASE_TITLE);
            
        $randomPercentCompatibility = rand(5000,10000)/100;
    
        echo<<<TEXT
        $convertCaseNameFromFunc + $convertCaseArrayFromFunc = <br> ♡ Идеально на $randomPercentCompatibility % ♡
        TEXT; 
    } 


    function getNewRandomPerson($nameFromArray){
        return $nameFromArray[rand(0,count($nameFromArray))];
        
    }



function genderCheckAndStart($genderFromFunc, $genderOfRandomPerson){
    if($genderFromFunc != $genderOfRandomPerson){
        return true;
    }
    else {
        return false;
    }
}


$genderCheck = genderCheckAndStart($getGender, $getGenderRandomPerson);
function startComp($boolean, $getFullName, $randomPerson, $namesArray){
    if($boolean == true){
        getCompatibility($getFullName, $randomPerson);
    } elseif ($boolean == false) {
        $randomPerson = getNewRandomPerson($namesArray);
        echo "обнови страницу";
    }
}

startComp($genderCheck, $getFullName, $randomPerson, $names);

}

