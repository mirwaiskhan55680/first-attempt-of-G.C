
const gradeForm = document.getElementById('gradeForm');
const resultDiv = document.getElementById('result');

gradeForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const percentage = parseFloat(document.getElementById('percentage').value);

    if (percentage >= 80) {
        resultDiv.textContent = 'Grade: A+';
    } else if (percentage >= 70) {
        resultDiv.textContent = 'Grade: A';
    } else if (percentage >= 60) {
        resultDiv.textContent = 'Grade: B';
    } else if (percentage >= 50) {
        resultDiv.textContent = 'Grade: C';
    } else {
        resultDiv.textContent = 'Grade: F';
    }
});
