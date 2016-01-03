$(document).ready(function(){
    $('.spider').addClass('spider-appear');

  	$('.want-arrow').on('click', function(){
  		$('body,html').animate({
  			scrollTop: $(window).height(),
  		 	}, 700
  		);
  	});

  // -- modal window --
  $('#run-modal').on('click', function(){
    var phoneNumber = $('#form-phone').val();
    $.post('php/callback.php', {
        'phoneNumber' : phoneNumber
    }, function (data) {
      if(data) {
        $('body').addClass('overflow');
        $('.modal-container, .modal-overlay, .modal-window').addClass('container-vissible');
        $('.close-modal').addClass('modal-icon-vissible');
      }
    });
  });

  $('.modal-overlay, .close-modal, .close-icon').on('click', function(){
    $('body').removeClass('overflow');
    $('.modal-container, .modal-overlay, .modal-window').removeClass('container-vissible');
    $('.close-modal').removeClass('modal-icon-vissible');
  });

  // -- CHOOSE --
    $('.choose-icon').click(function(){
  		var val = $(this).data('value');
  		$('.form-select-choose option[value='+ val +']').attr('selected', 'selected').siblings().removeAttr('selected');
  	});

  $(document).on('click', '.choose-icon', function () {
          var current = $(this).data('id'),
          $target = $('.choose-active').filter('[data-id="' + current + '"]');
          $target_block = $('.choose-hover').filter('[data-id="' + current + '"]');

          $('.choose-active').removeClass('choose-click');
          $('.choose-hover').removeClass('choose-done');

          $target.addClass('choose-click');
          $target_block.addClass('choose-done');
      });

    // -- PLAN --
    $(document).on('click', '.plan-el', function () {
        var current_pl = $(this).data('id'),
        $target_pl = $('.plan-active').filter('[data-id="' + current_pl + '"]');

        $('.plan-el').removeClass('plan-add');
        $('.plan-active').removeClass('active-add');

        $(this).addClass('plan-add');
        $target_pl.addClass('active-add');
    });

    $('.plan-el').click(function(){
  		var val_pl = $(this).data('value');
  		$('.form-select-plan option[value='+ val_pl +']').attr('selected', 'selected').siblings().removeAttr('selected');
  	});


});
