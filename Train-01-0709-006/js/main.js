$(document).ready(function () {
    // setting slide
<<<<<<< HEAD
    currentSlide = "001";
=======
    currentSlide = "006";
>>>>>>> Huy
    localStorage.setItem('current-slide', currentSlide);
    disableSwipe = false;

    // flow-slide
    var el = document.getElementById('container');
    swipedetect(el, function(swipedir){
        if (swipedir == 'left') {
<<<<<<< HEAD
            window.goToSlide("003");
        }
        if (swipedir == 'right') {
            disableSwipe = true;
        }
    });

    
    var style = document.createElement('style');
    style.type = 'text/css';

    
    var keyframes = `
        @keyframes fadeInUp {
=======
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
>>>>>>> Huy
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

<<<<<<< HEAD
   
    document.head.appendChild(style);

 
    setTimeout(() => { 
        $(".line").addClass('show');
    }, 500);
=======
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
>>>>>>> Huy
});
