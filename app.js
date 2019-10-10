const surveyForm = document.querySelector('form');

surveyForm.addEventListener('submit', (event) =>
{
    event.preventDefault();

    const surveyFormData = new FormData(surveyForm);

    const user = {
        name: surveyFormData.get('user'),
        color: surveyFormData.get('color'),
        animal: surveyFormData.get('animal'),
    };

    alert(JSON.stringify(user, true, 2));
});

// Make a form that takes in user-entered data and returns data in an alert