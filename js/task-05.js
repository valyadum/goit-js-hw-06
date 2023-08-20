let input = document.querySelector('#name-input');
let nameSpan = document.querySelector('#name-output');
nameSpan.textContent = 'Anonymous';
input.addEventListener('input', (event) => {
    nameSpan.textContent = event.currentTarget.value.trim();
    if (event.currentTarget.value.trim() === "") { /** якщо прибрати if то при стиранні введеного тексту анонвім не повертається, а залишється пустота */
        nameSpan.textContent = 'Anonymous';
    }
})