$(document).ready(function () {
    // setting slide
    currentSlide = "001";
    localStorage.setItem('current-slide', currentSlide);
	disableSwipe = false;

    // flow-slide
    var el = document.getElementById('container');
    swipedetect(el, function(swipedir){
        if (swipedir == 'left') {
<<<<<<< HEAD
            window.goToSlide("003");
=======
            window.goToSlide("002");
>>>>>>> Huy
        }
        if (swipedir == 'right') {
            disableSwipe = true;
        }
    });

    // animation here
    setTimeout(() => { 
        $(".line").addClass('show');
    },500);
});
