// aos
AOS.init({
	duration: 1000,
	once: true
})

$(document).ready(function () {

	$('.site-menu-toggle').click(function () {
		var $this = $(this)
		if ($('body').hasClass('menu-open')) {
			$this.removeClass('open')
			$('.js-site-navbar').fadeOut(400)
			$('body').removeClass('menu-open')
		} else {
			$this.addClass('open')
			$('.js-site-navbar').fadeIn(400)
			$('body').addClass('menu-open')
		}
	})


	var $root = $('html, body')

	$('a.smoothscroll[href^="#"]').click(function () {
		$root.animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 500)

		return false
	})



	$('nav .dropdown').hover(function () {
		var $this = $(this)
		$this.addClass('show')
		$this.find('> a').attr('aria-expanded', true)
		$this.find('.dropdown-menu').addClass('show')
	}, function () {
		var $this = $(this)
		$this.removeClass('show')
		$this.find('> a').attr('aria-expanded', false)
		$this.find('.dropdown-menu').removeClass('show')
	})

	$(".animsition").animsition()

	$(".download-btn").on('click', function () {
		var extension = navigator.platform.indexOf('Mac') > -1 ? 'dmg' : navigator.platform.indexOf('Win') > -1 ? 'exe' : 'deb'
		location.href = 'https://download.silexterminal.com/silex.' + extension
	})

	var logo = 'full'
	var logoOnlyScroll = 200
	var noLogoScroll = 4700
	$(window).on('scroll', function () {
		var scrollTop = $(document).scrollTop()
		if ((scrollTop > logoOnlyScroll && logo === 'full') || (scrollTop < noLogoScroll && logo === 'gone')) {
			logo = 'only'
			$('.logo-full').hide()
			$('.logo-only').show()
		} else if (scrollTop < 200 && logo === 'only') {
			logo = 'full'
			$('.logo-only').hide()
			$('.logo-full').show()
		} else if (scrollTop > noLogoScroll && logo === 'only') {
			logo = 'gone'
			$('.logo-only').hide()
			$('.logo-full').hide()
		}
	})

	$('.bgcolor').css('background', '#58C4C5')
	$(window).scroll(function () {
		if ($('#p-landing').is(':in-viewport')) {
			$('.bgcolor').css('background', '#58C4C5')
		}
		else if ($('#p-features').is(':in-viewport')) {
			$('.bgcolor').css('background', '#04A1D9')
		}
		else if ($('#p-process').is(':in-viewport')) {
			$('.bgcolor').css('background', '#AED8E6')
		}
		else if ($('#p-about').is(':in-viewport')) {
			$('.bgcolor').css('background', '#80CBE6')
		}
		else if ($('#p-team').is(':in-viewport')) {
			$('.bgcolor').css('background', '#80CBE6')
		}
		else if ($('#p-faq').is(':in-viewport')) {
			$('.bgcolor').css('background', '#04A1D9')
		}
		else if ($('#p-blog').is(':in-viewport')) {
			$('.bgcolor').css('background', '#58C4C5')
		}
		else {
			$('.bgcolor').css('background', '#58C4C5')
		}
	})

	$(".menu").click(function () {
		$('.site-menu-toggle').removeClass('open')
		$('.js-site-navbar').fadeOut(400)
		$('body').removeClass('menu-open')
	})
	var image = document.getElementsByClassName('mockup');
	new simpleParallax(image);
})