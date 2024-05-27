const film = ['Боевик', 'Фантастика', 'Ужасы', 'Драма', 'Мультфильмы', 'На реальных событиях', 'Комедия', 'Триллер', 'Мелодрама', 'Детектив']

function getRandomElements(arr, num) {
    const shuffled = arr.slice().sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

function getRandomNumbers(num, min, max) {
    const numbers = [];
    for (let i = 0; i < num; i++) {
        numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return numbers;
}

document.getElementById('randomButton').addEventListener('click', () => {
    const randomGenres = getRandomElements(film, 3);
    const randomNumbers = getRandomNumbers(3, 1, 15);

    let result = '';
    for (let i = 0; i < 3; i++) {
        result += `${randomGenres[i]} - ${randomNumbers[i]}<br>`;
    }
    const output = document.getElementById('output');
    output.innerHTML = result;
});

document.getElementById('randomButton1').addEventListener('click', () => {
    const randomGenres = getRandomElements(film, 1);
    const randomNumbers = getRandomNumbers(1, 1, 15);

    let result = '';
    for (let i = 0; i < 1; i++) {
        result += `${randomGenres[i]} - ${randomNumbers[i]}<br>`;
    }
    const output = document.getElementById('output1');
    output.innerHTML = result;
});