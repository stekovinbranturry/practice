/*
 * @Author: kzhang
 * @Date:   2018-12-03 15:23:53
 * @Last Modified by:   kzhang
 * @Last Modified time: 2018-12-04 17:07:30
 */

'use strict';

$(function() {
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
	$(window).on('resize', imgResize).trigger('resize');
});
