let choices = document.querySelectorAll('.point');
let computer = document.querySelectorAll('.comp');
let user = document.querySelector('.user');
let machine = document.querySelector('.machine');
let lines = document.querySelectorAll('.line');
let random = Math.floor(Math.random()*3);
let text = document.querySelector('.text');
let msg = document.querySelector('#msg');
let play = document.querySelector('#play');
let ruleBtn = document.querySelector('#rule');
let crossBtn = document.querySelector('.cross');
let rules = document.querySelector('.rules');
let score = JSON.parse(localStorage.getItem('scor')) || 0;
let scoree = JSON.parse(localStorage.getItem('scoree')) || 0;
let userScore = document.getElementById('bb');
let compScore = document.getElementById('ba');
let main = document.querySelector('.main');
let celebs = document.querySelector('.celebs');
let plays = document.querySelector('#plays');

userScore.innerText = score;
compScore.innerText = scoree;

let count = 0;

choices.forEach((element, index) => {
  element.addEventListener('click', () => {
    lines.forEach(line => {
      user.style.opacity = "1";
      line.style.display = "none";
    });
    choices.forEach(item => {
      item.style.display = "none";
    });
    element.style.display = "block";
    element.classList.add('show');
    setTimeout(() => {
      machine.style.opacity = "1";
      setTimeout(() => {
        computer[random].style.display="block";
        computer[random].classList.add('right');
      }, 1000);
    }, 200);
    setTimeout(() => {
      if (index === random) {
        text.style.display = "block";
        msg.innerText = " GAME TIED"
      } else if (index === 0 && random === 1 || index === 1 && random === 2 || index === 2 && random === 0) {
        text.style.display = "block";
        msg.innerText = " YOU WIN \n AGAINST PC";
        count = score + 1;
        userScore.innerText = count;
        localStorage.setItem("scor", JSON.stringify(count));
        element.classList.add('glare');
        
        let nextBtn = document.querySelector('#next');
        nextBtn.style.display = "block";
        nextBtn.addEventListener('click', () => {
          setTimeout(() => {
              main.style.display = "none";
              celebs.style.display = "block";
          }, 100);
        });
      } else {
        text.style.display = "block";
        msg.innerText = " YOU LOST \n AGAINST PC";
        count = scoree + 1;
        compScore.innerText = count;
        localStorage.setItem("scoree", JSON.stringify(count));
        computer[random].classList.add('glare');
      }
    }, 1500);
  });
});

play.addEventListener('click', () => {
  window.location.reload();
});

ruleBtn.addEventListener('click', () => {
   setTimeout(() => {
    rules.style.opacity = "1";
    crossBtn.style.opacity = "1";
   }, 100)
});

crossBtn.addEventListener('click', () => {
  setTimeout(() => {
   rules.style.opacity = "0";
   crossBtn.style.opacity = "0";
  }, 100)
});
plays.addEventListener('click', () => {
  window.location.reload();
});






