$(document).ready(function() {

  $("#theplaybar").hover(function () {
                    $(this).animate({'opacity':'0.15'}, 100);
              },
              function (){
                    $(this).animate({'opacity':'0.05'}, 100);
             }).css("opacity", 0.07);
  
  });
