const menuToggle = document.getElementById('menuToggle');
const menuContainer = document.querySelector('.menu-container');

menuToggle.addEventListener('click', () => {
    menuContainer.classList.toggle('menu-open');
});

document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('meu-audio');
    var botao = document.getElementById('botao-audio');
    var icone = document.getElementById('icone');

    botao.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            icone.src = '../img/audio.png'; // Substitua pelo ícone de pausa
        } else {
            audio.pause();
            icone.src = '../img/audio.png'; // Substitua pelo ícone de play
        }
    });
});