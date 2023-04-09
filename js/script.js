$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,     
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                    arrows: false
            }
            }
        ]
      });

      
      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });





      
      $('.catalog-item__link').each(function(i) {
        $(this).on('click', function(e){
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
      });
      
      $('.catalog-item__back').each(function(i) {
        $(this).on('click', function(e){
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
      });





      //modal page
      $('[data-modal=consultation]').on('click', function(){
        $('.overlay, #consultation').fadeIn();
        $('.modal__close').on('click', function(){
          $('.overlay, #consultation, #thanks, #order').fadeOut();
        });
      
        $('.catalog-item__btn').each(function(i){    //получаем текст который идет в карточке товара заголовок
          $(this).on('click', function(){
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn();
          });
        });
      });





      $('input[name=phone]').mask("+375 (99) 999-99-99");
      
      // ФОРМЫ с помощью скрипто плагина 
    
      function valideForms(form) {
        $(form).validate({
          rules: {
            name: {
              required: true,
              minlength: 2
            },
            email: {
              required: true,
              email: true
            },
            phone: 'required'
          },
          messages: {
            name: {
             required: "Пожалуйста, введите своё имя",
              minlength: jQuery.validator.format("Введите {0} символа!"),
            },
            phone: "Пожалуйста введите свой номер телефона",
            email: {
              required: "Пожалуйста введите свою почту",
              email: "Неправильно введен формат почты"
            }
          }
        });   
      };


      valideForms('#consultation-form');
      valideForms('#consultation form');
      valideForms('#order form');

   //scroll up



      $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
          $('.pageup').fadeIn();
        } else {
          $('.pageup').fadeOut();
        }

        $(window).ready(function() {
          $(".pageup").click(function () {
          var elementClick = $(this).attr("href")
          var destination = $(elementClick).offset().top;
          jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1200);
          return false;
          });
          });



      })

  


  });



