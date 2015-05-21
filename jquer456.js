$(document).ready(function() {

  $("#theplaybar").hover(function () {
                    $(this).animate({'opacity':'0.5'}, 100);
              },
              function (){
                    $(this).animate({'opacity':'0.07'}, 100);
             });
  
  });
