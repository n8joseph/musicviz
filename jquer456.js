$(document).ready(function() {

  $("#theplaybar").hover(function () {
                    $(this).animate({'opacity':'0.18'}, 100);
              },
              function (){
                    $(this).animate({'opacity':'0.07'}, 100);
             }).css("opacity", 0.07);
  
  });
