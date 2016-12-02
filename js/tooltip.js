$(function tooltip() {
  var $tooltipItem = $('.tooltip-block').find('[tooltip]'); // Elements for which we are making tooltip

  $tooltipItem.on('mouseenter focusin mouseleave focusout', showHideTooltip);
  $('.click').on('click', setFocus);


  function showHideTooltip() {
    var $tooltip = $(this).next('.tooltip');

    if ( !$tooltip.length) { // If there is no tooltip
      var tooltipText = $(this).attr('tooltip');

      $('<span class="tooltip">' + tooltipText + '</span>')
                  .insertAfter($(this))
                  .fadeIn(250);

    } else if ( !( $(this).is(':focus') || $(this).is(':hover') ) ) { // Excluding from condition focus and hover states of tooltip'ed item 

      $tooltip
        .stop(true)
        .fadeOut(150, function() {
          $(this).remove();
        });

    } else if ($(this).is(':hover')) {
      console.log('succ')
    }
  }


  function setFocus() {
    $tooltipItem.each(function() {
           
      $(this).trigger('mouseenter');      

    })
  }

});