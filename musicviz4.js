// Create an <audio> element dynamically.
var audio = new Audio();
audio.src = 'citt.mp3';
audio.controls = true;
audio.autoplay = false;
audio.id = 'myaudioid';
document.body.appendChild(audio);

var context = new webkitAudioContext();
var analyser = context.createAnalyser();

// Wait for window.onload to fire. See crbug.com/112368
window.addEventListener('load', function(e) {
  // Our <audio> element will be the audio source.
  var source = context.createMediaElementSource(audio);
  source.connect(analyser);
  analyser.connect(context.destination);

  // ...call requestAnimationFrame() and render the analyser's output to canvas.
}, false);

function aud_play_pause() {
    if (audio.paused) {
      //  $('#stateicon').removeClass('fa fa-play');
      //  $('#stateicon').addClass('fa fa-pause');
      audio.play();
    } else {
     //   $('#stateicon').removeClass('fa fa-pause');
     //   $('#stateicon').addClass('fa fa-play');
      audio.pause();
   }
 }
