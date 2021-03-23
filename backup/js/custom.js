;(function ($) {
  'use strict'

  $(window).scroll(function () {
    var scroll = $(window).scrollTop()
    var box = $('.header-text').height()
    var header = $('header').height()

    if (scroll >= box - header) {
      $('header').addClass('background-header')
    } else {
      $('header').removeClass('background-header')
    }
  })

  var $grid = $('.grid').isotope({
    itemSelector: '.all',
    percentPosition: true,
    masonry: {
      columnWidth: '.all',
    },
  })

  $('.Modern-Slider').slick({
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    dots: true,
    pauseOnDotsHover: true,
    cssEase: 'linear',
    // fade:true,
    draggable: false,
    prevArrow: '<button class="PrevArrow"></button>',
    nextArrow: '<button class="NextArrow"></button>',
  })

  $(function () {
    $('#tabs').tabs()
  })

  // Window Resize Mobile Menu Fix
  mobileNav()

  // Scroll animation init
  window.sr = new scrollReveal()

  // Menu Dropdown Toggle
  if ($('.menu-trigger').length) {
    $('.menu-trigger').on('click', function () {
      $(this).toggleClass('active')
      $('.header-area .nav').slideToggle(200)
    })
  }

  // Menu elevator animation
  $('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function () {
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash)
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
      if (target.length) {
        var width = $(window).width()
        if (width < 991) {
          $('.menu-trigger').removeClass('active')
          $('.header-area .nav').slideUp(200)
        }
        $('html,body').animate(
          {
            scrollTop: target.offset().top - 80,
          },
          700
        )
        return false
      }
    }
  })

  $(document).ready(function () {
    $(document).on('scroll', onScroll)

    //smoothscroll
    $('.scroll-to-section a[href^="#"]').on('click', function (e) {
      e.preventDefault()
      $(document).off('scroll')

      $('.scroll-to-section a').each(function () {
        $(this).removeClass('active')
      })
      $(this).addClass('active')

      var target = this.hash,
        menu = target
      var target = $(this.hash)
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: target.offset().top - 79,
          },
          500,
          'swing',
          function () {
            window.location.hash = target
            $(document).on('scroll', onScroll)
          }
        )
    })
  })

  function onScroll(event) {
    var scrollPos = $(document).scrollTop()
    $('.nav a').each(function () {
      var currLink = $(this)
      var refElement = $(currLink.attr('href'))
      if (
        refElement.position().top <= scrollPos &&
        refElement.position().top + refElement.height() > scrollPos
      ) {
        $('.nav ul li a').removeClass('active')
        currLink.addClass('active')
      } else {
        currLink.removeClass('active')
      }
    })
  }

  // Window Resize Mobile Menu Fix
  $(window).on('resize', function () {
    mobileNav()
  })

  // Window Resize Mobile Menu Fix
  function mobileNav() {
    var width = $(window).width()
    $('.submenu').on('click', function () {
      if (width < 767) {
        $('.submenu ul').removeClass('active')
        $(this).find('ul').toggleClass('active')
      }
    })
  }
})(window.jQuery)
