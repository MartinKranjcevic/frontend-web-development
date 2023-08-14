const d4 = document.getElementById("d4");
const d6 = document.getElementById("d6");

const d8 = document.getElementById("d8");
const d10 = document.getElementById("d10");

const d12 = document.getElementById("d12");
const d20 = document.getElementById("d20");

d4.addEventListener("click", click_me);
d6.addEventListener("click", click_me);

d8.addEventListener("click", click_me);
d10.addEventListener("click", click_me);

d12.addEventListener("click", click_me);
d20.addEventListener("click", click_me);

function click_me() {

  this.classList.toggle("clicked");
}

var x;

document.getElementById("diceRollBtn").onclick = function(){

  //D4

  if (d4.classList.contains("clicked")){
    x = Math.floor(Math.random()*4)+1;
    document.getElementById("d4_paragraph").innerHTML = x;
  }
  else {
    document.getElementById("d4_paragraph").innerHTML = " ";
  }

//D6

  if (d6.classList.contains("clicked")){
    x = Math.floor(Math.random()*6)+1;
    document.getElementById("d6_paragraph").innerHTML = x;
  }
  else {
    document.getElementById("d6_paragraph").innerHTML = " ";
  }

//D8

  if (d8.classList.contains("clicked")){
    x = Math.floor(Math.random()*8)+1;
    document.getElementById("d8_paragraph").innerHTML = x;
  }
  else {
    document.getElementById("d8_paragraph").innerHTML = " ";
  }

//D10

  if (d10.classList.contains("clicked")){
    x = Math.floor(Math.random()*10)+1;
    document.getElementById("d10_paragraph").innerHTML = x;
  }
  else {
    document.getElementById("d10_paragraph").innerHTML = " ";
  }

//D12

  if (d12.classList.contains("clicked")){
    x = Math.floor(Math.random()*12)+1;
    document.getElementById("d12_paragraph").innerHTML = x;
  }
  else {
    document.getElementById("d12_paragraph").innerHTML = " ";
  }

//D20

  if (d20.classList.contains("clicked")){
    x = Math.floor(Math.random()*20)+1;
    document.getElementById("d20_paragraph").innerHTML = x;
  }
  else {
    document.getElementById("d20_paragraph").innerHTML = " ";
  }
}
