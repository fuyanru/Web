$(function(){
			$('.foot-nav ul').children().on('click',function(){
				$(this).addClass('word-style').siblings().removeClass('word-style')
				$('.box').eq($(this).index()).css('display','block').siblings().css('display','none')
			})
		})