import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

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
  selectBtnArray();
};

const confirm = (event) => {
  const response = window.confirm('Opravdu chceš začít znovu?');
  if (response === false) {
    event.preventDefault();
  }
};

document.querySelector('#restart').addEventListener('click', confirm);

document.querySelectorAll('.Hra__policka button').forEach((policko) => {
  policko.addEventListener('click', selectBtn);
});

const selectBtnArray = () => {
  const allButtonsElm = document.querySelectorAll('.Hra__policka button');

  const allButtonsArray = Array.from(allButtonsElm).map((policka) => {
    if (policka.classList.contains('board__field--circle')) {
      return 'o';
    }
    if (policka.classList.contains('board__field--cross')) {
      return 'x';
    }
    return '_';
  });

  const winner = findWinner(allButtonsArray);
  if (winner === 'o' || winner === 'x') {
    setTimeout(() => {
      alert(`Vyhrál hráč se symbolem ${winner}`);
      location.reload();
    }, 800);
  } else if (winner === 'tie') {
    setTimeout(() => {
      alert('Hra skončila nerozhodně!');
      location.reload();
    }, 800);
  }

  const checkPlayer = async () => {
    const player = 'x';

    const responseAPI = await fetch(
      'https://piskvorky.czechitas-podklady.cz/api/suggest-next-move',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          board: allButtonsArray,
          player: player,
        }),
      },
    );
    const data = await responseAPI.json();
    const { x, y } = data.position;
    const buttons = allButtonsElm[x + y * 10];
    buttons.click();
  };

  if (currentPlayer.classList.contains('Hra__hraje--krizek')) {
    checkPlayer();
  }
};
