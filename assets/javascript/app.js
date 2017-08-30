$('.dropdown').on('show.bs.dropdown', function (e) {
  $(this).find('.dropdown-menu').first().stop(true, true).slideDown(400);
});

$('.dropdown').on('hide.bs.dropdown', function(e){
    e.preventDefault();
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp(400, function(){
    	$('.dropdown').removeClass('open');
      	$('.dropdown').find('.dropdown-toggle').attr('aria-expanded','false');
    });
    
  });

$('[data-toggle="tooltip"]').tooltip(); 

function bounce($elem) {
    $elem.effect('bounce', { times: 1, distance: 10 }, 1200, ()=>{
      if ($elem.attr('bounce') =='true') bounce($elem);
      else {
        $elem.stop()
      }
    });
}