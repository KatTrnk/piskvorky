let currentPlayer = document.querySelector('.Hra__hraje');

let click = 0;

const selectBtn = (event) => {
  event.target.classList.add('board__field--circle');
  currentPlayer.classList.add('Hra__hraje--kolecko');
  click += 1;
  if (click % 2 === 1) {
    event.target.classList.add('board__field--circle');
  } else {
    event.target.classList.add('board__field--cross');
    currentPlayer.classList.remove('Hra__hraje--kolecko');
    currentPlayer.classList.add('Hra__hraje--krizek');
  }
  event.target.disabled = true;
};

// if (event.target.classList.contains('board__field--circle');) {
//   symbol+=

// }
// const cross = document.querySelector('.board__field--circle');
// cross.classList.toggle('board__field--cross');
// symbol.textContent += cross;

// currentPlayer.classList.toggle('Hra__hraje--krizek');

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
