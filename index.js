$(document).ready(function() {
  console.log('hello world');

 //MAP
  $('#map').usmap({
    // The click action
    click: function(event, data) {
      $('#clicked-state')
        .text('You clicked: '+data.name)
        .parent().effect('highlight', {color: '#E8E5E5'}, 2000);
      stateStyles: {fill:'blue'};
      stateHoverStyles: {fill: 'red'};


    }
  });
});
