//selector
(function () {
  const formElm = document.querySelector("form");
  const userInputElm = document.getElementById("luck-input");
  const lucknumberElm = document.querySelector(".lucky-number span");
  const p1BtnElm = document.querySelector(".p1Btn");
  const p2BtnElm = document.querySelector(".p2Btn");
  const playerNumber1 = document.querySelector(".p1");
  const playerNumber2 = document.querySelector(".p2");
  let winnerElm = document.querySelector(".winner");
  const resetElm = document.querySelector("#resetBtn");

  let p1Value = 0;
  let p2Value = 0;
  let p1turn = true;
  let p2turn = true;
  let luckNumber = 0;
  let gameOver;
  function initialState() {
    p1Value = 0;
    p2Value = 0;
    p1turn = true;
    p2turn = true;
    luckNumber = 0;
    gameOver = false;
  }
  function initialView() {
    lucknumberElm.textContent = luckNumber;
    playerNumber1.textContent = 0;
    playerNumber2.textContent = 0;
    winnerElm.textContent = null;
    p1BtnElm.removeAttribute("disabled");
    p2BtnElm.removeAttribute("disabled");
  }

  // const colors = [
  //   "green",
  //   "blue",
  //   "red",
  //   "#f12455",
  //   "#f12045",
  //   "#f12485",
  //   "rgb(150,180,32)",
  //   ,
  // ];

  function wining(player) {
    gameOver = true;

    alert((winnerElm.textContent = `${player} is win `));
    p1BtnElm.setAttribute("disabled", "disabled");
    p2BtnElm.setAttribute("disabled", "disabled");
  }
  function randomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }
  formElm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    //recieving the input
    luckNumber = randomNumber();
    //luckNumber = parseInt(userInputElm.value);
    //userInputElm.value = luckNumber;
    lucknumberElm.textContent = luckNumber;
    userInputElm.value = "";
  });

  p1BtnElm.addEventListener("click", function (evt) {
    //const random = randomcolor();
    //document.body.style.backgroundColor = colors[random];
    if (p1turn && luckNumber !== p1Value && luckNumber != p2Value) {
      p1Value = randomNumber();

      playerNumber1.textContent = p1Value;

      p1turn = false;
      p2turn = true;

      p1BtnElm.setAttribute("disabled", "disabled");

      p2BtnElm.removeAttribute("disabled");
    } else {
      alert("You have to input lucky number first");
    }

    if (p1Value === luckNumber && p1Value != 0) {
      wining("player1");
    }
  });

  p2BtnElm.addEventListener("click", function (evt) {
    //const random = randomcolor();
    //document.body.style.backgroundColor = colors[random];
    if (p2turn && luckNumber !== p2Value && luckNumber != p1Value) {
      p2Value = randomNumber();

      playerNumber2.textContent = p2Value;

      p2turn = false;
      p1turn = true;

      p2BtnElm.setAttribute("disabled", "disabled");

      p1BtnElm.removeAttribute("disabled");
    } else {
      alert("You have to input lucky number first");
    }

    if (p2Value == luckNumber && p2Value != 0) {
      wining("player 2");
    }
  });

  resetElm.addEventListener("click", function (evt) {
    initialState();
    initialView();
  });
})();
// function randomcolor() {
//   return Math.floor(Math.random() * colors.length);
//
