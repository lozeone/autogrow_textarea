/**
 * @file
 * Add jQuery NS Autogrow to enabled textareas.
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.jquery_ns_autogrow = {
    attach: function (context, settings) {
      $('textarea.autogrow-textarea', context).once('jquery-ns-autogrow').each(function(){
        var $el = $(this);
        $el.autogrow({
          horizontal: false,
          flickering: false,
        })

        if($el.data('autogrow-max')){
          $el.css('maxHeight', $el.data('autogrow-max'));
        }

        if($el.data('autogrow-min')){
          $el.css('minHeight', $el.data('autogrow-min'));
        }

      });
    }
  };

})(jQuery, Drupal);
