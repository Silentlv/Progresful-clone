
// Vienkāršākā versija, kas noteikti strādās
document.addEventListener('DOMContentLoaded', function() {
    console.log('Progresful JS ielādēts');
    
    // 1. BURGER MENU
    const burger = document.querySelector('.burger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (burger && navMenu) {
        burger.addEventListener('click', function() {
            console.log('Burger noklikšķināts');
            this.classList.toggle('burger--active');
            navMenu.classList.toggle('nav--open');
            
            // Bloķē/atbloķē ritināšanu
            if (navMenu.classList.contains('nav--open')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });
        
        // Aizvērt izvēlni, noklikšķinot uz saites
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                burger.classList.remove('burger--active');
                navMenu.classList.remove('nav--open');
                document.body.style.overflow = 'auto';
            });
        });
    }
    
    // 2. SMOOTH SCROLL
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                // Aizvērt izvēlni, ja tā ir atvērta
                if (navMenu && navMenu.classList.contains('nav--open')) {
                    burger.classList.remove('burger--active');
                    navMenu.classList.remove('nav--open');
                    document.body.style.overflow = 'auto';
                }
                
                // Smooth scroll
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 3. HEADER SHADOW ON SCROLL
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 40) {
                header.classList.add('header--scrolled');
            } else {
                header.classList.remove('header--scrolled');
            }
        });
        
        // Sākotnējais stāvoklis
        if (window.scrollY > 40) {
            header.classList.add('header--scrolled');
        }
    }
    
    console.log('Viss JS ielādēts veiksmīgi!');
});
