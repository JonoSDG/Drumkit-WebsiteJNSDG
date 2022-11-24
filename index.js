var drumCount = document.querySelectorAll('.drum').length;
for (var i = 0; i < drumCount; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function(event) {
    playSound(this.innerHTML);
    btnActive(this.innerHTML);
  });
}

document.addEventListener('keydown',function(event){
  playSound(event.key);
  btnActive(event.key);
});

function playSound(btnSelect) {
  switch (btnSelect) {
    case 'q':
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case 'w':
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case 'e':
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case 'a':
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    case 's':
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case 'd':
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case ' ':
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    case '1':
      var audio = new Audio('sounds/drumithink.mp3');
      audio.play();
      break;
    
    default: console.log(btnSelect);
  }
}

function btnActive(key){
  document.querySelector("." + key).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("." + key).classList.remove("pressed");
  },100);
}
