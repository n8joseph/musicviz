function loadSong(url) {



  /* --- set up web audio --- */
  //create the context
  this.context = new AudioContext();
  //...and the source
  this.source = this.context.createBufferSource();
  //connect it to the destination so you can hear it.
  this.source.connect(this.context.destination);

  /* --- load up that buffer ---  */
  //Basic start to ajax! (I say basic, yet i don't know it well.)
  this.request = new XMLHttpRequest();
  //open the request...?
  this.request.open('GET', url, true); 
  //I don't even know.
  this.request.responseType = 'arraybuffer';
  //Once the request has completed... do this
  
}

function playSong(){

request.onload = function() {
    loadSong.context.decodeAudioData(loadSong.request.response, function(response) {
  
      /* --- play the sound AFTER we've gotten the buffer loaded --- */
      //set the buffer to the response we just received.
      loadSong.source.buffer = response;
      //And off we go! .start(0) should play asap.
      loadSong.source.start(0);
    }, function () { console.error('The request failed.'); } );
  }
  loadSong.request.send();
}

window.addEventListener("load", loadSong('citt.mp3'));

