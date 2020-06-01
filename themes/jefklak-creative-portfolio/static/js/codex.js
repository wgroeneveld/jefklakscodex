$(function() {

	var addResponsiveTagToContentImages = function() {
		$("img").addClass("img-responsive");
	};
	var disableResponsiveImagesForInlineLis = function() {
		$('li img.img-responsive').each(function() {
			$(this).removeClass('img-responsive');
			$(this).css('border', 'none');
		});
	};
	addResponsiveTagToContentImages();
	disableResponsiveImagesForInlineLis();

	function lightbox() {
	    $(document).delegate('*[data-toggle="lightbox"]', 'click', function (event) {
	        event.preventDefault();
	        $(this).ekkoLightbox();
	    });
	};
	lightbox();

	function offCanvas() {
        $('[data-toggle="offcanvas"]').click(function () {
            $('.row-offcanvas').toggleClass('active')
        });
	}
	offCanvas();

	function scrollThenFixSidebar() {
		var maxHeight = $('.sidebar-content').height() - $(window).height() + 40;
		$(document).on('scroll', function(e) {
		    var s = document.scrollingElement.scrollTop || $('html').scrollTop() || $('body').scrollTop();
			if(s > maxHeight) {
				$('.sidebar-content').addClass('sidebar-fixed').removeClass('sidebar-scrolling');
			} else {
				$('.sidebar-content').addClass('sidebar-scrolling').removeClass('sidebar-fixed');
			}
		})
	}
	scrollThenFixSidebar();

	var addTargetBlankToExternalLinks = function() {
		var host = (new URL(window.location.href)).hostname;
		$('.content-column-content a').each(function() {
			var me = $(this);
			var url = me.attr('href');
			if(url && url.startsWith('http') && url.indexOf(host) === -1) {
				me.attr('target', '_blank').addClass('external');
			}
		})
	};
	addTargetBlankToExternalLinks();

	var enableLightboxOnClickImgInContent = function() {
		$('.content-column-content img').click(function(e) {
			var me = $(this);
			e.preventDefault();
			me.data('remote', me.attr('src'));
	        me.ekkoLightbox();
		});
	};

	var enableScrollToTopOnInternalLinks = function() {
		$('#totop').click(function() {
		    $("html, body").animate({ scrollTop: 0 }, "slow");
		});

		$('a.internal').click(function() {
			$($(this).data('to')).animate({ scrollTop: 0 }, "slow");
		});
	};

	var addRandomImageToSideBarMenus = function() {
		var rand = Math.floor(Math.random() * 10) + 1;
		$('.sidebar-menu li').mouseenter(function() {
			$(this).css('background', '#f1f4dd url(/img/random/' + rand + '.gif) no-repeat right');
		}).mouseleave(function() {
			$(this).css('background', 'none');
		}).click(function() {
			location.href = $(this).find('a').attr('href');
		});
	};

	var setSideBarPlatformHeight = function() {
		$('.sidebar-game-platform').height($('.sidebar-content .img-inactive').height());
	};

	var animateActiveGameImagesIfFound = function() {
		var animate = function() {
			var active = $(this).find('.img-active');
			if(active.length > 0) {
				active.css('display', 'block');
				$(this).find('.img-inactive').css('display', 'none');
			}
		};

		var inanimate = function() {
			var active = $(this).find('.img-active');
			if(active.length > 0) {
				active.css('display', 'none');
				$(this).find('.img-inactive').css('display', 'block');
			}
		};

		$('.box-masonry').mouseenter(animate).mouseleave(inanimate);
		$('.sidebar').mouseenter(animate).mouseleave(inanimate);
	};

	animateActiveGameImagesIfFound();
	setSideBarPlatformHeight();
	addRandomImageToSideBarMenus();
	enableScrollToTopOnInternalLinks();
	enableLightboxOnClickImgInContent();
});
