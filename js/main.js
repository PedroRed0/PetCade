// js/main.js

function toggleTheme() {
    const html = document.documentElement;
    html.classList.toggle('dark');

if (window.mapInstance) { 
    setTimeout(() => {
        window.mapInstance.invalidateSize();
    }, 100);
}
    
    const isDark = html.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    console.log('Tema alterado para:', isDark ? 'ESCURO' : 'CLARO'); // para debug
    updateIcon(isDark);
    
}

function updateIcon(isDark) {
    const icon = document.getElementById('theme-icon');
    if (icon) {
        icon.textContent = isDark ? '🌙' : '☀️';
    }
}

function loadTheme() {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const isDark = saved === 'dark' || (!saved && prefersDark);
    
    if (isDark) {
        document.documentElement.classList.add('dark');
    }
    
    updateIcon(isDark);
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    
    const btn = document.getElementById('theme-toggle');
    if (btn) {
        btn.addEventListener('click', toggleTheme);
    } else {
        console.warn('Botão #theme-toggle não encontrado!');
    }
});