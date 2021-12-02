
var audio = document.getElementById("player");
audio.play();

//detune after a while
function randRange(data) {
  var newTime = data[Math.floor(data.length * Math.random())];
  return newTime;
}

function toggleSomething() {
  var timeArray = new Array(200, 3000, 2000, 2500, 4000, 3000, 5000, 6000);
  // creates random playback speeds
  audio.playbackRate = Math.floor(Math.random() * (9 + 9)) / 10;
  console.log(timer);
  console.log(audio.playbackRate);
  clearInterval(timer);
  timer = setInterval(toggleSomething, randRange(timeArray));
}

var timer = setInterval(toggleSomething, 35000);
// 40000 = Initial timer when the page is first loaded

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