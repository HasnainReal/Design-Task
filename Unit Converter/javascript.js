
let feet = document.querySelector('#feet-box');
let inches = document.querySelector('#inch-box');
let convert = document.querySelector('button');

let string = '';

feet.addEventListener('input', function () {
    string = this.value;
});

convert.addEventListener('click', function () {
    let x = string;
    let y = x * 12;
    inches.value = y;
});




