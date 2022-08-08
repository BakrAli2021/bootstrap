$(function(){
    'use strict';
    $('.navbar .navbar-collapse ul li').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    //adjst slider hieght;
    var windowheight =$(window).height(),
    upperheight = $('.upper_bar').innerHeight(),
    navheight =$('.navbar').innerHeight();
    $('.slider,.carousel-item').height(windowheight-(upperheight+navheight)); 
    //featured work shuffel

    $('.work-feature ul li').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');

        if($(this).data('class')==='all'){
            $('.shuffel-img .col-sm').css('opacity','1');
        } else {
            $('.shuffel-img .col-sm').css('opacity','.09');
            $($(this).data('class')).parent().css('opacity',1);
        }
       
    });
    /*contact */
    $('.contact .col-4 .btn-contact').hover().css('cursor', 'pointer')
    
    $(".contact .col-4 .btn-contact").click(function(){
        $(".slideform").slideToggle("slow");
      });
      $('.slideup').click(function(){
          $(".slideform").slideUp("slow");
      });
      $('navbar ul li a').click(function(){
         console.log( $(this).data('scroll'));

      });
  });