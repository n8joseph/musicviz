$(document).ready(function() {

  $("#theplaybar").hover(function () {
                    $(this).animate({'opacity':'1'}, 100);
              },
              function (){
                    $(this).animate({'opacity':'0.07'}, 100);
             });
  
  });
