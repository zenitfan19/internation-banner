$(document).ready(function () {      
  $(window).on('mousemove', function(e){
    var w = $(window).width();
    var h = $(window).height();
    
    var offsetX = 0.5 - e.pageX / w;
    var offsetY = 0.5 - e.pageY / h;
    
    console.log('mousemove');
    
    $('.parallax').each(function(i, el){
      var offset = parseInt($(el).data('offset'));
      
      var translate = "translate3d("+ Math.round(offsetX * offset) + "px," + Math.round(offsetY * offset) + "px, 0px";
      
      console.log('each');
      
      $(el).css({
        'transform':translate
      });
    });
  });
});