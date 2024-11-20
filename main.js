$(document).ready(function() {
    $(window).on("scroll", function() {
        var scrollTop = $(this).scrollTop();  // Get the current scroll position
        var windowHeight = $(window).height(); // Get the height of the window
        var halfWindowHeight = windowHeight / 4; // Half of the window height

        // Trigger the animation when scroll reaches the half of the screen
        if (scrollTop > halfWindowHeight) {
            // Trigger the shape animations with scale
            $('.circle').css('transform', 'translate(-50%, -50%) scale(8)');
            $('.circle1').css('transform', 'translate(-50%, -50%) scale(8)');
            $('.circle2').css('transform', 'translate(-50%, -50%) scale(8)');
            $('.circle3').css('transform', 'translate(-50%, -50%) scale(8)');
          
            // Wait for the animation to complete (1 second), then show the "Hello World" text
            setTimeout(function() {
                $('#message').fadeIn(); // Show the message after animation completes
            }, 1000);  // Delay matches the animation duration (1 second)
        } else {
            // Reset the animations and hide the text when scrolling back
            $('.circle').css('transform', 'translate(-50%, -50%) scale(1)');
            $('.circle1').css('transform', 'translate(-50%, -50%) scale(1)');
            $('.circle2').css('transform', 'translate(-50%, -50%) scale(1)');
            $('.circle3').css('transform', 'translate(-50%, -50%) scale(1)');
        
            $('#message').fadeOut(); // Hide the message when scroll is less than half of window height
        }
    });
});


//  scroll trigger

