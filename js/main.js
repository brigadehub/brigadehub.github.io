;(function ($) {
  var App = { init: function () {
      App.ScrollToSomeplace() // script resposible for smooth scrolling after clicking on menu item
      App.Nivo_Lightbox() // lightbox
      App.Elements_animation() // animations
    },
    ScrollToSomeplace: function () {
      $('.go_to_home').click(function () {
				$.scrollTo('.hero_fullscreen', 1000, {
					easing: 'easeInOutExpo',
					'axis': 'y'
				});
				return false
			})

      var lastId
      var topMenu = $('.navigation_js, #mobile_menu_content')
      var menuItems = topMenu.find('a')
			menuItems.push($('.cta_button_area > a')[0])
      var scrollItems = menuItems.map(function () {
        var item = $($(this).attr('href'))
        if (item.length) { return item; }
      })

      menuItems.click(function (e) {
        var href = $(this).attr('href'),
          offsetTop = href === '#' ? 0 : $(href).offset().top - navbarheight + 25
        $('html, body').stop().animate({ scrollTop: offsetTop  }, 1000, 'easeInOutExpo')
        e.preventDefault()
      })

      $(window).scroll(function () {
        // Get container scroll position
        var fromTop = $(this).scrollTop() + navbarheight

        // Get id of current scroll item
        var cur = scrollItems.map(function () {
          if ($(this).offset().top < fromTop)
            return this
        })
        // Get the id of the current element
        cur = cur[cur.length - 1]
        var id = cur && cur.length ? cur[0].id : ''

        if (lastId !== id) {
          lastId = id
          // Set/remove active class
          menuItems
            .parent().removeClass('active')
            .end().filter('[href=#' + id + ']').parent().addClass('active')
        }
      })
    },
    // Elements Animation
    Elements_animation: function () {
      $('#more_info').waypoint(function () {
        setTimeout(function () {$('.content_anim1').addClass('animated fadeInUp')}, 0)
        setTimeout(function () {$('.content_anim2').addClass('animated fadeInUp')}, 200)
        setTimeout(function () {$('.content_anim3').addClass('animated fadeInUp')}, 400)
      }, { offset: '50%' })

      $('#features').waypoint(function () {
        setTimeout(function () {$('.content_anim4').addClass('animated fadeInUp')}, 0)
        setTimeout(function () {$('.content_anim5').addClass('animated fadeInUp')}, 200)
        setTimeout(function () {$('.content_anim6').addClass('animated fadeInUp')}, 400)
        setTimeout(function () {$('.content_anim7').addClass('animated fadeInUp')}, 600)
      }, { offset: '50%' })

      $('#beta_testers').waypoint(function () {
        setTimeout(function () {$('.content_anim8').addClass('animated fadeInUp')}, 0)
        setTimeout(function () {$('.content_anim9').addClass('animated fadeInUp')}, 200)
        setTimeout(function () {$('.content_anim10').addClass('animated fadeInUp')}, 400)
        setTimeout(function () {$('.content_anim11').addClass('animated fadeInUp')}, 600)
        setTimeout(function () {$('.content_anim12').addClass('animated fadeInUp')}, 800)
        setTimeout(function () {$('.content_anim13').addClass('animated fadeInUp')}, 1000)
        setTimeout(function () {$('.content_anim14').addClass('animated fadeInUp')}, 1200)
      }, { offset: '50%' })

      $('#screenshots').waypoint(function () {
        setTimeout(function () {$('.content_anim15').addClass('animated fadeInUp')}, 0)
        setTimeout(function () {$('.content_anim16').addClass('animated fadeInUp')}, 200)
        setTimeout(function () {$('.content_anim17').addClass('animated fadeInUp')}, 400)
        setTimeout(function () {$('.content_anim18').addClass('animated fadeInUp')}, 600)
        setTimeout(function () {$('.content_anim19').addClass('animated fadeInUp')}, 800)
        setTimeout(function () {$('.content_anim20').addClass('animated fadeInUp')}, 1000)
        setTimeout(function () {$('.content_anim21').addClass('animated fadeInUp')}, 1200)
        setTimeout(function () {$('.content_anim22').addClass('animated fadeInUp')}, 1400)
        setTimeout(function () {$('.content_anim23').addClass('animated fadeInUp')}, 1600)
        setTimeout(function () {$('.content_anim24').addClass('animated fadeInUp')}, 1800)
        setTimeout(function () {$('.content_anim25').addClass('animated fadeInUp')}, 2000)
      }, { offset: '50%' })

      $('#reviews').waypoint(function () {
        setTimeout(function () {$('.content_anim26').addClass('animated fadeInUp')}, 0)
      }, { offset: '50%' })

      $('#faq').waypoint(function () {
        setTimeout(function () {$('.content_anim27').addClass('animated fadeInUp')}, 0)
        setTimeout(function () {$('.content_anim28').addClass('animated fadeInUp')}, 200)
        setTimeout(function () {$('.content_anim29').addClass('animated fadeInUp')}, 400)
      }, { offset: '50%' })
    },

    // Nivo Lightbox
    Nivo_Lightbox: function () {
      $('.screenshots_gallery a').nivoLightbox({
        effect: 'slideDown'
      })
    }
  }

  $(function () {
    App.init()
    $(window).resize()
  })
})(jQuery);
