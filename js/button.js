let btn = document.getElementsByTagName('button');
let order = document.getElementById('order');
let okButton = btn[0];
let changeButton = btn[1];
let remainButton = btn[2];
let resultButton = btn[3];
let replayButton = btn[4];
let incorrectDoor = document.getElementsByClassName('incorrect_door');
let door = document.getElementsByClassName('door');
let openDoorNum = Math.floor(Math.random() * 2);
let openDoorVal = incorrectDoor[openDoorNum].parentNode.parentNode.children[0].children[0].value;
let changeCounter = 0;
//結果の回数の諸定義
let resultTd = document.getElementsByClassName('xtimes');
let changeCorrect = 0;
let notChangeCorrect = 0;
let incorrect = 0;

okButton.addEventListener('click', function() {

  console.log(openDoorVal);

  okButton.style.display = 'none';
  changeButton.style.display = 'inline';
  remainButton.style.display = 'inline';
  radioButton[0].disabled = true;
  radioButton[1].disabled = true;
  radioButton[2].disabled = true;
  order.children[0].innerHTML = "②ひとつ✕の扉を開けました。選択を変更しますか？";

  if(!radioButton[openDoorVal].checked) {
    incorrectDoor[openDoorNum].parentNode.children[0].style.opacity = 0;
    openDoorVal = incorrectDoor[openDoorNum].parentNode.parentNode.children[0].children[0].value;
  } else {
    switch (openDoorNum) {
      case 0:
        incorrectDoor[1].parentNode.children[0].style.opacity = 0;
        openDoorVal = incorrectDoor[1].parentNode.parentNode.children[0].children[0].value;
        break;
      case 1:
        incorrectDoor[0].parentNode.children[0].style.opacity = 0;
        openDoorVal = incorrectDoor[0].parentNode.parentNode.children[0].children[0].value;
        break;
    }
  }

});

changeButton.addEventListener('click', function(){
  switch (selectDoorNum) {
    case 0:
      radioButton[0].checked = false;
      radioButton[1].checked = true;
      radioButton[2].checked = true;
      radioButton[openDoorVal].checked = false;
      if(radioButton[1].checked) {
        selectDoorNum = 1;
      } else if(radioButton[2].checked) {
        selectDoorNum = 2;
      }
      break;
    case 1:
      radioButton[1].checked = false;
      radioButton[0].checked = true;
      radioButton[2].checked = true;
      radioButton[openDoorVal].checked = false;
      if(radioButton[0].checked) {
        selectDoorNum = 0;
      } else if(radioButton[2].checked) {
        selectDoorNum = 2;
      }
      break;
    case 2:
      radioButton[2].checked = false;
      radioButton[1].checked = true;
      radioButton[0].checked = true;
      radioButton[openDoorVal].checked = false;
      if(radioButton[0].checked) {
        selectDoorNum = 0;
      } else if(radioButton[1].checked) {
        selectDoorNum = 1;
      }
      break;
  }
  changeCounter = 1;
  changeButton.style.display = 'none';
  remainButton.style.display = 'none';
  resultButton.style.display = 'inline';
  order.children[0].innerHTML = "果たして結果は...！？";
});

remainButton.addEventListener('click', function() {
  changeButton.style.display = 'none';
  remainButton.style.display = 'none';
  resultButton.style.display = 'inline';
  order.children[0].innerHTML = "果たして結果は...！？";
});

resultButton.addEventListener('click', function() {
  door[0].style.opacity = 0;
  door[1].style.opacity = 0;
  door[2].style.opacity = 0;
  resultButton.style.display = "none" 
  replayButton.style.display = "inline" 
  if(selectDoorNum === correctNum) {
    if(changeCounter === 1) {
      changeCorrect += 1;
      resultTd[0].innerText = changeCorrect;
      order.children[0].innerHTML = "正解です！";
    } else {
      notChangeCorrect += 1;
      resultTd[1].innerText = notChangeCorrect;
      order.children[0].innerHTML = "正解です！";
    }
  } else {
    incorrect += 1;
    resultTd[2].innerText = incorrect;
    order.children[0].innerHTML = "残念。不正解です！";
  }
});

replayButton.addEventListener('click', function() {
  changeCounter = 0;
  selectDoorNum = 0;
  Ans[0].classList.remove('incorrect_door');
  Ans[1].classList.remove('incorrect_door');
  Ans[2].classList.remove('incorrect_door');
  door[0].style.opacity = 1;
  door[1].style.opacity = 1;
  door[2].style.opacity = 1;
  radioButton[0].checked = true;
  radioButton[1].checked = false;
  radioButton[2].checked = false;
  radioButton[0].disabled = false;
  radioButton[1].disabled = false;
  radioButton[2].disabled = false;
  makeDoor();
  openDoorNum = Math.floor(Math.random() * 2);
  openDoorVal = incorrectDoor[openDoorNum].parentNode.parentNode.children[0].children[0].value;
  order.children[0].innerHTML = "①３つのドアのうち、１つ選択してください。";

  replayButton.style.display = "none";
  okButton.style.display = "inline";
  challenge += 1;
  ntimes.children[0].textContent = challenge + '回目の挑戦';
}); 