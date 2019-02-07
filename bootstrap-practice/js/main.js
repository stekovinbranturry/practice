/*
 * @Author: kzhang
 * @Date:   2018-12-03 15:23:53
 * @Last Modified by:   kzhang
 * @Last Modified time: 2018-12-04 17:07:30
 */

'use strict';

$(function() {
	let screenResize = () => {
		let imgResize = () => {
			const windowWidth = window.innerWidth;
			const isSmallScreen = windowWidth < 768;

			$('#carousel-zk > .carousel-inner > .item').each(function(index) {
				const imgSrc = $(this).data(isSmallScreen ? 'imageXs' : 'imageLg');
				// console.log(imgSrc);
				const bgImg = `url("${imgSrc}")`;
				// console.log(bgImg);
				if (isSmallScreen) {
					$(this).html(`<img src="${imgSrc}" alt="pic" />`);
				} else {
					$(this).css('backgroundImage', bgImg);
					$(this).html('');
				}
			});
		};

		imgResize();

		/*
		 * control products touch scroll ul
		 */
		let ulWidthControl = () => {
			const $navTabs = $('.nav-tabs');
			let tabWidth = 40;
			$('.nav-tabs>li').each(function() {
				tabWidth += $(this).width();
				// console.log(tabWidth);
			});
			// console.log('tabwidth= ' + tabWidth);
			const ulScrollWidth = $('.ul-scroll').width();
			// console.log('ulScrollWidth= ' + ulScrollWidth)
			if (tabWidth > ulScrollWidth) {
				$navTabs.css('width', tabWidth)
					.parent()
					.css('overflow-x', 'scroll');
			} else {
				$navTabs.css('width', 'auto')
					.parent()
					.css('overflow-x', 'hidden');

			}
		};

		ulWidthControl();
	};

	$(window).on('resize', screenResize).trigger('resize');

	/*
	 * change news title
	 */
	let changeNewsTitle = () => {
		$('.nav-stacked').on('click', 'a', function() {
			const $newsTitle = $(this).data('title');
			$('.news-title').html($newsTitle);

		});
	};

	changeNewsTitle();

	/*
	 * touch swipe carousel
	 */

	let carouselSwipe = (start, end, offset) => {
		const isLeft = (start - end - offset) > 0;
		const isRight = (end - start - offset) > 0;
		if (isLeft) {
			$('.carousel').carousel('prev');
		}

		if (isRight) {
			$('.carousel').carousel('next');
		}
	};

	$('.carousel').on('touchstart', function(e) {
		let startX, endX = 0;
		startX = e.touches[0].clientX;
		$(this).on('touchmove', function(e) {
			endX = e.touches[0].clientX;
		}).on('touchend', function(e) {
			$(this).off('touchmove touchend'); // this is very important!!!
			carouselSwipe(startX, endX, 30);
		});
	});

});
