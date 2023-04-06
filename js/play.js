let Ans = document.querySelectorAll('.answer');
let radioButton = document.getElementsByTagName('input');
let ntimes = document.getElementById('result');
let selectDoorNum = 0;
let correctNum;
let challenge = 1;

const marubatsuImage = ["images/incorrect.png", "images/correct.png"];
const marubatsuArray = [[0,0,1], [0, 1, 0], [1, 0, 0]];

makeDoor();
ntimes.children[0].textContent = challenge + '回目の挑戦';
selection[0].addEventListener('click', function() {
  clearRadio();
  radioButton[0].checked = true;
  selectDoorNum = 0;
});
selection[1].addEventListener('click', function() {
  clearRadio();
  radioButton[1].checked = true;
  selectDoorNum = 1;
});
selection[2].addEventListener('click', function() {
  clearRadio();
  radioButton[2].checked = true;
  selectDoorNum = 2;});


function makeDoor() {
  //〇✕配置を決定するための乱数生成
  let decide = Math.floor(Math.random() * 3);
  
  for(let i = 0; i < 3; i++) {
    Ans[i].src = marubatsuImage[marubatsuArray[decide][i]];
  if(marubatsuArray[decide][i] === 0) {
    Ans[i].classList.add('incorrect_door');
  } else {
    correctNum = i;
  }
}
}

function clearRadio() {
  for(let i = 0; i < 3; i++) {
    radioButton[i].checked = false;
  }
}

