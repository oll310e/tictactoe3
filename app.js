(function () {
  let tictactoe = (function () {
    const gameBoard = ["", "", "", "", "", "", "", "", ""];
    const container = document.querySelector(".container");

    const players = [
      { name: "Oliver", sign: "O" },
      { name: "Xylo", sign: "X" },
    ];

    const currentPlayer = { name: "Oliver", sign: "O" };

    const play = function () {
      //cacheDOM();
      render();
      console.log("we are playing", players);
    };

    // const cacheDOM = (function () {

    //   return { container };
    // })();

    const render = function () {
      gameBoard.forEach((sign, index) => {
        createNewCell(sign, index);
      });
    };

    const createNewCell = function (sign, index) {
      let newCell = document.createElement("div");
      newCell.classList.add("cell");
      newCell.setAttribute("cell-id", index);
      newCell.addEventListener("click", placeSign);
      container.appendChild(newCell);
    };

    const placeSign = function () {
      console.log(currentPlayer.sign);
    };

    return { play };
  })();

  const playButton = document.querySelector(".playButton");
  playButton.addEventListener("click", tictactoe.play);
})();
