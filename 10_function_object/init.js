
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('fathersNameOutput').innerText = initPerson.fathersName; 
    document.getElementById('birthYearOutput').innerText = initPerson.bornYear;
    document.getElementById('professionOutput').innerText = initPerson.profession;
};

