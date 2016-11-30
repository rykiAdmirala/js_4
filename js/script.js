$(function tabs() {
  var $tabLinks = $('.tabs-block').find('.tabs-head a');
  var $tabBlocks = $('.tabs-block').find('.tabs-item');


  $tabLinks.each(function(i) {
    $(this).attr('tab-id', i);
  });
  $tabBlocks.each(function(i) {
    $(this).attr('tab-id', i);
  });

  
  $tabLinks.on('click', function(e) {
    e.preventDefault();
    var index = $(this).attr('tab-id');
      
    $tabLinks.removeClass('active-link');
    $(this).addClass('active-link');
    
    $tabBlocks.each(function() {
      if ($(this).attr('tab-id') == index) {
        $(this).addClass('active').siblings('.tabs-item').removeClass('active');
      }
    });
  });
    
    
});

$(function toolTip() {
  
});