// 1. Efeito de scroll suave para os links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth' // Faz o deslize ficar suave
            });
        }
    });
});

// 2. Animação simples de entrada (Fade In)
// Quando a página carrega, os cartões aparecem suavemente
window.addEventListener('DOMContentLoaded', () => {
    const celulas = document.querySelectorAll('.celula');
    
    celulas.forEach((celula, index) => {
        // Adiciona um pequeno atraso para cada cartão aparecer um após o outro
        setTimeout(() => {
            celula.style.opacity = '1';
            celula.style.transform = 'translateY(0)';
        }, 200 * index);
    });
});

// 3. Log de boas-vindas no Console (mimo de programador)
console.log("%c Olá! Bem-vindo ao meu código. Sinta-se à vontade para explorar!", "color: #58a6ff; font-size: 14px; font-weight: bold;");