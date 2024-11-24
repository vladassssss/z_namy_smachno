 document.getElementById('surveyForm').addEventListener('submit', function(event) {
            event.preventDefault();

            // Отримуємо значення з форми
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const feedback = document.getElementById('feedback').value;

            // Формуємо об'єкт з даними форми
            const surveyData = {
                name: name,
                email: email,
                feedback: feedback,
                date: new Date().toLocaleString() // Поточна дата та час
            };


            const surveyJSON = JSON.stringify(surveyData);

            // Зберігаємо дані у файл
            const blob = new Blob([surveyJSON], { type: 'application/json' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'survey_feedback_' + new Date().toISOString() + '.json';
            link.click();
            document.getElementById('result').innerHTML = `<p>Ваш відгук успішно надіслано! Дякуємо за участь.</p>`;
        });
