$(document).ready(function () {
    // setting slide
    currentSlide = "006";
    localStorage.setItem('current-slide', currentSlide);
    disableSwipe = false;

    // flow-slide
    var el = document.getElementById('container');
    swipedetect(el, function(swipedir){
        if (swipedir == 'left') {
            disableSwipe = true;
        }
        if (swipedir == 'right') {
            
            window.goToSlide("005");
        }
    });

    // Create a style element and append it to the head
    var style = document.createElement('style');
    style.type = 'text/css';

    // Define the keyframes and append it to the style element
    var keyframes = `
        @keyframes fadeIn {
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

    // Append the style element to the head
    document.head.appendChild(style);

    // Animation for an element with class 'line'
    setTimeout(() => { 
        $(".line").addClass('show');
    }, 500);

    $("#slide1").on("touchend click",function(e) {
       window.goToSlide("001")
    });
    $("#slide2").on("touchend click",function(e) {
        window.goToSlide("002")
     });
     $("#slide3").on("touchend click",function(e) {
        window.goToSlide("003")
     });
     $("#slide4").on("touchend click",function(e) {
        window.goToSlide("004")
     });
     $("#slide5").on("touchend click",function(e) {
        window.goToSlide("005")
     });
});
