$(document).ready(function() {
    
    $('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
    
   $( '.gallery1' ).click( function( e ) {
        e.preventDefault();
        $.swipebox( [
            { href:'img/sovet/1.jpg', title:'' }, 
            { href:'img/sovet/2.jpg', title:'' },
            { href:'img/sovet/3.jpg', title:'' }, 
            { href:'img/sovet/4.jpg', title:'' },
            { href:'img/sovet/5.jpg', title:'' }, 
            { href:'img/sovet/6.jpg', title:'' },
            { href:'img/sovet/7.jpg', title:'' }, 
            { href:'img/sovet/8.jpg', title:'' },
            { href:'img/sovet/9.jpg', title:'' }
        ] );
    } );
    $( '.gallery2' ).click( function( e ) {
        e.preventDefault();
        $.swipebox( [
            { href:'img/svetelka/1.jpg', title:'' }, 
            { href:'img/svetelka/2.jpg', title:'' },
            { href:'img/svetelka/3.jpg', title:'' }, 
            { href:'img/svetelka/4.jpg', title:'' },
            { href:'img/svetelka/5.jpg', title:'' }, 
            { href:'img/svetelka/6.jpg', title:'' },
            { href:'img/svetelka/7.jpg', title:'' }, 
            { href:'img/svetelka/8.jpg', title:'' }
        ] );
    } );
    $( '.gallery3' ).click( function( e ) {
        e.preventDefault();
        $.swipebox( [
            { href:'img/glina/1.jpg', title:'' }, 
            { href:'img/glina/2.jpg', title:'' },
            { href:'img/glina/3.jpg', title:'' }, 
            { href:'img/glina/4.jpg', title:'' },
            { href:'img/glina/5.jpg', title:'' }, 
            { href:'img/glina/6.jpg', title:'' },
            { href:'img/glina/7.jpg', title:'' }, 
            { href:'img/glina/8.jpg', title:'' },
            { href:'img/glina/9.jpg', title:'' }
        ] );
    } );
    $( '.gallery4' ).click( function( e ) {
        e.preventDefault();
        $.swipebox( [
            { href:'img/office/1.jpg', title:'' }, 
            { href:'img/office/2.jpg', title:'' },
            { href:'img/office/3.jpg', title:'' }, 
            { href:'img/office/4.jpg', title:'' },
            { href:'img/office/5.jpg', title:'' }, 
            { href:'img/office/6.jpg', title:'' },
            { href:'img/office/7.jpg', title:'' }, 
            { href:'img/office/8.jpg', title:'' },
            { href:'img/office/9.jpg', title:'' },
            { href:'img/office/10.jpg', title:'' },
            { href:'img/office/11.jpg', title:'' },
            { href:'img/office/12.jpg', title:'' },
            { href:'img/office/13.jpg', title:'' },
            { href:'img/office/14.jpg', title:'' }
        ] );
    } );
    
    $('.slider').bxSlider({
        pager: false
    });
    
    $('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
	});
    
    $("a[href*='#']").mPageScroll2id();
    
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "/mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});
});