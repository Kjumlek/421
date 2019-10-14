var nbEssais = 0;
var keep = [false, false, false];
var yes = false;

var nombreAleatoire = [];
var animation = [];

var okButton = true;

function superInit() {
      var faces = document.querySelectorAll('.face');
      for (var i = 0; i < faces.length; i++) {
      faces[i].style.backgroundColor = "red";
      faces[i].style.opacity = "0.7";
    }
    keep = [false, false, false];
    yes = false;
}

function initA() {
  nombreAleatoire[0] = Math.floor(Math.random() * 6 + 1);
  animation[0] = "loop 0.5s linear infinite";
}
function initB() {
  nombreAleatoire[1] = Math.floor(Math.random() * 6 + 1);
  animation[1] = "loop 0.5s linear infinite";
}
function initC() {
  nombreAleatoire[2] = Math.floor(Math.random() * 6 + 1);
  animation[2] = "loop 0.5s linear infinite";
}



function possibleA(){
  if (keep[0] == false){
    playA();  
  }  
}
function possibleB(){
  if (keep[1] == false){
    playB();  
  }  
}
function possibleC(){
  if (keep[2] == false){
    playC();  
  }  
}



function partieJoueur(){
  if (nbEssais == 3){
    keep = [true, true, true];
    setTimeout(function(){
      var faces = document.querySelectorAll('.dice>.face');
      for (var i = 0; i < faces.length; i++) {
        faces[i].style.backgroundColor = "black";
        faces[i].style.opacity = "0.9";
      }
    }, 1000);
  }
  else if (nbEssais > 3){
    document.getElementById("diceA").style.animation = "loop 0.5s linear infinite";
    document.getElementById("diceB").style.animation = "loop 0.5s linear infinite";
    document.getElementById("diceC").style.animation = "loop 0.5s linear infinite";    
    initA();
    initB();
    initC();    
    superInit();
    nbEssais = 0;
  }  
}


//document.getElementById("play").onclick = function() {
document.querySelector('#play').addEventListener('click', function (e) {
  if (okButton == true) {
    nbEssais += 1;
    console.log(nbEssais);
    possibleA();
    possibleB();
    possibleC();
    partieJoueur();
    e.preventDefault();
  }
}, false);



function playA(){
  okButton = false;
  yes = true;
  document.getElementById("diceA").style.animation = "loop 0.5s linear infinite";
  initA();
  setTimeout(function(){
    if (nombreAleatoire[0] == 1){
      animation[0] = "loop 3s linear 0s 1 normal forwards";
    }
    else if (nombreAleatoire[0] == 2){
      animation[0] = "loop2 1s linear 0s 1 normal forwards";
    }
    else if (nombreAleatoire[0] == 3){
      animation[0] = "loop3 1s linear 0s 1 normal forwards";
    }
    else if (nombreAleatoire[0] == 4){
      animation[0] = "loop4 1s linear 0s 1 normal forwards";
    }
    else if (nombreAleatoire[0] == 5){
      animation[0] = "loop5 1s linear 0s 1 normal forwards";
    }
    else {
      animation[0] = "loop6 1s linear 0s 1 normal forwards";
    }
  }, 1000);
  setTimeout(function(){
    okButton = true;
  }, 2000);
}

function playB(){
  okButton = false;
  yes = true;
  document.getElementById("diceB").style.animation = "loop 0.5s linear infinite";
  initB();
  setTimeout(function(){
    if (nombreAleatoire[1] == 1){
      animation[1] = "loop 3s linear 0s 1 normal forwards";
    }
    else if (nombreAleatoire[1] == 2){
      animation[1] = "loop2 1s linear 0s 1 normal forwards";
    }
    else if (nombreAleatoire[1] == 3){
      animation[1] = "loop3 1s linear 0s 1 normal forwards";
    }
    else if (nombreAleatoire[1] == 4){
      animation[1] = "loop4 1s linear 0s 1 normal forwards";
    }
    else if (nombreAleatoire[1] == 5){
      animation[1] = "loop5 1s linear 0s 1 normal forwards";
    }
    else {
      animation[1] = "loop6 1s linear 0s 1 normal forwards";
    }
  }, 1000);
  setTimeout(function(){
    okButton = true;
  }, 2000);
}

function playC(){
  okButton = false;
  yes = true;
  document.getElementById("diceC").style.animation = "loop 0.5s linear infinite";
  initC();
  setTimeout(function(){
    if (nombreAleatoire[2] == 1){
      animation[2] = "loop 3s linear 0s 1 normal forwards";
    }
    else if (nombreAleatoire[2] == 2){
      animation[2] = "loop2 1s linear 0s 1 normal forwards";
    }
    else if (nombreAleatoire[2] == 3){
      animation[2] = "loop3 1s linear 0s 1 normal forwards";
    }
    else if (nombreAleatoire[2] == 4){
      animation[2] = "loop4 1s linear 0s 1 normal forwards";
    }
    else if (nombreAleatoire[2] == 5){
      animation[2] = "loop5 1s linear 0s 1 normal forwards";
    }
    else {
      animation[2] = "loop6 1s linear 0s 1 normal forwards";
    }
  }, 1000);
  setTimeout(function(){
    okButton = true;
  }, 2000);
}



document.getElementById("diceA").addEventListener("animationiteration", function() {
    document.getElementById("diceA").style.animation = animation[0];
});
document.getElementById("diceB").addEventListener("animationiteration", function() {
    document.getElementById("diceB").style.animation = animation[1];
});
document.getElementById("diceC").addEventListener("animationiteration", function() {
    document.getElementById("diceC").style.animation = animation[2];
});


document.getElementById("diceA").onclick = function() {
  if (yes == true){
    var faces = document.querySelectorAll('#diceA>.face');     
      for (var i = 0; i < faces.length; i++) {
        faces[i].style.backgroundColor = "black";
        faces[i].style.opacity = "0.9";
      }
      keep[0] = true;
  }
}
document.getElementById("diceB").onclick = function() {
  if (yes == true){
    var faces = document.querySelectorAll('#diceB>.face');      
      for (var i = 0; i < faces.length; i++) {
        faces[i].style.backgroundColor = "black";
        faces[i].style.opacity = "0.9";
      }
      keep[1] = true;
  }
}
document.getElementById("diceC").onclick = function() {
  if (yes == true){
    var faces = document.querySelectorAll('#diceC>.face');      
      for (var i = 0; i < faces.length; i++) {
        faces[i].style.backgroundColor = "black";
        faces[i].style.opacity = "0.9";
      }
      keep[2] = true;
  }
}
document.getElementById("backtoback").onclick = function() {
  
}

initA();
initB();
initC();


