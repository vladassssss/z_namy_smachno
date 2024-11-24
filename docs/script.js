 document.getElementById("title").addEventListener("click", function() {
    const title = document.getElementById("title");
    title.style.color = "blue";  // Зміна кольору заголовка
    title.style.fontSize = "36px";  // Зміна розміру шрифта
    title.style.transition = "all 0.5s ease";  // Плавний перехід
});
