<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $feedback = htmlspecialchars($_POST['feedback']);
    $date = date("Y-m-d_H-i-s");

    // Створення текстового файлу для збереження відповіді
    $data = [
        "name" => $name,
        "email" => $email,
        "feedback" => $feedback,
        "date" => date("Y-m-d H:i:s")
    ];

    $filename = "survey/survey_feedback_{$date}.json";
    if (!is_dir('survey')) {
        mkdir('survey', 0777, true);
    }

    file_put_contents($filename, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

    // Підтвердження надсилання
    echo "Ваш відгук успішно збережено! Дата і час: " . date("Y-m-d H:i:s");
}
?>
