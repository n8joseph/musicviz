$(document).ready(function() {
      
       $('#slick-toggle').click(function() {
              $('img', this).attr('src', function(i, oldSrc) {
                            return oldSrc == 'http://oi57.tinypic.com/i4lfzc.jpg' ? 'http://oi59.tinypic.com/11qh1kg.jpg' : 'http://oi57.tinypic.com/i4lfzc.jpg';
              });
              $('#slickbox').toggle(400);
              return false;
       });
});

$(document).ready(function() {
      $('#playbar').mouseover(function() {
             $('#playbar').hover(function() {
                     $('#PlayBar').fadeTo(0, 0.2, function() {} )
             },      
             function() {
                    $('#PlayBar').fadeTo(0, 0.02, function() {} )
             }
              });
       });
});
