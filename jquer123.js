$(document).ready(function() {
       $('$slick-toggle').click(function() {
              $('img', this).attr('src', function(i, oldSrc) {
                            return oldSrc == 'http://cdn.flaticon.com/png/256/58315.png' ? 'http://cdn.flaticon.com/png/256/54505.png' : 'http://cdn.flaticon.com/png/256/58315.png';
              });
              $('#slickbox').toggle(400);
              return false;
       });
});
