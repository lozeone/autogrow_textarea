/**
 * @file
 * Add jQuery NS Autogrow to every textarea.
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.jquery_ns_autogrow = {
    attach: function (context, settings) {
      $('textarea.autogrow-textarea', context).once('jquery-ns-autogrow').each(function(){
        $(this).autogrow({
          horizontal: false,
          flickering: false
        }).css('maxHeight', $(this).data('autogrow-max'));
      });
    }
  };

})(jQuery, Drupal);
