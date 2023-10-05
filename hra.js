let currentPlayer = document.querySelector('.Hra__hraje');

let click = 0;

const selectBtn = (event) => {
  click += 1;
  if (click % 2 === 1) {
    event.target.classList.add('board__field--circle');
    currentPlayer.classList.toggle('Hra__hraje--krizek');
  } else {
    event.target.classList.add('board__field--cross');
    currentPlayer.classList.toggle('Hra__hraje--krizek');
  }
  event.target.disabled = true;
};

document.querySelector('#btn1').addEventListener('click', selectBtn);
document.querySelector('#btn2').addEventListener('click', selectBtn);
document.querySelector('#btn3').addEventListener('click', selectBtn);
document.querySelector('#btn4').addEventListener('click', selectBtn);
document.querySelector('#btn5').addEventListener('click', selectBtn);
document.querySelector('#btn6').addEventListener('click', selectBtn);
document.querySelector('#btn7').addEventListener('click', selectBtn);
document.querySelector('#btn8').addEventListener('click', selectBtn);
document.querySelector('#btn9').addEventListener('click', selectBtn);
document.querySelector('#btn10').addEventListener('click', selectBtn);

const confirm = (event) => {
  const response = window.confirm('Opravdu chceš začít znovu?');
  if (response === false) {
    event.preventDefault();
  }
};

document.querySelector('#restart').addEventListener('click', confirm);
