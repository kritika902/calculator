const buttons = document.querySelectorAll('button');
for (let button of buttons) {
    button.addEventListener('click', function () {
        document.querySelector('input').value += button.innerText;
    });
}
document.querySelector('.AC').addEventListener('click', function () {
    document.querySelector('input').value = '';
});
document.querySelector('.backspace').addEventListener('click', function () {
    document.querySelector('input').value = document.querySelector('input').value.slice(0, -1);
});
document.querySelector('.divide').addEventListener('click', function () {
    document.querySelector('input').value = document.querySelector('input').value.slice(0, -1);
    document.querySelector('input').value += '/';
});
document.querySelector('.x').addEventListener('click', function () {
    document.querySelector('input').value += '*';
});
document.querySelector('.equal').addEventListener('click', function () {
    let toBeCalc = document.querySelector('input').value;
    toBeCalc = toBeCalc.slice(0, -1);
    toBeCalc = math.evaluate(toBeCalc);
    document.querySelector('input').value = toBeCalc;
});