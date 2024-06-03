document.addEventListener('DOMContentLoaded', () => {
    const loadMoreButton = document.getElementById('load-more');
    if (loadMoreButton) {
        loadMoreButton.addEventListener('click', () => {
            loadMoreDogs();
        });

        // Initial load of dogs
        loadMoreDogs();
    }

    const showFactButton = document.getElementById('show-fact');
    const popup = document.getElementById('cat-fact-popup');
    const popupback = document.getElementById('popup-back');
    const span = document.getElementsByClassName('close')[0];
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    const overlay = document.getElementById('overlay');

    // Загрузка иконок
    sunIcon.src = 'image/sun.png';
    moonIcon.src = 'image/moon.png';


    showFactButton.onclick = async function() {
        const fact = await fetchCatFact();
        document.getElementById('cat-fact').innerText = fact;
        popup.style.display = 'block';
        overlay.style.display = 'flex';
    }

    span.onclick = function() {
        popup.style.display = 'none';
        overlay.style.display = 'none';

    }

    window.onclick = function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
            overlay.style.display = 'none';
        }
    }

        // Запускаем функцию при загрузке страницы
    // window.onload = applyDarkThemeBasedOnSunset;

    const burgerToggle = document.getElementById('burger-toggle');
    const burgerMenu = document.getElementById('burger-menu');
    const themeToggle = document.getElementById('theme-toggle');

    burgerToggle.addEventListener('click', () => {
        burgerMenu.classList.toggle('open');
    });

    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            document.body.classList.add('dark-theme');
            sessionStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-theme');
            sessionStorage.setItem('theme', 'light');
        }
    });

    const savedTheme = sessionStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.checked = true;
    } else {
        document.body.classList.remove('dark-theme');
        themeToggle.checked = false;
    }
});

function appendDogImage(url) {
    const dogContainer = document.getElementById('dog-container');
    const img = document.createElement('img');
    img.src = url;
    dogContainer.appendChild(img);
}

// async function fetchSunsetTime() {
//     const response = await fetch('https://api.sunrise-sunset.org/json?lat=***&lng=***&formatted=0');
//     const data = await response.json();
//     return new Date(data.results.sunset);
// }

// async function applyDarkThemeBasedOnSunset() {
//     const sunsetTime = await fetchSunsetTime();
//
//     if (now.getHours() >= sunsetTime.getHours()) {
//         document.body.classList.add('dark-theme');
//     } else {
//         document.body.classList.remove('dark-theme');
//     }
// }

// async function applyDarkThemeBasedOnSunset() {
//     const themeToggle = await fetchSunsetTime();

//     if (now.getHours() >= sunsetTime.getHours()) {
//         document.body.classList.add('dark-theme');
//     } else {
//         document.body.classList.remove('dark-theme');
//     }
// }

