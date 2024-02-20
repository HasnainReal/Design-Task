let CounterTitle = document.querySelector('.counter-title');

let CounterValue = 0;


let Increment = document.querySelector('.inc-btn');
let Reset = document.querySelector('.reset-btn');
let Decrement = document.querySelector('.dec-btn');


Increment.addEventListener('click', () => {
    CounterValue++;
    CounterTitle.textContent = CounterValue;
});

Decrement.addEventListener('click', () => {
    CounterValue--;
    CounterTitle.textContent = CounterValue;
});

Reset.addEventListener('click', () => {
    CounterValue = 0;
    CounterTitle.textContent = CounterValue;
});




