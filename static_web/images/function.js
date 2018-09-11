if (isload) {
    loading();
}
$(document).ready(function() {
    menu();
    backtop();

});
if ($(window).width() > 1024) {
    $('.submenu').click(function (e) {
        e.preventDefault();
        console.log('123');
        window.location.href = '/history';
        return false;
    });
}else{

}

var isIndex = false;
window.onresize = function(event) {
    var pdh = $( window ).height()-$('header').height();
    $(".hero-banner.desktop .slide .bgImg").css('padding-bottom',pdh);

    var distanceTop = $(document).scrollTop();
    menu();
    if ($(window).width() > 1024) {
        // other page check header
        if(isIndex == false && distanceTop == 0){
            $('header').removeClass('fixed');
            $('.hero-banner').css("margin-top","0");
            setTimeout(function () {
                $('.page-content').css("padding-top", $("header").outerHeight());
                $('.hero-sub-banner').css("margin-top","0");
                $('.hero-desc-banner').css("margin-top","0");
            }, 250);
        }
        if ($("header").css("bottom") == "0px") {
            setTimeout(function () {
                $('.hero-banner').css("margin-top","0");
                $('.hero-sub-banner').css("margin-top","0");
                $('.hero-desc-banner').css("margin-top","0");

            }, 50);
        }
    }
    if ($("header").css("bottom") == 'inherit '){
        console.log('123');

    }
};

function loading() {
    var loadedCount = 0;
    var imagesToLoad = $('img').length;
    var loadingProgress = 0;
    $('img').imagesLoaded({
        background: true
    }).progress(function(instance, image) {
        // setTimeout(loadProgress,3550);
        loadProgress();
    });
    function loadProgress(imgLoad, image) {
        loadedCount++;
        loadingProgress = (loadedCount / imagesToLoad);
        TweenLite.to(progressTl, 0.7, {
            progress: loadingProgress,
            ease: Linear.easeNone
        });
    }
    var progressTl = new TimelineMax({
        paused: true,
        onUpdate: progressUpdate,
        onComplete: loadComplete
    });
    progressTl
        .to($('.progress span'), 1, {
            width: 140,
            ease: Linear.easeNone
        });
    function progressUpdate() {
        loadingProgress = Math.round(progressTl.progress() * 100);
        $(".txt-perc").text(loadingProgress + '%');
    }
    function loadComplete() {
        var preloaderOutTl = new TimelineMax();
        preloaderOutTl
            .to($('.progress'), 0.3, {y: 100,autoAlpha: 0,ease: Back.easeIn})
            .to($('.txt-perc'), 0.3, {y: 100,ease: Back.easeIn})
            .set($('body'), {className: '-=is-loading'})
            .to($('#preloader'), 1, {yPercent: 100,ease: Power4.easeInOut},0.2)
            .set($('#preloader'), {className: '+=is-hidden'})
        return preloaderOutTl;
    }
}
var isIndex = false;
function menu() {
    $("#navigation1").navigation({
        offCanvasSide: "right"
    });
    if ( $('.hero-banner').length >= 1){
        $("header").css("bottom",0);
        isIndex = true;
    } else {
        isIndex = false;
        $("header").css("bottom",'inherit');
        $('.page-content').css("padding-top", $("header").outerHeight());
    }
    if ($(window).width()<=1024){

        $('.hero-banner').css("margin-top", $("header .navigation-portrait").outerHeight());
        $('.hero-desc-banner').css("margin-top", $("header .navigation-portrait").outerHeight());
        $('.hero-sub-banner').css("margin-top", $("header .navigation-portrait").outerHeight());
        $('.map .page-content').css("margin-top", $("header .navigation-portrait").outerHeight());
        $('.page-content').css("padding-top","0");
    }
    $(window).scroll(function() {
        if ($(window).width() > 1024) {
            // index page check head
            var distanceTop = $(document).scrollTop();
            // distanceTop !=0 ||
            if (distanceTop >= $('.hero-banner').height()){
                $('header').addClass('fixed');
                $('.page-content').css("padding-top", $("header").outerHeight());
            }
            else{
                console.log('remove')
                $('header').removeClass('fixed');
                $('.hero-banner').css("margin-top","0");
                $('.hero-sub-banner').css("margin-top","0");
                $('.hero-desc-banner').css("margin-top","0");
                // $('.page-content').css("padding-top", $("header").outerHeight());
            }
            // other page check header
            if(isIndex == false && distanceTop == 0){
                $('header').removeClass('fixed');

                setTimeout(function () {
                    $('.page-content').css("padding-top", $("header").outerHeight());
                }, 250);
            }
            if ($("header").css("bottom") == "0px") {
            setTimeout(function () {
                $('.hero-banner').css("margin-top","0");
                $('.hero-sub-banner').css("margin-top","0");
                $('.hero-desc-banner').css("margin-top","0");

            }, 50);
        }
        }else{
        }
    });

}
function herobanner() {
    if ($(window).width() > 1024) {
        $('.arrow-wrap').css("height",$(".hero-banner .slide .bgImg").outerHeight()*1.1);
    }else{
        $('.arrow-wrap').css("height",$(".hero-banner.mobile").outerHeight()*1);
    }
    $('.arrow').click(function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: $('.page-content').offset().top }, 1000);
    });
    $('.hero-banner .slider').slick({
        dots: true,
        speed: 800,
        arrows: false,
        autoplaySpeed: 5000,
        autoplay:true,
        fade: true,
        infinite: false,
        onInit: function(){
            // This runs after the slickgrid is first initialized.
            this.$list.css('height',this.$slider.parents('.inner').outerHeight(true))
        }
    });
}

function indexproduct_slider() {
    $('.product-slider').slick({
        dots: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: true,
        fade: false,
        infinite: false,
        responsive: [{
        breakpoint: 800,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: false
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
}
function product_slider() {
    $('.product-slider').slick({
        dots: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: true,
        fade: false,
        infinite: false,
        responsive: [
        {
        breakpoint: 800,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false
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
}
function news_slider() {
    $('.news-slider').slick({
        dots: true,
        speed: 500,
        arrows: false,
        fade: false,
        infinite: false
    });
}
function indexnews_slider() {
    if ($(window).width()<=800){
        $('.inews-slider').slick({
            // lazyLoad: 'ondemand',
            dots: false,
            speed: 500,
            slidesToShow: 1,
            arrows: true,
            fade: false,
            infinite: false,
            onInit: function() {
                console.log('slider was initialized');
            },
        });
    }
}
function icheck() {
    $('.icheck').iCheck({
        checkboxClass: 'icheckbox_flat',
        radioClass: 'iradio_flat'
    });
    $(function() {
        $('input, textarea').placeholder({customClass:'ie-placeholder'});
        var html;
        if (html) {
            $('<p class="note">' + html + '</p>').insertBefore('form');
        }
    });
}


function popup() {

    if ($(window).width() > 1024) {
        $('.popup').on('touchmove', function(event) {
            event.preventDefault();
        });
        $(".popup").fancybox({
            padding: 0,
            openEffect: 'none',
            closeEffect: 'none',
            scrolling: "no",
            fixedContentPos: 'true',
            width    : 540,
            maxWidth: '100%',
            maxHeight: 980,
            height: "auto",
            fitToView: false,
            autoSize: false, // shouldn't be true ?
            fixedBgPos: true,
            autoCenter: true,
            centerOnScroll: true,
            autoCenter: false,
            onComplete: function () {
                $.fancybox.update();
                $.fancybox.resize();
                $.fancybox.center();
            },
            helpers: {
                overlay: {
                    locked: false
                }
            },
            beforeShow: function() {
                $.fancybox.update()
                $('html').addClass('noscroll');
                $('body').css('overflowY', 'hidden');
            },
            afterClose: function() {
                $('html').removeClass('noscroll');
                $('body').css('overflowY', 'visible');
            }
        });
    }else{
         popscroll();
        $(".popup").fancybox({
            padding: 0,
            openEffect: 'none',
            closeEffect: 'none',
            scrolling: "yes",
            width: "100%",
            maxWidth: '100%',
            maxHeight:'100%',
            height: "auto",
            fitToView: false,
            autoSize: false, // shouldn't be true ?
            fixedBgPos: true,
            autoCenter: true,
            centerOnScroll: true,
            autoCenter: false,
            onComplete: function () {
                $.fancybox.update();
                $.fancybox.resize();
                $.fancybox.center();
            },
            helpers: {
                overlay: {
                    locked: false
                }
            },
            beforeShow: function() {
                $.fancybox.update();
                $('html').addClass('noscroll');
                $('body').css('overflowY', 'hidden');
            },
            afterShow: function(){
                $.smartScroll( $('.fancybox-overlay'), '.fancybox-wrap');
            },
            afterClose: function() {
                $('html').removeClass('noscroll');
                $('body').css('overflowY', 'visible');
            }
        });
    }
    $('.close').on('click', function() {
        $.fancybox.close();
    }); //on
}
function popscroll() {

    $.smartScroll = function(container, selectorScrollable) {
    if (!selectorScrollable || container.data('isBindScroll')) {
        return;
    }
    var isSBBrowser;
    var data = {
        posY: 0,
        maxscroll: 0
    };
    container.on({
        touchstart: function (event) {
            var events = event.touches && typeof event.touches[0] != 'undefined' ? event.touches[0] : event;

            var elTarget = $(event.target);

            if (!elTarget.length) {
                return;
            }

            var elScroll;

            if (elTarget.is(selectorScrollable)) {
                elScroll = elTarget;
            } else if ((elScroll = elTarget.parents(selectorScrollable)).length == 0) {
                elScroll = null;
            }

            if (!elScroll) {
                return;
            }


            data.elScroll = elScroll;


            data.posY = events.pageY;
            data.scrollY = elScroll.scrollTop();
            data.maxscroll = elScroll[0].scrollHeight - elScroll[0].clientHeight;
        },
        touchmove: function () {
            if(!data.elScroll){

                event.preventDefault();
                return;
            }
            if (data.maxscroll <= 0 || isSBBrowser) {
                event.preventDefault();
                return;
            }
            var elScroll = data.elScroll;
            var scrollTop = elScroll.scrollTop();
            var events = event.touches[0] || event;

            var distanceY = events.pageY - data.posY;

            if (isSBBrowser) {
                elScroll.scrollTop(data.scrollY - distanceY);
                elScroll.trigger('scroll');
                return;
            }
            if (distanceY > 0 && scrollTop == 0) {
                event.preventDefault();
                return;
            }
            if (distanceY < 0 && (scrollTop + 1 >= data.maxscroll)) {
                event.preventDefault();
                return;
            }
        },
        touchend: function () {
            data.maxscroll = 0;
        }
    });
        container.data('isBindScroll', true);
    };
}
function mscrollbar() {
    $(".scroll-wrap").mCustomScrollbar();
}


function tabs() {
    (function() {
        [].slice.call(document.querySelectorAll('.f-tab')).forEach(function(el) {
            new CBPFWTabs(el);
        });
    })();
}


function backtop() {
    $('.btn-btp').click(function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 800);
    });
}
function brandslider(){
    var t1 = new TouchSlider('slider', {
        duration: 500,
        interval: 5000,
        direction: 0,
        start:1,
        autoplay: false,
        align: 'center',
        mousewheel: false,
        mouse: true,
        fullsize: false
    });
    $(".brand-slider .swipe ul").addClass( "shows" );
    $('body').on('click','.brand-slider .swipe li', function(){
       var index = $(this).index();
       t1.slide(index);
    });
    console = window.console || {
        dir: new Function(),
        log: new Function()
    };

    var active = 0,
        as = document.getElementById('pagenavi').getElementsByTagName('a')||document.getElementsByClassName('.brand-slider .slide');
    for (var i = 0; i < as.length; i++) {
        (function() {
            var j = i;
            as[i].onclick = function() {
                t1.slide(j);
                return false;
            };
        })();
    }
    t1.on('before', function(m, n) {
        as[m].className = '';
        as[n].className = 'active';
    })
}


function formCheckingCompanyCountry(){

        var company="許留山";
        var oForm = document.getElementById('franchising_details');
         if(document.getElementById("form1").classList.contains("active")){
           company="Mango Cottage";
         }
        if(document.getElementById("form2").classList.contains("active")){
           company="許留山";
         }
        if(document.getElementById("form3").classList.contains("active")){
            company="黃記煌";
         }

          if(($('select[name=country]').val()== '中國大陸') && (company=="黃記煌")){
              console.log('cn');
              $(".form-personal").addClass('hide');
              $(".form-company").addClass('hide');
              $(".china").removeClass('hide');
              $(".contactus ul.form li.check").css('visibility','hidden')
              $("#add_city").addClass('hide');
          }
          else {
              $(".china").addClass('hide');
              $(".contactus ul.form li.check").css('visibility','visible')
              $("input#form-personal").iCheck('check').trigger('ifChecked')
              $("#add_city").removeClass('hide');
          }
}

function formstyle() {

  $(".country").change(function() {
    console.log("country changed");
      formCheckingCompanyCountry();
  });


    $(".form-personal").removeClass('hide');
    $("input#form-personal").on('ifChecked', function(event){
        $(".form-personal").removeClass('hide');
        $(".china").addClass('hide');
        $(".form-company").addClass('hide');
    });

    $("input#form-company").on('ifChecked', function(event){
        $(".form-company").removeClass('hide');
        $(".china").addClass('hide');
        $(".form-personal").addClass('hide');
    });

    $(".shoptype").click(function() {
        $(".shoptype").removeClass("active");
        $(this).addClass("active");
        formCheckingCompanyCountry();
    });


    'use strict';
    ;( function ( document, window, index )
    {
        var inputs = document.querySelectorAll( '.inputfile' );
        Array.prototype.forEach.call( inputs, function( input )
        {
            var label    = input.nextElementSibling,
                labelVal = label.innerHTML;

            input.addEventListener( 'change', function( e )
            {
                var fileName = '';
                if( this.files && this.files.length > 1 )
                    fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
                else
                    fileName = e.target.value.split( '\\' ).pop();

                if( fileName )
                    label.querySelector( 'span' ).innerHTML = fileName;
                else
                    label.innerHTML = labelVal;
            });

            // Firefox bug fix
            input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
            input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
        });
    }( document, window, 0 ));
}
function loadmore() {
    var controller = new ScrollMagic.Controller();
    // build scene
    var scene = new ScrollMagic.Scene({
            triggerElement: ".dynamicContent #loader",
            triggerHook: "onEnter",
            offset: 100,
        })
        .addTo(controller)
        .on("enter", function(e) {
            if (!$("#loader").hasClass("active")) {
                $("#loader").addClass("active");
                if (console) {
                    console.log("loading new items");
                }
                // simulate ajax call to add content using the function below
                setTimeout(addBoxes, 200, 2);
            }
        });

    // pseudo function to add new content. In real life it would be done through an ajax request.
    function addBoxes(amount) {
        for (i = 1; i <= amount; i++) {

            var $newElm = $('.row.template').clone();
            $newElm.removeClass('hidden').removeClass('template').fadeTo(0,0);
            $newElm.appendTo(".dynamicContent #content");
            $newElm.fadeTo(500, 1);
        }
        // "loading" done -> revert to normal state
        scene.update(); // make sure the scene gets the new start position
        $("#loader").removeClass("active");
    }
}

function formdone() {

    $('.customer_details form .btn').off('click').on('click', function(evt) {
        evt.preventDefault();

        var passed = true;
        var msgs = [];

        if( $('[name=name]', '.contactus form').val() ==''  ){
            passed = false;
            msgs.push('Please enter name');
        }

        if( $('[name=phone]', '.contactus form').val() ==''  ){
            passed = false;
            msgs.push('Please enter phone');
        }

        if(!passed){
            $('#popupmessage-false').find('.msg-wrap').html(
                msgs.join('<br />')
            );
            // $(msgs).map(function(idx, valueStr){
            //     return '<div>'+ valueStr + '</div>'
            // })
        }
        console.log(passed);
        $.fancybox.open((!passed ) ? '#popupmessage-false' : '#popupmessage-true', {
            padding: 0,
            openEffect: 'none',
            closeEffect: 'none',
            scrolling: "no",
            fixedContentPos: 'true',
            width: "auto",
            maxWidth: '100%',
            maxHeight: 980,
            height: "auto",
            fitToView: false,
            autoSize: false, // shouldn't be true ?
            fixedBgPos: true,
            autoCenter: true,
            centerOnScroll: true,
            autoCenter: false,
            onComplete: function () {
                $.fancybox.update();
                $.fancybox.resize();
                $.fancybox.center();
            },
            helpers: {
                overlay: {
                    locked: false
                }
            },
            afterShow: function() {
                $('.fancybox-skin').css('background', '#fff');
                $('a.fancybox-close').css('top', '-48px');
                $('a.fancybox-close').css('right', '0');
            }
        });
        $.fancybox.update();
    });
}
