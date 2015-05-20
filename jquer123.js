$(document).ready(function() {
       $('$slick-toggle').click(function() {
              $('img', this).attr('src', function(i, oldSrc) {
                            return oldSrc == 'img1.jpg' ? 'img2.jpg' : 'img1.jpg';
              });
              $('#slickbox').toggle(400);
              return false;
       });
});
