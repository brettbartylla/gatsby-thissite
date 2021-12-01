
var audio = document.getElementById("player");
audio.play();

function colorChange() { 
  var i = 0;
  function change() {
    var doc = document.getElementById("background");
    var color = ["red", "blue", "black", "green"];
    document.body.style.backgroundColor = color[i];
    i = (i + 1) % color.length;
  }
  setInterval(change, 480); //synced to bpm
}

function startTimer() {
  var myVar = setInterval(function() {
    time = audio.currentTime;
    //wait for ittttt
    if (time >= 13.4) {
      //stop current timer
      clearInterval(myVar);
      //call color looping
      colorChange()
    }
  }, 600); 
}

audio.addEventListener('playing',function() { 
  startTimer(); 
},false); 