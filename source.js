let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissorr = document.getElementById("scissor");
let play = document.getElementById("submit");
let winner = document.getElementById("winner");
let reset = document.getElementById("reset");

let userChoice;

const bot = ["Rock", "Paper", "Scissor"];

rock.addEventListener("click", function () {
  userChoice = "Rock";
  rock.style.color = "#EEEEEE";
  paper.style.color = "#222831";
  scissor.style.color = "#222831";
  rock.style.background = "#222831";
  paper.style.background = "#EEEEEE";
  scissor.style.background = "#EEEEEE";
});

paper.addEventListener("click", function () {
  userChoice = "Paper";
  paper.style.color = "#EEEEEE";
  rock.style.color = "#222831";
  scissor.style.color = "#222831";
  paper.style.background = "#222831";
  rock.style.background = "#EEEEEE";
  scissor.style.background = "#EEEEEE";
});

scissor.addEventListener("click", function () {
  userChoice = "Scissor";
  scissor.style.color = "#EEEEEE";
  rock.style.color = "#222831";
  paper.style.color = "#222831";
  scissor.style.background = "#222831";
  rock.style.background = "#EEEEEE";
  paper.style.background = "#EEEEEE";
});

submit.addEventListener("click", function () {
  let random = bot[Math.floor(Math.random() * bot.length)];
  rock.style.display = "none";
  paper.style.display = "none";
  scissor.style.display = "none";
  submit.style.display = "none";
  reset.style.display = "initial";

  if (userChoice == "Rock" && random == "Rock") {
    winner.innerText = "Both Rock!";
  } else if (userChoice == "Paper" && random == "Paper") {
    winner.innerText = "Both Paper!";
  } else if (userChoice == "Scissor" && random == "Scissor") {
    winner.innerText = "Both Scissor!";
  } else if (userChoice == "Rock" && random == "Paper") {
    winner.innerText = "Player Win!";
  } else if (userChoice == "Scissor" && random == "Paper") {
    winner.innerText = "Player Win!";
  } else if (userChoice == "Paper" && random == "Rock") {
    winner.innerText = "Player Win!";
  } else {
    winner.innerText = "Player Lost!";
  }
});

reset.addEventListener("click", function () {
  rock.style.display = "initial";
  paper.style.display = "initial";
  scissor.style.display = "initial";
  submit.style.display = "initial";
  reset.style.display = "none";

  rock.style.background = "#EEEEEE";
  paper.style.background = "#EEEEEE";
  scissor.style.background = "#EEEEEE";

  rock.style.color = "#222831";
  paper.style.color = "#222831";
  scissor.style.color = "#222831";

  winner.innerText = "";
});
