$(document).ready(function() {

  $("#theplaybar").hover(function () {
                    $(this).animate({'opacity':'0.7'}, 100);
              },
              function (){
                    $(this).animate({'opacity':'0'}, 100);
             });
  
  });
