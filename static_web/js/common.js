$(function(){
	//导航栏吸顶
	$('.nav').css('position','fixed')
	$('.bg_about').css('top','120px')

	$('.trunTop').click(function(){
		$('html').animate({scrollTop: '0px'}, 800);
	});  
	$('.warp').children().hover(function(){
		$(this).css('opacity','0.7')
	},function(){
		$(this).css('opacity','1')
	})
	$('.nav_menus ul').eq(0).children().hover(function(){
		$(this).css('background','#F1C42B');
		$(this).children().css('color','#523528')
		if($(this).index()==0){
			console.log('222')
			$('.submenu').show()
		}
	},function(){
		$(this).css('background','');
		$('.submenu').hide()
		$(this).children().css('color','white')
	})

	$('.nav_menus ul').eq(1).children().hover(function(){
		$(this).css('background','rgba(250,214,85,0.6)');
	},function(){
		$(this).css('background','rgba(250,214,85,1)');
	})

	$('.subnav ul').children().hover(function(){
		console.log('aaa')
		$(this).find('a').css('opacity','0.5')
	},function(){
		$(this).find('a').css('opacity','1')
	})
	$('.message').find('a').hover(function(){
		$(this).css('opacity','0.7')
	},function(){
		$(this).css('opacity','1')
	})
})	
	