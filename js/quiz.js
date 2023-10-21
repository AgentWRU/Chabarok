let currentQuestion = 1;

function showQuestion(questionId) {
    const currentQuestionElement = document.getElementById(`question${currentQuestion}`);
    const nextQuestionElement = document.getElementById(questionId);

    currentQuestionElement.style.display = 'none';
    nextQuestionElement.style.display = 'block';

    if (questionId === 'question1') {
        currentQuestion = 1;
    } else if (questionId === 'question2') {
        currentQuestion = 2;
    } else if (questionId === 'question3') {
        currentQuestion = 3;
    } else if (questionId === 'question4') {
        currentQuestion = 4;
    } else if (questionId === 'question5') {
        currentQuestion = 5;
    }
}

function sendFormData() {
    const countryCode2 = document.getElementById('countryCode').value;
    const consent = document.getElementById('consentCheckbox').checked;

    if (!consent) {
        alert('Пожалуйста, дайте согласие на обработку персональных данных.');
        return;
    }
    if (!countryCode2) {
        alert('Пожалуйста, введите номер телефона.');
        return;
    }
    $('#exampleModal').modal('show');

    // Создаем объект с данными для отправки
    const dataToSend = {
        survey_number: 1,
        number: countryCode2
    };

    // Отправляем данные на сервер
    fetch('http://chabarok.allmodels.by/submit_form.php', { // Обратите внимание на полный URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Указываем тип контента как JSON
        },
        body: JSON.stringify(dataToSend) // Преобразуем объект в JSON и отправляем
    })
        .then(response => response.text())
        .then(data => {
            console.log(data);
            // Делайте здесь что-то с ответом от сервера, если это необходимо
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
