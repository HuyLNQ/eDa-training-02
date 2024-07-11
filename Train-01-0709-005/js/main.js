$(document).ready(function () {
    // setting slide
    currentSlide = "001";
    localStorage.setItem('current-slide', currentSlide);
	disableSwipe = false;

    // flow-slide
    var el = document.getElementById('container');
    swipedetect(el, function(swipedir){
        if (swipedir == 'left') {
            window.goToSlide("003");
        }
        if (swipedir == 'right') {
            disableSwipe = true;
        }
    });

    // animation here
    setTimeout(() => { 
        $(".container-chart").addClass('show');
    }, 500);

    let bars = $(".horizontal-bar");
    let delay = 0;

    bars.each(function(index) {
        let bar = $(this);
        let number = $(".number-percent .main-title").eq(index);
        
        setTimeout(function() {
            bar.addClass('show');
            number.addClass('show');
        }, delay);
        delay += 500; 
    });
});
