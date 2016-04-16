$(document).ready(function() {

	if(!isMobile.any) {
		new WOW().init({
			mobile: false
		});

		setInterval(function(){
			$('.btn-animation').each(animationButton);		
		}, 15000);
	}

	$("#slick").slick({
		slidesToShow: 1,
		speed: 300,
		slidesToScroll: 1,
		infinite: true,
		dots: true,
		arrows: false,
		touchMove: false
	});

	$(".mgf-link").magnificPopup()


	$('#worksheet label').on('click', function(){
		$('#worksheet label').removeClass('active');
		$(this).addClass('active');
	});

	$('.btn').on('focus', function(){
		$(this).trigger('blur');
	});

	$("#i-phone, #i-name").change(function() {
		$this = $(this);

		printValid($this);
	});

	$("#i-phone").mask("+7 (999) 999-99-99");

	$('#worksheet form').ajaxForm({
		url: "mail.php",

		beforeSubmit: function(data, $form) {
			var $name = $("#i-name"),
				$phone = $("#i-phone");
			
			printValid($name);
			printValid($phone);

			if( ! (valid($name) && valid($phone)) ) {
				alert("Одно из полей заполнено не верно!");
				return false;
			} else {
				alert("Анкета успешно отправлена!");
				$.magnificPopup.instance.close();
				$form.trigger('reset');
				$form.find('input').removeClass('.has-success');
				yaCounter36798385.reachGoal('form');
				return false;
			}
		},

		success: function(responseText, statusText, xhr, $form) {
			
		}

	});
});

function valid ($input) {
	if($input.val().length > 2) {
		return true;
	}

	return false;
}

function printValid($input) {

	if(!valid($input)) {
		$input.addClass("has-warning");
	} else {
		$input.removeClass("has-warning");
	}
}

function animationButton(index, element) {
	$e = $(element);

	$e.addClass('shake animated');
	setTimeout(function() {
		$e.removeClass('shake animated');
	}, 1000);
}