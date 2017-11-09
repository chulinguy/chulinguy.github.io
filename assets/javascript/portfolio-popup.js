
const descObj = {};
descObj.projJM  = ['This web quiz game not only tests your knowledge in Javascript and computer sciences but also contains tons of funny jokes.', 'Technologies leveraged: Chance.js, Chart.js, ResponsiveVoice.js, Firebase, jQuery'];
descObj.projMotivate = ['This MERN app keeps track of your one goal (with calendar reminders) and rewards you for task completion with RPS elements.', 'Technologies leveraged: MongoDB, Express.js, React, React-router, Google Calendar API'];
descObj.projRPS = ['This multi-language, two-player Rock-Paper-Scissor web game utilizes Firebase to store user\'s game choices/wins/losses, with a functional chat window', 'Technologies leveraged: JQuery, Firebase, underscore.js']
descObj.projRM  = ['This web app creates a clear cost and time comparison between driving and public transit for a given trip.', 'Technologies leveraged: Google Maps API (directions/geocoding/public transit data), myGasFeed API & fueleconomy.gov API, jQuery']
descObj.projTFD = ['This website shares valuable tips to beginner tango dancers', 'Technologies leveraged: React.js, image map']

roleObj = {};
roleObj.projTFD  = 'Sole developer';
roleObj.projJM  = 'Sole developer';
roleObj.projRPS = 'Sole developer';
roleObj.projRM  = 'Lead developer in a team of four';
roleObj.projMotivate  = 'Routing/React/login specialist in a team of five';

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

