$(function tooltip() {
  var showall;
  var $tooltipItem = $('.tooltip-block').find('[tooltip]'); // Elements for which we are making tooltip

  $tooltipItem.on('mouseenter focusin', showTooltip);
  $tooltipItem.on('mouseleave focusout', hideTooltip);
  $('.showall').on('click', showAllTooltip);


  function showTooltip() {
    var $tooltip = $(this).next('.tooltip');
    var arg = arguments[0];

    if ( !$tooltip.length || arg == showall) {
      // If there is no tooltip OR no tooltip AN

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

      $tooltip
        .stop(true)
        .fadeOut(150, function() {
          $(this).remove();
        });

    }

  }

  function showAllTooltip() {
    $tooltipItem.each(function() {
      showTooltip.call($(this), showall);
    });
  }
  
});