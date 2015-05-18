
  /* --- set up web audio --- */
  //create the context
  var context = new AudioContext();
  //...and the source
  var source = context.createBufferSource();
  //connect it to the destination so you can hear it.
  source.connect(context.destination);

  /* --- load up that buffer ---  */
  //Basic start to ajax! (I say basic, yet i don't know it well.)
  var request = new XMLHttpRequest();
  //open the request...?
  request.open('GET', 'citt.mp3', true); 
  //I don't even know.
  request.responseType = 'arraybuffer';
  //Once the request has completed... do this

function playSong(){

request.onload = function() {
    context.decodeAudioData(request.response, function(response) {
  
      /* --- play the sound AFTER we've gotten the buffer loaded --- */
      //set the buffer to the response we just received.
      source.buffer = response;
      //And off we go! .start(0) should play asap.
      source.start(0);
    }, function () { console.error('The request failed.'); } );
  }
  request.send();
};

// Assume context is a web audio context, buffer is a pre-loaded audio buffer.
var startOffset = 0;
var startTime = 0;

function pause() {
  source.stop();
  // Measure how much time passed since the last pause.
  startOffset += context.currentTime - startTime;
};

function play() {
  startTime = context.currentTime;
  var source = context.createBufferSource();
  // Connect graph
  source.buffer = this.buffer;
  source.loop = true;
  source.connect(context.destination);
  // Start playback, but make sure we stay in bound of the buffer.
  source.start(0, startOffset % buffer.duration);
}
