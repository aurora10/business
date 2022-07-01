$(document).ready(function() {
  // MODAL
  var modalText = {
    story: {
      title: 'Product Story',
      tag: 'Wordpress Product Story Site.',
      detail: 'Showcase your product.',
      link: 'https://vigorous-hopper-66c724.netlify.app/'
    },
      restaurant: {
      title: 'Restaurant Site',
      tag: 'Wordpress Site.',
      detail:
        'A restaurant site built on Wordpress.',
      link: 'https://epic-torvalds-e1ddd3.netlify.app/'
    },
      influencer: {
      title: 'Instagram Influencer Blog',
      tag: 'Wordpress Site.',
      detail:'Lightweight blog for invluencer. ',
      link: 'https://objective-brattain-262fde.netlify.app/'
    },
    netware: {
      title: 'Frontend for Business ',
      tag: 'Startup landing page.',
      detail:'Landing page built with Bootstrap JS',
      link: 'https://admiring-perlman-4e6d1a.netlify.app/'
    },
    blog: {
      title: 'Blog - Tonsofthings ' ,
      tag: 'WHITE LABEL multi-user blog.',
      detail:
        'Tonsofthings blog built with Laravel Framework. Multi-role, mulit-user platform for blogging. Easily customizable for any look and feel.',
        link: 'https://tonsofthings.tk/',
    },
      minishop: {
      title: 'Minishop123.tk - E-commerce Store',
      tag: 'Computer Store with Backend.',
      detail:
        'Web Shop. Fully customizable. Secured with top Laravel technology',
      link: 'https://www.minishop123.tk/'
    },
    digital: {
      title: 'Creative digital agency',
      tag: 'Agency Landing Page.',
      detail: 'Creatieve digital agency',
        link: 'https://hopeful-wilson-ac3bfd.netlify.app/'
    },
    ideas: {
      title: 'Creative Ideas',
      tag: 'Product Awareness.',
      detail:' Work showcase for anything creative.',
        link: 'https://admiring-swartz-428a91.netlify.app/'

    },
    photo: {
      title: 'Photo Profile',
      tag: 'Freelance Photographer Profile Site.',
      detail: 'Theme for photographer work',
        link: 'https://dazzling-hermann-9ba306.netlify.app/'

    }
  };

  $('#gallery .button').on('click', function() {
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function() {
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
    slideWidth = 700,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;

  setDimensions();

  $('#next').click(function() {
    shiftSlide(-1);
  });
  $('#prev').click(function() {
    shiftSlide(1);
  });

  carousel.on('mousedown', function() {
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function() {
      dragEnd = event.pageX;
      $(this).css('transform', 'translateX(' + dragPos() + 'px)');
    });
    $(document).on('mouseup', function() {
      if (dragPos() > threshold) {
        return shiftSlide(1);
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1);
      }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1);
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup');
    carousel
      .off('mousemove')
      .addClass('transition')
      .css('transform', 'translateX(' + direction * slideWidth + 'px)');
    setTimeout(function() {
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition');
      carousel.css('transform', 'translateX(0px)');
    }, 700);
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').text(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag);
    if (modalText[id].link)
      $('#modal .button')
        .addClass('visible')
        .parent()
        .attr('href', modalText[id].link);



    $.each($('#modal li'), function(index, value) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($('#modal .slide'), function(index, value) {
      $(this).css({
        background:
          "url('img/slides/" + id + '-' + index + ".jpg') center center/cover",
        backgroundSize: 'cover'
      });
    });
  }
});
