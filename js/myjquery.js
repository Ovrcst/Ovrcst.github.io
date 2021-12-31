$(window).on('load',()=>{
    $('.loading-page').fadeOut(1000);
    $('.all-content').fadeOut(0);
    $('.all-content').fadeIn(2000);
});

$(document).ready(function () {
    studentAppear();
    page1=true;
    $('footer').hide();
    /*$('footer').css({'transform':'translateX(0)','opacity':'1'});*/
});
let pos = 0;
$('.arrow-up').on('click', function() {
    if(pos==0){
        $('.wrap').css('transform', 'translateY(-5vh) rotate(180deg)');
        pos = -5;
    }else{
        $('.wrap').css('transform', 'translateY(0) rotate(180deg)');
        pos = 0;
    }
    $(this).toggleClass('active');
    $("footer").toggle(500);
});

function studentAppear(){
    $('.student').stop().delay(500).queue(function (next){
        $('.student').addClass('transition-one');
        $('.student').css({
            'opacity':'1',
            'transform':'translateX(0)'
        });
    });
    $('.student').on('transitionend', function () {
        $('.student').removeClass('transition-one');
    });
    console.log("Hello");
}

function animateAgain(){
    $('.student').addClass('transition-one');
    if(window.matchMedia('(max-width:768px)').matches){
        $('.student').css({
            opacity: '0',
            transform: 'translateY(-100%)'
        })
    }else{
        $('.student').css({
            opacity: '0',
            transform: 'translateX(-100%)'
        })
    }
    
    
    /*.stop().delay(500).queue(function (next){
        $('.student').addClass('transition-one');
        $('.student').css({
            'opacity':'1',
            'transform':'translateX(0)'
        });
        $('.student').on('transitionend', function () {
            $('.student').removeClass('transition-one');
        });
    })*/
    console.log("haaaello");
}

