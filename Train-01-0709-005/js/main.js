$(document).ready(function () {
    // setting slide
    currentSlide = "005";
    localStorage.setItem('current-slide', currentSlide);
    disableSwipe = false;

    // flow-slide
    var el = document.getElementById('container');
    swipedetect(el, function(swipedir){
        if (swipedir == 'left') {
<<<<<<< HEAD
            window.goToSlide("005");
        }
        if (swipedir == 'right') {
            window.goToSlide("006");
            
=======
            window.goToSlide("006");
        }
        if (swipedir == 'right') {
            window.goToSlide("004");
>>>>>>> Huy
        }
    });

    
    var style = document.createElement('style');
    style.type = 'text/css';

    
    var keyframes = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    style.appendChild(document.createTextNode(keyframes));

   
    document.head.appendChild(style);

 
    setTimeout(() => { 
        $(".line").addClass('show');
    }, 500);
});
