const resultNode = document.querySelector('.result');

const btnNode = document.querySelector('.button');

const saveJson = localStorage.getItem("json");

document.addEventListener("DOMContentLoaded", () => {
    if (saveJson) {
        displayResult(JSON.parse(saveJson));
    }
});

function displayResult(apiData) {
    let cards = '';

    apiData.forEach((item) => {
        const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>
    `;
        cards = cards + cardBlock;
    });

    resultNode.innerHTML = cards;
}

btnNode.addEventListener('click', () => {
    let value1 = document.querySelector('.pgNum').value;
    let value2 = document.querySelector('.limit').value;
    value1 = Number(value1);
    value2 = Number(value2);

    if (value1 >= 1 && value1 <= 10 && value2 >= 1 && value2 <= 10) {
        fetch(`https://picsum.photos/v2/list?page=${value1}&limit=${value2}`)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                displayResult(json);
                localStorage.setItem('json', JSON.stringify(json));
            })
            .catch(() => { console.log('error') });;

        localStorage.setItem('json', JSON.stringify(json))
    };
    if ((value1 < 1 || value1 > 10 || isNaN(value1)) && value2 >= 1 && value2 <= 10) {
        resultNode.innerHTML = '<h1>Номер страницы вне диапазона от 1 до 10</h1>'
    };
    if ((value1 >= 1 && value1 <= 10) && (value2 < 1 || value2 > 10 || isNaN(value2))) {
        resultNode.innerHTML = '<h1>Лимит вне диапазона от 1 до 10</h1>'
    };
    if ((value1 < 1 || value1 > 10 || isNaN(value1)) && (value2 < 1 || value2 > 10 || isNaN(value2))) {
        resultNode.innerHTML = '<h1>Номер страницы и лимит вне диапазона от 1 до 10</h1>'
    };
});