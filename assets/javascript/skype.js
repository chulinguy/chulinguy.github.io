setTimeout(()=>{
  $("#SkypeButton_Call_chulinguy_1").find('img').addClass('icon')
  $('.icon').hover( function() {
    $(this).attr('bounce', true);
    bounce($(this));
    }, function() { 
      $(this).attr('bounce', false);
      $(this).stop();
    }
  )
}, 500);