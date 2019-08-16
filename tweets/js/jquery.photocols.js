/*!
 * Photocols v1.0.1
 * Photo navigation moving cols
 * http://2coders.com
 * MIT License
 * by 2Coders Studio
 */

(function( $ ){
	$.fn.photocols = function(options) {

    element = this;

		// set default values
		options	= $.extend( {}, {
      bgcolor       : '#000',
      width		     : 'auto',
			colswidth     : 200,
			itemheight    : 300,
			height		    : 600,
      gap           : 5,
			titleSize     : 16,
			subtitleSize  : 14,
			opacity       : 0.3,
			overlayColor  : '#000',
			stopOnHover   : true,
      data          : {}
		}, options);

		var rows;
		var refreshInterval;

    var animate = function (  ) {

			$('#pc-all').css('top', $('#pc-all').position().top + 1);

			if ( options.stopOnHover ) {
				$('.pc-col-active .pc-item').each( function (index) {
							$(this).css('top',  $(this).position().top - 1) ;
				});
			}

			$('.pc-item').each( function (index) {
				if ( $('#pc-all').position().top + $(this).position().top  > options.height ) {
						$(this).css('top',  $(this).position().top - (options.itemheight+options.gap)*rows) ;

				}
			});

			refreshInterval = setTimeout(function() {
				clearInterval(refreshInterval);
    			animate();
			},50);

    };

    var resize = function () {

			clearInterval(refreshInterval);
      element.children().remove();

      var cols = Math.floor( element.width() / ( options.colswidth ) );
      var width = Math.floor(element.width() / cols) - options.gap ;

			rows = Math.ceil(options.height/options.itemheight)+1;

      var count = 0;

			var all = $('<div id="pc-all" class="pc-all" style="position:absolute"  />');
			element.append(all);

      for ( var i= 0 ; i < cols ; i++) {

        var leftposition = Math.round(element.width() / cols) ;
        var topposition = Math.floor(Math.random() * options.itemheight);

        var col = $('<div id="pc-col'+i+'" class="pc-col" style="position:absolute"  />');

        all.append(col);

        for ( var j= 0 ; j < rows ; j++) {

          var item = options.data[count++ % options.data.length];

					var itemElement = $('<a class="pc-item"><div class="pc-item-overlay"></div><div class="pc-item-mask"><span class="pc-item-title" >'+item.title+'</span><span class="pc-item-subtitle">'+item.subtitle+'</span></div></a>');

					itemElement.attr('href', item.url );

					itemElement.css('background-image', 'url(' + item.img + ')' );
					itemElement.css('width', width );
					itemElement.css('left', leftposition*i + options.gap/2 );
					itemElement.css('top', topposition + (options.itemheight +options.gap )*j );


          col.append(itemElement);

        };

      };

      init();

    };

    var init = function () {

      element.css('width', options.width == 'auto' ? '100%' : options.width );
      element.css('height', options.height );
      element.css('background-color', options.bgcolor);
      element.css('overflow', 'hidden');
      element.css('position', 'relative');

			var insetShadow = $('<div id="pc-inset-shadow" />');

			insetShadow.css('position', 'absolute');
			insetShadow.css('z-index', '100');
			insetShadow.css('width', '120%');
			insetShadow.css('left', '-10%');
			insetShadow.css('height', options.height );
			insetShadow.css('box-shadow', 'inset 0 0 10px #000' );
			insetShadow.css('pointer-events', 'none');

			element.append(insetShadow);

      style();

      $('.pc-item').hover(function( e ){

        if ( e.type === "mouseenter" ) {
          $(this).find('.pc-item-overlay').css( {
            'opacity'         : 0
          });
          $(this).find('.pc-item-mask').css({
						'opacity'         : 1,
						'transition'      : 'opacity 0.2s 0.2s linear',
					});

					$(this).parent('.pc-col').addClass('pc-col-active');


        } else {
          $(this).find('.pc-item-overlay').css( {
            'opacity'         : options.opacity
          });
          $(this).find('.pc-item-mask').css({
						'opacity'         : 0,
						'transition'      : 'opacity 0.2s linear',
					});

					$(this).parent('.pc-col').removeClass('pc-col-active');

        }

      });

      animate();

    };

    var style = function () {
      $('.pc-item').css({
        'overflow'              : 'hidden',
        'position'              : 'absolute',
				'background-position'   : '50% 50%',
        'background-size'       : 'cover',
        'height'                : options.itemheight,
      });

      $('.pc-item-title').css({
        'text-transformation' : 'none',
				'font-size'           : options.titleSize,
        'font-weight'         : 'bold',
        'transition'          : 'bottom 0.3s ease-in-out',
        'position'            : 'absolute',
        'top'              	 : 56,
        'left'                : 15,
        'color'               : '#fff'
      });

      $('.pc-item-subtitle').css({
        'text-transformation' : 'none',
				'font-size'           : options.subtitleSize,
        'font-weight'         : 'normal',
        'transition'          : 'bottom 0.3s ease-in-out',
        'position'            : 'absolute',
        'top'                 : 80,
        'left'                : 15,
        'color'               : '#fff'
      });



			$('.pc-item-overlay').css({
				'transition'          : 'opacity 0.3s ease-in-out',
				'position'            : 'absolute',
				'opacity'             : options.opacity,
				'top'                 : 0,
				'bottom'              : 0,
				'left'                : 0,
				'right'               : 0,
				'background-color'    : options.overlayColor
			});

			$('.pc-item-mask').css({
				'transition'          : 'opacity 0.2s 0.2s linear',
				'position'            : 'absolute',
				'opacity'             : 0,
				'bottom'              : 0,
				'left'                : 0,
				'right'               : 0,
				'height'              : 120,
				'width'               : '100%',
				'background-color'    : 'rgba(0,0,0,0.6)',
				'background'          : '-webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(0,0,0,0)), color-stop(50%,rgba(0,0,0,0.61)), color-stop(100%,rgba(0,0,0,0.61)))',
				'background'          : '-webkit-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.61) 50%,rgba(0,0,0,0.61) 100%)',
				'background'          : 'linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.61) 50%,rgba(0,0,0,0.61) 100%)'
			});


    };

    $( window ).resize (resize);

    resize();

    return element;

	};
})( jQuery );
