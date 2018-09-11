$(function(){
	$('.row .right').find('a').click(function(){
		var Height=$(window).outerHeight()+'px'
		var Top=$(window).scrollTop()+'px'
		$('.flow').css({'height':Height,'top':Top})
		$('.flow').fadeIn(500)
		$('.flow-row').eq($('.row').find('a').index($(this))).fadeIn()

		$('.flow-row').eq($('.row').find('a').index($(this))).find('.box').children().addClass('move1').siblings().removeClass('move1')
		$("body").parent().css("overflow-y","hidden")
	})

	
})