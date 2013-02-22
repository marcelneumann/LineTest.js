/* LineTest.js 1.0
 * 
 * Copyright 2013 Marcel Neumann
 * http://www.marcelneumann.com
 * 
 * Adds asterisks as guides to fine tune the perfect length of your paragraph's lines
 * by defining an ideal min and max character length.
 *
 * Inspired by Trent Walton's post about fluid type:
 * http://trentwalton.com/2012/06/19/fluid-type/
 * 
 * WTFPL license ( http://sam.zoy.org/wtfpl/ )
 */

(function( $ ) {
  $.fn.lineTest = function( options ) {

    var settings = $.extend({
      min       : 45,
      max       : 75,
      character : '*',
      color     : '#f00'
    }, options);

    return this.each(function() {

      if ( settings.min > settings.max ) {
        return;
      }

      var regex = new RegExp("(.{" + settings.min + "})(.{" + (settings.max - settings.min ) + "})");
      var marker = '<span style="color:' + settings.color + ';">' + settings.character + '</span>';

      $(this).html(
        $(this).text()
          .replace(/[\s\n\r]+/g, ' ')
          .replace(regex,"\$1" + marker + "\$2" + marker)
      );
      
    });

  };
})( jQuery );