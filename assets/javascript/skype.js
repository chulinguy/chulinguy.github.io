  var counter = 0;  
  var skype_bounce = setInterval(function(){
    $("#SkypeButton_Call_chulinguy_1").find('img').addClass('skype-icon');
    counter = $('.skype-icon').length;
    $('.skype-icon').hover( function() {
      $(this).attr('bounce', true);
      bounce($(this));
      }, function() { 
        $(this).attr('bounce', false);
        $(this).stop();
      }
    )
    if (counter) clearInterval(skype_bounce);
  }, 500);

  function bounce($elem) {
    $elem.effect('bounce', { times: 1, distance: 10 }, 1200, ()=>{
      if ($elem.attr('bounce') =='true') bounce($elem);
      else {
        $elem.stop()
      }
    });
}