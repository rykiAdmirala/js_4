$(function tooltip() {
  var showall;
  var $tooltipItem = $('.has-tooltip'); // Elements for which we are making tooltip

  $tooltipItem.on('mouseenter focusin', showTooltip);
  $tooltipItem.on('mouseleave focusout', hideTooltip);
  $('.showall').on('click', showAllTooltip);


  function showTooltip(showall) {
    var $tooltip = $(this).next('.tooltip');

    if ( !$tooltip.length || (!$tooltip.length && showall) ) {
      // If there is no tooltip OR function is called by 'Show All Tooltips' button
      var ttOffset = $(this).offset();
      var ttHeight = $(this).height();
      var ttWidth = $(this).width();
      var ttText = $(this).attr('title');
      
      $(this).attr('title', '');

      $('<span class="tooltip">' + ttText + '</span>')
                  .insertAfter($(this))
                  .css({
                    'top' : ttOffset.top - ttHeight/2,
                    'left' : ttOffset.left + ttWidth + 20
                  })
                  .fadeIn(250);
    }
  }

  function hideTooltip() {
    var $tooltip = $(this).next('.tooltip');
    if ( !( $(this).is(':focus') || $(this).is(':hover') ) ) {
      // Making tooltip NOT to disappear on focused or hovered tooltip'ed item
      $(this).attr('title', $tooltip.text());

      $tooltip
        .stop(true)
        .fadeOut(150, function() {
          $(this).remove();
        });
        

    }
  }

  function showAllTooltip() {
    $tooltipItem.each(function() {
      showTooltip.call($(this), 'showall');
    });
  }
  
});