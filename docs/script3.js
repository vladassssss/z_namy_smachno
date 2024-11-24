 $(document).ready(function() {
            $("#load-joke").click(function() {
                // Завантажуємо файл жартів
                $.get("jokes.txt", function(data) {
                    var jokes = data.split("\n"); // Розбиваємо на рядки
                    var randomJoke = jokes[Math.floor(Math.random() * jokes.length)]; // Вибираємо випадковий жарт
                    $("#joke").text(randomJoke); // Виводимо жарт
                });
            });
        });
