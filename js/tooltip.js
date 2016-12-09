$(function tooltip() {
  var showall;
  var $tooltipItem = $('.tooltip-block').find('[tooltip]'); // Elements for which we are making tooltip

  $tooltipItem.on('mouseenter focusin', showTooltip);
  $tooltipItem.on('mouseleave focusout', hideTooltip);
  $('.showall').on('click', showAllTooltip);


  function showTooltip(showall) {
    var $tooltip = $(this).next('.tooltip');


    if ( !$tooltip.length || (!$tooltip.length && showall) ) {
      // If there is no tooltip OR function is called by 'Show All Tooltips' button
     console.log('show');

      var tooltipText = $(this).attr('tooltip');

      $('<span class="tooltip">' + tooltipText + '</span>')
                  .insertAfter($(this))
                  .fadeIn(250);
    }
  }

  function hideTooltip() {
    var $tooltip = $(this).next('.tooltip');
    if ( !( $(this).is(':focus') || $(this).is(':hover') ) ) {
      // Making tooltip NOT to disappear on focused or hovered tooltip'ed item
     console.log('hide');

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