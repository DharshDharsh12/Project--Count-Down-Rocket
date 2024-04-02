const ROCKET = document.getElementById("countdown");

function stop() {
  let beat = new Audio('rocket.mp3');
  beat.play();
  document.getElementById("rocket").style.transform = "translateY(-100%)";
}

function count() {
  var count = 9;
  var timer = setInterval(function() {
    if (count == 0) {
      clearInterval(timer)
      stop();
    }
    document.getElementById("countdown").textContent = count;
    count--;
  }, 1000);
}
