let currentQuestion1 = 6;

function showQuestion1(questionId1) {
    const currentQuestionElement1 = document.getElementById(`question${currentQuestion1}`);
    const nextQuestionElement1 = document.getElementById(questionId1);

    currentQuestionElement1.style.display = 'none';
    nextQuestionElement1.style.display = 'block';

    if (questionId1 === 'question6') {
        currentQuestion1 = 6;
    } else if (questionId1 === 'question7') {
        currentQuestion1 = 7;
    } else if (questionId1 === 'question8') {
        currentQuestion1 = 8;
    } else if (questionId1 === 'question9') {
        currentQuestion1 = 9;
    } else if (questionId1 === 'question10') {
        currentQuestion1 = 10;
    }
}

function sendFormData1() {
    const town = document.getElementById("town");
    const selectedTown = town.querySelector('input[type="radio"]:checked');
    const town1 = selectedTown.value;
    const name1 = document.getElementById('nameInput1').value;
    const age1 = document.getElementById('age1').value;
    const parents1 = document.getElementById('parents1').value;
    const phone1 = document.getElementById('phone1').value;
    const consent1 = document.getElementById('consentCheckbox1').checked;

    if (!consent1) {
        alert('Пожалуйста, дайте согласие на обработку персональных данных.');
        return "1";
    }

    const formData1 = new FormData();
    formData1.append('town1', town1);
    formData1.append('name1', name1);
    formData1.append('parents1', parents1);
    formData1.append('age1', age1);
    formData1.append('phone1', phone1);

    fetch('/submit_form', {
        method: 'POST',
        body: formData1
    })
        .then(response => response.text())
        .then(data => {
            console.log(formData1);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
