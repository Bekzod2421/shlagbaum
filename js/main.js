$(document).ready(function(){
	$('.accordion-it .accordion').on('click', function(){
		$(this).parent().find('.panel').stop().slideToggle(400);
		$(this).parent().siblings().find('.panel').slideUp(400);
		$(this).toggleClass('active');
	});

	$('.panel__btn .close').on('click', function(){
		$('.panel').slideUp(400);
		$('.accordion').removeClass('active');
		return false;
	});

	$('.recall').on('click', function(){
		$('.call-booking').toggleClass('show');
		$('.sms-booking').removeClass('show');
	});

	$('.resms').on('click', function(){
		$('.sms-booking').toggleClass('show');
		$('.call-booking').removeClass('show');
	});

	$('.burger').on('click', function(){
		$('.mmenu').addClass('open');
		$('.bg').fadeIn();
		$('.mclose').addClass('show');
	});

	$('.bg').on('click', function(){
		$(this).fadeOut();
		$('.mclose').removeClass('show');
		$('.mmenu').removeClass('open');
	});

	$('.mclose').on('click',function(){
		$(this).removeClass('show');
		$('.bg').fadeOut();
		$('.mmenu').removeClass('open');
	});

	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".fixed"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			// div.removeClass('opened'); // скрываем его
		$('.call-booking').removeClass('show');
		$('.sms-booking').removeClass('show');
		}
	});

	/*$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".site-header__bottom .header-bottom-inner__search form input.show, .site-header__bottom .header-bottom-inner__search form button"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			// div.removeClass('opened'); // скрываем его
        if ($('.site-header__bottom .header-bottom-inner__search form input').hasClass('show')) {
            $('.site-header__bottom .header-bottom-inner__search form input').removeClass('show');
            $('.site-header__bottom .header-bottom-inner__search form span.srs').removeClass('hide');
        }
		
		}
	});*/

	$('.ins').on('click',function(){
		$(this).parents().parents('.get-item').siblings().find('ins').removeClass('active');
		$(this).toggleClass('active');
		$(this).parents().parents('.get-item').toggleClass('active');
		$(this).parents().parents('.get-inner').find('.get-desc').slideToggle(400);
		$(this).parents().parents('.owl-item').siblings().find('.get-item').removeClass('active');
	});


	$('.header-bottom-inner__search form span.srs').on('click', function(){
        $('.header-bottom-inner__search form input.sr').toggleClass('show');
        var a=$('.header-bottom-inner__search form input.sr').focus();
        $('.header-bottom-inner__search form input.sr').val("");
	});

    $('.header-bottom-inner__search form span.srs').on('mouseover', function(){
        var a=$('.header-bottom-inner__search form input.sr');
        if(a.val()==""){
        }
        else {
            $(this).addClass('hide');
        }
    });

     // $('.header-bottom-inner__search form input.sr').on('mouseout', function(){
     //    var a=$(this).val();
     //    if(a==""){
     //       $('.header-bottom-inner__search form span.srs').removeClass('hide'); 
     //    }
     //    else {
     //        $('.header-bottom-inner__search form span.srs').addClass('hide');
     //    }
     // });

    $('.header-bottom-inner__search form input.sr').keypress(function(){
        if($(this).val()==""){
            if ($(this).hasClass('show')) {
                 $('.header-bottom-inner__search form span.srs').addClass('hide');
            }
        }
    });
			
var mql = window.matchMedia('all and (max-width: 950px)');

	if(mql.matches){
		$('.header-bottom-inner__menu ul').appendTo($('.mmenu'));
		$('.burger').addClass('show');
    }
    else {
    	$('.mmenu ul').appendTo($('.header-bottom-inner__menu'));
    }


    $('.get-slider').owlCarousel({
    loop:true,
    margin:22,
    nav:true,
    dots:false,
    navSpeed:500,
    navText: ["<img src='img/nprev.svg'>","<img src='img/nnext.svg'>"],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        426:{
            items:1,
            nav:false,
            margin:10
        },
        767:{
            items:2,
            nav:false
        },
        951:{
        	items:3,

        	center:true
        },
        1024:{
            items:4
        }
    }
	});

	$('.friend-slider').owlCarousel({
    loop:true,
    margin:75,
    nav:true,
    dots:false,
    navSpeed:1000,
    /*autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,*/
    navText: ["<img src='img/nprev.svg'>","<img src='img/nnext.svg'>"],
    responsive:{
        0:{
            items:2,
            nav:false,
            margin:0
        },
        375:{
            items:2,
            nav:false
        },
        600:{
            items:3
        },
        950:{
        	items:4,
        	margin:25
        },
        1024:{
            items:5
        },
        1025:{
            items:6
        }
    }
	});

	$('.comment-slider').owlCarousel({
    loop:true,
    margin:40,
    nav:true,
    dots:false,
    navSpeed:1000,
    autoplay:true,
    autoplayTimeout:8000,
    autoplayHoverPause:true,
    navText: ["<img src='img/nprev.svg'>","<img src='img/nnext.svg'>"],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2
        },
        951:{
            items:2,
            margin:20
        },
        1024:{
        	items:3
        }

    }
	});

  // $(function () {
  //   var austDay = new Date();
  //   austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
  //   $('#defaultCountdown').countdown({until: austDay, padZeroes: true});
  //   $('#year').text(austDay.getFullYear());
  // });


  $(document).ready(function() {
            var clock;
            // var time_value =$('.tic-timer').val();
            clock = $('.clock').FlipClock({
                clockFace: 'DailyCounter',
                language:'ru-ru',
                autoStart: false,
                callbacks: {
                    stop: function() {
                        $('.message').html('The clock has stopped!')
                    }
                }
            });
                    
            clock.setTime(5184000);   //in ceconds
            clock.setCountdown(true);
            clock.start();

        });


});