;(function(d,w,$) {
	$('d').ready(function(){
		$('#hMenuIcon').click(function(){
			$('#bar1,#bar2,#bar3').removeClass('animation');
			$(this).hide();
			$('#hClose,#hMenu').show();
			$('#lo').addClass('open');
		})
		$('#hClose').click(function(){
			$('#hMenuIcon').show();
			$('#hClose,#hMenu').hide();
			$('#lo').removeClass('open');
		})
		$('#tBut').click(function(){$('#aboutUs').show().focus()});
		$('#menuAus').click(function(){$('#aboutUs').show().focus()});
		$('#hmenuAus').click(function(){$('#aboutUs').show().focus()});
		$('#auCl').click(function(){$('#aboutUs').hide()});
		$('#arrow').click(function(){$('#show').toggle()});
		$('#mShow').click(function(){$('#show').toggle()});
	})
})(document,window,jQuery);