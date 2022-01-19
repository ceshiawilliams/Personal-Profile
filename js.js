$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function(){
        $('#menu').toggleClass('fa-times');
        // $('header').toggleClass('toggle');
    });

    // window.addEventListener('load', () => {
    //     let progressBars = document.querySelectorAll('.progress-bar');
    //     let values = [
    //         '80%',
    //         '70%',
    //         '60%',
    //         '65%',
    //         '25%',
    //         '35%'
            
            
    //     ];
    
    //     progressBars.forEach((box, index) => {
    //         box.style.width = values[index];
    //     });
    // });

});

