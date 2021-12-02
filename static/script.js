
var audio = document.getElementById("player");
audio.play();

function startTimer() {
  var myVar = setInterval(function() {
    time = audio.currentTime;
    //wait for ittttt
    if (time >= 13.8) {

      document.body.classList.add("bg-colors");

    }
  }, 600); 
}

audio.addEventListener('playing',function() { 
  startTimer(); 
},false); 