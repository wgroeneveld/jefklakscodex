$(function() {

	var disableResponsiveImagesForInlineLis = function() {
		$('li img.img-responsive').each(function() {
			$(this).removeClass('img-responsive');
			$(this).css('border', 'none');
		});
	};

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
			$.scrollTo($('#top'), 1000);
		});

		$('a.internal').click(function() {
			$.scrollTo($($(this).data('to')), 1000);
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
		$('.sidebar-game-info').mouseenter(animate).mouseleave(inanimate);
	};

	animateActiveGameImagesIfFound();
	setSideBarPlatformHeight();
	addRandomImageToSideBarMenus();
	enableScrollToTopOnInternalLinks();
	enableLightboxOnClickImgInContent();
	disableResponsiveImagesForInlineLis();

});
