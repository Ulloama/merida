let linkCraftPack;
let linkCraftPack2;
window.onload = function () {
    linkCraftPack = document.getElementById("craft-pack");
    linkCraftPack.addEventListener("click", function(){
        window.open("craftpack/index-cp.html", linkCraftPack)
    }
    )
    linkCraftPack2 = document.getElementById("craft-pack-2");
    linkCraftPack2.addEventListener("click", function(){
        window.open("craftpack/index-cp.html", linkCraftPack2)
    }
    )
};

$(document).ready(function(){

    smoothScroll.init({
        selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
        selectorHeader: null, // Selector for fixed headers (must be a valid CSS selector) [optional]
        speed: 2000, // Integer. How fast to complete the scroll in milliseconds
        easing: 'easeInOutCubic', // Easing pattern to use
        offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
        callback: function ( anchor, toggle ) {} // Function to run after scrolling
    });

	$('.ir-arriba').click(function(){
        console.log('click');
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});

});

