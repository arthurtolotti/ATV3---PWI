const pos = document.querySelectorAll(".pos");
let play = `X`;
let simbol = `<img src="assets/images/x.png" alt="">`;
let contPlay01 = 0;

function winner(bord, pos01, pos02, pos03, play) {
  if (
    bord[pos01].innerHTML !== "" &&
    bord[pos01].innerHTML === bord[pos02].innerHTML &&
    bord[pos02].innerHTML === bord[pos03].innerHTML
  ) {
    if (play === `X`) {
      win = document.querySelector("#play01").value;
      document.querySelector(
        ".winner"
      ).innerHTML = `Temos um vencedor play X! ${win}`;
      if (localStorage.getItem("contPlay01")) {
        contPlay01 = parseInt(localStorage.getItem("contPlay01")) + 1;
        localStorage.setItem("contPlay01", contPlay01);
      } else {
        localStorage.setItem("contPlay01", 1);
        contPlay01 = 1;
      }
      document.querySelector("#placar01").innerHTML = contPlay01;
    } else {
      win = document.querySelector("#play02").value;
      document.querySelector(
        ".winner"
      ).innerHTML = `Temos um vencedor play O! ${win}`;
    }
  }
}

pos.forEach((e, i, bord) => {
  //console.log(e);
  e.addEventListener("click", () => {
    e.innerHTML = simbol;
    console.log(i);
    if (play === "X") {
      play = `O`;
      simbol = `<img src="assets/images/x.png" alt="">`;
    } else {
      play = `X`;
      simbol = `<img src="assets/images/o.png" alt="">`;
    }
    winner(bord, 0, 1, 2, play);
    winner(bord, 3, 4, 5, play);
    winner(bord, 6, 7, 8, play);
    winner(bord, 0, 3, 6, play);
    winner(bord, 1, 4, 7, play);
    winner(bord, 2, 5, 8, play);
    winner(bord, 0, 4, 8, play);
    winner(bord, 2, 4, 6, play);
  });
});

document.querySelector(".reset").addEventListener("click", () => {
  document.querySelectorAll(".pos").forEach((e) => {
    e.innerHTML = "";
  });
  document.querySelector(".winner").innerHTML = "";
});
