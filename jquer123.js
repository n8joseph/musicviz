$("#arrowRotate").click(function() { 
       var _this = $(this);
       var current = _this.attr("http://cdns2.freepik.com/free-photo/_318-9366.jpg");
       var swap = _this.attr("data-swap");     
     _this.attr('src', swap).attr("data-swap",current);   
});  
