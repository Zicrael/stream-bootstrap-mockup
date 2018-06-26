$('#parter-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    nextArrow: $('.slick-prev'),
    prevArrow: $('.slick-next'),
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
    ]
    });

$('input').focus(function(){
    $(this).parents('.form-group').addClass('focused');
    });

    $('input').blur(function(){
    var inputValue = $(this).val();
    if ( inputValue == "" ) {
        $(this).removeClass('filled');
        $(this).parents('.form-group').removeClass('focused');  
    } else {
        $(this).addClass('filled');
    }
})  

$(window).on('scroll', () => {
    if($(window).scrollTop() > 100) {
        $('#scrollToTop').fadeIn('slow');
    } else {
        $('#scrollToTop').fadeOut('slow');
    }
})
$('#scrollToTop').on('click', ()=> {
    $(window).scrollTop(0);
});


