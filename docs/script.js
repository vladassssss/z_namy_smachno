// Зміна стилю заголовка при кліку
document.getElementById('title').addEventListener('click', function () {
    this.style.color = '#ff4500';
    this.style.textShadow = '2px 2px 4px #000';
    this.style.transition = 'all 0.5s ease-in-out';
});

// Анімація при наведенні на пункт меню
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseover', function () {
        this.style.backgroundColor = '#ffcc00';
        this.style.color = '#333';
        this.style.transition = 'all 0.3s ease';
    });
    link.addEventListener('mouseout', function () {
        this.style.backgroundColor = '';
        this.style.color = '#fff';
    });
});

// Анімація тексту в розділі
const sectionText = document.querySelector('.section-text');
sectionText.addEventListener('mouseenter', function () {
    sectionText.style.fontSize = '22px';
    sectionText.style.color = '#008000';
    sectionText.style.transition = 'all 0.5s';
});
sectionText.addEventListener('mouseleave', function () {
    sectionText.style.fontSize = '18px';
    sectionText.style.color = '#555';
});
