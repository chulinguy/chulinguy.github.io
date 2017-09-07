
const descObj = {};
descObj.projJM  = ['coming soon ...'];
descObj.projMotivate = ['This MERN app keeps track of your one goal (with calendar reminders) and rewards you for task completion with RPS elements.', 'Technologies leveraged: MongoDB, Express.js, React, React-router, Google Calendar API'];
descObj.projRPS = ['This multi-language, two-player Rock-Paper-Scissor web game utilizes Firebase to store user\'s game choices/wins/losses, with a functional chat window', 'Technologies leveraged: JQuery, Firebase, underscore.js']
descObj.projRM  = ['This web app creates a clear cost and time comparison between driving and taking public transport for a given trip.', 'Technologies leveraged: Google Maps API (directions/geocoding/public transit data), myGasFeed API & fueleconomy.gov API, jQuery']


roleObj = {};
roleObj.projJM  = 'Sole developer';
roleObj.projRPS = 'Sole developer';
roleObj.projRM  = 'Lead developer in a team of four';
roleObj.projMotivate  = 'Routing/React/passport.js specialist';

$('.portfolio-container').each(function(){
  var title = $(this).find('.portfolio-h3').attr('id');
  // console.log(title)
  var $panelDiv = $('<div>').addClass('panel panel-default hidden');
  var $panelHeadDiv = $('<div>').addClass('panel-heading text-center').text(roleObj[title]);
  var $panelBodyDiv = $('<div>').addClass('panel-body');
  descObj[title].forEach((v)=>{
    var $pTag = $('<p>').text(v);
    $panelBodyDiv.append($pTag);
  });
  $panelDiv.append($panelHeadDiv, $panelBodyDiv);
  $(this).append($panelDiv)
})

$('.portfolio-container').hover(function(){
  $(this).find('.panel').removeClass('hidden');
  $(this).children('.btn-div').addClass('btn btn-success center-block');

}, function(){
  $(this).find('.panel').addClass('hidden');
  $(this).children('.btn-div').removeClass('btn btn-success center-block');
})

