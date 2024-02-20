let displayinput = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let buttonArray = Array.from(buttons);

let string = '';

buttonArray.forEach(btn => {

  btn.addEventListener('click', (e) => {

    if (e.target.innerHTML == 'DEL') {
      string = string.substring(0, string.length - 1);
      displayinput.value = string;
    } else if (e.target.innerHTML == 'AC') {
      string = '';
      displayinput.value = string;
    } else if (e.target.innerHTML == '=') {
      string = eval(string);
      displayinput.value = string;
    } else {
      string += e.target.innerHTML;
      displayinput.value = string;
    }

  });

});