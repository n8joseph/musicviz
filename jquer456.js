$(document).ready(function() {

  $("#theplaybar").hover(function () {
                    $(this).animate({'opacity':'0.9'}, 100);
              },
              function (){
                    $(this).animate({'opacity':'0.05'}, 100);
             });
  
  });
