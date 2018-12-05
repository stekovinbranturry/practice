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
		}

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
					.css('overflow-x', 'scroll');;
			} else {
				$navTabs.css('width', 'auto')
					.parent()
					.css('overflow-x', 'hidden');;

			}
		}

		ulWidthControl();
	}

	$(window).on('resize', screenResize).trigger('resize');




});
