$(document).ready(function() {

  $("#form button").click(function() {
      var email = $('#form-mail').val();
      var phoneNumber = $('#form-phone').val();
      var set = $('#form-set').val();
      var spider = $('#form-spider').val();
    	var comment = $('#form-text').val();
      $.post('php/mail.php', {
          'email' : email,
          'phoneNumber' : phoneNumber,
          'set' : set,
          'spider' : spider,
        	'comment' : comment
      }, function (data) {
        if(data) {
          $('body').addClass('overflow');
          $('.modal-container, .modal-overlay, .modal-window').addClass('container-vissible');
          $('.close-modal').addClass('modal-icon-vissible');
        }
      });

      return false;
  });

});
