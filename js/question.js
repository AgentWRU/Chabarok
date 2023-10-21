
function sendFormData11() {
    const name11 = document.getElementById('name11').value;
    const phone11 = document.getElementById('phone11').value;

    const formData11 = new FormData();
    formData11.append('name11', name11);
    formData11.append('phone11', phone11);

    fetch('/submit_form', {
        method: 'POST',
        body: formData11
    })
        .then(response => response.text())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
