// Create an <audio> element dynamically.
var audio = new Audio();
audio.src = 'citt.mp3';
audio.controls = true;
audio.autoplay = false;
audio.id = 'myaudioid';
document.body.appendChild(audio);

var context = new webkitAudioContext();
var analyser = context.createAnalyser();
analyser.smoothingTimeConstant = 0.3;
analyser.fftSize = 1024;
var bufferLength = analyser.fftSize;
var dataArray = new Uint8Array( bufferLength );

// Wait for window.onload to fire. See crbug.com/112368
window.addEventListener('load', function(e) {
  // Our <audio> element will be the audio source.
  var source = context.createMediaElementSource(audio);
  source.connect(analyser);
  analyser.connect(context.destination);

  // ...call requestAnimationFrame() and render the analyser's output to canvas.
}, false);

// This will periodically compute average volume and log it out
setInterval( function() {
    analyser.getByteFrequencyData( dataArray );

    // Sum frequency amplitudes
    var values = 0;
    for ( var i = 0; i < bufferLength; i++ ) {
         values += dataArray[ i ];
    }

    // Log average volume
    console.log( values / bufferLength );
}, 100 );


var canvas = document.getElementById( 'canvas' );
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var rectWidth = 20;
var ctx = canvas.getContext( '2d' );

var draw = function() {
    analyser.getByteFrequencyData( dataArray );

    // Sum frequency amplitudes
    var values = 0;
    for ( var i = 0; i < bufferLength; i++ ) {
         values += dataArray[ i ];
    }

    var volume = values / bufferLength;

    ctx.clearRect( 0, 0, canvasWidth, canvasHeight );
    ctx.fillStyle = 'black';
    ctx.fillRect(
        canvasWidth / 2 - rectWidth / 2,
        canvasHeight / 2 - volume / 2,
        rectWidth,
        volume
    );
    requestAnimationFrame( draw );
};


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
 
 
