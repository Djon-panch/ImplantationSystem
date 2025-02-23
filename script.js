// Показать поле "Другая система", если выбрано "Другое"
document.getElementById('implantSystem').addEventListener('change', function () {
    const otherSystemInput = document.getElementById('otherSystem');
    if (this.value === 'other') {
        otherSystemInput.style.display = 'block';
    } else {
        otherSystemInput.style.display = 'none';
    }
});

// Валидация формы при отправке
document.getElementById('dataForm').addEventListener('submit', function (event) {
    const clinicName = document.getElementById('clinicName').value.trim();
    const clinicAddress = document.getElementById('clinicAddress').value.trim();
    const doctorName = document.getElementById('doctorName').value.trim();
    const patientName = document.getElementById('patientName').value.trim();
    const implantSystem = document.getElementById('implantSystem').value;

    if (!clinicName || !clinicAddress || !doctorName || !patientName || !implantSystem) {
        alert('Пожалуйста, заполните все обязательные поля!');
        event.preventDefault(); // Предотвращаем отправку формы
    } else {
        alert('Данные успешно сохранены!');
    }
});