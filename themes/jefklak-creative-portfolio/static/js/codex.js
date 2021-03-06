$(function() {

	var disableResponsiveImagesForInlineLis = function() {
		$('li img.img-responsive').each(function() {
			$(this).removeClass('img-responsive');
			$(this).css('border', 'none');
		});
	};
	disableResponsiveImagesForInlineLis();

	const box = new SimpleLightbox('.lbox', { /* options */ });

	function offCanvas() {
        $('[data-toggle="offcanvas"]').click(function () {
            $('.row-offcanvas').toggleClass('active')
        });
	}
	offCanvas();

	function scrollThenFixSidebar() {
		var maxHeight = $('.sidebar-content').height() - $(window).height();
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
		$('article a').each(function() {
			var me = $(this);
			var url = me.attr('href');
			if(url && url.startsWith('http') && url.indexOf(host) === -1) {
				me.attr('target', '_blank').addClass('external');
				me.attr('rel', 'noopener');
			}
		})
	};
	addTargetBlankToExternalLinks();

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

	var obfuscateMail = function() {
		var meel = document.querySelector('.meel');
		var enc = "<o ofwo-zopsz='aowz orrfsgg' vfst='aowzhc:kcihsf@pfowbpoywbu.qca'>kcihsf@pfowbpoywbu.qca</o>  <o ofwo-zopsz='sbqfmdhwcb DUD ysm' vfst='vhhdg://ysmg.cdsbdud.cfu/jyg/j1/pm-twbusfdfwbh/24O319TO8708OP6961997205S66Q99941091O46R' hwhzs='Sbqfmdh aowzg kwhv am UDU ysm'><w qzogg='to to-zcqy' ofwo-vwrrsb='hfis'></w></o>"

		if(meel) {
			meel.addEventListener('click', function() {
				meel.innerHTML = enc.replace(/[a-zA-Z]/g,function(c){return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+12)?c:c-26);});
			})
		}		
	}

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
	obfuscateMail();
});
