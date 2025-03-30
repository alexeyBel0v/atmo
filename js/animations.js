<<<<<<< HEAD
// Слайд-шоу
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
function showSlide() {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[currentSlide].classList.add('active');
  gsap.from(slides[currentSlide].querySelector('.slide-content'), { 
    opacity: 0, 
    x: -50, 
    duration: 1, 
    ease: 'power2.out' 
  });
  currentSlide = (currentSlide + 1) % slides.length;
}
setInterval(showSlide, 5000);
showSlide();

// Анимация процесса
gsap.from('.process .process-item', {
  opacity: 0,
  y: 100,
  stagger: 0.5,
  duration: 1,
  ease: 'power2.out',
  scrollTrigger: { 
    trigger: '.process', 
    start: 'top 80%' 
  }
});

// Анимация карточек услуг
gsap.from('.health .card', {
  opacity: 0,
  y: 50,
  stagger: 0.2,
  duration: 1,
  ease: 'power2.out',
  scrollTrigger: { trigger: '.health', start: 'top 80%' }
});

// Анимация команды (карусель)
const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const totalItems = carouselItems.length;
let currentIndex = 0;

function updateCarousel() {
  const itemWidth = 100 / 4;
  const offset = currentIndex * itemWidth;
  carouselInner.style.transform = `translateX(-${offset}%)`;

  if (currentIndex >= totalItems) {
    currentIndex = 0;
    setTimeout(() => {
      carouselInner.style.transition = 'none';
      carouselInner.style.transform = `translateX(0%)`;
      setTimeout(() => {
        carouselInner.style.transition = 'transform 0.5s ease';
      }, 50);
    }, 500);
  }
}

function nextSlide() {
  currentIndex++;
  updateCarousel();
}

setInterval(nextSlide, 5000);
updateCarousel();

// Кнопка "вверх"
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
window.addEventListener('scroll', () => {
  const scrollTopBtn = document.querySelector('.scroll-top');
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
});

// Плавный скролл к секциям (только для ссылок с якорем #)
document.querySelectorAll('.navbar-item').forEach(item => {
  item.addEventListener('click', (e) => {
    const href = item.getAttribute('href');
    
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 120,
          behavior: 'smooth'
        });
        const navbarMenu = document.querySelector('.navbar-menu');
        const burger = document.querySelector('.burger');
        navbarMenu.classList.remove('is-active');
        burger.classList.remove('active');
      }
    }
  });
});

// Подсветка активного пункта меню при скролле
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.navbar-item');

window.addEventListener('load', () => {
  const currentSection = window.location.hash ? window.location.hash.substring(1) : 'home';
  navItems.forEach(item => {
    item.classList.remove('active');
    const href = item.getAttribute('href');
    if (href.startsWith('#') && href.substring(1) === currentSection) {
      item.classList.add('active');
    }
  });
});

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navItems.forEach(item => {
    const href = item.getAttribute('href');
    if (href.startsWith('#')) {
      item.classList.remove('active');
      if (href.substring(1) === current) {
        item.classList.add('active');
      }
    }
  });
});

// Бургер-меню
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const navbarMenu = document.querySelector('.navbar-menu');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navbarMenu.classList.toggle('is-active');
  });

  // Маска для телефона
  const phoneInput = document.getElementById('phone');
  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, '');
      let formattedValue = '+7 (';

      if (value.length > 1) {
        formattedValue += value.substring(1, 4);
      }
      if (value.length >= 4) {
        formattedValue += ') ' + value.substring(4, 7);
      }
      if (value.length >= 7) {
        formattedValue += '-' + value.substring(7, 9);
      }
      if (value.length >= 9) {
        formattedValue += '-' + value.substring(9, 11);
      }

      e.target.value = formattedValue;
    });
  }

  // GSAP анимация для пунктов меню
  const navbarItems = document.querySelectorAll('.navbar-item');
  navbarItems.forEach(item => {
    // Начальные стили
    gsap.set(item, { color: '#333', backgroundColor: 'transparent', scale: 1 });

    // Анимация при наведении
    item.addEventListener('mouseenter', () => {
      if (!item.classList.contains('active')) {
        gsap.to(item, {
          color: '#fff',
          backgroundColor: '#4fc3f7',
          scale: 1.05,
          duration: 0.2,
          ease: 'power2.out'
        });
      } else {
        // Для активного пункта только увеличение
        gsap.to(item, {
          scale: 1.05,
          duration: 0.2,
          ease: 'power2.out'
        });
      }
    });

    // Анимация при уходе курсора
    item.addEventListener('mouseleave', () => {
      if (!item.classList.contains('active')) {
        gsap.to(item, {
          color: '#333',
          backgroundColor: 'transparent',
          scale: 1,
          duration: 0.2,
          ease: 'power2.out'
        });
      } else {
        // Для активного пункта только возврат масштаба
        gsap.to(item, {
          scale: 1,
          duration: 0.2,
          ease: 'power2.out'
        });
      }
    });

    // Устанавливаем стили для активного пункта
    if (item.classList.contains('active')) {
      gsap.set(item, { color: '#333', backgroundColor: 'transparent', scale: 1 });
    }
  });
=======
// Слайд-шоу
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
function showSlide() {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[currentSlide].classList.add('active');
  gsap.from(slides[currentSlide].querySelector('.slide-content'), { 
    opacity: 0, 
    x: -50, 
    duration: 1, 
    ease: 'power2.out' 
  });
  currentSlide = (currentSlide + 1) % slides.length;
}
setInterval(showSlide, 5000);
showSlide();

// Анимация процесса
gsap.from('.process .process-item', {
  opacity: 0,
  y: 100,
  stagger: 0.5,
  duration: 1,
  ease: 'power2.out',
  scrollTrigger: { 
    trigger: '.process', 
    start: 'top 80%' 
  }
});

// Анимация карточек услуг
gsap.from('.health .card', {
  opacity: 0,
  y: 50,
  stagger: 0.2,
  duration: 1,
  ease: 'power2.out',
  scrollTrigger: { trigger: '.health', start: 'top 80%' }
});

// Анимация команды (карусель)
const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const totalItems = carouselItems.length;
let currentIndex = 0;

function updateCarousel() {
  const itemWidth = 100 / 4;
  const offset = currentIndex * itemWidth;
  carouselInner.style.transform = `translateX(-${offset}%)`;

  if (currentIndex >= totalItems) {
    currentIndex = 0;
    setTimeout(() => {
      carouselInner.style.transition = 'none';
      carouselInner.style.transform = `translateX(0%)`;
      setTimeout(() => {
        carouselInner.style.transition = 'transform 0.5s ease';
      }, 50);
    }, 500);
  }
}

function nextSlide() {
  currentIndex++;
  updateCarousel();
}

setInterval(nextSlide, 5000);
updateCarousel();

// Кнопка "вверх"
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
window.addEventListener('scroll', () => {
  const scrollTopBtn = document.querySelector('.scroll-top');
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
});

// Плавный скролл к секциям (только для ссылок с якорем #)
document.querySelectorAll('.navbar-item').forEach(item => {
  item.addEventListener('click', (e) => {
    const href = item.getAttribute('href');
    
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 120,
          behavior: 'smooth'
        });
        const navbarMenu = document.querySelector('.navbar-menu');
        const burger = document.querySelector('.burger');
        navbarMenu.classList.remove('is-active');
        burger.classList.remove('active');
      }
    }
  });
});

// Подсветка активного пункта меню при скролле
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.navbar-item');

window.addEventListener('load', () => {
  const currentSection = window.location.hash ? window.location.hash.substring(1) : 'home';
  navItems.forEach(item => {
    item.classList.remove('active');
    const href = item.getAttribute('href');
    if (href.startsWith('#') && href.substring(1) === currentSection) {
      item.classList.add('active');
    }
  });
});

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navItems.forEach(item => {
    const href = item.getAttribute('href');
    if (href.startsWith('#')) {
      item.classList.remove('active');
      if (href.substring(1) === current) {
        item.classList.add('active');
      }
    }
  });
});

// Бургер-меню
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const navbarMenu = document.querySelector('.navbar-menu');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navbarMenu.classList.toggle('is-active');
  });

  // Маска для телефона
  const phoneInput = document.getElementById('phone');
  if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, '');
      let formattedValue = '+7 (';

      if (value.length > 1) {
        formattedValue += value.substring(1, 4);
      }
      if (value.length >= 4) {
        formattedValue += ') ' + value.substring(4, 7);
      }
      if (value.length >= 7) {
        formattedValue += '-' + value.substring(7, 9);
      }
      if (value.length >= 9) {
        formattedValue += '-' + value.substring(9, 11);
      }

      e.target.value = formattedValue;
    });
  }

  // GSAP анимация для пунктов меню
  const navbarItems = document.querySelectorAll('.navbar-item');
  navbarItems.forEach(item => {
    // Начальные стили
    gsap.set(item, { color: '#333', backgroundColor: 'transparent', scale: 1 });

    // Анимация при наведении
    item.addEventListener('mouseenter', () => {
      if (!item.classList.contains('active')) {
        gsap.to(item, {
          color: '#fff',
          backgroundColor: '#4fc3f7',
          scale: 1.05,
          duration: 0.2,
          ease: 'power2.out'
        });
      } else {
        // Для активного пункта только увеличение
        gsap.to(item, {
          scale: 1.05,
          duration: 0.2,
          ease: 'power2.out'
        });
      }
    });

    // Анимация при уходе курсора
    item.addEventListener('mouseleave', () => {
      if (!item.classList.contains('active')) {
        gsap.to(item, {
          color: '#333',
          backgroundColor: 'transparent',
          scale: 1,
          duration: 0.2,
          ease: 'power2.out'
        });
      } else {
        // Для активного пункта только возврат масштаба
        gsap.to(item, {
          scale: 1,
          duration: 0.2,
          ease: 'power2.out'
        });
      }
    });

    // Устанавливаем стили для активного пункта
    if (item.classList.contains('active')) {
      gsap.set(item, { color: '#333', backgroundColor: 'transparent', scale: 1 });
    }
  });
>>>>>>> 5c298408f855ec194b1b63a2e484582bfcd0c2f6
});