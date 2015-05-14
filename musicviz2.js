function loadSong(url) {



  /* --- set up web audio --- */
  //create the context
  var context = new webkitAudioContext();
  //...and the source
  var source = context.createBufferSource();
  //connect it to the destination so you can hear it.
  source.connect(context.destination);

  /* --- load up that buffer ---  */
  //Basic start to ajax! (I say basic, yet i don't know it well.)
  var request = new XMLHttpRequest();
  //open the request...?
  request.open('GET', url, true); 
  //I don't even know.
  request.responseType = 'arraybuffer';
  //Once the request has completed... do this
  request.onload = function() {
    context.decodeAudioData(request.response, function(response) {
  
      /* --- play the sound AFTER we've gotten the buffer loaded --- */
      //set the buffer to the response we just received.
      source.buffer = response;
      //And off we go! .start(0) should play asap.
      source.start(0);
    }, function () { console.error('The request failed.'); } );
  }
};

function playSong(){
  //Now that the request has been defined, actually make the request. (send it)
  request.send();
};
