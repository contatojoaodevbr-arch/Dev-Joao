// Vercel Speed Insights
import { injectSpeedInsights } from '@vercel/speed-insights';

// Initialize Speed Insights
injectSpeedInsights();

// 1. Efeito de scroll suave para os links do menu (Integrado do original)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, // Ajuste para o menu fixo
                behavior: 'smooth'
            });
        }
    });
});

// 2. Animação de entrada ao fazer scroll (Scroll Reveal)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Aplicar animação inicial aos cards e itens
document.querySelectorAll('.skill-card, .stat, .faq-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    observer.observe(el);
});

// 3. Efeito de brilho sutil nos cards ao passar o mouse
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// 4. Log de boas-vindas no Console (Mantido do original)
console.log("%c Olá! Bem-vindo ao meu código. Sinta-se à vontade para explorar!", "color: #58a6ff; font-size: 14px; font-weight: bold;");

// 5. Menu Mobile (Hamburger) - Funcionalidade básica
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Adicionar estilos via JS para simplicidade do exemplo
        if (navMenu.classList.contains('active')) {
            navMenu.style.display = 'flex';
            navMenu.style.flexDirection = 'column';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '100%';
            navMenu.style.left = '0';
            navMenu.style.width = '100%';
            navMenu.style.background = '#0d1117';
            navMenu.style.padding = '20px';
            navMenu.style.borderBottom = '1px solid #30363d';
        } else {
            navMenu.style.display = 'none';
        }
    });
}

// 6. Efeito de digitação no Hero Title (Opcional, para dar um charme)
const heroTitle = document.querySelector('.hero-title span');
if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    let i = 0;
    
    function type() {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }
    
    // Inicia após um pequeno delay
    setTimeout(type, 500);
}
