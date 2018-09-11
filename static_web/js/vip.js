		$(function(){
			var num=0
			var index=0
			$('.nav-choose ul').children().click(function(){
				num=$(this).index();
				// $(this).children().css('color','#3E1909')
				$(this).addClass('li-style').siblings().removeClass('li-style')
				$(this).siblings().children().css('color','#3E1909')
				$('.show').children().eq(num).show().siblings().hide();
				var Height= $('.show').children().eq(num).height()+250+'px'
				console.log(Height)
				$('.main').css('height',Height);

			})
			$('.nav-choose ul').children().hover(function(){
				index= $(this).index()
				$(this).children().css('color','#FAD730')
			},function(){
				if(num==index){
					$(this).children().css('color','#FAD730')
				}else{
					$(this).children().css('color','#3E1909')
				}
			})
		})