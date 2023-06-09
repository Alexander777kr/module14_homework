document.querySelector('.btn').addEventListener('click', () => {
    const input1 = document.querySelector('.input-text').value;
    const input2 = document.querySelector('.input-text2').value;
    const result = document.querySelector('.result');
    const input1Number = +input1;
    const input2Number = +input2;

    if (isNaN(input1Number) || isNaN(input2Number) ||
        input1Number < 100 || input1Number > 300 ||
        input2Number < 100 || input2Number > 300) {
        result.innerHTML = 'одно или несколько чисел вне диапазона от 100 до 300';
    } else {
        fetch(`https://picsum.photos/200/300`)
            //.then((response) => { return response.url(); })
            .then((data) => {
                result.insertAdjacentHTML(
                    "beforeend",
                    `<img src="${data.url}">`
                );
            })
            .catch(() => { console.log('error') });
    }
});