const appForm = document.getElementById('appForm')
const nameInput = document.getElementById('nameInput');
const buttonResult = document.getElementById('buttonResult');



function searchGender(){
    const firstName = nameInput.value;
    const serverUrl = 'https://api.genderize.io';
    const url = `${serverUrl}?name=${firstName}`;

    fetch(url)
        .then(response => {
            if(response.status === 404){
                throw new Error('Запись не найдена')
            }
            return response.json()
        })
        .then(data => {
            if(data.gender === 'female'){
                alert('Женщина')
            }else if(data.gender === 'male'){
                alert('Мужчина')
            }
        })
        .catch(error => console.error(error))
}


appForm.addEventListener('submit',function (event){
    event.preventDefault();
    searchGender();
})