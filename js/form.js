document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('color-form');
    const colorOptions = document.getElementById('color-options');
    const result = document.getElementById('result');

    const colors = generateRandomColors(10);

    colors.forEach((color, index) => {
        const label = document.createElement('label');
        label.classList.add('color-option');
        label.style.backgroundColor = color;
        label.setAttribute('for', `color-${index}`);

        const input = document.createElement('input');
        input.type = 'checkbox';
        input.id = `color-${index}`;
        input.value = color;

        const checkmark = document.createElement('div');
        checkmark.classList.add('checkmark');
        checkmark.innerHTML = '&#10003;';

        label.appendChild(input);
        label.appendChild(checkmark);
        colorOptions.appendChild(label);
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const selectedColors = [...document.querySelectorAll('#color-options input:checked')].map(input => input.value);

        if (selectedColors.length !== 3) {
            result.textContent = 'Пожалуйста, выберите ровно три цвета.';
            return;
        }

        const averageColor = calculateAverageColor(selectedColors);
        result.innerHTML = `<div style="width: 100px; height: 100px; background-color: ${averageColor};"></div>Ваш любимый цвет: ${averageColor}`;
    });

    function generateRandomColors(num) {
        const colors = [];
        for (let i = 0; i < num; i++) {
            const color = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
            colors.push(color);
        }
        return colors;
    }

    function calculateAverageColor(colors) {
        let r = 0, g = 0, b = 0;

        colors.forEach(color => {
            r += parseInt(color.slice(1, 3), 16);
            g += parseInt(color.slice(3, 5), 16);
            b += parseInt(color.slice(5, 7), 16);
        });

        r = Math.round(r / colors.length).toString(16).padStart(2, '0');
        g = Math.round(g / colors.length).toString(16).padStart(2, '0');
        b = Math.round(b / colors.length).toString(16).padStart(2, '0');

        return `#${r}${g}${b}`;
    }
});