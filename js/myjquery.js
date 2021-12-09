$(document).ready(function () {
    studentAppear();
    page1=true;
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